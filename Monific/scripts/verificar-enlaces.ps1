<#
.SYNOPSIS
  Verifica los wikilinks de una wiki de Black & Orange.

.DESCRIPTION
  Valida la capa de enlaces segun ADR-004: los enlaces son wikilinks, cortos dentro de una
  misma wiki y con ruta completa desde la raiz de la boveda cuando cruzan de una wiki a otra.

  Comprueba:
    - Enlaces rotos (wikilink cuyo destino no existe en la boveda)
    - Notas huerfanas (paginas .md sin ningun enlace entrante)
    - Paginas sin seccion "## Relacionado"
    - Copias de conflicto de Drive
    - Carpetas .git dentro del arbol de Drive (no deben existir)

.PARAMETER WikiPath
  Carpeta de la wiki a verificar. Por defecto, la carpeta actual.

.PARAMETER VaultRoot
  Raiz de la boveda de Obsidian. Por defecto se detecta subiendo hasta "Black and Orange".

.PARAMETER IncludeRaw
  Incluye las carpetas de fuentes crudas (raw/, 90-raw/, drive-download-*) en el analisis.
  Por defecto se excluyen: son fuentes inmutables, no conocimiento enlazado.

.EXAMPLE
  .\scripts\verificar-enlaces.ps1

.EXAMPLE
  .\scripts\verificar-enlaces.ps1 -WikiPath "." -IncludeRaw
#>
[CmdletBinding()]
param(
    [string]$WikiPath = ".",
    [string]$VaultRoot = "",
    [switch]$IncludeRaw
)

$ErrorActionPreference = "Stop"

$wiki = (Resolve-Path $WikiPath).Path

# --- Localizar la raiz de la boveda -----------------------------------------
if ([string]::IsNullOrWhiteSpace($VaultRoot)) {
    $probe = Get-Item $wiki
    while ($null -ne $probe -and $probe.Name -ne "Black and Orange") { $probe = $probe.Parent }
    if ($null -eq $probe) {
        Write-Host "No se encontro la raiz 'Black and Orange'. Se usa la wiki como raiz." -ForegroundColor Yellow
        $vault = $wiki
    } else {
        $vault = $probe.FullName
    }
} else {
    $vault = (Resolve-Path $VaultRoot).Path
}

Write-Host ""
Write-Host "Wiki   : $wiki"
Write-Host "Boveda : $vault"
Write-Host ""

# --- Filtro de exclusion ----------------------------------------------------
$excluded = @('\.git\', '\.obsidian\', '\node_modules\', '\.claude\', '\.codex\', '\.agents\')
if (-not $IncludeRaw) {
    $excluded += @('\raw\', '\90-raw\', 'drive-download', '\_extractos\', '\tmp\', '\outputs\')
}
function Test-Excluded([string]$path) {
    foreach ($p in $excluded) { if ($path.Contains($p)) { return $true } }
    return $false
}

# --- Indice de la boveda: basename -> rutas ---------------------------------
$vaultFiles = Get-ChildItem -Path $vault -Filter *.md -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object { -not (Test-Excluded $_.FullName) }

$byName = @{}
foreach ($f in $vaultFiles) {
    $key = $f.BaseName.ToLowerInvariant()
    if (-not $byName.ContainsKey($key)) { $byName[$key] = New-Object System.Collections.ArrayList }
    [void]$byName[$key].Add($f.FullName)
}

$byRelPath = @{}
foreach ($f in $vaultFiles) {
    $rel = $f.FullName.Substring($vault.Length).TrimStart([char]92, [char]47).Replace([char]92, [char]47)
    $byRelPath[$rel.ToLowerInvariant()] = $f.FullName
    $stripped = $rel -replace '\.md$', ''
    $byRelPath[$stripped.ToLowerInvariant()] = $f.FullName
}

# Obsidian tambien resuelve wikilinks hacia adjuntos: [[raw/documentos/algo.docx]].
# Se indexan los archivos que NO son .md para no reportarlos como enlaces rotos.
# Se buscan desde la wiki, no desde toda la boveda, porque son miles.
# Ojo: aqui NO se aplica el filtro de raw/, porque las fuentes crudas SI son destino
# legitimo de un wikilink — tanto los adjuntos (.docx, .pdf) como los .md de raw/.
# Se indexan solo para RESOLVER enlaces; no entran al conjunto de paginas analizadas.
# Solo se saltan las carpetas de infraestructura.
$attachments = Get-ChildItem -Path $wiki -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        -not $_.FullName.Contains('\.git\') -and
        -not $_.FullName.Contains('\.obsidian\') -and
        -not $_.FullName.Contains('\node_modules\')
    }
foreach ($a in $attachments) {
    $rel     = $a.FullName.Substring($vault.Length).TrimStart([char]92, [char]47).Replace([char]92, [char]47)
    $relWiki = $a.FullName.Substring($wiki.Length).TrimStart([char]92, [char]47).Replace([char]92, [char]47)

    # Cada archivo se indexa por cuatro claves: ruta desde la boveda y ruta desde la wiki,
    # cada una con y sin la extension .md (los wikilinks a paginas se escriben sin ella).
    $claves = @(
        $rel,
        $relWiki,
        ($rel     -replace '\.md$', ''),
        ($relWiki -replace '\.md$', '')
    )
    foreach ($k in $claves) {
        $kk = $k.ToLowerInvariant()
        if (-not $byRelPath.ContainsKey($kk)) { $byRelPath[$kk] = $a.FullName }
    }

    foreach ($n in @($a.Name, $a.BaseName)) {
        $nn = $n.ToLowerInvariant()
        if (-not $byName.ContainsKey($nn)) { $byName[$nn] = New-Object System.Collections.ArrayList }
        if (-not $byName[$nn].Contains($a.FullName)) { [void]$byName[$nn].Add($a.FullName) }
    }
}

# --- Paginas de esta wiki ---------------------------------------------------
$wikiFiles = @($vaultFiles | Where-Object { $_.FullName.StartsWith($wiki, [System.StringComparison]::OrdinalIgnoreCase) })
Write-Host ("Paginas analizadas : {0}   (boveda completa: {1})" -f $wikiFiles.Count, $vaultFiles.Count)

function Get-Rel([string]$full) {
    return $full.Substring($vault.Length).TrimStart([char]92, [char]47)
}

# --- Recorrer enlaces -------------------------------------------------------
$broken   = New-Object System.Collections.ArrayList
$noRel    = New-Object System.Collections.ArrayList
$incoming = @{}
$totalLinks = 0
$rx = [regex]::new('\[\[([^\]\|#]+)(?:#[^\]\|]*)?(?:\|[^\]]*)?\]\]')

foreach ($f in $wikiFiles) {
    $text = Get-Content -LiteralPath $f.FullName -Raw -Encoding UTF8 -ErrorAction SilentlyContinue
    if ($null -eq $text) { $text = "" }

    if ($text -notmatch '(?m)^##\s+Relacionad') { [void]$noRel.Add($f) }

    # Obsidian no convierte en enlace lo que va dentro de codigo. Se quitan los bloques
    # cercados y los tramos de codigo en linea antes de buscar wikilinks, para no reportar
    # como roto un ejemplo escrito entre comillas invertidas.
    $text = [regex]::Replace($text, '(?s)```.*?```', '')
    $text = [regex]::Replace($text, '`[^`\r\n]*`', '')

    foreach ($m in $rx.Matches($text)) {
        $target = $m.Groups[1].Value.Trim()
        # Algunas paginas escapan el corchete de cierre: [[ruta/archivo.docx\]].
        # La barra invertida sobrante no es parte del destino.
        $target = $target.TrimEnd([char]92)
        if ([string]::IsNullOrWhiteSpace($target)) { continue }
        $totalLinks++

        $key = ($target -replace '\.md$', '').ToLowerInvariant()
        $resolved = $null

        if ($byRelPath.ContainsKey($key)) {
            $resolved = $byRelPath[$key]
        } else {
            $parts = $key -split '/'
            $leaf = $parts[$parts.Length - 1]
            if ($byName.ContainsKey($leaf)) {
                $cands = $byName[$leaf]
                # Obsidian resuelve el wikilink corto por la ruta mas cercana al archivo que enlaza.
                # Hay nombres que se repiten entre wikis (index, log, las plantillas del kit), asi que
                # hay que preferir el candidato de ESTA wiki antes de caer al primero de la boveda.
                $resolved = $null
                foreach ($c in $cands) {
                    if ($c.StartsWith($wiki, [System.StringComparison]::OrdinalIgnoreCase)) { $resolved = $c; break }
                }
                if ($null -eq $resolved) {
                    foreach ($c in $cands) {
                        if ($c.StartsWith($f.DirectoryName, [System.StringComparison]::OrdinalIgnoreCase)) { $resolved = $c; break }
                    }
                }
                if ($null -eq $resolved) { $resolved = $cands[0] }
            }
        }

        if ($null -eq $resolved) {
            # Las plantillas y la documentacion de convenciones contienen marcadores de
            # posicion ([[pagina]], [[nombre-apellido]], [[...]]) que no son enlaces rotos.
            $lower = $f.FullName.ToLowerInvariant()
            $esEjemplo = $lower.Contains('plantilla') -or $lower.Contains('_templates') -or
                         $lower.Contains('_plantillas') -or
                         ($f.Name -in @('AGENTS.md', 'CLAUDE.md', 'convenciones.md', 'bno-convenciones.md'))
            [void]$broken.Add([pscustomobject]@{
                Pagina  = Get-Rel $f.FullName
                Enlace  = $target
                Ejemplo = $esEjemplo
            })
        } else {
            if (-not $incoming.ContainsKey($resolved)) { $incoming[$resolved] = 0 }
            $incoming[$resolved]++
        }
    }
}

Write-Host ("Wikilinks revisados: {0}" -f $totalLinks)
Write-Host ""

# --- Reporte ----------------------------------------------------------------
$fail = 0
$rootDocs = @('index.md', 'README.md', 'AGENTS.md', 'CLAUDE.md', 'log.md', 'PENDIENTES.md',
              'MANTENIMIENTO.md', 'bno-index.md', 'bno-log.md', 'LEEME.md', 'cliente.yaml')

$brokenReal = @($broken | Where-Object { -not $_.Ejemplo })
$brokenEj   = @($broken | Where-Object { $_.Ejemplo })

Write-Host "== Enlaces rotos ==" -ForegroundColor Cyan
if ($brokenReal.Count -eq 0) {
    Write-Host "  Ninguno." -ForegroundColor Green
} else {
    $fail = 1
    $grouped = $brokenReal | Group-Object Enlace | Sort-Object Count -Descending
    foreach ($g in $grouped) {
        Write-Host ("  [[{0}]]  <- {1} pagina(s)" -f $g.Name, $g.Count) -ForegroundColor Red
        $g.Group | Select-Object -First 4 | ForEach-Object {
            Write-Host ("      {0}" -f $_.Pagina) -ForegroundColor DarkGray
        }
    }
    Write-Host ("  Total: {0} enlaces rotos, {1} destinos distintos." -f $brokenReal.Count, $grouped.Count)
}

if ($brokenEj.Count -gt 0) {
    Write-Host ("  ({0} marcadores de posicion en plantillas y documentacion de convenciones: no son errores)" -f $brokenEj.Count) -ForegroundColor DarkGray
}

Write-Host ""
Write-Host "== Notas huerfanas (sin enlaces entrantes) ==" -ForegroundColor Cyan
$orphans = @($wikiFiles | Where-Object {
    -not $incoming.ContainsKey($_.FullName) -and ($rootDocs -notcontains $_.Name)
})
if ($orphans.Count -eq 0) {
    Write-Host "  Ninguna." -ForegroundColor Green
} else {
    $fail = 1
    foreach ($o in $orphans) { Write-Host ("  {0}" -f (Get-Rel $o.FullName)) -ForegroundColor Yellow }
    Write-Host ("  Total: {0}" -f $orphans.Count)
}

Write-Host ""
Write-Host "== Paginas sin seccion Relacionado ==" -ForegroundColor Cyan
$skipRel = @('log.md', 'PENDIENTES.md', 'bno-log.md', 'CLAUDE.md', 'AGENTS.md', 'MANTENIMIENTO.md')
$noRelReal = @($noRel | Where-Object { $skipRel -notcontains $_.Name })
if ($noRelReal.Count -eq 0) {
    Write-Host "  Ninguna." -ForegroundColor Green
} else {
    $noRelReal | Select-Object -First 25 | ForEach-Object {
        Write-Host ("  {0}" -f (Get-Rel $_.FullName)) -ForegroundColor Yellow
    }
    Write-Host ("  Total: {0}" -f $noRelReal.Count)
}

Write-Host ""
Write-Host "== Higiene de Drive ==" -ForegroundColor Cyan
# Patrones que Drive y OneDrive usan de verdad para las copias de conflicto.
# Ojo: no basta con buscar "conflict" en el nombre — hay paginas legitimas que hablan de
# conflictos (p. ej. "Conflicto Contractual.md" en Monific) y no son copias.
$conflicts = @(Get-ChildItem -Path $wiki -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $_.BaseName -match '\(\d+\)$' -or
        $_.Name -match '(?i)conflicted copy' -or
        $_.Name -match '(?i)\[conflicto\]' -or
        $_.Name -match '(?i)copia en conflicto'
    })
if ($conflicts.Count -eq 0) {
    Write-Host "  Sin copias de conflicto." -ForegroundColor Green
} else {
    $fail = 1
    foreach ($c in $conflicts) {
        Write-Host ("  COPIA DE CONFLICTO  {0}" -f (Get-Rel $c.FullName)) -ForegroundColor Red
    }
}

$gits = @(Get-ChildItem -Path $wiki -Recurse -Directory -Force -Filter ".git" -ErrorAction SilentlyContinue)
if ($gits.Count -gt 0) {
    $fail = 1
    foreach ($g in $gits) {
        Write-Host ("  .git DENTRO DE DRIVE  {0}" -f (Get-Rel $g.FullName)) -ForegroundColor Red
    }
} else {
    Write-Host "  Sin repositorios git." -ForegroundColor Green
}

Write-Host ""
if ($fail -eq 0) {
    Write-Host "Wiki sana." -ForegroundColor Green
} else {
    Write-Host "Hay hallazgos que atender." -ForegroundColor Yellow
}
exit $fail

<#
.SYNOPSIS
  Guardian de sincronia entre una wiki local de Black & Orange y su espejo en Google Drive.

.DESCRIPTION
  La wiki vive dentro de Google Drive y se espeja con Drive para escritorio. Drive sincroniza
  pero NO fusiona: dos escritores sobre el mismo archivo producen una copia de conflicto.
  Este script es el guardian que se corre ANTES de ingerir y DESPUES de escribir.

  Comprueba:
    A. Que el cliente de Drive para escritorio este corriendo
    B. Transferencias pendientes y residuos en .tmp.driveupload / .tmp.drivedownload
    C. Copias de conflicto y archivos de 0 bytes (marcadores de posicion de Drive)
    D. La ficha maestra y la fecha de corte, leida de la ultima entrada del log
    E. Fuentes locales nuevas en las carpetas declaradas en la ficha maestra
    F. Accesos directos de Drive (.gdoc / .gsheet) con su ID, para leerlos por MCP
    G. La huella de los archivos de contrato, para cotejarla contra Drive por MCP

  NO escribe nada. NO llama a la API de Drive: el cotejo contra Drive lo hace el agente
  con el MCP, a partir de la huella de la seccion G.

.PARAMETER WikiPath
  Carpeta de la wiki. Por defecto, la carpeta actual.

.PARAMETER Desde
  Fecha de corte en ISO (yyyy-MM-dd). Por defecto se lee de la ultima entrada del log.

.PARAMETER Huella
  Emite la seccion G: TSV con ruta, bytes y mtime UTC de los archivos de contrato. Es la entrada
  del cotejo contra Drive por MCP.

.PARAMETER Rutas
  Rutas relativas a la wiki que se anaden a la huella. Son las paginas que se van a tocar: el
  cotejo cuesta una llamada de MCP por archivo, asi que se piden explicitamente.

.EXAMPLE
  .\scripts\verificar-sincronia-drive.ps1

.EXAMPLE
  .\scripts\verificar-sincronia-drive.ps1 -Desde 2026-08-14 -Huella

.EXAMPLE
  .\scripts\verificar-sincronia-drive.ps1 -Huella -Rutas "30-procesos/comercial/cotizaciones.md"
#>
[CmdletBinding()]
param(
    [string]$WikiPath = ".",
    [string]$Desde = "",
    [switch]$Huella,
    [string[]]$Rutas = @()
)

$ErrorActionPreference = "Stop"

$wiki = (Resolve-Path $WikiPath).Path

$probe = Get-Item $wiki
while ($null -ne $probe -and $probe.Name -ne "Black and Orange") { $probe = $probe.Parent }
if ($null -eq $probe) {
    Write-Host "No se encontro la raiz 'Black and Orange'. Se usa la wiki como raiz." -ForegroundColor Yellow
    $vault = $wiki
} else {
    $vault = $probe.FullName
}

function Get-Rel([string]$p) {
    if ($p.StartsWith($vault)) {
        return $p.Substring($vault.Length).TrimStart([char]92, [char]47).Replace([char]92, [char]47)
    }
    return $p
}

$fail = 0
$hayPendiente = $false

Write-Host ""
Write-Host "Wiki   : $wiki"
Write-Host "Boveda : $vault"
Write-Host ""

# --- A. Cliente de Drive para escritorio ------------------------------------
Write-Host "== A. Cliente de Drive ==" -ForegroundColor Cyan
$drv = @(Get-Process -Name "GoogleDriveFS" -ErrorAction SilentlyContinue)
if ($drv.Count -eq 0) {
    $fail = 1
    Write-Host "  DETENTE. Drive para escritorio no esta corriendo." -ForegroundColor Red
    Write-Host "  El espejo esta congelado: lo que escribas no sube, y lo que otros" -ForegroundColor DarkGray
    Write-Host "  subieron no ha bajado. Arranca Drive y espera a que termine." -ForegroundColor DarkGray
    # El ejecutable vive en una subcarpeta versionada, no en la raiz de la instalacion.
    $reg = @(Get-ItemProperty "HKLM:\SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall\*" -ErrorAction SilentlyContinue |
        Where-Object { $_.DisplayName -match "(?i)google drive" })
    if ($reg.Count -gt 0) {
        Write-Host ("  Instalado ({0}) pero apagado. Arrancalo:" -f $reg[0].DisplayVersion) -ForegroundColor DarkGray
        Write-Host ("      Start-Process '{0}'" -f $reg[0].InstallLocation) -ForegroundColor DarkGray
    } else {
        Write-Host "  Y no aparece instalado en este equipo. Sin el, la wiki no tiene espejo." -ForegroundColor Red
    }
} else {
    Write-Host ("  Corriendo ({0} proceso(s))." -f $drv.Count) -ForegroundColor Green
}

# --- B. Transferencias pendientes y residuos --------------------------------
Write-Host ""
Write-Host "== B. Transferencias pendientes ==" -ForegroundColor Cyan
$ahora = Get-Date
foreach ($n in @(".tmp.driveupload", ".tmp.drivedownload")) {
    $p = Join-Path $vault $n
    if (-not (Test-Path $p)) { continue }
    $items = @(Get-ChildItem -Path $p -Recurse -File -Force -ErrorAction SilentlyContinue)
    if ($items.Count -eq 0) {
        Write-Host ("  {0}: vacio." -f $n) -ForegroundColor Green
        continue
    }
    $viejo = @($items | Where-Object { ($ahora - $_.LastWriteTime).TotalHours -gt 24 })
    $nuevo = @($items | Where-Object { ($ahora - $_.LastWriteTime).TotalHours -le 24 })
    if ($nuevo.Count -gt 0) {
        $hayPendiente = $true
        $fail = 1
        Write-Host ("  {0}: {1} archivo(s) EN VUELO. Drive esta a medias." -f $n, $nuevo.Count) -ForegroundColor Red
        Write-Host "  Espera a que el icono de la bandeja deje de girar y vuelve a correr esto." -ForegroundColor DarkGray
    }
    if ($viejo.Count -gt 0) {
        Write-Host ("  {0}: {1} residuo(s) de mas de 24 h. Transferencia abortada, no en vuelo." -f $n, $viejo.Count) -ForegroundColor Yellow
        $viejo | Select-Object -First 5 | ForEach-Object {
            Write-Host ("      {0}  {1} bytes  {2:yyyy-MM-dd}" -f $_.Name, $_.Length, $_.LastWriteTime) -ForegroundColor DarkGray
        }
    }
}

# --- C. Higiene del espejo --------------------------------------------------
Write-Host ""
Write-Host "== C. Higiene del espejo ==" -ForegroundColor Cyan
$conflictos = @(Get-ChildItem -Path $wiki -Recurse -File -ErrorAction SilentlyContinue |
    Where-Object {
        $_.BaseName -match "\(\d+\)$" -or
        $_.Name -match "(?i)conflicted copy" -or
        $_.Name -match "(?i)\[conflicto\]" -or
        $_.Name -match "(?i)copia en conflicto"
    })
if ($conflictos.Count -eq 0) {
    Write-Host "  Sin copias de conflicto." -ForegroundColor Green
} else {
    # Una copia de conflicto en una pagina de conocimiento bloquea: el agente puede leer la
    # equivocada. En material crudo e inmutable (raw/, 90-raw/, drive-download-*) es ruido de
    # exportacion, no divergencia de escritura: se avisa pero no detiene la ingesta.
    $cCrudo = @($conflictos | Where-Object {
        $_.FullName -match "(?i)\\(raw|90-raw|drive-download[^\\]*|_extractos)\\"
    })
    $cVivo = @($conflictos | Where-Object {
        -not ($_.FullName -match "(?i)\\(raw|90-raw|drive-download[^\\]*|_extractos)\\")
    })
    if ($cVivo.Count -eq 0) {
        Write-Host "  Sin copias de conflicto en paginas de conocimiento." -ForegroundColor Green
    } else {
        $fail = 1
        Write-Host "  DETENTE. Copias de conflicto en paginas vivas: se fusionan a mano ANTES de ingerir." -ForegroundColor Red
        foreach ($c in $cVivo) { Write-Host ("      {0}" -f (Get-Rel $c.FullName)) -ForegroundColor Red }
    }
    if ($cCrudo.Count -gt 0) {
        Write-Host ("  {0} en material crudo (no bloquea, pero conviene limpiar):" -f $cCrudo.Count) -ForegroundColor Yellow
        $cCrudo | Select-Object -First 5 | ForEach-Object {
            Write-Host ("      {0}" -f (Get-Rel $_.FullName)) -ForegroundColor DarkGray
        }
    }
}

$vacios = @(Get-ChildItem -Path $wiki -Recurse -File -Include *.md, *.yaml -ErrorAction SilentlyContinue |
    Where-Object { $_.Length -eq 0 })
if ($vacios.Count -eq 0) {
    Write-Host "  Sin archivos de 0 bytes." -ForegroundColor Green
} else {
    $fail = 1
    Write-Host ("  DETENTE. {0} archivo(s) de 0 bytes. Suele significar que la carpeta NO esta" -f $vacios.Count) -ForegroundColor Red
    Write-Host "  marcada como 'Disponible sin conexion': el agente leeria vacio en vez de contenido." -ForegroundColor DarkGray
    $vacios | Select-Object -First 10 | ForEach-Object {
        Write-Host ("      {0}" -f (Get-Rel $_.FullName)) -ForegroundColor Red
    }
}

# --- D. Ficha maestra y fecha de corte --------------------------------------
Write-Host ""
Write-Host "== D. Ficha maestra y fecha de corte ==" -ForegroundColor Cyan
$maestra = $null
foreach ($n in @("cliente.yaml", "agencia.yaml")) {
    $c = Join-Path $wiki $n
    if (Test-Path $c) { $maestra = $c; break }
}
$carpetas = @()
$driveId = ""
$driveRuta = ""
if ($null -eq $maestra) {
    $fail = 1
    Write-Host "  No hay cliente.yaml ni agencia.yaml en la raiz de la wiki." -ForegroundColor Red
} else {
    Write-Host ("  Ficha : {0}" -f (Split-Path $maestra -Leaf)) -ForegroundColor Green
    $lineas = Get-Content -Path $maestra -Encoding UTF8
    $enFuentes = $false
    $enCarpetas = $false
    foreach ($l in $lineas) {
        if ($l -match "^fuentes:") { $enFuentes = $true; continue }
        if ($enFuentes -and $l -match "^[A-Za-z_]") { break }
        if (-not $enFuentes) { continue }
        if ($l -match "^\s+carpetas:") { $enCarpetas = $true; continue }
        if ($enCarpetas) {
            if ($l -match "^\s+-\s+(.+?)\s*(#.*)?$") {
                $carpetas += $matches[1].Trim().Trim([char]34).Trim([char]39)
                continue
            }
            if ($l -match "^\s+\S+:") { $enCarpetas = $false }
        }
        if ($l -match "^\s+drive_folder_id:\s*.?([A-Za-z0-9_\-]{20,})") { $driveId = $matches[1].Trim() }
        if ($l -match "^\s+transcripciones_drive:\s*(.+)$") {
            $driveRuta = $matches[1].Trim().Trim([char]34).Trim([char]39)
        }
    }
    if ($carpetas.Count -gt 0) {
        Write-Host ("  Carpetas de fuentes: {0}" -f ($carpetas -join ", "))
    } else {
        Write-Host "  Sin carpetas declaradas en fuentes.carpetas." -ForegroundColor Yellow
    }
    if ($driveId -ne "") {
        Write-Host ("  Minutas en Drive : {0}" -f $driveRuta)
        Write-Host ("  drive_folder_id  : {0}" -f $driveId) -ForegroundColor Green
    } else {
        Write-Host "  Sin drive_folder_id: esta wiki no tiene carpeta de minutas declarada." -ForegroundColor Yellow
    }
}

$log = $null
foreach ($n in @("log.md", "bno-log.md")) {
    $hit = @(Get-ChildItem -Path $wiki -Filter $n -Recurse -Depth 2 -File -ErrorAction SilentlyContinue)
    if ($hit.Count -gt 0) { $log = $hit[0].FullName; break }
}
if ($Desde -eq "") {
    if ($null -ne $log) {
        $m = Select-String -Path $log -Pattern "\d{4}-\d{2}-\d{2}" -List
        if ($null -ne $m) { $Desde = $m.Matches[0].Value }
    }
}
if ($Desde -eq "") {
    $Desde = (Get-Date).AddDays(-30).ToString("yyyy-MM-dd")
    Write-Host ("  Sin fecha en el log. Se usan los ultimos 30 dias: {0}" -f $Desde) -ForegroundColor Yellow
} else {
    if ($null -ne $log) { Write-Host ("  Log   : {0}" -f (Get-Rel $log)) }
    Write-Host ("  Corte : {0}" -f $Desde) -ForegroundColor Green
}
$corte = [datetime]::ParseExact($Desde, "yyyy-MM-dd", $null)

Write-Host ""
Write-Host "  Consulta para el MCP de Drive:" -ForegroundColor Cyan
if ($driveId -ne "") {
    Write-Host ("    parentId = '{0}' and modifiedTime > '{1}T00:00:00Z'" -f $driveId, $Desde)
} else {
    Write-Host "    (no aplica: sin drive_folder_id)" -ForegroundColor DarkGray
}

# --- E. Fuentes locales nuevas ----------------------------------------------
Write-Host ""
Write-Host ("== E. Fuentes locales nuevas desde {0} ==" -f $Desde) -ForegroundColor Cyan
# Lo que se puede destilar es texto. Las imagenes, el video y los comprimidos se cuentan
# aparte: son adjuntos que se referencian por nombre, no fuentes que se lean.
$extTexto = @(".md", ".txt", ".docx", ".doc", ".pdf", ".csv", ".xlsx", ".xls", ".pptx",
              ".gdoc", ".gsheet", ".gslides", ".json", ".yaml", ".yml", ".html", ".skill")
$nuevas = @()
$otras = @()
foreach ($c in $carpetas) {
    # fuentes.carpetas admite comodines (Monific declara "drive-download-*/"), asi que se
    # resuelve con Resolve-Path y no con Test-Path, que no expande.
    # Ojo con el nombre: $rutas colisionaria con el parametro [string[]]$Rutas, porque
    # PowerShell no distingue mayusculas. Los PathInfo se volverian cadenas, .Path daria
    # $null, y Get-ChildItem recorreria el directorio actual: la boveda completa.
    $resueltas = @(Resolve-Path -Path (Join-Path $wiki $c) -ErrorAction SilentlyContinue)
    if ($resueltas.Count -eq 0) {
        Write-Host ("  {0} -> no resuelve. Revisa fuentes.carpetas de la ficha." -f $c) -ForegroundColor Yellow
        continue
    }
    foreach ($rr in $resueltas) {
        $enc = @(Get-ChildItem -Path $rr.Path -Recurse -File -ErrorAction SilentlyContinue |
            Where-Object {
                $_.LastWriteTime -gt $corte -and
                $_.Name -ne "desktop.ini" -and
                -not $_.FullName.Contains(".tmp.drive")
            })
        foreach ($e in $enc) {
            if ($extTexto -contains $e.Extension.ToLowerInvariant()) { $nuevas += $e } else { $otras += $e }
        }
    }
}
if ($nuevas.Count -eq 0) {
    Write-Host "  Ninguna legible." -ForegroundColor Green
} else {
    $nuevas = @($nuevas | Sort-Object LastWriteTime -Descending)
    foreach ($n in @($nuevas | Select-Object -First 25)) {
        Write-Host ("  {0:yyyy-MM-dd}  {1,9} b  {2}" -f $n.LastWriteTime, $n.Length, (Get-Rel $n.FullName))
    }
    if ($nuevas.Count -gt 25) {
        Write-Host ("  ... y {0} mas. Se listan las 25 mas recientes." -f ($nuevas.Count - 25)) -ForegroundColor DarkGray
    }
    Write-Host ("  Total legibles: {0}" -f $nuevas.Count)
}
if ($otras.Count -gt 0) {
    Write-Host ("  Mas {0} adjunto(s) no textual(es): imagenes, video, comprimidos. Se referencian" -f $otras.Count) -ForegroundColor DarkGray
    Write-Host "  por nombre y ubicacion, no se transcriben." -ForegroundColor DarkGray
}

# --- F. Accesos directos de Drive -------------------------------------------
Write-Host ""
Write-Host "== F. Accesos directos de Drive (el texto NO esta en local) ==" -ForegroundColor Cyan
$stubs = @(Get-ChildItem -Path $wiki -Recurse -File -Include *.gdoc, *.gsheet, *.gslides -ErrorAction SilentlyContinue)
if ($stubs.Count -eq 0) {
    Write-Host "  Ninguno." -ForegroundColor Green
} else {
    foreach ($s in $stubs) {
        $txt = Get-Content -Path $s.FullName -Raw -ErrorAction SilentlyContinue
        $id = ""
        if ($txt -match '"doc_id"\s*:\s*"([^"]+)"') { $id = $matches[1] }
        elseif ($txt -match "id=([A-Za-z0-9_\-]{20,})") { $id = $matches[1] }
        $marca = ""
        if ($s.LastWriteTime -gt $corte) { $marca = "  <- nuevo" }
        if ($id -eq "") {
            Write-Host ("  {0}  ID no extraible{1}" -f (Get-Rel $s.FullName), $marca) -ForegroundColor Yellow
        } else {
            Write-Host ("  {0}{1}" -f (Get-Rel $s.FullName), $marca)
            Write-Host ("      fileId: {0}" -f $id) -ForegroundColor DarkGray
        }
    }
    Write-Host ("  Total: {0}. Se leen con el MCP de Drive, por fileId." -f $stubs.Count) -ForegroundColor DarkGray
}

# --- G. Huella para cotejar contra Drive ------------------------------------
if ($Huella) {
    Write-Host ""
    Write-Host "== G. Huella local (cotejar contra Drive por MCP) ==" -ForegroundColor Cyan
    # Solo los archivos de contrato, mas las rutas que pida quien invoca. El cotejo contra Drive
    # cuesta una llamada de MCP por archivo: la huella tiene que ser corta a proposito. Las
    # paginas que la skill va a tocar se pasan por -Rutas, porque solo ella sabe cuales son.
    $contrato = @("cliente.yaml", "agencia.yaml", "log.md", "bno-log.md", "index.md", "bno-index.md", "PENDIENTES.md", "AGENTS.md")
    # Ojo: no llamar a esta variable $huella. PowerShell no distingue mayusculas en nombres de
    # variable, y sobrescribiria el parametro [switch]$Huella con un array.
    $paraCotejar = @(Get-ChildItem -Path $wiki -Recurse -Depth 2 -File -Include *.md, *.yaml -ErrorAction SilentlyContinue |
        Where-Object {
            -not $_.FullName.Contains("\.claude\") -and
            -not $_.FullName.Contains("\.agents\") -and
            -not $_.FullName.Contains("\.codex\") -and
            $contrato -contains $_.Name
        })
    foreach ($r in $Rutas) {
        $rp = Join-Path $wiki $r
        if (Test-Path $rp) {
            $item = Get-Item $rp
            if ($paraCotejar.FullName -notcontains $item.FullName) { $paraCotejar += $item }
        } else {
            Write-Host ("  (no existe en local, se creara: {0})" -f $r) -ForegroundColor DarkGray
        }
    }
    $paraCotejar = @($paraCotejar | Sort-Object FullName)
    Write-Host "ruta`tbytes`tmtime_utc"
    foreach ($h in $paraCotejar) {
        Write-Host ("{0}`t{1}`t{2}" -f (Get-Rel $h.FullName), $h.Length, $h.LastWriteTimeUtc.ToString("yyyy-MM-ddTHH:mm:ss.fffZ"))
    }
    Write-Host ("  Total: {0} archivo(s)." -f $paraCotejar.Count) -ForegroundColor DarkGray
}

# --- Resumen ----------------------------------------------------------------
Write-Host ""
if ($fail -eq 0) {
    Write-Host "Espejo sano. Puedes ingerir." -ForegroundColor Green
} else {
    if ($hayPendiente) {
        Write-Host "Drive a medias. NO ingieras todavia: espera y vuelve a correr esto." -ForegroundColor Red
    } else {
        Write-Host "Hay hallazgos que atender antes de ingerir." -ForegroundColor Yellow
    }
}
exit $fail

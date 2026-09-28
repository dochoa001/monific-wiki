<#
Publica la carpeta 50. Monific (wiki incluida) en GitHub. Espejo PRIVADO, uso interno de B&O.

Por que asi: la carpeta vive en Google Drive y el AGENTS.md de la wiki (seccion 3, regla 11) prohibe
crear .git dentro, porque Drive genera copias de conflicto con los objetos de git. El repositorio vive
fuera de Drive, en C:\Users\david\bno-git\monific-wiki, y usa la carpeta como arbol de trabajo
(core.worktree). Git solo la lee: no copia ni modifica nada dentro de ella.

Uso:
  powershell -NoProfile -ExecutionPolicy Bypass -File publicar-github.ps1                          # commit + push, mensaje automatico
  powershell -NoProfile -ExecutionPolicy Bypass -File publicar-github.ps1 -Mensaje "Ingesta D205"  # commit + push, tu mensaje
  powershell -NoProfile -ExecutionPolicy Bypass -File publicar-github.ps1 -SoloVer                 # lista que cambio, sin publicar

Flujo de un solo sentido: la carpeta manda. Si el push falla por cambios en el remoto, alguien edito
directamente en GitHub: hay que traer esos cambios a mano a la carpeta. No se fuerza nunca.
#>
param(
    [string]$Mensaje,
    [switch]$SoloVer
)

$Carpeta = 'C:\Users\david\Documents\Black and Orange\50. Monific'
$GitDir  = 'C:\Users\david\bno-git\monific-wiki\.git'

if (-not (Test-Path $GitDir))  { throw "No existe el repositorio local en $GitDir. Ver LEEME.txt en esa carpeta." }
if (-not (Test-Path $Carpeta)) { throw "No existe la carpeta $Carpeta." }

$anidados = @(Get-ChildItem -Path $Carpeta -Recurse -Force -Filter '.git' -ErrorAction SilentlyContinue)
if ($anidados.Count -gt 0) {
    throw "Hay .git dentro de la carpeta y AGENTS.md lo prohibe. Borralo antes de publicar: $($anidados.FullName -join '; ')"
}
$grandes = @(Get-ChildItem -Path $Carpeta -Recurse -Force -File -ErrorAction SilentlyContinue | Where-Object { $_.Length -gt 95MB })
if ($grandes.Count -gt 0) {
    throw "GitHub rechaza archivos de mas de 100 MB. Saca o excluye: $($grandes.FullName -join '; ')"
}

function Invoke-Git {
    & git --git-dir="$GitDir" --work-tree="$Carpeta" @args
    if ($LASTEXITCODE -ne 0) { throw "git $($args -join ' ') termino con codigo $LASTEXITCODE" }
}

$cambios = @(Invoke-Git status --porcelain)
if ($cambios.Count -eq 0) {
    Write-Output 'Sin cambios en la carpeta: nada que publicar.'
    exit 0
}

Write-Output "Cambios detectados ($($cambios.Count)):"
$cambios | ForEach-Object { Write-Output "  $_" }
if ($SoloVer) { exit 0 }

Invoke-Git add -A
if (-not $Mensaje) { $Mensaje = 'Actualizacion de la carpeta Monific - ' + (Get-Date -Format 'yyyy-MM-dd HH:mm') }
Invoke-Git commit -q -m $Mensaje
Invoke-Git push -q origin main
Write-Output "Publicado en GitHub: $Mensaje"

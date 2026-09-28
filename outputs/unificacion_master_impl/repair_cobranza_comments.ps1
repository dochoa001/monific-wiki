param(
  [Parameter(Mandatory = $true)][string]$Source,
  [Parameter(Mandatory = $true)][string]$Destination
)

$sourcePath = (Resolve-Path -LiteralPath $Source).Path
$destinationDir = Split-Path -Parent $Destination
if (-not (Test-Path -LiteralPath $destinationDir)) {
  New-Item -ItemType Directory -Path $destinationDir | Out-Null
}
Copy-Item -LiteralPath $sourcePath -Destination $Destination -Force

Add-Type -AssemblyName System.IO.Compression
Add-Type -AssemblyName System.IO.Compression.FileSystem
$stream = [System.IO.File]::Open($Destination, [System.IO.FileMode]::Open, [System.IO.FileAccess]::ReadWrite)
$zip = New-Object System.IO.Compression.ZipArchive($stream, [System.IO.Compression.ZipArchiveMode]::Update, $false)
try {
  $targets = @($zip.Entries | Where-Object { $_.FullName -match '^xl/comments\d+\.xml$' })
  foreach ($entry in $targets) {
    $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
    $xmlText = $reader.ReadToEnd()
    $reader.Dispose()
    $updated = $xmlText -replace '<author\s*/>', '<author>David Ochoa</author>'
    $updated = $updated -replace '<author></author>', '<author>David Ochoa</author>'
    $entryName = $entry.FullName
    $entry.Delete()
    $newEntry = $zip.CreateEntry($entryName, [System.IO.Compression.CompressionLevel]::Optimal)
    $writer = New-Object System.IO.StreamWriter($newEntry.Open(), (New-Object System.Text.UTF8Encoding($false)))
    $writer.Write($updated)
    $writer.Dispose()
  }
} finally {
  $zip.Dispose()
  $stream.Dispose()
}

Write-Output $Destination

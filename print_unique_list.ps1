$paths = @("public", "C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9")
$files = Get-ChildItem -Path $paths -Recurse -File -Include *.png,*.jpg,*.jpeg,*.webp

$hashes = [ordered]@{}

foreach ($f in $files) {
    if ($f.FullName -like "*tasks*" -or $f.FullName -like "*logs*") { continue }
    $hash = (Get-FileHash $f.FullName -Algorithm MD5).Hash
    if (-not $hashes.Contains($hash)) {
        $hashes[$hash] = @()
    }
    $hashes[$hash] += $f.FullName
}

$i = 1
foreach ($h in $hashes.Keys) {
    $primary = $hashes[$h][0]
    $name = Split-Path $primary -Leaf
    $size = [math]::Round((Get-Item $primary).Length / 1024, 1)
    Write-Output "[$i] $name ($size KB) - $primary"
    $i++
}

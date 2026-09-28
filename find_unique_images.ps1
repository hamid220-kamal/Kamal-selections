$paths = @("public", "C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9")
$files = Get-ChildItem -Path $paths -Recurse -File -Include *.png,*.jpg,*.jpeg,*.webp

$hashes = @{}

foreach ($f in $files) {
    if ($f.FullName -like "*tasks*" -or $f.FullName -like "*logs*") { continue }
    $hash = (Get-FileHash $f.FullName -Algorithm MD5).Hash
    if (-not $hashes.ContainsKey($hash)) {
        $hashes[$hash] = @()
    }
    $hashes[$hash] += $f.FullName
}

Write-Output "TOTAL UNIQUE IMAGES: $($hashes.Count)"
foreach ($h in $hashes.Keys) {
    $first = $hashes[$h][0]
    $count = $hashes[$h].Count
    Write-Output "HASH $h ($count copies): $first"
}

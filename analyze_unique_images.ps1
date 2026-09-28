Add-Type -AssemblyName System.Drawing

$paths = @("public", "C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9")
$files = Get-ChildItem -Path $paths -Recurse -File -Include *.png,*.jpg,*.jpeg,*.webp

$unique = [ordered]@{}

foreach ($f in $files) {
    if ($f.FullName -like "*tasks*" -or $f.FullName -like "*logs*") { continue }
    $hash = (Get-FileHash $f.FullName -Algorithm MD5).Hash
    if (-not $unique.Contains($hash)) {
        $unique[$hash] = $f.FullName
    }
}

$idx = 1
foreach ($h in $unique.Keys) {
    $filePath = $unique[$h]
    $fileItem = Get-Item $filePath
    $dim = "N/A"
    try {
        $img = [System.Drawing.Image]::FromFile($filePath)
        $dim = "$($img.Width)x$($img.Height)"
        $img.Dispose()
    } catch {}
    
    $sizeKb = [math]::Round($fileItem.Length / 1024, 1)
    $fileName = $fileItem.Name
    Write-Output "[$idx] $fileName | $dim | $sizeKb KB | $h | $filePath"
    $idx++
}

$files = Get-ChildItem -Path "C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9" -Recurse -File -Include *.png,*.jpg,*.jpeg,*.webp

foreach ($f in $files) {
    if ($f.FullName -like "*tasks*" -or $f.FullName -like "*logs*") { continue }
    $hash = (Get-FileHash $f.FullName -Algorithm MD5).Hash
    $sizeKb = [math]::Round($f.Length / 1024, 1)
    Write-Output "$($f.Name) | $sizeKb KB | $hash"
}

$files = Get-ChildItem -Path "d:\Kamal selections\src" -Recurse -Include *.tsx,*.ts,*.jsx,*.js,*.css

$imgMatches = @()
foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    $regex = '(?:"|'')(/images/[a-zA-Z0-9_\-\./]+\.(?:jpg|png|webp)|/brand/[a-zA-Z0-9_\-\./]+\.(?:jpg|png|webp))(?:"|'')'
    $matches = [regex]::Matches($content, $regex)
    foreach ($m in $matches) {
        $path = $m.Groups[1].Value
        $imgMatches += [PSCustomObject]@{
            File = $file.FullName.Replace("d:\Kamal selections\", "")
            ImagePath = $path
        }
    }
}

$uniqueImages = $imgMatches | Select-Object -ExpandProperty ImagePath -Unique

$missing = @()
$present = @()

foreach ($img in $uniqueImages) {
    # remove leading slash and check in public
    $rel = $img.TrimStart('/') -replace '/', '\'
    $fullPath = Join-Path "d:\Kamal selections\public" $rel
    if (Test-Path $fullPath) {
        $present += $img
    } else {
        $missing += [PSCustomObject]@{
            ImagePath = $img
            ResolvedPath = $fullPath
        }
    }
}

Write-Host "Total unique image URLs checked: $($uniqueImages.Count)"
Write-Host "Present on disk: $($present.Count)"
Write-Host "Missing on disk: $($missing.Count)"

if ($missing.Count -gt 0) {
    Write-Host "MISSING FILES:" -ForegroundColor Red
    $missing | ForEach-Object { Write-Host "$($_.ImagePath) => $($_.ResolvedPath)" }
} else {
    Write-Host "ALL IMAGES VERIFIED! Zero broken links." -ForegroundColor Green
}

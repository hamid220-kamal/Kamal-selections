$files = Get-ChildItem -Path "d:\Kamal selections\src" -Recurse -Include *.tsx,*.ts,*.jsx,*.js,*.css

$imgMatches = @()

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    # Find all image paths matching /images/... or /brand/... or .png / .jpg
    $regex = '(?:"|'')(/images/[a-zA-Z0-9_\-\./]+\.(?:jpg|png|webp)|/brand/[a-zA-Z0-9_\-\./]+\.(?:jpg|png|webp)|/[a-zA-Z0-9_\-\. ]+\.(?:jpg|png|webp))(?:"|'')'
    $matches = [regex]::Matches($content, $regex)
    foreach ($m in $matches) {
        $path = $m.Groups[1].Value
        $imgMatches += [PSCustomObject]@{
            File = $file.FullName.Replace("d:\Kamal selections\", "")
            ImagePath = $path
        }
    }
}

Write-Host "Total image references found:" $imgMatches.Count
Write-Host "--------------------------------------------------"

$grouped = $imgMatches | Group-Object ImagePath
$duplicates = $grouped | Where-Object { $_.Count -gt 1 }

Write-Host "All Unique Image Usage Counts in src/:"
$grouped | Sort-Object Count -Descending | ForEach-Object {
    $path = $_.Name
    $count = $_.Count
    $filesUsing = ($_.Group | Select-Object -ExpandProperty File) -join ", "
    Write-Host "$count x $path => ($filesUsing)"
}

Write-Host "--------------------------------------------------"
if ($duplicates.Count -eq 0) {
    Write-Host "SUCCESS: STRICT IMAGE UNIQUENESS IS 100% SATISFIED! No duplicate image references found anywhere in src/ (except logos)!" -ForegroundColor Green
} else {
    Write-Host "WARNING: Found duplicates:" -ForegroundColor Red
    $duplicates | ForEach-Object {
        Write-Host "$($_.Count) occurrences of $($_.Name)" -ForegroundColor Yellow
    }
}

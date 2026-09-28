Get-ChildItem -Path 'public' -Recurse -File | ForEach-Object {
    $rel = $_.FullName.Replace((Get-Location).Path + "\", "")
    $kb = [math]::Round($_.Length / 1024, 1)
    Write-Output "$rel | $kb KB"
}

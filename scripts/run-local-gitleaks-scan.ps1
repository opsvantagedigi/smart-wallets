Param()
Set-StrictMode -Version Latest
$root = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $root

# Patterns to scan
$patterns = @{
    'aws-access-key' = 'AKIA[0-9A-Z]{16}'
    'private-key-header' = '-----BEGIN PRIVATE KEY-----'
    'jwt-like' = 'eyJ[A-Za-z0-9_-]{10,}'
    'generic' = '(?i)\b(?:api_key|api-key|token|secret|password)\s*[=:]\s*[^\s'""']{8,}'
}

$results = @()
Write-Output "Scanning repository rooted at: $root"

Get-ChildItem -Path $root -Recurse -File | Where-Object {
    $_.FullName -notmatch '\\node_modules\\' -and $_.FullName -notmatch '\\\.git\\'
} | ForEach-Object {
    $file = $_.FullName
    foreach ($kv in $patterns.GetEnumerator()) {
        $rule = $kv.Key
        $regex = $kv.Value
        try {
            $matches = Select-String -Path $file -Pattern $regex -AllMatches -Encoding UTF8 -ErrorAction SilentlyContinue
        } catch {
            $matches = @()
        }
        foreach ($m in $matches) {
            foreach ($mm in $m.Matches) {
                $results += [PSCustomObject]@{
                    rule = $rule
                    file = $file
                    line = $m.LineNumber
                    match = $mm.Value
                }
            }
        }
    }
}

$outPath = Join-Path $root 'gitleaks-final-report.json'
$results | ConvertTo-Json -Depth 5 | Out-File -FilePath $outPath -Encoding UTF8

Write-Output "Wrote $($results.Count) matches to: $outPath"
if ($results.Count -gt 0) {
    $results | Select-Object -First 20 | Format-Table -AutoSize
} else {
    Write-Output "No matches found for the requested patterns."
}

Write-Output "Scan complete."

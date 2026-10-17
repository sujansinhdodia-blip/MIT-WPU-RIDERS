Add-Type -AssemblyName System.Drawing

$brainDir = "C:\Users\Sujansinh\.gemini\antigravity-ide\brain\f834063f-a003-47cf-973f-7411e0789f35"
$src = [System.Drawing.Bitmap]::FromFile((Join-Path $brainDir "instagram_posts_grid_1788467090164.png"))

$minX = 9999; $maxX = 0; $minY = 9999; $maxY = 0
for ($x = 300; $x -lt 600; $x += 2) {
    for ($y = 100; $y -lt 450; $y += 2) {
        $c = $src.GetPixel($x, $y)
        if (($c.R -gt 200 -and $c.B -lt 80) -or ($c.R -gt 200 -and $c.B -gt 150 -and $c.G -lt 60)) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}
$w = $maxX - $minX
$h = $maxY - $minY
Write-Host "Profile Circle Bounds: X=$minX..$maxX, Y=$minY..$maxY, Width=$w, Height=$h"
$src.Dispose()

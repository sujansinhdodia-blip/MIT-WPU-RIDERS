Add-Type -AssemblyName System.Drawing

$brainDir = "C:\Users\Sujansinh\.gemini\antigravity-ide\brain\f834063f-a003-47cf-973f-7411e0789f35"
$gridPath = Join-Path $brainDir "instagram_posts_grid_1788467090164.png"
$destPath = "c:\Users\Sujansinh\OneDrive\Desktop\MIT WPU riders\public\assets\club\logo-crest.png"

$src = [System.Drawing.Bitmap]::FromFile($gridPath)

$x = 450
$y = 165
$size = 175

$rect = New-Object System.Drawing.Rectangle($x, $y, $size, $size)
$target = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()
$src.Dispose()

Write-Host "Logo perfected!"

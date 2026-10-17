Add-Type -AssemblyName System.Drawing

$brainDir = "C:\Users\Sujansinh\.gemini\antigravity-ide\brain\f834063f-a003-47cf-973f-7411e0789f35"
$awardPath = Join-Path $brainDir "post_unblocked_1788467120568.png"
$destPath = "c:\Users\Sujansinh\OneDrive\Desktop\MIT WPU riders\public\assets\club\bosch-award-ceremony.png"

$src = [System.Drawing.Bitmap]::FromFile($awardPath)

$x = 350
$y = 118
$w = 515
$h = 515

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$target = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($target)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()
$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$target.Dispose()
$src.Dispose()

Write-Host "Bosch award photo cropped precisely!"

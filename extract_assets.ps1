Add-Type -AssemblyName System.Drawing

$brainDir = "C:\Users\Sujansinh\.gemini\antigravity-ide\brain\f834063f-a003-47cf-973f-7411e0789f35"
$destDir = "c:\Users\Sujansinh\OneDrive\Desktop\MIT WPU riders\public\assets\club"

function Crop-Image($sourcePath, $destPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Bitmap]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $target = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($target)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, 0, 0, $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $target.Dispose()
    $src.Dispose()
    Write-Host "Saved: $destPath ($w x $h)"
}

# 1. Logo from instagram_posts_grid_1788467090164.png (dimensions: 1536x730 approx)
# In instagram_posts_grid:
# Profile pic is around X: 350 to 530, Y: 160 to 340
$gridPath = Join-Path $brainDir "instagram_posts_grid_1788467090164.png"
Crop-Image $gridPath (Join-Path $destDir "logo-crest.png") 350 160 180 180

# 2. Award Post Image from post_unblocked_1788467120568.png
# Award post has photo on the left half: X: 290, Y: 115, W: 590, H: 585
$awardPath = Join-Path $brainDir "post_unblocked_1788467120568.png"
Crop-Image $awardPath (Join-Path $destDir "bosch-award-ceremony.png") 290 115 590 585

# 3. Highlight 1 - Achievements Trophy
Crop-Image $gridPath (Join-Path $destDir "highlight-achievements.png") 338 500 90 90

# 4. Highlight 2 - Events / DGR
Crop-Image $gridPath (Join-Path $destDir "highlight-events.png") 468 500 90 90

# 5. Highlight 3 - Badge Ceremony
Crop-Image $gridPath (Join-Path $destDir "highlight-badge-ceremony.png") 600 500 90 90

# 6. Highlight 4 - Ride Moments
Crop-Image $gridPath (Join-Path $destDir "highlight-ride-moments.png") 732 500 90 90

# 7. Highlight 5 - 1st Ride
Crop-Image $gridPath (Join-Path $destDir "highlight-first-ride.png") 864 500 90 90

# 8. Highlight 6 - Inauguration
Crop-Image $gridPath (Join-Path $destDir "highlight-inauguration.png") 996 500 90 90

# 9. Freshers post thumbnail (bottom left of grid)
Crop-Image $gridPath (Join-Path $destDir "post-freshers.png") 295 788 310 310
# 10. University dome post thumbnail
Crop-Image $gridPath (Join-Path $destDir "post-campus.png") 610 788 310 310
# 11. Award post thumbnail in grid
Crop-Image $gridPath (Join-Path $destDir "post-award-grid.png") 925 788 310 310

Write-Host "All assets extracted successfully!"

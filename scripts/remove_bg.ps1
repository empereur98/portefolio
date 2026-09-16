Add-Type -AssemblyName System.Drawing

$srcPath = Resolve-Path "public\images\hero-avatar.jpg"
$destPath = "$PWD\public\images\hero-avatar.png"

$orig = [System.Drawing.Bitmap]::FromFile($srcPath)
$width = $orig.Width
$height = $orig.Height

# Create 32-bit ARGB bitmap
$bmp = New-Object System.Drawing.Bitmap($width, $height, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$graphics = [System.Drawing.Graphics]::FromImage($bmp)
$graphics.DrawImage($orig, 0, 0, $width, $height)
$graphics.Dispose()
$orig.Dispose()

# Lock bits for high-speed pixel processing
$rect = New-Object System.Drawing.Rectangle(0, 0, $width, $height)
$bmpData = $bmp.LockBits($rect, [System.Drawing.Imaging.ImageLockMode]::ReadWrite, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
$totalBytes = [Math]::Abs($bmpData.Stride) * $height
$bytes = New-Object byte[] $totalBytes
[System.Runtime.InteropServices.Marshal]::Copy($bmpData.Scan0, $bytes, 0, $totalBytes)

# Process BGRA pixels (B, G, R, A)
for ($i = 0; $i -lt $totalBytes; $i += 4) {
    $b = $bytes[$i]
    $g = $bytes[$i+1]
    $r = $bytes[$i+2]
    
    $min = [Math]::Min($r, [Math]::Min($g, $b))
    $max = [Math]::Max($r, [Math]::Max($g, $b))
    $diff = $max - $min
    
    if ($r -gt 215 -and $g -gt 215 -and $b -gt 215 -and $diff -lt 25) {
        $bytes[$i+3] = 0 # Fully transparent
    } elseif ($r -gt 190 -and $g -gt 190 -and $b -gt 190 -and $diff -lt 30) {
        $factor = ($max - 190) / 25.0
        $alpha = [byte][Math]::Round(255 * (1.0 - $factor))
        $bytes[$i+3] = $alpha
    }
}

[System.Runtime.InteropServices.Marshal]::Copy($bytes, 0, $bmpData.Scan0, $totalBytes)
$bmp.UnlockBits($bmpData)

$bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Output "Transparent avatar saved successfully to $destPath"

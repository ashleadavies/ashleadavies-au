from pathlib import Path
from PIL import Image, ImageDraw

root = Path(__file__).resolve().parent.parent
source = root / 'public' / 'images' / 'portrait.png'
out_dir = root / 'public' / 'logos'
out_dir.mkdir(exist_ok=True)

if not source.exists():
    raise FileNotFoundError(f'Missing source image: {source}')

img = Image.open(source).convert('RGBA')
width, height = img.size
size = min(width, height)

# Center-crop to a square so the portrait remains framed and centered.
left = (width - size) // 2
top = (height - size) // 2
right = left + size
bottom = top + size
square = img.crop((left, top, right, bottom))

# Pad slightly and apply a subtle circular mask.
pad = max(4, int(size * 0.08))
canvas = Image.new('RGBA', (size + pad * 2, size + pad * 2), (0, 0, 0, 0))
canvas.paste(square, (pad, pad), square)

mask = Image.new('L', canvas.size, 0)
ImageDraw.Draw(mask).ellipse((2, 2, canvas.width - 2, canvas.height - 2), fill=255)

circular = Image.new('RGBA', canvas.size, (0, 0, 0, 0))
circular.paste(canvas, (0, 0), mask)

# Generate the requested outputs.
for target in [(32, 32), (180, 180), (192, 192), (512, 512)]:
    resized = circular.resize(target, Image.Resampling.LANCZOS)
    resized.save(out_dir / f'icon-{target[0]}x{target[1]}.png', format='PNG')

circular.resize((180, 180), Image.Resampling.LANCZOS).save(out_dir / 'apple-icon.png', format='PNG')
circular.resize((32, 32), Image.Resampling.LANCZOS).save(out_dir / 'icon-light-32x32.png', format='PNG')
circular.resize((32, 32), Image.Resampling.LANCZOS).save(out_dir / 'icon-dark-32x32.png', format='PNG')

icon_sizes = [(16, 16), (32, 32), (48, 48)]
frames = [circular.resize(size, Image.Resampling.LANCZOS) for size in icon_sizes]
frames[0].save(out_dir / 'favicon.ico', format='ICO', sizes=icon_sizes)

print(f'Icons generated in {out_dir}')

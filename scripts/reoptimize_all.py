import os
from PIL import Image

out_dir = r"c:\Users\wwwvi\OneDrive\Documents\GitHub\Clean-RootsArbor-Care\public\images"

for fname in os.listdir(out_dir):
    if not fname.endswith('.webp'):
        continue
    fpath = os.path.join(out_dir, fname)
    if os.path.getsize(fpath) > 90 * 1024:
        img = Image.open(fpath)
        if img.mode != 'RGB':
            img = img.convert('RGB')
        w, h = img.size
        curr_size = (int(w * 0.85), int(h * 0.85))
        quality = 65
        img_resized = img.resize(curr_size, Image.Resampling.LANCZOS)
        img_resized.save(fpath, 'WEBP', quality=quality, optimize=True)
        
        while os.path.getsize(fpath) > 90 * 1024:
            quality -= 5
            img_resized.save(fpath, 'WEBP', quality=quality, optimize=True)
            
        size_kb = os.path.getsize(fpath) / 1024
        print(f"RE-OPTIMIZED {fname}: {size_kb:.2f} KB")

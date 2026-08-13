import os
from PIL import Image

brain_dir = r"C:\Users\wwwvi\.gemini\antigravity-ide\brain\225f8f7d-46f9-4692-a235-46768d4afb74"
out_dir = r"c:\Users\wwwvi\OneDrive\Documents\GitHub\Clean-RootsArbor-Care\public\images"
os.makedirs(out_dir, exist_ok=True)

images_map = {
    'hero-bg.webp': ('hero_arborist_1786639791059.png', (960, 540)),
    'about-arborist.webp': ('about_arborist_1786639910292.png', (720, 540)),
    'stump-grinding.webp': ('stump_grinding_service_1786640333622.png', (640, 480)),
    'tree-removal.webp': ('tree_removal_action_1786640369714.png', (640, 480)),
    'crown-pruning.webp': ('hero_arborist_1786639791059.png', (640, 480)),
    'storm-cleanup.webp': ('storm_cleanup_action_1786641632255.png', (640, 480)),
    'land-clearing.webp': ('land_clearing_action_1786641766716.png', (640, 480)),
    'tree-health.webp': ('about_arborist_1786639910292.png', (640, 480))
}

MAX_BYTES = 95000  # Strict limit < 100 KB

for out_name, (src_name, target_size) in images_map.items():
    src_path = os.path.join(brain_dir, src_name)
    out_path = os.path.join(out_dir, out_name)
    
    if not os.path.exists(src_path):
        print(f"Source file not found: {src_path}")
        continue

    img = Image.open(src_path)
    if img.mode != 'RGB':
        img = img.convert('RGB')
    
    curr_size = target_size
    quality = 75
    
    img_resized = img.resize(curr_size, Image.Resampling.LANCZOS)
    img_resized.save(out_path, 'WEBP', quality=quality, optimize=True)
    
    while os.path.getsize(out_path) > MAX_BYTES:
        if quality > 35:
            quality -= 5
        else:
            w, h = curr_size
            curr_size = (int(w * 0.9), int(h * 0.9))
            img_resized = img.resize(curr_size, Image.Resampling.LANCZOS)
        img_resized.save(out_path, 'WEBP', quality=quality, optimize=True)
        
    size_kb = os.path.getsize(out_path) / 1024
    print(f"SUCCESS: {out_name} -> {size_kb:.2f} KB | Res: {curr_size[0]}x{curr_size[1]} | Q: {quality}")

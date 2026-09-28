import os
import re
from collections import defaultdict
from PIL import Image

regex = re.compile(r'["\'](/images/[^"\'\s>]+)["\']')

used_images = defaultdict(list)
for root, dirs, files in os.walk('src'):
    for f in files:
        if f.endswith(('.tsx', '.ts')):
            p = os.path.join(root, f)
            with open(p, 'r', encoding='utf-8') as file:
                content = file.read()
                matches = regex.findall(content)
                for m in matches:
                    used_images[m].append(p)

print(f"Total unique image paths referenced in src: {len(used_images)}")
duplicates = []
for img, files in sorted(used_images.items()):
    clean_files = [os.path.basename(f) for f in files]
    file_path = os.path.join('public', img.lstrip('/'))
    exists = os.path.exists(file_path)
    size_str = "NOT_FOUND"
    if exists:
        try:
            with Image.open(file_path) as im:
                size_str = f"{im.size[0]}x{im.size[1]} ({im.size[0]/im.size[1]:.2f})"
        except Exception as e:
            size_str = f"ERR: {e}"
    print(f"{img} | {size_str} | used in: {', '.join(clean_files)}")
    if len(files) > 1:
        # Check if they are actually rendered on active pages
        duplicates.append((img, clean_files))

if duplicates:
    print("\n--- DUPLICATES FOUND ---")
    for d, fs in duplicates:
        print(f"DUPLICATE: {d} -> {fs}")
else:
    print("\n--- ZERO DUPLICATES FOUND! ---")

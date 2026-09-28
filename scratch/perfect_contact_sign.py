import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load the pristine brain file
brain_file = r'C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9\store_hero_bg_1790522597923.jpg'
orig = Image.open(brain_file).convert('RGBA')
w, h = orig.size

# 1. Main fascia sign
# Box: x from 512 to 1354, y from 88 to 158
sign_x1, sign_y1, sign_x2, sign_y2 = 512, 88, 1354, 158
sw = sign_x2 - sign_x1
sh = sign_y2 - sign_y1

# Create custom board for Kamal Selections
# Deep rich burgundy/wine #2A050E with subtle warm lighting gradient matching evening ambiance
board = Image.new('RGBA', (sw, sh), (42, 5, 14, 255))
draw = ImageDraw.Draw(board)

# Draw subtle top glow from the hanging warm bulbs
for y in range(sh):
    factor = 1.0 - (y / sh)
    r = int(55 + 50 * factor)
    g = int(12 + 25 * factor)
    b = int(22 + 10 * factor)
    draw.line([(0, y), (sw, y)], fill=(r, g, b, 255))

# Outer and inner border in warm gold #D4AF37
draw.rectangle([(2, 2), (sw - 3, sh - 3)], outline=(212, 175, 55, 240), width=2)
draw.rectangle([(5, 5), (sw - 6, sh - 6)], outline=(229, 195, 120, 140), width=1)

# Fonts
try:
    font_main = ImageFont.truetype('arialbd.ttf', 36)
    font_sub = ImageFont.truetype('arialbd.ttf', 13)
    font_ks = ImageFont.truetype('arialbd.ttf', 16)
except:
    font_main = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_ks = ImageFont.load_default()

main_text = "KAMAL SELECTIONS"
sub_text = "THE COMPLETE LADIES & KIDS WEAR SHOWROOM · SHADNAGAR"

# Measure text
bbox_m = draw.textbbox((0, 0), main_text, font=font_main)
tw_m = bbox_m[2] - bbox_m[0]
th_m = bbox_m[3] - bbox_m[1]

bbox_s = draw.textbbox((0, 0), sub_text, font=font_sub)
tw_s = bbox_s[2] - bbox_s[0]

tx_m = (sw - tw_m) // 2
ty_m = 7

tx_s = (sw - tw_s) // 2
ty_s = ty_m + th_m + 7

# Drop shadow
draw.text((tx_m + 2, ty_m + 2), main_text, font=font_main, fill=(15, 2, 5, 255))
# Main text in vibrant warm gold/yellow #FFD700
draw.text((tx_m, ty_m), main_text, font=font_main, fill=(255, 226, 120, 255))

# Subtitle in warm ivory
draw.text((tx_s + 1, ty_s + 1), sub_text, font=font_sub, fill=(20, 2, 5, 220))
draw.text((tx_s, ty_s), sub_text, font=font_sub, fill=(250, 235, 195, 255))

# Gold laurel emblems on left and right
draw.text((25, 22), "✦ KS ✦", font=font_ks, fill=(229, 195, 120, 240))
draw.text((sw - 85, 22), "✦ KS ✦", font=font_ks, fill=(229, 195, 120, 240))

# Paste main board onto image
orig.paste(board, (sign_x1, sign_y1))

# 2. Distant hanging sign (X: 395 to 445, Y: 325 to 415)
# In reality, this is a distant backlit sign on a pole down the street.
# Let's replace its content with an evening warm backlit sign for Kamal Selections
pw = 445 - 395
ph = 415 - 325
p_board = Image.new('RGBA', (pw, ph), (38, 5, 12, 255))
p_draw = ImageDraw.Draw(p_board)
p_draw.rectangle([(1, 1), (pw - 2, ph - 2)], outline=(212, 175, 55, 200), width=1)
try:
    font_p_title = ImageFont.truetype('arialbd.ttf', 10)
    font_p_sub = ImageFont.truetype('arial.ttf', 7)
except:
    font_p_title = ImageFont.load_default()
    font_p_sub = ImageFont.load_default()

# Centered text in warm light
p_draw.text((6, 12), "KAMAL", font=font_p_title, fill=(255, 225, 115, 255))
p_draw.text((3, 26), "SELECTIONS", font=font_p_title, fill=(255, 225, 115, 255))
p_draw.line([(4, 42), (pw - 4, 42)], fill=(212, 175, 55, 180))
p_draw.text((5, 48), "LADIES & KIDS", font=font_p_sub, fill=(248, 229, 186, 230))
p_draw.text((8, 62), "SHADNAGAR", font=font_p_sub, fill=(229, 195, 120, 200))

# Slightly blur to match depth of field of the street background
p_np = cv2.GaussianBlur(np.array(p_board), (3, 3), 0.5)
p_board_blurred = Image.fromarray(p_np)

orig.paste(p_board_blurred, (395, 325))

# Save output
out = orig.convert('RGB')
dst_path = 'public/images/contact/kamal-selections-shadnagar-evening-showroom.jpg'
out.save(dst_path, quality=95)
print("Successfully generated pixel-perfect Kamal Selections evening showroom image!")

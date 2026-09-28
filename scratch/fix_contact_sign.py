import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load the image
img_path = 'public/images/contact/kamal-selections-shadnagar-evening-showroom.jpg'
orig = Image.open(img_path).convert('RGBA')
w, h = orig.size

# 1. Main fascia sign
# Box: x from 695 to 1310, y from 94 to 152
sign_x1, sign_y1, sign_x2, sign_y2 = 695, 94, 1310, 152
sw = sign_x2 - sign_x1
sh = sign_y2 - sign_y1

# Create custom board for Kamal Selections
# Deep rich burgundy/wine #2A050E with subtle warm lighting gradient
board = Image.new('RGBA', (sw, sh), (42, 5, 14, 255))
draw = ImageDraw.Draw(board)

# Draw subtle top glow from the hanging warm bulbs
for y in range(sh):
    factor = 1.0 - (y / sh)
    r = int(55 + 40 * factor)
    g = int(10 + 20 * factor)
    b = int(22 + 10 * factor)
    draw.line([(0, y), (sw, y)], fill=(r, g, b, 255))

# Border in warm gold #D4AF37
draw.rectangle([(2, 2), (sw - 3, sh - 3)], outline=(212, 175, 55, 230), width=2)
draw.rectangle([(5, 5), (sw - 6, sh - 6)], outline=(229, 195, 120, 120), width=1)

# Text: KAMAL SELECTIONS in gold / warm white with 3D drop shadow
try:
    font_main = ImageFont.truetype('arialbd.ttf', 32)
    font_sub = ImageFont.truetype('arial.ttf', 12)
    font_tel = ImageFont.truetype('gautami.ttf', 14)
except:
    font_main = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_tel = ImageFont.load_default()

main_text = "KAMAL SELECTIONS"
sub_text = "LADIES & KIDS WEAR · SHADNAGAR"

# Measure text
bbox_m = draw.textbbox((0, 0), main_text, font=font_main)
tw_m = bbox_m[2] - bbox_m[0]
th_m = bbox_m[3] - bbox_m[1]

bbox_s = draw.textbbox((0, 0), sub_text, font=font_sub)
tw_s = bbox_s[2] - bbox_s[0]

tx_m = (sw - tw_m) // 2
ty_m = 6

tx_s = (sw - tw_s) // 2
ty_s = ty_m + th_m + 6

# Shadow
draw.text((tx_m + 2, ty_m + 2), main_text, font=font_main, fill=(15, 2, 5, 255))
# Main text in vibrant warm gold/yellow #FFD700
draw.text((tx_m, ty_m), main_text, font=font_main, fill=(255, 225, 115, 255))

# Subtitle in warm ivory
draw.text((tx_s + 1, ty_s + 1), sub_text, font=font_sub, fill=(20, 2, 5, 200))
draw.text((tx_s, ty_s), sub_text, font=font_sub, fill=(248, 229, 186, 255))

# Little gold laurel emblems on left and right
draw.text((25, 14), "★ KS ★", font=font_sub, fill=(229, 195, 120, 220))
draw.text((sw - 75, 14), "★ KS ★", font=font_sub, fill=(229, 195, 120, 220))

# Paste onto image
orig.paste(board, (sign_x1, sign_y1))

# 2. Pillar hanging board
# Box: x from 395 to 445, y from 330 to 415
pw = 445 - 395
ph = 415 - 330
p_board = Image.new('RGBA', (pw, ph), (45, 6, 16, 255))
p_draw = ImageDraw.Draw(p_board)
p_draw.rectangle([(1, 1), (pw - 2, ph - 2)], outline=(212, 175, 55, 220), width=1)
try:
    font_p_title = ImageFont.truetype('arialbd.ttf', 11)
    font_p_sub = ImageFont.truetype('arial.ttf', 8)
except:
    font_p_title = ImageFont.load_default()
    font_p_sub = ImageFont.load_default()

p_draw.text((6, 8), "KAMAL", font=font_p_title, fill=(255, 225, 115, 255))
p_draw.text((4, 24), "SELECTIONS", font=font_p_title, fill=(255, 225, 115, 255))
p_draw.text((6, 44), "SHADNAGAR", font=font_p_sub, fill=(248, 229, 186, 230))
p_draw.text((12, 60), "LADIES & KIDS", font=font_p_sub, fill=(229, 195, 120, 200))

orig.paste(p_board, (395, 330))

# Save output
out = orig.convert('RGB')
out.save('public/images/contact/kamal-selections-shadnagar-evening-showroom.jpg', quality=95)
print("Updated kamal-selections-shadnagar-evening-showroom.jpg with official Kamal Selections branding!")

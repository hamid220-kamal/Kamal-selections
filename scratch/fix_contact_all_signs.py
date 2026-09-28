import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont

# Load pristine original
brain_file = r'C:\Users\HAMID KAMAL\.gemini\antigravity-ide\brain\3b367c2e-ac93-441f-8df0-59ea0a5a77b9\store_hero_bg_1790522597923.jpg'
orig = Image.open(brain_file).convert('RGBA')
w, h = orig.size

# --- 1. MAIN FASCIA SIGN ---
# Full height from 80 to 160, covering the entire white fascia
sign_x1, sign_y1, sign_x2, sign_y2 = 510, 82, 1354, 160
sw = sign_x2 - sign_x1
sh = sign_y2 - sign_y1

board = Image.new('RGBA', (sw, sh), (42, 5, 14, 255))
draw = ImageDraw.Draw(board)

# Subtle warm lighting gradient
for y in range(sh):
    factor = 1.0 - (y / sh)
    r = int(58 + 45 * factor)
    g = int(12 + 25 * factor)
    b = int(22 + 10 * factor)
    draw.line([(0, y), (sw, y)], fill=(r, g, b, 255))

# Double Gold Border
draw.rectangle([(2, 2), (sw - 3, sh - 3)], outline=(212, 175, 55, 245), width=2)
draw.rectangle([(5, 5), (sw - 6, sh - 6)], outline=(229, 195, 120, 150), width=1)

try:
    font_main = ImageFont.truetype('arialbd.ttf', 38)
    font_sub = ImageFont.truetype('arialbd.ttf', 14)
    font_ks = ImageFont.truetype('arialbd.ttf', 18)
except:
    font_main = ImageFont.load_default()
    font_sub = ImageFont.load_default()
    font_ks = ImageFont.load_default()

main_text = "KAMAL SELECTIONS"
sub_text = "THE COMPLETE LADIES & KIDS WEAR SHOWROOM · SHADNAGAR"

bbox_m = draw.textbbox((0, 0), main_text, font=font_main)
tw_m = bbox_m[2] - bbox_m[0]
th_m = bbox_m[3] - bbox_m[1]

bbox_s = draw.textbbox((0, 0), sub_text, font=font_sub)
tw_s = bbox_s[2] - bbox_s[0]

tx_m = (sw - tw_m) // 2
ty_m = 9

tx_s = (sw - tw_s) // 2
ty_s = ty_m + th_m + 8

# Shadow
draw.text((tx_m + 2, ty_m + 2), main_text, font=font_main, fill=(15, 2, 5, 255))
# Main text in rich warm gold #FFD700
draw.text((tx_m, ty_m), main_text, font=font_main, fill=(255, 228, 120, 255))

# Subtitle
draw.text((tx_s + 1, ty_s + 1), sub_text, font=font_sub, fill=(20, 2, 5, 220))
draw.text((tx_s, ty_s), sub_text, font=font_sub, fill=(252, 238, 200, 255))

# Laurel / Star emblems
draw.text((30, 25), "✦ KS ✦", font=font_ks, fill=(229, 195, 120, 240))
draw.text((sw - 95, 25), "✦ KS ✦", font=font_ks, fill=(229, 195, 120, 240))

orig.paste(board, (sign_x1, sign_y1))

# Convert to OpenCV BGR for perspective warping
img_cv = cv2.cvtColor(np.array(orig), cv2.COLOR_RGBA2BGR)

# --- 2. HANGING SIGN WITH WARP PERSPECTIVE ---
# Corners of the yellow hanging sign in original image:
# Top-Left: (552, 238), Top-Right: (645, 222), Bottom-Right: (645, 335), Bottom-Left: (558, 355)
pts_dst = np.float32([
    [552, 238],
    [645, 222],
    [645, 335],
    [558, 355]
])

# Create a small high-res replacement sign for the hanging board
hw, hh = 200, 240
hang_img = np.zeros((hh, hw, 3), dtype=np.uint8)
# Warm yellow-cream background matching local Telangana street signs
hang_img[:] = (210, 235, 245) # BGR: warm cream

# Add gold-burgundy border
cv2.rectangle(hang_img, (3, 3), (hw - 4, hh - 4), (20, 15, 140), 4) # Red border
cv2.rectangle(hang_img, (8, 8), (hw - 9, hh - 9), (50, 180, 220), 2) # Gold inner border

# Text on hanging sign: "KAMAL" "SELECTIONS"
cv2.putText(hang_img, "KAMAL", (18, 55), cv2.FONT_HERSHEY_DUPLEX, 1.3, (15, 10, 130), 3, cv2.LINE_AA)
cv2.putText(hang_img, "SELECTIONS", (12, 105), cv2.FONT_HERSHEY_DUPLEX, 0.9, (15, 10, 130), 2, cv2.LINE_AA)

# Arrow pointing towards showroom (right arrow)
cv2.arrowedLine(hang_img, (35, 145), (165, 145), (30, 120, 30), 6, tipLength=0.35)

cv2.putText(hang_img, "LADIES & KIDS", (18, 185), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (10, 10, 100), 2, cv2.LINE_AA)
cv2.putText(hang_img, "SHADNAGAR", (28, 218), cv2.FONT_HERSHEY_SIMPLEX, 0.65, (15, 15, 120), 2, cv2.LINE_AA)

pts_src = np.float32([
    [0, 0],
    [hw, 0],
    [hw, hh],
    [0, hh]
])

M = cv2.getPerspectiveTransform(pts_src, pts_dst)
warped = cv2.warpPerspective(hang_img, M, (w, h))

mask = np.zeros((h, w), dtype=np.uint8)
cv2.fillConvexPoly(mask, np.int32(pts_dst), 255)
mask_inv = cv2.bitwise_not(mask)

img_bg = cv2.bitwise_and(img_cv, img_cv, mask=mask_inv)
img_fg = cv2.bitwise_and(warped, warped, mask=mask)
img_cv = cv2.add(img_bg, img_fg)

# --- 3. LOWER STANDEE (X: 580 to 645, Y: 430 to 525) ---
# Replace Telugu Sai Ram with Kamal Selections standee
standee_box = (582, 430, 646, 525)
st_w = standee_box[2] - standee_box[0]
st_h = standee_box[3] - standee_box[1]

standee = np.zeros((st_h, st_w, 3), dtype=np.uint8)
standee[:] = (230, 240, 245) # Cream BGR
cv2.rectangle(standee, (1, 1), (st_w - 2, st_h - 2), (20, 10, 140), 2)
cv2.putText(standee, "KAMAL", (6, 25), cv2.FONT_HERSHEY_SIMPLEX, 0.5, (15, 10, 130), 2, cv2.LINE_AA)
cv2.putText(standee, "SELECT.", (4, 45), cv2.FONT_HERSHEY_SIMPLEX, 0.42, (15, 10, 130), 1, cv2.LINE_AA)
cv2.putText(standee, "LADIES", (8, 68), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (10, 10, 10), 1, cv2.LINE_AA)
cv2.putText(standee, "& KIDS", (10, 85), cv2.FONT_HERSHEY_SIMPLEX, 0.45, (10, 10, 10), 1, cv2.LINE_AA)

img_cv[standee_box[1]:standee_box[3], standee_box[0]:standee_box[2]] = standee

# Save perfected image
dst_path = 'public/images/contact/kamal-selections-shadnagar-evening-showroom.jpg'
cv2.imwrite(dst_path, img_cv)
print("Finished complete contact showroom image branding!")

const fs = require('fs');
const path = require('path');

const rootDir = 'd:\\Kamal selections';
const publicDir = path.join(rootDir, 'public');

// Files to safely delete because they are duplicate/test files and 100% unused
const unusedFilesToDelete = [
  'public/store1.png',
  'public/store2.png',
  'public/store3.png',
  'public/store4.png',
  'public/store board.png',
  'public/images/women/products/garment-001.jpg',
  'public/images/women/products/garment-002.jpg',
  'public/images/women/products/garment-003.jpg',
  'public/images/women/products/garment-004.jpg',
  'public/images/women/products/garment-005.jpg',
  'public/images/women/products/garment-006.jpg',
  'public/images/women/categories/dresses.jpg',
  'public/images/women/categories/kurtis.jpg',
  'public/images/women/categories/tops.jpg',
  'public/images/women/categories/leggings.jpg',
  'public/images/women/categories/burqa.jpg',
  'public/images/women/categories/three-piece-sets.jpg',
  'public/images/women/categories/party-wear.jpg',
  'public/images/women/cat-3piece.jpg',
  'public/images/women/cat-burqa.jpg',
  'public/images/women/cat-dresses.jpg',
  'public/images/women/cat-kurtis.jpg',
  'public/images/women/cat-leggings.jpg',
  'public/images/women/cat-partywear.jpg',
  'public/images/women/cat-tops.jpg',
  'public/images/kids/cat-boys-wear.jpg',
  'public/images/kids/cat-frocks.jpg',
  'public/images/kids/cat-girls-wear.jpg',
  'public/images/kids/cat-kids-sets.jpg',
  'public/images/store/store-front.jpg',
  'public/images/store/store-hero-bg.jpg',
  'public/images/store/kamal-selections-store2.png',
];

let deletedCount = 0;
unusedFilesToDelete.forEach(relPath => {
  const fullPath = path.join(rootDir, relPath);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
    deletedCount++;
    console.log(`Deleted unused file: ${relPath}`);
  }
});

// Also remove public/assets directory if present and completely unused
const assetsDir = path.join(publicDir, 'assets');
if (fs.existsSync(assetsDir)) {
  fs.rmSync(assetsDir, { recursive: true, force: true });
  console.log('Deleted unused directory: public/assets');
}

console.log(`\nCleanup complete. Total unused files removed: ${deletedCount}`);

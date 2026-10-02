const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const rootDir = 'd:\\Kamal selections';
const publicDir = path.join(rootDir, 'public');
const srcDir = path.join(rootDir, 'src');

// 1. Inventory all files in public
function getFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getFiles(filePath, fileList);
    } else {
      fileList.push(filePath);
    }
  }
  return fileList;
}

const publicFiles = getFiles(publicDir);
const fileHashMap = {};
const publicFileMap = {}; // relativeUrl -> fullPath

for (const fp of publicFiles) {
  const buf = fs.readFileSync(fp);
  const hash = crypto.createHash('md5').update(buf).digest('hex');
  const relPath = path.relative(publicDir, fp).replace(/\\/g, '/');
  const webPath = '/' + relPath;

  if (!fileHashMap[hash]) {
    fileHashMap[hash] = [];
  }
  fileHashMap[hash].push({ webPath, fp, size: buf.length });
  publicFileMap[webPath] = fp;
}

console.log('=== 1. PUBLIC ASSET SUMMARY ===');
console.log(`Total files in public: ${publicFiles.length}`);

// Check duplicates by hash
console.log('\n=== 2. IDENTICAL DUPLICATE FILES IN PUBLIC (SAME MD5 HASH) ===');
let duplicateCount = 0;
for (const hash in fileHashMap) {
  if (fileHashMap[hash].length > 1) {
    duplicateCount++;
    console.log(`\nDuplicate Group (${fileHashMap[hash].length} copies, MD5: ${hash.substring(0,8)}):`);
    fileHashMap[hash].forEach(item => {
      console.log(`  - ${item.webPath} (${(item.size/1024).toFixed(1)} KB)`);
    });
  }
}
if (duplicateCount === 0) {
  console.log('No identical duplicate files found in public directory.');
}

// 2. Find all image references in src
const srcFiles = getFiles(srcDir).filter(f => {
  const ext = path.extname(f).toLowerCase();
  return ['.tsx', '.ts', '.jsx', '.js', '.css', '.html'].includes(ext);
});
const imageRefRegex = /["'`](?:\.?\.?\/|\/)?(images\/[^\s"'`]+\.(?:jpg|png|webp|jpeg|svg)|brand\/[^\s"'`]+\.(?:jpg|png|webp|jpeg|svg)|[a-zA-Z0-9_\-\.\/]+\.(?:jpg|png|webp|jpeg|svg))["'`]/g;

const imageRefsInSrc = []; // { sourceFile, imagePath, line }

for (const sf of srcFiles) {
  const relSf = path.relative(rootDir, sf).replace(/\\/g, '/');
  const content = fs.readFileSync(sf, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, idx) => {
    // Match any image path string in source code
    const matches = line.matchAll(/(?:"|'|`)(\/[^"'`]+\.(?:jpg|jpeg|png|webp|svg|ico))(?:"|'|`)/g);
    for (const match of matches) {
      imageRefsInSrc.push({
        sourceFile: relSf,
        imagePath: match[1],
        lineNumber: idx + 1,
        lineText: line.trim()
      });
    }
  });
}

console.log(`\n=== 3. SOURCE CODE IMAGE REFERENCES ===`);
console.log(`Total image path references found in src/: ${imageRefsInSrc.length}`);

// Check broken references
const brokenRefs = [];
const usedWebPaths = new Set();
const webPathUsage = {};

imageRefsInSrc.forEach(ref => {
  usedWebPaths.add(ref.imagePath);
  if (!webPathUsage[ref.imagePath]) {
    webPathUsage[ref.imagePath] = [];
  }
  webPathUsage[ref.imagePath].push(ref);

  if (!publicFileMap[ref.imagePath]) {
    brokenRefs.push(ref);
  }
});

console.log(`\n=== 4. BROKEN IMAGE REFERENCES (IN CODE BUT MISSING ON DISK) ===`);
if (brokenRefs.length === 0) {
  console.log('None! All image paths referenced in src/ exist in public/.');
} else {
  brokenRefs.forEach(br => {
    console.log(`BROKEN: ${br.imagePath} in ${br.sourceFile}:${br.lineNumber}`);
  });
}

// Check unused images
console.log(`\n=== 5. UNUSED IMAGES (ON DISK IN PUBLIC/ BUT NOT REFERENCED IN SRC/) ===`);
const unusedImages = [];
for (const webPath in publicFileMap) {
  // Skip non-image files like favicon or robots or sitemap if any
  if (/\.(jpg|jpeg|png|webp|svg)$/i.test(webPath)) {
    if (!usedWebPaths.has(webPath)) {
      unusedImages.push(webPath);
    }
  }
}
if (unusedImages.length === 0) {
  console.log('None! All images in public/ are referenced in src/.');
} else {
  unusedImages.forEach(u => console.log(`  - ${u}`));
}

// Check repeated image usage in code
console.log(`\n=== 6. IMAGES REFERENCED MULTIPLE TIMES IN SRC/ ===`);
for (const webPath in webPathUsage) {
  const refs = webPathUsage[webPath];
  if (refs.length > 1) {
    console.log(`\n${webPath} referenced ${refs.length} times:`);
    refs.forEach(r => console.log(`  - ${r.sourceFile}:${r.lineNumber}`));
  }
}

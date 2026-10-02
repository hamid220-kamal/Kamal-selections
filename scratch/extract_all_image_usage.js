const fs = require('fs');
const path = require('path');

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

const files = getFiles('src');
const usageMap = {};

for (const f of files) {
  if (!/\.(tsx|ts|jsx|js|css)$/.test(f)) continue;
  const content = fs.readFileSync(f, 'utf-8');
  const relFile = path.relative('.', f).replace(/\\/g, '/');

  // Match all string literals ending in .jpg, .png, .webp, .jpeg, .svg
  const matches = content.matchAll(/(?:["'`])(\/(?:images|brand|assets)\/[^"'`\s]+\.(?:jpg|jpeg|png|webp|svg))|(?:["'`])(\/[^"'`\s]+\.(?:png|jpg|webp|jpeg|svg))(?:["'`])/g);
  
  for (const m of matches) {
    const imgPath = m[1] || m[2];
    if (imgPath) {
      if (!usageMap[imgPath]) {
        usageMap[imgPath] = [];
      }
      usageMap[imgPath].push(relFile);
    }
  }
}

console.log("=== DETAILED IMAGE USAGE MAP ===");
for (const img in usageMap) {
  console.log(`\nIMAGE: ${img}`);
  console.log(`  Used in (${usageMap[img].length} files):`);
  const uniqueFiles = [...new Set(usageMap[img])];
  uniqueFiles.forEach(uf => console.log(`   - ${uf}`));
}

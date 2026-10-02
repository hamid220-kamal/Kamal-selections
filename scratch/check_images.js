const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      if (!name.includes('node_modules') && !name.includes('.next')) {
        getFiles(name, files);
      }
    } else if (/\.(tsx?|js|css)$/.test(name)) {
      files.push(name);
    }
  }
  return files;
}

const workspaceRoot = path.resolve(__dirname, '..');
const srcFiles = getFiles(path.join(workspaceRoot, 'src'));
const imageRegex = /["']\/((?:images|brand|assets)\/[^"'\s?>]+?\.(?:jpg|jpeg|png|svg|webp|gif))["']/g;

const missing = [];
const checked = new Set();
const found = [];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    if (checked.has(imgPath)) continue;
    checked.add(imgPath);

    const fullPath = path.join(workspaceRoot, 'public', imgPath);
    if (!fs.existsSync(fullPath)) {
      missing.push({ file: path.relative(workspaceRoot, file), imgPath });
    } else {
      found.push(imgPath);
    }
  }
}

console.log('TOTAL UNIQUE IMAGES CHECKED:', checked.size);
console.log('EXISTS COUNT:', found.length);
console.log('MISSING IMAGES COUNT:', missing.length);
if (missing.length > 0) {
  console.log('MISSING IMAGES:');
  console.log(JSON.stringify(missing, null, 2));
}

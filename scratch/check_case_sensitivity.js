const fs = require('fs');
const path = require('path');

const workspaceRoot = path.resolve(__dirname, '..');

function checkExactCase(relPath) {
  const parts = relPath.split('/');
  let current = path.join(workspaceRoot, 'public');

  for (const part of parts) {
    if (!part) continue;
    if (!fs.existsSync(current)) return false;
    const children = fs.readdirSync(current);
    const exactMatch = children.find(child => child === part);
    if (!exactMatch) {
      return { expected: part, foundInDir: children.find(child => child.toLowerCase() === part.toLowerCase()) };
    }
    current = path.join(current, exactMatch);
  }
  return true;
}

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

const srcFiles = getFiles(path.join(workspaceRoot, 'src'));
const imageRegex = /["']\/((?:images|brand|assets)\/[^"'\s?>]+?\.(?:jpg|jpeg|png|svg|webp|gif))["']/g;

const caseMismatches = [];

for (const file of srcFiles) {
  const content = fs.readFileSync(file, 'utf8');
  let match;
  while ((match = imageRegex.exec(content)) !== null) {
    const imgPath = match[1];
    const res = checkExactCase(imgPath);
    if (res !== true) {
      caseMismatches.push({ file: path.relative(workspaceRoot, file), imgPath, details: res });
    }
  }
}

console.log('CASE MISMATCH COUNT:', caseMismatches.length);
if (caseMismatches.length > 0) {
  console.log('CASE MISMATCHES:');
  console.log(JSON.stringify(caseMismatches, null, 2));
}

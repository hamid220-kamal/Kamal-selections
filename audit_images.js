const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const full = path.join(dir, file);
    const stat = fs.statSync(full);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(full));
    } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
      results.push(full);
    }
  });
  return results;
}

const files = walk('./src');
const imageRegex = /['"](\/[^'"]+\.(?:png|jpg|jpeg|webp|svg))['"]/g;
const usage = {};

files.forEach(f => {
  const content = fs.readFileSync(f, 'utf8');
  let m;
  const relPath = f.replace(/\\/g, '/');
  while ((m = imageRegex.exec(content)) !== null) {
    const img = m[1];
    if (!usage[img]) usage[img] = [];
    usage[img].push(relPath);
  }
});

console.log('--- IMAGE USAGE AUDIT ---');
for (const [img, occurrences] of Object.entries(usage)) {
  console.log(`${img} (${occurrences.length} times):`);
  occurrences.forEach(o => console.log(`   - ${o}`));
}

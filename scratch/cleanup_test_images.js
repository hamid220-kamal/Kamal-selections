const fs = require('fs');
const path = require('path');

const dir = 'd:/Kamal selections/public/images/store';
if (fs.existsSync(dir)) {
  const files = fs.readdirSync(dir);
  let count = 0;
  for (const file of files) {
    if (file.startsWith('_test_')) {
      fs.unlinkSync(path.join(dir, file));
      count++;
    }
  }
  console.log(`Cleaned ${count} test files.`);
}

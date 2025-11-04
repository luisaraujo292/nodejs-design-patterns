const fs = require('fs')
try {
  const data = fs.readFileSync('package.json', 'utf8');
  console.log('File content (sync):', data);
} catch (err) {
  console.error('Error reading file synchronously:', err);
}

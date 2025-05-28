const fs = require('fs');
const path = require('path');

const lottiesDir = __dirname;
const manifestPath = path.join(lottiesDir, 'manifest.json');

fs.readdir(lottiesDir, (err, files) => {
  if (err) {
    console.error('Failed to read lotties directory:', err);
    process.exit(1);
  }
  const lottieFiles = files.filter(f => f.endsWith('.json'));
  fs.writeFileSync(manifestPath, JSON.stringify(lottieFiles, null, 2));
  console.log('manifest.json generated with', lottieFiles.length, 'files.');
}); 
const fs = require('fs');
const path = require('path');

const lottiesDir = path.join(__dirname, '/lotties');
const manifestPath = path.join(__dirname, 'manifest.json');

fs.readdir(lottiesDir, (err, files) => {
  if (err) {
    console.error('Failed to read lotties directory:', err);
    process.exit(1);
  }
  const lottieFiles = files.filter(f => f.endsWith('.json'));
  fs.unlinkSync(manifestPath);
  fs.writeFileSync(manifestPath, JSON.stringify(lottieFiles, null, 2));
  console.log('manifest.json generated with', lottieFiles.length, 'files.');
}); 
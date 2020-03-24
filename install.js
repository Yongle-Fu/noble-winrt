if (process.platform === 'win32') {
  const cp = require('child_process');
  cp.execSync('prebuild-install --force', { stdio: 'inherit' });
}

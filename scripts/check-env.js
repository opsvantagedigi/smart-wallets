import { execSync } from 'child_process';

function isTracked(file) {
  try {
    const out = execSync(`git ls-files --error-unmatch ${file}`, { stdio: 'pipe' }).toString().trim();
    return !!out;
  } catch (e) {
    return false;
  }
}

function hasStaged(file) {
  try {
    const out = execSync(`git diff --name-only --staged`, { stdio: 'pipe' }).toString();
    return out.split(/\r?\n/).includes(file);
  } catch (e) {
    return false;
  }
}

const file = '.env.local';

if (isTracked(file) || hasStaged(file)) {
  console.error('\nError: .env.local is tracked or staged for commit.');
  console.error('Stop: Do not commit or push .env.local as it contains sensitive keys.\n');
  process.exit(1);
}

process.exit(0);

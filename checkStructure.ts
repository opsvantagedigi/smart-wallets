// checkStructure.ts
import fs from 'fs';
import path from 'path';

const expectedStructure = {
  folders: ['components', 'pages', 'public', 'styles', '.vscode'],
  files: ['README.md', 'package.json', 'tsconfig.json', 'next.config.js']
};

const root = process.cwd();

function checkDiscrepancies() {
  const actualItems = fs.readdirSync(root);
  const actualFolders = actualItems.filter(item => fs.statSync(path.join(root, item)).isDirectory());
  const actualFiles = actualItems.filter(item => fs.statSync(path.join(root, item)).isFile());

  const missingFolders = expectedStructure.folders.filter(f => !actualFolders.includes(f));
  const missingFiles = expectedStructure.files.filter(f => !actualFiles.includes(f));

  const unexpectedFolders = actualFolders.filter(f => !expectedStructure.folders.includes(f));
  const unexpectedFiles = actualFiles.filter(f => !expectedStructure.files.includes(f));

  console.log('🔍 Folder & File Discrepancy Report');
  console.log('----------------------------------');
  console.log('❌ Missing Folders:', missingFolders);
  console.log('❌ Missing Files:', missingFiles);
  console.log('⚠️ Unexpected Folders:', unexpectedFolders);
  console.log('⚠️ Unexpected Files:', unexpectedFiles);
}

checkDiscrepancies();

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name from the file URL
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Output file
const outputPath = path.join(__dirname, 'combined.tsx');

// Function to recursively scan directory for .tsx files
function getAllTsxFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllTsxFiles(filePath, fileList);
    } else if (path.extname(file) === '.tsx') {
      fileList.push(filePath);
    }
  });

  return fileList;
}

// Function to combine .tsx files
function combineTsxFiles() {
  const tsxFiles = getAllTsxFiles(__dirname);

  let combinedContent = '';

  tsxFiles.forEach((file, index) => {
    const content = fs.readFileSync(file, 'utf8');
    combinedContent += `\n\n// ${path.relative(__dirname, file)}\n${content}`;
  });

  fs.writeFileSync(outputPath, combinedContent, 'utf8');
  console.log(`Combined ${tsxFiles.length} files into ${outputPath}`);
}

// Run the function
combineTsxFiles();

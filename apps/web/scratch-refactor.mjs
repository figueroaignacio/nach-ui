import fs from 'fs';
import path from 'path';

const SRC_DIR = '/home/ignaciofigueroa/Desktop/projects/ui/apps/web/src';

const walk = (dir, fileList = []) => {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const stat = fs.statSync(path.join(dir, file));
    if (stat.isDirectory()) {
      fileList = walk(path.join(dir, file), fileList);
    } else if (file.endsWith('.tsx')) {
      fileList.push(path.join(dir, file));
    }
  }
  return fileList;
};

const regexMap = [
  { tag: 'h1', variant: 'h1' },
  { tag: 'h2', variant: 'h2' },
  { tag: 'h3', variant: 'h3' },
  { tag: 'h4', variant: 'h4' },
  { tag: 'h5', variant: 'h5' },
  { tag: 'h6', variant: 'h6' },
  { tag: 'p', variant: 'p' },
];

const files = walk(SRC_DIR);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  for (const { tag, variant } of regexMap) {
    // Regex for opening tags, ensure we don't match things like <page
    const openTagRegex = new RegExp(`<${tag}\\b([^>]*)>`, 'g');
    const closeTagRegex = new RegExp(`<\\/${tag}>`, 'g');

    if (openTagRegex.test(content)) {
      content = content.replace(openTagRegex, `<Typography variant="${variant}"$1>`);
      content = content.replace(closeTagRegex, `</Typography>`);
      changed = true;
    }
  }

  if (changed) {
    if (!content.includes('import { Typography }')) {
      const useClientMatch = content.match(/^(?:'use client'|"use client");?\\s*\\n/);
      if (useClientMatch) {
        content = content.substring(0, useClientMatch[0].length) + 
                  `import { Typography } from '@repo/ui/components/typography';\n` + 
                  content.substring(useClientMatch[0].length);
      } else {
        content = `import { Typography } from '@repo/ui/components/typography';\n` + content;
      }
    }
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}

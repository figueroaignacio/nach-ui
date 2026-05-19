import { components, db } from '@repo/db';
import fs from 'node:fs';
import path from 'node:path';

const UI_COMPONENTS_ROOT = path.resolve(process.cwd(), 'packages/ui/src/components');
const LAYOUT_COMPONENTS_ROOT = path.resolve(process.cwd(), 'packages/ui/src/layout');

function extractDependencies(code: string): string[] {
  const dependencies: string[] = [];
  const importRegex = /from\s+['"]([^'"]+)['"]/g;
  let match;

  while ((match = importRegex.exec(code)) !== null) {
    let dep = match[1];

    if (dep && !dep.startsWith('.') && !dep.startsWith('@repo/')) {
      const parts = dep.split('/');

      if (dep.startsWith('@')) {
        if (parts.length >= 2) {
          dep = `${parts[0]}/${parts[1]}`;
        }
      } else {
        dep = parts[0] as string;
      }

      if (dep === 'motion') {
        dependencies.push('motion');
      } else {
        dependencies.push(dep);
      }
    }
  }

  return [...new Set(dependencies)];
}

async function processDirectory(dirPath: string, type: 'ui' | 'layout') {
  if (!fs.existsSync(dirPath)) {
    console.error(`❌ Error: Root path not found: ${dirPath}`);
    return;
  }

  const items = fs.readdirSync(dirPath);

  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const stats = fs.statSync(itemPath);

    let code = '',
      slug = '',
      name = '';

    if (stats.isDirectory()) {
      const files = fs.readdirSync(itemPath);
      const componentFile = files.find((f: string) => f.endsWith('.tsx') && !f.includes('.test.'));
      if (!componentFile) continue;
      code = fs.readFileSync(path.join(itemPath, componentFile), 'utf8');
      name = item;
      slug = item.toLowerCase();
    } else if (item.endsWith('.tsx') && !item.includes('.test.')) {
      code = fs.readFileSync(itemPath, 'utf8');
      name = item.replace('.tsx', '');
      slug = name.toLowerCase();
    } else continue;

    const deps = extractDependencies(code);
    console.log(`📦 Syncing: ${name}...`);

    try {
      await db
        .insert(components)
        .values({
          name,
          slug,
          code,
          type,
          dependencies: deps,
          registryDependencies: [],
        })
        .onConflictDoUpdate({
          target: components.slug,
          set: {
            code,
            dependencies: deps,
            updatedAt: new Date(),
          },
        });

      console.log(`✅ ${name} ready. (Deps: ${deps.join(', ') || 'none'})`);
    } catch (error) {
      console.error(`❌ Error syncing ${name}:`, error);
    }
  }
}

async function syncRegistry() {
  console.log('🚀 Starting sync registry...');

  await processDirectory(UI_COMPONENTS_ROOT, 'ui');
  await processDirectory(LAYOUT_COMPONENTS_ROOT, 'ui'); // Keeping type 'ui' as per DB schema if it doesn't have 'layout'

  console.log('\n✨ Syncing finished successfully.');
  process.exit(0);
}

syncRegistry();

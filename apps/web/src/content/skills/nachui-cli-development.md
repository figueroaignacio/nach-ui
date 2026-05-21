---
name: 'nachui-cli-development'
description: 'Use when modifying or extending CLI commands, prompts, build configurations, or API integrations in packages/cli.'
---

# NachUI CLI Development Guide

You are modifying or expanding the official NachUI Command Line Interface (`packages/cli`). The CLI uses **Commander** for commands, **Clack** for prompts, and **Kleur** for console styling.

## Directory Structure

- `src/index.ts`: The CLI entry point that configures Commander and routes arguments.
- `src/commands/`: Individual command implementations:
  - [init.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/commands/init.ts): Installs config files and prepares a workspace for NachUI.
  - [add.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/commands/add.ts): Downloads and adds primitives to the user's workspace.
  - [list.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/commands/list.ts): Lists available components in the registry.
  - [update.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/commands/update.ts): Updates local component files matching registry versions.
  - [remove.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/commands/remove.ts): Safely cleans up installed components from a workspace.
- `src/lib/`: Common utilities:
  - [api.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/lib/api.ts): Registry fetching and API requests.
  - [package-manager.ts](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/cli/src/lib/package-manager.ts): Logic to detect the user's package manager (`npm`, `pnpm`, `yarn`, `bun`).

## Development and Compilation Commands

Always run CLI build and check scripts from the root directory using workspace filters:

```bash
# Run typescript type check
pnpm --filter @repo/cli type-check

# Compile CLI into dist using tsup (generates ESM/CJS bundles)
pnpm --filter @repo/cli build

# Start compiler in watch mode for development
pnpm --filter @repo/cli dev
```

## Designing CLI Commands with Commander

New commands must be added to the Commander instance in `src/index.ts` and their logic defined under `src/commands/`.

```typescript
import { Command } from 'commander';

const program = new Command();

program.name('nachui').description('Official CLI for NachUI').version('1.0.0');

program
  .command('my-command')
  .description('Explain command actions')
  .argument('[arg]', 'Optional command argument')
  .option('-f, --force', 'Force execution')
  .action(async (arg, options) => {
    // Import execution logic dynamically to keep startup fast
    const { myCommandAction } = await import('./commands/my-command');
    await myCommandAction(arg, options);
  });
```

## Console Prompts & UI Style Guide (Clack & Kleur)

When designing user-facing console interfaces:

1. **Always wrap interactions** in Clack's `intro()` and `outro()` statements.
2. Use **spinners** for any network operations (e.g. fetching registry, downloading files).
3. Use **Kleur** for text styling and colors:
   - **Info / Dim:** Use `kleur.dim()` for secondary advice or descriptions.
   - **Success:** Use `kleur.green()` or `kleur.cyan()`.
   - **Errors / Warnings:** Use `kleur.red()` for failure states.

```typescript
import * as p from '@clack/prompts';
import kleur from 'kleur';

export async function myCommandAction() {
  p.intro(kleur.cyan('NachUI Command'));

  const result = await p.text({
    message: 'Enter input details:',
    placeholder: 'e.g., button',
    validate: (value) => {
      if (!value) return 'Value is required!';
    },
  });

  if (p.isCancel(result)) {
    p.cancel('Operation cancelled.');
    process.exit(0);
  }

  const s = p.spinner();
  s.start('Running task...');
  // do work
  s.stop(kleur.green('Task complete!'));

  p.outro(kleur.cyan('Done!'));
}
```

## Error Handling & Cancellation Safety

- Always handle `p.isCancel(value)` checks after every Clack prompt to exit cleanly when a user presses `Ctrl+C`.
- Gracefully catch and log errors using `kleur.red()` before terminating the process with a non-zero exit code (`process.exit(1)`).
- Do not leave orphaned file-write operations or incomplete configurations if a command crashes halfway.

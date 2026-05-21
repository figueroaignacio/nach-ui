---
name: 'nachui-docs-management'
description: 'Use when modifying documentation pages, routing, next-intl translations, MDX schemas, or AI functionality in apps/docs.'
---

# NachUI Docs Management

You are managing or modifying the NachUI documentation application (`apps/docs`). This application uses Next.js 16, `@content-collections` for parsing MDX, and the Vercel AI SDK for interactive AI components.

## Application Architecture

- **Docs App**: Built with Next.js 16 (`apps/docs`).
- **Content Pipeline**: Uses `@content-collections` to compile markdown and MDX files in `content/` to type-safe collections.
- **Localization**: Relies on `next-intl` for routing and translating localizable UI copy.
- **AI Integration**: Equipped with Vercel AI SDK + Google Gemini APIs.

## Commands

Run docs-related commands from the root directory using workspace filters:

```bash
# Start the docs development server + content compiler
pnpm --filter docs dev

# Build the production Next.js app
pnpm --filter docs build

# Launch the production server (after building)
pnpm --filter docs start
```

## Content Collections Cache

- The content collection caching directory is `apps/docs/.content-collections`.
- If you run into build errors related to MDX fields, outdated schemas, or cache mismatches, delete this folder to force a clean compilation run.

## MDX Component Rules

- **Deterministic Behavior**: MDX components must be deterministic. Do NOT use random IDs (`Math.random()`) or dynamic timestamp defaults (`Date.now()`) during initialization, as this will trigger React SSR hydration mismatch errors.
- **Primitives Integration**: Import reusable primitives from `@repo/ui` inside docs components rather than copying raw code styles.

## Environment Variables & Secrets

- Secrets (such as Google Gemini/OpenAI API keys) belong exclusively in `apps/docs/.env`.
- **NEVER** commit secrets, `.env` files, or populated API keys to version control. Keep `.env` added to your `.gitignore`.

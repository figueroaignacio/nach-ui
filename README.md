# NachUI

[English] | [Español](./README.es.md)

### Design System Components You Actually Own.

**NachUI** is a set of **copy-paste, dependency-free** UI components built with **React**, **Next.js**, **Tailwind**, and **Motion**. It provides a high-ownership, maintainable codebase instead of bloated external dependencies.

## The Vision

Standard development often sacrifices ownership for speed. **NachUI** provides both:

- **Full Code Ownership**: No `node_modules` lock-in. You own the primitive source code.
- **Zero Wrappers**: Styled with **Tailwind CSS v4** and animated with **Framer Motion** with zero runtime package overhead.
- **Zero-Bloat Strategy**: Each component is independent, readable, and ready for customization.

## The Tech Stack

This monorepo leverages modern tooling to ensure scalability and developer efficiency.

| Technology         | Purpose                                                           | Rationale                                                                |
| :----------------- | :---------------------------------------------------------------- | :----------------------------------------------------------------------- |
| **Workspace**      | [Turbo](https://turbo.build/) + [pnpm](https://pnpm.io/)          | Fast execution and efficient shared caching.                             |
| **Core Engine**    | [Next.js 16](https://nextjs.org/)                                 | Advanced React 19 patterns with full App Router and RSC support.         |
| **Visual Layer**   | [Tailwind CSS v4](https://tailwindcss.com/)                       | Pure CSS variables architecture with zero runtime overhead.              |
| **Content Rail**   | [Velite](https://velite.js.org/)                                  | Type-safe content transformation for a unified documentation schema.     |
| **AI Integration** | [Google Gemini 2.5](https://deepmind.google/technologies/gemini/) | Context-aware reasoning via the [Vercel AI SDK](https://sdk.vercel.ai/). |
| **Motion**         | [Framer Motion](https://www.framer.com/motion/)                   | Physics-based interactions.                                              |

## Repository Structure

The project is structured as a **Turborepo monorepo** with clean architectural boundaries:

### Applications

- **[apps/docs](apps/docs)**: The Documentation Portal. Featuring real-time component previews and an AI assistant.

### Core Logic & Packages

- **[packages/ui](packages/ui)**: The Primitive Layer. React components styled with the latest Tailwind v4 standards.
- **[packages/ai](packages/ai)**: The AI Assistant. Orchestrates LLM interactions and context-aware responses.
- **[packages/typescript-config](packages/typescript-config)** & **[packages/eslint-config](packages/eslint-config)**: Unified strict-mode defaults and styling enforcement across the entire workspace.

## AI-Powered Documentation

NachUI features an integrated **Gemini-powered assistant**. Built with the Vercel AI SDK, it offers context-aware guidance, providing a technical pair-programming experience focused on NachUI's architectural patterns and component customization.

## Quick Start

Ensure you have [pnpm](https://pnpm.io/) installed, then:

```bash
# Initialize the workspace
pnpm install

# Launch the unified development environment
pnpm dev

# Generate production-ready bundles
pnpm build
```

## Developed by Ignacio Figueroa

If NachUI accelerates your workflow, consider supporting the project with a ⭐ on GitHub.

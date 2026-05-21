---
name: 'nachui-design'
description: 'Use when styling, designing, or adjusting UI layout, colors, variables, typography, and visual assets in NachUI.'
---

# NachUI Design System Skill

You are styling interfaces, pages, or components for the NachUI ecosystem. Your work must adhere to the core visual system, design tokens, and aesthetic principles.

## Visual Philosophy

NachUI embodies a **Clean, Clinical Minimalist** aesthetic. The design is structured, premium, and precise.

- **Colors**: High-fidelity whites with subtle blue undertones, structured contrast using strict luminance separation, and perceptually uniform elevations defined in the **OKLCH** color space.
- **Corner Radius**: Large, soft pill-like radius base (`--radius: 1rem` / `16px`) to temper technical interfaces with an approachable curve.
- **Motion**: Smooth, high-performance transitions and layout changes that feel natural and interactive.

## Color Tokens & Mappings

Never use hardcoded hex or RGB strings unless explicitly configuring overrides. Rely on the CSS semantic theme tokens:

| Token Category         | Theme Token Variable   | Light Mode Color                 | Dark Mode Color               |
| :--------------------- | :--------------------- | :------------------------------- | :---------------------------- |
| **Canvas**             | `--background`         | `oklch(99.5% 0.005 250)` #F8FAFC | `oklch(14% 0.01 250)` #1E293B |
| **Foreground Text**    | `--foreground`         | `oklch(15% 0.01 250)` #1E293B    | `oklch(98% 0 0)` #FAFAFA      |
| **Containers**         | `--card`               | `oklch(98% 0.005 250)` #F1F5F9   | `oklch(18% 0.01 250)` #334155 |
| **Strokes & Dividers** | `--border` / `--input` | `oklch(90% 0.01 250)` #E2E8F0    | `oklch(25% 0.01 250)` #475569 |
| **Interactive**        | `--primary`            | `oklch(60% 0.2 45)` #0EA5E9      | `oklch(65% 0.2 45)` #38BDF8   |

### Per-Component Color Overrides

Components support customizable accent colors using the `data-theme-color` attribute. Supported themes:

- **Blue** (Default sky accent): `--primary: oklch(60% 0.15 250)`
- **Zinc** (Monochrome neutral): `--primary: oklch(20.5% 0 0)` (Dark: `oklch(98.5% 0 0)`)
- **Green** (Nature accent): `--primary: oklch(65% 0.15 150)`
- **Rose** (Warm accent): `--primary: oklch(60% 0.2 15)`

## Typography

- **Body Text**: `var(--font-sans)` with `tracking-wide` (light letter-spacing) for legible smaller UI text.
- **Heading Text**: `var(--font-heading)` with distinct weights and crisp spacing hierarchies.
- Always enforce `antialiased` rendering on font layers.

## Styling Implementation Rules

1. **Interactive Elements**: Use pill shapes or soft rounded shapes based on the root radius token:
   - `--radius-sm`: `calc(1rem - 0.75rem)` (0.25rem - checkbox / status indicators)
   - `--radius-md`: `calc(1rem - 0.5rem)` (0.5rem - inputs / buttons)
   - `--radius-lg`: `1rem` (default container / card radius)
   - `--radius-xl`: `calc(1rem + 0.5rem)` (1.5rem - floating menus)
   - `--radius-2xl`: `calc(1rem + 1rem)` (2.0rem - hero sections)
2. **Interactive States**:
   - **Focus**: Ring of 2px using `--ring` color. Keep focus states distinct for accessibility compliance.
   - **Hover**: Subtle brightness shifts or transition states scaling background colors to `--secondary` / `--accent`.
3. **Card Shadow Depth**: Light mode UI uses flat boundaries. Dark mode introduces depth shadows:
   - `--shadow-lg`: `0 10px 30px -10px oklch(0% 0 0 / 0.9)`
4. **Scrollbars**: Apply thin scrollbar states (`scrollbar-width: thin` with thumb set to `--border`) or completely hide it when designing horizontal swipe rows (`hide-scrollbar`).

## Technical Guidelines

- **Tailwind v4 Configuration**: Tailored variables are exposed inside `@theme inline` under [globals.css](file:///home/ignaciofigueroa/Desktop/projects/ui/packages/ui/src/css/globals.css).
- **Reduced Motion**: Respect system preferences by ensuring animations are bypassed when `@media (prefers-reduced-motion: reduce)` is matching.
- **Contrast Compliance**: Ensure text pairings always pass WCAG AA readability contrast guidelines.

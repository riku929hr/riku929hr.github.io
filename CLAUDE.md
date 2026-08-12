# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Rikuto Sato (@riku929hr), built with Astro as a fully static, zero-JS site. The site is deployed to GitHub Pages and showcases web development work and contact information.

## Architecture

- **Framework**: Astro (static output)
- **Styling**: Tailwind CSS (v4, CSS-first configuration) with custom font (LINE Seed JP)
- **Icons**: `astro-icon` with Iconify icon sets (`fa6-brands`, `fa6-solid`, `simple-icons`)
- **Type Safety**: TypeScript with strict configuration (`astro/tsconfigs/strict`)
- **Package Manager**: pnpm (version 9.1.2)

### Project Structure

```
src/
├── layouts/
│   └── Layout.astro         # Root layout with gradient background
├── pages/
│   └── index.astro          # Homepage composition
├── components/
│   ├── Section.astro        # Shared section wrapper
│   ├── Panel.astro          # Shared link panel with icon
│   └── toppage/             # Homepage components
│       ├── About.astro
│       ├── BlogLinks.astro
│       ├── Contacts.astro
│       └── Header.astro
└── styles/
    └── globals.css          # Global styles, Tailwind and font imports
```

### Component Architecture

- **Section-based Layout**: Homepage uses modular sections (Header, About, Contacts, BlogLinks)
- **Shared Components**: `Panel.astro` and `Section.astro` are reused across sections
- **Font Strategy**: Self-hosted LINE Seed JP via `@fontsource/line-seed-jp`, applied through Tailwind's `--default-font-family`
- **Background**: Gradient blob backgrounds with CSS clip-path for visual appeal

## Development Commands

```bash
# Development server
pnpm dev

# Production build (generates static output in ./dist/)
pnpm build

# Preview the production build
pnpm preview

# Type/template checking
pnpm check

# Code formatting
pnpm format        # Format and write changes
pnpm format:check  # Check formatting without changes
```

## Key Configuration Files

- `astro.config.mjs`: Astro configuration (site URL, Tailwind Vite plugin, `astro-icon` integration)
- `src/styles/globals.css`: Tailwind v4 CSS-first configuration and font imports
- `tsconfig.json`: Extends `astro/tsconfigs/strict`

## Deployment

The site builds to the `./dist/` directory, which is deployed to GitHub Pages via `.github/workflows/deploy.yml`. `public/CNAME` ensures the custom domain is preserved in the build output.

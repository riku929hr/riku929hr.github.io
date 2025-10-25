# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website for Rikuto Sato (@riku929hr), built with Next.js using the T3 stack architecture. The site is configured for static export to GitHub Pages and showcases web development work and contact information.

## Architecture

- **Framework**: Next.js 15 with App Router and static export (`output: "export"`)
- **Styling**: Tailwind CSS with custom font (Geist) and Noto Sans JP
- **Type Safety**: TypeScript with strict configuration
- **Environment**: T3 environment validation with Zod
- **Package Manager**: pnpm (version 9.1.2)

### Project Structure

```
src/
├── app/
│   ├── _ui/                 # UI components organized by page/feature
│   │   ├── fonts.ts         # Font configurations
│   │   └── toppage/         # Homepage components
│   │       ├── About.tsx
│   │       ├── BlogLinks.tsx
│   │       ├── Contacts.tsx
│   │       ├── Header.tsx
│   │       └── components/  # Shared components for toppage
│   ├── layout.tsx           # Root layout with gradient background
│   └── page.tsx            # Homepage composition
├── env.js                  # Environment validation schema
└── styles/
    └── globals.css         # Global styles and Tailwind imports
```

### Component Architecture

- **Section-based Layout**: Homepage uses modular sections (Header, About, Contacts, BlogLinks)
- **Atomic Design**: Shared components in `components/` directories (Panel.tsx, Section.tsx)
- **Font Strategy**: Custom font loading with Geist Sans and Noto Sans JP for Japanese content
- **Background**: Gradient blob backgrounds with CSS clip-path for visual appeal

## Development Commands

```bash
# Development server
pnpm dev

# Production build (generates static export in ./out/)
pnpm build

# Linting
pnpm lint

# Code formatting
pnpm format        # Format and write changes
pnpm format:check  # Check formatting without changes

# Production server (after build)
pnpm start
```

## Key Configuration Files

- `next.config.js`: Configured for static export with environment validation
- `tailwind.config.ts`: Extended with custom Geist font family
- `src/env.js`: T3-style environment validation with Zod schemas
- `tsconfig.json`: TypeScript configuration for Next.js

## Deployment

The site is configured for static export to GitHub Pages. The build process generates files in the `./out/` directory which can be deployed to any static hosting service.

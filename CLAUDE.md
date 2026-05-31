# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio/CV website built with Next.js 16 and React 19. It showcases projects and personal information with animations powered by Framer Motion.

## Tech Stack

- **Framework**: Next.js 16.2.4 (App Router via `src/app`)
- **Language**: TypeScript 6.0.3 (strict mode)
- **UI**: React 19.2.5
- **Styling**: SASS/SCSS with CSS Modules (component-scoped)
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Package Manager**: Bun (use `bun` instead of `npm`)

## Development Commands

- `bun --bun next dev` — Start dev server (typically http://localhost:3000)
- `bun --bun next build` — Build for production
- `bun --bun next start` — Run production server
- `bun --bun next lint` — Run ESLint

## Code Architecture

**Directory Structure**:
- `src/app/` — Next.js App Router pages and layouts
  - `page.tsx` — Home page (composition of components)
  - `layout.tsx` — Root layout wrapper
  - `components/` — Feature-organized components (basicInfo, projects, contact, pill)
- `styles/` — Global and shared styling
  - `globals.css` — Global styles, typography, color definitions
  - `_utilities.scss` — Reusable SCSS mixins (hover/focus/active, mobile/desktop breakpoints)
  - `colors.scss` — Color variables ($surface, $primary, $accent)
- `public/` — Static assets (favicon in images/)

**Component Pattern**:
Each feature component (e.g., `basicInfo`, `projects`) follows this structure:
- `ComponentName.tsx` — React component
- `component-name.module.scss` — Component-scoped styles

**Styling Approach**:
- Global typography and resets in `globals.css`
- SCSS mixins for responsive design: `@include mobile` for ≤768px, `@include desktop` for ≥1200px
- CSS Modules for component styling to avoid class conflicts
- Defined color palette in `colors.scss` (surface: #BADFDB, primary: #FCF9EA, accent: #FFA4A4)

## Known Issues

From README.md:
- Font sizing on mobile needs adjustment
- Mobile responsiveness improvements needed (use `@include mobile` mixin at 768px breakpoint)

## Notes

- No test framework configured (consider adding if needed)
- Uses Bun exclusively—do not use `npm` or `yarn` commands
- Strict TypeScript compilation enabled
- React Strict Mode is enabled in Next.js config
- Recent complete rewrite of the portfolio (commits: f1bc52c, bfc0187)
- Test component (`Test.tsx`) exists on page but may be removable

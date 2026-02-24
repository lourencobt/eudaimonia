# AGENTS.md

This file provides guidance to AI coding agents working with code in this repository.

## About

Eudaimonia is a digital workspace for deep work, built around 5 virtual "rooms" inspired by Cal Newport's *Deep Work*. The core constraint: you cannot be in two rooms at once. 100% AI-built, no backend — all state lives in localStorage.

## Commands

```bash
npm run dev      # Start dev server (Vite) at localhost:5173
npm run build    # Production build
npm run lint     # ESLint (flat config, ES2020+)
npm run preview  # Preview production build
```

No test framework is configured.

## Tech Stack

Vite 7 + React 19, React Router 7, Lucide React icons, vanilla CSS. No TypeScript — pure JavaScript (ES2022+).

## Architecture

### Room-Based Navigation

`App.jsx` defines a `BrowserRouter` with 5 routes. Navigation is linear — users "walk" through rooms in order:

1. **Gallery** (`/`) — Inspiration, team accomplishments
2. **Salon** (`/salon`) — Chat, collaboration, breakout rooms
3. **Library** (`/library`) — Knowledge base organized by PARA method (Projects, Areas, Resources, Archives)
4. **Office** (`/office`) — Shallow work: admin, calendar, Kanban tasks
5. **Chamber** (`/chamber`) — Deep work zone with focus timer, ambient sounds, DND

### Chamber Mode

When the route is `/chamber`, `App.jsx` adds `chamber-mode` class to `document.body` and hides the Navigation component. The `body.chamber-mode` CSS selector in `index.css` applies a dark theme. Chamber supports focus modes and keyboard shortcuts (F=fullscreen, M=mode, Escape=stats).

### Data Persistence

All state uses localStorage with keys like `eudaimonia_sessions`, `eudaimonia_stats`, plus chat messages and Kanban tasks. No backend.

### Key Patterns

- **Named exports** for all components (`export function ComponentName()`)
- **Local state only** — `useState` hooks, no Redux or Context
- **Co-located CSS** — each component/page has a matching `.css` file in the same directory
- **Mock data** — inline `MOCK_` constants, not fetched
- **Icons** — always from `lucide-react`

### Styling

Vanilla CSS with a design system in `index.css`:
- CSS custom properties for colors, spacing, typography
- Typography: "Playfair Display" (serif headings), "Inter" (sans body)
- Color palette: warm paper tones (#fdfbf7), gold accent (#d4af37), dark chamber (#1a1a1a)
- BEM-like naming (`.focus-timer`, `.timer-display`, `.timer-controls`)
- No CSS preprocessor or CSS-in-JS — keep it vanilla

### File Organization

- `src/pages/` — one component per room (Gallery, Salon, Library, Office, Chamber)
- `src/components/` — shared UI (Navigation, FocusTimer, KanbanBoard, ChatInterface, etc.)
- `src/utils/` — sessionStorage.js, ambientSounds.js, spotifyAuth.js, spotifyPlayer.js

## Environment Variables

Optional Spotify integration requires `VITE_SPOTIFY_CLIENT_ID` and `VITE_SPOTIFY_REDIRECT_URI` (see `.env.example`).

## Constitution

Project principles and constraints are defined in `.specify/memory/constitution.md`. All feature work must comply with the five core principles: Single-Room Focus, Zero-Backend, Vanilla Simplicity, Co-located Components, and Design System Fidelity.

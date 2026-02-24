<!--
  Sync Impact Report
  ==================
  Version change: 0.0.0 → 1.0.0 (initial ratification)
  Modified principles: N/A (first version)
  Added sections:
    - Core Principles (5 principles)
    - Technology Constraints
    - Development Workflow
    - Governance
  Removed sections: N/A
  Templates requiring updates:
    - .specify/templates/plan-template.md — ✅ no updates needed
      (Constitution Check section is generic; will be filled per-feature)
    - .specify/templates/spec-template.md — ✅ no updates needed
      (User stories and requirements structure is compatible)
    - .specify/templates/tasks-template.md — ✅ no updates needed
      (Task phases and parallel markers align with principles)
    - .specify/templates/commands/*.md — ✅ no command files exist
  Follow-up TODOs: none
-->

# Eudaimonia Constitution

## Core Principles

### I. Single-Room Focus

The core UX constraint of Eudaimonia: a user MUST occupy exactly
one room at a time. Navigation is linear through the five rooms
(Gallery → Salon → Library → Office → Chamber). Features MUST NOT
allow a user to operate in multiple rooms simultaneously or bypass
the room sequence. This constraint exists to enforce intentional
context-switching and protect deep work.

### II. Zero-Backend

All application state MUST persist exclusively in the browser via
localStorage. There is no server, no database, no API layer.
Features MUST NOT introduce backend dependencies, remote storage,
or server-side processing. Third-party integrations (e.g., Spotify)
are permitted only as optional enhancements that degrade gracefully
when unavailable. localStorage keys MUST use the `eudaimonia_`
prefix for consistency.

### III. Vanilla Simplicity

The project uses pure JavaScript (ES2022+), vanilla CSS, and
minimal dependencies. Features MUST NOT introduce:
- TypeScript or type-checking tooling
- CSS preprocessors (Sass, Less) or CSS-in-JS libraries
- State management libraries (Redux, Zustand, Context API)
- UI component frameworks beyond React itself

New dependencies require explicit justification. When in doubt,
write less code with fewer abstractions. YAGNI applies.

### IV. Co-located Components

Each component or page MUST be self-contained:
- Named exports only (`export function ComponentName()`)
- Co-located CSS file in the same directory as the component
- Local state via `useState` hooks — no global or shared state
- Mock data as inline `MOCK_` constants, not fetched externally
- Icons exclusively from `lucide-react`

This principle ensures any component can be understood, modified,
or removed without tracing dependencies across the codebase.

### V. Design System Fidelity

All UI MUST adhere to the established visual language defined in
`index.css`:
- CSS custom properties for colors, spacing, and typography
- Typography: "Playfair Display" for headings, "Inter" for body
- Color palette: warm paper (#fdfbf7), gold accent (#d4af37),
  dark chamber (#1a1a1a)
- BEM-like class naming (`.component-name`, `.component-element`)
- Chamber mode MUST activate a distinct dark theme via the
  `body.chamber-mode` CSS class

No inline styles. No utility-class frameworks. New visual elements
MUST reference existing custom properties before defining new ones.

## Technology Constraints

- **Runtime**: Vite 7, React 19, React Router 7
- **Language**: JavaScript ES2022+ (no TypeScript)
- **Styling**: Vanilla CSS with custom properties
- **Icons**: Lucide React exclusively
- **Storage**: localStorage only (no backend)
- **Testing**: No test framework configured; manual verification
- **Build**: `npm run dev`, `npm run build`, `npm run lint`
- **Environment**: Optional `VITE_SPOTIFY_CLIENT_ID` and
  `VITE_SPOTIFY_REDIRECT_URI` for Spotify integration

New tooling or dependencies MUST be justified against these
constraints and approved before adoption.

## Development Workflow

- **File organization**: Pages in `src/pages/`, shared components
  in `src/components/`, utilities in `src/utils/`
- **One component per file**: Each room has one page component;
  shared UI lives in dedicated component files
- **Lint before commit**: `npm run lint` MUST pass (ESLint flat
  config, ES2020+ target)
- **No over-engineering**: Only make changes directly requested
  or clearly necessary. No speculative abstractions, no feature
  flags, no backward-compatibility shims
- **Verify before modifying**: Read existing code before proposing
  changes. Understand the component's role in the room model

## Governance

This constitution is the authoritative source of project principles
and constraints. All feature specifications, implementation plans,
and code changes MUST comply with these principles.

**Amendment procedure**:
1. Propose the change with rationale
2. Document the impact on existing code and templates
3. Update the constitution with a version bump
4. Propagate changes to dependent artifacts

**Versioning**: MAJOR.MINOR.PATCH per semantic versioning.
- MAJOR: Principle removed or fundamentally redefined
- MINOR: New principle added or existing principle materially expanded
- PATCH: Clarifications, wording improvements, non-semantic edits

**Compliance**: Every feature plan MUST include a Constitution Check
verifying alignment with all five core principles before proceeding.

**Version**: 1.0.0 | **Ratified**: 2026-02-24 | **Last Amended**: 2026-02-24

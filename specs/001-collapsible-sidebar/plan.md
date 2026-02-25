# Implementation Plan: Collapsible Sidebar Menu

**Branch**: `001-collapsible-sidebar` | **Date**: 2026-02-24 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-collapsible-sidebar/spec.md`

## Summary

Enhance the Navigation sidebar component with collapsible behavior (expanded ↔ icon-only) and visual refinements. The sidebar toggles between a 280px expanded mode (icon + label + description) and a collapsed mode (no more than 60px) (icon-only with tooltips). State persists in localStorage. The visual design is polished with improved spacing, hover/active effects, and smooth CSS transitions — all using vanilla CSS and the existing design system.

## Technical Context

**Language/Version**: JavaScript ES2022+
**Primary Dependencies**: React 19, React Router 7, Lucide React (all existing — no new deps)
**Storage**: localStorage (`eudaimonia_sidebar_collapsed` key)
**Testing**: Manual verification (no test framework configured)
**Target Platform**: Modern browsers (desktop + tablet)
**Project Type**: Single-page web application
**Performance Goals**: Sidebar toggle animation < 300ms, no layout shift
**Constraints**: No new dependencies, no CSS preprocessors, no state management libraries, localStorage only
**Scale/Scope**: 3–4 files modified (Navigation.jsx, Navigation.css, index.css for custom properties, App.css for main-content margin), 0 new files

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Single-Room Focus | PASS | Sidebar collapse is a layout concern — does not affect room navigation or the one-room-at-a-time constraint. |
| II. Zero-Backend | PASS | Collapse state stored in localStorage with `eudaimonia_` prefix. No server interaction. |
| III. Vanilla Simplicity | PASS | No new dependencies. Pure CSS transitions and animations. Local `useState` for collapse toggle. No state management libraries. |
| IV. Co-located Components | PASS | Changes are confined to Navigation.jsx and Navigation.css. State is local via `useState`. Icons remain from `lucide-react`. |
| V. Design System Fidelity | PASS | All styling uses existing CSS custom properties (colors, spacing, typography). BEM-like naming. No inline styles. |

**Gate result**: PASS — no violations. Proceeding to Phase 0.

## Project Structure

### Documentation (this feature)

```text
specs/001-collapsible-sidebar/
├── plan.md              # This file
├── research.md          # Phase 0 output
├── data-model.md        # Phase 1 output
├── quickstart.md        # Phase 1 output
└── tasks.md             # Phase 2 output (via /speckit.tasks)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Navigation.jsx   # MODIFY — add collapse toggle, state, conditional rendering
│   └── Navigation.css   # MODIFY — add collapsed styles, transitions, tooltips, visual polish
├── pages/               # NO CHANGES — room pages unaffected
├── App.css              # MODIFY — add dynamic left margin for fixed sidebar
└── index.css            # MODIFY — sidebar-width custom properties
```

**Structure Decision**: This feature modifies existing files only. The Navigation component is self-contained per Principle IV. No new files or directories needed in `src/`.

## Complexity Tracking

> No constitution violations — this section is not applicable.

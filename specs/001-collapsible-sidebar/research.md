# Research: Collapsible Sidebar Menu

**Feature**: 001-collapsible-sidebar
**Date**: 2026-02-24

## R1: Sidebar Collapse Pattern (VS Code Reference)

**Decision**: Two-state sidebar — expanded (280px, full content) and collapsed (~56px, icon-only with tooltips). Toggle via a chevron button at the bottom of the sidebar. Sidebar uses `position: fixed` to stay locked in the viewport.

**Rationale**: VS Code's activity bar pattern is the explicit user reference. The two-state approach (no intermediate widths or drag-resize) is simpler to implement and covers the user's need. The chevron-at-bottom placement keeps the toggle discoverable without cluttering nav items. Initially implemented with `position: sticky`, but this caused the sidebar to scroll with page content on longer pages. Changed to `position: fixed` so the sidebar is always locked to the left edge of the viewport. This requires the main content area to offset its left margin by the sidebar width.

**Alternatives considered**:
- Drag-to-resize sidebar: More complex, requires resize handles and width persistence. Overkill for 5 fixed nav items.
- Three-state (expanded / compact / hidden): Adds complexity. The sidebar is already hidden in Chamber mode, so a third state provides minimal additional value.
- Hamburger menu toggle: Less discoverable for desktop apps; better suited for mobile-first designs.

## R2: Animation Approach

**Decision**: CSS `transition` on `width` and `opacity` properties. Text fades out while width shrinks. Duration: 200-250ms ease-in-out.

**Rationale**: Pure CSS transitions are the simplest approach, require no animation library, and align with Principle III (Vanilla Simplicity). The width + opacity combo prevents text from wrapping awkwardly during the transition by fading labels before the width fully collapses.

**Alternatives considered**:
- JavaScript-driven animation (requestAnimationFrame): Unnecessary complexity for a simple width transition.
- CSS `transform: scaleX()`: Distorts content rather than hiding it cleanly.
- `display: none` with no transition: Jarring, no animation.

## R3: Tooltip Implementation

**Decision**: CSS-only tooltips using `::after` pseudo-elements with `title` attribute as fallback. Tooltips appear on hover when sidebar is collapsed.

**Rationale**: No dependency needed. CSS tooltips with `::after` and `content: attr(data-tooltip)` are lightweight and sufficient for 5 static labels. Falls back to native `title` attribute for accessibility.

**Alternatives considered**:
- Tooltip library (e.g., Tippy.js): Adds a dependency, violates Principle III.
- React portal-based tooltips: Over-engineered for 5 fixed items.

## R4: Persistence Strategy

**Decision**: Store boolean flag in localStorage under key `eudaimonia_sidebar_collapsed`. Read on component mount, write on toggle.

**Rationale**: Aligns with Principle II (Zero-Backend) and the existing `eudaimonia_` prefix convention. A single boolean is the minimal data needed.

**Alternatives considered**:
- sessionStorage: Does not persist across browser sessions.
- URL query parameter: Pollutes URLs, not user-friendly.

## R5: Responsive Auto-Collapse

**Decision**: CSS media query at `max-width: 768px` auto-collapses the sidebar. JavaScript reads `window.matchMedia` on mount to sync React state.

**Rationale**: 768px is a standard tablet breakpoint. Media queries handle the layout; `matchMedia` listener keeps React state in sync so tooltips activate correctly.

**Alternatives considered**:
- `resize` event listener only: Less performant than `matchMedia`, fires continuously.
- No responsive behavior: Sidebar would overflow on narrow screens.

## R6: Header Behavior When Collapsed

**Decision**: In collapsed mode, replace "Eudaimonia" text with a small "E" monogram letter styled with the serif heading font.

**Rationale**: A single letter preserves brand identity without requiring an image asset or SVG. Using "Playfair Display" (the heading font) keeps it on-brand. Simpler than adding a logo image file.

**Alternatives considered**:
- Hide header entirely: Loses brand presence.
- SVG logo: Would need to create/source an asset — out of scope.
- Truncated text: Looks broken, not intentional.

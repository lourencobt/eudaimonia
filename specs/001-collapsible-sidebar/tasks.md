# Tasks: Collapsible Sidebar Menu

**Input**: Design documents from `/specs/001-collapsible-sidebar/`
**Prerequisites**: plan.md (required), spec.md (required), research.md, data-model.md, quickstart.md

**Tests**: No test framework configured. Manual verification only.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Add CSS custom properties for sidebar dimensions to the design system

- [x] T001 Add sidebar width custom properties (`--sidebar-width-expanded`, `--sidebar-width-collapsed`, `--sidebar-transition-duration`) to src/index.css

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core collapse state management that both US1 and US3 depend on

**CRITICAL**: No user story work can begin until this phase is complete

- [x] T002 Add `collapsed` state to Navigation component using `useState` initialized from `localStorage.getItem('eudaimonia_sidebar_collapsed')` in src/components/Navigation.jsx
- [x] T003 Add collapse toggle button with Lucide chevron icon (`ChevronsLeft`/`ChevronsRight`) at the bottom of the sidebar in src/components/Navigation.jsx
- [x] T004 Write `collapsed` state to `localStorage` under key `eudaimonia_sidebar_collapsed` on every toggle click in src/components/Navigation.jsx

**Checkpoint**: Foundation ready — sidebar has toggle button and state management, but no visual changes yet

---

## Phase 3: User Story 1 — Collapse Sidebar to Icon-Only Mode (Priority: P1) MVP

**Goal**: Sidebar collapses from full-width to a narrow icon-only strip with smooth animation, and main content expands to fill freed space.

**Independent Test**: Click the collapse toggle — sidebar shrinks to icon-only. Hover icons to see tooltips. Click expand — sidebar returns to full width with smooth animation. Navigate between rooms — collapse state is preserved.

### Implementation for User Story 1

- [x] T005 [US1] Add `.navigation.collapsed` CSS class with narrow width (`var(--sidebar-width-collapsed)`), hidden text, and centered icons in src/components/Navigation.css
- [x] T006 [US1] Add CSS transition on `.navigation` for `width` property using `var(--sidebar-transition-duration)` ease-in-out in src/components/Navigation.css
- [x] T007 [US1] Add `opacity` transition on `.nav-text` to fade out labels/descriptions before width finishes collapsing in src/components/Navigation.css
- [x] T008 [US1] Conditionally apply `collapsed` class to `<nav>` element based on state in src/components/Navigation.jsx
- [x] T009 [US1] Add `data-tooltip` attribute with room label to each `NavLink` in src/components/Navigation.jsx
- [x] T010 [US1] Add CSS-only tooltip styles using `::after` pseudo-element on `.nav-link[data-tooltip]` visible only when `.navigation.collapsed` in src/components/Navigation.css
- [x] T011 [US1] Replace "Eudaimonia" header text with single "E" monogram (Playfair Display serif) when collapsed, using conditional rendering or CSS hide/show in src/components/Navigation.jsx and src/components/Navigation.css
- [x] T012 [US1] Style the collapse toggle button to fit within both expanded and collapsed sidebar widths in src/components/Navigation.css
- [x] T013 [US1] Verify `.nav-link.active` highlight remains visible and correctly styled in collapsed icon-only mode in src/components/Navigation.css
- [x] T014 [US1] Ensure `.main-content` expands to fill freed space when sidebar collapses (verify flex layout or add `flex: 1`) in src/components/Navigation.css and src/index.css

**Checkpoint**: Sidebar fully collapses and expands with animation. Tooltips work. Header adapts. Main content fills space. Active state works in both modes. This is the MVP.

---

## Phase 4: User Story 2 — Prettified Sidebar Visual Design (Priority: P1)

**Goal**: Polished sidebar with improved spacing, refined hover effects, better active state, and clear visual hierarchy.

**Independent Test**: Visual comparison — sidebar looks more polished with comfortable spacing, smooth hover transitions, and a refined active state highlight. Visual hierarchy is clear: icon prominent, label readable, description subtle.

### Implementation for User Story 2

- [x] T015 [US2] Refine `.nav-link` padding, gap, and border-radius for more comfortable spacing and visual weight in src/components/Navigation.css
- [x] T016 [US2] Improve `.nav-link:hover` effect with subtle background transition, slight scale or translate, and color change in src/components/Navigation.css
- [x] T017 [US2] Refine `.nav-link.active` styling — use accent color or softer highlight instead of full dark background, with a left border indicator or subtle shadow in src/components/Navigation.css
- [x] T018 [US2] Improve `.nav-icon` sizing and visual weight relative to text for clearer hierarchy in src/components/Navigation.css
- [x] T019 [US2] Refine `.nav-label` and `.nav-desc` typography — adjust font sizes, weights, letter-spacing, and color contrast for better readability in src/components/Navigation.css
- [x] T020 [US2] Style the `.nav-header` with refined spacing and subtle bottom separator in src/components/Navigation.css

**Checkpoint**: Sidebar looks visually polished in both expanded and collapsed states

---

## Phase 5: User Story 3 — Persistent State & Responsive Auto-Collapse (Priority: P2)

**Goal**: Sidebar remembers its collapse/expand preference across sessions (persistence handled in Phase 2 via T002/T004). Additionally, the sidebar auto-collapses on narrow viewports for responsive behavior.

**Independent Test**: Collapse sidebar, refresh page — sidebar stays collapsed. Expand sidebar, refresh — stays expanded. Resize browser below 768px — sidebar auto-collapses.

### Implementation for User Story 3

- [x] T021 [US3] Add `window.matchMedia('(max-width: 768px)')` listener on mount to auto-collapse sidebar on narrow viewports in src/components/Navigation.jsx
- [x] T022 [US3] Add `@media (max-width: 768px)` CSS rule to force collapsed layout regardless of state in src/components/Navigation.css
- [x] T023 [US3] Ensure `matchMedia` listener cleans up on unmount and syncs with localStorage in src/components/Navigation.jsx

**Checkpoint**: Collapse state persists across sessions (via Phase 2). Auto-collapse works on narrow screens.

---

## Phase 6: Post-Implementation Fixes — Fixed Sidebar & Toggle Visibility

**Goal**: Fix two issues found during manual testing: (1) sidebar scrolls with page content instead of staying fixed in the viewport, (2) collapse toggle button may require scrolling to reach.

**Independent Test**: Scroll the main content area — sidebar must remain stationary. The collapse toggle must be visible at all times without scrolling within the sidebar.

### Implementation

- [x] T024 Fix sidebar positioning: change `.navigation` from `position: sticky` to `position: fixed` with `left: 0; top: 0; z-index: 50` so the sidebar stays fixed in the viewport regardless of main content scroll in src/components/Navigation.css
- [x] T025 Add left margin to `.main-content` equal to `var(--sidebar-width-expanded)` (or `var(--sidebar-width-collapsed)` when sidebar is collapsed) so content doesn't overlap the fixed sidebar in src/App.css
- [x] T026 Ensure the collapse toggle button is always visible at the bottom of the viewport by verifying `.navigation` uses `height: 100vh; display: flex; flex-direction: column` with `.nav-list { flex: 1; overflow-y: auto }` and `.nav-collapse-toggle { margin-top: auto; flex-shrink: 0 }` in src/components/Navigation.css
- [x] T027 If nav items overflow the sidebar height, only the nav list should scroll — header and toggle must remain pinned (header at top, toggle at bottom) in src/components/Navigation.css
- [x] T028 Verify collapsed state: when sidebar is collapsed and fixed, the main content left margin transitions smoothly to match the narrower sidebar width in src/App.css

**Checkpoint**: Sidebar stays fixed in viewport on scroll. Toggle is always visible. Main content adjusts margins correctly in both expanded and collapsed states.

---

## Phase 7: Polish & Cross-Cutting Concerns

**Purpose**: Final integration checks and edge case handling

- [x] T029 Verify Chamber mode interaction — sidebar restores correct collapse state when navigating away from `/chamber` in src/components/Navigation.jsx
- [x] T030 Run full quickstart.md verification checklist (all 7 scenarios) across expanded and collapsed states
- [x] T031 Verify no layout shift or content reflow during collapse/expand animation across all room pages

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — start immediately
- **Foundational (Phase 2)**: Depends on Phase 1 (needs CSS custom properties)
- **US1 (Phase 3)**: Depends on Phase 2 (needs collapse state and toggle)
- **US2 (Phase 4)**: Depends on Phase 1 only (visual polish is independent of collapse logic) — can run in parallel with US1
- **US3 (Phase 5)**: Depends on Phase 2 (needs collapse state for persistence and responsive behavior)
- **Fixes (Phase 6)**: Depends on Phases 3 and 4 (fixes existing implementation)
- **Polish (Phase 7)**: Depends on Phase 6

### User Story Dependencies

- **User Story 1 (P1)**: Depends on Foundational (Phase 2) — core collapsible behavior
- **User Story 2 (P1)**: Can start after Setup (Phase 1) — visual polish is independent of collapse logic
- **User Story 3 (P2)**: Depends on Foundational (Phase 2) — extends persistence and adds responsive behavior

### Parallel Opportunities

- T015–T019 in US2 target different CSS selectors but share one file — execute sequentially to avoid conflicts
- US1 and US2 can proceed in parallel after their respective prerequisites complete
- US3 can start as soon as Phase 2 completes, in parallel with US1 if desired

---

## Parallel Example: User Story 2

```bash
# US2 visual polish tasks target different selectors but share Navigation.css.
# Execute sequentially to avoid file conflicts:
Task: T015 "Refine .nav-link padding and spacing"
Task: T016 "Improve .nav-link:hover effect"
Task: T017 "Refine .nav-link.active styling"
Task: T018 "Improve .nav-icon sizing"
Task: T019 "Refine .nav-label and .nav-desc typography"
Task: T020 "Style .nav-header with separator"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup (1 task)
2. Complete Phase 2: Foundational (3 tasks)
3. Complete Phase 3: User Story 1 (10 tasks)
4. **STOP and VALIDATE**: Toggle collapse, check tooltips, check animation
5. This gives a fully functional collapsible sidebar

### Incremental Delivery

1. Setup + Foundational → State management ready
2. Add User Story 1 → Collapsible sidebar works → MVP!
3. Add User Story 2 → Sidebar looks polished
4. Add User Story 3 → Persistence + responsive behavior
5. Polish → Edge cases and verification

---

## Notes

- All changes are in 2-3 files: `Navigation.jsx`, `Navigation.css`, and possibly `index.css`
- 31 total tasks (T001–T031)
- No test tasks included (no test framework configured)
- Commit after each phase checkpoint
- Verify in browser after each user story completion

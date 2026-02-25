# Quickstart: Collapsible Sidebar Menu

**Feature**: 001-collapsible-sidebar

## Setup

```bash
git checkout 001-collapsible-sidebar
npm install   # No new deps — just ensures node_modules exist
npm run dev   # Start dev server at localhost:5173
```

## What to Modify

Only two files need changes:

1. **`src/components/Navigation.jsx`** — Add collapse state, toggle button, conditional rendering, tooltip data attributes
2. **`src/components/Navigation.css`** — Add collapsed variant styles, transitions, tooltips, visual polish

Optional:
3. **`src/index.css`** — Add sidebar-width custom properties if centralizing dimensions in the design system

## Key Implementation Notes

- **State**: `useState` initialized from `localStorage.getItem('eudaimonia_sidebar_collapsed')`
- **Toggle**: A `<button>` with a Lucide chevron icon at the sidebar bottom
- **Transition**: CSS `transition: width 250ms ease-in-out` on `.navigation`
- **Collapsed class**: `.navigation.collapsed` applies narrow width, hides text
- **Tooltips**: `data-tooltip` attribute + CSS `::after` pseudo-element, visible only when `.collapsed`
- **Responsive**: `@media (max-width: 768px)` forces collapsed mode
- **Chamber mode**: No changes needed — Navigation is already conditionally rendered in App.jsx

## Verification

1. Click the collapse toggle → sidebar shrinks to icons only
2. Hover icons when collapsed → tooltips show room names
3. Click toggle again → sidebar expands with smooth animation
4. Refresh page → collapse state is preserved
5. Resize browser to <768px → sidebar auto-collapses
6. Navigate to `/chamber` and back → sidebar restores previous state
7. Visual check: improved spacing, hover effects, active state styling

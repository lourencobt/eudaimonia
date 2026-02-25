# Data Model: Collapsible Sidebar Menu

**Feature**: 001-collapsible-sidebar
**Date**: 2026-02-24

## Entities

### SidebarState

Represents the user's sidebar preference. Minimal — a single boolean.

| Field | Type | Description |
|-------|------|-------------|
| collapsed | boolean | `true` = icon-only mode, `false` = expanded mode |

**Storage key**: `eudaimonia_sidebar_collapsed`
**Default value**: `false` (expanded)
**Lifecycle**: Written on toggle click, read on Navigation component mount.

### NavigationItem (existing, unchanged)

Each room in the sidebar. No schema changes needed — this is documented for context.

| Field | Type | Description |
|-------|------|-------------|
| path | string | Route path (e.g., `/`, `/salon`) |
| label | string | Room name (e.g., "Gallery") |
| icon | Component | Lucide React icon component |
| desc | string | Subtitle text (e.g., "Deep Work Produced") |

**State transitions**: None. NavigationItem is static data, not stateful.

## Relationships

- SidebarState controls how NavigationItems are rendered (expanded vs collapsed view).
- SidebarState is independent of the active route — navigation continues to work identically in both modes.
- Chamber mode (`/chamber` route) hides the entire Navigation component regardless of SidebarState.

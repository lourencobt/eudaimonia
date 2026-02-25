# Feature Specification: Collapsible Sidebar Menu

**Feature Branch**: `001-collapsible-sidebar`
**Created**: 2026-02-24
**Status**: Draft
**Input**: User description: "Prettify this menu. Allow the menu to get smaller similar to VS Code."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Collapse Sidebar to Icon-Only Mode (Priority: P1)

A user wants more screen space for their current room's content. They collapse the sidebar so it shrinks from its full width (showing icons, labels, and descriptions) down to a narrow strip showing only icons — similar to how VS Code's sidebar can collapse to its activity bar.

**Why this priority**: This is the core ask. Without collapsible behavior, the sidebar permanently occupies significant horizontal space, reducing the usable area for deep work content.

**Independent Test**: Can be fully tested by clicking the collapse toggle and verifying the sidebar shrinks to icon-only mode, then expanding it back. Delivers immediate value by giving users control over their workspace layout.

**Acceptance Scenarios**:

1. **Given** the sidebar is fully expanded, **When** the user clicks the collapse toggle, **Then** the sidebar smoothly animates to a narrow icon-only strip and the main content area expands to fill the freed space.
2. **Given** the sidebar is collapsed (icon-only), **When** the user clicks the expand toggle, **Then** the sidebar smoothly animates back to full width showing icons, labels, and descriptions.
3. **Given** the sidebar is collapsed, **When** the user hovers over a nav icon, **Then** a tooltip displays the room name so the user can still identify each room.
4. **Given** the sidebar is in either state, **When** the user navigates to a different room, **Then** the collapse/expand state is preserved.

---

### User Story 2 - Prettified Sidebar Visual Design (Priority: P1)

A user opens the app and sees a polished, visually refined sidebar that feels cohesive with the Eudaimonia aesthetic. The menu items have improved spacing, subtle hover effects, and a more intentional visual hierarchy between the icon, label, and description.

**Why this priority**: Equal to P1 because the user explicitly asked to "prettify" the menu. Visual refinement and collapsibility together form the complete feature request.

**Independent Test**: Can be tested visually by comparing the sidebar before and after. The updated design should feel more polished with better spacing, refined typography, smoother transitions, and a clear visual hierarchy.

**Acceptance Scenarios**:

1. **Given** the sidebar is displayed, **When** the user views the navigation, **Then** menu items have consistent, comfortable spacing and a clear visual hierarchy (icon prominent, label readable, description subtle).
2. **Given** the sidebar is displayed, **When** the user hovers over an inactive menu item, **Then** there is a smooth, subtle hover effect that provides clear interactive feedback.
3. **Given** a menu item is active, **When** the user views the sidebar, **Then** the active item is clearly distinguished from inactive items with a refined highlight style.

---

### User Story 3 - Persistent Collapse State (Priority: P2)

A user who prefers the collapsed sidebar returns to the app later and finds it still collapsed, matching their preference from the previous session.

**Why this priority**: Persistence is a quality-of-life enhancement. The feature works without it, but remembering the user's preference avoids repetitive toggling.

**Independent Test**: Can be tested by collapsing the sidebar, refreshing the page, and verifying the sidebar remains collapsed.

**Acceptance Scenarios**:

1. **Given** the user collapses the sidebar and refreshes the page, **When** the page reloads, **Then** the sidebar remains in its collapsed state.
2. **Given** the user expands the sidebar and refreshes the page, **When** the page reloads, **Then** the sidebar remains in its expanded state.

---

### Edge Cases

- What happens when the browser window is very narrow (e.g., below 768px)? The sidebar should auto-collapse to icon-only mode.
- What happens when the user enters Chamber mode? The sidebar is already hidden in Chamber mode, so collapse state should not interfere. When exiting Chamber, the sidebar should restore to its previous collapse/expand state.
- What happens if the app title "Eudaimonia" is displayed while collapsed? In collapsed mode, the header should show only a small logo or monogram, or be hidden entirely to fit the narrow width.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST provide a visible toggle control that switches the sidebar between expanded (full width with icons, labels, and descriptions) and collapsed (narrow, icon-only) states.
- **FR-002**: System MUST animate the transition between expanded and collapsed states smoothly (no jarring jumps or layout shifts).
- **FR-003**: System MUST show tooltips on navigation icons when the sidebar is in collapsed mode, displaying the room name.
- **FR-004**: System MUST preserve the sidebar collapse/expand state across page refreshes and sessions.
- **FR-005**: System MUST automatically collapse the sidebar when the viewport width falls below a defined breakpoint (e.g., narrow screens).
- **FR-006**: System MUST expand the main content area to fill the space freed when the sidebar collapses.
- **FR-007**: System MUST maintain the current active room highlight in both expanded and collapsed states.
- **FR-008**: System MUST apply refined visual styling to the sidebar including improved spacing, hover effects, active state styling, and visual hierarchy between icon, label, and description elements.
- **FR-009**: System MUST hide or minimize the "Eudaimonia" header text when the sidebar is collapsed to fit within the narrow width.
- **FR-010**: System MUST keep the sidebar fixed in the viewport — it MUST NOT scroll with the main content.
- **FR-011**: System MUST keep the collapse toggle button visible at all times without requiring the user to scroll within the sidebar.

### Key Entities

- **Sidebar State**: Represents whether the sidebar is expanded or collapsed; persisted in local storage.
- **Navigation Item**: A room entry consisting of an icon, label, and description, rendered differently depending on sidebar state.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can toggle the sidebar between expanded and collapsed states in under 0.5 seconds (including animation).
- **SC-002**: Collapsed sidebar width is no more than 60 pixels, freeing at least 75% of the original sidebar width for content.
- **SC-003**: 100% of navigation items remain accessible and identifiable in collapsed mode (via icons and tooltips).
- **SC-004**: Sidebar state persists correctly across page refreshes with 100% reliability.
- **SC-005**: Sidebar visual design improvements are verifiable: nav items have consistent padding and gap, hover effects include a visible background transition, active state uses a distinct indicator (e.g., accent color or border), and icon/label/description have clear size differentiation.
- **SC-006**: Transition animation between states completes without visible layout jumping or content reflow artifacts.

## Assumptions

- The collapse toggle will be placed within the sidebar itself (e.g., at the bottom or top of the nav area), consistent with common sidebar patterns.
- Tooltips in collapsed mode will use the existing room labels ("Gallery", "Salon", etc.) without additional configuration.
- The "Eudaimonia" branding in collapsed mode will either show a small icon/monogram or be hidden — no truncated text.
- The existing Chamber mode behavior (sidebar fully hidden) takes precedence over collapse state.
- Local storage will be used for persistence, consistent with the project's zero-backend architecture.
- The responsive breakpoint for auto-collapse will follow standard tablet/mobile breakpoints.

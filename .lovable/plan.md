## Problem

On mobile, scrolling the homepage sometimes jumps straight to the last section. The cause is the mobile section rail (`src/components/nav/SectionRail.tsx` → `MobileRail`), not the snap-scroll hook itself.

The mobile rail is a fixed vertical strip pinned to the right edge of the screen (`fixed right-2 top-1/2`) with `touch-action: none` and window-style touch listeners. It attaches `touchstart` / `touchmove` / `touchend` to the whole `<nav>` and:

1. On any touch that lands inside the nav's bounding box, it picks the "nearest dot" by Y coordinate.
2. On `touchmove` it calls `e.preventDefault()` and updates the hovered index.
3. On `touchend` it calls `onPick(hover)` — jumping to that section.

Because the rail spans nearly the full height of the viewport on the right side, a normal vertical swipe that starts anywhere near the right edge is captured by the rail instead of scrolling the page. If the finger lifts near the bottom of the strip, the nearest dot is the last one → the page jumps to the final section (Partner). This matches the reported symptom exactly.

A secondary issue: `useSnapSections`' global `touchstart`/`touchend` also fires for these same events, so both handlers can race.

## Fix

Rework `MobileRail` so it behaves like a passive indicator with tap targets, not a drag-scrubber:

- Remove the `touchstart` / `touchmove` / `touchend` listeners on the whole nav.
- Remove `touch-none` / `touchAction: none` from the nav container so touches that start on it fall through to the page scroll handler.
- Give each dot an accessible `<button>` with an enlarged invisible hit area (e.g. `p-2 -m-2`) that calls `onPick(i)` on click. Only taps on an actual dot change the section.
- Keep the current visual (active dot, copper color) but drop the "hover preview label on drag" behavior, since it depended on the drag gesture.

Also harden `useSnapSections` so it ignores touches that originated inside the rail, as a belt-and-suspenders guard:

- In `onTouchStart`, walk up from `e.target` and bail out if any ancestor has `[aria-label="Sections"]` (the rail nav). Store `null` so `onTouchEnd` becomes a no-op for those gestures.

No other scroll logic changes — `useSnapSections`' wheel/keyboard/touch swipe behavior for the rest of the page is left intact.

## Files to change

- `src/components/nav/SectionRail.tsx` — rewrite `MobileRail` to use tap buttons instead of drag gestures; remove touch listeners and `touch-none`.
- `src/hooks/useSnapSections.ts` — in `onTouchStart`, ignore touches whose target is inside a `[aria-label="Sections"]` element.

## Verification

- On mobile viewport, swipe up/down in the middle and near the right edge of the homepage — should advance one section at a time, never jump to the last.
- Tapping a dot on the mobile rail should still navigate to that section.
- Desktop rail behavior is unchanged.

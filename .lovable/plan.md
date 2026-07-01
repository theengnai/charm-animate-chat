# Fix stacking cards behavior on /about

Current `StackCard` uses `sticky` but applies a static `scale` per index and a stepped `top` offset. That's why cards look staggered instead of stacking like a deck. I'll rewrite it so each card sticks at (nearly) the same top position, the next card slides up over it, and the covered cards subtly fade + scale down for depth.

## Applies to
- `src/routes/about.tsx` → `StackCard` component + the two sections that use it:
  - "Our Areas of Expertise" (EXPERTISE)
  - "The EcoSmart Approach" (APPROACH)

## New behavior
1. **Sticky deck**: each card sticks at roughly the same `top` (e.g. `top: 96px + i*8px` — just enough offset so a thin edge of the previous card peeks out from behind the top one).
2. **Slide-up cover**: cards naturally slide up as the user scrolls (default document flow) and cover the earlier ones because later cards have higher `z-index`.
3. **Depth on covered cards**: use `useScroll` per card with `target: cardRef` and `offset: ["start 20%", "end 20%"]`. As the *next* card begins covering the current one, animate the current card's `scale` from `1 → 0.94` and `opacity` from `1 → 0.6`, giving a smooth depth fade.
4. **Rounded look preserved**: keep the existing card markup (border, bg-canvas, shadow, rounded-2xl) and inner grid layout untouched.
5. **Section spacing**: give each `StackCard` wrapper enough vertical room (e.g. `min-h-[80vh]` on the sticky item's outer spacer) so there's scroll distance for the stack transition to actually play.

## Technical notes
- Replace inline `transform: scale(...)` with a `motion.div` whose `style={{ scale, opacity }}` come from `useTransform(scrollYProgress, ...)`.
- Keep `sticky` + `zIndex: i + 1` so later cards paint on top.
- Container: change `space-y-6` to a small negative or zero gap and rely on the sticky offset for the deck edge; use `mb-[60vh]` (or similar) on each card's outer wrapper so the last card has scroll runway.
- No changes to hero, vision reveal, image marquee, solutions, contact, or footer.

## Out of scope
- Copy, colors, iconography, and all other sections stay as-is.

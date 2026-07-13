# Compact the hero chat widget across breakpoints

Tighten the whole card (`src/components/hero/ChatCard.tsx`) so it feels dense and premium on desktop, sensible on tablet, and truly small on mobile. Also shrink the surrounding hero (`src/components/sections/HeroSection.tsx`) so the card fits above the fold.

## Breakpoint targets

Use three tiers: **mobile** (default, `<640px`), **tablet** (`sm:`, 640–1023px), **desktop** (`lg:`, ≥1024px). Drop `md:` variants that currently jump straight from mobile styling to full-size — that's why tablet looks oversized today.

## Card container

- Width: `w-[calc(100%-2rem)]` mobile, `sm:w-[calc(100%-3rem)]`, `lg:w-full`, max-width `760px` (down from 860).
- Corner radius: `rounded-2xl` mobile, `lg:rounded-[1.75rem]`.
- Ambient copper glow: reduce blur/opacity on mobile so it doesn't inflate perceived size.

## Input row

- Mobile: hide the sparkles chip entirely; input padding `px-2 py-2`, text `text-[0.82rem]`, Consult button becomes icon-only (44×36) with no text.
- Tablet: sparkles chip returns at 32px; input `text-sm`, Consult shows text at `text-xs`.
- Desktop: current size but slightly reduced — 40px chip, input `text-base`, Consult `h-10 text-sm`.
- Placeholder text truncates with ellipsis (`truncate`) so long typewriter strings never push button off-screen.

## Popular questions

- Mobile: show **4 questions** in a 2-col grid (renovate façade, right material, request samples, get quotation). Rest hidden.
- Tablet: show **6 questions** in 2 cols.
- Desktop: all **8 questions** in 4 cols.
- Chip padding shrinks: `px-2 py-1.5 text-[0.62rem]` mobile → `sm:text-[0.68rem]` → `lg:text-[0.75rem]`.
- Implementation: slice the array by breakpoint using CSS (`hidden sm:flex` / `hidden lg:flex` on later items) — no JS resize listener.

## Explore materials

- **Mobile: image-less mode.** Render as horizontal pill chips (name + tiny icon), 2-col grid, matching the popular-questions chip style — no photos, no aspect boxes. Saves ~180px vertical.
- Tablet: 3-col grid of square image cards, smaller (aspect-square, ~90px), with icon + name overlay.
- Desktop: current 6-col row, slightly smaller cards.
- "Browse all →" link inline with the section label at all sizes.

## Quick actions

- Mobile: **3 actions** only (Contact, Samples, Quote) as compact pills, 3-col grid.
- Tablet+: all 4 actions in a flex-wrap row.
- Reduce pill padding + font-size one step across the board.

## Section headers ("Popular questions", "Explore materials", "Quick actions")

- Mobile: `text-[0.55rem] tracking-[0.2em] mb-2`.
- Desktop: `text-[0.68rem] tracking-[0.28em] mb-2.5`.
- Tighten the divider `my-*` spacing accordingly (`my-2.5` mobile, `my-4` desktop).

## Hero shell (`HeroSection.tsx`)

- Reduce top padding on mobile (`pt-16 pb-8`) so headline + card fit without scroll on iPhone-sized viewports.
- Headline clamp lowered to `clamp(1.9rem, 6vw, 4.5rem)`.
- Subcopy paragraph hidden on mobile (`hidden sm:block`) — the card already communicates purpose.
- Reduce gap between headline and card (`mt-6 sm:mt-8 lg:mt-10`).

## Voice orb

- Scale down on mobile (currently overlaps card bottom on small screens): `scale-75 sm:scale-90 lg:scale-100` and adjust bottom offset.

## Files touched

- `src/components/hero/ChatCard.tsx` — main responsive rework
- `src/components/sections/HeroSection.tsx` — headline + spacing
- `src/components/hero/VoiceOrb.tsx` — sizing (only if the orb ships its own dimensions)

## Verification

After changes, screenshot at 375px (iPhone SE), 768px (iPad portrait), 1024px (iPad landscape), and 1440px (desktop) via Playwright to confirm the card fits without vertical scroll and looks proportionally denser at each step.

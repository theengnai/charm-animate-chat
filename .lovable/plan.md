# Light-Mode "Liquid Copper" Hero

A wow first-screen redesign rooted in the ECOSMART brand: cream canvas, copper accent, serif italic, JetBrains Mono labels. The dark cinematic stage is replaced.

## Stage (back → front)

1. **Canvas**: warm off-white `#FAF7F1` with a faint vertical light wash (`#FFF8EC` top → `#F4ECDD` bottom).
2. **Grain**: SVG turbulence at 4% opacity, mix-blend-multiply, for paper feel.
3. **Architectural rule grid**: thin `#E3DCCD` lines at 96px, fading out via radial mask so it's only visible at the edges. Hairline copper crosshairs at each major intersection.
4. **Liquid copper blob** (the centerpiece): a single SVG path morphing between 4 organic shapes on a 9s loop, filled with a copper gradient (`#F0C79A → #D89060 → #B4592C`), heavy gaussian blur (~60px), 70% opacity. Sits behind the chat at ~520px. Slow counter-rotation (40s).
5. **Two thin orbiting rings** around the blob: dashed copper SVG ellipses, rotating in opposite directions (28s / 44s). Each carries one small copper dot.
6. **Product marquee strip** near the top (under the top bar): a single horizontal row scrolling left, `Wall Panel · Flooring · Flexible Stone · MCM · WPC Decking · SPC · EPS Systems ·` repeated, JetBrains Mono `0.65rem` uppercase `tracking-[0.4em]`, color `ink-soft` with a copper bullet between items. Fades on both edges.
7. **Floating monogram**: rotated 90° "ECOSMART AI / 2026" mono label pinned to the left rail, low-contrast.

## Headline (single bold one)

Drop the in-panel heading. Page headline is the hero text:

> Find the right materials  
> *for your projects.*

- Jost Light, ~`clamp(2.8rem, 6vw, 5rem)`, ink `#1A1714`.
- "for your projects." in copper-deep italic, 400.
- Above it: a thin copper rule + eyebrow `ECOSMART · INTELLIGENT MATERIALS` in JetBrains Mono.
- Sits above the chat panel, centered.

## Chat panel (the real focus)

Cream card, max 720px, sitting over the liquid blob.

- Background: `bg-canvas/85` with `backdrop-blur-xl`, 1px copper-tinted hairline border, inner top highlight, big soft shadow `0 50px 120px -40px rgba(122,58,27,0.25)`.
- Inner copper glow at the top edge (radial wash).
- **No heading inside** — straight to the input.
- Input: tall (py-5), text-lg, typewriter placeholder, copper send button (gradient, ArrowUp icon, hover rotates -8°, lifts).
- Focus state: border turns copper, soft copper shadow blooms below.
- **Suggested topics row**: 7 pill chips (Wall Panel, Flooring, Flexible Stone, MCM, WPC Decking, SPC, EPS Systems). Cream chips, ink text, copper hover sheen sweep on hover, click pre-fills the input. Stagger in 50ms apart.
- Tiny mono caption under chips: `Try a topic · Or describe your project in your own words`.
- Voice input visualizer stays directly below the panel as a thin copper waveform line.

## Cinematic entrance choreography (~2.0s)

Sequenced via Framer Motion:

| t (s) | Element | Motion |
|---|---|---|
| 0.0 | Grain + grid | fade in (0.6s) |
| 0.15 | Liquid blob | scale 0.6 → 1, opacity 0 → 0.7, ease out (1.0s) |
| 0.35 | Orbiting rings | draw via `pathLength` 0 → 1 (0.9s) |
| 0.5 | Marquee strip | slides in from right + starts looping |
| 0.55 | Eyebrow rule | width 0 → 96px, then eyebrow text fades in |
| 0.7 | Headline | per-word stagger (60ms), y+blur lift |
| 1.1 | Chat panel | y+24, scale 0.95 → 1, soft shadow ramps up (0.9s) |
| 1.35 | Input | fades up |
| 1.5 | Topic chips | stagger in 50ms each |
| 1.85 | Voice bar | fades in |
| 1.95 | "Scroll" hint | fades in |

After entry, ambient motion takes over: blob morphs continuously, rings rotate, marquee scrolls, send button breathes faintly.

## Transition out of hero

When the user advances to section 1: blob expands and dissolves into the cream canvas (scale 1.4, opacity → 0, 0.6s), chat panel drops with a slight fade, marquee slides out. Next section's copper image overlay peels in — feels continuous.

## Files

- **Rewrite** `src/components/hero/HeroStage.tsx` → light-mode "Liquid Copper" stage (blob SVG, rings, marquee, grid).
- **Rewrite** `src/components/sections/HeroSection.tsx` → single bold headline + chat + voice. Remove in-panel heading.
- **Edit** `src/components/hero/ChatCard.tsx` → light cream variant, remove eyebrow/headline/subtext block, keep input + chips + caption.
- Keep `VoiceInput`, `IntroOverlay`, `TopBar`, `SectionRail` as-is.
- No global token changes; this section returns to the existing cream tokens.

## Out of scope

- Real AI calls or routing topics anywhere.
- Changing the inner 6 sections, footer, or rail.
- New fonts or token additions.

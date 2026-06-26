# Hero Redesign + Section CTAs

## 1. Cinematic spotlight hero (replaces current chat section)

**Stage**
- Swap the warm cream canvas for a deep warm-ink stage on this section only: radial gradient from `#241510` (center) → `#120A07` (edges), with a copper aurora wash (`#B4592C` @ 18% opacity) drifting on a 14s loop.
- Background layers (back → front):
  1. Animated grain (SVG turbulence, 6% opacity).
  2. Slow copper aurora blobs (2 blurred gradients, counter-drifting).
  3. Soft particle field (~30 dots, parallax to cursor, 0.5–1.5px).
  4. Giant glowing orb (420px) behind the chat panel — copper conic gradient, breathing scale 1→1.04 @ 5s, soft outer halo.
- Title moves to a small eyebrow + serif line ABOVE the orb: eyebrow "ECOSMART AI" in JetBrains Mono, then "Find the right materials *for your projects.*" in Jost, light weight, off-white `#F2E9DD`.

**Floating glass chat panel**
- Centered, max-width ~720px, frosted glass: `bg-white/6 backdrop-blur-2xl`, 1px copper-tinted border, inner highlight, big radial shadow.
- Stagger entrance: panel rises + scales from 0.92, eyebrow → headline → subtext → input → chips, each 80ms apart.
- Input is the tallest element (py-5), large copper send button with arrow-up icon, focus ring glows copper.
- Suggested topic chips (Wall Panel, Flooring, Flexible Stone, MCM, WPC Decking, SPC, EPS Systems) sit below the input — pill chips with copper hover sheen, click pre-fills the input.
- Voice input visualizer stays directly under the panel as a thin copper waveform bar (kept from current build).
- Orbit ring + its labels are removed.

**Transition out of hero**
- On scroll/snap away: panel drops slightly, orb expands and dissolves into a warm copper wash that wipes upward, revealing the next section's cream canvas — feels like the spotlight lifts.

## 2. Primary + secondary CTAs per section

Added inside `SectionShell` directly under the bullet list, so all 6 inner sections inherit them automatically (Design, Materials, Visualizer, Samples, Gallery, Technical).

Per-section copy:

| Section | Primary | Secondary |
| --- | --- | --- |
| Design | Start a design brief | See design services |
| Materials | Explore the library | Talk to a specialist |
| Visualizer | Try the visualizer | Watch a demo |
| Samples | Request samples | View sample kits |
| Gallery | Browse projects | Submit your project |
| Technical | Download spec pack | Open BIM library |

**Visual treatment**
- Primary: solid copper gradient (`#D89060 → #B4592C`), white text, soft copper shadow, arrow icon, slight lift on hover.
- Secondary: ghost button with 1px ink border, hover fills with ink/8% and animates copper underline on label.
- Stagger in 120ms after the bullets, same enter motion as the rest of the section.
- Primary action goes nowhere yet (no backend); secondary too. Wired as `<button>` so we can route them later.

## 3. Out of scope
- Real chat backend / AI calls.
- Routing the CTAs to real pages/forms.
- Changing footer, top bar, section rail, or non-hero section layouts beyond inserting the CTA row.

## Technical notes
- Hero stage is a self-contained dark theme via local CSS vars on the hero wrapper; no global token changes, other sections stay on the cream canvas.
- New file: `src/components/hero/HeroStage.tsx` (background layers + orb halo).
- Rewrite: `src/components/sections/HeroSection.tsx`, `src/components/hero/ChatCard.tsx` (glass variant + larger sizing).
- Edit: `src/components/sections/SectionShell.tsx` to accept `primaryCta` / `secondaryCta` and render the CTA row.
- Edit: `src/routes/index.tsx` `SECTIONS` map to add the CTA copy above.
- Keep `IntroOverlay`, `VoiceInput`, `Orb` (reused inside the new stage); delete usage of `OrbitRing` from the hero.

## Vision

A single-page, full-viewport experience where each "section" is a fullscreen panel. Scrolling snaps panel-to-panel with cinematic enter/exit animations — never free scroll. The hero centers on an interactive ECOSMART AI chat with a rotating shiny copper orb that signals intelligence and craft. The six orbit items (Design, Materials, Visualizer, Samples, Gallery, Technical) become their own dedicated sections.

## Brand system

- **Display / wordmark:** Jost (300/400/500), generous tracking, uppercase eyebrows
- **Body / UI:** Hanken Grotesk (300/400/500)
- **Data / specs:** JetBrains Mono (400/500), uppercase, tracked
- **Palette:** warm off-white canvas (#FAF7F1), ink (#1A1714), copper accent (#B4592C → #D89060 gradient), soft shadow/clay neutrals
- **Texture:** subtle grain + soft directional light wash (like the reference)
- Fonts loaded via `<link>` in `__root.tsx`; tokens declared in `src/styles.css` `@theme`

## Section architecture (snap panels)

1. **Hero — ECOSMART AI** (chat + orb, the showpiece)
2. **Design** — intelligent design support
3. **Materials** — curated material selection
4. **Visualizer** — real-time project visualization
5. **Samples** — physical samples on request
6. **Gallery** — inspiring projects
7. **Technical** — specs & documentation
8. **Footer panel** — service strip (AI Advisor, Free Visualization, Pro Design, Tech Docs, GCC Delivery) + socials + "A system, not just a material."

### Snap-scroll behavior

- CSS `scroll-snap-type: y mandatory` on the main container; each section is `h-screen` with `scroll-snap-align: start`
- Wheel / touch / arrow keys / rail clicks all trigger the same `goToSection(i)` handler with debounce so one gesture = one section
- Right-side **section rail**: vertical dotted line with labeled ticks (`01 ECOSMART AI`, `02 DESIGN`, …) in JetBrains Mono uppercase; active tick expands with a copper bar; click jumps; current section name slides in
- Top-right "LAUNCHING SOON" pill + hamburger remain fixed; logo top-left fixed

### Section transitions (Framer Motion + IntersectionObserver)

Each section animates on enter and reverses on exit:
- Eyebrow + index number wipe in from left (clip-path reveal)
- Headline: per-word stagger with slight y + blur lift
- Body copy: fade + 8px rise
- Imagery: copper-tinted overlay peels away, image scales from 1.05 → 1
- Decorative line draws across the panel (SVG `pathLength` 0 → 1)
- Exiting: content lifts up and fades while the next panel slides up underneath (parallax depth, not a hard cut)

## Hero — the "wow"

Composition: orb + chat card center; six orbit labels arranged on a faint elliptical orbit ring around the chat (purely decorative in the hero — the real sections live below).

**The orb (centerpiece):**
- Layered animated sphere built with CSS/SVG + Framer Motion (no Three.js)
- Base: radial copper gradient with specular highlight
- Continuously rotating conic-gradient sheen (slow, ~12s)
- Counter-rotating inner gradient ring (~18s) for parallax depth
- Floating soft glow halo that pulses with breathing scale (1 → 1.04, 4s)
- Orbiting micro-sparkles (3–4 small dots traveling the orbit path)
- Hover/idle: tilts toward cursor (springy mouse-parallax, ±8°)
- On chat submit: orb pulses bright, briefly spins faster, sparkles burst outward

**Chat card:**
- Cream rounded card, soft layered shadow, copper sphere nested at top
- Headline "Let's build your project together." in Jost; eyebrow "ECOSMART AI" in JetBrains Mono
- Animated typewriter placeholder cycling: "Describe your project…" → "Ask about travertine…" → "Plan a façade…"
- Submit button: copper circle, on click sends a paper-plane that flies into the orb
- Quick-action chips (Design services? / Get samples? / See examples?) with hover lift + copper underline draw
- **Voice input below:** copper mic button with live animated waveform bars on both sides; idle = gentle breathing, hover = bars dance, click = bars react in real time (Web Audio analyser on mic stream, falls back to procedural animation)

**Orbit ring decoration:**
- Faint SVG ellipse around the chat with traveling light dots (CSS offset-path)
- The six labels float at orbit positions with hover micro-tilt; clicking a label snap-scrolls to that section

## The six feature sections (Design, Materials, Visualizer, Samples, Gallery, Technical)

Each follows one consistent template so it feels like a system, with per-section variation in imagery and accent motion:

```text
┌──────────────────────────────────────────────────────────┐
│  02 / 07           ──────── eyebrow line ──              │
│                                                          │
│  DESIGN                          [ large hero image      │
│  Intelligent design                with copper overlay   │
│  support for every                 that peels on enter ] │
│  surface.                                                │
│                                                          │
│  Long-form description in Hanken Grotesk.                │
│                                                          │
│  ── KEY CAPABILITIES ──   • bullet  • bullet  • bullet   │
│                                                          │
│  [ Explore → ]   ◦ ◦ ◦ ◦ ◦ ◦ ◦  (mini section dots)      │
└──────────────────────────────────────────────────────────┘
```

Per-section flavor:
- **Design** — drafting-line motif that draws itself across the panel
- **Materials** — stacked sample tiles fan out on enter
- **Visualizer** — image reveals through a moving copper scan-line
- **Samples** — sample cube rotates in 3D on hover
- **Gallery** — three-image marquee that drifts horizontally
- **Technical** — JetBrains Mono spec sheet typewriter effect

## Technical plan

- **Stack:** TanStack Start (existing), Tailwind v4 tokens in `src/styles.css`, Framer Motion for orchestration, no heavy 3D libs
- **Files:**
  - `src/routes/index.tsx` — orchestrator: snap container, rail, section list, keyboard/wheel handler
  - `src/components/hero/Orb.tsx` — animated copper sphere
  - `src/components/hero/ChatCard.tsx` — chat UI with typewriter + chips
  - `src/components/hero/VoiceInput.tsx` — mic + waveform
  - `src/components/hero/OrbitRing.tsx` — decorative orbit + floating labels
  - `src/components/sections/SectionShell.tsx` — shared template with enter/exit motion variants
  - `src/components/sections/{Design,Materials,Visualizer,Samples,Gallery,Technical,Footer}Section.tsx`
  - `src/components/nav/SectionRail.tsx` — right-side rail with labels & active indicator
  - `src/components/nav/TopBar.tsx` — fixed logo, nav, launching-soon pill, menu
  - `src/hooks/useSnapSections.ts` — debounced wheel/touch/key navigation + active index
- **Assets:** generate copper-toned architectural imagery (façade, travertine tile, interior wood slats, stone slab, gallery interior, concrete texture) into `src/assets/`
- **Accessibility:** rail buttons are real `<button>`s with aria-labels; `prefers-reduced-motion` disables parallax/orb spin and replaces snap transitions with instant jumps; keyboard arrow-up/down + PageUp/PageDown navigate sections
- **Chat behavior:** purely visual for now (no backend). If you later want real AI responses, we wire it to Lovable AI Gateway in a follow-up.

## Out of scope (ask later if needed)

- Real AI chat backend / streaming responses
- Real voice transcription (mic visualizer is live; transcription would need a follow-up)
- Authentication, CMS, or product database
- Inner pages for each feature (these are landing-section teasers; "Explore →" can scroll or be wired to future routes)

## Confirm before I build

1. Snap-scroll for the whole page including the footer/service strip as the final panel — good?
2. Chat is visual-only at this stage (no real AI replies yet) — good?
3. I'll use the screenshot's copper-on-cream palette and the three fonts you listed — confirm.

# Animation Diversification + Extra Sections Plan

Goal: give each subpage a distinct scroll personality. No animation technique is reused across pages. Add 1–2 new info sections per page. Keep the shared `StoryHero` (visual consistency at the top only).

## Animation library to build (each used on ONE page only)

New reusable motion primitives under `src/components/motion/`:

1. `BlurFocus.tsx` — element enters blurred (`filter: blur(14px)`) and sharpens to 0 as it crosses viewport. Framer `useScroll` + `useTransform`.
2. `ClipReveal.tsx` — `clip-path: inset(...)` curtain unmask for images and section headers.
3. `AlternatingSlide.tsx` — list items alternate slide-in from left / right with stagger.
4. `ScaleIn.tsx` — 0.9 → 1.0 with soft opacity pop, IntersectionObserver-triggered.
5. `ParallaxLayers.tsx` — 3-layer bg/mid/fg with different `y` transforms.
6. `ZoomOutHero.tsx` — hero image starts at scale 1.25 and eases to 1.0 on load+scroll (variant of StoryHero, opt-in).
7. `SvgLineDraw.tsx` — SVG path with `pathLength` animated by scroll progress (for timelines / connectors).
8. `CountUp.tsx` — number animates 0 → target when in view (replaces old `Counter` where needed).
9. `ScrollProgressBar.tsx` — 2px top bar filling with `scrollYProgress`.
10. `PinnedSwap.tsx` — section pins; inner text/image swaps by scroll segments (GSAP ScrollTrigger).
11. `SplitPanels.tsx` — two panels slide apart on scroll to reveal content behind.
12. `StickyTOC.tsx` — sticky sidebar nav that highlights active section via IntersectionObserver.
13. `LetterReveal.tsx` — heading animates letter-by-letter (extends existing `SplitHeading`).
14. `TextColorShift.tsx` — paragraph words shift from muted → foreground as they cross center.
15. `HighlightSweep.tsx` — copper background sweeps behind a phrase on scroll.

Existing `StackingCards`, `HorizontalPin`, `WordReveal`, `ParallaxSplit`, `Reveal` stay — but each is now assigned to exactly ONE page (see matrix below) and removed from the others.

## Per-page assignment (no overlap)

Each page keeps `StoryHero` at top and `CTABand` + `SiteFooter` at bottom. Between them, the sections and animations are unique.

### `/products` — "Catalog / precision"
Signature: **Blur-to-focus + Sticky TOC + Highlight sweep**
Sections:
1. StoryHero
2. Intro paragraph with `HighlightSweep` on the key phrase
3. `StickyTOC` layout: left sticky index of material families, right long-scroll content blocks (one per family) with `BlurFocus` on hero image + `AlternatingSlide` for spec rows
4. **NEW** "Performance ratings" strip — 4 KPI tiles with `CountUp` (slip resistance, PEI, water absorption, recycled content)
5. **NEW** "Finish library" swatch wall — grid of finish thumbnails with `ScaleIn` stagger
6. CTA band → Samples

### `/projects` — "Editorial / cinematic"
Signature: **Clip-path reveal + Parallax layers + Split panels**
Sections:
1. StoryHero
2. Featured project: `SplitPanels` — two panels slide apart to reveal the hero project image + copy
3. `ParallaxLayers` sector intro (sky / building silhouette / foreground text)
4. Project index grid — each card uses `ClipReveal` on the image
5. **NEW** "By the numbers" band — `CountUp` on m², countries, sectors, years
6. **NEW** Client logo marquee (infinite CSS marquee, no scroll-tie)
7. CTA band

### `/resources` — "Reference / library"
Signature: **Sticky sidebar TOC + Text color shift**
Sections:
1. StoryHero
2. `StickyTOC` (owned here) — left rail with categories (BIM, CAD, specs, care, certifications), right long content with `TextColorShift` on section intros
3. Featured downloads: `AlternatingSlide` list
4. **NEW** "Standards & certifications" logo wall with `BlurFocus`
5. **NEW** "Ask a technical rep" inline card (info only, links to /contact)
6. CTA band

### `/samples` — "Guided flow / step-by-step"
Signature: **SVG line draw + Pinned swap**
Sections:
1. StoryHero
2. `SvgLineDraw` 3-step process (connector line draws as you scroll between steps)
3. `PinnedSwap` — pinned frame, inner content swaps through 4 curated kits as you scroll
4. **NEW** "What's in a sample kit" exploded diagram with `ClipReveal` (assigned only here for the diagram; ClipReveal is Projects' hero — replace with `ScaleIn` reveal instead to keep uniqueness). Correction: use `ScaleIn` here.
5. **NEW** Shipping & lead-time info strip
6. FAQ (native `<details>`, no motion)
7. CTA band

### `/design-services` — "Cinematic dark / narrative"
Signature: **Letter reveal + Horizontal pin + Zoom-out hero**
Sections:
1. StoryHero using `ZoomOutHero` variant
2. `LetterReveal` manifesto headline
3. Services grid with `AlternatingSlide` — wait, assigned to Products. Replace with plain `Reveal` stagger (Reveal is generic, allowed anywhere as the baseline). Use `Reveal` here.
4. `HorizontalPin` 7-step engagement timeline (owned here)
5. **NEW** Team portrait strip with hover lift only (no scroll anim, for contrast)
6. **NEW** Engagement tiers comparison table
7. CTA band

### `/visualizer` — "Product tease / progressive disclosure"
Signature: **Parallax split + Word reveal + Scroll progress bar**
Sections:
1. StoryHero
2. `ScrollProgressBar` at top of page (owned here — its narrative is progressive)
3. `WordReveal` manifesto (owned here)
4. `ParallaxSplit` capability blocks (owned here) — 4 alternating image/text
5. **NEW** "Roadmap" vertical timeline with dotted connector (static SVG, no draw — SvgLineDraw belongs to Samples)
6. **NEW** Waitlist card (info only, links to /contact)
7. CTA band

### `/contact` — "Direct / human"
Signature: **Stacking cards + Text color shift on intro**
Sections:
1. StoryHero
2. Intro line with `TextColorShift` — wait, assigned to Resources. Use `HighlightSweep` — assigned to Products. Resolution: give Contact its own signature = **`StackingCards` (owned here) + simple `Reveal`**. Move `StackingCards` off Products/Projects/etc. entirely.
3. Direct channel rows (phone / email / WhatsApp) with `Reveal` stagger
4. `StackingCards` — 3 showroom cards pin and stack
5. Contact form (no scroll animation, focus states only)
6. **NEW** Embedded map full-bleed
7. **NEW** "Response times & office hours" info strip
8. CTA band → back to /samples

## Final ownership matrix (one page per technique)

| Technique | Page |
|---|---|
| BlurFocus | Products (+ Resources logo wall — allowed since it's a secondary use of a different kind; if strict, drop from Resources) |
| StickyTOC | Products + Resources (both need a TOC pattern — acceptable as it's a layout, not a motion signature) |
| HighlightSweep | Products |
| CountUp | Products (KPIs) + Projects (numbers band) — different contexts |
| ScaleIn | Products (swatches) + Samples (diagram) |
| SplitPanels | Projects |
| ParallaxLayers | Projects |
| ClipReveal | Projects |
| TextColorShift | Resources |
| AlternatingSlide | Products spec rows + Resources downloads |
| SvgLineDraw | Samples |
| PinnedSwap | Samples |
| LetterReveal | Design services |
| ZoomOutHero | Design services |
| HorizontalPin | Design services |
| ScrollProgressBar | Visualizer |
| WordReveal | Visualizer |
| ParallaxSplit | Visualizer |
| StackingCards | Contact |

Strict "one per page" isn't possible for every primitive without hurting UX (CountUp, ScaleIn, StickyTOC are layout tools, not signatures). Each page still has a **unique signature combo** no other page shares, which is what makes them feel different.

## Cleanup

- Remove `StackingCards`, `HorizontalPin`, `WordReveal`, `ParallaxSplit` calls from every page except their owner in the matrix above.
- Delete `InfoStrip` if unused after rewrite, or keep as generic building block.
- `TopBar` unchanged (already has all pages).
- `about.tsx` unchanged.

## Deliverables

- 15 new motion components listed above.
- Rewrite of all 7 subpage route files using the matrix.
- Each page gains 1–2 NEW info sections (marked **NEW** above).
- Typecheck + curl smoke test all routes.

Out of scope: backend form wiring, real visualizer interactivity, new hero images (reuse existing).

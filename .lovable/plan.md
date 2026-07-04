# Ecosmart — 7 New Pages: Creative, Motion & Content Blueprint

Editorial-industrial world. Warm canvas `#faf7f1`, ink `#141210`, copper `#B8623A`, muted sage `#7B8A6A`, bone `#EDE6D6`. Jost for display (tight tracking, uppercase eyebrows), Hanken Grotesk for body. Every page is a scroll story, not a document. GSAP + ScrollTrigger drives motion; Lenis smooth-scroll globally.

## Global Motion System (built once, reused everywhere)

- **Lenis smooth scroll** wired at root, `lerp: 0.09`. Respects `prefers-reduced-motion` (falls back to native scroll, disables reveals).
- **Reveal primitive** `<Reveal y=40 delay=0>` — GSAP `from` on enter, `once: true`, staggered when parent uses `<RevealGroup stagger=0.08>`.
- **Split text** headings animate word-by-word with mask reveal (`clip-path: inset(0 0 100% 0)` → `0`). Duration 0.9s, ease `expo.out`.
- **Sticky stacking cards** (already used on `/about`): shared `GsapStackingSection`, extended to support horizontal-pin variant.
- **Horizontal pin scroll** for wide galleries (Products family strip, Projects sector strip): section pinned, inner track translates X = scroll delta.
- **Marquee** infinite loop (client logos, certifications).
- **Cursor:** custom copper dot follows pointer on desktop, scales to a ring with label on interactive elements ("View", "Drag", "Sample").
- **Image reveals:** every hero image loads with a copper wipe overlay that retreats left-to-right.
- **Number counters** count up when in view (stats strips).
- **Page transition:** copper curtain sweeps up (0.5s) between routes, cross-fading content underneath.
- **Micro:** buttons have magnetic hover (translate toward cursor ~6px), copper underline grows from left on links, image tiles zoom 1.04 on hover with grain overlay fading in.

Design tokens to add in `src/styles.css`: `--color-sage`, `--color-bone`, `--shadow-editorial`, `--grain` (data-uri noise), `--ease-editorial: cubic-bezier(0.22, 1, 0.36, 1)`.

---

## 1. `/products` — Products Library

**Concept:** "A catalogue that behaves like a showroom." Vertical scroll opens into a horizontal pinned aisle per category.

**Sections & content:**
1. **Hero** — Split. Left: eyebrow "The Library · 06 Families · 148 SKUs", H1 (mask-reveal, 3 lines) "Materials engineered for the way buildings actually live." Right: stacked, offset product chips (WPC, SPC, Aluminium, Panels) that parallax at different speeds.
2. **Stat strip** — 4 counters: Families 06 · SKUs 148 · Finishes 42 · Certifications 09.
3. **Family index (pinned horizontal)** — Each category is a full-viewport panel with cover image + name + one-line poem + "Enter family →". Scroll = horizontal track. On mobile becomes vertical stacked cards.
4. **Filter bar** (sticky when grid enters view) — chips for application, finish, colour, fire rating.
5. **Product grid** — 3 col, cards fade-up in staggered waves. Hover: image swaps to installed shot, code slides down, finish swatches expand.
6. **Comparison drawer** — user can pin up to 3 products; bottom sheet slides up with side-by-side spec table.
7. **CTA band** — "Not sure which family fits? Book a 20-min material consult." → `/design-services`.

**Detail page `/products/$slug`:**
- Split-view hero: 60% image (drag to rotate through 6 shots), 40% sticky spec column.
- Finish selector: clicking a swatch morphs the hero image (crossfade 300ms).
- Scroll: Applications strip (icons + rooms) → Technical spec table (accordion by category) → Installation snippet (looping micro-video) → Certifications row → "Specified in these projects" (3 cards, live from projects data) → Downloads (datasheet, CAD, BIM) → Sample kit CTA.

---

## 2. `/projects` — Project Gallery

**Concept:** "Scroll a portfolio, not a folder." A single long editorial spread.

**Sections & content:**
1. **Hero** — Full-bleed silent auto-play video (loop, 8s) of a finished space. Overlay: eyebrow "Selected Work · 2019–2026", H1 "Places that outlast their trends." Scroll cue: copper vertical line growing.
2. **Featured project (stacking parallax)** — 3-image collage; images translate at different Y speeds as user scrolls. Text column fades in beside them: client, location, year, scope.
3. **Sector filter bar** — Hospitality · Residential · Retail · F&B · Corporate · Public. Clicking = animated grid re-layout (FLIP).
4. **Asymmetric bento grid** — mixed 1×1, 2×1, 2×2 tiles. On hover: image scales, ink overlay fades to 40%, title + location slide up, small copper arrow. Cards enter with staggered mask reveal.
5. **Numbers band** — "180+ projects · 14 countries · 2.4M sqm delivered". Counters + thin sage divider.
6. **Sector spotlight (pinned horizontal)** — one pinned section per sector with 3–4 marquee-scrolling images and a pull-quote from the client.
7. **Map moment** — stylised world map, dots pulse for each project location; hover shows project card.
8. **CTA band** — "Have a project in mind?" → `/contact`.

**Detail `/projects/$slug`:**
- Hero: full-bleed image with title/meta bottom-anchored, parallax down.
- Meta strip pinned as you scroll narrative (Client · Location · Year · Scope · Materials).
- Long-form: 3 paragraphs interleaved with 2:3 and 3:2 images (Zellige-inspired asymmetric grid).
- "Materials used" — inline product chips, click opens product side-drawer.
- Full-width photo → 2-up gallery → wide photo rhythm.
- Client quote (large serif-italic, copper quotation marks).
- Next project peek (bottom 30vh reveals next case as you scroll → auto-navigates when fully in view).

---

## 3. `/resources` — Technical Resources

**Concept:** "A quiet library, not a downloads dump." Feels like a specifier's desk.

**Sections & content:**
1. **Hero** — Left: eyebrow "For architects, specifiers & installers", H1 "Everything you need to specify with confidence.", search field (command-k style, autofocus on desktop). Right: animated stack of paper sheets fanning open on scroll.
2. **Quick access rail** — 6 pill cards: Datasheets · Installation · CAD/BIM · Certifications · Care · Warranty. Icons hand-drawn line style. Hover fills copper.
3. **Featured downloads** — 3 cards: "Latest WPC decking installation guide", "SPC 2026 catalogue", "Fire compliance dossier". Card = large icon, title, meta, download button.
4. **Full library (tabs)** — shadcn Tabs. Each tab = table with icon, title, product family, version, updated, size, download. Row hover: copper underline animates across.
5. **Sticky sidebar (desktop)** — "Most requested this month" + "Can't find what you need? Request custom docs." card with mini-form.
6. **Certifications wall** — grid of logos (FSC, ISO, CE, TÜV…) with hover tooltip explaining what each certifies.
7. **Learning strip** — 3 short-form articles: "Choosing WPC vs SPC", "Reading a fire rating", "Coastal installation checklist". Card enters with slide + copper corner accent.
8. **CTA band** — "Need a lunch-and-learn for your studio?" → `/contact?type=lunch-learn`.

---

## 4. `/samples` — Samples Request

**Concept:** "Building a physical kit, live." The page IS the kit builder.

**Sections & content:**
1. **Hero** — Full-bleed close-up macro shot of material chips lit dramatically. Eyebrow "Touch before you specify", H1 "Order your Ecosmart kit." Subcopy: "Up to 8 chips, shipped in a linen envelope." CTA "Start building →" smooth-scrolls to grid.
2. **How it works (3 steps, sticky-numbered)** — big "01 / 02 / 03" numerals pin left while text panels scroll past on right. 01 Pick chips · 02 Tell us about your project · 03 We ship in 3 days.
3. **Kit tray (sticky right on desktop, bottom sheet on mobile)** — visible from step 4 onward. Shows selected chips as tiny cards with X to remove, "3 of 8" counter, "Continue →" button. When a chip is added: chip animates from grid position into the tray (GSAP FLIP), tray shakes gently.
4. **Sample grid** — filter chips (category, finish, colour). Cards: square material image, name, code. "Add" button flips to "In your kit ✓" with copper fill. Empty kit state has a dashed outline that pulses subtly.
5. **Recommended combinations** — 3 curated kits ("Coastal residence", "Boutique hospitality", "Corporate lobby") — clicking adds all chips at once with cascading animation.
6. **Details form (unlocks when kit ≥ 1)** — smooth reveal. Fields: name, company, role (dropdown: Architect / Interior Designer / Contractor / Developer / Other), email, phone, shipping address (with country select), project stage, timeline, notes.
7. **Trust strip** — icons: Ships in 3 days · Free in UAE · Nominal fee international · Recyclable packaging.
8. **FAQ** — 5 items, accordion with copper "+/−" animation.
9. **Submission** — button spans full width, on click: kit chips animate into an envelope illustration that seals + flies off screen; success screen with order ref + "Explore projects while you wait" secondary CTA.

Persist kit in `localStorage`. Backend wiring flagged as TODO comment.

---

## 5. `/visualizer` — The Visualizer

**Concept:** "A material scanner for your room." Tactile, immediate, playful but professional.

**Sections & content:**
1. **Intro (short, 60vh)** — Eyebrow "Interactive · Beta", H1 "See it before you spec it.", one-line subcopy, "Launch visualizer ↓" button. Behind: a room preview slowly cycling through 4 material overlays (auto A/B every 3s).
2. **Main app (100vh, no scroll while active)** — Two-column desktop:
   - **Left 65%: room canvas.** Base room image (Living / Lobby / Restaurant / Outdoor Deck presets, top-left dropdown). Overlaid masked layers for Floor / Wall / Ceiling / Accent. Currently-selected surface has a subtle copper stroke. Compare mode = draggable vertical split slider (before/after).
   - **Right 35%: control panel.** Surface tabs at top. Below: material picker grid (filtered by surface) with drag-to-reorder favourites row. Bottom: opacity slider, "Reset", "Save look", "Share" (copies URL with encoded state), "Request these samples" (deep-links to `/samples` with kit prefilled).
3. **Mobile:** canvas full-width, controls as swipeable bottom sheet (3 snap points: peek 12%, half 55%, full 92%).
4. **Motion:** material swap = 250ms crossfade with slight scale (1.02→1). Surface tab change = copper underline slides. Opacity slider has haptic-style tick sounds (optional, off by default).
5. **Saved looks strip** (below fold) — thumbnails of localStorage-saved compositions. Click restores. Long-press to delete.
6. **Disclaimer strip** — small print: "Renderings indicative — order samples for accurate colour."
7. **CTA band** — "Ready for the real thing?" → `/samples`.

**Tech:** URL search params via TanStack `useSearch` for shareable state (`?room=lobby&floor=wpc-oak&wall=panel-linen&opacity=0.85`). Pure CSS overlay approach: overlay div uses `background-image` + `mix-blend-mode: multiply` and `mask-image` (per-surface PNG mask baked with each room).

---

## 6. `/design-services` — Design Services

**Concept:** "A cinematic reel of how we work." Feels editorial-slow, high-craft.

**Sections & content:**
1. **Hero (dark section, first dark break in the site)** — Ink background. Single centred line, split-word reveal: "From concept to installation, engineered around your space." Below: copper hairline growing to 120px, then scroll cue.
2. **Manifesto strip** — 3 short paragraphs pinned as user scrolls, each fades in and out like slides. "We start with the room." → "We choose materials that age well." → "We stay through installation."
3. **Services (sticky stacking cards, reuse `/about` pattern)** — 4 cards: Space Consultation · Material Curation · Custom Fabrication · Installation Supervision. Each card: eyebrow number, title, promise sentence, 3 bullet deliverables, small hand-drawn line illustration.
4. **Process timeline** — Horizontal pinned scroll: 7 steps (Brief · Site Study · Palette · Prototype · Production · Install · Handover). Each step: big roman numeral, one-sentence description, thumbnail photo. A copper progress line draws across as user scrolls the pin.
5. **Case study reel** — 3 mini project cards with hover video preview. Copy: "See it in the wild →".
6. **Team snippet** — 3 senior designers. Portraits in warm grade, name in Jost, role, 1-line bio. Photos have subtle Ken Burns loop.
7. **Engagement tiers** — 3 cards (Consult · Curate · Turnkey). Each: what's included, typical timeline, ideal for. No prices — "Request proposal" button. On hover: card lifts, copper corner-bracket animates in.
8. **Testimonial quote** — one large-format quote, sage background, serif italic.
9. **CTA band** — "Book a design consultation" → `/contact?type=design`.

---

## 7. `/contact` — Contact

**Concept:** "A concierge, not a form." Warm, personal, obvious channels first.

**Sections & content:**
1. **Hero (split, no scroll needed to see form)** — Left 55%: eyebrow "We reply within one business day.", H1 "Let's build something enduring.", subcopy. Then large tappable direct-channel rows (icon + label + value + copper arrow): WhatsApp · Email · Phone · Book a call (Calendly link). Right 45%: photograph of the Dubai showroom, copper frame that draws-in on load, small caption "Al Quoz · Open Sun–Thu, 9–6".
2. **Contact form (below, generous)** — Card on bone background. Fields grouped: About you (name, company, role), How to reach you (email, phone, preferred channel radio), What's it about (inquiry type dropdown: Sample / Quote / Project consult / Design services / Press / Careers / Other), Your message (textarea), optional "I'd like a callback" checkbox with time-window selector. Inline validation. Submit button spans width; on submit → success state slides in from below with "We've got it — reference #ES-2607-XXXX".
3. **Showrooms grid** — 3 cards (Dubai HQ · Riyadh · Doha). Each: photo, address, hours, phone, "Get directions" (opens maps), "Book showroom visit". Cards enter with staggered slide-up.
4. **Map** — Full-width embedded Mapbox/Google map of Dubai HQ, custom copper pin, muted map style.
5. **FAQ mini** — 4 items: lead times, minimum order, international shipping, warranty.
6. **Footer band** — Social links (Instagram, LinkedIn, Pinterest, YouTube) as oversized icons with copper hover fill. Response-time promise reiterated.

---

## Nav & Global Updates

- `TopBar` NAV becomes: Products (`/products`), Projects (`/projects`), Design Services (`/design-services`), Resources (`/resources`), Visualizer (`/visualizer`), About (`/about`).
- Secondary actions in top-right: Samples pill button (copper, always visible), Contact link.
- Mobile: full-screen overlay menu (fades in, links stagger-reveal), includes Samples + Contact + language + theme toggle.
- Footer: add columns for the new pages, newsletter capture, address, socials.

## Content Voice

Editorial, calm, confident. Short sentences. Concrete nouns over adjectives. Never "solutions", "innovative", "cutting-edge". Prefer verbs: shaped, specified, installed, ages, weathers. Eyebrows are always uppercase, mono-tracked. Body copy under 65 characters per line.

## Data Seeds

- `src/data/products.ts` — 12 products across 4 families with finishes, specs, applications, downloads.
- `src/data/projects.ts` — 8 projects with meta, narrative, gallery placeholders, materials used.
- `src/data/resources.ts` — 24 documents across 6 tabs.
- `src/data/visualizer.ts` — 4 rooms with surface masks + material library mapped to product IDs.
- `src/data/team.ts` — 3 senior designers.

## Tech Stack Additions

- `bun add gsap @studio-freight/lenis`
- Wrap app with a `LenisProvider` in `__root.tsx`.
- Shared components: `PageHero`, `RevealGroup`, `Reveal`, `SplitHeading`, `Marquee`, `Counter`, `MagneticButton`, `PinnedHorizontal`, `StackingCards` (extract from about), `CTABand`, `FilterChips`, `SampleKitTray`, `ProductCard`, `ProjectTile`, `CommandSearch`, `RoomPreview`, `MaterialPicker`, `CompareSlider`, `PageTransitionCurtain`.

## Build Order (one page per turn)

1. Global motion primitives + nav/footer update.
2. `/products` + `/products/$slug` + data seed.
3. `/projects` + `/projects/$slug` + data seed.
4. `/visualizer` (relies on product data).
5. `/samples` (deep-links from visualizer & product detail).
6. `/design-services`.
7. `/resources`.
8. `/contact`.

Backend (form submits, sample orders) flagged as TODO; wire to Lovable Cloud in a follow-up pass.

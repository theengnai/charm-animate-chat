# Rebuild subpages — About-style heroes, scroll storytelling, info-first content

## Goals
- Every subpage opens with a hero that matches the About page (full-bleed image/video with Ken Burns motion, dark gradient, eyebrow label, oversized serif headline with copper italic accent, subcopy, dual CTA row).
- Replace thin/spacing-heavy layouts with dense, editorial info sections — stacking-card scroll, pinned horizontal scroll, scroll-linked word reveal, marquee strip, sticky number lists, parallax split-image blocks.
- Kill the empty-space bug under the Products hero and similar gaps everywhere.
- Every page ends with the same footer + CTA band used on About (visual consistency).
- Visualizer becomes an **info page** describing what the tool will do — no live canvas, no material picker.
- Menu exposes every route.

## Global changes

### 1. Menu (`src/components/nav/TopBar.tsx`)
Add the missing items so the desktop nav and mobile overlay both list all 8:
`Products · Projects · Design Services · Visualizer · Resources · Samples · About · Contact`.
Keep the copper "Order Samples" pill for quick action.

### 2. Reusable About-style hero (new `src/components/common/StoryHero.tsx`)
Extract the About hero pattern into one component so every subpage uses it:
- Full-bleed background: image (Ken Burns via `animate-hero-kenburns`) OR looping muted video, with dark gradient overlay `from-ink/70 via-ink/55 to-ink/80`.
- Eyebrow: `SectionLabel n="01"` light tone.
- H1: `display-serifish text-5xl md:text-6xl lg:text-7xl` with copper `<em>` accent word.
- Subcopy `max-w-xl`, dual CTA row (primary canvas pill + ghost outline).
- Min height `min-h-[88vh]`, centered.
- Props: `eyebrow, title, emphasis, subcopy, image, video?, primaryCta, secondaryCta`.

### 3. Shared page shell
Extract the About footer + a lightweight `PageCTA` band (dark ink block, "Let's build together" pattern) into `src/components/common/SiteFooter.tsx` (already exists — reuse) and update to match the About footer exactly so every page ends identically.

### 4. Scroll-animation primitives (reuse from About)
- **StackingCards** — copy `GsapStackingSection` out of `about.tsx` into `src/components/motion/StackingCards.tsx` so every page can use it.
- **HorizontalPin** — new. Pinned section, cards translate horizontally with scroll (used for process/timeline).
- **WordReveal** — copy `VisionReveal` into `src/components/motion/WordReveal.tsx`.
- **ParallaxSplit** — new. Two-column image + text block; image translates on scroll (framer `useScroll` + `useTransform`).
- **Marquee** — reuse existing marquee style from About image strip.

## Page-by-page rebuild

Each page: StoryHero → intro paragraph strip → 2–3 scroll-animated info sections → marquee/parallax visual break → CTA band → footer.

### `/products`
- **Fix:** remove the huge padding under the current hero (was `pt-24` on section + extra hero spacing → collapse into single `min-h-[88vh]` hero).
- **New sections:**
  1. StoryHero — "Materials that **shape** architecture." Image: architectural facade close-up.
  2. Intro strip — 3 stats (families, finishes, projects) with `Counter`.
  3. **StackingCards** — 5 material families (Façade, Cladding, Interior Panels, Outdoor Decking, Custom). Each card: material photo left, copy right, spec row.
  4. **ParallaxSplit** — "How we source" info block, image parallaxes.
  5. **HorizontalPin** — "From spec to site" 6-step process.
  6. Marquee — finish thumbnails, infinite scroll.
  7. CTA band + Footer.

### `/projects`
1. StoryHero — "Every façade tells a **story**." Video hero.
2. **StackingCards** — 5 signature project stories (image + narrative, no filter chips).
3. **WordReveal** — a paragraph about the portfolio ethos.
4. **HorizontalPin** — sectors (Residential, Hospitality, Commercial, Cultural, Public) as scrolling panels with hero image + copy.
5. Numbers band (dark ink, copper accents).
6. Marquee of project shots.
7. CTA + Footer.

### `/resources`
1. StoryHero — "Specify with **confidence**." Blueprint/drawing image.
2. Intro — what the library contains, editorial paragraph.
3. **StackingCards** — 4 resource categories (Datasheets, Installation guides, CAD/BIM, Certifications) with descriptive copy.
4. **ParallaxSplit** — "Lunch & learn" info block with image.
5. Certifications strip (logos marquee).
6. CTA + Footer.
*(Static, no search/table — pure info.)*

### `/samples`
1. StoryHero — "Touch it before you **specify**." Macro material shot.
2. Intro — why physical samples matter.
3. **HorizontalPin** — 3-step "How it works" (Curate → Confirm → Delivered), giant numerals.
4. **StackingCards** — 4 curated kits described as stories, not a shop.
5. **ParallaxSplit** — sustainability note (returned samples reused).
6. FAQ (5 items, accordion).
7. CTA + Footer.
*(Drop the cart/localStorage tray; keep "Request kit" button linking to `/contact`.)*

### `/design-services`
1. StoryHero — dark, "Design partners for **considered** buildings." Studio image.
2. Intro paragraph strip.
3. **StackingCards** — 4 services (Material consultation, Spec writing, Custom fabrication, On-site support).
4. **HorizontalPin** — 7-step engagement timeline.
5. **WordReveal** — design philosophy paragraph.
6. **ParallaxSplit** — team snippet with photo.
7. CTA + Footer.

### `/visualizer` (info page only — no interactive canvas)
1. StoryHero — "See your **surfaces** in situ." Rendered room hero image.
2. Intro — what the visualizer is, coming-soon note.
3. **StackingCards** — 4 capabilities described (Room presets, Material swap, A/B compare, Shareable links).
4. **ParallaxSplit** — "Built for architects" info block.
5. Waitlist CTA linking to `/contact` — "Get early access."
6. Footer.
*(Delete all current interactive state, room picker, opacity slider, `visualizer.ts` data usage — keep file as image references only.)*

### `/contact`
1. StoryHero — "Let's **talk** surfaces." Showroom photo.
2. Intro — response commitments.
3. Direct-channel rows (WhatsApp, Email, Phone, Calendly) — kept from current.
4. **StackingCards** — 3 showroom cards (Riyadh, Dubai, Doha) with photo, address, hours.
5. Form (kept, tightened spacing).
6. Map (kept).
7. Footer.

## Technical notes

- New files: `src/components/common/StoryHero.tsx`, `src/components/motion/StackingCards.tsx`, `src/components/motion/HorizontalPin.tsx`, `src/components/motion/WordReveal.tsx`, `src/components/motion/ParallaxSplit.tsx`.
- Refactor `about.tsx` to import `StackingCards` and `WordReveal` from the new shared modules (no visual change).
- Update all subpage route files to import `StoryHero` + shared motion sections and drop bespoke hero markup.
- Reuse existing hero images in `src/assets/about/`; generate 4 new hero images (1 each for Products, Projects, Resources, Samples/Visualizer shared, Design Services, Contact) via imagegen at 1920×1200.
- Tailwind classes only; no new deps.
- Every page: `min-h-[88vh]` hero, `py-20 md:py-28` section rhythm — no `py-40+` gaps.
- `TopBar` NAV array expanded to include Samples + Contact.

## Out of scope
- Backend wiring for forms (still TODO).
- Interactive visualizer canvas (deferred — page becomes info + waitlist).
- Product/project detail routes.

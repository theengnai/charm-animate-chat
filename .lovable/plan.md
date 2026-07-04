## Fixes across five pages

### 1. `/products` — pin the "Families" nav
`StickyTOC.tsx` already uses `lg:sticky lg:top-28`, but the parent `<section>` has `py-24 md:py-32` which caps the sticky column height and lets it scroll off. Fix by:
- Removing `lg:h-fit` from the aside (was collapsing sticky bounds) and giving it an explicit `lg:max-h-[calc(100vh-8rem)] lg:overflow-auto`.
- Ensuring the outer `<section>` isn't creating a new `overflow` context (leave `relative` only).
- Result: on `/products` and `/resources` the left column (Families / Library) stays pinned the whole time you scroll through the family/category stack.

### 2. `/projects` — fix the "Featured" section + hard edges + new fixed-bg strip

- **Replace the featured image** (`p1 = sol-facade.jpg`) with a newly generated cinematic hero for the Sunbeam Boutique Hotel featured card (`src/assets/pages/projects-featured.jpg`).
- **Fix background on scroll**: convert the featured section from `SplitPanels` (which is doing a weird pinned scrub the user dislikes) to a full-width **parallax-fixed hero band** — image uses `bg-fixed bg-cover bg-center`, dark gradient, centered copy. Same visual language as the About page.
- **Add a new "Signature series" section** below featured: **three stacked full-width bands**, each 90vh, same style, each with its own `bg-fixed` image and a short caption (hospitality lobby / villa deck / cultural pavilion). Generates 3 new images: `projects-band-1/2/3.jpg`.
- **Hard corners in "A slower browse"**: remove `rounded-2xl` from the `ClipReveal` card wrappers (and any inner image rounding) so the project index cards have sharp edges. Keep hover scale.

Net: `/projects` becomes hero → fixed-bg featured → parallax sectors → **3 new fixed-bg bands** → hard-edged project index → numbers → logos → CTA.

### 3. `/design-services` — 4th team member

`src/data/team.ts` currently exports 3 people; the page already slices to 4 but only 3 render. Add a 4th entry (e.g. "Yara Suleiman — Project Manager") reusing an existing about-image asset so the grid fills to four across on desktop.

### 4. `/visualizer` — actually animate the capability blocks

`ParallaxSplit` currently isn't producing visible motion for the user. Replace the four capability calls with a new lightweight component `SlideFromSide.tsx` that:
- On enter, image slides in from left (or right, alternating) with `x: -120 → 0`, opacity `0 → 1`.
- Text column slides in from the opposite side with a slight delay.
- Framer Motion `whileInView`, `viewport={{ once: true, margin: "-15%" }}`, easing `[0.16,1,0.3,1]`, 0.9s.

Applied to all 4 capability sections so each one has clear directional entry motion as you scroll.

### 5. `/resources` — pin the "Library" nav + design the category cards

- **Pin Library**: same `StickyTOC` fix as products (shared component, one change fixes both).
- **Design the category items**: currently the file rows under each category (Datasheets / Installation / CAD & BIM / Compliance) are plain underlined text links. Redesign each row as a **card tile**:
  - Small file-type badge (PDF / ZIP / DWG) in a copper pill on the left
  - Title in medium weight
  - Size + download arrow on the right
  - Bordered rounded-lg card, hover lifts and border turns copper
  - Grid of 2 columns on desktop instead of a divided list
- Keep the `AlternatingSlide` reveal.

## Files touched
- `src/components/motion/StickyTOC.tsx` — sticky fix
- `src/components/motion/SlideFromSide.tsx` — new
- `src/data/team.ts` — 4th teammate
- `src/routes/projects.tsx` — featured redo, 3 fixed-bg bands, hard corners
- `src/routes/visualizer.tsx` — swap ParallaxSplit → SlideFromSide
- `src/routes/resources.tsx` — redesigned file cards
- 4 new images: `projects-featured.jpg`, `projects-band-1.jpg`, `projects-band-2.jpg`, `projects-band-3.jpg`

## Out of scope
- Home / About / Products library items / Samples / Contact — untouched.
- No backend, no new routes.

# Focus product line-up: 6 core, rest "Coming Soon"

## Core products (full detail retained)

1. **MCM Flexible Stone** (Flexible Clay-Stone Tiles) — MCM family
2. **EPS Decorative Façades** — Construction Systems
3. **SPC Flooring** — Finishing (new family/detail card)
4. **PU Stone** — Finishing
5. **WPC Decking** — WPC family
6. **Smart Wall Panels** (Lightweight Concrete Wall Panels) — Construction Systems

Everything else moves to a single "Future Solutions — Coming Soon" strip: T-Floor Hourdi, Hybrid Precast, 3D Curved Modular, Portable Cabins, WPC Door Panels, PVC Wood Panels, WPC Windows, SPC Interior wall, PVC Marble Sheets, Aluminium Louvers, generic Wall Panels.

## Changes

### `src/routes/products.index.tsx`
- Rewrite `SECTIONS` into three groups:
  - **Construction Systems** — Smart Wall Panels, EPS Decorative Façades (full cards with specs, images, tags).
  - **Decoration & Finishing** — MCM Flexible Stone (with `viewAllLink: "mcm"`), PU Stone, WPC Decking (with `viewAllLink: "wpc"`), SPC Flooring (with `viewAllLink: "spc"`).
  - **Future Solutions — Coming Soon** — a compact grid (name + one-line tag only, no specs, no CTA, muted styling and "In development" chip). Items: T-Floor Hourdi, Hybrid Precast Building System, 3D Curved Modular, Portable Cabins, WPC Door Panels, WPC Windows, SPC Interior Wall, PVC Wood Panels, PVC Marble Sheets, Aluminium Louvers.
- Update `StickyTOC` items so Future Solutions appears as a section but sub-items are lightweight (no `scroll-mt` anchors on each coming-soon item since they have no detail block).
- Update `KPIS` to reflect the new focus (e.g. "6 flagship products", "10+ in development", "100% Saudi-made", "1 KSA maker of flexible clay-stone").
- Keep hero, swatch wall, CTA band unchanged.

### `src/routes/products.$family.index.tsx` + `src/routes/products.$family.$slug.tsx`
- Keep MCM, WPC, SPC family pages working. Aluminium and Panels family routes: render a "Coming soon — request info" state instead of the current catalog view (data itself in `products.ts` stays so the route remains type-safe; component just checks family and swaps to the coming-soon message).

### `src/data/products.ts`
- No structural changes to the product catalog (avoid breaking family pages/type). No deletions.
- Only tweak `FAMILIES` copy if needed to add SPC as a first-class family in the products library (already present).

### `src/components/hero/ChatCard.tsx`
- Per prior instruction, chat widget is not touched.

### Nav / other pages
- `TopBar` product links: unchanged (already point at family pages).
- No copy changes elsewhere.

## Out of scope
- No changes to About, Contact, Resources, Samples, Projects, Design Services, Visualizer copy.
- No changes to product images, MCM library, or swatch data.
- No content added that isn't in the TDS.

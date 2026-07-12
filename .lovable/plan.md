# Add MCM Category (44 products) to Products Page

## Overview

Add **MCM** (Modified Clay Material — flexible, thin architectural cladding) as a new product family, placed **first** in the Products page. Upload all 44 images from the uploaded folder as CDN assets and create a Product entry for each, with the trailing number in the filename stored as the **price in SAR**.

## Scope

### 1. Extend the product data model
File: `src/data/products.ts`

- Add `"MCM"` to the `Product["family"]` union.
- Add an optional `price?: number` and `currency?: "SAR"` field to `Product`.
- Add MCM as the **first** entry in `FAMILIES`:
  ```
  { key: "MCM", name: "MCM Flexible Cladding", poem: "Stone and clay, thin as fabric.", cover: <first MCM image> }
  ```

### 2. Upload the 44 images as CDN assets
Extract the ZIP to `/tmp/mcm/`, then for each `.webp` run:
```
lovable-assets create --file "/tmp/mcm/<name>.webp" --filename <slug>.webp > src/assets/mcm/<slug>.webp.asset.json
```
Import each pointer JSON in `products.ts` for its product `cover`.

### 3. Create 44 MCM products
Parsing rule: the trailing integer in each filename = price in SAR. Two files have no number (`Travertine Open Book (300x120cm)(New)`, `Najdi Stone (120x60cm)(New)`) — price will be omitted (renders as "Price on request").

Product template (per item):
- `slug`: kebab-case of the name (e.g. `mcm-ivory-travertine`)
- `name`: cleaned name (e.g. "Ivory Travertine")
- `code`: `MCM-<initials>` (e.g. `MCM-IT`)
- `family`: `"MCM"`
- `application`: `"Both"` (MCM is used for interior + exterior facades)
- `finish`: derived from the name theme — Travertine → "Travertine", Rock/Stone → "Stone", Wood → "Wood grain", Sand/Wave/Ripple → "Textured", else "Natural"
- `fireRating`: `"A2-s1,d0"` (standard MCM class)
- `colors`: 3-swatch palette inferred from the name (e.g. Ivory → creams; Charcoal/Ash → greys)
- `price`: the SAR number from the filename
- `cover`: imported asset URL
- `poem`: short one-liner per product

Full 44-item list (name → price SAR):

Ivory Travertine 32, Mounting Rock 26, Drops Travertine 26, Brown Travertine 32, Pearl Travertine 32, Sand Ripple 208, Turkish Travertine 32, Ancient Wood 32, Earthy Travertine 32, Sky Rock 290, Wood Tile 26, Desert Brick 290, Age Marks 28, Canyon Stone 290, Silver Mist 290, Cream Travertine 32, Slate Stone 26, Desert Trace 28, Silver Travertine 32, Wave Tile 290, Star Diamond 26, Roman Stone 290, Travertine Open Book (—), Zig Skyline 28, Grey Travertine 26, Desert Storm 290, Snow Rock 28, Najdi Stone (—), Wood Spot 290, Sand Wave 290, Neutral Travertine 290, Rammed Earth 129, Woven 28, Rough Surface 28, Flowing Cloud 26, Rough Surface Beige 39, Flowing Water 39, Ruff Rock 28, Ash Stone 28, Rustic Travertine 32, Rough Surface Brown 39, Beige Travertine 32, Volcanic Travertine 26, Oasis Stone 290.

### 4. Wire MCM into the routes
- `src/routes/products.$family.index.tsx` → add `mcm: "MCM"` to `FAMILY_SLUGS`.
- `src/routes/products.$family.$slug.tsx` → add `mcm: "MCM"` to `FAMILY_SLUGS`.
- `src/routes/products.index.tsx` → add MCM as the **first** entry in the local `FAMILIES` array used by the Sticky TOC section, with a short body + 4 spec rows (Fire class A2-s1,d0, Panel size 600×300 mm, Thickness 3 mm, Weight ~4 kg/m²).

### 5. Show the price on the UI
- **Family listing** (`products.$family.index.tsx` card): under the color swatches row, show `SAR <price>` in mono; hide if no price.
- **Single product page** (`products.$family.$slug.tsx`): under the poem, show `SAR <price>` at 2xl weight; hide if no price.

## Out of scope
- No changes to the visualizer, contact, or samples pages.
- No new authored `details` blocks for MCM products (they render the compact template like the other non-featured items).
- No re-ordering or content change to WPC/SPC/Aluminium/Panels.

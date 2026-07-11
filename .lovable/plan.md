## What's wrong today

The `/products/wpc` and `/products/spc` pages already exist, but they feel like a repeat of `/products` because each family only holds **3 sample products** and the detail pages are thin. You want a real category page with a proper product grid (~12 tiles) and at least the first two products opening a richer, dedicated detail page.

## Plan

### 1. Expand the product catalog (`src/data/products.ts`)
- Grow `PRODUCTS` to **12 samples per family** (48 total): WPC, SPC, Aluminium, Panels.
- Each item keeps `slug / name / code / family / application / finish / colors / fireRating / cover / poem`.
- Reuse existing `@/assets/section-*.jpg` covers cycled across items so we don't need new images.
- Add an optional `details?` field (long description, spec bullets, use-cases, gallery images) — populated ONLY for the first two products of each family so their detail pages feel fully authored. Others fall back to the current lightweight layout.

### 2. Category page — proper product grid (`src/routes/products.$family.tsx`)
- Shorten hero to ~45vh so the grid is the main event.
- Replace the current 3-col cards with a denser **grid: 2 cols mobile / 3 tablet / 4 desktop**, tighter cards (`aspect-[4/5]`, code + name + tiny finish/application tags, colour dots, arrow).
- Add a lightweight filter row (Application: All / Interior / Exterior / Both) — client-side filter over the loaded items.
- Keep breadcrumb, CTABand, footer.

### 3. Detail page — richer for authored items (`src/routes/products.$family.$slug.tsx`)
When `product.details` exists, render an enhanced layout:
- Two-column hero: large cover on left, product meta (code, family, application, finish, fire rating) + long description + primary CTAs on right.
- Spec table (all key/value pairs).
- Small gallery strip (3 thumbnails from `details.gallery`).
- "Use cases" bullet list.
- Related products (same family, exclude self, up to 4).

When `details` is absent, keep the current concise detail layout so all 48 products still open a valid page — just the first two per family are the "fully authored" ones the user asked for.

### 4. Verification
- Typecheck.
- Manually click `/products` → WPC card → grid → first product → detail page, confirm content differs from the category page.

## Files touched
- `src/data/products.ts` — expand catalog, add optional `details`.
- `src/routes/products.$family.tsx` — grid layout + filter.
- `src/routes/products.$family.$slug.tsx` — conditional rich detail layout.

No new routes, no new assets, no backend changes.

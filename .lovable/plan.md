## Goal

Turn the five family blocks on `/products` into clickable category pages, and give every individual product its own detail page.

## New routes

Use TanStack file-based routing with dynamic params. The existing `Products` type + `PRODUCTS`/`FAMILIES` arrays in `src/data/products.ts` already have everything we need (slug, family, code, colors, cover, poem, finish, application, fireRating).

1. `src/routes/products.$family.tsx` → `/products/wpc`, `/products/spc`, `/products/aluminium`, `/products/panels`
   - Category listing page.
   - Hero with family name + poem + cover image (from `FAMILIES`).
   - Grid of all products in that family (from `productsByFamily`), each card showing cover, name, code, colour chips, and a link to the product detail page.
   - Uses the same `TopBar`, `SiteFooter`, `CTABand`, `WhatsAppButton` shell as `/products`.
   - `head()` sets category-specific title / description / og:image (the family cover).
   - Throws `notFound()` if the `$family` param doesn't match a known family key (case-insensitive).

2. `src/routes/products.$family.$slug.tsx` → `/products/wpc/wpc-oak-deep`, etc.
   - Product detail page.
   - Hero: large cover, name, code, family, poem.
   - Spec block: finish, application, fire rating, colour swatches (rendered from `product.colors`).
   - "Request a sample" CTA → `/samples`, "Talk to a specialist" CTA → `/contact`, plus a "Back to {family}" link.
   - Related products row: other products in the same family (excluding the current one).
   - `head()` sets product-specific title / description / og:image (product cover).
   - Throws `notFound()` if slug isn't found, or if the slug's family doesn't match the URL family (prevents `/products/spc/wpc-oak-deep`).

## Changes to existing `/products` page

In `src/routes/products.tsx`, inside the `StickyTOC` family loop:

- Add a primary CTA button under each family's description: **"View all {family}"** linking to `/products/{familyKey.toLowerCase()}` via `<Link to="/products/$family" params={{ family: familyKey.toLowerCase() }}>`.
- Keep the existing layout, imagery, and spec rows untouched.
- The "Custom / Bespoke" family stays link-less (no product list for it) and keeps its current look.

No changes to `products.ts`, no new dependencies, no schema/backend changes.

## Styling

Reuse existing tokens and components:
- Copper accents, `display-serifish`, `font-mono` eyebrows — matches the rest of the site.
- Product cards use the same rounded-2xl / border-line / hover-lift pattern already used in `StoryHero` and the swatch wall.
- Motion: `BlurFocus` for hero image, `ScaleIn` staggered for the product grid, `AlternatingSlide` for spec rows on detail page.

## Out of scope

- No filtering/search on the category page (all family products fit in one grid).
- No shopping cart or quantity — CTAs point at existing `/samples` and `/contact`.
- No CMS/database — content stays in `src/data/products.ts`.

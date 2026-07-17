
## Goal

Align every page and section of the website with the EcoSmart Technical Data Sheets & Installation Manuals (Rev. 00, 30 June 2026). No claim, service, certification, statistic, or capability that the document does not support. Products page structure, product-category naming, and the chat widget stay as-is per your instruction.

## Ground truth from the TDS

- **Company**: EcoSmart / مصنع إنتيجرا بيلد للتصنيع — a manufacturer in Sudair Industrial City, Riyadh, KSA. CR No. 1009200656. ecosmart.sa.
- **Tagline**: "Build Better. Build Saudi."
- **What EcoSmart actually is**: a Saudi manufacturer of two product families — **Construction Systems** and **Decoration & Finishing** products. Not a materials-specifier marketplace, not a façade contractor.
- **Construction Systems**: Lightweight Concrete Wall Panels · Enhanced T-Floor Hourdi · Hybrid Precast Building System · Enhanced 3D Curved Modular · Portable Cabins (insulated) · EPS Insulated Decorative Façades.
- **Decoration & Finishing**: PU Stone Tiles · Flexible Clay-Stone Tiles (100% Saudi-made, only KSA manufacturer) · WPC Door Panels · PVC Marble Sheets · PVC Laminated Foam Board · WPC External Decking · SPC Flooring · PVC Wood Panels · WPC Windows & Door Frames · PVC Laminated Foam Interior Line.
- **Standards referenced**: Saudi Building Code (SBC), EN 14992, EN 15037, EN 13369, EN 13501-1, EN 15534, ASTM E84, ASTM C518, ISO 10140, etc. — as reference/test methods, values "To be confirmed against certificate."
- **Positioning cues**: Vision 2030 / IKTVA alignment; KSA climate & humidity; SEC electrical requirements; Sudair manufacturing base.
- **What the document does NOT contain** (and therefore we must remove from the site): CAD/BIM/Revit libraries · EPDs, ISO 9001/14001, FSC, LEED, BREEAM, TÜV, SASO, CE, ASTM certificates as owned certifications · a live Visualizer product with roadmap dates (Q3/Q4 2026 alpha, Q1 2027 release) · "50 studios beta" · Lunch & learn / CPD / RIBA sessions · "GCC-wide sample dispatch, free for trade" · GCC-tested supplier network · Curated global partner sourcing · Master warranty template · Test reports as downloadable assets · The specific SKUs currently on the resources page (WPC-OD-140, SPC-NA-052, ALU-BL-070, PNL-LA-30).

## Page-by-page changes

### 1. Home (`src/routes/index.tsx`, `HeroSection`, `SectionShell` copy)
- Rewrite section eyebrows, titles, bodies and bullets for sections **Visualizer, Products, Projects, Samples, Design Support, Technical**:
  - **Visualizer** → **Ecosmart AI** stays as the chat/AI product. Recast the "Visualizer" rail item as a genuine product feature or fold it into Ecosmart AI. Remove "drag & apply / true-scale joints / light-aware preview" claims.
  - **Products** → position as EcoSmart's own manufactured Construction Systems + Decoration & Finishing lines, not a "living library of GCC-tested suppliers." Bullets rewritten to real capabilities: "Manufactured in Sudair", "SBC-aligned", "Test certificates on request."
  - **Projects** → keep as inspiration/applications, but drop "built case studies photographed in situ" if we don't have them. Recast as "Where our systems are used" and note that project references are shared on request.
  - **Samples** → change from "sample kits shipped across GCC, free for trade, same-week dispatch" to a truthful "Request a sample" flow with realistic language (no promised SLAs, no free-for-trade).
  - **Design Support (SRMD)** → rename/reposition around the actual technical support the document implies: help selecting the right system for the project, confirming values against certificates, method statements.
  - **Technical Resources** → position around **Technical Data Sheets & Installation Manuals** (which is exactly what the document is) plus test certificates issued on request. Remove BIM/CAD/IFC/EPD claims.
- Keep chat widget (`ChatCard.tsx`) copy as-is per instruction.

### 2. Products (`src/routes/products.*`, `src/data/products.ts`)
- Keep category names and sub-item names as-is per instruction.
- Rewrite descriptions, key features, and any hard specs to match the TDS: composition, applications, key features, and "Technical values confirmed against certificate on request." Remove any invented numbers.
- Add MCM/Flexible Clay-Stone Tile a "100% Saudi-made · Only manufacturer in KSA" badge.
- Add product-family taglines derived from the TDS (e.g., "In place of blockwork" for wall panels; "Rib-and-infill deck" for T-Floor; "Curved modular geometries" for 3D modular).

### 3. About (`src/routes/about.tsx`)
- Rewrite hero + intro to describe EcoSmart as a **Saudi manufacturer** headquartered/operating from **Sudair Industrial City, Riyadh**, aligned to **Vision 2030 / IKTVA**.
- Replace "façade systems provider across Saudi Arabia and the GCC" with truthful "manufacturer of Construction Systems and Decoration & Finishing products in Saudi Arabia."
- Rewrite **Expertise** cards to the two real families (Construction Systems / Finishing) plus real support areas (technical guidance, method statements, factory-fitted portable cabins, curved modular capability, flexible clay-stone exclusive to KSA).
- Rewrite **Approach** cards around: manufacturing in Sudair, SBC-aligned design, test-certified specs on request, insulated-comfort for KSA climate.
- Vision sentence rewritten toward Saudi manufacturing leadership under Vision 2030, not "leading platform for architectural surfaces in GCC."
- Footer columns rewritten to real deliverables (no "Careers, Journal, Certifications" if we can't back them).

### 4. Design Services (`src/routes/design-services.tsx`)
- Recast from "SRMD — Specification, Research & Material Design / concept matching / climate palettes / detail libraries" into **Technical & Project Support**: system selection, method-statement issuance, on-site erection guidance, certificate confirmation, engineering coordination for the Hybrid Precast + T-Floor systems.

### 5. Visualizer (`src/routes/visualizer.tsx`)
- The document does NOT describe a room visualizer product. Two options — I'll take **Option A** unless you say otherwise:
  - **A. Reframe as "coming soon / concept preview"** with all invented specifics removed: no Q3/Q4 2026 alpha, no 50-studio beta, no shareable-URL guarantee, no A/B split-screen feature list. Replace with a short "We're building a way to preview our systems in-place. Join the interest list."
  - B. Remove the route entirely and drop it from navigation.

### 6. Samples (`src/routes/samples.tsx`)
- Remove: "same-week dispatch," "free for trade," "shipped across the GCC," "spec card included," "sample kits."
- Rewrite as a simple **Request a sample** page: which product, project details, contact info. Samples issued on request from Sudair.

### 7. Resources (`src/routes/resources.tsx`)
- Fundamental rewrite. Delete the placeholder SKUs (WPC-OD-140, SPC-NA-052, ALU-BL-070, PNL-LA-30) and the invented file sizes.
- Replace with the real library: one TDS + Installation Manual per product from the document. Group by Construction Systems / Decoration & Finishing.
- Remove **CAD & BIM** section (Revit families, DWG detail pack, IFC exports) — not offered per document.
- **Compliance** section: replace "Master warranty template, EN 13501-1 fire report, EPD, ISO 9001/14001 certificates" with the actual position from the document — "Test certificates issued against each product on request; system design to SBC; reference standards listed per product." Remove the certifications wall (FSC, ISO 9001, ISO 14001, CE, TÜV, BREEAM, LEED, EPD, SASO, ASTM) or reduce it to the reference standards the document actually cites (SBC, EN 14992, EN 15037, EN 13369, EN 13501-1, EN 15534, ASTM E84, ASTM C518, ISO 10140).
- Remove "Book a lunch & learn" / "CPD-accredited, RIBA-friendly" — not offered per document.

### 8. Projects (`src/routes/projects.tsx`), `src/data/projects.ts`
- Keep the page structure; recast the intro to "Where our systems are used." If existing project entries are invented, either remove them or mark them as illustrative applications. I'll audit `projects.ts` and either (a) recast entries to generic applications of the real systems (e.g., "Portable cabin deployment," "Hybrid precast residential frame") or (b) leave a short "Project references shared on request" placeholder if the data is fabricated. You can tell me if you have real project data to plug in.

### 9. Contact (`src/routes/contact.tsx`)
- Update address block: **Sudair Industrial City, Riyadh, KSA**. Add **CR No. 1009200656** and **ecosmart.sa** as per the document footer. Remove any invented phone/email/regions if present that aren't in the document (I'll flag and ask for confirmed contact details rather than invent them).

### 10. Global copy
- Tagline **"Build Better. Build Saudi."** applied to footer/root metadata.
- Root metadata (`__root.tsx` / route heads): descriptions rewritten around "Saudi manufacturer of construction systems and finishing products."
- Remove "GCC" wording where it implies operations we don't have; keep "Saudi Arabia" as primary market.
- Footer (`SiteFooter.tsx`) rebuilt around real link groups: Systems / Finishing / Technical Data / Contact.

## Two open items I need your call on before I ship

1. **Visualizer page** — reframe as "coming soon" (Option A) or remove entirely and drop it from the section rail (Option B)?
2. **Projects data** — do you have real project references I should feature? If not, I'll replace with a short "References on request" section rather than keep invented case studies.

## Files touched (expected)

- `src/routes/__root.tsx`, `src/routes/index.tsx`, `src/routes/about.tsx`, `src/routes/products.index.tsx`, `src/routes/products.$family.index.tsx`, `src/routes/products.$family.$slug.tsx`, `src/routes/projects.tsx`, `src/routes/samples.tsx`, `src/routes/design-services.tsx`, `src/routes/resources.tsx`, `src/routes/visualizer.tsx`, `src/routes/contact.tsx`
- `src/components/sections/HeroSection.tsx`, `src/components/sections/PartnerSection.tsx`, `src/components/sections/FooterSection.tsx`, `src/components/sections/SectionShell.tsx` (SECTIONS map lives in `index.tsx`)
- `src/components/common/SiteFooter.tsx`, `src/components/common/CTABand.tsx` (copy only)
- `src/data/products.ts`, `src/data/projects.ts`, `src/data/resources.ts`
- Not touched: `src/components/hero/ChatCard.tsx` and its data (per your instruction).

## Verification

- After edits, run Playwright at 1280×1800 to screenshot Home, About, Products (index + one family + one product), Projects, Samples, Design Services, Resources, Visualizer, Contact — and read the screenshots to confirm no lingering invented claims (BIM, EPD, LEED, "50 studios beta," "free for trade," etc.).
- Grep the repo for banned terms (BIM, Revit, IFC, EPD, LEED, BREEAM, FSC, "lunch & learn", "GCC-tested", "same-week dispatch") and fix any survivors.

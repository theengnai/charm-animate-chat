import imgA from "@/assets/section-materials.jpg";
import imgB from "@/assets/section-design.jpg";
import imgC from "@/assets/section-samples.jpg";
import imgD from "@/assets/section-gallery.jpg";
import imgE from "@/assets/section-technical.jpg";
import imgF from "@/assets/section-visualizer.jpg";
import mcm0 from "@/assets/mcm/mcm-age-marks.webp.asset.json";
import mcm1 from "@/assets/mcm/mcm-ancient-wood.webp.asset.json";
import mcm2 from "@/assets/mcm/mcm-ash-stone.webp.asset.json";
import mcm3 from "@/assets/mcm/mcm-beige-travertine.webp.asset.json";
import mcm4 from "@/assets/mcm/mcm-brown-travertine.webp.asset.json";
import mcm5 from "@/assets/mcm/mcm-canyon-stone.webp.asset.json";
import mcm6 from "@/assets/mcm/mcm-cream-travertine.webp.asset.json";
import mcm7 from "@/assets/mcm/mcm-desert-brick.webp.asset.json";
import mcm8 from "@/assets/mcm/mcm-desert-storm.webp.asset.json";
import mcm9 from "@/assets/mcm/mcm-desert-trace.webp.asset.json";
import mcm10 from "@/assets/mcm/mcm-drops-travertine.webp.asset.json";
import mcm11 from "@/assets/mcm/mcm-earthy-travertine.webp.asset.json";
import mcm12 from "@/assets/mcm/mcm-flowing-cloud.webp.asset.json";
import mcm13 from "@/assets/mcm/mcm-flowing-water.webp.asset.json";
import mcm14 from "@/assets/mcm/mcm-grey-travertine.webp.asset.json";
import mcm15 from "@/assets/mcm/mcm-ivory-travertine.webp.asset.json";
import mcm16 from "@/assets/mcm/mcm-mounting-rock.webp.asset.json";
import mcm17 from "@/assets/mcm/mcm-najdi-stone.webp.asset.json";
import mcm18 from "@/assets/mcm/mcm-neutral-travertine.webp.asset.json";
import mcm19 from "@/assets/mcm/mcm-oasis-stone.webp.asset.json";
import mcm20 from "@/assets/mcm/mcm-pearl-travertine.webp.asset.json";
import mcm21 from "@/assets/mcm/mcm-rammed-earth.webp.asset.json";
import mcm22 from "@/assets/mcm/mcm-roman-stone.webp.asset.json";
import mcm23 from "@/assets/mcm/mcm-rough-surface.webp.asset.json";
import mcm24 from "@/assets/mcm/mcm-rough-surface-beige.webp.asset.json";
import mcm25 from "@/assets/mcm/mcm-rough-surface-brown.webp.asset.json";
import mcm26 from "@/assets/mcm/mcm-ruff-rock.webp.asset.json";
import mcm27 from "@/assets/mcm/mcm-rustic-travertine.webp.asset.json";
import mcm28 from "@/assets/mcm/mcm-sand-ripple.webp.asset.json";
import mcm29 from "@/assets/mcm/mcm-sand-wave.webp.asset.json";
import mcm30 from "@/assets/mcm/mcm-silver-mist.webp.asset.json";
import mcm31 from "@/assets/mcm/mcm-silver-travertine.webp.asset.json";
import mcm32 from "@/assets/mcm/mcm-sky-rock.webp.asset.json";
import mcm33 from "@/assets/mcm/mcm-slate-stone.webp.asset.json";
import mcm34 from "@/assets/mcm/mcm-snow-rock.webp.asset.json";
import mcm35 from "@/assets/mcm/mcm-star-diamond.webp.asset.json";
import mcm36 from "@/assets/mcm/mcm-travertine-open-book.webp.asset.json";
import mcm37 from "@/assets/mcm/mcm-turkish-travertine.webp.asset.json";
import mcm38 from "@/assets/mcm/mcm-volcanic-travertine.webp.asset.json";
import mcm39 from "@/assets/mcm/mcm-wave-tile.webp.asset.json";
import mcm40 from "@/assets/mcm/mcm-wood-spot.webp.asset.json";
import mcm41 from "@/assets/mcm/mcm-wood-tile.webp.asset.json";
import mcm42 from "@/assets/mcm/mcm-woven.webp.asset.json";
import mcm43 from "@/assets/mcm/mcm-zig-skyline.webp.asset.json";

export type ProductDetails = {
  description: string;
  useCases: string[];
  specs: [string, string][];
  gallery: string[];
};

export type Product = {
  slug: string;
  name: string;
  code: string;
  family: "MCM" | "PU" | "WPC" | "SPC" | "Aluminium" | "Panels";
  application: "Interior" | "Exterior" | "Both";
  finish: string;
  colors: string[];
  fireRating: string;
  cover: string;
  poem: string;
  price?: number;
  currency?: "SAR";
  details?: ProductDetails;
};

export const FAMILIES = [
  {
    key: "MCM",
    name: "MCM Flexible Cladding",
    poem: "Stone and clay, thin as fabric.",
    cover: mcm15.url,
  },
  {
    key: "PU",
    name: "PU Stone Cladding",
    poem: "Stone-quiet weight, without the mass.",
    cover: imgC,
  },
  {
    key: "WPC",
    name: "WPC Decking & Cladding",
    poem: "Warm underfoot. Weathered by design.",
    cover: imgA,
  },
  {
    key: "SPC",
    name: "SPC Flooring",
    poem: "Stone-firm, silent, waterproof.",
    cover: imgB,
  },
  {
    key: "Aluminium",
    name: "Aluminium Louvers",
    poem: "Light, filtered. Heat, refused.",
    cover: imgE,
  },
  {
    key: "Panels",
    name: "Wall Panels",
    poem: "Rooms that hush and hold.",
    cover: imgD,
  },
] as const;

const COVERS = [imgA, imgB, imgC, imgD, imgE, imgF];

// -------- Authored (rich) details for the first two products in each family --------
// Technical values are issued against the relevant test certificate and are shown as
// "To be confirmed" rather than estimated — per the EcoSmart TDS methodology.

const wpcOakDetails: ProductDetails = {
  description:
    "A wood-plastic composite (WPC) decking board — moisture-resistant, dimensionally stable and suited to KSA humidity. Joist spacing, expansion gaps and end gaps are product-specific — follow the factory installation values.",
  useCases: [
    "Rooftop terraces and pool surrounds",
    "Villa gardens and shaded balconies",
    "Deck areas requiring dry, drainable installation",
  ],
  specs: [
    ["Reference standard family", "EN 15534"],
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Board dimensions", "Manufacturer spec · TBC"],
    ["Installation", "Concealed clip on joist substructure"],
    ["Maintenance", "Sweep / rinse periodically"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgA, imgD, imgC],
};

const wpcLinenDetails: ProductDetails = {
  description:
    "A WPC cladding profile for ventilated rainscreen use — moisture-resistant, dimensionally stable, low-maintenance. Suits façades where humidity and thermal movement would degrade timber.",
  useCases: [
    "Villa and townhouse façades",
    "Boundary walls and garden screens",
    "Soffits under pergolas",
  ],
  specs: [
    ["Reference standard family", "EN 15534"],
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substructure", "Aluminium sub-frame, project-specific"],
    ["Fixing", "Concealed clip"],
    ["Maintenance", "Wipe / rinse; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgC, imgA, imgE],
};

const spcNordicDetails: ProductDetails = {
  description:
    "SPC (stone-plastic composite) rigid-core click flooring for interior use. Dimensionally stable, waterproof, and installed as a floating floor with no wet trades.",
  useCases: [
    "Apartments and residential fit-out",
    "Boutique retail and showrooms",
    "Offices and light commercial interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Locking system", "Click / floating floor"],
    ["Substrate", "Level, dry, sound"],
    ["Underlay", "IXPE · integrated or separate per SKU"],
    ["Maintenance", "Damp mop; avoid steam / abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgB, imgA, imgD],
};

const spcTerraDetails: ProductDetails = {
  description:
    "A warm, terra-toned SPC plank for interior surfaces. Installs as a floating floor over a prepared substrate — no adhesive, no wet trades, no downtime.",
  useCases: [
    "Family rooms and majlises",
    "Wellness spaces and studios",
    "Cafés and slow-hospitality interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Locking system", "Click / floating floor"],
    ["Expansion gap", "Per factory installation guidance"],
    ["Maintenance", "Damp mop; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgA, imgC, imgE],
};

const aluBladeDetails: ProductDetails = {
  description:
    "Aluminium blade for sun-shading and screening — cut and finished to project length, installed on a project-designed substructure.",
  useCases: [
    "Façade sun-shading",
    "Rooftop plant screens",
    "Podium enclosures and privacy screens",
  ],
  specs: [
    ["Substructure", "Project-designed"],
    ["Fixing", "Concealed sub-frame, stainless"],
    ["Finish", "Anodised / powder — project spec"],
    ["Wind design", "Saudi Building Code (SBC)"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgE, imgF, imgD],
};

const aluFinDetails: ProductDetails = {
  description:
    "A slim aluminium fin for tighter rhythms and lighter façades — closer spacing, sharper shadow lines, softer visual weight. Used where the louver is meant to be felt rather than seen.",
  useCases: [
    "Boutique retail façades",
    "Balcony privacy screens",
    "Interior room dividers",
  ],
  specs: [
    ["Fixing", "Top and bottom rail"],
    ["Finish", "Polyester powder — project spec"],
    ["Wind design", "Saudi Building Code (SBC)"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgF, imgE, imgA],
};

const pnlLinenDetails: ProductDetails = {
  description:
    "An interior wall panel line — cut and finished for interior surfaces and joinery, aligned to the EcoSmart PVC Laminated Foam Interior Line and PVC Laminated Foam Board Sheets.",
  useCases: [
    "Meeting rooms and reception areas",
    "Residential feature walls",
    "Hospitality interiors",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substrate", "Sound, clean, dry"],
    ["Fixing", "Adhesive and/or concealed fixing"],
    ["Maintenance", "Wipe clean; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgC, imgD, imgB],
};

const pnlSlatDetails: ProductDetails = {
  description:
    "A slatted wall panel for interior feature surfaces — cut to length, installed on prepared substrate with adhesive and/or concealed fixings.",
  useCases: [
    "Feature walls in living areas",
    "Reception backdrops",
    "TV walls and headboards",
  ],
  specs: [
    ["Reaction to fire", "EN 13501-1 · certificate on request"],
    ["Substrate", "Sound, clean, dry"],
    ["Fixing", "Adhesive + concealed screw"],
    ["Maintenance", "Dust / wipe clean; avoid abrasives"],
    ["Certified values", "Issued against test certificate on request"],
  ],
  gallery: [imgB, imgA, imgD],
};

// -------- Full catalog (12 per family) --------

export const PRODUCTS: Product[] = [
  // ============ MCM (44) ============
  { slug: "mcm-age-marks", name: "Age Marks", code: "MCM-AM", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm0.url, poem: "Thin cladding, deep effect.", price: 28 },
  { slug: "mcm-ancient-wood", name: "Ancient Wood", code: "MCM-AW", family: "MCM", application: "Both", finish: "Wood grain", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm1.url, poem: "Grain without weight.", price: 32 },
  { slug: "mcm-ash-stone", name: "Ash Stone", code: "MCM-AS", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm2.url, poem: "Weight, only in the eye.", price: 28 },
  { slug: "mcm-beige-travertine", name: "Beige Travertine", code: "MCM-BT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm3.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-brown-travertine", name: "Brown Travertine", code: "MCM-BT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm4.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-canyon-stone", name: "Canyon Stone", code: "MCM-CS", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm5.url, poem: "Weight, only in the eye.", price: 290 },
  { slug: "mcm-cream-travertine", name: "Cream Travertine", code: "MCM-CT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm6.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-desert-brick", name: "Desert Brick", code: "MCM-DB", family: "MCM", application: "Both", finish: "Rough", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm7.url, poem: "Warm as the wall behind it.", price: 290 },
  { slug: "mcm-desert-storm", name: "Desert Storm", code: "MCM-DS", family: "MCM", application: "Both", finish: "Natural", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm8.url, poem: "Warm as the wall behind it.", price: 290 },
  { slug: "mcm-desert-trace", name: "Desert Trace", code: "MCM-DT", family: "MCM", application: "Both", finish: "Natural", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm9.url, poem: "Warm as the wall behind it.", price: 28 },
  { slug: "mcm-drops-travertine", name: "Drops Travertine", code: "MCM-DT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm10.url, poem: "Old stone, thin as skin.", price: 26 },
  { slug: "mcm-earthy-travertine", name: "Earthy Travertine", code: "MCM-ET", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm11.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-flowing-cloud", name: "Flowing Cloud", code: "MCM-FC", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm12.url, poem: "A surface, moving.", price: 26 },
  { slug: "mcm-flowing-water", name: "Flowing Water", code: "MCM-FW", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm13.url, poem: "A surface, moving.", price: 39 },
  { slug: "mcm-grey-travertine", name: "Grey Travertine", code: "MCM-GT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm14.url, poem: "Old stone, thin as skin.", price: 26 },
  { slug: "mcm-ivory-travertine", name: "Ivory Travertine", code: "MCM-IT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm15.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-mounting-rock", name: "Mounting Rock", code: "MCM-MR", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm16.url, poem: "Weight, only in the eye.", price: 26 },
  { slug: "mcm-najdi-stone", name: "Najdi Stone", code: "MCM-NS", family: "MCM", application: "Both", finish: "Stone", colors: ["#c9b39a", "#a8927a", "#8a7a68"], fireRating: "A2-s1,d0", cover: mcm17.url, poem: "Weight, only in the eye." },
  { slug: "mcm-neutral-travertine", name: "Neutral Travertine", code: "MCM-NT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm18.url, poem: "Old stone, thin as skin.", price: 290 },
  { slug: "mcm-oasis-stone", name: "Oasis Stone", code: "MCM-OS", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm19.url, poem: "Weight, only in the eye.", price: 290 },
  { slug: "mcm-pearl-travertine", name: "Pearl Travertine", code: "MCM-PT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm20.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-rammed-earth", name: "Rammed Earth", code: "MCM-RE", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm21.url, poem: "Clay, remembered.", price: 129 },
  { slug: "mcm-roman-stone", name: "Roman Stone", code: "MCM-RS", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm22.url, poem: "Weight, only in the eye.", price: 290 },
  { slug: "mcm-rough-surface", name: "Rough Surface", code: "MCM-RS", family: "MCM", application: "Both", finish: "Rough", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm23.url, poem: "Touch it. It answers.", price: 28 },
  { slug: "mcm-rough-surface-beige", name: "Rough Surface Beige", code: "MCM-RSB", family: "MCM", application: "Both", finish: "Rough", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm24.url, poem: "Touch it. It answers.", price: 39 },
  { slug: "mcm-rough-surface-brown", name: "Rough Surface Brown", code: "MCM-RSB", family: "MCM", application: "Both", finish: "Rough", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm25.url, poem: "Touch it. It answers.", price: 39 },
  { slug: "mcm-ruff-rock", name: "Ruff Rock", code: "MCM-RR", family: "MCM", application: "Both", finish: "Rough", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm26.url, poem: "Weight, only in the eye.", price: 28 },
  { slug: "mcm-rustic-travertine", name: "Rustic Travertine", code: "MCM-RT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm27.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-sand-ripple", name: "Sand Ripple", code: "MCM-SR", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm28.url, poem: "A surface, moving.", price: 208 },
  { slug: "mcm-sand-wave", name: "Sand Wave", code: "MCM-SW", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm29.url, poem: "A surface, moving.", price: 290 },
  { slug: "mcm-silver-mist", name: "Silver Mist", code: "MCM-SM", family: "MCM", application: "Both", finish: "Natural", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm30.url, poem: "Thin cladding, deep effect.", price: 290 },
  { slug: "mcm-silver-travertine", name: "Silver Travertine", code: "MCM-ST", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm31.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-sky-rock", name: "Sky Rock", code: "MCM-SR", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm32.url, poem: "Weight, only in the eye.", price: 290 },
  { slug: "mcm-slate-stone", name: "Slate Stone", code: "MCM-SS", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm33.url, poem: "Weight, only in the eye.", price: 26 },
  { slug: "mcm-snow-rock", name: "Snow Rock", code: "MCM-SR", family: "MCM", application: "Both", finish: "Stone", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm34.url, poem: "Weight, only in the eye.", price: 28 },
  { slug: "mcm-star-diamond", name: "Star Diamond", code: "MCM-SD", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm35.url, poem: "Thin cladding, deep effect.", price: 26 },
  { slug: "mcm-travertine-open-book", name: "Travertine Open Book", code: "MCM-TOB", family: "MCM", application: "Both", finish: "Travertine", colors: ["#dbc9b3", "#c9b39a", "#a8927a"], fireRating: "A2-s1,d0", cover: mcm36.url, poem: "Old stone, thin as skin." },
  { slug: "mcm-turkish-travertine", name: "Turkish Travertine", code: "MCM-TT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm37.url, poem: "Old stone, thin as skin.", price: 32 },
  { slug: "mcm-volcanic-travertine", name: "Volcanic Travertine", code: "MCM-VT", family: "MCM", application: "Both", finish: "Travertine", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm38.url, poem: "Old stone, thin as skin.", price: 26 },
  { slug: "mcm-wave-tile", name: "Wave Tile", code: "MCM-WT", family: "MCM", application: "Both", finish: "Textured", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm39.url, poem: "A surface, moving.", price: 290 },
  { slug: "mcm-wood-spot", name: "Wood Spot", code: "MCM-WS", family: "MCM", application: "Both", finish: "Wood grain", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm40.url, poem: "Grain without weight.", price: 290 },
  { slug: "mcm-wood-tile", name: "Wood Tile", code: "MCM-WT", family: "MCM", application: "Both", finish: "Wood grain", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm41.url, poem: "Grain without weight.", price: 26 },
  { slug: "mcm-woven", name: "Woven", code: "MCM-W", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm42.url, poem: "Thin cladding, deep effect.", price: 28 },
  { slug: "mcm-zig-skyline", name: "Zig Skyline", code: "MCM-ZS", family: "MCM", application: "Both", finish: "Patterned", colors: ["#ab8770", "#ffffff", "#f9f7f5", "#e2d0a9", "#c6b48d", "#b4b4b4", "#727272", "#000000"], fireRating: "A2-s1,d0", cover: mcm43.url, poem: "Thin cladding, deep effect.", price: 28 },

  // ============ WPC (12) ============
  { slug: "wpc-oak-deep", name: "Deep Oak Deck", code: "WPC-OD-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#6b4a2f", "#8a6a4a", "#3d2b1c"], fireRating: "B-s1,d0", cover: imgA, poem: "Long grain, deep shadow.", details: wpcOakDetails },
  { slug: "wpc-linen", name: "Linen WPC Cladding", code: "WPC-LC-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#c9b39a", "#a8927a", "#dbc9b3"], fireRating: "B-s1,d0", cover: imgC, poem: "The colour of morning light.", details: wpcLinenDetails },
  { slug: "wpc-charcoal", name: "Charcoal Reeded", code: "WPC-CR-170", family: "WPC", application: "Both", finish: "Reeded", colors: ["#2a2622", "#3a3530", "#1c1a17"], fireRating: "B-s1,d0", cover: imgD, poem: "A pause between rooms." },
  { slug: "wpc-teak", name: "Teak Grain Deck", code: "WPC-TG-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#8a5a3c", "#a87848", "#5c3a24"], fireRating: "B-s1,d0", cover: imgA, poem: "Sun-baked, salt-proof." },
  { slug: "wpc-ash", name: "Ash Grey Cladding", code: "WPC-AG-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#8a8580", "#a8a39e", "#5c5854"], fireRating: "B-s1,d0", cover: imgE, poem: "Silver under evening sky." },
  { slug: "wpc-walnut", name: "Walnut Deck", code: "WPC-WN-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#4a2f1c", "#6b4a2f", "#2a1a10"], fireRating: "B-s1,d0", cover: imgD, poem: "Dark grain, soft step." },
  { slug: "wpc-bamboo", name: "Bamboo Fluted Cladding", code: "WPC-BF-150", family: "WPC", application: "Both", finish: "Fluted", colors: ["#c9b39a", "#8a6a4a", "#a8927a"], fireRating: "B-s1,d0", cover: imgC, poem: "Vertical rhythm, quiet façade." },
  { slug: "wpc-mahogany", name: "Mahogany Reeded", code: "WPC-MR-170", family: "WPC", application: "Both", finish: "Reeded", colors: ["#6b2f1c", "#8a3a24", "#3d1810"], fireRating: "B-s1,d0", cover: imgA, poem: "Red heat, held back." },
  { slug: "wpc-ivory", name: "Ivory Cladding", code: "WPC-IV-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#e5ddd0", "#dbc9b3", "#c9b39a"], fireRating: "B-s1,d0", cover: imgF, poem: "A pale, patient wall." },
  { slug: "wpc-espresso", name: "Espresso Deck", code: "WPC-ES-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#3a2015", "#2a1a10", "#4a2f1c"], fireRating: "B-s1,d0", cover: imgE, poem: "Roasted, deep, at ease." },
  { slug: "wpc-sandstone", name: "Sandstone Cladding", code: "WPC-SS-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#c9a48a", "#a8836b", "#e5c9a8"], fireRating: "B-s1,d0", cover: imgB, poem: "Desert colour, wall form." },
  { slug: "wpc-noir", name: "Noir Fluted", code: "WPC-NF-150", family: "WPC", application: "Both", finish: "Fluted", colors: ["#0f0d0b", "#2a2622", "#1c1a17"], fireRating: "B-s1,d0", cover: imgD, poem: "The wall recedes." },

  // ============ SPC (12) ============
  { slug: "spc-nordic", name: "Nordic Ash SPC", code: "SPC-NA-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#d8c9b0", "#c7b598", "#e5d8c0"], fireRating: "Bfl-s1", cover: imgB, poem: "Cool north, warm room.", details: spcNordicDetails },
  { slug: "spc-terra", name: "Terra Grain SPC", code: "SPC-TG-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#a06b48", "#8b5a3c", "#c98a5f"], fireRating: "Bfl-s1", cover: imgA, poem: "Clay, but silent.", details: spcTerraDetails },
  { slug: "spc-basalt", name: "Basalt SPC", code: "SPC-BS-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#4a4744", "#5c5854", "#3a3835"], fireRating: "Bfl-s1", cover: imgE, poem: "Stone that keeps its cool." },
  { slug: "spc-oak-blonde", name: "Blonde Oak SPC", code: "SPC-BO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#e5d0b0", "#d8c9a8", "#c9b39a"], fireRating: "Bfl-s1", cover: imgC, poem: "The floor in a light room." },
  { slug: "spc-walnut", name: "Walnut Rich SPC", code: "SPC-WR-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#4a2f1c", "#6b4a2f", "#3a2015"], fireRating: "Bfl-s1", cover: imgD, poem: "Dark warmth, dry underfoot." },
  { slug: "spc-marble", name: "Carrara SPC", code: "SPC-CM-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "Bfl-s1", cover: imgF, poem: "Marble, without the mass." },
  { slug: "spc-slate", name: "Slate Grey SPC", code: "SPC-SG-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#5c5854", "#3a3835", "#8a8580"], fireRating: "Bfl-s1", cover: imgE, poem: "Overcast, but dry." },
  { slug: "spc-honey", name: "Honey Oak SPC", code: "SPC-HO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#c9a067", "#a8834a", "#e5c88a"], fireRating: "Bfl-s1", cover: imgA, poem: "Late-afternoon floor." },
  { slug: "spc-ebony", name: "Ebony SPC", code: "SPC-EB-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#1c1a17", "#2a2622", "#0f0d0b"], fireRating: "Bfl-s1", cover: imgD, poem: "Black room, quiet plan." },
  { slug: "spc-mist", name: "Mist Oak SPC", code: "SPC-MO-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#c9c4be", "#a8a39e", "#dbd6d0"], fireRating: "Bfl-s1", cover: imgB, poem: "The colour of early rain." },
  { slug: "spc-sand", name: "Sand SPC", code: "SPC-SD-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#dbc9a8", "#c9b39a", "#a8927a"], fireRating: "Bfl-s1", cover: imgC, poem: "Underfoot as the dune above." },
  { slug: "spc-concrete", name: "Concrete SPC", code: "SPC-CC-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#8a8580", "#a8a39e", "#6b6864"], fireRating: "Bfl-s1", cover: imgF, poem: "Loft floor, no dust." },

  // ============ Aluminium (12) ============
  { slug: "alu-blade-70", name: "Blade Louver 70", code: "ALU-BL-070", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#5c5854", "#c4beb5"], fireRating: "A1", cover: imgE, poem: "Sun, arrived filtered.", details: aluBladeDetails },
  { slug: "alu-fin-40", name: "Fin Louver 40", code: "ALU-FN-040", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#2a2622", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "A comb through the wind.", details: aluFinDetails },
  { slug: "alu-wave", name: "Wave Screen", code: "ALU-WV-120", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#b4592c", "#8a8580", "#5c5854"], fireRating: "A1", cover: imgD, poem: "The wall breathes." },
  { slug: "alu-blade-100", name: "Blade Louver 100", code: "ALU-BL-100", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#a8a39e", "#5c5854"], fireRating: "A1", cover: imgE, poem: "Bigger blade, longer shadow." },
  { slug: "alu-mesh", name: "Perforated Mesh", code: "ALU-PM-030", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#2a2622", "#8a8580", "#e5ddd0"], fireRating: "A1", cover: imgF, poem: "The wall as filter." },
  { slug: "alu-tube", name: "Tube Louver 50", code: "ALU-TB-050", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#3a3530", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgD, poem: "Round shade, soft rhythm." },
  { slug: "alu-plank", name: "Plank Cladding", code: "ALU-PC-200", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#5c5854", "#8a8580", "#2a2622"], fireRating: "A1", cover: imgE, poem: "The building, lined." },
  { slug: "alu-diamond", name: "Diamond Screen", code: "ALU-DS-100", family: "Aluminium", application: "Both", finish: "Anodised", colors: ["#b4592c", "#8a5a3c", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "Pattern that keeps the sun outside." },
  { slug: "alu-corten", name: "Corten-Look Fin", code: "ALU-CF-060", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#8a3a1c", "#6b2f15", "#b4592c"], fireRating: "A1", cover: imgD, poem: "Rust colour, no rust." },
  { slug: "alu-linear", name: "Linear Ceiling Baffle", code: "ALU-LB-050", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#2a2622", "#8a8580", "#e5ddd0"], fireRating: "A1", cover: imgE, poem: "Above, in rhythm." },
  { slug: "alu-privacy", name: "Privacy Screen 120", code: "ALU-PS-120", family: "Aluminium", application: "Both", finish: "Powder", colors: ["#3a3530", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "A wall you can see through, just." },
  { slug: "alu-vent", name: "Vent Blade 30", code: "ALU-VB-030", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#a8a39e", "#c4beb5"], fireRating: "A1", cover: imgD, poem: "For hidden plant. Quiet air." },

  // ============ Panels (12) ============
  { slug: "pnl-linen", name: "Linen Acoustic Panel", code: "PNL-LA-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#d8c9b0", "#c9b39a", "#8a7a68"], fireRating: "B-s2,d0", cover: imgC, poem: "Rooms that listen back.", details: pnlLinenDetails },
  { slug: "pnl-slat-oak", name: "Slatted Oak Panel", code: "PNL-SO-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#8a6a4a", "#6b4a2f", "#c9a48a"], fireRating: "B-s2,d0", cover: imgB, poem: "Warmth in rhythm.", details: pnlSlatDetails },
  { slug: "pnl-mineral", name: "Mineral Cast Panel", code: "PNL-MC-25", family: "Panels", application: "Interior", finish: "Cast", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "A2", cover: imgE, poem: "A wall with weight." },
  { slug: "pnl-slat-walnut", name: "Slatted Walnut Panel", code: "PNL-SW-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#4a2f1c", "#6b4a2f", "#2a1a10"], fireRating: "B-s2,d0", cover: imgD, poem: "Dark rhythm, quiet room." },
  { slug: "pnl-charcoal-felt", name: "Charcoal Felt Panel", code: "PNL-CF-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#3a3530", "#2a2622", "#5c5854"], fireRating: "B-s2,d0", cover: imgC, poem: "The wall, absorbing." },
  { slug: "pnl-ivory-felt", name: "Ivory Felt Panel", code: "PNL-IF-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#e5ddd0", "#dbc9b3", "#c4beb5"], fireRating: "B-s2,d0", cover: imgF, poem: "Bright surface, still voice." },
  { slug: "pnl-3d-wave", name: "3D Wave Panel", code: "PNL-3W-20", family: "Panels", application: "Interior", finish: "MDF", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "B-s2,d0", cover: imgE, poem: "A wall in motion." },
  { slug: "pnl-3d-diamond", name: "3D Diamond Panel", code: "PNL-3D-20", family: "Panels", application: "Interior", finish: "MDF", colors: ["#dbc9b3", "#c9b39a", "#a8927a"], fireRating: "B-s2,d0", cover: imgD, poem: "Cut light, still surface." },
  { slug: "pnl-slat-black", name: "Slatted Black Panel", code: "PNL-SB-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#1c1a17", "#2a2622", "#0f0d0b"], fireRating: "B-s2,d0", cover: imgB, poem: "Night wall, warm below." },
  { slug: "pnl-oak-veneer", name: "Oak Veneer Panel", code: "PNL-OV-18", family: "Panels", application: "Interior", finish: "Veneer", colors: ["#c9a48a", "#a8836b", "#8a6a4a"], fireRating: "B-s2,d0", cover: imgA, poem: "Flat oak, quiet plane." },
  { slug: "pnl-marble-look", name: "Marble-Look Panel", code: "PNL-ML-06", family: "Panels", application: "Interior", finish: "Laminate", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "B-s2,d0", cover: imgF, poem: "The stone, but lighter." },
  { slug: "pnl-terrazzo", name: "Terrazzo Panel", code: "PNL-TZ-06", family: "Panels", application: "Interior", finish: "Laminate", colors: ["#e5ddd0", "#c9a48a", "#5c5854"], fireRating: "B-s2,d0", cover: imgE, poem: "Speckled surface, calm room." },
];

export function productsByFamily(family: string) {
  return PRODUCTS.filter((p) => p.family === family);
}

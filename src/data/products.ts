import imgA from "@/assets/section-materials.jpg";
import imgB from "@/assets/section-design.jpg";
import imgC from "@/assets/section-samples.jpg";
import imgD from "@/assets/section-gallery.jpg";
import imgE from "@/assets/section-technical.jpg";
import imgF from "@/assets/section-visualizer.jpg";

export type Product = {
  slug: string;
  name: string;
  code: string;
  family: "WPC" | "SPC" | "Aluminium" | "Panels";
  application: "Interior" | "Exterior" | "Both";
  finish: string;
  colors: string[];
  fireRating: string;
  cover: string;
  poem: string;
};

export const FAMILIES = [
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

export const PRODUCTS: Product[] = [
  { slug: "wpc-oak-deep", name: "Deep Oak Deck", code: "WPC-OD-140", family: "WPC", application: "Exterior", finish: "Brushed", colors: ["#6b4a2f", "#8a6a4a", "#3d2b1c"], fireRating: "B-s1,d0", cover: imgA, poem: "Long grain, deep shadow." },
  { slug: "wpc-linen", name: "Linen WPC Cladding", code: "WPC-LC-160", family: "WPC", application: "Exterior", finish: "Sanded", colors: ["#c9b39a", "#a8927a", "#dbc9b3"], fireRating: "B-s1,d0", cover: imgC, poem: "The colour of morning light." },
  { slug: "wpc-charcoal", name: "Charcoal Reeded", code: "WPC-CR-170", family: "WPC", application: "Both", finish: "Reeded", colors: ["#2a2622", "#3a3530", "#1c1a17"], fireRating: "B-s1,d0", cover: imgD, poem: "A pause between rooms." },
  { slug: "spc-nordic", name: "Nordic Ash SPC", code: "SPC-NA-052", family: "SPC", application: "Interior", finish: "Matte", colors: ["#d8c9b0", "#c7b598", "#e5d8c0"], fireRating: "Bfl-s1", cover: imgB, poem: "Cool north, warm room." },
  { slug: "spc-terra", name: "Terra Grain SPC", code: "SPC-TG-055", family: "SPC", application: "Interior", finish: "Textured", colors: ["#a06b48", "#8b5a3c", "#c98a5f"], fireRating: "Bfl-s1", cover: imgA, poem: "Clay, but silent." },
  { slug: "spc-basalt", name: "Basalt SPC", code: "SPC-BS-060", family: "SPC", application: "Interior", finish: "Stone", colors: ["#4a4744", "#5c5854", "#3a3835"], fireRating: "Bfl-s1", cover: imgE, poem: "Stone that keeps its cool." },
  { slug: "alu-blade-70", name: "Blade Louver 70", code: "ALU-BL-070", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#8a8580", "#5c5854", "#c4beb5"], fireRating: "A1", cover: imgE, poem: "Sun, arrived filtered." },
  { slug: "alu-fin-40", name: "Fin Louver 40", code: "ALU-FN-040", family: "Aluminium", application: "Exterior", finish: "Powder", colors: ["#2a2622", "#8a8580", "#c9a48a"], fireRating: "A1", cover: imgF, poem: "A comb through the wind." },
  { slug: "alu-wave", name: "Wave Screen", code: "ALU-WV-120", family: "Aluminium", application: "Exterior", finish: "Anodised", colors: ["#b4592c", "#8a8580", "#5c5854"], fireRating: "A1", cover: imgD, poem: "The wall breathes." },
  { slug: "pnl-linen", name: "Linen Acoustic Panel", code: "PNL-LA-30", family: "Panels", application: "Interior", finish: "Fabric", colors: ["#d8c9b0", "#c9b39a", "#8a7a68"], fireRating: "B-s2,d0", cover: imgC, poem: "Rooms that listen back." },
  { slug: "pnl-slat-oak", name: "Slatted Oak Panel", code: "PNL-SO-45", family: "Panels", application: "Interior", finish: "Wood", colors: ["#8a6a4a", "#6b4a2f", "#c9a48a"], fireRating: "B-s2,d0", cover: imgB, poem: "Warmth in rhythm." },
  { slug: "pnl-mineral", name: "Mineral Cast Panel", code: "PNL-MC-25", family: "Panels", application: "Interior", finish: "Cast", colors: ["#e5ddd0", "#c4beb5", "#8a8580"], fireRating: "A2", cover: imgE, poem: "A wall with weight." },
];

export function productsByFamily(family: string) {
  return PRODUCTS.filter((p) => p.family === family);
}

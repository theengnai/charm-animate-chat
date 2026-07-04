import imgA from "@/assets/section-gallery.jpg";
import imgB from "@/assets/section-design.jpg";
import imgC from "@/assets/section-visualizer.jpg";
import imgD from "@/assets/section-materials.jpg";
import imgE from "@/assets/section-samples.jpg";
import imgF from "@/assets/section-technical.jpg";

export type Project = {
  slug: string;
  name: string;
  location: string;
  year: number;
  sector: "Hospitality" | "Residential" | "Retail" | "F&B" | "Corporate" | "Public";
  scope: string;
  materials: string[];
  cover: string;
  span?: "1x1" | "2x1" | "1x2" | "2x2";
  quote?: { text: string; author: string };
};

export const SECTORS = ["Hospitality", "Residential", "Retail", "F&B", "Corporate", "Public"] as const;

export const PROJECTS: Project[] = [
  { slug: "coastal-villa-jbr", name: "Coastal Villa JBR", location: "Dubai, UAE", year: 2025, sector: "Residential", scope: "Exterior cladding, deck, louvers", materials: ["WPC-OD-140", "ALU-FN-040"], cover: imgA, span: "2x2", quote: { text: "Ecosmart specified, delivered and stayed through install. Rare.", author: "Studio Nara — Principal" } },
  { slug: "boutique-hotel-alserkal", name: "Boutique Hotel Alserkal", location: "Dubai, UAE", year: 2024, sector: "Hospitality", scope: "Lobby, corridors, spa", materials: ["PNL-SO-45", "SPC-NA-052"], cover: imgB, span: "2x1" },
  { slug: "riyadh-hq-tower", name: "Riyadh HQ Tower", location: "Riyadh, KSA", year: 2024, sector: "Corporate", scope: "Ventilated façade + interior panelling", materials: ["ALU-BL-070", "PNL-MC-25"], cover: imgC, span: "1x2" },
  { slug: "beit-al-qasr", name: "Beit Al Qasr", location: "Doha, Qatar", year: 2023, sector: "Public", scope: "Cultural pavilion cladding", materials: ["WPC-CR-170"], cover: imgD, span: "1x1" },
  { slug: "olive-restaurant", name: "Olive Restaurant", location: "Abu Dhabi, UAE", year: 2025, sector: "F&B", scope: "Interior surfaces + acoustic panels", materials: ["PNL-LA-30", "SPC-TG-055"], cover: imgE, span: "1x1" },
  { slug: "linen-house-flagship", name: "Linen House Flagship", location: "Kuwait City", year: 2024, sector: "Retail", scope: "Storefront + interior", materials: ["ALU-WV-120", "WPC-LC-160"], cover: imgF, span: "2x1" },
  { slug: "sea-club-jeddah", name: "Sea Club Jeddah", location: "Jeddah, KSA", year: 2023, sector: "Hospitality", scope: "Pool deck, cabanas, screens", materials: ["WPC-OD-140", "ALU-WV-120"], cover: imgA, span: "1x1" },
  { slug: "atrium-residences", name: "Atrium Residences", location: "Muscat, Oman", year: 2025, sector: "Residential", scope: "Balcony decking + louvers", materials: ["WPC-LC-160", "ALU-FN-040"], cover: imgC, span: "1x1" },
];

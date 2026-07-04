import roomLiving from "@/assets/section-design.jpg";
import roomLobby from "@/assets/section-gallery.jpg";
import roomRestaurant from "@/assets/section-visualizer.jpg";
import roomOutdoor from "@/assets/section-samples.jpg";
import { PRODUCTS } from "./products";

export const ROOMS = [
  { key: "living", name: "Living Room", image: roomLiving },
  { key: "lobby", name: "Hotel Lobby", image: roomLobby },
  { key: "restaurant", name: "Restaurant", image: roomRestaurant },
  { key: "outdoor", name: "Outdoor Deck", image: roomOutdoor },
] as const;

export const SURFACES = [
  { key: "floor", label: "Floor", families: ["SPC", "WPC"] },
  { key: "wall", label: "Wall", families: ["Panels", "WPC"] },
  { key: "ceiling", label: "Ceiling", families: ["Panels"] },
  { key: "accent", label: "Accent", families: ["Aluminium", "Panels"] },
] as const;

export function materialsForSurface(surface: string) {
  const s = SURFACES.find((x) => x.key === surface);
  if (!s) return PRODUCTS;
  return PRODUCTS.filter((p) => (s.families as readonly string[]).includes(p.family));
}

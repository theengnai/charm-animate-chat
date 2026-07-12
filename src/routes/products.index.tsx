import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { StickyTOC } from "@/components/motion/StickyTOC";
import { BlurFocus } from "@/components/motion/BlurFocus";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { HighlightSweep } from "@/components/motion/HighlightSweep";
import { Counter } from "@/components/motion/Counter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-products.jpg";
import imgA from "@/assets/section-materials.jpg";
import imgB from "@/assets/section-design.jpg";
import imgC from "@/assets/section-samples.jpg";
import imgD from "@/assets/section-gallery.jpg";
import imgE from "@/assets/section-technical.jpg";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — Ecosmart Architectural Materials" },
      { name: "description", content: "Five families of façade, cladding, interior and outdoor systems — curated for how they age, install and hold up in the GCC climate." },
      { property: "og:title", content: "Products — Ecosmart" },
      { property: "og:description", content: "Materials engineered for the way buildings actually live." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProductsPage,
});

const FAMILIES = [
  {
    id: "mcm",
    label: "MCM · Flexible cladding",
    tag: "Exterior + Interior · Skin",
    title: "MCM Flexible Cladding",
    body: "Modified Clay Material — thin, flexible mineral cladding that reads as travertine, brick, rock or timber but installs like tile. Non-combustible, lightweight, priced from 26 SAR/m².",
    specs: [
      ["Fire class", "A2-s1,d0"],
      ["Thickness", "3 mm"],
      ["Weight", "≈ 4 kg/m²"],
      ["Lead time", "2 weeks"],
    ],
    image: imgB,
  },
  {
    id: "wpc",
    label: "WPC · Decking",
    tag: "Exterior · Ground plane",
    title: "WPC Decking & Cladding",
    body: "Warm oak, linen and charcoal composite boards engineered for salt air, direct sun and hidden fixings. The board that ages instead of failing.",
    specs: [
      ["Fire class", "B-s1,d0"],
      ["Board thickness", "22 mm"],
      ["Warranty", "10 years"],
      ["Lead time", "3 weeks"],
    ],
    image: imgA,
  },
  {
    id: "spc",
    label: "SPC · Interior floors",
    tag: "Interior · Underfoot",
    title: "SPC Flooring",
    body: "Stone-firm, silent, waterproof. A quiet floor for hotels, workplaces and villas where the finish has to look calm the day after the party.",
    specs: [
      ["Wear class", "AC5"],
      ["Fire class", "Bfl-s1"],
      ["Warranty", "15 years"],
      ["Lead time", "2 weeks"],
    ],
    image: imgB,
  },
  {
    id: "aluminium",
    label: "Aluminium · Louvers",
    tag: "Exterior · Skin",
    title: "Aluminium Louvers",
    body: "Blades, fins and screens for solar shading and rainscreens. Powder-coated or anodised, sized to your grid, delivered pre-drilled to the substructure.",
    specs: [
      ["Fire class", "A1"],
      ["Finish", "Anodised · Powder"],
      ["Warranty", "20 years"],
      ["Lead time", "4 weeks"],
    ],
    image: imgE,
  },
  {
    id: "panels",
    label: "Panels · Interior walls",
    tag: "Interior · Vertical",
    title: "Wall Panels",
    body: "Acoustic linen, slatted oak and mineral cast panels for lobbies, corridors and living rooms. The walls that quiet the room instead of decorating it.",
    specs: [
      ["Acoustic (NRC)", "0.70"],
      ["Fire class", "B-s2,d0"],
      ["Warranty", "10 years"],
      ["Lead time", "3 weeks"],
    ],
    image: imgD,
  },
  {
    id: "custom",
    label: "Custom · Bespoke",
    tag: "Anywhere",
    title: "Custom Fabrication",
    body: "When the catalogue doesn't fit, we build to fit. Bespoke sizes, colours, perforations and finishes — with a full-scale mock-up before production.",
    specs: [
      ["Minimum run", "40 m²"],
      ["Prototype", "1:1 mock-up"],
      ["Lead time", "6–8 weeks"],
      ["MOQ pricing", "on request"],
    ],
    image: imgC,
  },
];

const KPIS = [
  { v: 42, s: "", l: "Standard finishes" },
  { v: 180, s: "+", l: "Projects delivered" },
  { v: 25, s: " yr", l: "Design life target" },
  { v: 65, s: "%", l: "Recycled content · avg." },
];

const SWATCHES = [
  { name: "Deep Oak", hex: "#6b4a2f" },
  { name: "Linen", hex: "#c9b39a" },
  { name: "Charcoal", hex: "#2a2622" },
  { name: "Nordic Ash", hex: "#d8c9b0" },
  { name: "Terra", hex: "#a06b48" },
  { name: "Basalt", hex: "#4a4744" },
  { name: "Anodised Silver", hex: "#8a8580" },
  { name: "Anodised Bronze", hex: "#8b5a3c" },
  { name: "Copper", hex: "#b4592c" },
  { name: "Mineral Bone", hex: "#e5ddd0" },
  { name: "Slate", hex: "#5c5854" },
  { name: "Reed", hex: "#c4beb5" },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Products library"
        title="Materials that"
        emphasis="shape architecture."
        subcopy="Five families of façade, cladding, interior and outdoor systems — curated for how they age in the GCC climate."
        image={hero}
        primary={{ label: "Talk to a specialist", to: "/contact" }}
        secondary={{ label: "Order sample kit", to: "/samples" }}
      />

      {/* Intro — HighlightSweep */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The library
          </div>
          <p className="display-serifish mt-6 text-2xl leading-[1.25] md:text-4xl">
            Not a catalogue of everything —{" "}
            <HighlightSweep>a considered set of systems</HighlightSweep>{" "}
            we know how to draw, deliver and defend on site. Five families, forty-two finishes, one supervisor at every install.
          </p>
        </div>
      </section>

      {/* Sticky TOC of families with BlurFocus imagery + AlternatingSlide spec rows */}
      <StickyTOC
        eyebrow="Families"
        items={FAMILIES.map((f) => ({ id: f.id, label: f.label }))}
      >
        {FAMILIES.map((f, i) => (
          <article
            key={f.id}
            id={f.id}
            className="scroll-mt-28 border-b border-line/40 pb-24 last:border-b-0"
          >
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <BlurFocus className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={f.image}
                  alt={f.title}
                  className="h-full w-full object-cover"
                />
              </BlurFocus>
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                  0{i + 1} · {f.tag}
                </div>
                <h3 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
                  {f.title}
                </h3>
                <p className="mt-6 text-base leading-relaxed text-ink-soft">
                  {f.body}
                </p>
                <div className="mt-10 space-y-2">
                  {f.specs.map((row, j) => (
                    <AlternatingSlide key={row[0]} index={j}>
                      <div className="flex items-center justify-between border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]">
                        <span className="text-ink-soft">{row[0]}</span>
                        <span className="text-ink">{row[1]}</span>
                      </div>
                    </AlternatingSlide>
                  ))}
                </div>
                {f.id !== "custom" ? (
                  <Link
                    to="/products/$family"
                    params={{ family: f.id }}
                    className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                  >
                    <span className="font-medium tracking-wide">View all {f.title.split(" ")[0]}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                  </Link>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </StickyTOC>

      {/* NEW — Performance ratings strip */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Performance
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Numbers we're comfortable defending.
          </h2>
          <div className="mt-14 grid grid-cols-2 gap-10 md:grid-cols-4">
            {KPIS.map((k) => (
              <div key={k.l}>
                <div className="display-serifish text-4xl text-copper md:text-6xl">
                  <Counter value={k.v} suffix={k.s} />
                </div>
                <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                  {k.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Finish library swatch wall */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Finish library
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Twelve finishes to start. Forty-two to specify.
          </h2>
          <div className="mt-14 grid grid-cols-3 gap-4 md:grid-cols-4 lg:grid-cols-6">
            {SWATCHES.map((sw, i) => (
              <ScaleIn key={sw.name} delay={i * 0.03}>
                <div className="group">
                  <div
                    className="aspect-square w-full rounded-lg shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] transition-transform group-hover:-translate-y-1"
                    style={{ backgroundColor: sw.hex }}
                  />
                  <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.2em] text-ink-soft">
                    {sw.name}
                  </div>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Not sure which fits?"
        title="Order a curated eight-chip kit — free within the UAE."
        href="/samples"
        cta="Request a kit"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

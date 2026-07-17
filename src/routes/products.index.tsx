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
import mcmCover from "@/assets/mcm/mcm-ivory-travertine.webp.asset.json";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — EcoSmart | Construction Systems & Finishing Products" },
      { name: "description", content: "EcoSmart's product library — construction systems (lightweight concrete panels, T-floor hourdi, hybrid precast, curved modular, portable cabins, EPS façades) and decoration & finishing lines (flexible clay-stone, PU stone, WPC, SPC, PVC), all manufactured in Sudair." },
      { property: "og:title", content: "Products — EcoSmart" },
      { property: "og:description", content: "Construction systems and finishing products, manufactured in Saudi Arabia." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProductsPage,
});

type ProductCard = {
  id: string;
  tag: string;
  title: string;
  body: string;
  specs?: [string, string][];
  image: string;
  isComingSoon?: boolean;
  viewAllLink?: string;
};

type Section = {
  id: string;
  label: string;
  title: string;
  intro: string;
  cards: ProductCard[];
};

const SECTIONS: Section[] = [
  {
    id: "architectural-finishes",
    label: "Decoration & Finishing",
    title: "Decoration & Finishing",
    intro: "Finishing product lines manufactured in Sudair — for interior and exterior surfaces where the material must be honest, durable and buildable.",
    cards: [
      {
        id: "flexible-clay-stone-panels",
        tag: "Exterior + Interior · 100% Saudi-made",
        title: "Flexible Clay-Stone Tiles",
        body: "A flexible modified clay-stone tile that bends to follow flat and curved surfaces, applied like a thin tile with adhesive. EcoSmart is the only manufacturer of flexible tiles in Saudi Arabia, produced with 100% Saudi-sourced raw materials — a primary Vision 2030 / IKTVA position.",
        specs: [
          ["Origin", "100% Saudi-made"],
          ["Reference", "EN 13501-1 / ASTM E84"],
          ["Water absorption", "ISO 10545-3"],
          ["Bond strength", "EN 1348"],
        ],
        image: mcmCover.url,
        viewAllLink: "mcm",
      },
      {
        id: "pu-stone",
        tag: "Interior + Exterior · Walls & Façades",
        title: "PU Stone Cladding",
        body: "Lightweight polyurethane stone panels that reproduce the texture and tonal variation of quarried stone — up to 75% lighter than natural stone and up to 3× faster to install. Advanced molding captures authentic grain and depth, while the intuitive interlocking system means no specialised masonry skills are required. Suited to feature walls, fireplaces, façades and hospitality interiors.",
        specs: [
          ["Material", "Polyurethane composite"],
          ["Panel size", "1200 × 600 × 50 mm"],
          ["Weight", "3.5 – 5.2 kg/m²"],
          ["Fire rating", "Class B1 (ASTM E84 tested)"],
          ["Weather range", "−40 °C to 60 °C · UV stable"],
          ["Installation", "Direct adhesive mount"],
        ],
        image: imgC,
        viewAllLink: "pu",
      },

      {
        id: "wpc",
        tag: "Exterior · Ground plane",
        title: "WPC External Decking",
        body: "Wood-plastic composite decking — moisture-resistant, dimensionally stable and suited to KSA humidity. Joist spacing, expansion gaps and end gaps are product-specific — follow the factory installation values.",
        specs: [
          ["Reference", "EN 15534 family"],
          ["Reaction to fire", "EN 13501-1"],
          ["Installation", "Concealed clip"],
          ["Maintenance", "Sweep / rinse"],
        ],
        image: imgA,
        viewAllLink: "wpc",
      },
      {
        id: "wpc-doors",
        tag: "Interior · Doors",
        title: "WPC Door Panels",
        body: "Wood-plastic composite door leaves — moisture-resistant, dimensionally stable, termite/rot resistant. Suited to bathrooms and wet areas where timber warps.",
        specs: [
          ["Reference", "EN 13501-1"],
          ["Water absorption / swelling", "EN 317"],
          ["Density", "ISO 1183"],
          ["Fire-rated door-set", "Confirm by certificate"],
        ],
        image: imgB,
      },
      {
        id: "pvc-wood-panels",
        tag: "Interior · Walls",
        title: "PVC Wood Panels",
        body: "PVC wall panels with a wood-effect finish. Moisture-resistant, dimensionally stable and cut to opening sizes.",
        specs: [
          ["Reference", "EN 13501-1"],
          ["Cutting", "Fine-tooth saw / utility knife"],
          ["Fixing", "Adhesive and/or battens"],
          ["Maintenance", "Dust / wipe clean"],
        ],
        image: imgB,
      },
    ],
  },
  {
    id: "smart-construction",
    label: "Construction Systems",
    title: "Construction Systems",
    intro: "Structural and envelope systems engineered to the Saudi Building Code — designed to reduce site time and wet trades while adding integral thermal and acoustic performance.",
    cards: [
      {
        id: "lightweight-concrete-wall-panels",
        tag: "Structure · Walls",
        title: "Lightweight Concrete Wall Panels",
        body: "Precast lightweight concrete panels with tongue-and-groove edges for rapid, mortar-light dry assembly. Internal partition, external façade and fair-faced variants — in place of blockwork, with integral thermal and acoustic performance.",
        specs: [
          ["Reference", "EN 14992"],
          ["Fire performance", "ASTM E84 / EN 13501-1"],
          ["Thermal", "ASTM C518 / EN 12667"],
          ["Acoustic", "ISO 10140 / ASTM E90"],
        ],
        image: imgD,
      },
      {
        id: "t-floor-hourdi",
        tag: "Structure · Floors",
        title: "Enhanced T-Floor Hourdi System",
        body: "Precast T-beams + EPS T-shaped hourdi infill blocks + in-situ reinforced structural topping — lower self-weight than a solid slab, with combined structural and thermal performance.",
        specs: [
          ["Reference", "EN 15037"],
          ["Design", "Project structural designer"],
          ["EPS density", "EN 13163 / ISO 845"],
          ["Thermal (deck)", "ASTM C518 / EN 12667"],
        ],
        image: imgE,
      },
      {
        id: "hybrid-precast",
        tag: "Structure · Complete frame",
        title: "Hybrid Precast Building System",
        body: "Precast columns, beams, stairs and fences combined with our lightweight concrete wall panels (in place of cast shear walls) and T-floor hourdi decks — a single-source precast-plus-panel structural package.",
        specs: [
          ["Reference", "EN 13369"],
          ["Design", "Saudi Building Code (SBC)"],
          ["Concrete grade", "ASTM C39 / EN 12390-3"],
          ["Seismic / wind", "SBC"],
        ],
        image: imgA,
      },
      {
        id: "3d-modular",
        tag: "Structure · Modular",
        title: "Enhanced 3D Curved Modular System",
        body: "Volumetric modular units including curved-angle geometries — a Saudi-distinctive capability. Modules are fabricated and fitted-out off site, then set onto prepared foundations.",
        specs: [
          ["Design", "Saudi Building Code (SBC)"],
          ["Thermal envelope", "ASTM C518 / EN 12667"],
          ["Acoustic (inter-module)", "ISO 10140"],
          ["Fire performance", "EN 13501 / SBC"],
        ],
        image: imgB,
      },
      {
        id: "portable-building",
        tag: "Structure · Ready-to-use",
        title: "Portable Cabins (insulated)",
        body: "Ready-to-use insulated cabins built on EcoSmart's insulated wall system with a high-end structural frame — not a basic container fit-out. Delivered as finished, habitable units for site offices, accommodation, clinics and amenity units.",
        specs: [
          ["Wall / roof U-value", "ASTM C518 / EN 12667"],
          ["Structural / wind", "SBC"],
          ["Electrical", "SBC / SEC"],
          ["Fire performance", "EN 13501 / SBC"],
        ],
        image: imgC,
      },
      {
        id: "eps-decorative-facades",
        tag: "Exterior · Façade details",
        title: "EPS Insulated Decorative Façades",
        body: "Shaped EPS decorative elements — cornices, mouldings, bands and insulated panels — bonded to the substrate and finished with reinforced mesh, basecoat, primer and decorative topcoat. Decoration and insulation in one system.",
        specs: [
          ["EPS density", "EN 13163 / ISO 845"],
          ["Thermal conductivity", "ASTM C518 / EN 12667"],
          ["Compressive strength (EPS)", "ISO 844 / EN 826"],
          ["Reaction to fire (system)", "EN 13501-1"],
        ],
        image: imgA,
      },
    ],
  },
];

const KPIS = [
  { v: 6, s: "", l: "Construction systems" },
  { v: 10, s: "", l: "Finishing product lines" },
  { v: 100, s: "%", l: "Manufactured in Saudi Arabia" },
  { v: 1, s: "", l: "KSA maker of flexible clay-stone" },
];

const SWATCHES = [
  { name: "Ivory Travertine", hex: "#f9f7f5" },
  { name: "Beige Travertine", hex: "#e2d0a9" },
  { name: "Cream Travertine", hex: "#c6b48d" },
  { name: "Ancient Wood", hex: "#ab8770" },
  { name: "Rammed Earth", hex: "#a06b48" },
  { name: "Desert Brick", hex: "#8b5a3c" },
  { name: "Grey Travertine", hex: "#b4b4b4" },
  { name: "Slate Stone", hex: "#727272" },
  { name: "Charcoal", hex: "#2a2622" },
  { name: "Najdi Stone", hex: "#c9b39a" },
  { name: "Silver Mist", hex: "#8a8580" },
  { name: "Snow Rock", hex: "#ffffff" },
];

function ProductsPage() {
  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Products library"
        title="Construction systems and"
        emphasis="finishing products."
        subcopy="Manufactured in Sudair Industrial City, Riyadh — two ranges built for the Saudi market."
        image={hero}
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "Request a sample", to: "/samples" }}
      />

      {/* Intro — HighlightSweep */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The library
          </div>
          <p className="display-serifish mt-6 text-2xl leading-[1.25] md:text-4xl">
            Two ranges,{" "}
            <HighlightSweep>manufactured in Saudi Arabia</HighlightSweep>{" "}
            — construction systems that replace conventional frames and blockwork, plus finishing products from the only KSA maker of flexible clay-stone. Every product carries a Technical Data Sheet and an Installation Manual.
          </p>
        </div>
      </section>

      {/* Sticky TOC of families with BlurFocus imagery + AlternatingSlide spec rows */}
      <StickyTOC
        eyebrow="Library"
        items={SECTIONS.map((s) => ({ 
          id: s.id, 
          label: s.label,
          subItems: s.cards.map((c) => ({ id: c.id, label: c.title }))
        }))}
      >
        {SECTIONS.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-28 border-b border-line/40 mb-32 pb-32 last:mb-0 last:border-b-0 last:pb-0">
            <div className="mb-12">
              <h2 className="display-serifish text-3xl md:text-5xl text-ink">
                {section.title}
                {section.id === "future-solutions" && (
                  <span className="ml-4 inline-flex items-center rounded-full bg-line/50 px-3 py-1 align-middle font-mono text-[0.62rem] uppercase tracking-widest text-ink-soft">
                    Coming Soon
                  </span>
                )}
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-ink-soft">{section.intro}</p>
            </div>

            <div className="space-y-32">
              {section.cards.map((f, i) => (
                <article key={f.id} id={f.id} className="scroll-mt-28">
                  <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
                    <BlurFocus className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                      <img
                        src={f.image}
                        alt={f.title}
                        className="h-full w-full object-cover"
                      />
                    </BlurFocus>
                    <div>
                      <div className="flex items-center justify-between">
                        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                          0{i + 1} · {f.tag}
                        </div>
                        {f.isComingSoon && (
                          <div className="rounded bg-canvas-2 px-2 py-1 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                            In development
                          </div>
                        )}
                      </div>
                      <h3 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
                        {f.title}
                      </h3>
                      <p className="mt-6 text-base leading-relaxed text-ink-soft">
                        {f.body}
                      </p>

                      {f.isComingSoon ? (
                        <div className="mt-10 border-t border-line/50 pt-4 font-mono text-xs uppercase tracking-[0.2em] text-ink-soft">
                          Details coming soon
                        </div>
                      ) : (
                        <div className="mt-10 space-y-2">
                          {f.specs?.map((row, j) => (
                            <AlternatingSlide key={row[0]} index={j}>
                              <div className="grid grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] items-baseline gap-4 border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]">
                                <span className="min-w-0 text-left text-ink-soft">{row[0]}</span>
                                <span className="min-w-0 justify-self-end text-right text-ink">{row[1]}</span>
                              </div>
                            </AlternatingSlide>
                          ))}
                        </div>
                      )}

                      {f.viewAllLink && (
                        <Link
                          to="/products/$family"
                          params={{ family: f.viewAllLink }}
                          className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                        >
                          <span className="font-medium tracking-wide">
                            View all {f.title.split(" ")[0]}
                          </span>
                          <ArrowRight
                            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                            strokeWidth={2}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ))}
      </StickyTOC>

      {/* NEW — Performance ratings strip */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The range
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            The Ecosmart product ranges, at a glance.
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
            Finish library · selected
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            A sample of the tones we work in.
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
        title="Request a sample — we'll send it from Sudair."
        href="/samples"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

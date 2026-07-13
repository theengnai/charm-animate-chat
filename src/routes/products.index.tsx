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
      { title: "Products — Ecosmart Architectural Materials" },
      { name: "description", content: "Five families of façade, cladding, interior and outdoor systems — curated for how they age, install and hold up in the GCC climate." },
      { property: "og:title", content: "Products — Ecosmart" },
      { property: "og:description", content: "Materials engineered for the way buildings actually live." },
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
    label: "Architectural Finishes",
    title: "Architectural Finishes",
    // TODO: Client to review placeholder intro copy
    intro: "Surface materials that shape light, weather well, and install with intention.",
    cards: [
      {
        id: "flexible-clay-stone-panels",
        tag: "Exterior + Interior · Skin",
        title: "Flexible Clay-Stone Panels",
        body: "Modified Clay Material — thin, flexible mineral cladding that reads as travertine, brick, rock or timber but installs like tile. Non-combustible, lightweight, priced from 26 SAR/m².",
        specs: [
          ["Fire class", "A2-s1,d0"],
          ["Thickness", "3 mm"],
          ["Weight", "≈ 4 kg/m²"],
          ["Lead time", "2 weeks"],
        ],
        image: mcmCover.url,
        viewAllLink: "mcm",
      },
      {
        id: "eps-decorative-facades",
        // TODO: Client to replace placeholder tag, body, specs, and image
        tag: "Exterior · Details",
        title: "EPS Decorative Façades",
        body: "Lightweight architectural mouldings and cornices with a hard polyurea shell for sharp, lasting details.",
        specs: [
          ["Fire class", "TODO"],
          ["Thickness", "TODO"],
          ["Weight", "TODO"],
          ["Lead time", "TODO"],
        ],
        image: imgA,
      },
      {
        id: "wpc",
        tag: "Exterior · Ground plane",
        title: "WPC Decking",
        body: "Warm oak, linen and charcoal composite boards engineered for salt air, direct sun and hidden fixings. The board that ages instead of failing.",
        specs: [
          ["Fire class", "B-s1,d0"],
          ["Board thickness", "22 mm"],
          ["Warranty", "10 years"],
          ["Lead time", "3 weeks"],
        ],
        image: imgA,
        viewAllLink: "wpc",
      },
      {
        id: "pvc-wood-panels",
        // TODO: Client to replace placeholder tag, body, specs, and image
        tag: "Interior · Walls",
        title: "PVC Wood Panels",
        body: "Durable, moisture-resistant fluted panels that bring the warmth of timber without the maintenance.",
        specs: [
          ["Fire class", "TODO"],
          ["Thickness", "TODO"],
          ["Weight", "TODO"],
          ["Lead time", "TODO"],
        ],
        image: imgB,
      },
      {
        id: "pu-stone",
        // TODO: Client to replace placeholder tag, body, specs, and image
        tag: "Interior + Exterior · Walls",
        title: "PU Stone",
        body: "Ultra-lightweight polyurethane stone panels for rapid, mortar-free feature walls.",
        specs: [
          ["Fire class", "TODO"],
          ["Thickness", "TODO"],
          ["Weight", "TODO"],
          ["Lead time", "TODO"],
        ],
        image: imgC,
      },
    ],
  },
  {
    id: "smart-construction",
    label: "Smart Construction Systems",
    title: "Smart Construction Systems",
    // TODO: Client to review placeholder intro copy
    intro: "Structural solutions engineered to reduce site time and material waste.",
    cards: [
      {
        id: "lightweight-concrete-wall-panels",
        // TODO: Client to replace placeholder tag, body, specs, and image
        tag: "Structure · Walls",
        title: "Lightweight Concrete Wall Panels",
        body: "Pre-cast lightweight concrete panels that replace traditional blockwork, speeding up partitioning.",
        specs: [
          ["Fire class", "TODO"],
          ["Thickness", "TODO"],
          ["Weight", "TODO"],
          ["Lead time", "TODO"],
        ],
        image: imgD,
      },
    ],
  },
  {
    id: "future-solutions",
    label: "Future Solutions",
    title: "Future Solutions",
    // TODO: Client to review placeholder intro copy
    intro: "Systems currently in development for the next generation of GCC builds.",
    cards: [
      {
        id: "t-floor-hourdi",
        // TODO: Client to replace placeholder tag, body, and image
        tag: "Structure · Floors",
        title: "T-Floor Hourdi System",
        body: "A lighter, faster hollow-core flooring system.",
        isComingSoon: true,
        image: imgE,
      },
      {
        id: "hybrid-precast",
        // TODO: Client to replace placeholder tag, body, and image
        tag: "Structure · Complete",
        title: "Hybrid Precast Building Systems",
        body: "Volumetric and panelized precast elements for rapid assembly.",
        isComingSoon: true,
        image: imgA,
      },
      {
        id: "3d-modular",
        // TODO: Client to replace placeholder tag, body, and image
        tag: "Structure · Modular",
        title: "3D Modular Construction",
        body: "Fully finished modular units craned directly into place.",
        isComingSoon: true,
        image: imgB,
      },
      {
        id: "portable-building",
        // TODO: Client to replace placeholder tag, body, and image
        tag: "Structure · Temporary",
        title: "Portable Building Solutions",
        body: "High-performance temporary and relocatable structures.",
        isComingSoon: true,
        image: imgC,
      },
    ],
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
            {/* TODO: Review and update this copy — "Five families" no longer matches the new 3-section structure */}
            Not a catalogue of everything —{" "}
            <HighlightSweep>a considered set of systems</HighlightSweep>{" "}
            we know how to draw, deliver and defend on site. Five families, forty-two finishes, one supervisor at every install.
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
                              <div className="flex items-center justify-between border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]">
                                <span className="text-ink-soft">{row[0]}</span>
                                <span className="text-ink">{row[1]}</span>
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

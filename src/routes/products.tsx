import { createFileRoute } from "@tanstack/react-router";
import { LayoutGrid, Layers, Home, TreePine, Compass } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-products.jpg";
import parallax from "@/assets/about/sol-facade.jpg";
import strip1 from "@/assets/about/detail-fabric.jpg";
import strip2 from "@/assets/about/sol-architect.jpg";
import strip3 from "@/assets/about/sol-interior.jpg";
import strip4 from "@/assets/about/sol-facade.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Ecosmart Architectural Materials" },
      { name: "description", content: "Façade, cladding, interior panels, decking and custom systems — materials chosen for how they age, install, and hold up in the GCC climate." },
      { property: "og:title", content: "Products — Ecosmart" },
      { property: "og:description", content: "Materials engineered for the way buildings actually live." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProductsPage,
});

const FAMILIES = [
  { n: "01", Icon: LayoutGrid, title: "Façade Systems", body: "Rain-screen, ventilated and open-joint cladding assemblies engineered for wind, fire and thermal performance across the GCC.", tag: "Exterior" },
  { n: "02", Icon: Layers, title: "Cladding & Panels", body: "Composite, mineral and metal panel systems that carry a building's identity — colour-stable, honest at the joint, easy on the trades.", tag: "Exterior · Interior" },
  { n: "03", Icon: Home, title: "Interior Surfaces", body: "Wall panels, feature ribs and screens designed for hospitality, workplace and residential interiors — quiet, tactile, acoustic-aware.", tag: "Interior" },
  { n: "04", Icon: TreePine, title: "Outdoor Decking", body: "WPC decking, pergolas and pool-edge systems built for direct sun and salt exposure — with hidden fixing detailing throughout.", tag: "Exterior" },
  { n: "05", Icon: Compass, title: "Custom Fabrication", body: "When the catalogue doesn't fit, we build to fit. Bespoke sizes, colours, perforations and finishes with prototype approval.", tag: "Bespoke" },
];

const PROCESS = [
  { n: "01", t: "Brief", d: "You send the project — drawings, mood, budget, deadline." },
  { n: "02", t: "Specification", d: "We propose a material shortlist with fire, wind and thermal notes." },
  { n: "03", t: "Samples", d: "Physical chips arrive within a week." },
  { n: "04", t: "Prototype", d: "A full-scale mock-up on request — glued, screwed, tested." },
  { n: "05", t: "Production", d: "Batch-controlled and photo-documented before it leaves." },
  { n: "06", t: "Site", d: "Method statements, toolbox talks, and a supervisor on the wall." },
];

function ProductsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Products library"
        title="Materials that"
        emphasis="shape architecture."
        subcopy="Five families of façade, cladding, interior and outdoor systems — curated for how they age in the GCC climate and how they land on site."
        image={hero}
        primary={{ label: "Talk to a specialist", to: "/contact" }}
        secondary={{ label: "Order sample kit", to: "/samples" }}
      />

      <InfoStrip
        eyebrow="The library"
        lead="Not a catalogue of everything — a considered set of systems we know how to draw, deliver and defend on site."
      >
        <div className="grid grid-cols-3 gap-6 border-t border-line/40 pt-10 md:gap-16">
          {[
            { l: "Families", v: 5 },
            { l: "Finishes", v: 42 },
            { l: "Projects", v: 180 },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="display-serifish text-4xl text-copper md:text-6xl">
                <Counter value={s.v} />
              </div>
              <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                {s.l}
              </div>
            </Reveal>
          ))}
        </div>
      </InfoStrip>

      <StackingCards
        sectionId="families"
        labelN="02"
        labelText="Families"
        title="Five ways to"
        titleEm="specify a surface."
        description="Each family below is a standalone system with its own drawings, fixings, fire path and warranty. Mix them freely."
        items={FAMILIES}
        renderItem={(e) => {
          const Icon = e.Icon;
          return (
            <div className="flex flex-col justify-between w-full max-w-[22rem] md:max-w-md max-h-full mx-auto aspect-square rounded-2xl border border-line/60 bg-canvas p-6 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft mt-1">{e.n}</span>
                <span className="grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-copper/30 bg-canvas text-copper">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </span>
              </div>
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">{e.tag}</div>
                <h3 className="display-serifish mt-2 text-2xl leading-tight md:text-3xl lg:text-4xl">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{e.body}</p>
              </div>
            </div>
          );
        }}
      />

      <ParallaxSplit
        eyebrow="How we source"
        title="From mill to"
        titleEm="mock-up."
        body="Every material we list has a mill we've visited, a lead time we've measured, and a QC file we can share. We don't drop-ship trends — we stock what we can stand behind ten years from now."
        image={parallax}
      />

      <HorizontalPin
        eyebrow="From spec to site"
        title="Six steps, one"
        titleEm="line of accountability."
        items={PROCESS}
        renderItem={(step) => (
          <article className="w-[80vw] max-w-[420px] rounded-3xl border border-line/60 bg-canvas p-8 md:p-10">
            <div className="display-serifish text-6xl text-copper">{step.n}</div>
            <h3 className="display-serifish mt-6 text-3xl">{step.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{step.d}</p>
          </article>
        )}
      />

      {/* Marquee finish strip */}
      <section className="relative overflow-hidden py-6">
        <div className="flex gap-2 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[strip1, strip2, strip3, strip4, strip1, strip2, strip3, strip4].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] w-[320px] flex-shrink-0 overflow-hidden md:w-[420px]">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      <CTABand
        eyebrow="Not sure which fits?"
        title="Book a 20-minute material consult with our design team."
        href="/design-services"
        cta="Explore design services"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

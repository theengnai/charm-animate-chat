import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, Wrench, Hammer } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { WordReveal } from "@/components/motion/WordReveal";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-design.jpg";
import parallax from "@/assets/about/sol-architect.jpg";

export const Route = createFileRoute("/design-services")({
  head: () => ({
    meta: [
      { title: "Design Services — Ecosmart" },
      { name: "description", content: "From brief to handover — material consultation, curation, custom fabrication and install supervision for architects and developers." },
      { property: "og:title", content: "Design Services — Ecosmart" },
      { property: "og:description", content: "A design partner, not a supplier." },
      { property: "og:image", content: hero },
    ],
  }),
  component: DesignServicesPage,
});

const SERVICES = [
  { n: "01", Icon: Compass, tag: "Consultation", title: "Space Consultation", body: "We start with the room — light, flow, sound, budget, deadline — and only then reach for the catalogue. A site visit, an interrogation of the brief, a first shortlist." },
  { n: "02", Icon: Layers, tag: "Curation", title: "Material Curation", body: "A shortlist that fits your palette, your programme and your fire strategy. Physical samples, written rationale, spec-ready selection." },
  { n: "03", Icon: Hammer, tag: "Fabrication", title: "Custom Fabrication", body: "When the catalogue doesn't fit, we build to fit. Custom sizes, colours, perforations and finishes — with a full-scale prototype before production." },
  { n: "04", Icon: Wrench, tag: "Install", title: "Install Supervision", body: "Method statements, toolbox talks, snagging and sign-off. We stay on site until the last panel clicks and the client walks the wall." },
];

const PROCESS = [
  { t: "Brief", d: "We interrogate the brief." },
  { t: "Site", d: "We measure light, flow, sound." },
  { t: "Palette", d: "We shortlist materials." },
  { t: "Prototype", d: "We build a full-scale mock-up." },
  { t: "Produce", d: "We batch and QC before shipping." },
  { t: "Install", d: "We supervise every square metre." },
  { t: "Handover", d: "We hand you a room, not a box." },
];

function DesignServicesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Design services"
        title="A design partner,"
        emphasis="not a supplier."
        subcopy="From concept through installation, engineered around your space. We start with the room and stay through the install."
        image={hero}
        primary={{ label: "Book a consultation", to: "/contact" }}
        secondary={{ label: "See our work", to: "/projects" }}
      />

      <InfoStrip
        eyebrow="How we work"
        lead="We work as an extension of your studio — bringing material knowledge to the drawing board, and drawing knowledge to the site."
      />

      <StackingCards
        labelN="02"
        labelText="What we do"
        title="Four services,"
        titleEm="one team."
        description="Every engagement combines two or three of these — sequenced to the phase of your project."
        items={SERVICES}
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

      <HorizontalPin
        eyebrow="The process"
        title="Seven steps,"
        titleEm="one line."
        items={PROCESS}
        renderItem={(s, i) => (
          <article className="w-[75vw] max-w-[360px] rounded-3xl border border-line/60 bg-canvas p-8 md:p-10">
            <div className="display-serifish text-6xl text-copper">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="display-serifish mt-6 text-3xl">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.d}</p>
          </article>
        )}
      />

      <section className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Design philosophy
          </div>
          <WordReveal text="Buildings aren't made in a Revit view. They're made in a paint shop, on a scaffold, at four in the afternoon. We design for that afternoon — for the crew who install the panel and the person who walks past it every day." />
        </div>
      </section>

      <ParallaxSplit
        eyebrow="The team"
        title="Architects and"
        titleEm="material specialists."
        body="A design-led team of architects, spec writers and installers — the same people who wrote the detail are the ones who stand on site while it's built."
        image={parallax}
        reverse
      />

      <CTABand
        eyebrow="Ready?"
        title="Book a design consultation."
        href="/contact"
        cta="Start with a 20-minute call"
        tone="dark"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

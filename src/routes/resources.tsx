import { createFileRoute } from "@tanstack/react-router";
import { FileText, HardDrive, ShieldCheck, BookOpen } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { WordReveal } from "@/components/motion/WordReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-resources.jpg";
import parallax from "@/assets/about/detail-fabric.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Technical Resources — Ecosmart" },
      { name: "description", content: "Datasheets, installation guides, CAD/BIM files, warranties and certifications for architects, specifiers and contractors." },
      { property: "og:title", content: "Technical Resources — Ecosmart" },
      { property: "og:description", content: "Everything you need to specify with confidence." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ResourcesPage,
});

const CATEGORIES = [
  { n: "01", Icon: FileText, tag: "Datasheets", title: "Product datasheets", body: "One PDF per SKU — dimensions, fire class, wind loads, thermal properties, care and warranty. Versioned and dated so you know you're on the current sheet." },
  { n: "02", Icon: BookOpen, tag: "Installation", title: "Installation guides", body: "Step-by-step method statements, fixing schedules and tolerance sheets — written by the crews who install this on site, not by marketing." },
  { n: "03", Icon: HardDrive, tag: "CAD & BIM", title: "CAD & BIM files", body: "Revit families, DWG blocks, IFC exports and detail packs — organised by system so a specifier can drop a working detail straight into a set." },
  { n: "04", Icon: ShieldCheck, tag: "Compliance", title: "Certifications & warranties", body: "Fire test reports, EPDs, ISO certificates and the master warranty template. Signed, stamped and updated as standards evolve." },
];

const CERTS = ["FSC", "ISO 9001", "ISO 14001", "CE", "TÜV", "BREEAM", "LEED", "EPD", "SASO", "ASTM"];

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Technical library"
        title="Specify with"
        emphasis="confidence."
        subcopy="A quiet library for the people writing the specs — datasheets, CAD packs, certifications and warranty templates. Nothing you can't defend on site."
        image={hero}
        primary={{ label: "Request the library", to: "/contact" }}
        secondary={{ label: "Book a lunch & learn", to: "/contact" }}
      />

      <InfoStrip
        eyebrow="What's inside"
        lead="Everything we ship — from a single WPC batten to a full curtain wall — comes with the paperwork to back it up. Downloadable, dated, and current."
      />

      <StackingCards
        labelN="02"
        labelText="Four categories"
        title="A library that"
        titleEm="reads like a spec."
        description="Grouped by how a project actually uses them — the datasheet before the tender, the CAD during production, the warranty after handover."
        items={CATEGORIES}
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
        eyebrow="Lunch & learn"
        title="An hour with"
        titleEm="our specification team."
        body="We come to your studio with a case of samples, a stack of details, and a project on the table. CPD-accredited, RIBA-friendly, always over food."
        image={parallax}
      />

      <section className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Compliance
          </div>
          <WordReveal text="Every certificate below is renewed on the date it expires — never later. If it's on the wall, it's current. If it's on the datasheet, it's tested. If it's on the warranty, it's honoured." />
        </div>
      </section>

      {/* Certifications marquee */}
      <section className="relative overflow-hidden border-y border-line/60 bg-canvas-2/40 py-16">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
            Independently tested · Documented · Renewed
          </div>
        </div>
        <div className="mt-10 flex gap-4 animate-[marquee_35s_linear_infinite]">
          {[...CERTS, ...CERTS].map((c, i) => (
            <div
              key={i}
              className="grid h-24 w-40 shrink-0 place-items-center rounded-xl border border-line bg-canvas font-mono text-xs uppercase tracking-[0.22em] text-ink"
            >
              {c}
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
        eyebrow="Studios & practices"
        title="Book a lunch-and-learn with our specification team."
        href="/contact"
        cta="Request a session"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

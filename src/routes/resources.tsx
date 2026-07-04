import { createFileRoute } from "@tanstack/react-router";
import { FileText, HardDrive, ShieldCheck, BookOpen, Sparkles, HeadphonesIcon } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { StickyTOC } from "@/components/motion/StickyTOC";
import { TextColorShift } from "@/components/motion/TextColorShift";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-resources.jpg";

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
  {
    id: "datasheets",
    label: "Datasheets",
    Icon: FileText,
    intro: "One PDF per SKU — dimensions, fire class, wind loads, thermal properties, care and warranty. Versioned and dated so you know you're on the current sheet.",
    files: [
      ["WPC-OD-140 — Deep Oak Deck", "PDF · 1.2 MB"],
      ["SPC-NA-052 — Nordic Ash SPC", "PDF · 980 KB"],
      ["ALU-BL-070 — Blade Louver 70", "PDF · 1.4 MB"],
      ["PNL-LA-30 — Linen Acoustic Panel", "PDF · 1.1 MB"],
    ],
  },
  {
    id: "installation",
    label: "Installation",
    Icon: BookOpen,
    intro: "Step-by-step method statements, fixing schedules and tolerance sheets — written by the crews who install this on site, not by marketing.",
    files: [
      ["WPC decking — hidden fixing method", "PDF · 3.2 MB"],
      ["Ventilated rainscreen — assembly guide", "PDF · 4.1 MB"],
      ["Louver substructure — fixing schedule", "PDF · 2.7 MB"],
      ["Acoustic panel — wall build-up", "PDF · 1.9 MB"],
    ],
  },
  {
    id: "cad-bim",
    label: "CAD & BIM",
    Icon: HardDrive,
    intro: "Revit families, DWG blocks, IFC exports and detail packs — organised by system so a specifier can drop a working detail straight into a set.",
    files: [
      ["Revit families — full library", "ZIP · 84 MB"],
      ["DWG detail pack — façade", "ZIP · 22 MB"],
      ["DWG detail pack — interior", "ZIP · 18 MB"],
      ["IFC 4 exports", "ZIP · 46 MB"],
    ],
  },
  {
    id: "compliance",
    label: "Compliance",
    Icon: ShieldCheck,
    intro: "Fire test reports, EPDs, ISO certificates and the master warranty template. Signed, stamped and updated as standards evolve.",
    files: [
      ["Master warranty — template", "PDF · 320 KB"],
      ["Fire test — EN 13501-1 (WPC)", "PDF · 2.1 MB"],
      ["EPD — WPC decking", "PDF · 1.8 MB"],
      ["ISO 9001 · 14001 certificates", "PDF · 640 KB"],
    ],
  },
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
        subcopy="A quiet library for the people writing the specs — datasheets, CAD packs, certifications and warranty templates."
        image={hero}
        primary={{ label: "Request the library", to: "/contact" }}
        secondary={{ label: "Book a lunch & learn", to: "/contact" }}
      />

      {/* Intro — TextColorShift */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Ethos
          </div>
          <TextColorShift
            className="display-serifish mt-8 text-2xl leading-[1.35] text-ink-soft md:text-4xl"
            text="Every certificate below is renewed on the date it expires — never later. If it's on the wall, it's current. If it's on the datasheet, it's tested. If it's on the warranty, it's honoured."
          />
        </div>
      </section>

      {/* Sticky TOC with categories */}
      <StickyTOC
        eyebrow="Library"
        items={CATEGORIES.map((c) => ({ id: c.id, label: c.label }))}
      >
        {CATEGORIES.map((c) => {
          const Icon = c.Icon;
          return (
            <article
              key={c.id}
              id={c.id}
              className="scroll-mt-28 border-b border-line/40 pb-24 last:border-b-0"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 place-items-center border border-copper/40 bg-copper/10 text-copper shadow-[10px_10px_0_color-mix(in_oklab,var(--copper)_12%,transparent)]">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="display-serifish text-3xl md:text-5xl">{c.label}</h3>
              </div>
              <p className="mt-6 max-w-2xl text-base text-ink-soft">{c.intro}</p>
              <div className="mt-10 grid gap-4 md:grid-cols-2">
                {c.files.map((f, j) => {
                  const type = f[1].split(" ")[0]; // "PDF" / "ZIP"
                  return (
                    <AlternatingSlide key={f[0]} index={j}>
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        className="group relative flex min-h-28 items-start justify-between gap-5 overflow-hidden border border-line/70 bg-canvas p-5 transition-all hover:-translate-y-1 hover:border-copper hover:shadow-[0_20px_40px_-25px_rgba(0,0,0,0.3)]"
                      >
                        <span className="absolute inset-y-0 left-0 w-1 bg-copper/60 transition-all group-hover:w-2" />
                        <div className="flex items-start gap-4">
                          <span className="mt-0.5 inline-flex items-center justify-center border border-copper/20 bg-copper/10 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-copper">
                            {type}
                          </span>
                          <div>
                            <div className="text-sm font-medium leading-snug text-ink group-hover:text-copper md:text-base">
                              {f[0]}
                            </div>
                            <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                              {f[1]}
                            </div>
                          </div>
                        </div>
                        <span className="shrink-0 font-mono text-lg text-ink-soft transition-transform group-hover:translate-y-0.5 group-hover:text-copper">
                          ↓
                        </span>
                      </a>
                    </AlternatingSlide>
                  );
                })}
              </div>
            </article>
          );
        })}
      </StickyTOC>

      {/* NEW — Standards & certifications wall (static grid, no BlurFocus to keep this page distinct) */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Standards & certifications
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Independently tested. Documented. Renewed.
          </h2>
          <div className="mt-14 grid grid-cols-3 gap-4 md:grid-cols-5">
            {CERTS.map((c, i) => (
              <AlternatingSlide key={c} index={i}>
                <div className="grid h-28 place-items-center rounded-xl border border-line bg-canvas font-mono text-xs uppercase tracking-[0.22em] text-ink transition-colors hover:border-copper">
                  {c}
                </div>
              </AlternatingSlide>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Ask a technical rep */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-6xl gap-10 rounded-3xl border border-line/60 bg-canvas-2/40 p-8 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-16 md:p-14">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-copper/10 text-copper">
            <HeadphonesIcon className="h-6 w-6" strokeWidth={1.5} />
          </div>
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Direct line
            </div>
            <h3 className="display-serifish mt-3 text-2xl md:text-3xl">
              Speak to a technical rep before you write the spec.
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-ink-soft">
              CPD-accredited, RIBA-friendly, always over food. Bring a plan, a section, or a mood board — we'll bring the samples.
            </p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 self-start rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5 md:self-auto"
          >
            <Sparkles className="h-4 w-4" /> Book a session
          </a>
        </div>
      </section>

      <CTABand
        eyebrow="Studios & practices"
        title="Request the full technical library."
        href="/contact"
        cta="Request access"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

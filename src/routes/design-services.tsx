import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, Wrench, Hammer, Check } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { TEAM } from "@/data/team";
import hero from "@/assets/pages/hero-design.jpg";

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
  { Icon: Compass, tag: "Consultation", title: "Space Consultation", body: "We start with the room — light, flow, sound, budget, deadline — and only then reach for the catalogue." },
  { Icon: Layers, tag: "Curation", title: "Material Curation", body: "A shortlist that fits your palette, your programme and your fire strategy. Physical samples, written rationale, spec-ready selection." },
  { Icon: Hammer, tag: "Fabrication", title: "Custom Fabrication", body: "When the catalogue doesn't fit, we build to fit — custom sizes, colours, perforations and finishes with a full-scale prototype." },
  { Icon: Wrench, tag: "Install", title: "Install Supervision", body: "Method statements, toolbox talks, snagging and sign-off. We stay on site until the last panel clicks." },
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

const TIERS = [
  {
    name: "Consult",
    price: "From AED 3,500",
    for: "A single room / façade element",
    features: ["Site visit", "Material shortlist", "Written rationale", "Sample kit", "One revision"],
  },
  {
    name: "Curate",
    price: "From AED 12,000",
    for: "A full project palette",
    features: ["Everything in Consult", "Full palette across surfaces", "Spec-ready selection", "Fire & warranty notes", "Two revisions", "Mock-up review"],
    featured: true,
  },
  {
    name: "Deliver",
    price: "Bespoke",
    for: "End-to-end supply + install",
    features: ["Everything in Curate", "Custom fabrication", "Batch QC", "On-site supervision", "Snagging + sign-off", "10-year warranty"],
  },
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

      {/* LetterReveal manifesto */}
      <section className="border-t border-line/60 bg-ink px-5 py-32 text-canvas md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
            Manifesto
          </div>
          <LetterReveal
            className="display-serifish mt-8 text-4xl leading-[1.05] md:text-7xl"
            text="We design for the crew on the scaffold, not the render."
            em="not the render."
            emClassName="italic text-copper"
          />
          <p className="mt-8 max-w-2xl text-canvas/70">
            Buildings aren't made in a Revit view. They're made in a paint shop, on a scaffold, at four in the afternoon.
          </p>
        </div>
      </section>

      {/* Services grid — plain Reveal stagger */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            What we do
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Four services, one team.
          </h2>
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {SERVICES.map((s, i) => {
              const Icon = s.Icon;
              return (
                <div
                  key={s.title}
                  data-reveal-item
                  className="group rounded-2xl border border-line/60 bg-canvas p-8 transition-colors hover:border-copper md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
                      0{i + 1}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-copper/30 text-copper transition-transform group-hover:-rotate-6">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                    {s.tag}
                  </div>
                  <h3 className="display-serifish mt-2 text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.body}</p>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      {/* HorizontalPin 7-step process */}
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

      {/* NEW — Team portrait strip (no scroll anim, hover only) */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The people
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Architects, spec writers, installers.
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {TEAM.slice(0, 4).map((t) => (
              <div key={t.name} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-ink">
                  <img
                    src={t.photo}
                    alt={t.name}
                    className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                </div>
                <div className="mt-4">
                  <div className="text-base font-medium">{t.name}</div>
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft">
                    {t.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Engagement tiers */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Engagement
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Three ways to work with us.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TIERS.map((t) => (
              <Reveal key={t.name}>
                <div
                  className={`h-full rounded-2xl border p-8 md:p-10 ${
                    t.featured
                      ? "border-copper bg-ink text-canvas"
                      : "border-line/60 bg-canvas"
                  }`}
                >
                  <div className={`font-mono text-[0.62rem] uppercase tracking-[0.28em] ${t.featured ? "text-copper-light" : "text-copper"}`}>
                    {t.name}
                  </div>
                  <div className="display-serifish mt-6 text-3xl md:text-4xl">{t.price}</div>
                  <div className={`mt-2 text-sm ${t.featured ? "text-canvas/70" : "text-ink-soft"}`}>
                    {t.for}
                  </div>
                  <ul className={`mt-8 space-y-3 border-t pt-6 ${t.featured ? "border-canvas/20" : "border-line/60"}`}>
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <Check className={`mt-0.5 h-4 w-4 shrink-0 ${t.featured ? "text-copper-light" : "text-copper"}`} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Ready?"
        title="Book a 20-minute design consultation."
        href="/contact"
        cta="Start the call"
        tone="dark"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

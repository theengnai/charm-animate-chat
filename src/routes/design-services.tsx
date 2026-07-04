import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { SplitHeading } from "@/components/motion/SplitHeading";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { TEAM } from "@/data/team";
import { PROJECTS } from "@/data/projects";
import cover from "@/assets/about/hero-facade.jpg";

export const Route = createFileRoute("/design-services")({
  head: () => ({
    meta: [
      { title: "Design Services — Ecosmart" },
      { name: "description", content: "From concept to installation, engineered around your space. Consultation, curation, fabrication and installation supervision." },
      { property: "og:title", content: "Design Services — Ecosmart" },
      { property: "og:description", content: "From concept to installation, engineered around your space." },
      { property: "og:image", content: cover },
    ],
  }),
  component: DesignServicesPage,
});

const SERVICES = [
  { n: "01", t: "Space Consultation", p: "We start with the room, not the catalogue.", b: ["Site walkthrough", "Brief interrogation", "Palette starter"] },
  { n: "02", t: "Material Curation", p: "A shortlist that fits your budget, timeline and light.", b: ["Options with rationale", "Physical sample kit", "Spec-ready selection"] },
  { n: "03", t: "Custom Fabrication", p: "When the catalogue doesn't fit, we build to fit.", b: ["Custom finishes", "Bespoke sizing", "Prototype approval"] },
  { n: "04", t: "Installation Supervision", p: "We stay on site until the last panel clicks.", b: ["Method statements", "Toolbox talks", "Snag & sign-off"] },
];

const PROCESS = ["Brief", "Site Study", "Palette", "Prototype", "Production", "Install", "Handover"];

const TIERS = [
  { name: "Consult", tag: "Half-day", inc: ["Site visit", "Verbal recommendations", "3-material shortlist"] },
  { name: "Curate", tag: "2–4 weeks", inc: ["Full palette", "Sample kits", "Spec sheets", "Contractor briefing"] },
  { name: "Turnkey", tag: "Project-length", inc: ["End-to-end delivery", "Fabrication", "Install supervision", "Warranty package"] },
];

function DesignServicesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      {/* Dark hero */}
      <section className="relative flex min-h-[100vh] items-center justify-center overflow-hidden bg-ink px-6 pt-24 text-canvas md:px-10">
        <img src={cover} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/80 to-ink" />
        <div className="relative mx-auto max-w-5xl text-center">
          <Reveal y={20}>
            <span className="eyebrow text-copper-light">Design services</span>
          </Reveal>
          <SplitHeading
            text="From concept to installation, engineered around your space."
            className="display-serifish mt-8 text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-7xl"
          />
          <Reveal delay={0.3}>
            <div className="mx-auto mt-12 h-px w-32 bg-copper" />
            <p className="mx-auto mt-8 max-w-xl text-canvas/70">
              We work as a design partner, not a supplier. We start with the room and stay through the install.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section className="px-6 py-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">What we do</span>
            <h2 className="display-serifish mt-4 max-w-3xl text-4xl leading-[1.05] md:text-5xl">
              Four services. One team. One promise.
            </h2>
          </Reveal>
          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {SERVICES.map((s) => (
              <article
                key={s.n}
                data-reveal-item
                className="group rounded-3xl border border-line/60 bg-canvas p-8 transition-shadow hover:shadow-xl md:p-10"
              >
                <div className="flex items-baseline justify-between">
                  <span className="display-serifish text-5xl text-copper">{s.n}</span>
                  <ArrowRight className="h-4 w-4 text-ink-soft transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
                </div>
                <h3 className="display-serifish mt-6 text-2xl md:text-3xl">{s.t}</h3>
                <p className="mt-3 text-ink-soft">{s.p}</p>
                <ul className="mt-6 space-y-2 border-t border-line/60 pt-6 text-sm">
                  {s.b.map((x) => (
                    <li key={x} className="flex items-center gap-2 text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-copper" />
                      {x}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Process */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">The process</span>
            <h2 className="display-serifish mt-4 text-4xl md:text-5xl">Seven steps, one line.</h2>
          </Reveal>
          <div className="relative mt-16 overflow-x-auto pb-4">
            <div className="flex min-w-max items-start gap-12">
              {PROCESS.map((step, i) => (
                <div key={step} className="w-56 shrink-0">
                  <div className="flex items-center gap-3">
                    <span className="display-serifish text-3xl text-copper">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < PROCESS.length - 1 ? (
                      <div className="h-px flex-1 bg-copper/40" />
                    ) : null}
                  </div>
                  <h3 className="mt-4 text-xl font-medium">{step}</h3>
                  <p className="mt-2 text-sm text-ink-soft">
                    {["We interrogate the brief.", "We measure light, flow, sound.", "We shortlist materials.", "We prototype the surface.", "We produce with certainty.", "We supervise every square metre.", "We hand you a room, not a box."][i]}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case reel */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">See it in the wild</span>
            <h2 className="display-serifish mt-4 text-4xl md:text-5xl">Recent work.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {PROJECTS.slice(0, 3).map((p) => (
              <a
                key={p.slug}
                href="/projects"
                data-reveal-item
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl"
              >
                <img
                  src={p.cover}
                  alt={p.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-canvas">
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-canvas/70">
                    {p.sector} · {p.location}
                  </div>
                  <div className="mt-2 display-serifish text-2xl">{p.name}</div>
                </div>
              </a>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Team */}
      <section className="border-t border-line/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">The design team</span>
            <h2 className="display-serifish mt-4 text-4xl md:text-5xl">People, not personas.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-8 md:grid-cols-3" stagger={0.1}>
            {TEAM.map((m) => (
              <div key={m.name} data-reveal-item>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                </div>
                <h3 className="mt-4 text-xl font-medium">{m.name}</h3>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-copper">
                  {m.role}
                </div>
                <p className="mt-3 text-sm text-ink-soft">{m.bio}</p>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Tiers */}
      <section className="border-t border-line/60 bg-canvas-2/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">Engagements</span>
            <h2 className="display-serifish mt-4 text-4xl md:text-5xl">How we work together.</h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-6 md:grid-cols-3" stagger={0.08}>
            {TIERS.map((t, i) => (
              <div
                key={t.name}
                data-reveal-item
                className={`relative rounded-3xl border p-8 transition-shadow hover:shadow-xl ${
                  i === 1 ? "border-copper bg-copper/5" : "border-line/60 bg-canvas"
                }`}
              >
                <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-copper">
                  {t.tag}
                </div>
                <h3 className="display-serifish mt-3 text-3xl">{t.name}</h3>
                <ul className="mt-6 space-y-3 border-t border-line/60 pt-6 text-sm">
                  {t.inc.map((x) => (
                    <li key={x} className="flex items-center gap-2 text-ink-soft">
                      <span className="h-1 w-1 rounded-full bg-copper" />
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-medium hover:bg-ink hover:text-canvas"
                >
                  Request proposal
                </a>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        eyebrow="Ready?"
        title="Book a design consultation."
        href="/contact"
        cta="Start with a 20-minute call"
        tone="dark"
      />

      <SiteFooter />
    </div>
  );
}

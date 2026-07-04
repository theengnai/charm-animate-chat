import { createFileRoute } from "@tanstack/react-router";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { WordReveal } from "@/components/motion/WordReveal";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { Counter } from "@/components/motion/Counter";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-projects.jpg";
import p1 from "@/assets/about/sol-facade.jpg";
import p2 from "@/assets/about/sol-architect.jpg";
import p3 from "@/assets/about/sol-interior.jpg";
import p4 from "@/assets/about/detail-fabric.jpg";
import p5 from "@/assets/about/hero-facade.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Ecosmart" },
      { name: "description", content: "Selected façade, interior and outdoor projects delivered across the GCC — hospitality, residential, commercial and cultural." },
      { property: "og:title", content: "Projects — Ecosmart" },
      { property: "og:description", content: "Places that outlast their trends." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProjectsPage,
});

const STORIES = [
  { n: "01", tag: "Hospitality · Dubai", title: "Sunbeam Boutique Hotel", body: "A copper-veined façade wrapping a five-storey lobby — mocked up three times before we found the right shadow at 4 pm.", img: p1 },
  { n: "02", tag: "Residential · Riyadh", title: "Al Nakheel Villas", body: "24 villas, one palette. Warm oak WPC decking, brushed aluminium screens, and a single stone tone shared across every home.", img: p2 },
  { n: "03", tag: "Commercial · Doha", title: "West Bay HQ", body: "A ventilated rainscreen system tuned for coastal wind loads — installed floor-by-floor without ever closing the plaza below.", img: p3 },
  { n: "04", tag: "Cultural · AlUla", title: "Desert Pavilion", body: "A pergola and screen study for a heritage site — every fixing hidden, every panel field-adjustable to the sandstone ground.", img: p4 },
  { n: "05", tag: "Public · Abu Dhabi", title: "Corniche Boardwalk", body: "1.2 km of WPC decking that has survived four summers without warping, staining, or a single warranty claim.", img: p5 },
];

const SECTORS = [
  { t: "Hospitality", d: "Boutique hotels, restaurants and lounges where the material is part of the welcome." },
  { t: "Residential", d: "Private villas and multi-family towers where surfaces meet touch every day." },
  { t: "Commercial", d: "Workplaces, HQs and mixed-use towers where the façade carries the brand." },
  { t: "Cultural", d: "Museums, pavilions and heritage retrofits where every joint is scrutinised." },
  { t: "Public", d: "Corniches, parks and civic spaces where the material has to outlast politics." },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Selected work"
        title="Every façade tells a"
        emphasis="story."
        subcopy="180 projects across the GCC — from a single villa deck to a 40-storey rainscreen. Places we've specified, delivered, and stood beside."
        image={hero}
        primary={{ label: "Start a project", to: "/contact" }}
        secondary={{ label: "See our services", to: "/design-services" }}
      />

      <InfoStrip
        eyebrow="Portfolio"
        lead="We don't ship and forget. Every project below has a supervisor on site, a warranty on file, and a phone number we still answer six years later."
      />

      <StackingCards
        labelN="02"
        labelText="Signature stories"
        title="Five projects that"
        titleEm="shaped the way we work."
        description="A stack of the ones that taught us the most — about material, about site, about how a room becomes a place."
        items={STORIES}
        renderItem={(s) => (
          <article className="mx-auto w-full max-w-[22rem] overflow-hidden rounded-2xl border border-line/60 bg-canvas shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)] md:max-w-md">
            <div className="relative aspect-[5/3] overflow-hidden">
              <img src={s.img} alt={s.title} className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <div className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink backdrop-blur">
                {s.n} · {s.tag}
              </div>
            </div>
            <div className="p-6 md:p-8">
              <h3 className="display-serifish text-2xl leading-tight md:text-3xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
            </div>
          </article>
        )}
      />

      {/* Word reveal */}
      <section className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Portfolio ethos
          </div>
          <WordReveal text="We choose projects the way we choose materials — for how they age. A boutique hotel outside the tourist strip. A villa built for a family, not for the render. A public boardwalk that will be worn smooth by children we'll never meet." />
        </div>
      </section>

      <HorizontalPin
        eyebrow="Sectors we work in"
        title="Five rooms,"
        titleEm="one language."
        items={SECTORS}
        renderItem={(s, i) => (
          <article className="w-[80vw] max-w-[420px] rounded-3xl border border-line/60 bg-canvas p-8 md:p-10">
            <div className="display-serifish text-6xl text-copper">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="display-serifish mt-6 text-3xl">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.d}</p>
          </article>
        )}
      />

      <ParallaxSplit
        eyebrow="The site record"
        title="Six years,"
        titleEm="zero warranty claims."
        body="Every product we specify is tracked from batch to fixing. If it fails, we replace it and rewrite the detail. So far the file has stayed empty — and that's the number we're most proud of."
        image={p2}
        reverse
      />

      {/* Numbers band */}
      <section className="border-y border-line/60 bg-ink px-6 py-24 text-canvas md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-3">
          {[
            { l: "Projects delivered", v: 180, s: "+" },
            { l: "Countries served", v: 14, s: "" },
            { l: "Square metres installed", v: 0, s: "2.4M", isText: true },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="display-serifish text-5xl text-copper-light md:text-7xl">
                {s.isText ? s.s : <><Counter value={s.v} /><span>{s.s}</span></>}
              </div>
              <div className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTABand
        eyebrow="Have a project in mind?"
        title="Bring us in early — we do our best work with the room, not around it."
        href="/contact"
        cta="Start a conversation"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

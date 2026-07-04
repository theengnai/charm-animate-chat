import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ParallaxLayers } from "@/components/motion/ParallaxLayers";
import { Counter } from "@/components/motion/Counter";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-projects.jpg";
import featured from "@/assets/pages/projects-featured.jpg";
import band1 from "@/assets/pages/projects-band-1.jpg";
import band2 from "@/assets/pages/projects-band-2.jpg";
import band3 from "@/assets/pages/projects-band-3.jpg";
import p2 from "@/assets/about/sol-architect.jpg";
import p3 from "@/assets/about/sol-interior.jpg";
import p4 from "@/assets/about/detail-fabric.jpg";
import p5 from "@/assets/about/hero-facade.jpg";
import p1 from "@/assets/about/sol-facade.jpg";

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

const FEATURED = {
  tag: "Featured · Hospitality · Dubai",
  title: "Sunbeam Boutique Hotel",
  body: "A copper-veined façade wrapping a five-storey lobby — mocked up three times before we found the right shadow at 4 pm.",
  scope: "Ventilated rainscreen · Interior lobby · Signage backing",
  image: featured,
};

const PROJECTS = [
  { n: "01", tag: "Residential · Riyadh", title: "Al Nakheel Villas", body: "24 villas, one palette. Warm oak WPC decking, brushed aluminium screens, and a single stone tone shared across every home.", img: p2 },
  { n: "02", tag: "Commercial · Doha", title: "West Bay HQ", body: "A ventilated rainscreen system tuned for coastal wind loads — installed floor-by-floor without ever closing the plaza below.", img: p3 },
  { n: "03", tag: "Cultural · AlUla", title: "Desert Pavilion", body: "A pergola and screen study for a heritage site — every fixing hidden, every panel field-adjustable to the sandstone ground.", img: p4 },
  { n: "04", tag: "Public · Abu Dhabi", title: "Corniche Boardwalk", body: "1.2 km of WPC decking that has survived four summers without warping, staining, or a single warranty claim.", img: p5 },
  { n: "05", tag: "F&B · Jeddah", title: "Sea Club Cabanas", body: "Pool deck, cabanas and privacy screens — a single palette that reads calm in daylight and warm at night.", img: p1 },
  { n: "06", tag: "Retail · Kuwait", title: "Linen House Flagship", body: "Storefront and interior in the same slatted oak system — the same wall from street to fitting room.", img: p2 },
];

const LOGOS = ["Studio Nara", "Alserkal", "West Bay Group", "AlUla Trust", "Corniche Authority", "Sea Club", "Linen House", "Beit Al Qasr", "Atrium", "Olive"];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Selected work"
        title="Every façade tells a"
        emphasis="story."
        subcopy="180 projects across the GCC — from a single villa deck to a 40-storey rainscreen. Places we've specified, delivered and stood beside."
        image={hero}
        primary={{ label: "Start a project", to: "/contact" }}
        secondary={{ label: "See our services", to: "/design-services" }}
      />

      {/* Featured — fixed-background hero band */}
      <section
        className="relative min-h-[95vh] w-full bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${FEATURED.image})` }}
        aria-label={FEATURED.title}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-ink/50 via-ink/40 to-ink/80" />
        <div className="relative z-10 flex min-h-[95vh] items-end px-5 pb-20 md:px-10 md:pb-28">
          <div className="mx-auto max-w-4xl text-center text-canvas">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
              {FEATURED.tag}
            </div>
            <h2 className="display-serifish mt-6 text-4xl leading-tight md:text-7xl">
              {FEATURED.title}
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-canvas/80">
              {FEATURED.body}
            </p>
            <div className="mt-6 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">
              {FEATURED.scope}
            </div>
          </div>
        </div>
      </section>

      {/* Signature series — three fixed-bg bands */}
      {[
        { img: band1, tag: "Hospitality · Lobby", title: "A quiet lobby, five storeys tall.", body: "Slatted oak, warm lighting and a floor that returns silence to the room." },
        { img: band2, tag: "Residential · Villa", title: "A deck that watches the sunset.", body: "WPC boards laid to the sea line, no cupping after four summers." },
        { img: band3, tag: "Cultural · Pavilion", title: "A screen the desert draws on.", body: "Perforated aluminium, hidden fixings, sand-adjustable panels." },
      ].map((b) => (
        <section
          key={b.title}
          className="relative min-h-[90vh] w-full bg-cover bg-fixed bg-center"
          style={{ backgroundImage: `url(${b.img})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/70" />
          <div className="relative z-10 flex min-h-[90vh] items-end px-5 pb-20 md:px-10 md:pb-28">
            <div className="mx-auto max-w-4xl text-canvas">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
                {b.tag}
              </div>
              <h3 className="display-serifish mt-5 text-3xl leading-tight md:text-6xl">
                {b.title}
              </h3>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-canvas/80">
                {b.body}
              </p>
            </div>
          </div>
        </section>
      ))}

      {/* ParallaxLayers sector intro */}
      <ParallaxLayers bg={p3} height="min-h-[70vh]">
        <div className="flex h-full items-center px-5 md:px-10">
          <div className="mx-auto max-w-4xl text-canvas">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
              Sectors
            </div>
            <h2 className="display-serifish mt-6 text-4xl leading-[1.05] md:text-7xl">
              Hospitality. Residential. Retail. Cultural. Commercial. Public.
            </h2>
            <p className="mt-8 max-w-2xl text-canvas/80">
              Six rooms, one language. The same specification discipline whether we're wrapping a five-star lobby or a boardwalk you cycle past on Sunday.
            </p>
          </div>
        </div>
      </ParallaxLayers>

      {/* Project index — ClipReveal cards */}
      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                Project index
              </div>
              <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
                A slower browse.
              </h2>
            </div>
            <Link
              to="/contact"
              className="font-mono text-xs uppercase tracking-[0.22em] text-ink-soft underline-offset-4 hover:text-copper hover:underline"
            >
              Request the full portfolio →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-12">
            {PROJECTS.map((p, i) => (
              <article key={p.n} className={i % 3 === 0 ? "md:col-span-2" : ""}>
                <ClipReveal
                  direction={i % 2 === 0 ? "up" : "down"}
                  className="relative aspect-[16/10] overflow-hidden rounded-2xl"
                >
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                </ClipReveal>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <div>
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                      {p.n} · {p.tag}
                    </div>
                    <h3 className="display-serifish mt-2 text-2xl md:text-3xl">{p.title}</h3>
                    <p className="mt-3 max-w-xl text-sm text-ink-soft">{p.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — By the numbers */}
      <section className="border-y border-line/60 bg-ink px-6 py-24 text-canvas md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-4">
          {[
            { v: 180, s: "+", l: "Projects delivered" },
            { v: 14, s: "", l: "Countries served" },
            { v: 6, s: "", l: "Sectors covered" },
            { v: 12, s: " yr", l: "In business" },
          ].map((k) => (
            <div key={k.l}>
              <div className="display-serifish text-5xl text-copper-light md:text-7xl">
                <Counter value={k.v} suffix={k.s} />
              </div>
              <div className="mt-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">
                {k.l}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* NEW — Client logo marquee */}
      <section className="relative overflow-hidden py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-10">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
            Trusted by studios, developers and public offices across the GCC
          </div>
        </div>
        <div className="mt-8 flex gap-10 animate-[marquee_45s_linear_infinite] hover:[animation-play-state:paused]">
          {[...LOGOS, ...LOGOS].map((l, i) => (
            <div
              key={i}
              className="grid h-20 w-56 shrink-0 place-items-center rounded-lg border border-line/60 bg-canvas font-mono text-xs uppercase tracking-[0.22em] text-ink"
            >
              {l}
            </div>
          ))}
        </div>
        <style>{`@keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }`}</style>
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

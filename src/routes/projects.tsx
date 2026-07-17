import { createFileRoute, Link } from "@tanstack/react-router";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { ClipReveal } from "@/components/motion/ClipReveal";
import { ParallaxLayers } from "@/components/motion/ParallaxLayers";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-projects.jpg";
import p1 from "@/assets/about/sol-facade.jpg";
import p2 from "@/assets/about/sol-architect.jpg";
import p3 from "@/assets/about/sol-interior.jpg";
import p4 from "@/assets/about/detail-fabric.jpg";
import p5 from "@/assets/about/hero-facade.jpg";
import p6 from "@/assets/about/sol-facade.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Applications — EcoSmart" },
      { name: "description", content: "Where EcoSmart's construction systems and finishing products are used — residential, commercial, hospitality, remote sites. Project references shared on request." },
      { property: "og:title", content: "Applications — EcoSmart" },
      { property: "og:description", content: "Where our systems are used." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ProjectsPage,
});

const APPLICATIONS = [
  {
    n: "01",
    tag: "Construction Systems · Residential",
    title: "Hybrid Precast Residential",
    body: "Precast columns, beams and stairs framed with lightweight concrete wall panels and T-floor hourdi decks — a full residential frame with integral thermal and acoustic performance.",
    img: p2,
  },
  {
    n: "02",
    tag: "Construction Systems · Remote sites",
    title: "Insulated Portable Cabins",
    body: "Ready-to-use insulated cabins for site offices, accommodation, guard houses, clinics and amenity units — delivered as finished units, set on prepared foundations.",
    img: p3,
  },
  {
    n: "03",
    tag: "Construction Systems · Architectural",
    title: "Curved Modular Buildings",
    body: "Volumetric modular units including curved-angle geometries — allowing architectural forms that standard modular cannot achieve.",
    img: p4,
  },
  {
    n: "04",
    tag: "Construction Systems · Façade",
    title: "EPS Insulated Decorative Façades",
    body: "Shaped EPS cornices, bands and decorative profiles bonded to the substrate and finished with a reinforced render and decorative coating — architectural detail with external insulation.",
    img: p5,
  },
  {
    n: "05",
    tag: "Finishing · Interior + Exterior",
    title: "Flexible Clay-Stone Wraps",
    body: "Continuous wraps of columns, curves and corners with our flexible clay-stone tile — 100% Saudi-made, the only manufacturer in KSA.",
    img: p1,
  },
  {
    n: "06",
    tag: "Finishing · Interior",
    title: "WPC & SPC Interiors",
    body: "WPC door leaves and frames in humidity-prone areas, SPC click flooring in residential and commercial fit-outs, PVC marble sheets and PVC wood panels for wall applications.",
    img: p6,
  },
];

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Applications"
        title="Where our systems"
        emphasis="are used."
        subcopy="EcoSmart's construction systems and finishing products across residential, commercial, hospitality and remote-site deployments in Saudi Arabia."
        image={hero}
        primary={{ label: "Request project references", to: "/contact" }}
        secondary={{ label: "See the products", to: "/products" }}
      />

      <ParallaxLayers bg={p3} height="min-h-[70vh]">
        <div className="flex h-full items-center px-5 md:px-10">
          <div className="mx-auto max-w-4xl text-canvas">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
              How to read this page
            </div>
            <h2 className="display-serifish mt-6 text-3xl leading-[1.05] md:text-6xl">
              Applications, not case studies.
            </h2>
            <p className="mt-8 max-w-2xl text-canvas/80">
              This page describes the typical applications of our systems and finishing products. Specific project references — names, locations, photography — are shared on request and, where required, under NDA.
            </p>
          </div>
        </div>
      </ParallaxLayers>

      <section className="px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                Six applications
              </div>
              <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
                What we've been building.
              </h2>
            </div>
            <Link
              to="/contact"
              className="font-mono text-xs uppercase tracking-[0.22em] text-ink-soft underline-offset-4 hover:text-copper hover:underline"
            >
              Request project references →
            </Link>
          </div>
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:gap-12">
            {APPLICATIONS.map((p, i) => (
              <article key={p.n} className={i % 3 === 0 ? "md:col-span-2" : ""}>
                <ClipReveal
                  direction={i % 2 === 0 ? "up" : "down"}
                  className="relative aspect-[16/10] overflow-hidden"
                >
                  <img src={p.img} alt={p.title} className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]" />
                </ClipReveal>
                <div className="mt-5">
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                    {p.n} · {p.tag}
                  </div>
                  <h3 className="display-serifish mt-2 text-2xl md:text-3xl">{p.title}</h3>
                  <p className="mt-3 max-w-xl text-sm text-ink-soft">{p.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Have a project in mind?"
        title="Send us the brief — we'll match the right systems and share references."
        href="/contact"
        cta="Start a conversation"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

import { useState } from "react";
import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";

import { ScaleIn } from "@/components/motion/ScaleIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAMILIES, productsByFamily, PU_LIFESTYLE, type Product } from "@/data/products";
import { Feather, Wrench, Layers, Shield, Sparkles } from "lucide-react";

const FAMILY_SLUGS: Record<string, Product["family"]> = {
  mcm: "MCM",
  pu: "PU",
  wpc: "WPC",
  spc: "SPC",
  aluminium: "Aluminium",
  panels: "Panels",
};

export const Route = createFileRoute("/products/$family/")({
  loader: ({ params }) => {
    const key = FAMILY_SLUGS[params.family.toLowerCase()];
    if (!key) throw notFound();
    const family = FAMILIES.find((f) => f.key === key)!;
    const items = productsByFamily(key);
    return { family, items, slug: params.family.toLowerCase() };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Category not found — Ecosmart" }, { name: "robots", content: "noindex" }] };
    }
    const { family } = loaderData;
    return {
      meta: [
        { title: `${family.name} — Ecosmart` },
        { name: "description", content: family.poem },
        { property: "og:title", content: `${family.name} — Ecosmart` },
        { property: "og:description", content: family.poem },
        { property: "og:image", content: family.cover },
      ],
    };
  },
  component: FamilyPage,
  errorComponent: FamilyError,
  notFoundComponent: () => (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 py-40 text-center">
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">404</div>
        <h1 className="display-serifish mt-6 text-4xl md:text-6xl">Category not found</h1>
        <Link to="/products" className="mt-10 inline-flex items-center gap-2 text-sm text-copper hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
      </div>
    </div>
  ),
});

function FamilyError({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 py-40 text-center">
        <h1 className="display-serifish text-3xl md:text-5xl">Something went wrong</h1>
        <p className="mt-4 text-ink-soft">{error.message}</p>
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas"
        >
          Retry
        </button>
      </div>
    </div>
  );
}

type FilterKey = "All" | "Interior" | "Exterior" | "Both";
const FILTERS: FilterKey[] = ["All", "Interior", "Exterior", "Both"];

function FamilyPage() {
  const { family, items, slug } = Route.useLoaderData() as { family: typeof FAMILIES[number]; items: Product[]; slug: string };
  const [filter, setFilter] = useState<FilterKey>("All");
  const filtered = filter === "All" ? items : items.filter((p) => p.application === filter);

  return (
    <div className="min-h-screen overflow-x-clip bg-canvas text-ink">

      <TopBar />

      {/* Hero — compact */}
      <section className="relative flex min-h-[45vh] items-center overflow-hidden px-5 pt-32 pb-12 md:px-10">
        <img src={family.cover} alt="" className="animate-hero-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85" />
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <Link to="/products" className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/70 hover:text-canvas">
            <ArrowLeft className="h-3 w-3" /> All products
          </Link>
          <h1 className="display-serifish mt-6 text-4xl leading-[1.02] tracking-tight text-canvas sm:text-5xl md:text-6xl">
            {family.name}
          </h1>
          <p className="mt-4 max-w-xl text-base italic text-canvas/80 md:text-lg">{family.poem}</p>
          <div className="mt-3 font-mono text-xs uppercase tracking-[0.2em] text-canvas/60">
            {items.length} products in this family
          </div>
        </div>
      </section>

      {/* Filter row */}
      <section className="border-t border-line/60 bg-canvas-2/60 px-5 py-6 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-2">
          <span className="mr-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">Filter</span>
          {FILTERS.map((f) => {
            const active = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium tracking-wide transition-colors ${
                  active
                    ? "border-ink bg-ink text-canvas"
                    : "border-line/60 bg-canvas text-ink-soft hover:border-copper/60 hover:text-ink"
                }`}
              >
                {f}
              </button>
            );
          })}
          <span className="ml-auto font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
            Showing {filtered.length} of {items.length}
          </span>
        </div>
      </section>

      {family.key === "PU" ? <PUIntro /> : null}

      {/* Product grid — dense */}
      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((p, i) => (
              <ScaleIn key={p.slug} delay={Math.min(i, 8) * 0.04}>
                <Link
                  to="/products/$family/$slug"
                  params={{ family: slug, slug: p.slug }}
                  className="group block overflow-hidden rounded-xl border border-line/60 bg-canvas transition-all hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_18px_50px_-22px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    {p.cover ? (
                      <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    ) : (
                      <div
                        className="flex h-full w-full flex-col justify-between p-4 transition-transform duration-[1200ms] group-hover:scale-105"
                        style={{ backgroundColor: p.colors[0] ?? "#c9b39a" }}
                      >
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-canvas/85 mix-blend-difference">{p.code}</span>
                        <span className="display-serifish text-2xl leading-tight text-canvas mix-blend-difference">{p.name}</span>
                      </div>
                    )}
                    {p.details ? (
                      <span className="absolute left-3 top-3 rounded-full bg-copper/95 px-2 py-0.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-canvas">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <div className="p-4">
                    <div className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-copper">{p.code}</div>
                    <h3 className="display-serifish mt-2 text-lg leading-tight">{p.name}</h3>
                    <div className="mt-1.5 flex flex-wrap gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink-soft">
                      <span>{p.application}</span>
                      <span>·</span>
                      <span>{p.finish}</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between gap-2">
                      <div className="flex min-w-0 flex-wrap gap-1">
                        {p.colors.slice(0, 6).map((c) => (
                          <span key={c} className="h-3 w-3 shrink-0 rounded-full border border-line/60 sm:h-4 sm:w-4" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <ArrowRight className="h-4 w-4 shrink-0 text-copper transition-transform group-hover:translate-x-1" />
                    </div>

                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p className="mt-10 text-center text-ink-soft">No products match this filter.</p>
          ) : null}
        </div>
      </section>

      {family.key === "PU" ? <PUDetails /> : null}

      <CTABand
        eyebrow="Not sure which fits?"
        title="Request a sample — we'll send it from Sudair."
        href="/samples"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

/* ============================================================
   PU Stone — enrichment sections
   Content sourced from EcoSmart PU Stone Cladding brief.
   ============================================================ */

const PU_ADVANTAGES = [
  {
    icon: Feather,
    title: "Lightweight design",
    body: "Engineered for effortless handling and reduced structural load. Up to 75% lighter than natural stone — simpler to ship, easier to hang, gentler on the wall behind it.",
  },
  {
    icon: Wrench,
    title: "Easy installation",
    body: "Intuitive interlocking edges. No specialist masonry — cut, fit and secure with standard tools. Installs up to 3× faster than traditional stone.",
  },
  {
    icon: Sparkles,
    title: "Authentic appearance",
    body: "Advanced molding captures every texture and tonal variation of quarried stone — grain, fracture, weathering — in warm tones that flatter contemporary architecture.",
  },
];

const PU_SPECS: [string, string][] = [
  ["Material", "Polyurethane composite"],
  ["Panel size", "1200 × 600 × 50 mm"],
  ["Weight", "3.5 – 5.2 kg/m²"],
  ["Fire rating", "Class B1 · ASTM E84 tested"],
  ["Weather range", "−40 °C to 60 °C · UV & moisture stable"],
  ["Coverage", "≈ 0.72 m² per panel"],
  ["Installation", "Direct adhesive mount + interlocking edges"],
  ["Standard", "ASTM E84 · certificate on request"],
];

const PU_STEPS = [
  { n: "01", title: "Surface prep", body: "Clean and level the wall. Prime porous substrates for optimal adhesion." },
  { n: "02", title: "Apply adhesive", body: "Spread PU adhesive evenly on the back of each panel with a notched trowel." },
  { n: "03", title: "Position panels", body: "Press panels firmly from the bottom up. Use spacers for consistent joints." },
  { n: "04", title: "Finish & seal", body: "Fill joints with colour-matched sealant. Apply protective coating for lasting results." },
];

function PUIntro() {
  return (
    <>
      {/* Vision */}
      <section className="border-t border-line/60 bg-canvas px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">Our vision</div>
            <h2 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
              Stone, reimagined for how buildings are built today.
            </h2>
          </div>
          <div className="space-y-5 text-base leading-relaxed text-ink-soft md:text-lg">
            <p>
              We engineer lightweight stone systems that carry the timeless beauty of quarried stone
              without its structural weight — opening bold design possibilities for walls that could
              never otherwise hold it.
            </p>
            <p>
              Every panel is molded from real stone masters and finished for residential, commercial
              and hospitality environments — sophisticated aesthetics, simplified installation,
              enduring performance.
            </p>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="border-t border-line/60 bg-canvas-2/60 px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 md:mb-16">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">Key advantages</div>
            <h2 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
              Engineered for modern architecture.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {PU_ADVANTAGES.map((a) => {
              const Icon = a.icon;
              return (
                <div key={a.title} className="rounded-2xl border border-line/60 bg-canvas p-7 md:p-8">
                  <Icon className="h-6 w-6 text-copper" strokeWidth={1.4} />
                  <h3 className="display-serifish mt-5 text-xl md:text-2xl">{a.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{a.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>


      {/* Section heading before the grid */}
      <section className="border-t border-line/60 bg-canvas px-5 pt-16 md:px-10 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">The catalog</div>
          <h2 className="display-serifish mt-3 text-3xl leading-tight md:text-5xl">
            Textures, tones & patterns.
          </h2>
          <p className="mt-4 max-w-2xl text-ink-soft md:text-lg">
            Twenty-three finishes — split-face stone, warm brick, sandstone and sculpted 3D panels —
            all in the same lightweight PU system.
          </p>
        </div>
      </section>
    </>
  );
}

function PUDetails() {
  return (
    <>
      {/* PU vs Traditional */}
      <section className="border-t border-line/60 bg-ink px-5 py-24 text-canvas md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">Comparison</div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl leading-tight md:text-5xl">
            PU Stone vs. traditional stone.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
            <div className="rounded-2xl border border-canvas/15 bg-canvas/5 p-8">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">PU Stone</div>
              <h3 className="display-serifish mt-3 text-2xl md:text-3xl">Lightweight. Quick. Precise.</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-canvas/80 md:text-base">
                <li>• 3.5 – 5.2 kg/m² — up to 75% lighter than natural stone</li>
                <li>• Installs up to 3× faster with standard tools</li>
                <li>• Interlocking edges — consistent joints, no chipping</li>
                <li>• UV stable, moisture resistant, −40 °C to 60 °C rated</li>
              </ul>
            </div>
            <div className="rounded-2xl border border-canvas/15 bg-canvas/[0.02] p-8">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/50">Traditional stone</div>
              <h3 className="display-serifish mt-3 text-2xl md:text-3xl text-canvas/70">Heavy. Slow. Skilled trades only.</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-canvas/60 md:text-base">
                <li>• 40 – 80 kg/m² — structural load & lifting equipment</li>
                <li>• Specialist masonry, longer programme, more waste</li>
                <li>• Uneven joints, mortar staining, breakage in transit</li>
                <li>• Long lead times on quarried batches</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="border-t border-line/60 bg-canvas px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">Specification</div>
            <h2 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
              PU Stone Cladding
            </h2>
            <p className="mt-5 text-ink-soft md:text-lg">
              A shared technical envelope across the range — issued against test certificate on request.
            </p>
            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-line/60 px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
              <Shield className="h-3.5 w-3.5 text-copper" /> Class B1 · ASTM E84
            </div>
          </div>
          <div className="divide-y divide-line/50 rounded-2xl border border-line/60 bg-canvas-2/40">
            {PU_SPECS.map(([k, v]) => (
              <div key={k} className="flex items-baseline justify-between gap-6 px-6 py-4 md:px-7 md:py-5">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">{k}</span>
                <span className="text-right text-sm text-ink md:text-base">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="border-t border-line/60 bg-canvas-2/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">Installation</div>
            <h2 className="display-serifish mt-4 text-3xl leading-tight md:text-5xl">
              Four simple steps.
            </h2>
            <p className="mt-4 text-ink-soft md:text-lg">
              A straightforward direct-mount system — no wet trades, no specialist crew.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-4 md:gap-6">
            {PU_STEPS.map((s) => (
              <div key={s.n} className="rounded-2xl border border-line/60 bg-canvas p-6 md:p-7">
                <div className="font-mono text-3xl font-light text-copper md:text-4xl">{s.n}</div>
                <div className="mt-4 flex items-center gap-2">
                  <Layers className="h-4 w-4 text-ink-soft" strokeWidth={1.4} />
                  <h3 className="display-serifish text-lg md:text-xl">{s.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

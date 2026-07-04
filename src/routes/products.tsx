import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Filter, Layers } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PageHero } from "@/components/common/PageHero";
import { CTABand } from "@/components/common/CTABand";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { Counter } from "@/components/motion/Counter";
import { FAMILIES, PRODUCTS, type Product } from "@/data/products";
import cover from "@/assets/section-materials.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products Library — Ecosmart" },
      { name: "description", content: "Materials engineered for the way buildings actually live. Explore WPC, SPC, aluminium and panel systems." },
      { property: "og:title", content: "Products Library — Ecosmart" },
      { property: "og:description", content: "Materials engineered for the way buildings actually live." },
      { property: "og:image", content: cover },
    ],
  }),
  component: ProductsPage,
});

const APPLICATIONS = ["All", "Interior", "Exterior", "Both"] as const;

function ProductsPage() {
  const [family, setFamily] = useState<string>("All");
  const [app, setApp] = useState<(typeof APPLICATIONS)[number]>("All");

  const filtered = useMemo(
    () =>
      PRODUCTS.filter(
        (p) =>
          (family === "All" || p.family === family) &&
          (app === "All" || p.application === app),
      ),
    [family, app],
  );

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <PageHero
        eyebrow="The Library · 06 Families · 148 SKUs"
        title="Materials engineered for the way buildings actually live."
        subcopy="A curated catalogue of façade, floor, wall and screen systems — chosen for how they age, install, and hold up in the GCC climate."
        right={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img src={cover} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>
        }
      />

      {/* Stat strip */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
          {[
            { l: "Families", v: 6 },
            { l: "SKUs", v: 148 },
            { l: "Finishes", v: 42 },
            { l: "Certifications", v: 9 },
          ].map((s) => (
            <Reveal key={s.l} className="text-center md:text-left">
              <div className="display-serifish text-5xl text-copper md:text-6xl">
                <Counter value={s.v} format="pad2" />
              </div>
              <div className="mt-2 eyebrow text-ink-soft">{s.l}</div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Family index */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">The families</span>
            <h2 className="display-serifish mt-4 max-w-3xl text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Six ways to specify a room.
            </h2>
          </Reveal>
          <RevealGroup className="mt-16 grid gap-6 md:grid-cols-2" stagger={0.1}>
            {FAMILIES.map((f, i) => (
              <button
                key={f.key}
                data-reveal-item
                onClick={() => setFamily(f.key)}
                className="group relative aspect-[5/4] overflow-hidden rounded-3xl border border-line/60 text-left"
              >
                <img
                  src={f.cover}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-canvas">
                  <div className="font-mono text-[0.65rem] uppercase tracking-[0.22em] text-canvas/80">
                    0{i + 1} — {f.key}
                  </div>
                  <div>
                    <h3 className="display-serifish text-3xl md:text-4xl">{f.name}</h3>
                    <p className="mt-2 max-w-md text-sm text-canvas/80">{f.poem}</p>
                    <div className="mt-6 inline-flex items-center gap-2 text-sm">
                      Enter family <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Filter + grid */}
      <section className="border-t border-line/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="sticky top-24 z-10 -mx-6 mb-10 flex flex-wrap items-center gap-3 border-y border-line/60 bg-canvas/90 px-6 py-5 backdrop-blur md:mx-0 md:rounded-2xl md:border md:px-6">
            <Filter className="h-4 w-4 text-ink-soft" />
            <span className="mr-2 eyebrow text-ink-soft">Family</span>
            {["All", ...FAMILIES.map((f) => f.key)].map((k) => (
              <button
                key={k}
                onClick={() => setFamily(k)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  family === k
                    ? "border-copper bg-copper text-canvas"
                    : "border-line hover:border-ink"
                }`}
              >
                {k}
              </button>
            ))}
            <span className="mx-2 h-4 w-px bg-line" />
            <span className="mr-2 eyebrow text-ink-soft">Use</span>
            {APPLICATIONS.map((k) => (
              <button
                key={k}
                onClick={() => setApp(k)}
                className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                  app === k
                    ? "border-ink bg-ink text-canvas"
                    : "border-line hover:border-ink"
                }`}
              >
                {k}
              </button>
            ))}
            <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
              {filtered.length} results
            </span>
          </div>

          <RevealGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.05}>
            {filtered.map((p) => (
              <ProductCard key={p.slug} p={p} />
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        eyebrow="Not sure which fits?"
        title="Book a 20-minute material consult with our design team."
        href="/design-services"
        cta="Explore design services"
      />

      <SiteFooter />
    </div>
  );
}

function ProductCard({ p }: { p: Product }) {
  return (
    <article
      data-reveal-item
      className="group relative overflow-hidden rounded-3xl border border-line/60 bg-canvas transition-shadow hover:shadow-xl"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={p.cover}
          alt={p.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink backdrop-blur">
          {p.family}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="display-serifish text-xl">{p.name}</h3>
            <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
              {p.code} · {p.finish} · {p.fireRating}
            </div>
          </div>
          <div className="flex gap-1">
            {p.colors.map((c) => (
              <span
                key={c}
                className="h-4 w-4 rounded-full border border-ink/10"
                style={{ background: c }}
              />
            ))}
          </div>
        </div>
        <p className="mt-4 text-sm text-ink-soft">{p.poem}</p>
        <div className="mt-6 flex items-center justify-between">
          <button className="inline-flex items-center gap-2 text-sm font-medium text-ink hover:text-copper">
            View <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1.5 text-xs hover:border-copper hover:text-copper">
            <Layers className="h-3 w-3" /> Add to kit
          </button>
        </div>
      </div>
    </article>
  );
}

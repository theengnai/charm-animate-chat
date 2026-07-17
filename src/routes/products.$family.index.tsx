import { useState } from "react";
import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";

import { ScaleIn } from "@/components/motion/ScaleIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAMILIES, productsByFamily, type Product } from "@/data/products";

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
    <div className="min-h-screen bg-canvas text-ink">
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
                        style={{ background: `linear-gradient(135deg, ${p.colors[0] ?? "#c9b39a"} 0%, ${p.colors[1] ?? p.colors[0] ?? "#8a7a68"} 100%)` }}
                      >
                        <span className="font-mono text-[0.55rem] uppercase tracking-[0.22em] text-canvas/80">{p.code}</span>
                        <span className="display-serifish text-2xl leading-tight text-canvas drop-shadow-sm">{p.name}</span>
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
                    <div className="mt-3 flex items-center justify-between">
                      <div className="flex gap-1">
                        {p.colors.map((c) => (
                          <span key={c} className="h-4 w-4 rounded-full border border-line/60" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
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

import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { BlurFocus } from "@/components/motion/BlurFocus";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAMILIES, PRODUCTS, productsByFamily, type Product } from "@/data/products";

const FAMILY_SLUGS: Record<string, Product["family"]> = {
  wpc: "WPC",
  spc: "SPC",
  aluminium: "Aluminium",
  panels: "Panels",
};

export const Route = createFileRoute("/products/$family")({
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

function FamilyPage() {
  const { family, items, slug } = Route.useLoaderData();

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden px-5 pt-32 pb-16 md:px-10">
        <img src={family.cover} alt="" className="animate-hero-kenburns absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/85" />
        <div className="relative z-10 mx-auto w-full max-w-6xl">
          <Link to="/products" className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/70 hover:text-canvas">
            <ArrowLeft className="h-3 w-3" /> All products
          </Link>
          <h1 className="display-serifish mt-6 text-4xl leading-[1.02] tracking-tight text-canvas sm:text-5xl md:text-6xl lg:text-7xl">
            {family.name}
          </h1>
          <p className="mt-6 max-w-xl text-base italic text-canvas/80 md:text-lg">{family.poem}</p>
          <div className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-canvas/60">
            {items.length} product{items.length === 1 ? "" : "s"} in this family
          </div>
        </div>
      </section>

      {/* Product grid */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">The collection</div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Every finish, in stock or on request.
          </h2>

          <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((p, i) => (
              <ScaleIn key={p.slug} delay={i * 0.05}>
                <Link
                  to="/products/$family/$slug"
                  params={{ family: slug, slug: p.slug }}
                  className="group block overflow-hidden rounded-2xl border border-line/60 bg-canvas transition-all hover:-translate-y-1 hover:border-copper/50 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)]"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                  </div>
                  <div className="p-6">
                    <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">{p.code}</div>
                    <h3 className="display-serifish mt-3 text-2xl leading-tight">{p.name}</h3>
                    <p className="mt-2 text-sm italic text-ink-soft">{p.poem}</p>
                    <div className="mt-5 flex items-center justify-between">
                      <div className="flex gap-1.5">
                        {p.colors.map((c) => (
                          <span key={c} className="h-5 w-5 rounded-full border border-line/60" style={{ backgroundColor: c }} />
                        ))}
                      </div>
                      <ArrowRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </ScaleIn>
            ))}
          </div>

          {items.length === 0 ? (
            <p className="mt-10 text-center text-ink-soft">No products in this family yet.</p>
          ) : null}
        </div>
      </section>

      <CTABand
        eyebrow="Not sure which fits?"
        title="Order a curated eight-chip kit — free within the UAE."
        href="/samples"
        cta="Request a kit"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

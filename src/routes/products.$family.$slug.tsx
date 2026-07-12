import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { BlurFocus } from "@/components/motion/BlurFocus";
import { AlternatingSlide } from "@/components/motion/AlternatingSlide";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { FAMILIES, PRODUCTS, productsByFamily, type Product } from "@/data/products";

const FAMILY_SLUGS: Record<string, Product["family"]> = {
  mcm: "MCM",
  wpc: "WPC",
  spc: "SPC",
  aluminium: "Aluminium",
  panels: "Panels",
};

type LoaderData = {
  product: Product;
  family: typeof FAMILIES[number];
  related: Product[];
  familySlug: string;
};

export const Route = createFileRoute("/products/$family/$slug")({
  loader: ({ params }): LoaderData => {
    const familyKey = FAMILY_SLUGS[params.family.toLowerCase()];
    if (!familyKey) throw notFound();
    const product = PRODUCTS.find((p) => p.slug === params.slug);
    if (!product || product.family !== familyKey) throw notFound();
    const family = FAMILIES.find((f) => f.key === familyKey)!;
    const related = productsByFamily(familyKey).filter((p) => p.slug !== product.slug).slice(0, 3);
    return { product, family, related, familySlug: params.family.toLowerCase() };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Product not found — Ecosmart" }, { name: "robots", content: "noindex" }] };
    }
    const { product, family } = loaderData;
    const title = `${product.name} — ${family.name} — Ecosmart`;
    return {
      meta: [
        { title },
        { name: "description", content: `${product.poem} ${product.code} · ${product.finish} finish · fire class ${product.fireRating}.` },
        { property: "og:title", content: title },
        { property: "og:description", content: product.poem },
        { property: "og:image", content: product.cover },
      ],
    };
  },
  component: ProductPage,
  errorComponent: ({ error, reset }) => {
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
  },
  notFoundComponent: () => (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />
      <div className="mx-auto max-w-3xl px-5 py-40 text-center">
        <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">404</div>
        <h1 className="display-serifish mt-6 text-4xl md:text-6xl">Product not found</h1>
        <Link to="/products" className="mt-10 inline-flex items-center gap-2 text-sm text-copper hover:underline">
          <ArrowLeft className="h-4 w-4" /> Back to products
        </Link>
      </div>
    </div>
  ),
});

function ProductPage() {
  const { product, family, related, familySlug } = Route.useLoaderData() as LoaderData;

  const baseSpecs: [string, string][] = [
    ["Code", product.code],
    ["Family", family.name],
    ["Application", product.application],
    ["Finish", product.finish],
    ["Fire rating", product.fireRating],
  ];
  const specs: [string, string][] = product.details
    ? [...baseSpecs, ...product.details.specs]
    : baseSpecs;

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      {/* Hero */}
      <section className="px-5 pt-32 pb-16 md:px-10 md:pt-40">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/products/$family"
            params={{ family: familySlug }}
            className="inline-flex items-center gap-2 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft hover:text-copper"
          >
            <ArrowLeft className="h-3 w-3" /> Back to {family.name}
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <BlurFocus className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={product.cover} alt={product.name} className="h-full w-full object-cover" />
              {product.details ? (
                <span className="absolute left-4 top-4 rounded-full bg-copper/95 px-3 py-1 font-mono text-[0.58rem] uppercase tracking-[0.24em] text-canvas">
                  Featured product
                </span>
              ) : null}
            </BlurFocus>

            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                {product.code}
              </div>
              <h1 className="display-serifish mt-4 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                {product.name}
              </h1>
              <p className="mt-6 text-lg italic text-ink-soft">{product.poem}</p>
              {product.price !== undefined ? (
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="display-serifish text-3xl text-copper md:text-4xl">SAR {product.price}</span>
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">per m²</span>
                </div>
              ) : null}

              {product.details ? (
                <p className="mt-6 text-base leading-relaxed text-ink/85">
                  {product.details.description}
                </p>
              ) : null}

              <div className="mt-10 space-y-2">
                {specs.map((row, j) => (
                  <AlternatingSlide key={row[0]} index={j}>
                    <div className="flex items-center justify-between border-b border-line/50 py-3 font-mono text-xs uppercase tracking-[0.2em]">
                      <span className="text-ink-soft">{row[0]}</span>
                      <span className="text-ink">{row[1]}</span>
                    </div>
                  </AlternatingSlide>
                ))}
              </div>

              <div className="mt-10">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                  Colourway
                </div>
                <div className="mt-4 flex gap-3">
                  {product.colors.map((c) => (
                    <span
                      key={c}
                      className="h-12 w-12 rounded-full border border-line/60 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.4)]"
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-12 flex flex-wrap items-center gap-3">
                <Link
                  to="/samples"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-medium tracking-wide">Request a sample</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink/25 px-6 py-3 text-sm text-ink transition-colors hover:bg-ink hover:text-canvas"
                >
                  Talk to a specialist
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rich sections — only for authored products */}
      {product.details ? (
        <>
          {/* Use cases */}
          <section className="border-t border-line/60 bg-canvas-2/40 px-5 py-20 md:px-10 md:py-28">
            <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                  Where it fits
                </div>
                <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
                  Designed for use, not just for spec.
                </h2>
              </div>
              <ul className="space-y-4">
                {product.details.useCases.map((u) => (
                  <li key={u} className="flex items-start gap-4 border-b border-line/60 pb-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-copper" />
                    <span className="text-lg text-ink/90">{u}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Gallery */}
          <section className="px-5 py-20 md:px-10 md:py-24">
            <div className="mx-auto max-w-7xl">
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                In context
              </div>
              <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
                How it looks, once installed.
              </h2>
              <div className="mt-12 grid gap-4 sm:grid-cols-3">
                {product.details.gallery.map((src, i) => (
                  <ScaleIn key={i} delay={i * 0.05}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-line/60">
                      <img src={src} alt="" className="h-full w-full object-cover" />
                    </div>
                  </ScaleIn>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : null}

      {/* Related */}
      {related.length > 0 ? (
        <section className="border-t border-line/60 px-5 py-24 md:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              More from {family.name}
            </div>
            <h2 className="display-serifish mt-4 text-3xl md:text-5xl">Also worth a look.</h2>

            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
              {related.map((p, i) => (
                <ScaleIn key={p.slug} delay={i * 0.05}>
                  <Link
                    to="/products/$family/$slug"
                    params={{ family: familySlug, slug: p.slug }}
                    className="group block overflow-hidden rounded-xl border border-line/60 bg-canvas transition-all hover:-translate-y-1 hover:border-copper/50"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden">
                      <img src={p.cover} alt={p.name} className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105" />
                    </div>
                    <div className="p-4">
                      <div className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-copper">{p.code}</div>
                      <h3 className="display-serifish mt-2 text-lg leading-tight">{p.name}</h3>
                    </div>
                  </Link>
                </ScaleIn>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

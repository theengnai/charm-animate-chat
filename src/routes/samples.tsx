import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Check, Plus, Trash2 } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PageHero } from "@/components/common/PageHero";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { PRODUCTS } from "@/data/products";
import cover from "@/assets/section-samples.jpg";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Samples Request — Ecosmart" },
      { name: "description", content: "Order your Ecosmart sample kit. Up to 8 chips, shipped in a linen envelope, delivered in 3 business days." },
      { property: "og:title", content: "Samples Request — Ecosmart" },
      { property: "og:description", content: "Touch before you specify." },
      { property: "og:image", content: cover },
    ],
  }),
  component: SamplesPage,
});

const MAX_KIT = 8;
const STORAGE_KEY = "ecosmart:sample-kit";

const STEPS = [
  { n: "01", t: "Pick chips", d: "Add up to eight material samples from the grid." },
  { n: "02", t: "Tell us about your project", d: "So we can include suggestions relevant to your scope." },
  { n: "03", t: "We ship in 3 days", d: "Delivered in a linen envelope with a curated project note." },
];

const CURATED = [
  { name: "Coastal Residence", slugs: ["wpc-oak-deep", "wpc-linen", "alu-fin-40", "pnl-linen"] },
  { name: "Boutique Hospitality", slugs: ["pnl-slat-oak", "spc-nordic", "alu-blade-70", "pnl-mineral"] },
  { name: "Corporate Lobby", slugs: ["spc-basalt", "pnl-mineral", "alu-wave", "wpc-charcoal"] },
];

function SamplesPage() {
  const [kit, setKit] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setKit(JSON.parse(raw));
    } catch {}
  }, []);
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(kit));
    } catch {}
  }, [kit]);

  const toggle = (slug: string) =>
    setKit((k) =>
      k.includes(slug) ? k.filter((s) => s !== slug) : k.length < MAX_KIT ? [...k, slug] : k,
    );
  const addMany = (slugs: string[]) =>
    setKit((k) => {
      const merged = Array.from(new Set([...k, ...slugs]));
      return merged.slice(0, MAX_KIT);
    });

  const kitProducts = useMemo(
    () => kit.map((s) => PRODUCTS.find((p) => p.slug === s)!).filter(Boolean),
    [kit],
  );

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <PageHero
        eyebrow="Touch before you specify"
        title="Order your Ecosmart kit."
        subcopy="Up to 8 material chips, shipped in a linen envelope. Free within the UAE, nominal fee international."
        right={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img src={cover} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-full bg-canvas/90 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink backdrop-blur">
              Ships in 3 days
            </div>
          </div>
        }
      >
        <a
          href="#grid"
          className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-medium text-canvas hover:bg-copper-deep"
        >
          Start building →
        </a>
      </PageHero>

      {/* How it works */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-6 py-24 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-3">
          {STEPS.map((s) => (
            <Reveal key={s.n}>
              <div className="display-serifish text-6xl text-copper">{s.n}</div>
              <h3 className="mt-4 text-xl font-medium">{s.t}</h3>
              <p className="mt-2 text-sm text-ink-soft">{s.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Curated kits */}
      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">Start faster</span>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">Curated kits.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {CURATED.map((c) => (
              <button
                key={c.name}
                data-reveal-item
                onClick={() => addMany(c.slugs)}
                className="group rounded-2xl border border-line/60 bg-canvas p-6 text-left transition-colors hover:border-copper"
              >
                <div className="flex gap-1.5">
                  {c.slugs.map((s) => {
                    const p = PRODUCTS.find((x) => x.slug === s);
                    return (
                      <span
                        key={s}
                        className="h-12 w-12 rounded-md border border-ink/10"
                        style={{ background: p?.colors[0] }}
                      />
                    );
                  })}
                </div>
                <h3 className="mt-5 text-lg font-medium">{c.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">Add all 4 chips to your kit</p>
                <div className="mt-4 inline-flex items-center gap-2 text-sm text-copper">
                  <Plus className="h-4 w-4" /> Add curated kit
                </div>
              </button>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Grid + sticky kit */}
      <section id="grid" className="px-6 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_320px]">
          <div>
            <Reveal>
              <span className="eyebrow text-copper">The library</span>
              <h2 className="display-serifish mt-3 text-3xl md:text-4xl">
                Choose your chips.
              </h2>
            </Reveal>
            <RevealGroup
              className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3"
              stagger={0.03}
            >
              {PRODUCTS.map((p) => {
                const inKit = kit.includes(p.slug);
                return (
                  <button
                    key={p.slug}
                    data-reveal-item
                    onClick={() => toggle(p.slug)}
                    className={`group relative overflow-hidden rounded-xl border text-left transition-all ${
                      inKit
                        ? "border-copper ring-2 ring-copper/40"
                        : "border-line/60 hover:border-ink"
                    }`}
                  >
                    <div className="aspect-square">
                      <img
                        src={p.cover}
                        alt={p.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-3">
                      <div className="truncate text-sm font-medium">{p.name}</div>
                      <div className="mt-0.5 truncate font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                        {p.code}
                      </div>
                    </div>
                    <div
                      className={`absolute right-3 top-3 grid h-8 w-8 place-items-center rounded-full transition-all ${
                        inKit ? "bg-copper text-canvas" : "bg-canvas/90 text-ink"
                      }`}
                    >
                      {inKit ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                );
              })}
            </RevealGroup>
          </div>

          {/* Kit tray */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <div className="rounded-2xl border border-line/60 bg-canvas-2/60 p-6">
              <div className="flex items-baseline justify-between">
                <div className="eyebrow text-copper">Your kit</div>
                <div className="font-mono text-xs text-ink-soft">
                  {kit.length} of {MAX_KIT}
                </div>
              </div>
              {kitProducts.length === 0 ? (
                <div className="mt-6 grid h-32 place-items-center rounded-xl border-2 border-dashed border-line text-center text-xs text-ink-soft">
                  Add up to 8 chips
                </div>
              ) : (
                <ul className="mt-4 space-y-2">
                  {kitProducts.map((p) => (
                    <li
                      key={p.slug}
                      className="flex items-center gap-3 rounded-lg border border-line bg-canvas p-2"
                    >
                      <img src={p.cover} alt="" className="h-10 w-10 rounded object-cover" />
                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm font-medium">{p.name}</div>
                        <div className="truncate font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                          {p.code}
                        </div>
                      </div>
                      <button
                        onClick={() => toggle(p.slug)}
                        className="grid h-8 w-8 shrink-0 place-items-center rounded-full text-ink-soft hover:bg-canvas-2 hover:text-copper"
                        aria-label="Remove"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              <a
                href="#form"
                className="mt-6 block rounded-full bg-ink py-3 text-center text-sm font-medium text-canvas hover:bg-ink/90"
              >
                Continue →
              </a>
            </div>
          </aside>
        </div>
      </section>

      {/* Form */}
      <section id="form" className="border-t border-line/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="eyebrow text-copper">Almost there</span>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">Tell us where to ship.</h2>
          </Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
              setKit([]);
            }}
            className="mt-10 space-y-6"
          >
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Full name" name="name" required />
              <Field label="Company / practice" name="company" />
              <Field label="Role" name="role" as="select" options={["Architect", "Interior Designer", "Contractor", "Developer", "Other"]} />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" />
              <Field label="Project stage" name="stage" as="select" options={["Concept", "Schematic", "Tender", "Under construction"]} />
            </div>
            <Field label="Shipping address" name="address" as="textarea" required />
            <Field label="Notes" name="notes" as="textarea" placeholder="Anything specific we should include?" />
            <button
              type="submit"
              disabled={kit.length === 0}
              className="w-full rounded-full bg-copper py-4 text-sm font-medium text-canvas transition-colors hover:bg-copper-deep disabled:cursor-not-allowed disabled:opacity-40"
            >
              {kit.length === 0 ? "Add at least one chip to continue" : `Send my kit (${kit.length} chips)`}
            </button>
            {submitted ? (
              <div className="rounded-2xl border border-copper bg-copper/10 p-6 text-center">
                <div className="eyebrow text-copper">Received</div>
                <div className="mt-2 text-lg">
                  Order reference #ES-2607-{Math.floor(Math.random() * 9000 + 1000)}
                </div>
                <p className="mt-2 text-sm text-ink-soft">
                  Your kit will ship within 3 business days. We'll email tracking as soon as it leaves.
                </p>
              </div>
            ) : null}
          </form>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  as = "input",
  options,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  options?: string[];
}) {
  const base =
    "mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper";
  return (
    <label className="block">
      <span className="eyebrow text-ink-soft">
        {label} {required ? <span className="text-copper">*</span> : null}
      </span>
      {as === "textarea" ? (
        <textarea name={name} required={required} placeholder={placeholder} rows={4} className={base} />
      ) : as === "select" ? (
        <select name={name} required={required} className={base}>
          <option value="">Select…</option>
          {options?.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      ) : (
        <input name={name} type={type} required={required} placeholder={placeholder} className={base} />
      )}
    </label>
  );
}

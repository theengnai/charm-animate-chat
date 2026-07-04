import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Download, FileText, Search } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PageHero } from "@/components/common/PageHero";
import { CTABand } from "@/components/common/CTABand";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { RESOURCE_TABS, RESOURCES } from "@/data/resources";
import cover from "@/assets/section-technical.jpg";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Technical Resources — Ecosmart" },
      { name: "description", content: "Datasheets, installation guides, CAD/BIM files, certifications and warranties for specifiers and installers." },
      { property: "og:title", content: "Technical Resources — Ecosmart" },
      { property: "og:description", content: "Everything you need to specify with confidence." },
      { property: "og:image", content: cover },
    ],
  }),
  component: ResourcesPage,
});

const CERTS = ["FSC", "ISO 9001", "ISO 14001", "CE", "TÜV", "BREEAM", "LEED", "EPD"];

const FEATURED = [
  { title: "WPC Installation Guide 2026", meta: "5.2 MB · Updated Jun 2026", kind: "PDF" },
  { title: "SPC 2026 Catalogue", meta: "18 MB · Updated May 2026", kind: "PDF" },
  { title: "Fire Compliance Dossier", meta: "3.4 MB · Updated Apr 2026", kind: "PDF" },
];

function ResourcesPage() {
  const [tab, setTab] = useState<(typeof RESOURCE_TABS)[number]["key"]>("datasheet");
  const [q, setQ] = useState("");

  const rows = useMemo(
    () =>
      RESOURCES.filter((r) => r.kind === tab).filter(
        (r) =>
          !q ||
          r.title.toLowerCase().includes(q.toLowerCase()) ||
          r.family.toLowerCase().includes(q.toLowerCase()),
      ),
    [tab, q],
  );

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <PageHero
        eyebrow="For architects, specifiers & installers"
        title="Everything you need to specify with confidence."
        subcopy="A quiet library — datasheets, CAD packs, certifications, care and warranty. Searchable, always up to date."
        right={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img src={cover} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        }
      >
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-soft" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search resources, e.g. 'fire' or 'WPC'"
            className="w-full rounded-full border border-line bg-canvas px-11 py-3.5 text-sm outline-none focus:border-copper"
          />
        </div>
      </PageHero>

      {/* Featured */}
      <section className="px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">Most requested</span>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">This month's downloads.</h2>
          </Reveal>
          <RevealGroup className="mt-10 grid gap-5 md:grid-cols-3" stagger={0.08}>
            {FEATURED.map((f) => (
              <div
                key={f.title}
                data-reveal-item
                className="group flex flex-col rounded-2xl border border-line/60 bg-canvas-2/40 p-6 transition-colors hover:border-copper"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-copper/10 text-copper">
                  <FileText className="h-5 w-5" />
                </div>
                <h3 className="mt-6 text-lg font-medium">{f.title}</h3>
                <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
                  {f.meta}
                </div>
                <button className="mt-auto flex items-center gap-2 pt-6 text-sm text-ink hover:text-copper">
                  Download {f.kind} <Download className="h-3.5 w-3.5" />
                </button>
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Full library */}
      <section className="border-t border-line/60 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">Full library</span>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">Browse by category.</h2>
          </Reveal>
          <div className="mt-10 flex flex-wrap gap-2 border-b border-line pb-4">
            {RESOURCE_TABS.map((t) => (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className={`rounded-full px-4 py-2 text-sm transition-colors ${
                  tab === t.key
                    ? "bg-ink text-canvas"
                    : "text-ink-soft hover:bg-canvas-2 hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-line/60">
            <div className="grid grid-cols-[1.5fr_0.7fr_0.6fr_0.6fr_auto] gap-4 border-b border-line/60 bg-canvas-2/40 px-6 py-3 text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
              <div>Title</div>
              <div className="hidden sm:block">Family</div>
              <div className="hidden md:block">Version</div>
              <div className="hidden md:block">Updated</div>
              <div />
            </div>
            {rows.length === 0 ? (
              <div className="px-6 py-16 text-center text-sm text-ink-soft">
                No resources match "{q}".
              </div>
            ) : (
              rows.map((r) => (
                <a
                  key={r.id}
                  href={r.href}
                  className="group grid grid-cols-[1.5fr_0.7fr_0.6fr_0.6fr_auto] items-center gap-4 border-b border-line/40 px-6 py-4 text-sm transition-colors hover:bg-canvas-2/60 last:border-0"
                >
                  <div>
                    <div className="font-medium text-ink group-hover:text-copper">{r.title}</div>
                    <div className="mt-0.5 text-xs text-ink-soft">{r.size}</div>
                  </div>
                  <div className="hidden text-ink-soft sm:block">{r.family}</div>
                  <div className="hidden font-mono text-xs text-ink-soft md:block">{r.version}</div>
                  <div className="hidden font-mono text-xs text-ink-soft md:block">{r.updated}</div>
                  <Download className="h-4 w-4 text-ink-soft transition-colors group-hover:text-copper" />
                </a>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Certifications wall */}
      <section className="border-t border-line/60 bg-canvas-2/40 px-6 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <span className="eyebrow text-copper">Certified</span>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">
              Independently tested. Documented.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8" stagger={0.04}>
            {CERTS.map((c) => (
              <div
                key={c}
                data-reveal-item
                className="grid aspect-square place-items-center rounded-xl border border-line bg-canvas font-mono text-xs uppercase tracking-[0.22em] text-ink-soft transition-colors hover:border-copper hover:text-copper"
              >
                {c}
              </div>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        eyebrow="Studios & practices"
        title="Book a lunch-and-learn with our team."
        href="/contact"
        cta="Request a session"
      />

      <SiteFooter />
    </div>
  );
}

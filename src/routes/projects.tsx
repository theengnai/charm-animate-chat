import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PageHero } from "@/components/common/PageHero";
import { CTABand } from "@/components/common/CTABand";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { Counter } from "@/components/motion/Counter";
import { PROJECTS, SECTORS, type Project } from "@/data/projects";
import cover from "@/assets/section-gallery.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Project Gallery — Ecosmart" },
      { name: "description", content: "Selected work across hospitality, residential, retail and public projects. Places that outlast their trends." },
      { property: "og:title", content: "Project Gallery — Ecosmart" },
      { property: "og:description", content: "Places that outlast their trends." },
      { property: "og:image", content: cover },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  const [sector, setSector] = useState<string>("All");
  const filtered = useMemo(
    () => (sector === "All" ? PROJECTS : PROJECTS.filter((p) => p.sector === sector)),
    [sector],
  );
  const featured = PROJECTS[0];

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <PageHero
        eyebrow="Selected work · 2019 — 2026"
        title="Places that outlast their trends."
        subcopy="A portfolio of façades, interiors and outdoor spaces we've specified, delivered and stood beside — from Dubai to Muscat."
        right={
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
            <img src={cover} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
        }
      />

      {/* Featured project */}
      <section className="px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative">
            <img
              src={featured.cover}
              alt={featured.name}
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-line bg-canvas p-4 shadow-xl md:block">
              <div className="eyebrow text-copper">Featured</div>
              <div className="mt-1 font-mono text-xs">{featured.year} · {featured.location}</div>
            </div>
          </div>
          <div>
            <Reveal>
              <span className="eyebrow text-copper">Featured</span>
              <h2 className="display-serifish mt-4 text-4xl leading-[1.05] md:text-5xl">
                {featured.name}
              </h2>
              <p className="mt-6 text-lg text-ink-soft">{featured.scope}</p>
              {featured.quote ? (
                <blockquote className="mt-8 border-l-2 border-copper pl-6 font-serif italic text-ink">
                  "{featured.quote.text}"
                  <div className="mt-3 not-italic font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink-soft">
                    — {featured.quote.author}
                  </div>
                </blockquote>
              ) : null}
              <div className="mt-8 grid grid-cols-2 gap-6 text-sm md:grid-cols-4">
                {[
                  ["Client", "Confidential"],
                  ["Location", featured.location],
                  ["Year", String(featured.year)],
                  ["Sector", featured.sector],
                ].map(([k, v]) => (
                  <div key={k}>
                    <div className="eyebrow text-ink-soft">{k}</div>
                    <div className="mt-1 font-medium">{v}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="border-t border-line/60 px-6 py-8 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center gap-3">
          <span className="mr-2 eyebrow text-ink-soft">Sector</span>
          {["All", ...SECTORS].map((s) => (
            <button
              key={s}
              onClick={() => setSector(s)}
              className={`rounded-full border px-4 py-1.5 text-xs transition-colors ${
                sector === s ? "border-copper bg-copper text-canvas" : "border-line hover:border-ink"
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </section>

      {/* Bento grid */}
      <section className="px-6 pb-32 md:px-10">
        <div className="mx-auto max-w-7xl">
          <RevealGroup
            className="grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:auto-rows-[280px] lg:grid-cols-4"
            stagger={0.06}
          >
            {filtered.map((p) => (
              <ProjectTile key={p.slug} p={p} />
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-y border-line/60 bg-ink px-6 py-24 text-canvas md:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 md:grid-cols-3">
          {[
            { l: "Projects delivered", v: 180, s: "+" },
            { l: "Countries served", v: 14, s: "" },
            { l: "Square metres installed", v: 2.4, s: "M", isFloat: true },
          ].map((s) => (
            <Reveal key={s.l}>
              <div className="display-serifish text-5xl text-copper-light md:text-7xl">
                {s.isFloat ? "2.4" : <Counter value={s.v} />}
                <span>{s.s}</span>
              </div>
              <div className="mt-2 eyebrow text-canvas/60">{s.l}</div>
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
    </div>
  );
}

function ProjectTile({ p }: { p: Project }) {
  const spanCls =
    p.span === "2x2"
      ? "lg:col-span-2 lg:row-span-2"
      : p.span === "2x1"
        ? "lg:col-span-2"
        : p.span === "1x2"
          ? "lg:row-span-2"
          : "";
  return (
    <a
      data-reveal-item
      href="#"
      className={`group relative overflow-hidden rounded-2xl bg-ink ${spanCls}`}
    >
      <img
        src={p.cover}
        alt={p.name}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent opacity-70 transition-opacity group-hover:opacity-90" />
      <div className="absolute inset-0 flex flex-col justify-end p-5 text-canvas">
        <div className="translate-y-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-canvas/70">
            {p.sector} · {p.year}
          </div>
        </div>
        <div className="mt-2 flex items-end justify-between gap-3">
          <div>
            <h3 className="display-serifish text-xl leading-tight md:text-2xl">{p.name}</h3>
            <div className="mt-1 text-xs text-canvas/70">{p.location}</div>
          </div>
          <ArrowUpRight className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>
    </a>
  );
}

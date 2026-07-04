import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Layers, RotateCcw, Save, Share2, Sparkles } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { PageHero } from "@/components/common/PageHero";
import { CTABand } from "@/components/common/CTABand";
import { ROOMS, SURFACES, materialsForSurface } from "@/data/visualizer";
import { PRODUCTS } from "@/data/products";

export const Route = createFileRoute("/visualizer")({
  head: () => ({
    meta: [
      { title: "The Visualizer — Ecosmart" },
      { name: "description", content: "See Ecosmart finishes in your space before you specify. Live material preview across rooms and surfaces." },
      { property: "og:title", content: "The Visualizer — Ecosmart" },
      { property: "og:description", content: "See it before you spec it." },
    ],
  }),
  component: VisualizerPage,
});

type Surface = "floor" | "wall" | "ceiling" | "accent";

function VisualizerPage() {
  const [room, setRoom] = useState<string>(ROOMS[0].key);
  const [surface, setSurface] = useState<Surface>("floor");
  const [choices, setChoices] = useState<Record<Surface, string | null>>({
    floor: "spc-nordic",
    wall: "pnl-slat-oak",
    ceiling: null,
    accent: "alu-blade-70",
  });
  const [opacity, setOpacity] = useState(0.75);

  const roomImg = useMemo(() => ROOMS.find((r) => r.key === room)?.image ?? ROOMS[0].image, [room]);
  const materials = useMemo(() => materialsForSurface(surface), [surface]);
  const active = choices[surface];
  const activeMaterial = PRODUCTS.find((p) => p.slug === active);

  const reset = () =>
    setChoices({ floor: null, wall: null, ceiling: null, accent: null });

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <PageHero
        eyebrow="Interactive · Beta"
        title="See it before you spec it."
        subcopy="Choose a room, swap materials across floor, wall, ceiling and accent surfaces. Save your look or share it with your team."
      >
        <a
          href="#app"
          className="inline-flex items-center gap-2 rounded-full bg-copper px-6 py-3.5 text-sm font-medium text-canvas hover:bg-copper-deep"
        >
          <Sparkles className="h-4 w-4" />
          Launch visualizer
        </a>
      </PageHero>

      {/* App */}
      <section id="app" className="border-y border-line/60 bg-canvas-2/40 px-6 py-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.65fr_1fr]">
          {/* Preview */}
          <div className="relative overflow-hidden rounded-3xl border border-line/60 bg-ink">
            <div className="relative aspect-[4/3] w-full">
              <img src={roomImg} alt={room} className="absolute inset-0 h-full w-full object-cover" />
              {(Object.keys(choices) as Surface[]).map((s) => {
                const p = PRODUCTS.find((x) => x.slug === choices[s]);
                if (!p) return null;
                const blend =
                  s === "floor"
                    ? "0 60% 0 0"
                    : s === "wall"
                      ? "0 0 40% 0"
                      : s === "ceiling"
                        ? "80% 0 0 0"
                        : "40% 0 40% 60%";
                return (
                  <div
                    key={s}
                    className="pointer-events-none absolute inset-0 transition-opacity duration-300"
                    style={{
                      backgroundImage: `url(${p.cover})`,
                      backgroundSize: s === "floor" ? "80% auto" : "60% auto",
                      backgroundRepeat: "repeat",
                      mixBlendMode: "multiply",
                      opacity: s === surface ? opacity : 0.55,
                      clipPath: `inset(${blend})`,
                    }}
                  />
                );
              })}
              <div className="absolute left-4 top-4 flex gap-2">
                {ROOMS.map((r) => (
                  <button
                    key={r.key}
                    onClick={() => setRoom(r.key)}
                    className={`rounded-full border px-3 py-1.5 text-xs backdrop-blur transition-colors ${
                      room === r.key
                        ? "border-copper bg-copper text-canvas"
                        : "border-canvas/40 bg-ink/50 text-canvas hover:bg-ink/80"
                    }`}
                  >
                    {r.name}
                  </button>
                ))}
              </div>
              {activeMaterial ? (
                <div className="absolute bottom-4 left-4 rounded-full bg-canvas/95 px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.22em] text-ink backdrop-blur">
                  {surface} · {activeMaterial.name} — {activeMaterial.code}
                </div>
              ) : null}
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-5 rounded-3xl border border-line/60 bg-canvas p-6">
            <div>
              <div className="eyebrow text-ink-soft">Surface</div>
              <div className="mt-3 grid grid-cols-4 gap-2">
                {SURFACES.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => setSurface(s.key as Surface)}
                    className={`relative rounded-lg border py-3 text-xs transition-colors ${
                      surface === s.key
                        ? "border-copper bg-copper/10 text-copper"
                        : "border-line hover:border-ink"
                    }`}
                  >
                    {s.label}
                    {surface === s.key ? (
                      <span className="absolute inset-x-2 -bottom-0.5 h-0.5 bg-copper" />
                    ) : null}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <div className="eyebrow text-ink-soft">Materials for {surface}</div>
                <div className="font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft">
                  {materials.length}
                </div>
              </div>
              <div className="mt-3 grid max-h-64 grid-cols-3 gap-2 overflow-y-auto pr-1">
                {materials.map((m) => {
                  const isActive = choices[surface] === m.slug;
                  return (
                    <button
                      key={m.slug}
                      onClick={() =>
                        setChoices((c) => ({ ...c, [surface]: isActive ? null : m.slug }))
                      }
                      className={`group relative overflow-hidden rounded-lg border transition-all ${
                        isActive ? "border-copper ring-2 ring-copper/40" : "border-line hover:border-ink"
                      }`}
                    >
                      <div className="aspect-square">
                        <img src={m.cover} alt={m.name} className="h-full w-full object-cover" />
                      </div>
                      <div className="truncate px-1.5 py-1 text-[0.6rem] text-ink-soft">
                        {m.code}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <div className="flex items-baseline justify-between">
                <div className="eyebrow text-ink-soft">Overlay opacity</div>
                <div className="font-mono text-[0.65rem] text-ink-soft">{Math.round(opacity * 100)}%</div>
              </div>
              <input
                type="range"
                min={0.3}
                max={1}
                step={0.05}
                value={opacity}
                onChange={(e) => setOpacity(parseFloat(e.target.value))}
                className="mt-3 w-full accent-copper"
              />
            </div>

            <div className="flex flex-wrap gap-2 border-t border-line pt-4">
              <button
                onClick={reset}
                className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs hover:border-ink"
              >
                <RotateCcw className="h-3 w-3" /> Reset
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs hover:border-ink">
                <Save className="h-3 w-3" /> Save
              </button>
              <button className="inline-flex items-center gap-1.5 rounded-full border border-line px-3 py-2 text-xs hover:border-ink">
                <Share2 className="h-3 w-3" /> Share
              </button>
              <Link
                to="/samples"
                className="ml-auto inline-flex items-center gap-1.5 rounded-full bg-copper px-4 py-2 text-xs text-canvas hover:bg-copper-deep"
              >
                <Layers className="h-3 w-3" /> Request these samples
              </Link>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs text-ink-soft">
          Renderings are indicative — order physical samples for accurate colour, texture and finish.
        </p>
      </section>

      <CTABand
        eyebrow="Ready for the real thing?"
        title="Order the physical kit and specify with certainty."
        href="/samples"
        cta="Order sample kit"
      />

      <SiteFooter />
    </div>
  );
}

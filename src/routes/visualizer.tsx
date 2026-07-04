import { createFileRoute } from "@tanstack/react-router";
import { Layers, RefreshCcw, Share2, LayoutGrid } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { WordReveal } from "@/components/motion/WordReveal";
import { SlideFromSide } from "@/components/motion/SlideFromSide";
import { Reveal } from "@/components/motion/Reveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-visualizer.jpg";
import cap1 from "@/assets/section-visualizer.jpg";
import cap2 from "@/assets/section-materials.jpg";
import cap3 from "@/assets/section-design.jpg";
import cap4 from "@/assets/section-samples.jpg";

export const Route = createFileRoute("/visualizer")({
  head: () => ({
    meta: [
      { title: "The Visualizer — Ecosmart" },
      { name: "description", content: "Ecosmart's forthcoming room visualizer — swap materials on floor, wall and ceiling and share the look with your team." },
      { property: "og:title", content: "The Visualizer — Ecosmart" },
      { property: "og:description", content: "See it before you specify it. Coming soon." },
      { property: "og:image", content: hero },
    ],
  }),
  component: VisualizerPage,
});

const CAPABILITIES = [
  { Icon: LayoutGrid, tag: "Rooms", title: "Room presets", body: "A lobby, a suite, a villa deck, a workplace bay — four canonical rooms tuned to real Ecosmart projects.", img: cap1 },
  { Icon: Layers, tag: "Materials", title: "Live material swap", body: "Change floor, wall, ceiling and accent independently, from the full Ecosmart library — the render updates in the same frame.", img: cap2 },
  { Icon: RefreshCcw, tag: "Compare", title: "A/B compare", body: "Split-screen two versions of the same room — copper against oak, linen against basalt — to test how a palette holds up side by side.", img: cap3 },
  { Icon: Share2, tag: "Share", title: "Shareable links", body: "Every look gets a URL you can send to a client or a colleague. Open it, edit it, sample it — no login required.", img: cap4 },
];

const ROADMAP = [
  { q: "Q3 2026", t: "Private alpha", d: "Three invited studios, four rooms, twenty materials." },
  { q: "Q4 2026", t: "Studio beta", d: "Fifty studios, full material library, shareable links." },
  { q: "Q1 2027", t: "Public release", d: "Open access, no login. Optional export to spec PDF." },
];

function VisualizerPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <ScrollProgressBar />
      <TopBar />

      <StoryHero
        eyebrow="The Visualizer · Coming soon"
        title="See your surfaces"
        emphasis="in situ."
        subcopy="A live room preview for the moment before you specify. Swap materials, compare palettes, and share the link with the room still open."
        image={hero}
        primary={{ label: "Join the waitlist", to: "/contact" }}
        secondary={{ label: "Order samples instead", to: "/samples" }}
      />

      {/* WordReveal manifesto */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The tool
          </div>
          <WordReveal text="A quiet tool for the moment between the mood board and the tender. Not a marketplace, not a render engine — a short walk between the palette in your head and the panel on the wall." />
        </div>
      </section>

      {/* SlideFromSide capability blocks — alternating direction */}
      {CAPABILITIES.map((c, i) => (
        <SlideFromSide
          key={c.title}
          eyebrow={c.tag}
          title={c.title.split(" ").slice(0, -1).join(" ")}
          titleEm={c.title.split(" ").slice(-1)[0]}
          body={c.body}
          image={c.img}
          reverse={i % 2 === 1}
        />
      ))}

      {/* NEW — Roadmap timeline (static, no line draw — that's Samples' signature) */}
      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Roadmap
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            When you can expect what.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {ROADMAP.map((r, i) => (
              <Reveal key={r.q} delay={i * 0.08}>
                <div className="border-l-2 border-copper/40 pl-6">
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                    {r.q}
                  </div>
                  <h3 className="display-serifish mt-3 text-2xl md:text-3xl">{r.t}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{r.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Waitlist card */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl rounded-3xl border border-copper/30 bg-canvas p-10 text-center md:p-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Waitlist
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Early access to the alpha.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-ink-soft md:text-base">
            We'll open the door to fifty studios in Q4. Put yourself on the list and we'll send you the invitation the day it ships.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm text-canvas transition-transform hover:-translate-y-0.5"
          >
            Get on the list →
          </a>
        </div>
      </section>

      <CTABand
        eyebrow="In the meantime"
        title="Touch the materials in person — order a sample kit."
        href="/samples"
        cta="Order samples"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

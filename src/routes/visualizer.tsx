import { createFileRoute } from "@tanstack/react-router";
import { Layers, RefreshCcw, Share2, LayoutGrid } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { WordReveal } from "@/components/motion/WordReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-visualizer.jpg";
import parallax from "@/assets/about/sol-interior.jpg";

export const Route = createFileRoute("/visualizer")({
  head: () => ({
    meta: [
      { title: "The Visualizer — Ecosmart" },
      { name: "description", content: "Ecosmart's forthcoming room visualizer — swap materials on floor, wall and ceiling and share the look with your team. Coming soon." },
      { property: "og:title", content: "The Visualizer — Ecosmart" },
      { property: "og:description", content: "See it before you specify it. Coming soon." },
      { property: "og:image", content: hero },
    ],
  }),
  component: VisualizerPage,
});

const CAPABILITIES = [
  { n: "01", Icon: LayoutGrid, tag: "Rooms", title: "Room presets", body: "A lobby, a suite, a villa deck, a workplace bay — four canonical rooms tuned to real Ecosmart projects, so the light and scale match the material." },
  { n: "02", Icon: Layers, tag: "Materials", title: "Live material swap", body: "Change floor, wall, ceiling and accent independently, from the full Ecosmart library — the render updates in the same frame." },
  { n: "03", Icon: RefreshCcw, tag: "Compare", title: "A/B compare", body: "Split-screen two versions of the same room — copper against oak, linen against basalt — to test how a palette holds up side by side." },
  { n: "04", Icon: Share2, tag: "Share", title: "Shareable links", body: "Every look gets a URL you can send to a client or a colleague. Open it, edit it, sample it — no login required." },
];

function VisualizerPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
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

      <InfoStrip
        eyebrow="What it will do"
        lead="A quiet tool for the moment between the mood board and the tender — designed with architects, tested against real project rooms."
      />

      <StackingCards
        labelN="02"
        labelText="Capabilities"
        title="Four things it does,"
        titleEm="nothing it doesn't."
        description="We're building the visualizer around a small set of decisions that actually change the specification — not a photoreal render engine."
        items={CAPABILITIES}
        renderItem={(e) => {
          const Icon = e.Icon;
          return (
            <div className="flex flex-col justify-between w-full max-w-[22rem] md:max-w-md max-h-full mx-auto aspect-square rounded-2xl border border-line/60 bg-canvas p-6 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft mt-1">{e.n}</span>
                <span className="grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-copper/30 bg-canvas text-copper">
                  <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
                </span>
              </div>
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">{e.tag}</div>
                <h3 className="display-serifish mt-2 text-2xl leading-tight md:text-3xl lg:text-4xl">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{e.body}</p>
              </div>
            </div>
          );
        }}
      />

      <ParallaxSplit
        eyebrow="Built for architects"
        title="A tool that fits the"
        titleEm="way you already work."
        body="Not another marketplace, not another render engine. A short walk between mood board and spec — designed with three studios who agreed to break it before we ship."
        image={parallax}
      />

      <section className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            When
          </div>
          <WordReveal text="We're shipping the first version to invited studios this quarter. Public beta follows. If you'd like an early login, put yourself on the list — we'll open the door as soon as the paint is dry." />
        </div>
      </section>

      <CTABand
        eyebrow="Early access"
        title="Join the waitlist and we'll open the door as soon as it's ready."
        href="/contact"
        cta="Get early access"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

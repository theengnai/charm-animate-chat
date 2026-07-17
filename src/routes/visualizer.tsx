import { createFileRoute } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { ScrollProgressBar } from "@/components/motion/ScrollProgressBar";
import { WordReveal } from "@/components/motion/WordReveal";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-visualizer.jpg";

export const Route = createFileRoute("/visualizer")({
  head: () => ({
    meta: [
      { title: "Visualizer — EcoSmart · Coming soon" },
      { name: "description", content: "A concept preview we're building — a way to see EcoSmart panels, floors and finishes in place before you specify. Not live yet." },
      { property: "og:title", content: "Visualizer — EcoSmart · Coming soon" },
      { property: "og:description", content: "Preview our systems in place. Coming soon." },
      { property: "og:image", content: hero },
    ],
  }),
  component: VisualizerPage,
});

function VisualizerPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <ScrollProgressBar />
      <TopBar />

      <StoryHero
        eyebrow="Visualizer · Coming soon"
        title="Preview our systems,"
        emphasis="in place."
        subcopy="A concept preview we're building — a way to see EcoSmart panels, floors and finishes on your plan or elevation before you commit. Not live yet."
        image={hero}
        primary={{ label: "Join the interest list", to: "/contact" }}
        secondary={{ label: "Request a sample instead", to: "/samples" }}
      />

      <section className="border-t border-line/60 px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            The idea
          </div>
          <WordReveal text="A quiet tool for the moment before you specify — a way to place our finishing products and construction systems into the room, and see how they read together, before the panel is on the wall." />
        </div>
      </section>

      <section className="border-y border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Status
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            In development.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-sm text-ink-soft md:text-base">
            We're not ready to promise a date. When it opens up, we'll write to everyone on the interest list first. Until then, request a sample and we'll help you specify the same way we always have — with the material in your hand.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-ink px-8 py-4 text-sm text-canvas transition-transform hover:-translate-y-0.5"
          >
            <Sparkles className="h-4 w-4" /> Join the interest list
          </a>
        </div>
      </section>

      <CTABand
        eyebrow="In the meantime"
        title="Order a sample — we'll send it from Sudair."
        href="/samples"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

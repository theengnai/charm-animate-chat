import { createFileRoute } from "@tanstack/react-router";
import { Package, Truck, Sparkles, Leaf } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { InfoStrip } from "@/components/common/InfoStrip";
import { StackingCards } from "@/components/motion/StackingCards";
import { ParallaxSplit } from "@/components/motion/ParallaxSplit";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-samples.jpg";
import parallax from "@/assets/about/sol-interior.jpg";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Sample Kits — Ecosmart" },
      { name: "description", content: "Order a curated Ecosmart sample kit — up to eight material chips shipped in a linen envelope, delivered in three business days." },
      { property: "og:title", content: "Sample Kits — Ecosmart" },
      { property: "og:description", content: "Touch it before you specify it." },
      { property: "og:image", content: hero },
    ],
  }),
  component: SamplesPage,
});

const STEPS = [
  { n: "01", t: "Curate", d: "Tell us the project. We shortlist eight chips that answer the brief — not eighty that don't." },
  { n: "02", t: "Confirm", d: "You confirm the shortlist and your shipping address in a single reply." },
  { n: "03", t: "Delivered", d: "In three business days a linen envelope arrives — chips, spec cards, and a project note." },
];

const KITS = [
  { n: "01", Icon: Package, tag: "Coastal", title: "Coastal Residence", body: "Warm oak WPC, linen composite panels, brushed aluminium fins — a palette that survives salt air without going grey." },
  { n: "02", Icon: Package, tag: "Hospitality", title: "Boutique Hotel", body: "Slat oak walls, textured mineral panels, a soft charcoal accent — chosen for how they read under low lobby light." },
  { n: "03", Icon: Package, tag: "Workplace", title: "Corporate Lobby", body: "Basalt SPC underfoot, mineral panel walls, aluminium wave ceiling — quiet enough for a conversation, honest enough for a client." },
  { n: "04", Icon: Package, tag: "Villa", title: "Private Villa", body: "Deep oak decking, linen walls, and a copper accent — a domestic palette that reads warm on any project scale." },
];

function SamplesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Sample kits"
        title="Touch it before you"
        emphasis="specify it."
        subcopy="A curated eight-chip kit, shipped in a linen envelope, delivered in three business days. Free within the UAE, nominal fee international."
        image={hero}
        primary={{ label: "Request a kit", to: "/contact" }}
        secondary={{ label: "See the products", to: "/products" }}
      />

      <InfoStrip
        eyebrow="Why physical"
        lead="A screen can't tell you how a chip warms in your hand, how it reads under fluorescent light, or how it sounds under a fingernail. A kit can."
      />

      <HorizontalPin
        eyebrow="How it works"
        title="Three steps,"
        titleEm="three days."
        items={STEPS}
        renderItem={(s) => (
          <article className="w-[80vw] max-w-[420px] rounded-3xl border border-line/60 bg-canvas p-8 md:p-10">
            <div className="display-serifish text-6xl text-copper">{s.n}</div>
            <h3 className="display-serifish mt-6 text-3xl">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.d}</p>
          </article>
        )}
      />

      <StackingCards
        labelN="03"
        labelText="Curated kits"
        title="Four kits, four"
        titleEm="conversations."
        description="If you're not sure where to start, pick a kit. Each one is a shortlist we've delivered before — proven on real projects."
        items={KITS}
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
        eyebrow="Sustainability"
        title="Every returned chip"
        titleEm="finds another project."
        body="We ship in unbleached linen, print on recycled card, and re-issue returned chips as reference samples for the next studio. No plastic, no waste, no theatre."
        image={parallax}
      >
        <div className="flex flex-wrap gap-4 text-xs font-mono uppercase tracking-[0.22em] text-copper">
          <span className="flex items-center gap-2"><Leaf className="h-3.5 w-3.5" /> FSC linen</span>
          <span className="flex items-center gap-2"><Truck className="h-3.5 w-3.5" /> Carbon-neutral shipping</span>
          <span className="flex items-center gap-2"><Sparkles className="h-3.5 w-3.5" /> Re-issued chips</span>
        </div>
      </ParallaxSplit>

      {/* FAQ */}
      <section className="border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">FAQ</div>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">Before you ask.</h2>
          </Reveal>
          <RevealGroup className="mt-10 divide-y divide-line/60" stagger={0.05}>
            {[
              { q: "How much does a kit cost?", a: "Free within the UAE. Nominal international shipping fee (typically $35 USD) that we credit against your first order." },
              { q: "How many chips can I request?", a: "Up to eight per kit. Larger project briefs can request additional kits — we don't gatekeep samples." },
              { q: "How fast do they ship?", a: "Three business days from confirmation within the UAE, five to seven internationally." },
              { q: "Are the chip colours accurate?", a: "As accurate as physical printing allows — but for the final spec we always recommend a full-size sample panel." },
              { q: "Can I keep the chips?", a: "Yes. If you'd like to return them once specified, we re-issue them to another studio and credit your account." },
            ].map((f) => (
              <details key={f.q} data-reveal-item className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-copper transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        eyebrow="Ready?"
        title="Request your kit — we'll ship in three days."
        href="/contact"
        cta="Request a kit"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

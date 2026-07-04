import { createFileRoute } from "@tanstack/react-router";
import { Package, Truck, Sparkles, Leaf } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { PinnedSwap } from "@/components/motion/PinnedSwap";
import { SvgLineDraw } from "@/components/motion/SvgLineDraw";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-samples.jpg";
import chip1 from "@/assets/section-materials.jpg";
import chip2 from "@/assets/section-samples.jpg";
import chip3 from "@/assets/section-design.jpg";
import chip4 from "@/assets/section-gallery.jpg";

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
  { tag: "Coastal", title: "Coastal Residence", body: "Warm oak WPC, linen composite panels, brushed aluminium fins — a palette that survives salt air without going grey.", img: chip1, chips: ["Deep Oak", "Linen", "Anod. Silver", "Basalt"] },
  { tag: "Hospitality", title: "Boutique Hotel", body: "Slat oak walls, textured mineral panels, a soft charcoal accent — chosen for how they read under low lobby light.", img: chip2, chips: ["Slat Oak", "Mineral", "Charcoal", "Copper"] },
  { tag: "Workplace", title: "Corporate Lobby", body: "Basalt SPC underfoot, mineral panel walls, aluminium wave ceiling — quiet enough for a conversation, honest enough for a client.", img: chip3, chips: ["Basalt", "Mineral", "Wave Alu", "Reed"] },
  { tag: "Villa", title: "Private Villa", body: "Deep oak decking, linen walls, and a copper accent — a domestic palette that reads warm on any project scale.", img: chip4, chips: ["Deep Oak", "Linen", "Copper", "Nordic Ash"] },
];

const KIT_CONTENTS = [
  { label: "8× material chips", desc: "150 × 100 mm, real material, real finish." },
  { label: "Spec cards", desc: "One per chip — dimensions, fire class, warranty." },
  { label: "Project note", desc: "A handwritten line about the palette we shortlisted." },
  { label: "Linen envelope", desc: "FSC linen, closes with a copper stud, returnable." },
];

function SamplesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Sample kits"
        title="Touch it before you"
        emphasis="specify it."
        subcopy="A curated eight-chip kit, shipped in a linen envelope, delivered in three business days. Free within the UAE."
        image={hero}
        primary={{ label: "Request a kit", to: "/contact" }}
        secondary={{ label: "See the products", to: "/products" }}
      />

      {/* SvgLineDraw 3-step process */}
      <section className="relative border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            How it works
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Three steps, three days.
          </h2>

          <div className="relative mt-20 grid gap-16">
            <SvgLineDraw
              className="pointer-events-none absolute left-6 top-0 h-full w-4 text-copper md:left-8"
              strokeWidth={2}
            />
            {STEPS.map((s) => (
              <Reveal key={s.n} className="relative grid grid-cols-[auto_1fr] gap-8 pl-2 md:gap-14">
                <div className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-copper bg-canvas font-mono text-sm text-copper md:h-16 md:w-16">
                  {s.n}
                </div>
                <div className="pt-2">
                  <h3 className="display-serifish text-2xl md:text-4xl">{s.t}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PinnedSwap kit carousel */}
      <PinnedSwap
        eyebrow="Curated kits"
        title="Four kits,"
        titleEm="four conversations."
        items={KITS}
        renderItem={(k) => (
          <div className="grid w-full gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img src={k.img} alt={k.title} className="h-full w-full object-cover" />
              <div className="absolute left-4 top-4 rounded-full bg-canvas/90 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-[0.22em]">
                {k.tag}
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h3 className="display-serifish text-3xl leading-tight md:text-5xl">
                {k.title}
              </h3>
              <p className="mt-5 max-w-xl text-base text-ink-soft">{k.body}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {k.chips.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-line px-3 py-1 font-mono text-[0.62rem] uppercase tracking-[0.22em] text-ink-soft"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      />

      {/* NEW — What's in a kit (ScaleIn diagram) */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            Inside the envelope
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Everything you need. Nothing you don't.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {KIT_CONTENTS.map((c, i) => (
              <ScaleIn key={c.label} delay={i * 0.08}>
                <div className="h-full rounded-2xl border border-line/60 bg-canvas p-6 md:p-8">
                  <div className="display-serifish text-4xl text-copper">
                    0{i + 1}
                  </div>
                  <div className="mt-6 text-lg font-medium">{c.label}</div>
                  <p className="mt-2 text-sm text-ink-soft">{c.desc}</p>
                </div>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* NEW — Shipping & lead-time info strip */}
      <section className="border-y border-line/60 bg-ink px-5 py-16 text-canvas md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            { Icon: Truck, l: "UAE delivery", v: "3 business days · free" },
            { Icon: Package, l: "GCC & International", v: "5–7 business days · from $35" },
            { Icon: Leaf, l: "Packaging", v: "FSC linen · carbon-neutral" },
          ].map((s) => (
            <div key={s.l} className="flex items-start gap-4">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-copper/20 text-copper-light">
                <s.Icon className="h-4 w-4" />
              </span>
              <div>
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">
                  {s.l}
                </div>
                <div className="mt-1 text-base">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 py-24 md:px-10 md:py-32">
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
              { q: "Are the chip colours accurate?", a: "As accurate as physical printing allows — for the final spec we always recommend a full-size sample panel." },
              { q: "Can I keep the chips?", a: "Yes. If you'd like to return them once specified, we re-issue them to another studio and credit your account." },
            ].map((f) => (
              <details key={f.q} data-reveal-item className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-copper transition-transform group-open:rotate-45">
                    <Sparkles className="h-3 w-3" />
                  </span>
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

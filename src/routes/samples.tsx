import { createFileRoute } from "@tanstack/react-router";
import { Package, Sparkles } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { SvgLineDraw } from "@/components/motion/SvgLineDraw";
import { ScaleIn } from "@/components/motion/ScaleIn";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-samples.jpg";

export const Route = createFileRoute("/samples")({
  head: () => ({
    meta: [
      { title: "Samples — EcoSmart" },
      { name: "description", content: "Request physical samples of EcoSmart finishing products — flexible clay-stone, PU stone, WPC, SPC, PVC — from EcoSmart." },
      { property: "og:title", content: "Samples — EcoSmart" },
      { property: "og:description", content: "Hold the material before you specify." },
      { property: "og:image", content: hero },
    ],
  }),
  component: SamplesPage,
});

const STEPS = [
  { n: "01", t: "Tell us", d: "Share the project, the product you'd like to see, and the address to ship to." },
  { n: "02", t: "We match", d: "We select the right chips from our finishing lines against your brief and confirm what we'll send." },
  { n: "03", t: "Shipped by EcoSmart", d: "The sample ships from our facility in Riyadh with its specification card." },
];

const CONTENTS = [
  { label: "Physical sample", desc: "Real material, real finish — cut from the same production line as your project." },
  { label: "Specification card", desc: "Product name, reference standards and the certified values available on request." },
  { label: "TDS reference", desc: "Pointer to the full Technical Data Sheet and Installation Manual." },
  { label: "Project note", desc: "A short line about why we shortlisted this material for the brief you sent." },
];

function SamplesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Samples"
        title="Hold the material"
        emphasis="before you specify."
        subcopy="Samples of our finishing products — flexible clay-stone tiles, PU stone, WPC, SPC and PVC lines — issued on request from our team."
        image={hero}
        primary={{ label: "Request a sample", to: "/contact" }}
        secondary={{ label: "See the products", to: "/products" }}
      />

      <section className="relative border-t border-line/60 px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            How it works
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Three steps.
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

      {/* What comes with a sample */}
      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            What arrives
          </div>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
            Enough to specify with confidence.
          </h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {CONTENTS.map((c, i) => (
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

      {/* Shipping strip — honest */}
      <section className="border-y border-line/60 bg-ink px-5 py-16 text-canvas md:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-start gap-4">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-copper/20 text-copper-light">
              <Package className="h-4 w-4" />
            </span>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-canvas/60">
                Dispatch
              </div>
              <div className="mt-1 text-base">
                Samples ship from Riyadh, Saudi Arabia. Lead time confirmed when we reply to your request.
              </div>
            </div>
          </div>
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
              { q: "Which products can I request as a sample?", a: "Our Decoration & Finishing lines — flexible clay-stone tiles, PU stone tiles, WPC door panels and decking, SPC flooring, PVC marble sheets, PVC laminated foam boards, PVC wood panels and the PVC laminated foam interior line." },
              { q: "How do I request one?", a: "Send a brief message describing the project, product and address. We'll confirm what we can send and the lead time." },
              { q: "Do the samples come with test certificates?", a: "Samples come with a specification card. Project-specific test certificates for the certified values (fire, thermal, acoustic, water absorption etc.) are issued on request against the intended application." },
              { q: "Are the colours accurate?", a: "As accurate as a small chip allows. For final specification of textured or natural-looking finishes we recommend a larger sample panel — ask us and we'll arrange it." },
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
        title="Request a sample — we'll send it to you."
        href="/contact"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

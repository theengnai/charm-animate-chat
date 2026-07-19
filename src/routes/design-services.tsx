import { createFileRoute } from "@tanstack/react-router";
import { Compass, Layers, Wrench, Hammer } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { HorizontalPin } from "@/components/motion/HorizontalPin";
import { LetterReveal } from "@/components/motion/LetterReveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-design.jpg";

export const Route = createFileRoute("/design-services")({
  head: () => ({
    meta: [
      { title: "Technical & Project Support — EcoSmart" },
      { name: "description", content: "Help selecting the right EcoSmart system, confirming certified values, and issuing the method statement your crew will use on site." },
      { property: "og:title", content: "Technical & Project Support — EcoSmart" },
      { property: "og:description", content: "From system selection to erection method." },
      { property: "og:image", content: hero },
    ],
  }),
  component: DesignServicesPage,
});

const SERVICES = [
  { Icon: Compass, tag: "Selection", title: "System Selection", body: "We help you choose the right EcoSmart system for the project — hybrid precast frame, T-floor hourdi deck, lightweight concrete panels, curved modular units, insulated cabins or EPS façade — matched to the brief, the site and the Saudi Building Code." },
  { Icon: Layers, tag: "Certificates", title: "Certificate Confirmation", body: "Every product carries reference test methods. We confirm the certified values you need for your specification — fire, thermal, acoustic, structural, water absorption — issued against the relevant test certificate." },
  { Icon: Hammer, tag: "Method", title: "Installation Method Statements", body: "For each product, an Installation Manual covers tools, storage, surface prep, procedure, jointing, quality checks, health & safety and maintenance. We tailor it to your site conditions." },
  { Icon: Wrench, tag: "Coordination", title: "Erection Coordination", body: "For the Hybrid Precast + T-Floor Hourdi systems, we coordinate the erection sequence with your structural engineer — foundations and pockets, bracing scheme, connection strengths and strike times." },
];

const PROCESS = [
  { t: "Brief", d: "You send the project brief and drawings." },
  { t: "Match", d: "We match the right systems and finishing products." },
  { t: "Confirm", d: "We issue the certified values you need." },
  { t: "Method", d: "We share the Installation Manual and tailor it to the site." },
  { t: "Deliver", d: "Panels, floors and finishing products delivered by EcoSmart." },
  { t: "Deliver", d: "Delivered in the sequence the crane and crew need." },
  { t: "Support", d: "We stay reachable through erection and finishing." },
];

function DesignServicesPage() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Technical & Project Support"
        title="Choose the right system,"
        emphasis="build it right."
        subcopy="We help you select the right EcoSmart system for the project, confirm the certified values your spec needs, and issue the method statement your crew will use on site."
        image={hero}
        primary={{ label: "Talk to our team", to: "/contact" }}
        secondary={{ label: "See our products", to: "/products" }}
      />

      <section className="border-t border-line/60 bg-ink px-5 py-32 text-canvas md:px-10 md:py-40">
        <div className="mx-auto max-w-5xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper-light">
            How we work
          </div>
          <LetterReveal
            className="display-serifish mt-8 text-4xl leading-[1.05] md:text-7xl"
            text="Technical values are issued against the certificate — not estimated."
            em="not estimated."
            emClassName="italic text-copper"
          />
          <p className="mt-8 max-w-2xl text-canvas/70">
            Every EcoSmart Technical Data Sheet shows the reference test method for each property. Final figures are provided with the corresponding test certificate on request — so nothing on your spec is assumed.
          </p>
        </div>
      </section>

      <section className="px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
            What we do
          </div>
          <h2 className="display-serifish mt-4 max-w-3xl text-3xl md:text-5xl">
            Four services, one team.
          </h2>
          <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2" stagger={0.08}>
            {SERVICES.map((s, i) => {
              const Icon = s.Icon;
              return (
                <div
                  key={s.title}
                  data-reveal-item
                  className="group rounded-2xl border border-line/60 bg-canvas p-8 transition-colors hover:border-copper md:p-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
                      0{i + 1}
                    </span>
                    <span className="grid h-12 w-12 place-items-center rounded-full border border-copper/30 text-copper transition-transform group-hover:-rotate-6">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                  </div>
                  <div className="mt-8 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                    {s.tag}
                  </div>
                  <h3 className="display-serifish mt-2 text-3xl md:text-4xl">{s.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.body}</p>
                </div>
              );
            })}
          </RevealGroup>
        </div>
      </section>

      <HorizontalPin
        eyebrow="The process"
        title="Seven steps,"
        titleEm="one line."
        items={PROCESS}
        renderItem={(s, i) => (
          <article className="w-[75vw] max-w-[360px] rounded-3xl border border-line/60 bg-canvas p-8 md:p-10">
            <div className="display-serifish text-6xl text-copper">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="display-serifish mt-6 text-3xl">{s.t}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-base">{s.d}</p>
          </article>
        )}
      />

      <CTABand
        eyebrow="Have a project?"
        title="Send us the brief — we'll match the right systems."
        href="/contact"
        cta="Start the conversation"
        tone="dark"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

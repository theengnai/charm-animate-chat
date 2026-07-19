import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — EcoSmart" },
      { name: "description", content: "Talk to EcoSmart. Based in Riyadh, Saudi Arabia." },
      { property: "og:title", content: "Contact — EcoSmart" },
      { property: "og:description", content: "Riyadh, Saudi Arabia." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { Icon: Mail, label: "Email", value: "hello@ecosmart.sa", href: "mailto:hello@ecosmart.sa" },
  { Icon: MapPin, label: "Location", value: "Riyadh, Saudi Arabia", href: "#location" },
  { Icon: Clock, label: "Reply", value: "Within one business day", href: "mailto:hello@ecosmart.sa" },
];

const FAQ = [
  { q: "Where is EcoSmart based?", a: "In Saudi Arabia — designed, produced and delivered by EcoSmart (CR No. 1009200656)." },
  { q: "Can you share technical values and certificates?", a: "Yes. Every product carries a Technical Data Sheet and an Installation Manual. Project-specific test certificates are issued on request against the certified figures." },
  { q: "Do you deliver outside Saudi Arabia?", a: "Our primary market is Saudi Arabia. Delivery outside KSA is possible — send us the project and we'll respond." },
  { q: "How do I request a sample?", a: "Use the request form on the Samples page, or write to hello@ecosmart.sa with your project details and the finishing product you'd like to see." },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Get in touch"
        title="Let's talk"
        emphasis="your project."
        subcopy="Email, WhatsApp or write to us directly. Based in Riyadh, Saudi Arabia. We reply within one business day."
        image={hero}
        primary={{ label: "Email us", to: "/contact" }}
        secondary={{ label: "Browse products", to: "/products" }}
      />

      <section className="border-t border-line/60 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Direct channels
            </div>
            <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
              One inbox, one team.
            </h2>
          </Reveal>
          <RevealGroup className="mt-12 grid gap-4 md:grid-cols-3" stagger={0.06}>
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                data-reveal-item
                className="group flex items-center gap-5 rounded-2xl border border-line/60 bg-canvas p-5 transition-colors hover:border-copper"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-copper/10 text-copper">
                  <c.Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                    {c.label}
                  </div>
                  <div className="mt-1 truncate text-base font-medium">{c.value}</div>
                </div>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-soft transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-copper" />
              </a>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Location card */}
      <section id="location" className="border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Location
            </div>
            <h2 className="display-serifish mt-4 text-3xl md:text-5xl">
              Riyadh, Saudi Arabia.
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 rounded-3xl border border-line/60 bg-canvas p-8 md:grid-cols-3 md:p-12">
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">Facility</div>
              <div className="mt-2 text-base">شركة إيكوسمارت</div>
              <div className="mt-1 text-sm text-ink-soft">EcoSmart</div>
            </div>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">Address</div>
              <div className="mt-2 text-base">Riyadh</div>
              <div className="mt-1 text-sm text-ink-soft">Riyadh, Saudi Arabia</div>
            </div>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">Registration</div>
              <div className="mt-2 text-base">CR No. 1009200656</div>
              <div className="mt-1 text-sm text-ink-soft">ecosmart.sa</div>
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="border-t border-line/60 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Write to us
            </div>
            <h2 className="display-serifish mt-3 text-3xl md:text-5xl">
              Tell us about the project.
            </h2>
          </Reveal>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
            className="mt-10 rounded-3xl border border-line/60 bg-canvas p-6 md:p-10"
          >
            <div className="grid gap-6 md:grid-cols-2">
              {[
                { l: "Full name", n: "name", required: true },
                { l: "Company / practice", n: "company" },
                { l: "Email", n: "email", type: "email", required: true },
                { l: "Phone", n: "phone" },
              ].map((f) => (
                <label key={f.n} className="block">
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                    {f.l} {f.required ? <span className="text-copper">*</span> : null}
                  </span>
                  <input
                    name={f.n}
                    type={f.type ?? "text"}
                    required={f.required}
                    className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper"
                  />
                </label>
              ))}
              <label className="block md:col-span-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                  What's it about?
                </span>
                <select
                  name="type"
                  className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper"
                >
                  <option>Sample request</option>
                  <option>Product enquiry</option>
                  <option>Technical data sheet / certificate</option>
                  <option>Project support</option>
                  <option>Distributor / partnership</option>
                  <option>Careers</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
                  Your message
                </span>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full rounded-lg border border-line bg-canvas px-4 py-3 text-sm outline-none focus:border-copper"
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-8 w-full rounded-full bg-copper py-4 text-sm font-medium text-canvas transition-colors hover:bg-copper-deep"
            >
              Send message
            </button>
            {submitted ? (
              <div className="mt-6 rounded-2xl border border-copper bg-copper/10 p-6 text-center">
                <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                  We've got it
                </div>
                <div className="mt-2">
                  Thanks — we'll reply within one business day.
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Common questions
            </div>
            <h2 className="display-serifish mt-3 text-3xl md:text-4xl">
              Before you write.
            </h2>
          </Reveal>
          <RevealGroup className="mt-10 divide-y divide-line/60" stagger={0.05}>
            {FAQ.map((f) => (
              <details key={f.q} data-reveal-item className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                  <span className="text-lg font-medium">{f.q}</span>
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-copper transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-ink-soft">{f.a}</p>
              </details>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CTABand
        eyebrow="Not ready to write?"
        title="Request a sample — we'll send it to you."
        href="/samples"
        cta="Request a sample"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

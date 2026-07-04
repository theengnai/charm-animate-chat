import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone, Clock } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { SiteFooter } from "@/components/common/SiteFooter";
import { CTABand } from "@/components/common/CTABand";
import { StoryHero } from "@/components/common/StoryHero";
import { StackingCards } from "@/components/motion/StackingCards";
import { Reveal } from "@/components/motion/Reveal";
import { RevealGroup } from "@/components/motion/RevealGroup";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import hero from "@/assets/pages/hero-contact.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Ecosmart" },
      { name: "description", content: "Talk to Ecosmart. Dubai, Riyadh and Doha showrooms. We reply within one business day." },
      { property: "og:title", content: "Contact — Ecosmart" },
      { property: "og:description", content: "Let's build something enduring." },
      { property: "og:image", content: hero },
    ],
  }),
  component: ContactPage,
});

const CHANNELS = [
  { Icon: MessageCircle, label: "WhatsApp", value: "+971 50 000 0000", href: "https://wa.me/971500000000" },
  { Icon: Mail, label: "Email", value: "hello@ecosmart.ae", href: "mailto:hello@ecosmart.ae" },
  { Icon: Phone, label: "Phone", value: "+971 4 000 0000", href: "tel:+97140000000" },
];

const SHOWROOMS = [
  { n: "01", tag: "Headquarters", city: "Dubai", addr: "Al Quoz Industrial 3, Dubai, UAE", hours: "Sun–Thu · 9:00–18:00", phone: "+971 4 000 0000" },
  { n: "02", tag: "Showroom", city: "Riyadh", addr: "Olaya District, Riyadh, KSA", hours: "Sun–Thu · 9:00–18:00", phone: "+966 11 000 0000" },
  { n: "03", tag: "Showroom", city: "Doha", addr: "West Bay, Doha, Qatar", hours: "Sun–Thu · 9:00–18:00", phone: "+974 4 000 0000" },
];

const FAQ = [
  { q: "What are your lead times?", a: "Stock items ship in 3–5 business days. Made-to-order runs 4–8 weeks depending on scope." },
  { q: "Is there a minimum order?", a: "No minimum. We supply anything from a single sample chip to a full-tower façade." },
  { q: "Do you ship internationally?", a: "Yes, worldwide. UAE, KSA and Qatar via our own logistics; other regions via bonded partners." },
  { q: "What warranty do you offer?", a: "Standard 10-year product warranty on all Ecosmart lines. Commercial project terms available." },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-canvas text-ink">
      <TopBar />

      <StoryHero
        eyebrow="Get in touch"
        title="Let's talk"
        emphasis="surfaces."
        subcopy="WhatsApp, email, phone, or a walk through one of three showrooms. We reply within one business day, every day."
        image={hero}
        primary={{ label: "Message us on WhatsApp", to: "/contact" }}
        secondary={{ label: "Visit a showroom", to: "/contact" }}
      />

      {/* Channels — Reveal stagger */}
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

      {/* StackingCards showrooms */}
      <StackingCards
        labelN="02"
        labelText="Showrooms"
        title="Three cities,"
        titleEm="one team."
        description="Every showroom holds the full material library and a specification team who can walk you through your project on the spot."
        items={SHOWROOMS}
        renderItem={(s) => (
          <div className="flex flex-col justify-between w-full max-w-[22rem] md:max-w-md max-h-full mx-auto aspect-square rounded-2xl border border-line/60 bg-canvas p-6 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
            <div className="flex items-start justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft mt-1">
                {s.n}
              </span>
              <span className="grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-copper/30 bg-canvas text-copper">
                <MapPin className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </span>
            </div>
            <div>
              <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                {s.tag}
              </div>
              <h3 className="display-serifish mt-2 text-3xl leading-tight md:text-4xl lg:text-5xl">
                {s.city}
              </h3>
              <div className="mt-4 space-y-1 text-sm text-ink-soft">
                <div>{s.addr}</div>
                <div>{s.hours}</div>
                <div>{s.phone}</div>
              </div>
            </div>
          </div>
        )}
      />

      {/* Form */}
      <section className="border-t border-line/60 bg-canvas-2/40 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
              Or write to us
            </div>
            <h2 className="display-serifish mt-3 text-3xl md:text-5xl">
              Tell us what you're building.
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
                  <option>Quote / pricing</option>
                  <option>Project consultation</option>
                  <option>Design services</option>
                  <option>Visualizer early access</option>
                  <option>Press</option>
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
                  Reference #ES-2607-{Math.floor(Math.random() * 9000 + 1000)} — we'll reply within one business day.
                </div>
              </div>
            ) : null}
          </form>
        </div>
      </section>

      {/* Map */}
      <section className="border-t border-line/60">
        <iframe
          title="Ecosmart Dubai HQ"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.9!2d55.226!3d25.126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2sAl+Quoz+Industrial+3!5e0!3m2!1sen!2sae!4v1700000000000"
          className="h-[420px] w-full grayscale"
          loading="lazy"
        />
      </section>

      {/* NEW — Response times & office hours */}
      <section className="border-t border-line/60 bg-ink px-5 py-20 text-canvas md:px-10">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
          {[
            { Icon: Clock, l: "First reply", v: "Within 1 business day" },
            { Icon: Clock, l: "Office hours", v: "Sun–Thu · 9:00–18:00 GST" },
            { Icon: Clock, l: "After hours", v: "WhatsApp is monitored until 22:00" },
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
        title="Order a sample kit and we'll be in touch when it ships."
        href="/samples"
        cta="Request a kit"
      />

      <SiteFooter />
      <WhatsAppButton />
    </div>
  );
}

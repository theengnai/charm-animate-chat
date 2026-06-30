import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EcoSmart | Façade Systems & Architectural Materials" },
      {
        name: "description",
        content:
          "EcoSmart is a specialized provider of façade systems, architectural materials and design-driven surface solutions across Saudi Arabia and the GCC.",
      },
      { property: "og:title", content: "About — EcoSmart" },
      {
        property: "og:description",
        content:
          "Façade systems, architectural materials and design-driven surface solutions across Saudi Arabia and the GCC.",
      },
    ],
  }),
  component: AboutPage,
});

const EXPERTISE = [
  {
    n: "01",
    sym: "⊞",
    title: "Façade Systems",
    body: "Comprehensive curtain wall, ventilated façade, and cladding solutions engineered for performance and aesthetic precision.",
  },
  {
    n: "02",
    sym: "◮",
    title: "Architectural Surfaces",
    body: "Premium surface materials — stone, composite panels, and engineered finishes — for exterior and interior architectural applications.",
  },
  {
    n: "03",
    sym: "⌂",
    title: "Interior Finishes",
    body: "Curated interior materials including wall panels, feature surfaces, and decorative finishes that elevate every space.",
  },
  {
    n: "04",
    sym: "⚲",
    title: "Outdoor Solutions",
    body: "Weather-resistant decking, pergola systems, and landscape materials designed for the demanding GCC climate.",
  },
  {
    n: "05",
    sym: "◐",
    title: "Technical Design Support",
    body: "End-to-end technical guidance — from material selection and specification to detailed shop drawings and installation oversight.",
  },
];

const APPROACH = [
  {
    sym: "◆",
    title: "Material Expertise",
    body: "Deep product knowledge across façade, surface, and finishing categories to guide you to the right solution.",
  },
  {
    sym: "◇",
    title: "Design Guidance",
    body: "Collaborative support from concept to specification — helping architects and designers make confident material decisions.",
  },
  {
    sym: "⬡",
    title: "Visualization Support",
    body: "Digital tools and rendered previews that let you see exactly how materials will look in your project before commitment.",
  },
  {
    sym: "⬢",
    title: "Technical Assistance",
    body: "Detailed specifications, shop drawings, and engineering support to ensure seamless integration and installation.",
  },
  {
    sym: "○",
    title: "Reliable Supply",
    body: "Established partnerships with leading global manufacturers, ensuring consistent quality and timely delivery across the GCC.",
  },
];

const SOLUTIONS = [
  {
    n: "01",
    cat: "Exterior",
    title: "Façade & Cladding Systems",
    body: "Engineered panel systems and ventilated façades for high-performance building envelopes.",
  },
  {
    n: "02",
    cat: "Surfaces",
    title: "Architectural Surfaces",
    body: "Premium stone, composite, and mineral surfaces for contemporary architecture.",
  },
  {
    n: "03",
    cat: "Finishes",
    title: "Interior & Outdoor Finishes",
    body: "Curated materials for interior feature walls, outdoor living, and landscape applications.",
  },
];

function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-canvas text-ink">
      <TopBar />

      {/* HERO */}
      <section className="relative px-5 pt-32 pb-20 md:px-10 md:pt-40 md:pb-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-copper"
          >
            About EcoSmart
          </motion.span>

          <div className="mt-6 overflow-hidden">
            {"Façade systems. Architectural materials."
              .split(" ")
              .map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ y: 80, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.15 + i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`display-serifish mr-3 inline-block text-4xl md:text-6xl lg:text-7xl ${
                    word === "materials." ? "italic text-copper" : ""
                  }`}
                >
                  {word}
                </motion.span>
              ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 max-w-2xl text-base leading-relaxed text-ink-soft md:text-lg"
          >
            EcoSmart is a specialized provider of façade systems, architectural
            materials and design-driven surface solutions. We help architects,
            developers, and designers choose, visualize, and implement better
            surfaces — from concept through installation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.85 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-canvas"
              style={{
                background: "linear-gradient(135deg,#d89060 0%,#b4592c 100%)",
                boxShadow: "0 14px 30px -10px rgba(180,89,44,0.5)",
              }}
            >
              <span className="font-medium tracking-wide">Explore our expertise</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-canvas/40 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40 hover:bg-ink/[0.04]"
            >
              <span className="relative">
                Order a sample
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-16 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[0.6rem] uppercase tracking-[0.22em] text-ink-soft/80"
          >
            <span>Saudi Arabia &amp; GCC</span>
            <span className="text-copper/50">·</span>
            <span>Façade &amp; Surface Solutions</span>
            <span className="text-copper/50">·</span>
            <span>Architecture · Design · Build</span>
            <span className="text-copper/50">·</span>
            <span>Design-Driven Excellence</span>
          </motion.div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section id="expertise" className="relative border-t border-line/60 px-5 py-20 md:px-10 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-copper">What we do</span>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl lg:text-6xl">
            Our Areas of <em className="italic text-copper">Expertise.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            From façade engineering to interior finishes, we deliver
            comprehensive architectural surface solutions backed by deep
            technical knowledge.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line/60 bg-line/40 md:grid-cols-2 lg:grid-cols-3">
            {EXPERTISE.map((e, i) => (
              <motion.div
                key={e.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="group relative bg-canvas p-7 transition-colors hover:bg-canvas-2"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-ink-soft">
                    {e.n}
                  </span>
                  <span className="text-2xl text-copper">{e.sym}</span>
                </div>
                <h3 className="display-serifish mt-6 text-xl md:text-2xl">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{e.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative border-t border-line/60 bg-canvas-2/50 px-5 py-20 md:px-10 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <span className="eyebrow text-copper">How we work</span>
          <h2 className="display-serifish mt-4 text-3xl md:text-5xl lg:text-6xl">
            The EcoSmart <em className="italic text-copper">Approach.</em>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ink-soft md:text-base">
            We combine material expertise with modern digital tools — guiding
            you from selection to specification, from visualization to
            delivery.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative rounded-2xl border border-line/60 bg-canvas p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span className="text-xl text-copper">{a.sym}</span>
                </div>
                <h3 className="display-serifish mt-5 text-lg md:text-xl">{a.title}</h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft">
                  {a.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative border-t border-line/60 px-5 py-20 md:px-10 md:py-28 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow text-copper">Solutions</span>
              <h2 className="display-serifish mt-4 text-3xl md:text-5xl lg:text-6xl">
                A portfolio of <em className="italic text-copper">proven</em> solutions.
              </h2>
            </div>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-copper"
            >
              Explore all products
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-line/60 bg-canvas p-7 transition-all hover:border-copper/40"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">
                    {s.n} / {s.cat}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-copper transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
                </div>
                <h3 className="display-serifish mt-8 text-2xl md:text-3xl">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{s.body}</p>
                <div className="mt-8 flex items-end justify-between">
                  <span className="display-serifish text-5xl text-copper/30">{s.n}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative border-t border-line/60 bg-canvas-2/50 px-5 py-20 md:px-10 md:py-28 lg:px-20">
        <div className="mx-auto max-w-5xl">
          <span className="eyebrow text-copper">Our Vision</span>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="display-serifish mt-6 text-2xl leading-[1.25] md:text-4xl lg:text-5xl"
          >
            <span className="text-copper">"</span>To become the leading platform
            for architectural surface and façade solutions in Saudi Arabia and
            the GCC, connecting <em className="italic text-copper">innovative materials</em>, design expertise and modern customer experiences.<span className="text-copper">"</span>
          </motion.blockquote>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-line/60 bg-line/40 md:grid-cols-3">
            {[
              {
                k: "Focus",
                v: "Premium architectural materials and façade solutions — helping clients choose, visualize, and implement better surfaces.",
              },
              {
                k: "Market",
                v: "Saudi Arabia and the GCC — serving architects, developers, designers, and contractors across the region.",
              },
              {
                k: "Difference",
                v: "Bridging innovative materials with digital tools, design expertise, and a modern customer experience.",
              },
            ].map((b) => (
              <div key={b.k} className="bg-canvas p-7">
                <span className="font-mono text-[0.62rem] uppercase tracking-[0.28em] text-copper">
                  {b.k}
                </span>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
                  {b.v}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative border-t border-line/60 px-5 py-20 md:px-10 md:py-28 lg:px-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="eyebrow text-copper">Get in touch</span>
            <h2 className="display-serifish mt-4 text-3xl md:text-5xl lg:text-6xl">
              Let's build <em className="italic text-copper">together.</em>
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
              Bring a project, a specification, or a question. We're here to
              help you find the right materials and bring your vision to life.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href="mailto:hello@ecosmart.ae"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-canvas"
                style={{
                  background: "linear-gradient(135deg,#d89060 0%,#b4592c 100%)",
                  boxShadow: "0 14px 30px -10px rgba(180,89,44,0.5)",
                }}
              >
                <span className="font-medium tracking-wide">Request samples</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" strokeWidth={2} />
              </a>
              <a
                href="mailto:hello@ecosmart.ae"
                className="group inline-flex items-center gap-2 rounded-full border border-ink/20 bg-canvas/40 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40 hover:bg-ink/[0.04]"
              >
                <span className="relative">
                  Get a quote
                  <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all duration-300 group-hover:w-full" />
                </span>
              </a>
            </div>
          </div>

          <ul className="space-y-4 self-center text-sm">
            <li className="flex items-center gap-4 rounded-2xl border border-line/60 bg-canvas p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
                <Mail className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <a href="mailto:hello@ecosmart.ae" className="hover:text-copper">
                hello@ecosmart.ae
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-line/60 bg-canvas p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
                <Phone className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <a href="tel:+966000000000" className="hover:text-copper">
                +966 00 000 0000
              </a>
            </li>
            <li className="flex items-center gap-4 rounded-2xl border border-line/60 bg-canvas p-5">
              <span className="grid h-10 w-10 place-items-center rounded-full border border-copper/30 bg-copper-light/10 text-copper">
                <MapPin className="h-4 w-4" strokeWidth={1.6} />
              </span>
              <span className="text-ink-soft">Saudi Arabia &amp; GCC</span>
            </li>
          </ul>
        </div>
      </section>

      <footer className="border-t border-line/60 px-5 py-10 md:px-10 lg:px-20">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
          <span>© 2026 EcoSmart. All rights reserved.</span>
          <Link to="/" className="hover:text-copper">← Back home</Link>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

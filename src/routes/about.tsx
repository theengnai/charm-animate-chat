import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Layers, Compass, Eye, Wrench, Truck } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";

import heroFacade from "@/assets/about/hero-facade.jpg";
import solArchitect from "@/assets/about/sol-architect.jpg";
import solFacade from "@/assets/about/sol-facade.jpg";
import solInterior from "@/assets/about/sol-interior.jpg";
import detailFabric from "@/assets/about/detail-fabric.jpg";

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
      { property: "og:image", content: heroFacade },
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
    highlight: true,
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
  { sym: "◆", title: "Material Expertise", body: "Deep product knowledge across façade, surface, and finishing categories to guide you to the right solution." },
  { sym: "◇", title: "Design Guidance", body: "Collaborative support from concept to specification — helping architects and designers make confident material decisions." },
  { sym: "⬡", title: "Visualization Support", body: "Digital tools and rendered previews that let you see exactly how materials will look in your project before commitment." },
  { sym: "⬢", title: "Technical Assistance", body: "Detailed specifications, shop drawings, and engineering support to ensure seamless integration and installation." },
  { sym: "○", title: "Reliable Supply", body: "Established partnerships with leading global manufacturers, ensuring consistent quality and timely delivery across the GCC." },
];

const SOLUTIONS = [
  { n: "01", cat: "Exterior", title: "Façade & Cladding Systems", body: "Engineered panel systems and ventilated façades for high-performance building envelopes.", img: solArchitect },
  { n: "02", cat: "Surfaces", title: "Architectural Surfaces", body: "Premium stone, composite, and mineral surfaces for contemporary architecture.", img: solFacade },
  { n: "03", cat: "Finishes", title: "Interior & Outdoor Finishes", body: "Curated materials for interior feature walls, outdoor living, and landscape applications.", img: solInterior },
];

const STRIP = [solArchitect, detailFabric, solFacade, solInterior];

const FOOTER_COLS = [
  { h: "Solutions", items: ["Façade Systems", "Architectural Surfaces", "Interior Finishes", "Outdoor Solutions", "Custom Projects"] },
  { h: "Company", items: ["About", "Our Vision", "Team", "Careers"] },
  { h: "Support", items: ["Technical Specs", "Design Guidance", "Visualization", "Downloads"] },
  { h: "Resources", items: ["Product Library", "Case Studies", "Journal", "Certifications"] },
];

function SectionLabel({ n, children }: { n: string; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] text-ink-soft">
      <span>{n}</span>
      <span className="h-px w-8 bg-ink/20" />
      <span>{children}</span>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-canvas text-ink">
      <TopBar />

      {/* HERO */}
      <section className="relative px-5 pt-28 pb-16 md:px-10 md:pt-32 md:pb-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionLabel n="01">About EcoSmart</SectionLabel>

              <h1 className="display-serifish mt-8 text-5xl leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
                Façade systems.<br />
                Architectural<br />
                <em className="italic text-copper">materials.</em>
              </h1>

              <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                EcoSmart is a specialized provider of façade systems, architectural materials and design-driven surface solutions.
              </p>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                We help architects, developers, and designers choose, visualize, and implement better surfaces — from concept through installation.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="#expertise"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-medium tracking-wide">Explore our expertise</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40"
                >
                  Order a sample
                </a>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative aspect-square w-full overflow-hidden rounded-md"
            >
              <img
                src={heroFacade}
                alt="Modern architectural façade at dusk"
                width={1280}
                height={1280}
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>

          <div className="mt-16 flex flex-wrap items-center gap-x-10 gap-y-3 border-t border-line/60 pt-6 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-ink-soft">
            <span>Saudi Arabia &amp; GCC</span>
            <span>Façade &amp; Surface Solutions</span>
            <span>Architecture · Design · Build</span>
            <span className="ml-auto">Design-Driven Excellence.</span>
          </div>
        </div>
      </section>

      {/* EXPERTISE — list rows */}
      <section id="expertise" className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="02">What we do</SectionLabel>
          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div>
              <h2 className="display-serifish text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
                Our Areas of <em className="italic text-copper">Expertise.</em>
              </h2>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-soft">
                From façade engineering to interior finishes, we deliver comprehensive architectural surface solutions backed by deep technical knowledge.
              </p>
            </div>

            <ul className="divide-y divide-line/60 border-y border-line/60">
              {EXPERTISE.map((e, i) => (
                <motion.li
                  key={e.n}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group grid grid-cols-[40px_44px_1fr_2fr] items-start gap-4 px-2 py-5 transition-colors md:gap-6 md:py-6 ${
                    e.highlight ? "bg-copper/[0.08]" : "hover:bg-canvas-2/60"
                  }`}
                >
                  <span className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-ink-soft">{e.n}</span>
                  <span className={`text-xl ${e.highlight ? "text-copper" : "text-ink-soft"}`}>{e.sym}</span>
                  <h3 className={`text-base font-medium md:text-lg ${e.highlight ? "text-copper" : ""}`}>{e.title}</h3>
                  <p className="text-[0.82rem] leading-relaxed text-ink-soft md:text-sm">{e.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="03">How we work</SectionLabel>
          <h2 className="display-serifish mt-8 text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
            The EcoSmart <em className="italic text-copper">Approach.</em>
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink-soft md:text-base">
            We combine material expertise with modern digital tools — guiding you from selection to specification, from visualization to delivery.
          </p>

          <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-line/60 bg-line/60 md:grid-cols-2 lg:grid-cols-5">
            {APPROACH.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="bg-canvas p-6"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">
                    {String(i + 1).padStart(2, "0")} / 05
                  </span>
                  <span className="text-lg text-copper">{a.sym}</span>
                </div>
                <h3 className="mt-8 text-base font-medium">{a.title}</h3>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-ink-soft">{a.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="04">Solutions</SectionLabel>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display-serifish text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              A portfolio of <em className="italic text-copper">proven</em> solutions.
            </h2>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.25em] text-ink"
            >
              Explore all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group overflow-hidden rounded-md border border-line/60 bg-canvas"
              >
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-6">
                  <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">
                    {s.n} / {s.cat}
                  </span>
                  <h3 className="mt-4 text-lg font-medium">{s.title}</h3>
                  <p className="mt-2 text-[0.82rem] leading-relaxed text-ink-soft">{s.body}</p>
                  <div className="mt-6 flex items-center justify-between border-t border-line/60 pt-4">
                    <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-ink-soft">{s.n}</span>
                    <span className="grid h-8 w-8 place-items-center rounded-full border border-line/80 text-ink transition-colors group-hover:border-copper group-hover:text-copper">
                      <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION */}
      <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="05">Our Vision</SectionLabel>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div />
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8 }}
              className="display-serifish border-l-2 border-copper pl-8 text-2xl italic leading-[1.3] text-ink md:text-3xl lg:text-4xl"
            >
              "To become the leading platform for architectural surface and façade solutions in Saudi Arabia and the GCC, connecting innovative materials, design expertise and modern customer experiences."
            </motion.blockquote>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line/60 pt-10 md:grid-cols-3 md:gap-16">
            {[
              { k: "Focus", v: "Premium architectural materials and façade solutions — helping clients choose, visualize, and implement better surfaces." },
              { k: "Market", v: "Saudi Arabia and the GCC — serving architects, developers, designers, and contractors across the region." },
              { k: "Difference", v: "Bridging innovative materials with digital tools, design expertise, and a modern customer experience." },
            ].map((b) => (
              <div key={b.k}>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-ink-soft">{b.k}</span>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP */}
      <section className="relative">
        <div className="grid grid-cols-2 gap-1 md:grid-cols-4">
          {STRIP.map((src, i) => (
            <div key={i} className="aspect-[4/3] overflow-hidden">
              <img
                src={src}
                alt=""
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative px-5 py-24 md:px-10 md:py-32 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="06">Get in touch</SectionLabel>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div />
            <div>
              <h2 className="display-serifish text-5xl leading-[1.02] md:text-6xl lg:text-7xl">
                Let's build<br />
                <em className="italic text-copper">together.</em>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                Bring a project, a specification, or a question. We're here to help you find the right materials and bring your vision to life.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@ecosmart.ae"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-medium tracking-wide">Request samples</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
                <a
                  href="mailto:hello@ecosmart.ae"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40"
                >
                  Get a quote
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1c1b18] px-5 pt-20 pb-10 text-[#d9d4cb] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_3fr] lg:gap-16">
            <div>
              <div className="display-serifish text-3xl tracking-tight text-white">ECOSMART</div>
              <div className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-copper/80">Engineered Within</div>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-[#d9d4cb]/70">
                Façade systems. Architectural materials. Design-driven solutions.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {FOOTER_COLS.map((col) => (
                <div key={col.h}>
                  <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper/80">{col.h}</div>
                  <ul className="mt-5 space-y-2.5 text-sm text-[#d9d4cb]/80">
                    {col.items.map((it) => (
                      <li key={it}><a href="#" className="hover:text-white">{it}</a></li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 border-t border-white/10 pt-8">
            <div className="mb-8">
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper/80">Audiences</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#d9d4cb]/80 md:grid-cols-4 md:max-w-2xl">
                <li>Architects</li>
                <li>Developers</li>
                <li>Designers</li>
                <li>Contractors</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[#d9d4cb]/60">
              <span>© 2026 ECOSMART. All rights reserved.</span>
              <div className="flex items-center gap-6">
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppButton />
    </div>
  );
}

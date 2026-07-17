import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}
import { ArrowRight, ArrowUpRight, Layers, Compass, Eye, Wrench, Truck, LayoutGrid, Triangle, Home, TreePine, Contrast } from "lucide-react";
import { TopBar } from "@/components/nav/TopBar";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import logoUrl from "@/assets/logo.png";

import heroFacade from "@/assets/about/hero-facade.jpg";
import solArchitect from "@/assets/about/sol-architect.jpg";
import solFacade from "@/assets/about/sol-facade.jpg";
import solInterior from "@/assets/about/sol-interior.jpg";
import detailFabric from "@/assets/about/detail-fabric.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — EcoSmart | Saudi Manufacturer of Construction & Finishing Products" },
      {
        name: "description",
        content:
          "EcoSmart is a Saudi manufacturer of construction systems and decoration & finishing products, based in Sudair Industrial City, Riyadh — aligned to Vision 2030 and the Saudi Building Code.",
      },
      { property: "og:title", content: "About — EcoSmart" },
      {
        property: "og:description",
        content:
          "Saudi manufacturer of construction systems and finishing products — Sudair Industrial City, Riyadh.",
      },
      { property: "og:image", content: heroFacade },
    ],
  }),
  component: AboutPage,
});

const EXPERTISE = [
  { n: "01", Icon: LayoutGrid, title: "Lightweight Concrete Wall Panels", body: "Precast lightweight concrete panels with tongue-and-groove edges — internal partitions, external façade and fair-faced variants that replace blockwork with a faster, mortar-light dry assembly." },
  { n: "02", Icon: Triangle, title: "Enhanced T-Floor Hourdi", body: "Precast T-beams with EPS T-shaped hourdi infill and an in-situ structural topping — lower self-weight than a solid slab, with integral thermal performance." },
  { n: "03", Icon: Home, title: "Hybrid Precast Building System", body: "Precast columns, beams, stairs and fences combined with our wall panels and T-floor hourdi decks — a precast frame with built-in insulation and acoustic performance." },
  { n: "04", Icon: TreePine, title: "Enhanced 3D Curved Modular", body: "Volumetric modular buildings — including curved-angle modules, a Saudi-distinctive capability that goes beyond the straight geometries of conventional modular." },
  { n: "05", Icon: Contrast, title: "Decoration & Finishing", body: "PU stone tiles, flexible clay-stone tiles (100% Saudi-made — the only KSA manufacturer), WPC and SPC lines, PVC marble sheets and PVC panel systems for interiors and façades." },
];

const APPROACH = [
  { Icon: Layers, title: "Manufactured in Sudair", body: "Every product is manufactured at our facility in Sudair Industrial City, Riyadh — under our manufacturing entity مصنع إنتيجرا بيلد للتصنيع (Integra Build Manufacturing), CR No. 1009200656." },
  { Icon: Compass, title: "SBC-aligned by design", body: "Structural design across our systems is engineered to the Saudi Building Code. Frame design and connections are project-engineered with your structural designer." },
  { Icon: Eye, title: "Values against the certificate", body: "Technical values are issued against the relevant test certificate and confirmed for the specified application — they are shown as 'To be confirmed' rather than estimated." },
  { Icon: Wrench, title: "Installation, documented", body: "Every product carries an Installation Manual — tools, storage, surface prep, procedure, jointing, quality checks, health & safety and maintenance." },
  { Icon: Truck, title: "Tuned to KSA climate", body: "From the insulated wall system of our portable cabins to the humidity-resistant WPC door leaves — our products are made for the reality of Saudi conditions." },
];

const SOLUTIONS = [
  { n: "01", cat: "Construction Systems", title: "Structural & Envelope Systems", body: "Lightweight concrete wall panels, T-floor hourdi, hybrid precast frames, curved modular units, portable cabins and EPS insulated decorative façades.", img: solArchitect },
  { n: "02", cat: "Decoration & Finishing", title: "Finishing Products", body: "Flexible clay-stone tiles, PU stone tiles, WPC and SPC lines, PVC marble sheets, PVC laminated foam board, PVC wood panels and WPC window & door frames.", img: solFacade },
  { n: "03", cat: "Support", title: "Technical & Project Support", body: "System selection, certificate confirmation and installation method statements — tailored to the site and delivered from a single team.", img: solInterior },
];

const STRIP = [solArchitect, detailFabric, solFacade, solInterior, solArchitect, detailFabric, solFacade, solInterior];

const FOOTER_COLS = [
  { h: "Construction Systems", items: ["Lightweight Concrete Wall Panels", "T-Floor Hourdi", "Hybrid Precast", "Curved Modular", "Portable Cabins", "EPS Façades"] },
  { h: "Decoration & Finishing", items: ["Flexible Clay-Stone", "PU Stone Tiles", "WPC", "SPC", "PVC Marble Sheets", "PVC Wood Panels"] },
  { h: "Support", items: ["Technical Data Sheets", "Installation Manuals", "Test Certificates", "Project Support"] },
  { h: "Company", items: ["About", "Contact", "Vision 2030 / IKTVA", "ecosmart.sa"] },
];

const VISION_TEXT =
  "To lead Saudi manufacturing of construction systems and finishing products — combining SBC-engineered systems with 100% Saudi-made finishing lines that support Vision 2030 and IKTVA, and build better for Saudi.";


function SectionLabel({ n, children, tone = "dark" }: { n: string; children: React.ReactNode; tone?: "dark" | "light" }) {
  const color = tone === "light" ? "text-canvas/70" : "text-ink-soft";
  const line = tone === "light" ? "bg-canvas/30" : "bg-ink/20";
  return (
    <div className={`flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.28em] ${color}`}>
      <span>{n}</span>
      <span className={`h-px w-8 ${line}`} />
      <span>{children}</span>
    </div>
  );
}

function VisionReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.4"] });
  const words = VISION_TEXT.split(" ");
  return (
    <div ref={ref} className="display-serifish border-l-2 border-copper pl-8 text-2xl italic leading-[1.3] md:text-3xl lg:text-4xl">
      {words.map((w, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const color = useTransform(scrollYProgress, [start, end], ["rgba(64,58,50,0.25)", "rgba(24,22,20,1)"]);
        return (
          <motion.span key={i} style={{ color }} className="inline">
            {w}{" "}
          </motion.span>
        );
      })}
    </div>
  );
}

function GsapStackingSection({ labelN, labelText, title, titleEm, description, items, renderItem, sectionId }: any) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  cardsRef.current = [];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardsRef.current.filter(Boolean);
      if (!cards.length) return;

      gsap.set(cards, { transformOrigin: "center top" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${cards.length * 100}%`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        }
      });

      cards.forEach((card, index) => {
        if (index === 0) return;

        const previousCards = cards.slice(0, index);

        tl.add(`card${index}-enter`);
        tl.fromTo(
          card,
          { y: "100vh" },
          { y: "0vh", ease: "none" },
          `card${index}-enter`
        );

        previousCards.forEach((prevCard, pIndex) => {
          const targetScale = 1 - (index - pIndex) * 0.05;
          const targetOpacity = 1 - (index - pIndex) * 0.15;
          tl.to(
            prevCard,
            { scale: targetScale, opacity: targetOpacity, ease: "none" },
            `card${index}-enter`
          );
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  return (
    <section ref={sectionRef} id={sectionId} className="relative w-full h-auto min-h-[84vh] lg:h-screen bg-canvas overflow-hidden">
      <div className="mx-auto w-full max-w-7xl h-full px-5 pt-24 pb-4 md:px-10 lg:px-16 flex flex-col justify-center lg:justify-start lg:flex-row lg:items-center lg:gap-16 lg:pt-0 lg:pb-0">
        <div className="lg:w-1/3">
          <SectionLabel n={labelN}>{labelText}</SectionLabel>
          <h2 className="display-serifish mt-4 lg:mt-8 max-w-3xl text-3xl leading-[1.05] md:text-5xl lg:text-6xl">
            {title} <em className="italic text-copper">{titleEm}</em>
          </h2>
          <p className="mt-3 lg:mt-6 max-w-xl text-sm leading-relaxed text-ink-soft">
            {description}
          </p>
        </div>

        <div className="relative mt-4 lg:mt-0 w-full lg:w-2/3 h-[45vh] lg:h-[60vh] flex items-center">
          {items.map((item: any, i: number) => (
            <div
              key={i}
              ref={(el) => {
                if (el) cardsRef.current[i] = el;
              }}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{ zIndex: i }}
            >
              <div className="w-full">
                {renderItem(item, i)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExpertiseSection() {
  return (
    <GsapStackingSection
      sectionId="expertise"
      labelN="02"
      labelText="What we do"
      title="Our Areas of"
      titleEm="Expertise."
      description="From façade engineering to interior finishes, we deliver comprehensive architectural surface solutions backed by deep technical knowledge."
      items={EXPERTISE}
      renderItem={(e: any, i: number) => {
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
              <h3 className="display-serifish text-2xl leading-tight md:text-3xl lg:text-4xl">{e.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{e.body}</p>
            </div>
          </div>
        );
      }}
    />
  );
}

function ApproachSection() {
  return (
    <GsapStackingSection
      labelN="03"
      labelText="How we work"
      title="The EcoSmart"
      titleEm="Approach."
      description="We combine material expertise with modern digital tools — guiding you from selection to specification, from visualization to delivery."
      items={APPROACH}
      renderItem={(a: any, i: number) => {
        const Icon = a.Icon;
        return (
          <div className="flex flex-col justify-between w-full max-w-[22rem] md:max-w-md max-h-full mx-auto aspect-square rounded-2xl border border-line/40 bg-canvas p-6 md:p-12 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.35)]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">
                {String(i + 1).padStart(2, "0")} / 05
              </span>
              <span className="grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full border border-copper/40 text-copper">
                <Icon className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
              </span>
            </div>
            <div>
              <h3 className="display-serifish text-2xl leading-tight md:text-3xl lg:text-4xl">{a.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{a.body}</p>
            </div>
          </div>
        );
      }}
    />
  );
}

function AboutPage() {
  return (
    <div className="relative min-h-screen w-full overflow-clip bg-canvas text-ink">
      <TopBar />

      {/* HERO — centered w/ video background */}
      <section className="relative flex min-h-[92vh] items-center justify-center overflow-hidden px-5 pt-28 pb-16 text-center md:px-10 md:pt-32">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={heroFacade}
          className="animate-hero-kenburns absolute inset-0 h-full w-full object-cover"
        >
          <source
            src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_25fps.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/55 to-ink/80" />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <div className="text-canvas">
            <SectionLabel n="01" tone="light">About EcoSmart</SectionLabel>
          </div>

          <h1 className="display-serifish mt-8 text-5xl leading-[1.02] tracking-tight text-canvas md:text-6xl lg:text-7xl">
            Build Better.<br />
            Build <em className="italic text-copper">Saudi.</em>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-relaxed text-canvas/80 md:text-base">
            EcoSmart is a Saudi manufacturer of construction systems and decoration & finishing products, based in Sudair Industrial City, Riyadh — aligned to Vision 2030, IKTVA and the Saudi Building Code.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#expertise"
              className="group inline-flex items-center gap-2 rounded-full bg-canvas px-6 py-3 text-sm text-ink transition-transform hover:-translate-y-0.5"
            >
              <span className="font-medium tracking-wide">Explore what we make</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border border-canvas/40 px-6 py-3 text-sm text-canvas transition-all hover:border-canvas"
            >
              Request a sample
            </a>
          </div>

        </div>
      </section>

      {/* EXPERTISE — stacking cards */}
      <ExpertiseSection />

      {/* APPROACH — stacking cards */}
      <ApproachSection />

      {/* SOLUTIONS */}
      <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="04">Solutions</SectionLabel>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6 border-b border-line/60 pb-6">
            <h2 className="display-serifish text-4xl leading-[1.05] md:text-5xl lg:text-6xl">
              A portfolio of <em className="italic text-copper">proven</em> solutions.
            </h2>
            <Link
              to="/"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-ink"
            >
              Explore all products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
            </Link>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3">
            {SOLUTIONS.map((s, i) => (
              <motion.article
                key={s.n}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className={`group ${i === 1 ? "md:mt-28" : ""}`}
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
                <div className="relative mt-6 p-6 md:p-8">
                  <span className="pointer-events-none absolute top-0 left-0 h-px w-full bg-copper/40" />
                  <span className="pointer-events-none absolute top-0 left-0 h-2/3 w-px bg-copper/40" />

                  <span className="font-mono text-xs uppercase tracking-[0.25em] text-copper">
                    {s.n} / {s.cat}
                  </span>
                  <h3 className="mt-4 text-xl font-medium md:text-2xl">{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">{s.body}</p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-ink-soft">{s.n}</span>
                    <span className="grid h-10 w-10 place-items-center rounded-full border border-line/80 text-ink transition-all duration-300 group-hover:border-copper group-hover:bg-copper group-hover:text-canvas">
                      <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* VISION — scroll-linked word reveal */}
      <section className="relative px-5 py-20 md:px-10 md:py-28 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionLabel n="05">Our Vision</SectionLabel>

          <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
            <div />
            <VisionReveal />
          </div>

          <div className="mt-16 grid grid-cols-1 gap-10 border-t border-line/60 pt-10 md:grid-cols-3 md:gap-16">
            {[
              { k: "Focus", v: "Manufacturing construction systems and decoration & finishing products for the Saudi market — engineered to the Saudi Building Code." },
              { k: "Market", v: "Saudi Arabia — from Sudair Industrial City in Riyadh, serving developers, contractors, architects and site operators nationwide." },
              { k: "Difference", v: "A hybrid frame + panels + hourdi floor system in one package; the only manufacturer of flexible clay-stone tiles in KSA; curved modular capability; 100% Saudi-sourced raw materials on our flexible tile line." },
            ].map((b) => (
              <div key={b.k}>
                <span className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-ink-soft">{b.k}</span>
                <p className="mt-4 text-sm leading-relaxed text-ink-soft">{b.v}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE STRIP — smooth infinite slider */}
      <section className="relative overflow-hidden py-6">
        <div className="flex gap-2 animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {[...STRIP, ...STRIP].map((src, i) => (
            <div key={i} className="relative aspect-[4/3] w-[320px] flex-shrink-0 overflow-hidden md:w-[420px]">
              <img src={src} alt="" loading="lazy" className="h-full w-full object-cover" />
            </div>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
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
                <em className="italic text-copper">Saudi.</em>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-ink-soft md:text-base">
                Bring a project or a specification question. We'll help match the right EcoSmart system and issue the certified values you need.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:hello@ecosmart.sa"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-canvas transition-transform hover:-translate-y-0.5"
                >
                  <span className="font-medium tracking-wide">Request a sample</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" strokeWidth={2} />
                </a>
                <a
                  href="mailto:hello@ecosmart.sa"
                  className="group inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm text-ink transition-all hover:border-ink/40"
                >
                  Talk to our team
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
              <img src={logoUrl} alt="Ecosmart" className="h-10 w-auto md:h-12" />
              <div className="mt-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-copper/80">Build Better. Build Saudi.</div>
              <p className="mt-8 max-w-xs text-sm leading-relaxed text-[#d9d4cb]/70">
                Saudi manufacturer of construction systems and decoration & finishing products. Sudair Industrial City, Riyadh.
              </p>
              <div className="mt-6 space-y-1 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[#d9d4cb]/50">
                <div>مصنع إنتيجرا بيلد للتصنيع</div>
                <div>CR No. 1009200656 · ecosmart.sa</div>
              </div>
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
              <div className="font-mono text-[0.6rem] uppercase tracking-[0.28em] text-copper/80">Serving</div>
              <ul className="mt-4 grid grid-cols-2 gap-x-8 gap-y-2 text-sm text-[#d9d4cb]/80 md:grid-cols-4 md:max-w-2xl">
                <li>Developers</li>
                <li>Contractors</li>
                <li>Architects</li>
                <li>Site operators</li>
              </ul>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6 font-mono text-[0.6rem] uppercase tracking-[0.28em] text-[#d9d4cb]/60">
              <span>© 2026 EcoSmart · مصنع إنتيجرا بيلد للتصنيع. All rights reserved.</span>
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

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSnapSections } from "@/hooks/useSnapSections";
import { useIsMobile } from "@/hooks/use-mobile";
import { TopBar } from "@/components/nav/TopBar";
import { SectionRail } from "@/components/nav/SectionRail";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionShell, type SectionMeta } from "@/components/sections/SectionShell";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { PartnerSection } from "@/components/sections/PartnerSection";
import { SectionTransition } from "@/components/nav/SectionTransition";

import imgDesign from "@/assets/section-design.jpg";
import imgMaterials from "@/assets/section-materials.jpg";
import imgVisualizer from "@/assets/section-visualizer.jpg";
import imgSamples from "@/assets/section-samples.jpg";
import imgGallery from "@/assets/section-gallery.jpg";
import imgTechnical from "@/assets/section-technical.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "EcoSmart — Build Better. Build Saudi." },
      {
        name: "description",
        content:
          "Saudi manufacturer of construction systems and decoration & finishing products. Sudair Industrial City, Riyadh. Aligned to Vision 2030 and the Saudi Building Code.",
      },
      { property: "og:title", content: "EcoSmart — Build Better. Build Saudi." },
      {
        property: "og:description",
        content:
          "Construction systems and finishing products, manufactured in Saudi Arabia.",
      },
    ],
  }),
  component: Index,
});

const TOTAL = 8;

const RAIL = [
  "Ecosmart AI",
  "Visualizer",
  "Products",
  "Projects",
  "Samples",
  "Design Support",
  "Technical",
  "Partner",
];

const SECTIONS: Record<number, SectionMeta> = {
  1: {
    index: 2, total: TOTAL,
    eyebrow: "Visualizer",
    title: "Visualize your project in real time.",
    subtitle: "See it before you build it.",
    body:
      "Drop materials onto your plan or render and watch surfaces resolve at the right scale, joint, and tone — no plug-ins, no waiting.",
    bullets: ["Real-time preview", "No plug-ins", "Any plan or render"],
    image: imgVisualizer,
    primaryCta: { label: "Try the visualizer", href: "/visualizer" },
    secondaryCta: { label: "Watch a demo", href: "/visualizer" },
  },
  2: {
    index: 3, total: TOTAL,
    eyebrow: "Products",
    title: "Curated products and material systems.",
    subtitle: "MCM, EPS, WPC, PVC, PU Stone & Smart Wall Panels.",
    body:
      "A living library of architectural materials — sourced, vetted, and ready to specify. Filter by finish, format, performance, or feeling.",
    bullets: ["Sourced & vetted", "Ready to specify", "Filter by finish or format"],
    image: imgMaterials,
    primaryCta: { label: "Explore the library", href: "/products" },
    secondaryCta: { label: "Talk to a specialist", href: "/contact" },
  },
  3: {
    index: 4, total: TOTAL,
    eyebrow: "Projects",
    title: "Discover inspiring projects and applications.",
    subtitle: "Real surfaces. Real conditions.",
    body:
      "Browse built work using the same materials and systems — façades, interiors, and details documented for reference and reuse.",
    bullets: ["Façades & interiors", "Documented details", "For reference and reuse"],
    image: imgGallery,
    primaryCta: { label: "Browse projects", href: "/projects" },
    secondaryCta: { label: "Submit your project", href: "/contact" },
  },
  4: {
    index: 5, total: TOTAL,
    eyebrow: "Samples",
    title: "Request physical samples with confidence.",
    subtitle: "Hold the material in your hand.",
    body:
      "Order curated sample boxes shipped across the GCC. Every sample arrives with its specification card and finish reference.",
    bullets: ["Shipped across the GCC", "Specification card included", "Finish reference on every chip"],
    image: imgSamples,
    primaryCta: { label: "Request samples", href: "/samples" },
    secondaryCta: { label: "View sample kits", href: "/samples" },
  },
  5: {
    index: 6, total: TOTAL,
    eyebrow: "Design Support",
    title: "SRMD — Specification, Research & Material Design.",
    subtitle: "From sketch to specification.",
    body:
      "Our team pairs your concept with the right material palette, climate response, and detailing — so every line you draw is already buildable.",
    bullets: ["Material palette", "Climate response", "Buildable detailing"],
    image: imgDesign,
    primaryCta: { label: "Start a design brief", href: "/design-services" },
    secondaryCta: { label: "See design services", href: "/design-services" },
  },
  6: {
    index: 7, total: TOTAL,
    eyebrow: "Technical",
    title: "Access technical specifications and documentation.",
    subtitle: "Drawings, data, declarations.",
    body:
      "Every product carries its full technical record — CAD blocks, BIM, test data and environmental declarations — ready to drop into your set.",
    bullets: ["CAD & BIM", "Test data", "Environmental declarations"],
    image: imgTechnical,
    primaryCta: { label: "Download spec pack", href: "/resources" },
    secondaryCta: { label: "Open BIM library", href: "/resources" },
  },
};

function Index() {
  const { active, go } = useSnapSections(TOTAL);
  const isMobile = useIsMobile(true);
  const [displayed, setDisplayed] = useState(active);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    if (active === displayed) return;
    setTransitioning(true);
    // Wait for the transition logo to fully cover the screen before swapping content.
    const swapDelay = isMobile ? 550 : 700;
    const t = window.setTimeout(() => {
      setDisplayed(active);
      setTransitioning(false);
    }, swapDelay);
    return () => window.clearTimeout(t);
  }, [active, displayed, isMobile]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <IntroOverlay />
      <TopBar />
      <SectionRail labels={RAIL} active={active} onPick={go} />

      {/* slide stack */}
      <motion.div
        key={displayed}
        initial={{ opacity: 0 }}
        animate={{ opacity: transitioning ? 0 : 1 }}
        transition={{ duration: transitioning ? 0.18 : 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 h-full w-full"
      >
        {displayed === 0 && <HeroSection active onPickItem={go} />}
        {displayed >= 1 && displayed <= 6 && (
          <SectionShell active meta={SECTIONS[displayed]} />
        )}
        {displayed === 7 && <PartnerSection active />}
      </motion.div>

      <SectionTransition activeKey={active} />


      {/* section counter bottom-left */}
      <div className="fixed bottom-6 left-8 z-30 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-soft">
        <span className="text-copper">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-2 opacity-50">/</span>
        {String(TOTAL).padStart(2, "0")}
      </div>
      <WhatsAppButton />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSnapSections } from "@/hooks/useSnapSections";
import { useIsMobile } from "@/hooks/use-mobile";
import { TopBar } from "@/components/nav/TopBar";
import { SectionRail } from "@/components/nav/SectionRail";
import { HeroSection } from "@/components/sections/HeroSection";
import { SectionShell, type SectionMeta } from "@/components/sections/SectionShell";
import { FooterSection } from "@/components/sections/FooterSection";
import { IntroOverlay } from "@/components/intro/IntroOverlay";
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
      { title: "ECOSMART — Engineered Within" },
      {
        name: "description",
        content:
          "Your intelligent gateway to architectural materials and design solutions. A system, not just a material.",
      },
      { property: "og:title", content: "ECOSMART — Engineered Within" },
      {
        property: "og:description",
        content: "Intelligent gateway to architectural materials and design solutions.",
      },
    ],
  }),
  component: Index,
});

const TOTAL = 8;

const RAIL = [
  "Ecosmart AI",
  "Design",
  "Materials",
  "Visualizer",
  "Samples",
  "Gallery",
  "Technical",
  "System",
];

const SECTIONS: Record<number, SectionMeta> = {
  1: {
    index: 2, total: TOTAL,
    eyebrow: "Design",
    title: "Intelligent design support.",
    subtitle: "From sketch to specification.",
    body:
      "Our AI pairs your concept with the right material palette, climate response, and detailing — so every line you draw is already buildable.",
    bullets: ["Concept matching", "Climate-aware palettes", "Detail libraries"],
    image: imgDesign,
    primaryCta: { label: "Start a design brief" },
    secondaryCta: { label: "See design services" },
  },
  2: {
    index: 3, total: TOTAL,
    eyebrow: "Materials",
    title: "Curated material selection.",
    subtitle: "Travertine, terracotta, terrazzo.",
    body:
      "A living library of architectural materials — sourced, vetted, and ready to specify. Filter by finish, format, performance, or feeling.",
    bullets: ["GCC-tested suppliers", "Full technical sheets", "Live stock & lead times"],
    image: imgMaterials,
    primaryCta: { label: "Explore the library" },
    secondaryCta: { label: "Talk to a specialist" },
  },
  3: {
    index: 4, total: TOTAL,
    eyebrow: "Visualizer",
    title: "Visualize your project in real time.",
    subtitle: "See it before you build it.",
    body:
      "Drop materials onto your plan or render and watch surfaces resolve at the right scale, joint, and tone — no plug-ins, no waiting.",
    bullets: ["Drag & apply", "True-scale joints", "Light-aware preview"],
    image: imgVisualizer,
    primaryCta: { label: "Try the visualizer" },
    secondaryCta: { label: "Watch a demo" },
  },
  4: {
    index: 5, total: TOTAL,
    eyebrow: "Samples",
    title: "Request physical samples with confidence.",
    subtitle: "Hold the material in your hand.",
    body:
      "Order curated sample boxes shipped across the GCC. Every sample arrives with its specification card and finish reference.",
    bullets: ["Same-week dispatch", "Spec card included", "Free for trade"],
    image: imgSamples,
    primaryCta: { label: "Request samples" },
    secondaryCta: { label: "View sample kits" },
  },
  5: {
    index: 6, total: TOTAL,
    eyebrow: "Gallery",
    title: "Discover inspiring projects and applications.",
    subtitle: "Real surfaces. Real conditions.",
    body:
      "Browse built work using the same materials and systems — façades, interiors, and details documented for reference and reuse.",
    bullets: ["Built case studies", "Detail breakdowns", "Photographed in situ"],
    image: imgGallery,
    primaryCta: { label: "Browse projects" },
    secondaryCta: { label: "Submit your project" },
  },
  6: {
    index: 7, total: TOTAL,
    eyebrow: "Technical",
    title: "Access technical specifications and documentation.",
    subtitle: "Drawings, data, declarations.",
    body:
      "Every product carries its full technical record — CAD blocks, BIM, test data and environmental declarations — ready to drop into your set.",
    bullets: ["CAD · BIM · IFC", "EPDs & test reports", "Installation manuals"],
    image: imgTechnical,
    primaryCta: { label: "Download spec pack" },
    secondaryCta: { label: "Open BIM library" },
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
        {displayed === 7 && <FooterSection active />}
      </motion.div>

      <SectionTransition activeKey={active} />


      {/* section counter bottom-left */}
      <div className="fixed bottom-6 left-8 z-30 font-mono text-[0.65rem] uppercase tracking-[0.3em] text-ink-soft">
        <span className="text-copper">{String(active + 1).padStart(2, "0")}</span>
        <span className="mx-2 opacity-50">/</span>
        {String(TOTAL).padStart(2, "0")}
      </div>
    </div>
  );
}

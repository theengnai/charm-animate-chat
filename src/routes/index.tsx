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
    eyebrow: "Visualizer · Coming soon",
    title: "Preview our systems, in place.",
    subtitle: "See it before you build it.",
    body:
      "A concept preview we're building — a way to see EcoSmart panels, floors and finishes on your plan or elevation before you commit. Not live yet.",
    bullets: ["In development", "Join the interest list", "Free to use at launch"],
    image: imgVisualizer,
    primaryCta: { label: "Join the interest list" },
    secondaryCta: { label: "Learn more" },
  },
  2: {
    index: 3, total: TOTAL,
    eyebrow: "Products & Solutions",
    title: "Construction systems and finishing products.",
    subtitle: "Manufactured in Sudair, Riyadh.",
    body:
      "Two ranges made in Saudi Arabia — a Construction Systems line (lightweight concrete panels, T-floor hourdi, hybrid precast, curved modular, insulated cabins, EPS façades) and a Decoration & Finishing line (flexible clay-stone, PU stone, WPC, SPC, PVC).",
    bullets: ["Made in Saudi Arabia", "Aligned to Saudi Building Code", "Test certificates on request"],
    image: imgMaterials,
    primaryCta: { label: "Browse the products" },
    secondaryCta: { label: "Talk to us" },
  },
  3: {
    index: 4, total: TOTAL,
    eyebrow: "Projects & Applications",
    title: "Where our systems are used.",
    subtitle: "Residential, commercial, hospitality, remote sites.",
    body:
      "From hybrid precast residential frames to insulated portable cabins for remote deployments. Project references shared on request under NDA when required.",
    bullets: ["Low- to mid-rise buildings", "Site accommodation & cabins", "Interior & façade finishing"],
    image: imgGallery,
    primaryCta: { label: "Request project references" },
    secondaryCta: { label: "See the applications" },
  },
  4: {
    index: 5, total: TOTAL,
    eyebrow: "Samples",
    title: "Request a physical sample.",
    subtitle: "Handle the material before you specify.",
    body:
      "Samples of our finishing products — flexible clay-stone tiles, PU stone, WPC, SPC, PVC — issued on request from our Sudair facility. Tell us the project and we'll match the right chips.",
    bullets: ["Sent from Sudair", "Matched to your brief", "Specification card included"],
    image: imgSamples,
    primaryCta: { label: "Request a sample" },
    secondaryCta: { label: "See finishing products" },
  },
  5: {
    index: 6, total: TOTAL,
    eyebrow: "Technical & Project Support",
    title: "Choose the right system for the project.",
    subtitle: "From selection to erection.",
    body:
      "Our team helps you match the right EcoSmart system to the project, confirm the certified values you need, and issue the method statement your crew will actually use on site.",
    bullets: ["System selection", "Certificate confirmation", "Installation method statements"],
    image: imgDesign,
    primaryCta: { label: "Talk to our team" },
    secondaryCta: { label: "See what we do" },
  },
  6: {
    index: 7, total: TOTAL,
    eyebrow: "Technical Resources",
    title: "Technical Data Sheets & Installation Manuals.",
    subtitle: "One TDS and one manual per product.",
    body:
      "Every product carries a Technical Data Sheet and an Installation Manual — composition, applications, method, handling, safety and reference standards. Project-specific test certificates issued on request.",
    bullets: ["TDS per product", "Installation manuals", "Certificates on request"],
    image: imgTechnical,
    primaryCta: { label: "Browse the library" },
    secondaryCta: { label: "Request a certificate" },
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

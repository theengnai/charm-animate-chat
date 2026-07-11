import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { VoiceOrb } from "@/components/hero/VoiceOrb";
import {
  ArrowUp,
  Sparkles,
  Mountain,
  Flame,
  LayoutGrid,
  TreePine,
  Waves,
  Square,
  Package,
  Mail,
  Compass,
  FileText,
  Layers,
} from "lucide-react";
import { useEffect, useState } from "react";
import matMaterials from "@/assets/section-materials.jpg";
import matDesign from "@/assets/section-design.jpg";
import matSamples from "@/assets/section-samples.jpg";
import matGallery from "@/assets/section-gallery.jpg";
import matTechnical from "@/assets/section-technical.jpg";
import matVisualizer from "@/assets/section-visualizer.jpg";

const PLACEHOLDERS = [
  "Find material data for terracotta façades…",
  "Compare travertine finishes for a coastal villa…",
  "Spec MCM panels for a 12-storey façade…",
  "Plan a warm minimal interior in flexible stone…",
];

const TOPICS: { label: string; Icon: typeof Mountain }[] = [
  { label: "Travertine", Icon: Mountain },
  { label: "Terracotta", Icon: Flame },
  { label: "MCM Panels", Icon: LayoutGrid },
  { label: "WPC Decking", Icon: TreePine },
  { label: "Flexible Stone", Icon: Waves },
  { label: "SPC Flooring", Icon: Square },
  { label: "EPS Systems", Icon: Package },
];




const MATERIALS: {
  label: string;
  sub: string;
  Icon: typeof Mountain;
  image: string;
  to: "/products" | "/products/$family";
  familyParam?: string;
}[] = [
  { label: "MCM Panels", sub: "Flexible Stone", Icon: Waves, image: matMaterials, to: "/products" },
  { label: "Travertine", sub: "& Stone", Icon: Mountain, image: matGallery, to: "/products" },
  { label: "WPC Decking", sub: "Outdoor", Icon: TreePine, image: matDesign, to: "/products/$family", familyParam: "wpc" },
  { label: "WPC Wall Panels", sub: "Interior", Icon: LayoutGrid, image: matTechnical, to: "/products/$family", familyParam: "panels" },
  { label: "EPS Systems", sub: "Insulation", Icon: Layers, image: matVisualizer, to: "/products" },
  { label: "SPC Flooring", sub: "Interior", Icon: Square, image: matSamples, to: "/products/$family", familyParam: "spc" },
];

const ACTIONS: { label: string; Icon: typeof Mountain; to: string }[] = [
  { label: "Contact us", Icon: Mail, to: "/contact" },
  { label: "Request samples", Icon: Package, to: "/samples" },
  { label: "Design support", Icon: Compass, to: "/design-services" },
  { label: "Get a quote", Icon: FileText, to: "/contact" },
];

export function ChatCard({ onSend }: { onSend?: (q?: string) => void }) {
  const [value, setValue] = useState("");
  const [phIdx, setPhIdx] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const target = PLACEHOLDERS[phIdx];
    let i = 0;
    const id = window.setInterval(() => {
      i++;
      setTyped(target.slice(0, i));
      if (i >= target.length) {
        window.clearInterval(id);
        window.setTimeout(() => setPhIdx((p) => (p + 1) % PLACEHOLDERS.length), 2400);
      }
    }, 38);
    return () => window.clearInterval(id);
  }, [phIdx]);

  const submit = (q?: string) => {
    const text = q ?? value;
    if (q) setValue(q);
    onSend?.(text);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
      className="relative mx-auto w-[calc(100%-3rem)] max-w-[860px] md:w-full"
    >
      {/* ambient copper glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-70 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(216,144,96,0.22), transparent 70%)",
        }}
      />

      <div
        className="relative overflow-hidden rounded-[1.75rem] bg-canvas"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(122,58,27,0.22), 0 8px 24px -10px rgba(26,23,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(26,23,20,0.06)",
        }}
      >
        {/* input row */}
        <div className="relative flex items-center gap-2 px-2 py-2 md:gap-3 md:px-4 md:py-3">
          <div
            className="ml-1 hidden h-9 w-9 shrink-0 place-items-center rounded-xl sm:grid"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,199,154,0.35), rgba(216,144,96,0.18))",
              border: "1px solid rgba(180,89,44,0.25)",
            }}
          >
            <Sparkles className="h-4 w-4 text-copper" strokeWidth={1.6} />
          </div>

          <div className="relative min-w-0 flex-1">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="w-full bg-transparent px-3 py-4 text-base text-ink outline-none md:px-5 md:py-5 md:text-xl"
              aria-label="Ask Ecosmart"
            />
            {!value && (
              <span className="pointer-events-none absolute left-3 top-1/2 max-w-full -translate-y-1/2 truncate pr-2 text-base text-ink-soft/55 md:left-5 md:text-xl">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] animate-[caret_1s_steps(2)_infinite] bg-copper/70">
                  &nbsp;
                </span>
              </span>
            )}
          </div>

          <motion.button
            type="button"
            onClick={() => submit()}
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="mr-1 flex h-11 shrink-0 items-center gap-2 rounded-xl px-3 text-sm font-medium text-canvas md:h-12 md:px-5 md:text-[0.95rem]"
            style={{
              background:
                "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
              boxShadow: "0 14px 30px -10px rgba(180,89,44,0.55)",
            }}
            aria-label="Consult"
          >
            <span className="hidden sm:inline">Consult</span>
            <ArrowUp className="h-4 w-4 rotate-45" strokeWidth={2.4} />
          </motion.button>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-ink/5" />

        {/* suggested topics row */}
        <div
          className="px-4 py-4 md:px-6 md:py-6"
          style={{ background: "color-mix(in oklab, var(--canvas-2) 60%, transparent)" }}
        >
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft/80">
            Suggested topics
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2.5">
            {TOPICS.map(({ label, Icon }, i) => (
              <motion.button
                key={label}
                type="button"
                onClick={() => submit(`Tell me about ${label}`)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-1.5 rounded-full border border-copper-light/35 bg-canvas px-2.5 py-1.5 text-[0.7rem] text-ink/85 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep md:gap-2 md:px-4 md:py-2 md:text-sm"
              >
                <Icon className="h-3 w-3 text-copper md:h-3.5 md:w-3.5" strokeWidth={1.8} />
                {label}
              </motion.button>
            ))}
          </div>

          <div className="my-4 h-px w-full bg-ink/5" />

          <div className="mb-3 flex items-baseline gap-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft/80">
              Explore materials
            </div>
            <Link
              to="/products"
              className="text-[0.7rem] text-copper hover:text-copper-deep hover:underline"
            >
              Browse all →
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-2 md:grid-cols-6 md:gap-2.5">
            {MATERIALS.map(({ label, sub, Icon, image, to, familyParam }, i) => {
              const cardClass =
                "group relative block aspect-[3/4] overflow-hidden rounded-xl border border-copper-light/25 bg-canvas-2";
              const inner = (
                <>
                  <img
                    src={image}
                    alt={label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-transparent" />
                  <div className="absolute left-1/2 top-3 -translate-x-1/2 grid h-7 w-7 place-items-center rounded-full bg-canvas shadow-sm md:h-8 md:w-8">
                    <Icon className="h-3.5 w-3.5 text-copper md:h-4 md:w-4" strokeWidth={1.8} />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-2.5 md:p-3">
                    <div className="text-[0.72rem] font-semibold leading-tight text-canvas md:text-sm">
                      {label}
                    </div>
                    <div className="text-[0.62rem] leading-tight text-canvas/75 md:text-[0.7rem]">
                      {sub}
                    </div>
                  </div>
                </>
              );
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.55 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  {to === "/products/$family" && familyParam ? (
                    <Link to="/products/$family" params={{ family: familyParam }} className={cardClass}>
                      {inner}
                    </Link>
                  ) : (
                    <Link to="/products" className={cardClass}>
                      {inner}
                    </Link>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="my-4 h-px w-full bg-ink/5" />

          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft/80">
            Quick actions
          </div>
          <div className="flex flex-wrap gap-1.5 md:gap-2.5">
            {ACTIONS.map(({ label, Icon, to }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.7 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
              >
                <Link
                  to={to}
                  className="inline-flex items-center gap-1.5 rounded-full border border-copper-light/35 bg-canvas px-2.5 py-1.5 text-[0.7rem] text-ink/85 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep md:gap-2 md:px-4 md:py-2 md:text-sm"
                >
                  <Icon className="h-3 w-3 text-copper md:h-3.5 md:w-3.5" strokeWidth={1.8} />
                  {label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* glassy voice orb embedded at bottom-center of the card */}
      <VoiceOrb />
    </motion.div>
  );
}

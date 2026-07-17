import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { VoiceOrb } from "@/components/hero/VoiceOrb";
import {
  ArrowUp,
  Sparkles,
  Mountain,
  LayoutGrid,
  TreePine,
  Waves,
  Square,
  Package,
  Mail,
  Compass,
  FileText,
  Layers,
  Home,
  Image as ImageIcon,
  User,
  Wrench,
  Info,
  MessageCircle,
  BookOpen,
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

// Ordered so first 4 = mobile, first 6 = tablet, all 8 = desktop
const QUESTIONS: { label: string; Icon: typeof Mountain }[] = [
  { label: "I want to renovate my villa façade", Icon: Home },
  { label: "Which material is right for my project?", Icon: Sparkles },
  { label: "Request a product catalog", Icon: BookOpen },
  { label: "I need a quotation for my project", Icon: FileText },
  { label: "Can I see a preview before deciding?", Icon: ImageIcon },
  { label: "I need technical information", Icon: Info },
  { label: "I'm an architect or designer", Icon: User },
  { label: "Tell me about your installation service", Icon: Wrench },
];

const MATERIALS: {
  label: string;
  sub: string;
  Icon: typeof Mountain;
  image: string;
  to: "/products" | "/products/$family";
  familyParam?: string;
}[] = [
    { label: "MCM", sub: "Flexible stone", Icon: Waves, image: matMaterials, to: "/products" },
    { label: "EPS", sub: "Insulation", Icon: Mountain, image: matVisualizer, to: "/products" },
    { label: "WPC Decking", sub: "Outdoor", Icon: TreePine, image: matDesign, to: "/products/$family", familyParam: "wpc" },
    { label: "PVC Wood Panels", sub: "panels", Icon: LayoutGrid, image: matTechnical, to: "/products/$family", familyParam: "panels" },
    { label: "PU Stone", sub: "Decorative tiles", Icon: Layers, image: matGallery, to: "/products" },
    { label: "Smart Wall Panels", sub: "panels", Icon: Square, image: matSamples, to: "/products/$family", familyParam: "spc" },
  ];

// Mobile shows first 3, tablet+ shows all 4
const ACTIONS: { label: string; Icon: typeof Mountain; to: string }[] = [
  { label: "Contact us", Icon: Mail, to: "/contact" },
  { label: "Request samples", Icon: Package, to: "/samples" },
  { label: "Get a quote", Icon: FileText, to: "/contact" },
  { label: "Design support", Icon: Compass, to: "/design-services" },
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

  const onWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (e.deltaY !== 0) {
      e.currentTarget.scrollLeft += e.deltaY;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
      className="relative mx-auto w-[calc(100%-1.5rem)] max-w-[760px] sm:w-[calc(100%-3rem)] lg:w-full"
    >
      {/* ambient copper glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-3 -z-10 rounded-[2rem] opacity-40 blur-xl sm:-inset-6 sm:rounded-[3rem] sm:opacity-70 sm:blur-2xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(216,144,96,0.22), transparent 70%)",
        }}
      />

      <div
        className="relative overflow-hidden rounded-2xl bg-canvas lg:rounded-[1.75rem]"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(122,58,27,0.22), 0 8px 24px -10px rgba(26,23,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(26,23,20,0.06)",
        }}
      >
        {/* input row */}
        <div className="relative flex items-center gap-1.5 px-1.5 py-1.5 sm:gap-2 sm:px-2.5 sm:py-2 lg:gap-3 lg:px-3 lg:py-2.5">
          <div
            className="hidden h-8 w-8 shrink-0 place-items-center rounded-lg sm:ml-1 sm:grid lg:h-9 lg:w-9 lg:rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,199,154,0.35), rgba(216,144,96,0.18))",
              border: "1px solid rgba(180,89,44,0.25)",
            }}
          >
            <Sparkles className="h-3.5 w-3.5 text-copper lg:h-4 lg:w-4" strokeWidth={1.6} />
          </div>

          <div className="relative min-w-0 flex-1">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="w-full truncate bg-transparent px-2 py-2 text-[0.82rem] text-ink outline-none sm:px-3 sm:py-2.5 sm:text-sm lg:px-4 lg:py-3.5 lg:text-base"
              aria-label="Ask Ecosmart"
            />
            {!value && (
              <span className="pointer-events-none absolute left-2 top-1/2 max-w-full -translate-y-1/2 truncate pr-2 text-[0.82rem] text-ink-soft/55 sm:left-3 sm:text-sm lg:left-4 lg:text-base">
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
            className="mr-0.5 flex h-8 w-8 shrink-0 items-center justify-center gap-1.5 rounded-lg text-xs font-medium text-canvas sm:mr-1 sm:h-9 sm:w-auto sm:px-2.5 lg:h-10 lg:rounded-xl lg:px-4 lg:text-sm"
            style={{
              background:
                "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
              boxShadow: "0 14px 30px -10px rgba(180,89,44,0.55)",
            }}
            aria-label="Consult"
          >
            <span className="hidden sm:inline">Consult</span>
            <ArrowUp className="h-3.5 w-3.5 rotate-45 lg:h-4 lg:w-4" strokeWidth={2.4} />
          </motion.button>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-ink/5" />

        {/* body */}
        <div
          className="px-2.5 py-2.5 sm:px-4 sm:py-4 lg:px-5 lg:py-5 [@media(max-height:850px)]:py-3 [@media(max-height:750px)]:py-2"
          style={{ background: "color-mix(in oklab, var(--canvas-2) 60%, transparent)" }}
        >
          {/* Popular questions */}
          <div className="mb-2 flex items-center gap-1.5 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink-soft/80 sm:mb-2.5 sm:gap-2 sm:text-[0.62rem] sm:tracking-[0.24em] lg:text-[0.68rem] lg:tracking-[0.3em] [@media(max-height:850px)]:mb-1.5">
            <MessageCircle className="h-3 w-3 text-copper" strokeWidth={1.8} />
            Popular questions
          </div>
          <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
            {QUESTIONS.map(({ label, Icon }, i) => {
              // Mobile: first 4. Tablet: first 6. Desktop: all 8.
              const visibility =
                i < 4 ? "" : i < 6 ? "hidden sm:flex" : "hidden lg:flex";
              return (
                <motion.button
                  key={label}
                  type="button"
                  onClick={() => submit(label)}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.3 + i * 0.04, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                  className={`${visibility} flex min-w-0 items-center gap-1.5 rounded-lg border border-copper-light/35 bg-canvas px-2 py-1.5 text-left text-[0.62rem] leading-tight text-ink/85 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep sm:gap-2 sm:px-2.5 sm:py-2 sm:text-[0.68rem] lg:gap-2.5 lg:rounded-xl lg:px-3 lg:py-2.5 lg:text-[0.75rem]`}
                >
                  <Icon className="h-3 w-3 shrink-0 text-copper lg:h-4 lg:w-4" strokeWidth={1.8} />
                  <span className="min-w-0">{label}</span>
                </motion.button>
              );
            })}
          </div>

          <div className="my-2.5 h-px w-full bg-ink/5 lg:my-4 [@media(max-height:850px)]:my-2" />

          {/* Explore materials */}
          <div className="mb-2 flex items-baseline gap-2.5 sm:mb-2.5 sm:gap-3 [@media(max-height:850px)]:mb-1.5">
            <div className="font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink-soft/80 sm:text-[0.62rem] sm:tracking-[0.24em] lg:text-[0.68rem] lg:tracking-[0.3em]">
              Explore materials
            </div>
            <Link
              to="/products"
              className="text-[0.58rem] text-copper hover:text-copper-deep hover:underline sm:text-[0.62rem] lg:text-[0.68rem]"
            >
              Browse all →
            </Link>
          </div>

          {/* Explore materials cards */}
          <div 
            className="flex w-full snap-x snap-mandatory gap-1.5 overflow-x-auto pb-2 custom-scroll sm:gap-2 lg:grid lg:grid-cols-6 lg:gap-2.5 lg:overflow-visible lg:pb-0 [@media(max-height:700px)]:!flex [@media(max-height:700px)]:!w-full [@media(max-height:700px)]:!overflow-x-auto"
            onWheel={onWheel}
          >
            {MATERIALS.map(({ label, sub, image, to, familyParam }, i) => {
              const cardClass =
                "group relative block aspect-[4/3] overflow-hidden rounded-lg sm:rounded-xl border border-copper-light/25 bg-canvas-2 shrink-0 snap-start w-24 sm:w-28 lg:w-auto lg:shrink lg:snap-align-none [@media(max-height:700px)]:!w-32";
              const inner = (
                <>
                  <img
                    src={image}
                    alt={label}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-1.5 sm:p-2 lg:p-2.5">
                    <div className="text-[0.55rem] sm:text-[0.62rem] font-semibold leading-tight text-canvas lg:text-[0.78rem]">
                      {label}
                    </div>
                    <div className="text-[0.45rem] sm:text-[0.52rem] leading-tight text-canvas/80 lg:text-[0.62rem]">
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

          <div className="my-2.5 h-px w-full bg-ink/5 lg:my-4 [@media(max-height:850px)]:my-2" />

          {/* Quick actions */}
          <div className="mb-2 font-mono text-[0.55rem] uppercase tracking-[0.2em] text-ink-soft/80 sm:mb-2.5 sm:text-[0.62rem] sm:tracking-[0.24em] lg:text-[0.68rem] lg:tracking-[0.3em] [@media(max-height:850px)]:mb-1.5">
            Quick actions
          </div>
          <div className="grid grid-cols-2 gap-1.5 sm:flex sm:flex-wrap sm:gap-2 lg:gap-2.5">
            {ACTIONS.map(({ label, Icon, to }, i) => {
              // Mobile shows all 4 in a 2x2 grid
              const visibility = "";
              return (
                  <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.05, duration: 0.4 }}
                  whileHover={{ y: -2 }}
                >
                  <Link
                    to={to}
                    className="flex min-w-0 shrink-0 snap-start items-center justify-center gap-1 rounded-full border border-copper-light/35 bg-canvas px-2.5 py-1.5 text-[0.62rem] text-ink/85 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep sm:gap-1.5 sm:px-3 sm:py-1.5 sm:text-[0.68rem] lg:gap-2 lg:px-3.5 lg:text-[0.75rem]"
                  >
                    <Icon className="h-3 w-3 shrink-0 text-copper lg:h-3.5 lg:w-3.5" strokeWidth={1.8} />
                    <span className="whitespace-nowrap">{label}</span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* glassy voice orb embedded at bottom-center of the card */}
      <VoiceOrb />

      <style>{`
        .custom-scroll::-webkit-scrollbar {
          height: 3px;
        }
        .custom-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scroll::-webkit-scrollbar-thumb {
          background: rgba(180, 89, 44, 0.25);
          border-radius: 4px;
        }
        .custom-scroll:hover::-webkit-scrollbar-thumb {
          background: rgba(180, 89, 44, 0.6);
        }
      `}</style>
    </motion.div>
  );
}

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
} from "lucide-react";
import { useEffect, useState } from "react";

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
        </div>
      </div>

      {/* glassy voice orb embedded at bottom-center of the card */}
      <VoiceOrb />
    </motion.div>
  );
}

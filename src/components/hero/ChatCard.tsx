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
      className="relative w-full max-w-[860px]"
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
        className="relative overflow-hidden rounded-[1.75rem] bg-white"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(122,58,27,0.22), 0 8px 24px -10px rgba(26,23,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(26,23,20,0.06)",
        }}
      >
        {/* input row */}
        <div className="relative flex items-center px-3 py-3 md:px-4 md:py-3">
          <div
            className="ml-3 grid h-9 w-9 shrink-0 place-items-center rounded-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(240,199,154,0.35), rgba(216,144,96,0.18))",
              border: "1px solid rgba(180,89,44,0.25)",
            }}
          >
            <Sparkles className="h-4 w-4 text-copper" strokeWidth={1.6} />
          </div>

          <div className="relative flex-1">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="w-full bg-transparent px-5 py-5 text-lg text-ink outline-none md:text-xl"
              aria-label="Ask Ecosmart"
            />
            {!value && (
              <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-lg text-ink-soft/55 md:text-xl">
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
            className="mr-1 flex h-12 shrink-0 items-center gap-2 rounded-xl px-5 text-sm font-medium text-canvas md:text-[0.95rem]"
            style={{
              background:
                "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
              boxShadow: "0 14px 30px -10px rgba(180,89,44,0.55)",
            }}
            aria-label="Consult"
          >
            Consult
            <ArrowUp className="h-4 w-4 rotate-45" strokeWidth={2.4} />
          </motion.button>
        </div>

        {/* divider */}
        <div className="h-px w-full bg-ink/5" />

        {/* suggested topics row */}
        <div
          className="px-6 py-6"
          style={{ background: "rgba(250,247,241,0.6)" }}
        >
          <div className="mb-3 font-mono text-[0.7rem] uppercase tracking-[0.32em] text-ink-soft/80">
            Suggested topics
          </div>
          <div className="flex flex-wrap gap-2.5">
            {TOPICS.map(({ label, Icon }, i) => (
              <motion.button
                key={label}
                type="button"
                onClick={() => submit(`Tell me about ${label}`)}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="inline-flex items-center gap-2 rounded-full border border-copper-light/35 bg-white px-4 py-2 text-sm text-ink/85 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep"
              >
                <Icon className="h-3.5 w-3.5 text-copper" strokeWidth={1.8} />
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

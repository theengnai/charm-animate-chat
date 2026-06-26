import { motion } from "framer-motion";
import { VoiceOrb } from "@/components/hero/VoiceOrb";
import { ArrowUp, Home } from "lucide-react";
import { useEffect, useState } from "react";

const PLACEHOLDERS = [
  "Ask about travertine for a courtyard wall…",
  "Spec MCM panels for a 12-storey façade…",
  "Compare WPC decking finishes…",
  "Plan a warm minimal interior in flexible stone…",
];

const TOPICS = [
  "Travertine",
  "Terracotta",
  "MCM Panels",
  "WPC Decking",
  "Flexible Stone",
  "SPC Flooring",
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
      transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1], delay: 1.0 }}
      className="relative w-full max-w-[820px]"
    >
      {/* pitched roof on top of the card */}
      <motion.svg
        aria-hidden
        className="absolute left-1/2 -top-[58px] -translate-x-1/2"
        width="820"
        height="62"
        viewBox="0 0 820 62"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.15 }}
      >
        <defs>
          <linearGradient id="roofGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0.85" />
          </linearGradient>
        </defs>
        {/* roof path: angled gable that meets the card's top edge */}
        <path
          d="M 0 62 L 410 4 L 820 62 Z"
          fill="url(#roofGrad)"
          stroke="rgba(180,89,44,0.28)"
          strokeWidth="1"
          strokeLinejoin="round"
        />
        {/* ridge marker dot */}
        <circle cx="410" cy="4" r="3.5" fill="#B4592C" />
        <circle cx="410" cy="4" r="7" fill="none" stroke="#B4592C" strokeOpacity="0.35" strokeWidth="0.6" />
      </motion.svg>

      {/* ambient copper glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[3rem] opacity-60 blur-2xl"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 50%, rgba(216,144,96,0.22), transparent 70%)",
        }}
      />

      <div
        className="relative overflow-hidden rounded-[1.25rem] bg-white"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(122,58,27,0.25), 0 8px 24px -10px rgba(26,23,20,0.08), inset 0 1px 0 rgba(255,255,255,0.9)",
          border: "1px solid rgba(180,89,44,0.18)",
          borderTopWidth: "1.5px",
          borderTopColor: "rgba(180,89,44,0.30)",
        }}
      >
        {/* threshold strip — header bar styled like a doorway lintel */}
        <div
          className="flex items-center justify-between px-5 py-2.5"
          style={{ background: "rgba(250,247,241,0.7)", borderBottom: "1px solid rgba(180,89,44,0.10)" }}
        >
          <div className="flex items-center gap-2">
            <Home className="h-3.5 w-3.5 text-copper" strokeWidth={1.8} />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.35em] text-ink-soft">
              Step inside · Ask Ecosmart
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse" />
            <span className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-ink-soft/70">
              Live
            </span>
          </div>
        </div>

        {/* input row */}
        <div className="relative flex items-center gap-2 px-4 py-4 md:px-5">
          <div className="relative flex-1">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              className="w-full bg-transparent px-2 py-4 text-lg text-ink outline-none md:text-xl"
              aria-label="Ask Ecosmart"
            />
            {!value && (
              <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-lg text-ink-soft/55 md:text-xl">
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
            className="flex h-12 shrink-0 items-center gap-2 rounded-xl px-5 text-sm font-medium text-canvas md:text-[0.95rem]"
            style={{
              background: "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
              boxShadow: "0 14px 30px -10px rgba(180,89,44,0.55)",
            }}
            aria-label="Ask"
          >
            Ask
            <ArrowUp className="h-4 w-4" strokeWidth={2.4} />
          </motion.button>
        </div>

        {/* library row */}
        <div
          className="flex flex-wrap items-center gap-2 px-5 py-4"
          style={{
            background: "rgba(250,247,241,0.55)",
            borderTop: "1px solid rgba(180,89,44,0.08)",
          }}
        >
          <span className="mr-2 font-mono text-[0.58rem] uppercase tracking-[0.32em] text-ink-soft/70">
            Rooms
          </span>
          {TOPICS.map((label, i) => (
            <motion.button
              key={label}
              type="button"
              onClick={() => submit(`Tell me about ${label}`)}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.3 + i * 0.05, duration: 0.4 }}
              whileHover={{ y: -2 }}
              className="rounded-full border border-copper-light/35 bg-white px-3.5 py-1.5 text-xs text-ink/80 transition-colors hover:border-copper hover:bg-copper-light/15 hover:text-copper-deep"
            >
              {label}
            </motion.button>
          ))}
        </div>
      </div>

      {/* glassy voice orb embedded at bottom-center of the card */}
      <VoiceOrb />
    </motion.div>
  );
}

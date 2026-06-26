import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const PLACEHOLDERS = [
  "Describe your project or ask anything…",
  "Ask about travertine cladding…",
  "Plan a warm minimal façade…",
  "Compare stone and porcelain…",
];

const TOPICS = [
  "Wall Panel",
  "Flooring",
  "Flexible Stone",
  "MCM",
  "WPC Decking",
  "SPC",
  "EPS Systems",
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
    onSend?.(q ?? value);
    setValue("");
  };

  return (
    <div className="relative w-full max-w-3xl">
      {/* outer copper halo */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -inset-8 rounded-[3rem] opacity-60 blur-3xl"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 40%, rgba(216,144,96,0.45), transparent 70%)",
        }}
        animate={{ opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative rounded-[2.25rem] border border-line/80 bg-canvas/90 px-8 pb-8 pt-10 backdrop-blur-xl md:px-12 md:pb-10 md:pt-12"
        style={{
          boxShadow:
            "0 40px 100px -30px rgba(60,30,10,0.3), 0 10px 30px -10px rgba(180,89,44,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <div className="text-center">
          <motion.span
            className="eyebrow inline-flex items-center gap-2"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-copper animate-pulse" />
            ECOSMART AI
          </motion.span>
          <motion.h2
            className="display-serifish mt-3 text-4xl md:text-5xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
          >
            Let&apos;s build your project{" "}
            <span className="italic text-copper-deep" style={{ fontWeight: 400 }}>
              together.
            </span>
          </motion.h2>
          <motion.p
            className="mt-3 text-sm text-ink-soft md:text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Ask anything about materials, finishes, or your next surface.
          </motion.p>
        </div>

        {/* input */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
        >
          <div className="group relative flex items-center gap-3 rounded-2xl border border-line bg-canvas-2/70 px-5 py-4 transition-all focus-within:border-copper/50 focus-within:shadow-[0_10px_40px_-15px_rgba(180,89,44,0.4)]">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder=""
              className="flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-soft md:text-lg"
              aria-label="Chat input"
            />
            {!value && (
              <span className="pointer-events-none absolute left-[1.5rem] text-base text-ink-soft/70 md:text-lg">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] animate-[caret_1s_steps(2)_infinite] bg-copper/70">&nbsp;</span>
              </span>
            )}
            <motion.button
              type="button"
              onClick={() => submit()}
              whileHover={{ scale: 1.08, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-canvas"
              style={{
                background:
                  "linear-gradient(135deg,#f0b988 0%,#d89060 40%,#b4592c 100%)",
                boxShadow: "0 10px 24px -8px rgba(180,89,44,0.6)",
              }}
              aria-label="Send"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={2.2} />
            </motion.button>
          </div>
        </motion.div>

        {/* suggested topics */}
        <motion.div
          className="mt-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-line" />
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-soft">
              Suggested Topics
            </span>
            <span className="h-px w-8 bg-line" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                onClick={() => submit(`Tell me about ${t}`)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-full border border-line bg-canvas/80 px-4 py-2 text-xs text-ink transition-all hover:border-copper/50 hover:text-copper-deep md:text-[0.8rem]"
              >
                <span className="relative z-10">{t}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-copper/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

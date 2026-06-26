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
    const text = q ?? value;
    if (q) setValue(q);
    onSend?.(text);
  };

  return (
    <div className="relative w-full max-w-[720px]">
      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="relative rounded-[2rem] px-8 pt-10 pb-9 md:px-12 md:pt-12 md:pb-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,236,214,0.10) 0%, rgba(255,220,190,0.04) 100%)",
          backdropFilter: "blur(28px) saturate(140%)",
          border: "1px solid rgba(232,180,138,0.22)",
          boxShadow:
            "0 50px 120px -30px rgba(0,0,0,0.55), 0 10px 40px -10px rgba(180,89,44,0.35), inset 0 1px 0 rgba(255,220,190,0.15)",
        }}
      >
        {/* inner copper edge glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2rem]"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, rgba(232,180,138,0.18), transparent 60%)",
          }}
        />

        <div className="relative text-center">
          <motion.span
            className="inline-flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.4em] text-[#e8b48a]"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#e8b48a] animate-pulse" />
            ECOSMART AI
          </motion.span>
          <motion.h2
            className="display-serifish mt-3 text-3xl text-[#f6ecdc] md:text-[2.6rem] md:leading-tight"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7 }}
            style={{ fontWeight: 300 }}
          >
            Let&apos;s build your project{" "}
            <span className="italic text-[#e8b48a]" style={{ fontWeight: 400 }}>
              together.
            </span>
          </motion.h2>
          <motion.p
            className="mt-3 text-sm text-[#cbb9a3] md:text-[0.95rem]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.56, duration: 0.6 }}
          >
            Ask anything about materials, finishes, or your next surface.
          </motion.p>
        </div>

        {/* input */}
        <motion.div
          className="relative mt-8"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.64, duration: 0.6 }}
        >
          <div
            className="group relative flex items-center gap-3 rounded-2xl px-5 py-5 transition-all focus-within:shadow-[0_10px_50px_-15px_rgba(232,180,138,0.55)]"
            style={{
              background: "rgba(20,12,8,0.55)",
              border: "1px solid rgba(232,180,138,0.18)",
            }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder=""
              className="flex-1 bg-transparent text-base text-[#f6ecdc] outline-none placeholder:text-[#a59179] md:text-lg"
              aria-label="Chat input"
            />
            {!value && (
              <span className="pointer-events-none absolute left-[1.5rem] text-base text-[#a59179]/80 md:text-lg">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] animate-[caret_1s_steps(2)_infinite] bg-[#e8b48a]/70">&nbsp;</span>
              </span>
            )}
            <motion.button
              type="button"
              onClick={() => submit()}
              whileHover={{ scale: 1.08, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-[#1a0f08]"
              style={{
                background:
                  "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
                boxShadow: "0 12px 28px -6px rgba(232,180,138,0.55)",
              }}
              aria-label="Send"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
            </motion.button>
          </div>
        </motion.div>

        {/* suggested topics */}
        <motion.div
          className="relative mt-7"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.72, duration: 0.6 }}
        >
          <div className="mb-3 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-[#e8b48a]/25" />
            <span className="font-mono text-[0.58rem] uppercase tracking-[0.35em] text-[#cbb9a3]">
              Suggested Topics
            </span>
            <span className="h-px w-8 bg-[#e8b48a]/25" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                onClick={() => submit(`Tell me about ${t}`)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.82 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-xs text-[#f0e2cc] transition-all hover:text-[#fff5e6] md:text-[0.8rem]"
                style={{
                  background: "rgba(255,220,190,0.05)",
                  border: "1px solid rgba(232,180,138,0.22)",
                }}
              >
                <span className="relative z-10">{t}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-[#e8b48a]/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

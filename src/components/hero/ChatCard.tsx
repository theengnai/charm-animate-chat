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
        initial={{ opacity: 0, y: 28, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.1 }}
        className="relative rounded-[2rem] px-6 pt-6 pb-7 md:px-8 md:pt-7 md:pb-8"
        style={{
          background: "rgba(250, 247, 241, 0.88)",
          backdropFilter: "blur(20px) saturate(140%)",
          border: "1px solid rgba(180, 89, 44, 0.18)",
          boxShadow:
            "0 50px 120px -40px rgba(122,58,27,0.28), 0 12px 30px -12px rgba(180,89,44,0.18), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        {/* inner copper glow on top edge */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-[2rem]"
          style={{
            background:
              "radial-gradient(140% 70% at 50% 0%, rgba(216,144,96,0.18), transparent 55%)",
          }}
        />

        {/* eyebrow */}
        <motion.div
          className="relative flex items-center justify-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.5 }}
        >
          <span className="h-px w-6 bg-copper/40" />
          <span className="font-mono text-[0.58rem] uppercase tracking-[0.4em] text-copper-deep">
            <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[1px] rounded-full bg-copper animate-pulse" />
            Ecosmart AI · Ask Anything
          </span>
          <span className="h-px w-6 bg-copper/40" />
        </motion.div>

        {/* input */}
        <motion.div
          className="relative mt-5"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.35, duration: 0.6 }}
        >
          <div
            className="group relative flex items-center gap-3 rounded-2xl px-5 py-5 transition-all focus-within:border-copper/60 focus-within:shadow-[0_18px_50px_-20px_rgba(180,89,44,0.45)]"
            style={{
              background: "rgba(255, 251, 244, 0.9)",
              border: "1px solid rgba(180, 89, 44, 0.22)",
            }}
          >
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              placeholder=""
              className="flex-1 bg-transparent text-base text-ink outline-none md:text-lg"
              aria-label="Chat input"
            />
            {!value && (
              <span className="pointer-events-none absolute left-[1.5rem] text-base text-ink-soft/65 md:text-lg">
                {typed}
                <span className="ml-0.5 inline-block w-[2px] animate-[caret_1s_steps(2)_infinite] bg-copper/70">&nbsp;</span>
              </span>
            )}
            <motion.button
              type="button"
              onClick={() => submit()}
              whileHover={{ scale: 1.08, rotate: -8 }}
              whileTap={{ scale: 0.92 }}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-canvas"
              style={{
                background:
                  "linear-gradient(135deg,#f0c79a 0%,#d89060 45%,#b4592c 100%)",
                boxShadow: "0 12px 28px -6px rgba(180,89,44,0.55)",
              }}
              aria-label="Send"
            >
              <ArrowUp className="h-5 w-5" strokeWidth={2.4} />
            </motion.button>
          </div>
        </motion.div>

        {/* suggested topics */}
        <motion.div
          className="relative mt-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((t, i) => (
              <motion.button
                key={t}
                type="button"
                onClick={() => submit(`Tell me about ${t}`)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.05, duration: 0.4 }}
                whileHover={{ y: -2 }}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-xs text-ink transition-all hover:text-copper-deep md:text-[0.8rem]"
                style={{
                  background: "rgba(255, 251, 244, 0.7)",
                  border: "1px solid rgba(180, 89, 44, 0.2)",
                }}
              >
                <span className="relative z-10">{t}</span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-copper/15 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </motion.button>
            ))}
          </div>
          <motion.p
            className="mt-4 text-center font-mono text-[0.58rem] uppercase tracking-[0.35em] text-ink-soft/70"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.85, duration: 0.6 }}
          >
            Try a topic · Or describe your project in your own words
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
}

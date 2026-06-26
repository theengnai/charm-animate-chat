import { motion, AnimatePresence } from "framer-motion";
import { Send, Pencil, Box, Image as ImageIcon } from "lucide-react";
import { useEffect, useState } from "react";

const PLACEHOLDERS = [
  "Describe your project or ask anything…",
  "Ask about travertine cladding…",
  "Plan a warm minimal façade…",
  "Compare stone and porcelain…",
];

export function ChatCard({ onSend }: { onSend?: () => void }) {
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

  const submit = () => {
    onSend?.();
    setValue("");
  };

  return (
    <div className="relative w-full max-w-xl">
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        className="relative rounded-[2rem] border border-line/80 bg-canvas/85 px-8 pb-7 pt-12 backdrop-blur-xl"
        style={{
          boxShadow:
            "0 30px 80px -30px rgba(60,30,10,0.25), 0 8px 24px -10px rgba(180,89,44,0.15), inset 0 1px 0 rgba(255,255,255,0.6)",
        }}
      >
        <div className="text-center">
          <span className="eyebrow">ECOSMART AI</span>
          <h2 className="display-serifish mt-2 text-3xl md:text-[2.1rem]">
            Let&apos;s build your project together.
          </h2>
          <p className="mt-2 text-sm text-ink-soft">How can we help you today?</p>
        </div>

        <div className="mt-6 flex items-center gap-2 rounded-full border border-line bg-canvas-2/60 px-5 py-3">
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            placeholder=""
            className="flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-soft"
            aria-label="Chat input"
          />
          {!value && (
            <span className="pointer-events-none absolute left-[3.25rem] text-sm text-ink-soft/70">
              {typed}
              <span className="inline-block w-[1px] animate-[caret_1s_steps(2)_infinite] bg-ink-soft/60">&nbsp;</span>
            </span>
          )}
          <motion.button
            type="button"
            onClick={submit}
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="grid h-9 w-9 place-items-center rounded-full text-canvas"
            style={{
              background: "radial-gradient(circle at 30% 30%, #f0b988, #b4592c 75%)",
              boxShadow: "0 6px 16px -4px rgba(180,89,44,0.5)",
            }}
            aria-label="Send"
          >
            <Send className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {[
            { icon: Pencil, label: "Design services?" },
            { icon: Box, label: "Get samples?" },
            { icon: ImageIcon, label: "See examples?" },
          ].map(({ icon: Icon, label }) => (
            <button
              key={label}
              type="button"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-canvas/70 px-4 py-2 text-xs text-ink-soft transition-all hover:-translate-y-0.5 hover:border-copper/40 hover:text-ink"
            >
              <Icon className="h-3.5 w-3.5 text-copper" strokeWidth={1.6} />
              <span className="relative">
                {label}
                <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-copper transition-all group-hover:w-full" />
              </span>
            </button>
          ))}
        </div>

        {/* paper plane animation on send */}
        <AnimatePresence>{/* reserved for future feedback */}</AnimatePresence>
      </motion.div>
    </div>
  );
}

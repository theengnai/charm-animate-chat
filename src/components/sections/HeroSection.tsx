import { motion } from "framer-motion";
import { ChatCard } from "@/components/hero/ChatCard";
import { HeroStage } from "@/components/hero/HeroStage";
import { useState } from "react";

export function HeroSection({ active }: { active: boolean; onPickItem?: (i: number) => void }) {
  const [, setPulse] = useState(false);
  if (!active) return null;

  return (
    <HeroStage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-full w-full flex-col items-center justify-center px-6 pt-24 pb-16"
      >
        {/* eyebrow */}
        <motion.div
          className="mb-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <motion.span
            className="block h-px bg-copper"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.45em] text-copper-deep">
            Ecosmart · Engineered Within
          </span>
          <motion.span
            className="block h-px bg-copper"
            initial={{ width: 0 }}
            animate={{ width: 48 }}
            transition={{ delay: 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* headline */}
        <motion.h1
          className="relative z-10 mx-auto max-w-4xl text-center text-ink"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontWeight: 400,
            lineHeight: 1.02,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.6rem, 6.2vw, 5.2rem)",
          }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.65, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          Find materials that feel like <span className="text-copper">home</span>.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-center text-base text-ink-soft md:text-[1.05rem]"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          style={{ lineHeight: 1.65 }}
        >
          Walk into ECOSMART's material library and ask anything —
          travertine, terracotta, MCM, decking, façades.
        </motion.p>

        {/* chat — sits at the doorway of the house */}
        <div className="relative z-10 mt-10 flex w-full flex-col items-center">
          <ChatCard
            onSend={() => {
              setPulse(true);
              window.setTimeout(() => setPulse(false), 900);
            }}
          />
        </div>
      </motion.div>
    </HeroStage>
  );
}

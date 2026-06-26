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

        {/* headline */}
        <motion.h1
          className="relative z-10 mx-auto max-w-4xl text-center text-ink"
          style={{
            fontFamily: '"Instrument Serif", serif',
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
            fontSize: "clamp(2.6rem, 6vw, 5rem)",
          }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          Find the right <span className="text-copper">materials</span> for your projects.
        </motion.h1>

        <motion.p
          className="mt-5 max-w-xl text-center text-base text-ink-soft md:text-lg"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.7 }}
          style={{ lineHeight: 1.65 }}
        >
          Consult ECOSMART AI to specify high-performance travertine, terracotta,
          MCM and sustainable cladding — tuned to your project, climate, and detail.
        </motion.p>

        {/* chat centerpiece */}
        <div className="relative z-10 mt-12 flex w-full flex-col items-center">
          <ChatCard
            onSend={() => {
              setPulse(true);
              window.setTimeout(() => setPulse(false), 900);
            }}
          />
        </div>

        {/* compliance line */}
        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1.7, duration: 0.8 }}
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink-soft">
            Architectural Compliance
          </span>
          <span className="h-1 w-1 rounded-full bg-ink-soft/60" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink-soft">
            Low Carbon Sourcing
          </span>
          <span className="h-1 w-1 rounded-full bg-ink-soft/60" />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-ink-soft">
            GCC Tested Supply
          </span>
        </motion.div>
      </motion.div>
    </HeroStage>
  );
}

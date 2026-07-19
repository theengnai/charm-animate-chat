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
        className="relative flex h-full w-full flex-col items-center justify-center [@media(max-height:700px)]:justify-start overflow-hidden px-4 pt-16 pb-8 sm:px-6 sm:pt-20 sm:pb-12 lg:pt-24 lg:pb-16 [@media(max-height:700px)]:pb-4"
      >
        {/* headline */}
        <motion.h1
          className="relative z-10 mx-auto max-w-4xl text-center text-ink"
          style={{
            fontFamily: '"Jost", system-ui, sans-serif',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: "-0.025em",
            fontSize: "clamp(1.9rem, min(6vw, 6vh), 4.5rem)",
          }}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ delay: 0.6, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
        >
          Find the right <span className="text-copper">materials</span> for your projects.
        </motion.h1>

        {/* chat centerpiece */}
        <div className="relative z-10 mt-4 flex w-full flex-col items-center sm:mt-6 lg:mt-8">
          <ChatCard
            onSend={() => {
              setPulse(true);
              window.setTimeout(() => setPulse(false), 900);
            }}
          />
          <motion.p
            className="mt-6 hidden w-[calc(100%-3rem)] max-w-md px-2 text-center text-xs text-ink-soft/70 sm:block md:w-full md:px-0 md:text-sm [@media(max-height:850px)]:hidden"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            Ask about our construction systems and finishing products — delivered by EcoSmart, Saudi Arabia.
          </motion.p>
        </div>
      </motion.div>
    </HeroStage>
  );
}

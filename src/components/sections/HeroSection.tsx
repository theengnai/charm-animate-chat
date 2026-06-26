import { motion } from "framer-motion";
import { ChatCard } from "@/components/hero/ChatCard";

import { HeroStage } from "@/components/hero/HeroStage";
import { useState } from "react";

export function HeroSection({ active }: { active: boolean; onPickItem?: (i: number) => void }) {
  const [, setPulse] = useState(false);
  if (!active) return null;

  const HEADLINE = "Find the right materials";

  return (
    <HeroStage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-full w-full flex-col items-center justify-center px-6 pt-28 pb-20"
      >
        {/* eyebrow rule */}
        <motion.div
          className="mb-5 flex items-center gap-3"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.6 }}
        >
          <motion.span
            className="block h-px bg-copper"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.45em] text-copper-deep">
            Ecosmart · Intelligent Materials
          </span>
          <motion.span
            className="block h-px bg-copper"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.55, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>

        {/* headline */}
        <h1 className="display-serifish relative z-10 text-center text-ink" style={{ fontWeight: 300 }}>
          <span className="block overflow-hidden pb-3">
            {HEADLINE.split(" ").map((w, i) => (
              <motion.span
                key={`${w}-${i}`}
                className="mr-3 inline-block leading-[1.15]"
                initial={{ y: 80, opacity: 0, filter: "blur(8px)" }}
                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                transition={{
                  duration: 0.85,
                  delay: 0.7 + i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)" }}
              >
                {w}
              </motion.span>
            ))}
          </span>
          <motion.span
            className="mt-1 block italic text-copper-deep leading-[1.15] pb-2"
            initial={{ y: 60, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{ duration: 0.9, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: "clamp(2.4rem, 5.4vw, 4.6rem)", fontWeight: 400 }}
          >
            for your projects.
          </motion.span>
        </h1>

        {/* chat */}
        <div className="relative z-10 mt-10 flex w-full flex-col items-center">
          <ChatCard
            onSend={() => {
              setPulse(true);
              window.setTimeout(() => setPulse(false), 900);
            }}
          />
        </div>

        {/* scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.95, duration: 0.6 }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.58rem] uppercase tracking-[0.35em] text-ink-soft"
        >
          Scroll
          <span className="h-8 w-px animate-pulse bg-copper" />
        </motion.div>
      </motion.div>
    </HeroStage>
  );
}

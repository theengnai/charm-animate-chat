import { motion } from "framer-motion";
import { ChatCard } from "@/components/hero/ChatCard";
import { VoiceInput } from "@/components/hero/VoiceInput";
import { HeroStage } from "@/components/hero/HeroStage";
import { useState } from "react";

export function HeroSection({ active }: { active: boolean; onPickItem?: (i: number) => void }) {
  const [pulse, setPulse] = useState(false);
  void pulse;

  if (!active) return null;

  return (
    <HeroStage>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex h-full w-full flex-col items-center justify-center px-6 pt-20"
      >
        <motion.div
          className="mb-8 flex flex-col items-center gap-3 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <span className="font-mono text-[0.6rem] uppercase tracking-[0.45em] text-[#e8b48a]/80">
            Engineered Within
          </span>
          <h1
            className="display-serifish text-2xl text-[#f2e9dd] md:text-[1.9rem]"
            style={{ fontWeight: 300 }}
          >
            Find the right materials{" "}
            <span className="italic text-[#e8b48a]" style={{ fontWeight: 400 }}>
              for your projects.
            </span>
          </h1>
        </motion.div>

        <div className="relative z-10 flex w-full flex-col items-center gap-5">
          <ChatCard
            onSend={() => {
              setPulse(true);
              window.setTimeout(() => setPulse(false), 900);
            }}
          />
          <div className="w-full max-w-[720px] px-4">
            <VoiceInput />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#cbb9a3]"
        >
          Scroll
          <span className="h-8 w-px animate-pulse bg-[#e8b48a]" />
        </motion.div>
      </motion.div>
    </HeroStage>
  );
}

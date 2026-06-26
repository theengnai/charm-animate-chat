import { motion } from "framer-motion";
import { Orb } from "@/components/hero/Orb";
import { ChatCard } from "@/components/hero/ChatCard";
import { VoiceInput } from "@/components/hero/VoiceInput";
import { OrbitRing } from "@/components/hero/OrbitRing";
import { useState } from "react";

export function HeroSection({ active, onPickItem }: { active: boolean; onPickItem: (i: number) => void }) {
  const [pulse, setPulse] = useState(false);

  if (!active) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative grid h-full w-full place-items-center px-6 pt-24"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.15 }}
        className="display-serifish absolute top-[8vh] left-1/2 -translate-x-1/2 text-center text-5xl md:text-6xl lg:text-[4.5rem]"
      >
        Find the Right Materials
        <br />
        <span className="italic text-copper-deep" style={{ fontWeight: 400 }}>
          for Your Projects.
        </span>
      </motion.h1>

      <OrbitRing onPick={onPickItem} />

      <div className="relative flex flex-col items-center gap-8">
        <div className="relative">
          <Orb size={110} active={pulse} />
        </div>
        <ChatCard onSend={() => { setPulse(true); window.setTimeout(() => setPulse(false), 900); }} />
        <VoiceInput />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-ink-soft"
      >
        Scroll
        <span className="h-8 w-px animate-pulse bg-copper" />
      </motion.div>
    </motion.div>
  );
}

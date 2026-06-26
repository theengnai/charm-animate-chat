import { AnimatePresence, motion } from "framer-motion";
import { Mic, MicOff } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VoiceOrb() {
  const [listening, setListening] = useState(false);
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 22 }, () => 0.3));
  const rafRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);

  useEffect(() => {
    let mounted = true;
    if (listening) {
      navigator.mediaDevices
        ?.getUserMedia({ audio: true })
        .then((stream) => {
          if (!mounted) {
            stream.getTracks().forEach((t) => t.stop());
            return;
          }
          streamRef.current = stream;
          const Ctx =
            window.AudioContext ||
            (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new Ctx();
          ctxRef.current = ctx;
          const src = ctx.createMediaStreamSource(stream);
          const an = ctx.createAnalyser();
          an.fftSize = 64;
          src.connect(an);
          const data = new Uint8Array(an.frequencyBinCount);
          const tick = () => {
            an.getByteFrequencyData(data);
            const arr = Array.from({ length: 22 }, (_, i) => {
              const v = data[i % data.length] / 255;
              return 0.15 + v * 1.1;
            });
            setBars(arr);
            rafRef.current = requestAnimationFrame(tick);
          };
          tick();
        })
        .catch(() => {
          const tick = () => {
            setBars((prev) =>
              prev.map((_, i) => 0.25 + Math.abs(Math.sin(Date.now() / 200 + i * 0.4)) * 0.9),
            );
            rafRef.current = requestAnimationFrame(tick);
          };
          tick();
        });
    } else {
      setBars(Array.from({ length: 22 }, () => 0.3));
    }
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      ctxRef.current?.close().catch(() => {});
    };
  }, [listening]);

  return (
    <div className="pointer-events-auto absolute left-1/2 -bottom-10 z-20 -translate-x-1/2">
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 260, damping: 26 }}
        className="flex items-center gap-2 rounded-full px-2 py-2"
        style={{
          background: "rgba(255, 247, 235, 0.55)",
          backdropFilter: "blur(18px) saturate(160%)",
          border: "1px solid rgba(180, 89, 44, 0.28)",
          boxShadow:
            "0 18px 40px -14px rgba(122,58,27,0.35), 0 4px 12px -4px rgba(180,89,44,0.2), inset 0 1px 0 rgba(255,255,255,0.7)",
        }}
      >
        <AnimatePresence initial={false}>
          {listening && (
            <motion.div
              key="wf"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-8 items-center justify-end gap-[3px] overflow-hidden pl-3"
            >
              {bars.slice(0, 11).reverse().map((h, i) => (
                <span
                  key={`l-${i}`}
                  className="w-[2px] rounded-full bg-copper"
                  style={{
                    height: `${Math.max(0.15, Math.min(1, h)) * 100}%`,
                    transition: "height 80ms linear",
                    opacity: 0.5 + (i / 11) * 0.5,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          type="button"
          onClick={() => setListening((v) => !v)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.92 }}
          className="relative grid h-11 w-11 shrink-0 place-items-center rounded-full text-canvas"
          style={{
            background:
              "radial-gradient(circle at 30% 25%, #f0c79a, #d89060 45%, #b4592c 100%)",
            boxShadow: "0 10px 24px -6px rgba(180,89,44,0.55)",
          }}
          aria-label={listening ? "Stop voice input" : "Start voice input"}
        >
          {listening && (
            <>
              <span className="absolute inset-0 rounded-full animate-[breathe_1.6s_ease-in-out_infinite] bg-copper/30" />
              <span className="absolute -inset-2 rounded-full border border-copper/40 animate-[breathe_2.2s_ease-in-out_infinite]" />
            </>
          )}
          {listening ? (
            <MicOff className="relative h-4 w-4" strokeWidth={2.2} />
          ) : (
            <Mic className="relative h-4 w-4" strokeWidth={2.2} />
          )}
        </motion.button>

        <AnimatePresence initial={false}>
          {listening && (
            <motion.div
              key="wr"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex h-8 items-center gap-[3px] overflow-hidden pr-3"
            >
              {bars.slice(11).map((h, i) => (
                <span
                  key={`r-${i}`}
                  className="w-[2px] rounded-full bg-copper"
                  style={{
                    height: `${Math.max(0.15, Math.min(1, h)) * 100}%`,
                    transition: "height 80ms linear",
                    opacity: 0.5 + (1 - i / 11) * 0.5,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>
    </div>
  );
}

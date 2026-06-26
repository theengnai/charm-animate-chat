import { motion } from "framer-motion";
import { Mic } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function VoiceInput() {
  const [listening, setListening] = useState(false);
  const [bars, setBars] = useState<number[]>(() => Array.from({ length: 28 }, () => 0.3));
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
          const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
          const ctx = new Ctx();
          ctxRef.current = ctx;
          const src = ctx.createMediaStreamSource(stream);
          const an = ctx.createAnalyser();
          an.fftSize = 64;
          src.connect(an);
          const data = new Uint8Array(an.frequencyBinCount);
          const tick = () => {
            an.getByteFrequencyData(data);
            const arr = Array.from({ length: 28 }, (_, i) => {
              const v = data[i % data.length] / 255;
              return 0.15 + v * 1.1;
            });
            setBars(arr);
            rafRef.current = requestAnimationFrame(tick);
          };
          tick();
        })
        .catch(() => {
          // procedural fallback
          const tick = () => {
            setBars((prev) =>
              prev.map((_, i) => 0.25 + Math.abs(Math.sin(Date.now() / 200 + i * 0.4)) * 0.9),
            );
            rafRef.current = requestAnimationFrame(tick);
          };
          tick();
        });
    } else {
      setBars(Array.from({ length: 28 }, () => 0.3));
    }
    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      streamRef.current?.getTracks().forEach((t) => t.stop());
      ctxRef.current?.close().catch(() => {});
    };
  }, [listening]);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <Waveform bars={bars.slice(0, 14)} side="left" listening={listening} />
        <motion.button
          type="button"
          onClick={() => setListening((v) => !v)}
          whileTap={{ scale: 0.92 }}
          className="relative grid h-14 w-14 place-items-center rounded-full text-canvas shadow-[0_12px_30px_-8px_rgba(180,89,44,0.6)]"
          style={{
            background: "radial-gradient(circle at 30% 25%, #f0b988, #b4592c 70%, #7a3a1b)",
          }}
          aria-label={listening ? "Stop voice input" : "Start voice input"}
        >
          {listening && (
            <span className="absolute inset-0 rounded-full animate-[breathe_1.4s_ease-in-out_infinite] bg-copper/40" />
          )}
          <Mic className="relative h-5 w-5" strokeWidth={2} />
        </motion.button>
        <Waveform bars={bars.slice(14)} side="right" listening={listening} />
      </div>
      <span className="eyebrow text-[0.62rem]">
        {listening ? "Listening…" : "Voice Input"}
      </span>
    </div>
  );
}

function Waveform({
  bars,
  side,
  listening,
}: {
  bars: number[];
  side: "left" | "right";
  listening: boolean;
}) {
  const arr = side === "left" ? [...bars].reverse() : bars;
  return (
    <div className="flex h-10 items-center gap-[3px]">
      {arr.map((h, i) => (
        <span
          key={i}
          className="w-[2px] rounded-full bg-copper/70"
          style={{
            height: `${Math.max(0.15, Math.min(1, h)) * 100}%`,
            transition: listening ? "height 80ms linear" : "height 280ms ease",
            opacity: 0.4 + (1 - i / arr.length) * 0.6,
          }}
        />
      ))}
    </div>
  );
}

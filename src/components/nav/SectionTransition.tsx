import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Portal transition — the logo icon scales smoothly from small to huge,
 * anchored on its doorway slit. On mobile we use a lightweight fade
 * instead, because the masked SVG scaling to 20x+ causes rasterization
 * memory blowups (page reloads / tab crashes on real devices).
 */
export function SectionTransition({ activeKey }: { activeKey: number }) {
  const isMobile = useIsMobile(true);
  const [visibleKey, setVisibleKey] = useState<number | null>(null);
  const maskId = `door-mask-${visibleKey}`;
  const gradId = `door-grad-${visibleKey}`;

  useEffect(() => {
    if (activeKey === 0) {
      setVisibleKey(null);
      return;
    }

    setVisibleKey(activeKey);
    const timer = window.setTimeout(() => {
      setVisibleKey((key) => (key === activeKey ? null : key));
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [activeKey]);

  if (visibleKey == null) return null;

  if (isMobile) {
    return (
      <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
        <motion.div
          key={visibleKey}
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg,#B4592C 0%,#9c4a23 100%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, times: [0, 0.45, 1], ease: "easeInOut" }}
        />
      </div>
    );
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <motion.div
        key={visibleKey}
        className="absolute"
        style={{
          width: "40vmin",
          height: "calc(40vmin * 53 / 49)",
          left: "calc(50vw - 40vmin * 0.7465)",
          top: "calc(50vh - 40vmin * 53 / 49 * 0.6745)",
          transformOrigin: "74.6531% 67.4528%",
          willChange: "transform, opacity",
        }}
        initial={{ scale: 0.1, opacity: 0 }}
        animate={{ scale: 22, opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 1.4,
          ease: [0.55, 0, 0.45, 1],
          opacity: { duration: 1.4, times: [0, 0.15, 0.85, 1], ease: "linear" },
        }}
      >
        <svg
          viewBox="0 0 49 53"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id={maskId}>
              <rect width="49" height="53" fill="white" />
              <rect
                x="33.125"
                y="18.4951"
                width="6.9014"
                height="34.5049"
                fill="black"
              />
            </mask>
            <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B4592C" />
              <stop offset="100%" stopColor="#9c4a23" />
            </linearGradient>
          </defs>
          <rect
            width="49"
            height="53"
            fill={`url(#${gradId})`}
            mask={`url(#${maskId})`}
          />
        </svg>
      </motion.div>
    </div>
  );
}

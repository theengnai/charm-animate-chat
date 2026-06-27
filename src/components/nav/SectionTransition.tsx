import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

/**
 * Portal transition — the logo icon scales smoothly from small to huge,
 * anchored on its doorway slit. Mobile uses the same shape but with a
 * larger starting footprint and smaller scale ceiling to keep raster
 * memory low (avoids tab crashes on real devices).
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

  const baseVmin = isMobile ? 70 : 40;
  const targetScale = isMobile ? 9 : 22;
  const duration = isMobile ? 1.1 : 1.4;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <motion.div
        key={visibleKey}
        className="absolute"
        style={{
          width: `${baseVmin}vmin`,
          height: `calc(${baseVmin}vmin * 53 / 49)`,
          left: `calc(50vw - ${baseVmin}vmin * 0.7465)`,
          top: `calc(50vh - ${baseVmin}vmin * 53 / 49 * 0.6745)`,
          transformOrigin: "74.6531% 67.4528%",
          willChange: "transform, opacity",
        }}
        initial={{ scale: 0.15, opacity: 0 }}
        animate={{ scale: targetScale, opacity: [0, 1, 1, 0] }}
        transition={{
          duration,
          ease: [0.55, 0, 0.45, 1],
          opacity: { duration, times: [0, 0.15, 0.85, 1], ease: "linear" },
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

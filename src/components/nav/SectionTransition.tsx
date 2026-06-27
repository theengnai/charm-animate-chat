import { motion } from "framer-motion";

/**
 * Portal transition — keyed on activeKey so it remounts cleanly on every
 * section change. The logo icon scales smoothly from small to huge,
 * anchored on its doorway slit. The slit grows until it covers the
 * viewport, revealing the next section through it.
 *
 * Icon geometry (viewBox 49 x 53):
 *   slit center → (74.65%, 67.45%) of the icon's bounding box.
 */
export function SectionTransition({ activeKey }: { activeKey: number }) {
  const maskId = `door-mask-${activeKey}`;
  const gradId = `door-grad-${activeKey}`;

  // Skip the very first render so the intro overlay isn't doubled up.
  if (activeKey === 0) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] overflow-hidden">
      <motion.div
        key={activeKey}
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

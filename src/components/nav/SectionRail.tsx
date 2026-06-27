import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SectionRailProps {
  labels: string[];
  active: number;
  onPick: (i: number) => void;
}

export function SectionRail({ labels, active, onPick }: SectionRailProps) {
  return (
    <>
      <DesktopRail labels={labels} active={active} onPick={onPick} />
      <MobileRail labels={labels} active={active} onPick={onPick} />
    </>
  );
}

function DesktopRail({ labels, active, onPick }: SectionRailProps) {
  return (
    <nav
      aria-label="Sections"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 md:block"
    >
      <ul className="flex flex-col items-end gap-5">
        {labels.map((label, i) => {
          const isActive = i === active;
          return (
            <li key={label}>
              <button
                type="button"
                onClick={() => onPick(i)}
                className="group flex items-center gap-3"
                aria-current={isActive ? "true" : undefined}
              >
                <span
                  className={`font-mono text-[0.65rem] uppercase tracking-[0.22em] transition-all duration-500 ${
                    isActive
                      ? "translate-x-0 text-ink opacity-100"
                      : "translate-x-2 text-ink-soft opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                  }`}
                >
                  <span className="mr-2 text-copper">{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </span>
                <span className="relative grid h-4 w-4 place-items-center">
                  <span className="h-1 w-1 rounded-full bg-ink-soft/50 transition-all group-hover:bg-ink-soft" />
                  {isActive && (
                    <motion.span
                      layoutId="rail-dot"
                      className="absolute inset-0 rounded-full border border-copper"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    >
                      <span className="absolute inset-1 rounded-full bg-copper" />
                    </motion.span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function MobileRail({ labels, active, onPick }: SectionRailProps) {
  const navRef = useRef<HTMLElement | null>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [hover, setHover] = useState<number | null>(null);

  const indexFromY = (clientY: number) => {
    let nearest = -1;
    let best = Infinity;
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      const center = r.top + r.height / 2;
      const d = Math.abs(clientY - center);
      if (d < best) {
        best = d;
        nearest = i;
      }
    });
    return nearest;
  };

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    const onMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      e.preventDefault();
      const i = indexFromY(t.clientY);
      if (i >= 0) setHover(i);
    };
    const onEnd = () => {
      setHover((h) => {
        if (h != null && h !== active) onPick(h);
        return null;
      });
    };
    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const i = indexFromY(t.clientY);
      if (i >= 0) setHover(i);
    };

    nav.addEventListener("touchstart", onStart, { passive: true });
    nav.addEventListener("touchmove", onMove, { passive: false });
    nav.addEventListener("touchend", onEnd, { passive: true });
    nav.addEventListener("touchcancel", onEnd, { passive: true });
    return () => {
      nav.removeEventListener("touchstart", onStart);
      nav.removeEventListener("touchmove", onMove);
      nav.removeEventListener("touchend", onEnd);
      nav.removeEventListener("touchcancel", onEnd);
    };
  }, [active, onPick]);

  return (
    <nav
      ref={navRef}
      aria-label="Sections"
      className="fixed right-2 top-1/2 z-40 -translate-y-1/2 touch-none md:hidden"
      style={{ touchAction: "none" }}
    >
      <ul className="flex flex-col items-end gap-1 py-2 pr-2 pl-4">
        {labels.map((label, i) => {
          const isActive = i === active;
          const isHover = hover === i;
          return (
            <li
              key={label}
              ref={(el) => {
                itemRefs.current[i] = el;
              }}
              className="relative flex items-center gap-2"
            >
              <motion.span
                initial={false}
                animate={{
                  opacity: isHover ? 1 : 0,
                  x: isHover ? 0 : 8,
                }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none rounded-full bg-ink/90 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.2em] text-canvas"
              >
                <span className="mr-1.5 text-copper">{String(i + 1).padStart(2, "0")}</span>
                {label}
              </motion.span>
              <span className="relative grid h-5 w-5 place-items-center">
                <motion.span
                  initial={false}
                  animate={{
                    scale: isHover ? 1.8 : isActive ? 1.2 : 1,
                    backgroundColor: isActive
                      ? "var(--copper)"
                      : isHover
                        ? "var(--copper)"
                        : "rgba(60,40,25,0.35)",
                  }}
                  transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  className="h-1.5 w-1.5 rounded-full"
                />
              </span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

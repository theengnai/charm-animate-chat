import { motion } from "framer-motion";

interface SectionRailProps {
  labels: string[];
  active: number;
  onPick: (i: number) => void;
}

export function SectionRail({ labels, active, onPick }: SectionRailProps) {
  return (
    <>
      <DesktopRail labels={labels} active={active} onPick={onPick} />
    </>
  );
}

function DesktopRail({ labels, active, onPick }: SectionRailProps) {
  return (
    <nav
      aria-label="Sections"
      className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
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

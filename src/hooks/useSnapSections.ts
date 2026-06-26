import { useCallback, useEffect, useRef, useState } from "react";

export function useSnapSections(count: number) {
  const [active, setActive] = useState(0);
  const locked = useRef(false);
  const touchStart = useRef<number | null>(null);

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(count - 1, i));
      if (next === active || locked.current) return;
      locked.current = true;
      setActive(next);
      window.setTimeout(() => {
        locked.current = false;
      }, 1100);
    },
    [active, count],
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 12) return;
      e.preventDefault();
      go(active + (e.deltaY > 0 ? 1 : -1));
    };
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowDown", "PageDown", " "].includes(e.key)) {
        e.preventDefault();
        go(active + 1);
      } else if (["ArrowUp", "PageUp"].includes(e.key)) {
        e.preventDefault();
        go(active - 1);
      } else if (e.key === "Home") go(0);
      else if (e.key === "End") go(count - 1);
    };
    const onTouchStart = (e: TouchEvent) => {
      touchStart.current = e.touches[0]?.clientY ?? null;
    };
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStart.current == null) return;
      const dy = touchStart.current - (e.changedTouches[0]?.clientY ?? 0);
      if (Math.abs(dy) > 40) go(active + (dy > 0 ? 1 : -1));
      touchStart.current = null;
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("keydown", onKey);
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, count, go]);

  return { active, go };
}

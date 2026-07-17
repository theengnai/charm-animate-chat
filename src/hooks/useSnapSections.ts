import { useCallback, useEffect, useRef, useState } from "react";

function findScrollableAncestor(start: EventTarget | null): HTMLElement | null {
  let el = start as HTMLElement | null;
  while (el && el !== document.body) {
    if (el instanceof HTMLElement) {
      const style = window.getComputedStyle(el);
      const oy = style.overflowY;
      if ((oy === "auto" || oy === "scroll") && el.scrollHeight > el.clientHeight + 1) {
        return el;
      }
    }
    el = el.parentElement;
  }
  return null;
}

export function useSnapSections(count: number) {
  const [active, setActive] = useState(0);
  const locked = useRef(false);
  const touchStart = useRef<
    { x: number; y: number; t: number; el: HTMLElement | null } | null
  >(null);

  const go = useCallback(
    (i: number) => {
      const next = Math.max(0, Math.min(count - 1, i));
      if (next === active || locked.current) return;
      locked.current = true;
      setActive(next);
      window.setTimeout(() => {
        locked.current = false;
      }, 1450);
    },
    [active, count],
  );

  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 12) return;
      const scrollable = findScrollableAncestor(e.target);
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
        if ((e.deltaY > 0 && !atBottom) || (e.deltaY < 0 && !atTop)) return;
      }
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
      // Ignore multi-touch (pinch/zoom, two-finger scroll)
      if (e.touches.length !== 1) {
        touchStart.current = null;
        return;
      }
      const t0 = e.touches[0];
      if (!t0) {
        touchStart.current = null;
        return;
      }
      // Ignore touches originating inside the section rail (it has its own tap handlers).
      const target = e.target as HTMLElement | null;
      if (target && target.closest?.('[aria-label="Sections"]')) {
        touchStart.current = null;
        return;
      }
      touchStart.current = {
        x: t0.clientX,
        y: t0.clientY,
        t: Date.now(),
        el: findScrollableAncestor(e.target),
      };
    };
    const onTouchEnd = (e: TouchEvent) => {
      const start = touchStart.current;
      touchStart.current = null;
      if (!start) return;
      // Require a valid end touch — bail if the browser didn't report one.
      const end = e.changedTouches[0];
      if (!end) return;
      const dy = start.y - end.clientY;
      const dx = start.x - end.clientX;
      const dt = Date.now() - start.t;
      // Ignore taps, long presses, and horizontal swipes.
      if (Math.abs(dy) < 60) return;
      if (Math.abs(dx) > Math.abs(dy)) return;
      if (dt > 800) return;
      const scrollable = start.el;
      if (scrollable) {
        const atTop = scrollable.scrollTop <= 0;
        const atBottom =
          scrollable.scrollTop + scrollable.clientHeight >= scrollable.scrollHeight - 1;
        if ((dy > 0 && !atBottom) || (dy < 0 && !atTop)) return;
      }
      go(active + (dy > 0 ? 1 : -1));
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



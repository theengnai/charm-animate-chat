import * as React from "react";

const MOBILE_BREAKPOINT = 768;

export function useIsMobile(defaultValue = false) {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined);

  React.useEffect(() => {
    const widthQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
    const touchQuery = window.matchMedia("(pointer: coarse)");
    const onChange = () => {
      setIsMobile(
        window.innerWidth < MOBILE_BREAKPOINT ||
          touchQuery.matches ||
          navigator.maxTouchPoints > 0,
      );
    };
    widthQuery.addEventListener("change", onChange);
    touchQuery.addEventListener("change", onChange);
    setIsMobile(
      window.innerWidth < MOBILE_BREAKPOINT ||
        touchQuery.matches ||
        navigator.maxTouchPoints > 0,
    );
    return () => {
      widthQuery.removeEventListener("change", onChange);
      touchQuery.removeEventListener("change", onChange);
    };
  }, []);

  return isMobile ?? defaultValue;
}

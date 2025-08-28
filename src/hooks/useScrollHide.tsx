import { useEffect, useRef, useState } from "react";

export default function useScrollHide({
  shrinkThreshold = 50,
  upTolerance = 10,
  hideAfter = 100,
} = {}) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastY = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);

  useEffect(() => {
    const handle = () => {
      const y = window.scrollY || 0;
      setScrolled(y > shrinkThreshold);

      const delta = y - lastY.current;

      // If near top, always show
      if (y <= shrinkThreshold) {
        setHidden(false);
      } else if (delta > 0 && y > hideAfter) {
        // scrolling down and passed hideAfter => hide
        setHidden(true);
      } else if (delta < 0 && Math.abs(delta) > upTolerance) {
        // small scroll up => show
        setHidden(false);
      }

      lastY.current = y;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(handle);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    handle();

    return () => window.removeEventListener("scroll", onScroll);
  }, [shrinkThreshold, upTolerance, hideAfter]);

  return { scrolled, hidden };
}

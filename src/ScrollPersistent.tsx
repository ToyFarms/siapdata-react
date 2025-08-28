import { useEffect, useLayoutEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function useWindowScrollPersistence() {
  const loc = useLocation();
  const scrollRef = useRef(0);

  useLayoutEffect(() => {
    const saved = sessionStorage.getItem(loc.pathname);
    const pos = saved ? Number(saved) : 0;
    window.scrollTo(0, pos);
  }, [loc.pathname]);

  useEffect(() => {
    scrollRef.current = window.scrollY;
    let timer: number | null = null;

    const onScroll = () => {
      scrollRef.current = window.scrollY;
      if (timer != null) window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        sessionStorage.setItem(loc.pathname, String(scrollRef.current));
        timer = null;
      }, 150);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (timer != null) window.clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
      sessionStorage.setItem(loc.pathname, String(scrollRef.current));
    };
  }, [loc.pathname]);
}

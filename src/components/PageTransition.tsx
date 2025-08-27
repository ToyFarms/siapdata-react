import React, {
  createContext,
  useContext,
  useRef,
  type ReactNode,
  useEffect,
} from "react";
import { useNavigate, useResolvedPath, useMatch } from "react-router-dom";
import { animate } from "animejs";

type TransitionContextType = {
  trigger: (to: string) => Promise<void>;
  setNavigator: (n: (to: string) => void) => void;
};

const TransitionContext = createContext<TransitionContextType | null>(null);

export function TransitionProvider({
  children,
  stripes = 8,
  duration = 500,
  staggerMs = 70,
}: {
  children: ReactNode;
  stripes?: number;
  duration?: number;
  staggerMs?: number;
}) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const navigateRef = useRef<((to: string) => void) | null>(null);

  const navigate = useNavigate();
  useEffect(() => {
    navigateRef.current = (to: string) => navigate(to);
    return () => {
      navigateRef.current = null;
    };
  }, [navigate]);

  useEffect(() => {
    if (overlayRef.current) overlayRef.current.style.pointerEvents = "none";
  }, []);

  const trigger = async (to: string) => {
    const container = overlayRef.current;
    if (!container) return;

    container.style.pointerEvents = "auto";

    const stripesNodes = Array.from(
      container.querySelectorAll<HTMLDivElement>(".stripe"),
    );

    stripesNodes.forEach((s) => {
      s.style.transform = "scaleX(0)";
      s.style.transformOrigin = "left center";
    });

    duration /= 2;

    await animate(stripesNodes, {
      scaleX: [0, 1],
      duration,
      easing: "easeInOut",
      delay: (_el: Element, i: number) => i * staggerMs,
    });

    if (navigateRef.current) navigateRef.current(to);

    stripesNodes.forEach((s) => {
      s.style.transformOrigin = "right center";
    });

    await animate(stripesNodes, {
      scaleX: [1, 0],
      duration,
      easing: "easeInOut",
      delay: (_el: Element, i: number) =>
        (stripesNodes.length - 1 - i) * staggerMs,
      complete: () => {
        if (container) container.style.pointerEvents = "none";
      },
    });
  };

  return (
    <TransitionContext.Provider
      value={{
        trigger,
        setNavigator: (n: (to: string) => void) => (navigateRef.current = n),
      }}
    >
      {children}

      <div
        ref={overlayRef}
        className="page-transition-overlay fixed inset-0 z-[9999] pointer-events-none select-none flex flex-col gap-2"
        aria-hidden
      >
        {Array.from({ length: stripes }).map((_, i) => (
          <div
            key={i}
            className="stripe flex-1 basis-0 origin-left transform will-change-transform bg-slate-900"
            style={{ transformOrigin: "left center" }}
          />
        ))}
      </div>
    </TransitionContext.Provider>
  );
}

type ClassNameProp = string | ((isActive: boolean) => string);

export interface TransitionNavLinkProps {
  to: string;
  end?: boolean;
  className?: ClassNameProp;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

export default function TransitionNavLink({
  to,
  end = false,
  className,
  style,
  children,
  onClick,
}: TransitionNavLinkProps) {
  const ctx = useContext(TransitionContext);
  const navigate = useNavigate();
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end });
  const isActive = Boolean(match);

  const computedClass =
    typeof className === "function" ? className(isActive) : (className ?? "");

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) onClick(e);
    if (e.defaultPrevented) return;
    e.preventDefault();

    if (ctx && typeof ctx.trigger === "function") {
      void ctx.trigger(to);
    } else {
      navigate(to);
    }
  };

  return (
    <a href={to} onClick={handleClick} className={computedClass} style={style}>
      {children}
    </a>
  );
}

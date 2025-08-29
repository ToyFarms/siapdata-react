import { useEffect, useRef, useState } from "react";

interface FlowingMenuProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function FlowingMenu({
  text,
  speed = 100,
  className = "",
}: FlowingMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);
  const totalOffsetRef = useRef(0);
  const prevScrollYRef = useRef(0);
  const smoothedVelocityRef = useRef(0);
  const itemWidthRef = useRef(0);

  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const measure = () => {
      const containerWidth = containerRef.current!.offsetWidth;

      const tmp = document.createElement("span");
      tmp.style.cssText = `
        position: absolute;
        visibility: hidden;
        font-size: 4vh;
        line-height: 1.2;
        padding: 1vh 1vw;
        text-transform: uppercase;
        font-weight: normal;
        white-space: nowrap;
      `;
      tmp.textContent = text;
      speed > 0 ? document.body.appendChild(tmp) : document.body.prepend(tmp);

      const itemWidth = tmp.offsetWidth;
      document.body.removeChild(tmp);

      const needed = Math.ceil(containerWidth / itemWidth) + 2;
      itemWidthRef.current = itemWidth;
      setItems(Array(needed).fill(text));
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [text]);

  useEffect(() => {
    prevScrollYRef.current = window.pageYOffset;
  }, []);

  useEffect(() => {
    if (items.length === 0 || itemWidthRef.current === 0) return;

    const animate = (currentTime: number) => {
      if (!containerRef.current) return;

      const deltaTime = lastTimeRef.current
        ? currentTime - lastTimeRef.current
        : 16;
      lastTimeRef.current = currentTime;

      const currentScrollY = window.pageYOffset;
      const deltaScroll = currentScrollY - prevScrollYRef.current;
      prevScrollYRef.current = currentScrollY;

      const instantVelocity =
        deltaTime > 0 ? deltaScroll / (deltaTime / 1000) : 0;
      smoothedVelocityRef.current =
        smoothedVelocityRef.current * 0.85 + 0.15 * instantVelocity;

      const scrollEffect = smoothedVelocityRef.current * 0.3;
      const effectiveSpeed =
        speed + (speed >= 0 ? scrollEffect : -Math.abs(scrollEffect));

      totalOffsetRef.current += (effectiveSpeed * deltaTime) / 1000;

      const itemWidth = itemWidthRef.current;
      let translateX: number;

      if (speed >= 0) {
        const normalizedOffset = totalOffsetRef.current % itemWidth;
        translateX = -normalizedOffset;
      } else {
        const normalizedOffset = Math.abs(totalOffsetRef.current) % itemWidth;
        translateX = normalizedOffset - itemWidth;
      }

      containerRef.current.style.transform = `translate3d(${translateX.toFixed(2)}px, 0, 0)`;

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [items, speed]);

  const containerClasses = [
    "overflow-hidden",
    "w-full",
    "shadow-[0_-1px_0_0_#fff]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={containerClasses}>
      <div
        ref={containerRef}
        className="flex whitespace-nowrap will-change-transform"
        style={{
          transform: "translate3d(0, 0, 0)",
        }}
      >
        {items.map((item, idx) => (
          <span
            key={idx}
            className="uppercase font-normal text-[4vh] leading-[1.2] px-[1vw] py-[1vh] block"
            style={{ minWidth: "max-content" }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

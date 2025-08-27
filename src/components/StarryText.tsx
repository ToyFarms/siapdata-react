import React, { useEffect, useRef, useState } from "react";

// StarryText
// Default export React component that spawns star-shaped particles on top of its children.
// - Default trigger: click on the text
// - Props let you control particle count, color, size, duration and trigger mode
// - The displayed content should be passed as children: <StarryText>My <strong>text</strong></StarryText>

export default function StarryText({
  children,
  spawnOn = "click", // 'click' | 'hover' | 'mount'
  particleCount = 12,
  color = "#ffd700",
  baseSize = 12,
  duration = 900, // animation time in ms
  className = "",
}) {
  const wrapperRef = useRef(null);
  const [particles, setParticles] = useState([]);
  const lastHoverRef = useRef(0);

  // inject keyframes once
  useEffect(() => {
    const id = "__starry_text_keyframes";
    if (!document.getElementById(id)) {
      const style = document.createElement("style");
      style.id = id;
      style.innerHTML = `
        @keyframes starParticle {
          0% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); }
          80% { opacity: 0.8; }
          100% { opacity: 0; transform: translateY(-40px) scale(1.6) rotate(360deg); }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  // helper: spawn a burst centered at (clientX, clientY) relative to wrapper
  function spawnBurstAt(clientX, clientY, count = particleCount) {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const baseLeft = clientX - rect.left;
    const baseTop = clientY - rect.top;

    const newParticles = Array.from({ length: count }).map(() => {
      const id = Math.random().toString(36).slice(2);
      const size = baseSize + Math.round(Math.random() * baseSize);
      // random offset from the clicked point so it looks like a burst
      const offsetX = (Math.random() - 0.5) * 40; // -20..20
      const offsetY = (Math.random() - 1.0) * 30; // -30..0 so they fly upwards
      const left = Math.max(0, Math.min(rect.width, baseLeft + offsetX));
      const top = Math.max(0, Math.min(rect.height, baseTop + offsetY));
      const delay = Math.round(Math.random() * 120);
      const rotate = Math.round(Math.random() * 360);
      return { id, left, top, size, delay, rotate };
    });

    setParticles((p) => [...p, ...newParticles]);

    // cleanup
    const maxDelay = 200;
    setTimeout(() => {
      setParticles((p) => p.filter((x) => !newParticles.find((n) => n.id === x.id)));
    }, duration + maxDelay);
  }

  // spawn a random burst inside the text bounds (used for mount)
  function spawnRandom(count = particleCount) {
    const wrap = wrapperRef.current;
    if (!wrap) return;
    const rect = wrap.getBoundingClientRect();
    const clientX = rect.left + Math.random() * rect.width;
    const clientY = rect.top + Math.random() * rect.height;
    spawnBurstAt(clientX, clientY, count);
  }

  // handlers
  function handleClick(e) {
    const { clientX, clientY } = e.nativeEvent;
    spawnBurstAt(clientX, clientY);
  }

  function handleMouseMove(e) {
    if (spawnOn !== "hover") return;
    const now = Date.now();
    // throttle hover spawns to ~1 every 60ms
    if (now - lastHoverRef.current < 60) return;
    lastHoverRef.current = now;
    const { clientX, clientY } = e.nativeEvent;
    spawnBurstAt(clientX, clientY, Math.max(3, Math.round(particleCount / 4)));
  }

  useEffect(() => {
    if (spawnOn === "mount") {
      // spawn a few bursts staggered
      spawnRandom(Math.round(particleCount / 2));
      const t = setTimeout(() => spawnRandom(Math.round(particleCount / 2)), 350);
      return () => clearTimeout(t);
    }
  }, [spawnOn]);

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-block select-none ${className}`}
      onClick={spawnOn === "click" ? handleClick : undefined}
      onMouseMove={handleMouseMove}
      // don't allow particles to capture pointer events
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <span className="relative z-10 inline-block">{children}</span>

      {/* particles layer */}
      <div
        aria-hidden
        style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "visible" }}
      >
        {particles.map((p) => (
          <div
            key={p.id}
            style={{
              position: "absolute",
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              transform: `translate(-50%, -50%) rotate(${p.rotate}deg)`,
              animation: `starParticle ${duration}ms cubic-bezier(.2,.9,.3,1) ${p.delay}ms forwards`,
              willChange: "transform, opacity",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 20,
            }}
          >
            {/* simple star SVG */}
            <svg
              viewBox="0 0 24 24"
              width={p.size}
              height={p.size}
              style={{ display: "block" }}
            >
              <path
                d="M12 2l2.9 6.3L21 9.2l-5 4.2L17 21l-5-3.2L7 21l1-7.6L3 9.2l6.1-.9L12 2z"
                fill={color}
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}

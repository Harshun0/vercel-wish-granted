import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const styleRef = useRef<HTMLStyleElement | null>(null);

  useEffect(() => {
    const checkDevice = () => {
      const isDesktop = window.matchMedia("(pointer: fine) and (min-width: 768px)").matches;
      if (isDesktop) {
        setEnabled(true);
        document.body.classList.add("hide-cursor");
        document.documentElement.classList.add("hide-cursor");
        if (!styleRef.current) {
          const style = document.createElement("style");
          style.dataset.customCursor = "true";
          style.textContent = "html, body, body *, body *::before, body *::after { cursor: none !important; }";
          document.head.appendChild(style);
          styleRef.current = style;
        }
      } else {
        setEnabled(false);
        document.body.classList.remove("hide-cursor");
        document.documentElement.classList.remove("hide-cursor");
        styleRef.current?.remove();
        styleRef.current = null;
      }
    };

    checkDevice();

    const mediaQuery = window.matchMedia("(pointer: fine) and (min-width: 768px)");
    const handleMediaChange = () => checkDevice();
    mediaQuery.addEventListener("change", handleMediaChange);

    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [role='button'], input, textarea, select, [data-cursor='hover']"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
      document.body.classList.remove("hide-cursor");
      document.documentElement.classList.remove("hide-cursor");
      styleRef.current?.remove();
      styleRef.current = null;
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      {/* Crosshair lines */}
      <div
        className="pointer-events-none fixed z-[70] transition-transform duration-150 ease-out"
        style={{ transform: `translate(${pos.x}px, ${pos.y}px)` }}
      >
        <div className="relative" style={{ transform: "translate(-50%, -50%)" }}>
          <div className={`absolute left-1/2 top-1/2 h-px -translate-x-1/2 -translate-y-1/2 bg-primary transition-all ${hover ? "w-10" : "w-6"}`} />
          <div className={`absolute left-1/2 top-1/2 w-px -translate-x-1/2 -translate-y-1/2 bg-primary transition-all ${hover ? "h-10" : "h-6"}`} />
          <div className={`rounded-full bg-primary transition-all ${hover ? "size-3" : "size-1.5"}`} />
        </div>
      </div>
    </>
  );
}

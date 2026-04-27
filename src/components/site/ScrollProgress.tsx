import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [w, setW] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setW(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed left-0 top-0 z-[80] h-[3px] w-full bg-transparent">
      <div className="h-full bg-primary transition-[width] duration-75" style={{ width: `${w}%` }} />
    </div>
  );
}

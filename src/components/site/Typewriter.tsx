import { useEffect, useState } from "react";

export function Typewriter({ text, speed = 80, className = "" }: { text: string; speed?: number; className?: string }) {
  const [out, setOut] = useState("");
  useEffect(() => {
    setOut("");
    let i = 0;
    const id = setInterval(() => {
      i++;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, speed]);
  return (
    <span className={className}>
      {out}
      <span className="caret ml-1 align-middle" style={{ height: "0.9em" }} />
    </span>
  );
}

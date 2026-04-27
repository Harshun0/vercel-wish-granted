import { useEffect, useState } from "react";

const KEY = "raftaar_cart_count";
const EVT = "raftaar_cart_change";

export function useCart() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const read = () => {
      try {
        setCount(parseInt(localStorage.getItem(KEY) || "0", 10) || 0);
      } catch {
        setCount(0);
      }
    };
    read();
    window.addEventListener(EVT, read);
    window.addEventListener("storage", read);
    return () => {
      window.removeEventListener(EVT, read);
      window.removeEventListener("storage", read);
    };
  }, []);

  const add = () => {
    const next = count + 1;
    localStorage.setItem(KEY, String(next));
    setCount(next);
    window.dispatchEvent(new Event(EVT));
  };

  return { count, add };
}

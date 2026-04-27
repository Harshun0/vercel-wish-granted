import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useCart } from "./cart-store";

const links = [
  { to: "/", label: "HOME" },
  { to: "/music", label: "MUSIC" },
  { to: "/shows", label: "SHOWS" },
  { to: "/merch", label: "MERCH" },
  { to: "/contact", label: "CONTACT" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { count } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[55] transition-all ${
          scrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-5 py-4 md:px-10">
          <Link to="/" className="font-display text-2xl tracking-widest md:text-3xl">
            RAFT<span className="text-primary">/</span>AAR
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
                className="font-display text-sm tracking-[0.2em] text-foreground/80 transition-colors hover:text-primary cursor-pointer"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/merch" className="relative cursor-pointer" aria-label="Cart">
              <ShoppingBag className="size-5" />
              {count > 0 && (
                <span className="absolute -right-2 -top-2 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                  {count}
                </span>
              )}
            </Link>
            <button className="md:hidden" onClick={() => setOpen(true)} aria-label="Open menu">
              <Menu className="size-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl transition-all md:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex items-center justify-between px-5 py-4">
          <span className="font-display text-2xl tracking-widest">RAFT<span className="text-primary">/</span>AAR</span>
          <button onClick={() => setOpen(false)} aria-label="Close menu">
            <X className="size-6" />
          </button>
        </div>
        <nav className="mt-12 flex flex-col items-center gap-8 px-5">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="font-display text-5xl tracking-wider cursor-pointer"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {l.label}
            </Link>
          ))}
          <div className="mt-6 font-hindi text-xl text-gold">ये रफ़्तार है</div>
        </nav>
      </div>
    </>
  );
}

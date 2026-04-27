import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Youtube } from "lucide-react";
import { Ticker } from "./Ticker";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-background pb-24">
      <Ticker direction="right" accent text="ये रफ़्तार है • LEGACY • BILLION STREAMS • मंटो • " />
      <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <div className="font-display text-6xl tracking-widest md:text-7xl">
            RAFT<span className="text-primary">/</span>AAR
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Dilin Nair. Rapper. Producer. MTV Hustle judge. Founder of Kalamkaar.
            Delhi se Mumbai tak — back nahi hoga.
          </p>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest text-muted-foreground">EXPLORE</div>
          <ul className="mt-4 space-y-2 font-display tracking-wider">
            <li><Link to="/music" className="hover:text-primary">Music</Link></li>
            <li><Link to="/shows" className="hover:text-primary">Shows</Link></li>
            <li><Link to="/merch" className="hover:text-primary">Merch</Link></li>
            <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
          </ul>
        </div>
        <div>
          <div className="font-display text-sm tracking-widest text-muted-foreground">FOLLOW</div>
          <div className="mt-4 flex gap-3">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex size-10 items-center justify-center border border-border hover:border-primary hover:text-primary"><Instagram className="size-4" /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex size-10 items-center justify-center border border-border hover:border-primary hover:text-primary"><Youtube className="size-4" /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="flex size-10 items-center justify-center border border-border hover:border-primary hover:text-primary"><Twitter className="size-4" /></a>
          </div>
          <p className="mt-6 text-xs text-muted-foreground">management@raftaar.in</p>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-2 px-5 py-6 text-xs text-muted-foreground md:flex-row md:items-center md:px-10">
          <span>© {new Date().getFullYear()} RAFTAAR. All rights reserved.</span>
          <span className="font-mono tracking-widest">KALAMKAAR / TOP SHOTTA</span>
        </div>
      </div>
    </footer>
  );
}

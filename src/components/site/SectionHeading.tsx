import type { ReactNode } from "react";

export function SectionHeading({ kicker, title, hindi, children }: { kicker?: string; title: string; hindi?: string; children?: ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      {kicker && (
        <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-10 bg-primary" />
          {kicker}
        </div>
      )}
      <div className="flex flex-wrap items-end gap-x-6 gap-y-2">
        <h2 className="font-display text-6xl leading-[0.85] tracking-wider md:text-8xl lg:text-9xl">
          {title}
        </h2>
        {hindi && <span className="font-hindi text-2xl text-gold md:text-4xl">{hindi}</span>}
      </div>
      {children && <p className="max-w-2xl text-sm text-muted-foreground md:text-base">{children}</p>}
    </div>
  );
}

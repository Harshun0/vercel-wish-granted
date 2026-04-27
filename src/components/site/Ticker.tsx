type Props = {
  text?: string;
  direction?: "left" | "right";
  accent?: boolean;
};

const DEFAULT = "RaftaaЯ • KALAMKAAR • HARD DRIVE • ZERO TO INFINITY • MR. NAIR • THE LEGACY • DILLI WAALI BAATCHEET • SHEIKH CHILLI •";

export function Ticker({ text = DEFAULT, direction = "left", accent = false }: Props) {
  const repeated = Array.from({ length: 6 }).map(() => text).join(" ");
  return (
    <div
      className={`relative overflow-hidden border-y border-border py-4 ${
        accent ? "bg-primary text-primary-foreground" : "bg-background text-foreground"
      }`}
    >
      <div className={`whitespace-nowrap font-display text-3xl md:text-5xl ${direction === "left" ? "animate-ticker-left" : "animate-ticker-right"}`}>
        <span className="inline-block pr-8">{repeated}</span>
        <span className="inline-block pr-8">{repeated}</span>
      </div>
    </div>
  );
}

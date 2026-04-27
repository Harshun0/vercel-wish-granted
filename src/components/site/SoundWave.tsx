export function SoundWave({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 80 });
  return (
    <div className={`pointer-events-none flex h-full w-full items-center justify-center gap-1 ${className}`}>
      {bars.map((_, i) => {
        const h = 20 + Math.abs(Math.sin(i * 0.4)) * 60 + Math.random() * 20;
        return (
          <span
            key={i}
            className="sound-bar w-1 bg-primary/40"
            style={{
              height: `${h}%`,
              animationDelay: `${(i % 10) * 0.08}s`,
              animationDuration: `${0.8 + (i % 5) * 0.2}s`,
            }}
          />
        );
      })}
    </div>
  );
}

import { Pause, Play, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useMusic } from "@/hooks/useMusic";
import { TRACKS } from "./data";

// Defined outside component to avoid re-injection on every render
const SOUND_BAR_STYLE = `
  @keyframes soundBar {
    0%, 100% { transform: scaleY(0.25); }
    50%       { transform: scaleY(1); }
  }
`;

const BAR_HEIGHTS = [0.4, 0.7, 0.5, 0.9, 0.6, 0.8, 0.4, 0.7];

export function MusicBar() {
  const {
    currentTrack,
    playing,
    currentTime,
    duration,
    togglePlayPause,
    handleNext,
    handlePrevious,
    handleSeek,
  } = useMusic();

  const tracksWithAudio = TRACKS.filter((track) => track.audioUrl);

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  const handleSeekClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSeek(((e.clientX - rect.left) / rect.width) * duration);
  };

  return (
    <>
      {/* Sound bar keyframes — outside component so not re-injected every render */}
      <style>{SOUND_BAR_STYLE}</style>

      <div className="pointer-events-auto fixed inset-x-0 bottom-0 z-[9999] border-t border-border bg-background/90 backdrop-blur-xl">
        <div className="pointer-events-auto mx-auto flex max-w-[1600px] items-center gap-4 px-4 py-2 md:gap-6 md:px-10 md:py-3">

          {/* Track info */}
          <div className="flex min-w-0 shrink-0 items-center gap-3">
            <div className="relative size-10 shrink-0 overflow-hidden bg-primary md:size-12">
              <img
                src={
                  currentTrack?.art ||
                  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=200&q=80"
                }
                alt="Now playing"
                className="size-full object-cover"
              />
            </div>
            <div className="min-w-0">
              <div className="truncate font-display text-sm tracking-widest md:text-base">
                {currentTrack?.title || "No track selected"}
              </div>
              <div className="truncate text-[10px] uppercase tracking-widest text-muted-foreground md:text-xs">
                Raftaar · {currentTrack?.year || ""}
              </div>
            </div>
          </div>

          {/* Seek bar — flex-1 fills the middle */}
          <div className="flex-1 items-center gap-2 md:flex">
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {formatTime(currentTime)}
            </span>
            <div
              className="relative h-2 flex-1 cursor-pointer rounded-full bg-muted"
              onClick={handleSeekClick}
            >
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${progress}%` }}
              />
              {/* Scrubber thumb */}
              <div
                className="absolute top-1/2 size-3 -translate-y-1/2 rounded-full bg-primary shadow"
                style={{ left: `calc(${progress}% - 6px)` }}
              />
            </div>
            <span className="shrink-0 font-mono text-xs text-muted-foreground">
              {formatTime(duration)}
            </span>
          </div>

          {/* Controls */}
          <div className="ml-auto flex shrink-0 items-center gap-2 md:gap-4">
            <button
              onClick={handlePrevious}
              className="text-foreground/60 hover:text-primary"
              aria-label="Previous"
              disabled={tracksWithAudio.length <= 1}
            >
              <SkipBack className="size-4" />
            </button>

            <button
              onClick={togglePlayPause}
              className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition hover:scale-105 disabled:opacity-50"
              aria-label={playing ? "Pause" : "Play"}
              disabled={!currentTrack?.audioUrl}
            >
              {playing ? (
                <Pause className="size-4" />
              ) : (
                <Play className="size-4 translate-x-px" />
              )}
            </button>

            <button
              onClick={handleNext}
              className="text-foreground/60 hover:text-primary"
              aria-label="Next"
              disabled={tracksWithAudio.length <= 1}
            >
              <SkipForward className="size-4" />
            </button>

            {/* Volume (static) */}
            <div className="hidden items-center gap-2 md:flex">
              <Volume2 className="size-4 text-foreground/60" />
              <div className="h-1 w-20 rounded-full bg-muted">
                <div className="h-full w-2/3 rounded-full bg-primary" />
              </div>
            </div>

            {/* Sound bars — px heights so percentage scaling works correctly */}
            <div
              className="hidden md:flex items-end gap-0.5"
              style={{ height: "32px" }}
            >
              {BAR_HEIGHTS.map((h, i) => (
                <span
                  key={i}
                  style={{
                    display: "block",
                    width: "3px",
                    // Use px instead of % — % heights are unreliable on inline/block
                    // children even when parent has a fixed Tailwind h-8 class
                    height: `${h * 32}px`,
                    backgroundColor: "hsl(var(--primary))",
                    transformOrigin: "bottom",
                    animation: playing
                      ? `soundBar 0.8s ease-in-out ${i * 0.1}s infinite`
                      : "none",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
}
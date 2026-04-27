import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { TRACKS, type Track } from "@/components/site/data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { Ticker } from "@/components/site/Ticker";
import { useMusic } from "@/hooks/useMusic";

export const Route = createFileRoute("/music")({
  head: () => ({
    meta: [
      { title: "Music — RAFTAAR | Discography, Singles & Collabs" },
      { name: "description", content: "Stream Raftaar's full discography. Albums, singles, features and collabs — Mantoiyat to Top Shotta." },
      { property: "og:title", content: "RAFTAAR — Music" },
      { property: "og:description", content: "Full discography on Spotify, YouTube and Apple Music." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80" },
    ],
  }),
  component: MusicPage,
});

const FILTERS = ["ALL", "SINGLES", "FEATURES", "COLLABS"] as const;
type Filter = typeof FILTERS[number];

const matches = (t: Track, f: Filter) =>
  f === "ALL" ||
  (f === "SINGLES" && t.type === "Single") ||
  (f === "FEATURES" && t.type === "Feature") ||
  (f === "COLLABS" && t.type === "Collab");

function MusicPage() {
  const [filter, setFilter] = useState<Filter>("ALL");
  const { handleTrackSelect } = useMusic();
  const filtered = TRACKS.filter((t) => matches(t, filter));

  const handleTrackClick = (track: Track) => {
    if (track.audioUrl) {
      handleTrackSelect(track);
    }
  };

  return (
    <div className="pb-20">
      <section className="relative pt-40 pb-12">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectionHeading kicker="THE CATALOGUE" title="DISCOGRAPHY" hindi="सारी कहानी">
            Every track. Every collab. Every guest verse. From the early Mafia Mundeer days to today.
          </SectionHeading>
        </div>
      </section>

      <Ticker accent text="STREAM NOW • SPOTIFY • APPLE MUSIC • YOUTUBE • " />

      <section className="py-12">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="flex flex-wrap gap-2 border-b border-border pb-6">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-5 py-2 font-display tracking-[0.2em] text-sm transition ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "border border-border text-foreground/70 hover:border-primary hover:text-primary"
                }`}
              >
                {f}
              </button>
            ))}
            <span className="ml-auto self-center font-mono text-xs text-muted-foreground">
              {filtered.length} TRACKS
            </span>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filtered.map((t, i) => (
              <Reveal key={t.title} delay={(i % 8) * 50}>
                <div className="group relative">
                  <div className="relative aspect-square overflow-hidden bg-muted">
                    <img src={t.art} alt={t.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute left-3 top-3 bg-background/70 px-2 py-1 font-mono text-[10px] tracking-widest backdrop-blur">
                      {t.type.toUpperCase()}
                    </div>
                    {t.audioUrl && (
                      <button
                        onClick={() => handleTrackClick(t)}
                        className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100"
                        aria-label={`Play ${t.title}`}
                      >
                        <div className="rounded-full bg-primary/90 p-4 text-primary-foreground">
                          <svg className="size-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        </div>
                      </button>
                    )}
                    <div className="absolute inset-x-0 bottom-0 flex translate-y-full gap-2 p-3 transition-transform group-hover:translate-y-0">
                      {[
                        { name: "Spotify", url: t.spotify },
                        { name: "YouTube", url: t.youtube },
                        { name: "Apple", url: t.apple }
                      ].map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.url || "#"}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 bg-background/90 px-3 py-2 text-center font-mono text-[10px] uppercase tracking-widest backdrop-blur hover:bg-primary hover:text-primary-foreground disabled:opacity-50 disabled:cursor-not-allowed"
                          onClick={(e) => {
                            if (!platform.url) {
                              e.preventDefault();
                            }
                          }}
                        >
                          <ExternalLink className="mx-auto mb-1 size-3" />
                          {platform.name}
                        </a>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 flex items-baseline justify-between">
                    <h3 className="font-display text-xl tracking-wide">{t.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{t.year}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

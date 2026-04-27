import { createFileRoute } from "@tanstack/react-router";
import { Calendar, MapPin, Ticket } from "lucide-react";
import { SHOWS, PAST_SHOWS } from "@/components/site/data";
import { Reveal } from "@/components/site/Reveal";
import { Ticker } from "@/components/site/Ticker";

export const Route = createFileRoute("/shows")({
  head: () => ({
    meta: [
      { title: "Shows — RAFTAAR Live Tour Dates 2025/26" },
      { name: "description", content: "Raftaar live in your city. Tour dates across India and Dubai. Book Raftaar for your event." },
      { property: "og:title", content: "RAFTAAR — Live Tour" },
      { property: "og:description", content: "Delhi, Mumbai, Bangalore, Pune, Hyderabad, Dubai. Catch the rocket live." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&q=80" },
    ],
  }),
  component: ShowsPage,
});

function ShowsPage() {
  return (
    <div>
      <section className="relative flex min-h-[80svh] items-center overflow-hidden pt-24">
        <div className="absolute inset-0 opacity-30">
          <img src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1800&q=80" alt="" className="size-full object-cover grayscale" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary">2025 / 2026 WORLD TOUR</div>
          <h1 className="mt-4 font-display text-7xl leading-[0.85] tracking-wider md:text-[12rem]">
            LIVE IN<br />YOUR <span className="text-primary">CITY</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Six cities. Two countries. One mission — paint every stadium orange. ये रफ़्तार है।
          </p>
        </div>
      </section>

      <Ticker accent text="TICKETS LIVE • SOLD OUT • LAST ROW BHI VIP HAI • " />

      {/* Upcoming */}
      <section className="py-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="font-display text-5xl tracking-widest md:text-7xl">UPCOMING</h2>
            <span className="font-mono text-xs text-muted-foreground">{SHOWS.length} DATES</span>
          </div>
          <div className="divide-y divide-border border-y border-border">
            {SHOWS.map((s, i) => (
              <Reveal key={s.city} delay={i * 60}>
                <div className="group grid grid-cols-1 items-center gap-4 py-8 transition hover:bg-card md:grid-cols-[auto_1fr_auto_auto] md:gap-10 md:py-12">
                  <div className="font-mono text-xs text-muted-foreground md:w-16">0{i + 1}</div>
                  <div>
                    <div className="font-display text-5xl leading-none tracking-wider transition group-hover:text-primary md:text-7xl">
                      {s.city}
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5"><MapPin className="size-3.5" /> {s.venue}</span>
                      <span className="font-mono text-xs">{s.country}</span>
                    </div>
                  </div>
                  <div className="font-display text-2xl tracking-widest text-foreground md:text-right">
                    <Calendar className="mr-2 inline size-4 text-primary" />
                    {s.date}
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 border border-primary px-6 py-3 font-display tracking-widest text-primary transition hover:bg-primary hover:text-primary-foreground">
                    <Ticket className="size-4" /> TICKETS
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past */}
      <section className="bg-card py-24 diagonal-top">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <h2 className="font-display text-5xl tracking-widest text-muted-foreground md:text-7xl">PAST SHOWS</h2>
          <div className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {PAST_SHOWS.map((s) => (
              <div key={s.city} className="bg-card p-6 grayscale">
                <div className="font-display text-3xl tracking-widest">{s.city}</div>
                <div className="mt-2 text-sm text-muted-foreground">{s.venue}</div>
                <div className="mt-1 font-mono text-xs text-muted-foreground">{s.date}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="border-2 border-primary p-10 text-center md:p-20">
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-primary">PRIVATE & CORPORATE</div>
            <h3 className="mt-4 font-display text-5xl leading-[0.9] tracking-wider md:text-8xl">
              BOOK RAFTAAR<br />FOR YOUR EVENT
            </h3>
            <p className="mx-auto mt-6 max-w-xl text-muted-foreground">
              Weddings, festivals, brand events, college fests. Sab kuch possible — bas baat kar.
            </p>
            <a href="mailto:management@raftaar.in" className="mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 font-display tracking-[0.25em] text-primary-foreground transition hover:bg-primary/90">
              GET IN TOUCH
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

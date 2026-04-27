import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, MapPin, Play, Ticket } from "lucide-react";
import { Ticker } from "@/components/site/Ticker";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { Typewriter } from "@/components/site/Typewriter";
import { SoundWave } from "@/components/site/SoundWave";
import { SectionHeading } from "@/components/site/SectionHeading";
import { ParticleDust } from "@/components/site/ParticleDust";
import { CustomCursor } from "@/components/site/CustomCursor";
import { TRACKS, VIDEOS, SHOWS, PRODUCTS } from "@/components/site/data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RaftaaЯ — Official Website | Legacy Since 2017" },
      { name: "description", content: "The official home of RaftaaЯ. Kalamkaar founder. HARD DRIVE creator. Zero to Infinity. ये सफर Zero से Infinity तक है।" },
      { property: "og:title", content: "RaftaaЯ — Legacy" },
      { property: "og:description", content: "Kalamkaar founder. HARD DRIVE creator. Building from Zero to Infinity." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80" },
      { name: "twitter:image", content: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80" },
    ],
  }),
  component: HomePage,
});

const concertPhotos = [
  "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=900&q=80",
  "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=900&q=80",
  "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=900&q=80",
  "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=900&q=80",
  "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=900&q=80",
  "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=900&q=80",
  "https://images.unsplash.com/photo-1574391884720-bbc049ec09ad?w=900&q=80",
];

function HomePage() {
  return (
    <div className="grain-fixed">
      <CustomCursor />
      {/* HERO */}
      <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Video background */}
        <div className="absolute inset-0 opacity-100">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="size-full object-cover"
          >
            <source src="https://res.cloudinary.com/drvug594q/video/upload/v1777203032/Video-121_amfwll.mp4" type="video/mp4" />
          </video>
        </div>
        <ParticleDust />
        {/* Cave atmosphere overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black" />
        
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 pt-32 text-center md:px-10">
          <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#C9A84C] md:text-sm">
            KALAMKAAR. DELHI. SINCE 2017.
          </div>
          <h1
            data-text="RaftaaЯ"
            className="glitch mt-6 font-display text-[22vw] leading-[0.8] tracking-tight text-[#E8E0D0] md:text-[18vw] lg:text-[16vw]"
          >
            RaftaaЯ
          </h1>
          <div className="mt-6 font-hindi text-2xl text-[#C9A84C] md:text-4xl">
            ये सफर Zero से Infinity तक है
          </div>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            <Link to="/music" className="group relative inline-flex items-center gap-3 bg-[#8B0000] px-8 py-4 font-display tracking-[0.25em] text-[#E8E0D0] transition hover:bg-[#DC143C]">
              MUSIC
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link to="/kalamkaar" className="group relative inline-flex items-center gap-3 border border-[#C9A84C]/30 bg-transparent px-8 py-4 font-display tracking-[0.25em] text-[#E8E0D0] transition hover:border-[#8B0000] hover:text-[#8B0000]">
              KALAMKAAR
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.4em] text-[#C9A84C]/50">
          ↓ scroll for the legacy
        </div>
      </section>

      <Ticker accent />

      {/* ABOUT - DILIN NAIR */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 md:grid-cols-2 md:px-10 lg:gap-20">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden grain">
              <img
                src="https://res.cloudinary.com/drvug594q/image/upload/v1777320388/imgi_4_657332626_18398430622179491_4567440773634990981_n_pz2enm.jpg"
                alt="Dilin Nair portrait"
                className="size-full object-cover grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#8B0000]/30 via-transparent to-transparent mix-blend-overlay" />
              <div className="absolute bottom-4 left-4 font-display text-xl tracking-widest text-[#E8E0D0]">
                DILIN <span className="text-[#C9A84C]">/</span> NAIR
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex h-full flex-col justify-center">
              <SectionHeading kicker="THE ORIGIN" title="DILIN NAIR" hindi="दिलिन नायर" />
              <p className="mt-8 text-base leading-relaxed text-[#E8E0D0]/85 md:text-lg">
                Kerala boy raised in Delhi who fought his way from <span className="text-[#C9A84C]">Mafia Mundeer</span> to building his own empire.
                <span className="text-[#C9A84C]"> Kalamkaar</span> isn't just a label — it's a legacy. From Zero to Infinity, every verse carved in stone.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[#E8E0D0]/60 md:text-base">
                Kerala → Delhi → Mafia Mundeer → KALAMKAAR → Legacy. This isn't just music. This is history being written.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-px bg-[#1A1A1A]">
                {[
                  { n: 15, suf: "+", l: "YRS" },
                  { n: 4, suf: "", l: "ALBUMS" },
                  { n: 1, suf: "", l: "KALAMKAAR FOUNDER" },
                  { n: 1, suf: "", l: "MTV HUSTLE JUDGE" },
                ].map((s) => (
                  <div key={s.l} className="bg-[#0A0A0A] p-6">
                    <div className="font-display text-5xl text-[#8B0000] md:text-6xl">
                      {s.n}{s.suf}
                    </div>
                    <div className="mt-2 font-mono text-[10px] uppercase tracking-widest text-[#C9A84C]/60">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* DISCOGRAPHY - THE HARD DRIVE */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="THE ARCHIVE" title="THE HARD DRIVE" hindi="हार्ड ड्राइव" />
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Zero to Infinity", year: "2018", type: "ALBUM", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204517/Zerotoinfinity_advawm.png" },
              { title: "Mr. Nair", year: "2020", type: "ALBUM", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204517/mrnair_wfkov0.jpg" },
              { title: "HARD DRIVE Vol.1", year: "2022", type: "ALBUM", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204516/harddrivevol1_ujfz9j.jpg" },
              { title: "HARD DRIVE Vol.2", year: "2024", type: "ALBUM", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204550/Screenshot_2026-04-26_at_5.20.38_PM_ndvhyn.png" },
              { title: "Yours Truly", year: "2021", type: "EP", artist: "w/ Prabh Deep", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777205047/yourstruly_eg6sxw.jpg" },
              { title: "WTF Mixtape", year: "2019", type: "MIXTAPE", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204516/wtf_b3y1pc.jpg" },
              { title: "Never Back Down", year: "2020", type: "SINGLE", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204517/neverback_us8ngq.jpg" },
              { title: "Sheikh Chilli", year: "2019", type: "SINGLE", cover: "https://res.cloudinary.com/drvug594q/image/upload/v1777204517/sheikhchilli_hudsza.png" },
            ].map((album, i) => (
              <Reveal key={album.title} delay={i * 60}>
                <div className="group relative">
                  <div className="relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
                    <img 
                      src={album.cover} 
                      alt={album.title}
                      className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="text-center">
                        <div className="font-display text-xl tracking-wide text-[#E8E0D0]">{album.title}</div>
                        <div className="mt-2 font-mono text-xs text-[#C9A84C]/60">{album.year}</div>
                      </div>
                    </div>
                    <div className="absolute left-3 top-3 bg-[#0A0A0A]/80 px-2 py-1 font-mono text-[10px] tracking-widest text-[#C9A84C] backdrop-blur border border-[#8B0000]/30">
                      {album.type}
                    </div>
                    <div className="absolute inset-0 transition-all duration-300 group-hover:bg-[#8B0000]/10" />
                  </div>
                  <div className="mt-3">
                    <h3 className="font-display text-lg tracking-wide text-[#E8E0D0]">{album.title}</h3>
                    {album.artist && <p className="text-sm text-[#C9A84C]/60">{album.artist}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12">
            <Link to="/music" className="inline-flex items-center gap-2 font-display tracking-[0.25em] text-[#8B0000] underline-grow">
              FULL DISCOGRAPHY <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* KALAMKAAR - THE LABEL */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="THE EMPIRE" title="KALAMKAAR" hindi="कलमकार" />
          </Reveal>
          <p className="mt-8 text-center text-lg text-[#E8E0D0]/80 max-w-3xl mx-auto">
            Not just a rapper. A label founder. Building the next generation of Indian hip-hop.
          </p>
          <div className="mt-12 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
            {[
              { name: "KR$NA", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/krsna_xbtreb.webp" },
              { name: "Rashmeet Kaur", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/rashmeet_ipkmn4.webp" },
              { name: "Deep Kalsi", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/deepkalsi_qfdyaa.webp" },
              { name: "Panther", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/panther_weoeni.jpg" },
              { name: "Yunan", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/yunan_kkk4pr.avif" },
              { name: "Harjas Harjaayi", image: "https://res.cloudinary.com/drvug594q/image/upload/v1777207127/Harjas_Harjaayi_000_20230306114725_500x500_cnvgm0.jpg" }
            ].map((artist, i) => (
              <Reveal key={artist.name} delay={i * 80}>
                <div className="group relative aspect-square overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
                  <img 
                    src={artist.image} 
                    alt={artist.name}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-[#C9A84C]/10 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="font-display text-lg tracking-wide text-[#E8E0D0] text-center drop-shadow-lg">{artist.name}</div>
                  </div>
                  <div className="absolute inset-0 transition-all duration-300 group-hover:bg-[#C9A84C]/10" />
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <a href="https://kalamkaarmusic.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-display tracking-[0.25em] text-[#C9A84C] underline-grow">
              VISIT KALAMKAAR <ArrowRight className="size-4" />
            </a>
          </div>
        </div>
      </section>

      {/* VIDEOS - WATCH */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="VISUALS" title="WATCH" hindi="देख" />
          </Reveal>
          <div className="mt-12 grid gap-3 md:grid-cols-4 md:grid-rows-2">
            {VIDEOS.slice(0, 5).map((v, i) => {
              const span =
                i === 0 ? "md:col-span-2 md:row-span-2 aspect-square" :
                i === 1 ? "md:col-span-2 aspect-video" :
                "aspect-video";
              return (
                <Reveal key={v.title} delay={i * 80} className={`${i === 0 ? "md:col-span-2 md:row-span-2" : ""} ${i === 1 ? "md:col-span-2" : ""}`}>
                  <a href={v.url} target="_blank" rel="noopener noreferrer" className={`group relative block overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A] ${span}`}>
                    <img src={v.img} alt={v.title} className="size-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-[#8B0000] shadow-[0_0_40px] shadow-[#8B0000]/60 transition-transform group-hover:scale-110 md:size-20">
                        <Play className="size-7 translate-x-0.5 fill-current md:size-9" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6">
                      <div className="font-display text-lg tracking-wide text-[#E8E0D0] md:text-2xl">{v.title}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-[#C9A84C]/60">{v.views} views</div>
                    </div>
                  </a>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <Ticker direction="right" />

      {/* LEGACY - THE SHOW */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="2026" title="LEGACY" hindi="विरासत" />
          </Reveal>
          <div className="mt-12 relative overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A]">
            <video
              src="https://res.cloudinary.com/drvug594q/video/upload/v1777320595/Video-131_o7ehcw.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 size-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#8B0000]/30 via-transparent to-[#DC143C]/30" />
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center">
              <div className="inline-block bg-[#8B0000] px-4 py-2 font-mono text-[10px] tracking-widest text-[#E8E0D0] mb-6">
                COMING TO YOUTUBE
              </div>
              <h3 className="font-display text-4xl md:text-6xl tracking-wide text-[#E8E0D0] mb-4">
                RaftaaЯ × KR$NA
              </h3>
              <p className="text-lg text-[#C9A84C]/80 max-w-2xl mx-auto">
                Two OGs. One mission. The next generation. A hip-hop documentary series that defines the culture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWS - LIVE */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="ON STAGE" title="LIVE" hindi="शहर" />
          </Reveal>
          <div className="mt-12 space-y-4">
            {[
              { city: "DELHI", date: "DEC 15", venue: "JLN STADIUM" },
              { city: "MUMBAI", date: "DEC 18", venue: "NSCI DOME" },
              { city: "BANGALORE", date: "DEC 22", venue: "PALACE GROUNDS" },
              { city: "DUBAI", date: "JAN 5", venue: "DUBAI MEDIA CITY" },
            ].map((show, i) => (
              <Reveal key={show.city} delay={i * 100}>
                <div className="flex items-center justify-between bg-[#1A1A1A] border border-[#1A1A1A] p-6">
                  <div>
                    <div className="font-display text-3xl tracking-wide text-[#E8E0D0]">{show.city}</div>
                    <div className="mt-1 font-mono text-sm text-[#C9A84C]/60">{show.date} • {show.venue}</div>
                  </div>
                  <button className="bg-[#8B0000] px-6 py-3 font-display tracking-widest text-[#E8E0D0] transition hover:bg-[#DC143C]">
                    TICKETS
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/shows" className="inline-flex items-center gap-2 font-display tracking-[0.25em] text-[#8B0000] underline-grow">
              ALL DATES <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAN - THE CIRCLE */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="relative mx-auto max-w-[1400px] overflow-hidden bg-[#1A1A1A] border border-[#1A1A1A] px-5 py-16 md:px-16 md:py-24">
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.4em] text-[#C9A84C]">INNER CIRCLE</div>
            <h2 className="mt-4 font-display text-6xl leading-none tracking-wider text-[#E8E0D0] md:text-8xl lg:text-9xl">
              JOIN THE<br />CIRCLE
            </h2>
            <p className="mt-6 max-w-xl text-base text-[#E8E0D0]/80 md:text-lg">
              Legacy updates, exclusive content, first access. This is where the real ones connect.
            </p>
            <form
              onSubmit={(e) => { e.preventDefault(); alert("Welcome to the Inner Circle"); }}
              className="mt-10 flex w-full max-w-xl flex-col gap-3 md:flex-row"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                className="flex-1 border border-[#8B0000]/50 bg-transparent px-5 py-4 font-mono text-sm text-[#E8E0D0] placeholder:text-[#E8E0D0]/60 focus:border-[#8B0000] focus:outline-none"
              />
              <button className="bg-[#8B0000] px-8 py-4 font-display tracking-[0.25em] text-[#E8E0D0] transition hover:bg-[#DC143C]">
                JOIN
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

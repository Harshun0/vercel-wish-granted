import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export const Route = createFileRoute("/kalamkaar")({
  head: () => ({
    meta: [
      { title: "KALAMKAAR — The Legacy Label | RaftaaЯ" },
      { name: "description", content: "Kalamkaar Music. Founded by RaftaaЯ. Home to KR$NA, Rashmeet Kaur, Deep Kalsi, Karma, Yunan, Harjas Harjaayi. Building the future of Indian hip-hop." },
      { property: "og:title", content: "KALAMKAAR — The Legacy Label" },
      { property: "og:description", content: "Founded by RaftaaЯ. Building the next generation of Indian hip-hop." },
    ],
  }),
  component: KalamkaarPage,
});

function KalamkaarPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* HERO */}
      <section className="relative flex min-h-[60vh] flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-[#0A0A0A]" />
        <div className="relative z-10 mx-auto max-w-[1600px] px-5 text-center md:px-10">
          <h1 className="font-display text-[15vw] leading-[0.8] tracking-tight text-[#E8E0D0] md:text-[12vw] lg:text-[10vw]">
            KALAMKAAR
          </h1>
          <div className="mt-6 font-hindi text-2xl text-[#C9A84C] md:text-4xl">
            कलमकार
          </div>
          <p className="mt-8 max-w-2xl text-lg text-[#E8E0D0]/80">
            Not just a label. A legacy. Founded by RaftaaЯ in 2017 to build the next generation of Indian hip-hop.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="relative py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="THE BEGINNING" title="STORY" hindi="कहानी" />
          </Reveal>
          <div className="mt-12 grid gap-12 md:grid-cols-2">
            <Reveal delay={150}>
              <div>
                <h3 className="font-display text-3xl tracking-wide text-[#E8E0D0] mb-4">THE VISION</h3>
                <p className="text-[#E8E0D0]/80 leading-relaxed">
                  From Zero to Infinity. Kalamkaar was born from RaftaaЯ's vision to create a platform where authentic voices could thrive. 
                  The ink writer becomes the label founder — building an empire from the ground up.
                </p>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div>
                <h3 className="font-display text-3xl tracking-wide text-[#E8E0D0] mb-4">THE MISSION</h3>
                <p className="text-[#E8E0D0]/80 leading-relaxed">
                  Every artist signed to Kalamkaar represents the future of Indian hip-hop. We don't follow trends — we set them. 
                  This is where legends are made.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARTISTS */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-32">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="THE ROSTER" title="ARTISTS" hindi="कलाकार" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
  {
    name: "KR$NA",
    role: "The Battle King",
    bio: "Underground legend turned mainstream force. The voice of the streets.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/krsna_xbtreb.webp"
  },
  {
    name: "Rashmeet Kaur",
    role: "Soulful Storyteller",
    bio: "Blending tradition with trap. Creating sounds that transcend boundaries.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/rashmeet_ipkmn4.webp"
  },
  {
    name: "Deep Kalsi",
    role: "Punjab's Finest",
    bio: "Raw lyrics, hard-hitting beats. The voice of Punjab's youth.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/deepkalsi_qfdyaa.webp"
  },
  {
    name: "Panther",
    role: "The Poet",
    bio: "Wordsmith with a vision. Every verse tells a story worth hearing.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/panther_weoeni.jpg"
  },
  {
    name: "Yunan",
    role: "The Revolutionary",
    bio: "Political consciousness meets hard bars. The voice of change.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777205644/yunan_kkk4pr.avif"
  },
  {
    name: "Harjas Harjaayi",
    role: "Spiritual Warrior",
    bio: "Ancient wisdom meets modern flow. Bridging generations through music.",
    image: "https://res.cloudinary.com/drvug594q/image/upload/v1777207127/Harjas_Harjaayi_000_20230306114725_500x500_cnvgm0.jpg"
  }
].map((artist, i) => (
  <Reveal key={artist.name} delay={i * 100}>
    <div className="group relative overflow-hidden border border-[#2A2A2A] bg-[#1A1A1A] transition-all duration-300 hover:border-[#8B0000]/50">
      
      {/* IMAGE CONTAINER — fixed height, no collapse */}
      <div className="relative h-[320px] w-full overflow-hidden bg-[#111]">
        <img
          src={artist.image}
          alt={artist.name}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          onError={(e) => {
            console.error(`Failed to load image for ${artist.name}:`, artist.image);
            e.currentTarget.style.display = "none";
          }}
          onLoad={() => {
            console.log(`Successfully loaded image for ${artist.name}`);
          }}
        />
        {/* gradient overlay — pointer-events-none so it never blocks img */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-[#1A1A1A]/20 to-transparent" />
        {/* red glow on hover */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#8B0000]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      {/* TEXT */}
      <div className="p-6">
        <h3 className="font-display text-2xl tracking-wide text-[#E8E0D0]">
          {artist.name}
        </h3>
        <p className="mt-1 font-mono text-sm text-[#C9A84C]/70">
          {artist.role}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[#E8E0D0]/60">
          {artist.bio}
        </p>
      </div>

    </div>
  </Reveal>
))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="relative py-24 md:py-32 bg-[#0A0A0A]">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <Reveal>
            <SectionHeading kicker="GET IN TOUCH" title="CONTACT" hindi="संपर्क" />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Reveal delay={150}>
              <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-8">
                <h3 className="font-display text-xl tracking-wide text-[#E8E0D0] mb-4">ARTIST SUBMISSIONS</h3>
                <p className="text-[#E8E0D0]/70 mb-6">
                  Think you have what it takes to join the legacy? Send your demos and portfolio.
                </p>
                <a 
                  href="mailto:artists@kalamkaarmusic.com"
                  className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E8E0D0] transition-colors"
                >
                  <Mail className="size-4" />
                  artists@kalamkaarmusic.com
                </a>
              </div>
            </Reveal>
            <Reveal delay={300}>
              <div className="bg-[#1A1A1A] border border-[#1A1A1A] p-8">
                <h3 className="font-display text-xl tracking-wide text-[#E8E0D0] mb-4">BUSINESS INQUIRIES</h3>
                <p className="text-[#E8E0D0]/70 mb-6">
                  For partnerships, collaborations, and business opportunities.
                </p>
                <a 
                  href="mailto:business@kalamkaarmusic.com"
                  className="inline-flex items-center gap-2 text-[#C9A84C] hover:text-[#E8E0D0] transition-colors"
                >
                  <Mail className="size-4" />
                  business@kalamkaarmusic.com
                </a>
              </div>
            </Reveal>
          </div>
          <div className="mt-12 text-center">
            <a 
              href="https://kalamkaarmusic.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#8B0000] px-8 py-4 font-display tracking-[0.25em] text-[#E8E0D0] transition hover:bg-[#DC143C]"
            >
              VISIT KALAMKAAR.COM <ExternalLink className="size-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Instagram, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RaftaaЯ | Bookings, Press & Legacy" },
      { name: "description", content: "Get in touch with RaftaaЯ's team. Management, press inquiries, collaborations. For Kalamkaar signings, visit kalamkaarmusic.com" },
      { property: "og:title", content: "RaftaaЯ — Contact" },
      { property: "og:description", content: "Management, press, collabs. Building from Zero to Infinity." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div>
      <section className="pt-40 pb-12">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectionHeading kicker="GET IN TOUCH" title="CONTACT" hindi="बात कर">
            Bookings, press, collabs, fan mail — sab yahin se. Hum padhte hain har message.
          </SectionHeading>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto grid max-w-[1600px] gap-16 px-5 md:grid-cols-2 md:px-10 lg:gap-24">
          <Reveal>
            <div className="space-y-10">
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">MANAGEMENT</div>
                <a href="mailto:management@kalamkaarmusic.com" className="mt-3 inline-flex items-center gap-3 font-display text-3xl tracking-wider underline-grow md:text-4xl">
                  <Mail className="size-6 text-primary" />
                  management@raftaarmusic.com
                </a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">PRESS</div>
                <a href="mailto:press@kalamkaarmusic.com" className="mt-3 inline-flex items-center gap-3 font-display text-2xl tracking-wider underline-grow">
                  <Mail className="size-5 text-primary" />
                  press@raftaar.in
                </a>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">PHONE</div>
                <div className="mt-3 inline-flex items-center gap-3 font-display text-2xl tracking-wider">
                  <Phone className="size-5 text-primary" />
                  +91 22 2615 4400
                </div>
              </div>
              <div>
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary">HQ</div>
                <div className="mt-3 inline-flex items-center gap-3 font-display text-xl tracking-wider">
                  <MapPin className="size-5 text-primary" />
                  Kalamkaar Studios, Mumbai
                </div>
              </div>

              <div className="border-t border-border pt-8">
                <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">FOLLOW</div>
                <div className="mt-4 flex gap-3">
                  <a href="https://instagram.com/raftaarmusic" target="_blank" rel="noreferrer" className="flex size-12 items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"><Instagram className="size-5" /></a>
                  <a href="https://www.youtube.com/@raftaarmusic" target="_blank" rel="noreferrer" className="flex size-12 items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"><Youtube className="size-5" /></a>
                  <a href="https://twitter.com/raftaarmusic" target="_blank" rel="noreferrer" className="flex size-12 items-center justify-center border border-border hover:border-primary hover:text-primary transition-all"><Twitter className="size-5" /></a>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form
              onSubmit={(e) => { e.preventDefault(); setSent(true); }}
              className="space-y-8 border border-border/50 bg-gradient-to-br from-background to-card/50 p-8 md:p-12 backdrop-blur-sm shadow-2xl"
            >
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-primary/80">NAME</label>
                <input 
                  required 
                  placeholder="Enter your name"
                  className="w-full border-b-2 border-border/30 bg-transparent px-2 py-3 text-lg font-display tracking-wide outline-none transition-all focus:border-primary focus:bg-primary/5" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-primary/80">EMAIL</label>
                <input 
                  type="email" 
                  required 
                  placeholder="your@email.com"
                  className="w-full border-b-2 border-border/30 bg-transparent px-2 py-3 text-lg font-display tracking-wide outline-none transition-all focus:border-primary focus:bg-primary/5" 
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-primary/80">SUBJECT</label>
                <select 
                  required 
                  defaultValue="" 
                  className="w-full border-b-2 border-border/30 bg-transparent px-2 py-3 text-lg font-display tracking-wide outline-none transition-all focus:border-primary focus:bg-primary/5 [&>option]:bg-background [&>option]:text-foreground"
                >
                  <option value="" disabled>Choose purpose</option>
                  <option>Booking Inquiry</option>
                  <option>Press & Media</option>
                  <option>Collaboration</option>
                  <option>Fan Mail</option>
                  <option>Business Proposal</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-widest text-primary/80">MESSAGE</label>
                <textarea 
                  required 
                  rows={5} 
                  placeholder="Tell us what's on your mind..."
                  className="w-full border-b-2 border-border/30 bg-transparent px-2 py-3 text-lg font-display tracking-wide outline-none transition-all focus:border-primary focus:bg-primary/5 resize-none" 
                />
              </div>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary/90 px-8 py-4 font-display tracking-[0.25em] text-primary-foreground transition-all hover:from-primary/90 hover:to-primary hover:shadow-lg hover:shadow-primary/25"
              >
                <Send className="size-4 transition-transform group-hover:translate-x-1" /> 
                <span>SEND MESSAGE</span>
              </button>
              {sent && (
                <div className="text-center rounded-lg bg-primary/10 border border-primary/30 p-4">
                  <p className="font-mono text-sm uppercase tracking-widest text-primary">
                    ✓ Message sent successfully — We'll get back to you within 24-48 hours
                  </p>
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

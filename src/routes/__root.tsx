import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CustomCursor } from "@/components/site/CustomCursor";
import { ScrollProgress } from "@/components/site/ScrollProgress";
import { MusicBar } from "@/components/site/MusicBar";
import { MusicProvider } from "@/hooks/useMusic";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <div className="font-display text-[20vw] leading-none text-stroke-primary">404</div>
      <h2 className="mt-4 font-display text-3xl tracking-widest">RAASTA NAHI MILA</h2>
      <p className="mt-2 text-sm text-muted-foreground">Yeh page exist nahi karta. Wapas chal.</p>
      <Link to="/" className="mt-8 inline-flex items-center justify-center bg-primary px-6 py-3 font-display tracking-widest text-primary-foreground">
        GO HOME
      </Link>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "RAFTAAR — Official Website | Indian Rapper, Producer" },
      { name: "description", content: "Official website of RAFTAAR (Dilin Nair). Music, shows, merch, and the Shotta Gang. Back nahi hoga." },
      { name: "author", content: "Raftaar" },
      { property: "og:title", content: "RAFTAAR — Official Website" },
      { property: "og:description", content: "Indian rapper, producer & MTV Hustle judge. Music, tour dates, drip & more." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@raftaarmusic" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "https://res.cloudinary.com/drvug594q/image/upload/v1777321508/imgi_85_racing-team-logo_717549-504-removebg-preview_spvsrh.png", type: "image/png" }
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="grain-fixed scanlines">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <MusicProvider>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      <main className="pb-20">
        <Outlet />
      </main>
      <Footer />
      <MusicBar />
    </MusicProvider>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { ShoppingBag, Truck } from "lucide-react";
import { PRODUCTS } from "@/components/site/data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { useCart } from "@/components/site/cart-store";

export const Route = createFileRoute("/merch")({
  head: () => ({
    meta: [
      { title: "DRIP STORE — RAFTAAR Official Merch" },
      { name: "description", content: "Raftaar official merch. Tees, hoodies, caps and more from the Shotta Gang. Free shipping above ₹999." },
      { property: "og:title", content: "RAFTAAR — Drip Store" },
      { property: "og:description", content: "Official streetwear from Raftaar." },
      { property: "og:image", content: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1200&q=80" },
    ],
  }),
  component: MerchPage,
});

function MerchPage() {
  const { add } = useCart();

  return (
    <div>
      <div className="mt-16 bg-primary py-2 text-center font-mono text-xs uppercase tracking-[0.3em] text-primary-foreground md:text-sm">
        <span className="inline-flex items-center gap-2"><Truck className="size-4" /> FREE SHIPPING ON ORDERS ABOVE ₹999 · COD AVAILABLE</span>
      </div>

      <section className="pt-20 pb-12">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <SectionHeading kicker="OFFICIAL STORE" title="DRIP STORE" hindi="माल खरीद">
            Limited drops. Heavy fabric. Loud prints. Wear the gang.
          </SectionHeading>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto max-w-[1600px] px-5 md:px-10">
          <div className="grid gap-4 bg-background sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={(i % 8) * 50}>
                <div className="group flex h-full flex-col bg-background p-5">
                  <div className="relative aspect-[4/5] overflow-hidden bg-muted">
                    <img src={p.img} alt={p.name} className={`size-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.soldOut ? "grayscale opacity-60" : ""}`} />
                    {p.soldOut && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-destructive px-4 py-2 font-display tracking-widest text-destructive-foreground">SOLD OUT</span>
                      </div>
                    )}
                    <div className="absolute left-2 top-2 font-mono text-[10px] tracking-widest text-foreground/70">
                      0{i + 1}
                    </div>
                  </div>
                  <div className="mt-4 flex flex-1 flex-col">
                    <h3 className="font-display text-lg tracking-wide">{p.name}</h3>
                    <div className="mt-1 font-mono text-sm text-primary">₹{p.price.toLocaleString("en-IN")}</div>
                    <button
                      disabled={p.soldOut}
                      onClick={add}
                      className="mt-4 inline-flex items-center justify-center gap-2 border border-foreground/30 px-4 py-3 font-display tracking-[0.2em] text-sm transition enabled:hover:border-primary enabled:hover:bg-primary enabled:hover:text-primary-foreground disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ShoppingBag className="size-4" />
                      {p.soldOut ? "UNAVAILABLE" : "ADD TO CART"}
                    </button>
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

import { createFileRoute, Link } from "@tanstack/react-router";
import fishpond from "@/assets/fishpond.jpg";
import { Droplets, Fish, Waves, Leaf } from "lucide-react";

export const Route = createFileRoute("/fisheries")({
  head: () => ({
    meta: [
      { title: "Fisheries — Vaeli Farms" },
      { name: "description", content: "Rain-fed freshwater fish ponds with rohu, catla, mrigal and tilapia. Sustainable water management on the estate." },
      { property: "og:title", content: "Fisheries — Vaeli Farms" },
      { property: "og:description", content: "Freshwater aquaculture ponds and species available from Vaeli Farms." },
    ],
  }),
  component: Fisheries,
});

const species = [
  { name: "Rohu (Labeo rohita)", note: "The workhorse of Indian carp culture. 1–3 kg at harvest." },
  { name: "Catla (Catla catla)", note: "Surface feeder, fast-growing, up to 5 kg." },
  { name: "Mrigal (Cirrhinus mrigala)", note: "Bottom feeder, keeps pond ecology balanced." },
  { name: "GIFT Tilapia", note: "Genetically improved farmed tilapia for local wet markets." },
];

function Fisheries() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <img src={fishpond} alt="Vaeli Farms fish ponds" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto max-w-7xl px-5 py-28 text-primary-foreground md:px-8 md:py-40">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-[color:var(--primary-glow)]">Fisheries</span>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-7xl">Rain-fed. River-nourished.</h1>
          <p className="mt-5 max-w-xl text-lg text-primary-foreground/90">
            Three interconnected ponds totaling 6.5 acres — aerated, tested weekly, and stocked with heritage Indian carp.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:px-8">
        <div>
          <h2 className="text-4xl md:text-5xl">Species available</h2>
          <ul className="mt-8 space-y-4">
            {species.map((s) => (
              <li key={s.name} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
                <div className="flex items-start gap-3">
                  <Fish className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <div>
                    <div className="font-semibold">{s.name}</div>
                    <div className="text-sm text-muted-foreground">{s.note}</div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl">Water management</h2>
          <div className="mt-8 space-y-5">
            {[
              { Icon: Droplets, title: "Rain harvesting", body: "Monsoon runoff fills our ponds; overflow channels feed the paddy fields downstream." },
              { Icon: Waves, title: "Continuous aeration", body: "Paddlewheel aerators run at dawn and dusk to keep oxygen levels stable year-round." },
              { Icon: Leaf, title: "Bio-remediation", body: "Water hyacinth mats and beneficial bacteria keep ammonia low — no chemical treatment." },
            ].map(({ Icon, title, body }) => (
              <div key={title} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="font-semibold">{title}</div>
                  <div className="text-sm text-muted-foreground">{body}</div>
                </div>
              </div>
            ))}
          </div>
          <Link
            to="/contact"
            className="mt-8 inline-flex rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-soft hover:scale-105"
          >
            Enquire about live fish supply
          </Link>
        </div>
      </section>
    </div>
  );
}
import { createFileRoute } from "@tanstack/react-router";
import paddy from "@/assets/paddy.jpg";
import coconut from "@/assets/coconut.jpg";
import areca from "@/assets/areca.jpg";
import mango from "@/assets/mango.jpg";
import jackfruit from "@/assets/jackfruit.jpg";
import semmaram from "@/assets/semmaram.jpg";

export const Route = createFileRoute("/produce")({
  head: () => ({
    meta: [
      { title: "Our Produce — Vaeli Farms" },
      { name: "description", content: "Paddy, coconut, areca nut, mango, jackfruit and teak grown across 120+ acres of the Cauvery delta." },
      { property: "og:title", content: "Our Produce — Vaeli Farms" },
      { property: "og:description", content: "Agriculture, areca, horticulture and forestry from a fourth-generation family estate." },
    ],
  }),
  component: Produce,
});

const sections = [
  {
    id: "agriculture",
    kicker: "Agriculture",
    title: "Paddy & Coconut",
    body: "Our staple crops. Sona Masuri and Ponni paddy varieties are transplanted by hand between June and September. Dwarf orange coconut palms yield tender nuts nearly year-round.",
    items: [
      { image: paddy, name: "Paddy", detail: "Sona Masuri, Ponni & red rice — delta soil, river-fed." },
      { image: coconut, name: "Coconut", detail: "Dwarf orange & tall variety — tender & mature nuts." },
    ],
  },
  {
    id: "areca",
    kicker: "Areca Nut",
    title: "Paakumaram",
    body: "Around 300 mature areca palms, intercropped with pepper vines. Harvested and sun-dried on the estate before wholesale.",
    items: [{ image: areca, name: "Areca Nut", detail: "White & red areca, graded and sun-cured on-site." }],
  },
  {
    id: "horticulture",
    kicker: "Horticulture",
    title: "Mango & Jackfruit",
    body: "Tree-ripened Alphonso, Banganapalli and heirloom Muttom Varikka jackfruit — direct from orchard to buyer in a single day.",
    items: [
      { image: mango, name: "Mango", detail: "Alphonso & Banganapalli — April to June." },
      { image: jackfruit, name: "Jackfruit", detail: "Muttom Varikka — firm flesh, 20–40 kg fruit." },
    ],
  },
  {
    id: "forestry",
    kicker: "Forestry",
    title: "Semmaram",
    body: "An 18-year teak (semmaram) stand managed under a selective, sustainable harvesting cycle with continuous replanting.",
    items: [{ image: semmaram, name: "Teak / Semmaram", detail: "Rotational selective harvest, replanted annually." }],
  },
];

function Produce() {
  return (
    <div>
      <section className="border-b border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</span>
          <h1 className="mt-3 max-w-3xl text-5xl md:text-6xl">Our produce, plot by plot</h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Four families of crops, all cultivated on the same estate: agriculture, areca, horticulture and forestry.
          </p>
        </div>
      </section>

      {sections.map((s, i) => (
        <section key={s.id} id={s.id} className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">{s.kicker}</span>
              <h2 className="mt-2 text-4xl md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-muted-foreground">{s.body}</p>
              <div className="mt-6 text-6xl text-primary/20" style={{ fontFamily: "var(--font-display)" }}>
                0{i + 1}
              </div>
            </div>
            <div className={`grid gap-6 ${s.items.length > 1 ? "sm:grid-cols-2" : ""}`}>
              {s.items.map((it) => (
                <div key={it.name} className="overflow-hidden rounded-3xl bg-card shadow-soft">
                  <img src={it.image} alt={it.name} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl">{it.name}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{it.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
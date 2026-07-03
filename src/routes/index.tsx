import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Leaf, Sprout, Fish, TreePine } from "lucide-react";
import heroPaddy from "@/assets/hero-paddy.jpg";
import paddyVideo from "@/assets/paddy-hero.mp4.asset.json";
import paddy from "@/assets/paddy.jpg";
import coconut from "@/assets/coconut.jpg";
import areca from "@/assets/areca.jpg";
import mango from "@/assets/mango.jpg";
import jackfruit from "@/assets/jackfruit.jpg";
import semmaram from "@/assets/semmaram.jpg";
import fishpond from "@/assets/fishpond.jpg";
import harvest from "@/assets/harvest.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

type Category = "All" | "Agriculture" | "Areca Nut" | "Horticulture" | "Forestry" | "Fisheries";

const projects: { title: string; category: Exclude<Category, "All">; image: string; blurb: string }[] = [
  { title: "Sona Masuri Paddy", category: "Agriculture", image: paddy, blurb: "Delta-grown short grain, hand-transplanted across 48 acres." },
  { title: "Tender Coconut Grove", category: "Agriculture", image: coconut, blurb: "Dwarf orange variety, harvested weekly for wholesale." },
  { title: "Paakumaram Plantation", category: "Areca Nut", image: areca, blurb: "300 mature areca palms with intercropped pepper vines." },
  { title: "Alphonso & Banganapalli", category: "Horticulture", image: mango, blurb: "Two mango cultivars ripened on-tree, delivered same day." },
  { title: "Muttom Varikka Jackfruit", category: "Horticulture", image: jackfruit, blurb: "Heirloom firm-flesh jackfruit trees, 20–40 kg fruit." },
  { title: "Semmaram Teak", category: "Forestry", image: semmaram, blurb: "18-year teak stand under selective, sustainable harvesting." },
  { title: "Freshwater Fish Ponds", category: "Fisheries", image: fishpond, blurb: "Rohu, catla and tilapia in rain-fed aerated ponds." },
  { title: "Seasonal Vegetables", category: "Agriculture", image: harvest, blurb: "Rotational patches feeding the local weekly market." },
];

const categories: Category[] = ["All", "Agriculture", "Areca Nut", "Horticulture", "Forestry", "Fisheries"];

function Index() {
  const [filter, setFilter] = useState<Category>("All");
  const filtered = useMemo(
    () => (filter === "All" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <video
          src={paddyVideo.url}
          poster={heroPaddy}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative mx-auto flex max-w-7xl flex-col justify-end px-5 pb-16 pt-32 text-primary-foreground md:px-8 md:pb-24 md:pt-48">
          <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] backdrop-blur">
            <Sprout className="h-3.5 w-3.5" /> Modern Agriculture Solutions
          </span>
          <h1 className="max-w-4xl text-5xl leading-[0.95] md:text-7xl lg:text-8xl">
            Rooted in soil.<br />
            <span className="italic text-[color:var(--primary-glow)]">Grown for tomorrow.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-primary-foreground/90">
            A fourth-generation family estate cultivating paddy, coconut, areca, orchard fruit, teak and freshwater fisheries across the Cauvery delta.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/produce"
              className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary shadow-elegant transition-transform hover:scale-105"
            >
              Explore our produce <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/10"
            >
              Bulk enquiries
            </Link>
          </div>
        </div>
      </section>

      {/* Quick stats */}
      <section className="border-b border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 py-12 md:grid-cols-4 md:px-8">
          {[
            ["120+", "Acres cultivated"],
            ["4", "Generations of farmers"],
            ["18", "Crop varieties"],
            ["100%", "Rain & river fed"],
          ].map(([n, l]) => (
            <div key={l as string}>
              <div className="text-4xl font-semibold text-primary" style={{ fontFamily: "var(--font-display)" }}>{n}</div>
              <div className="mt-1 text-sm text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Project showcase grid with filter */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:flex-wrap sm:justify-between">
          <div className="min-w-0">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Portfolio</span>
            <h2 className="mt-2 text-4xl md:text-5xl">What we grow</h2>
          </div>
          <p className="max-w-md text-sm text-muted-foreground">
            Every plot is planned around the season, the soil and the water table. Filter by category to see the projects in production.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                filter === c
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => (
            <article
              key={p.title}
              className="group overflow-hidden rounded-3xl bg-card shadow-soft transition-all hover:shadow-elegant"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-primary backdrop-blur">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.blurb}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Quick links */}
      <section className="mx-auto max-w-7xl px-5 pb-24 md:px-8">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            { to: "/produce", label: "Our Produce", desc: "Agriculture, areca, orchards & forestry", Icon: Leaf },
            { to: "/fisheries", label: "Fisheries", desc: "Freshwater ponds & species", Icon: Fish },
            { to: "/gallery", label: "Gallery", desc: "Farm life across the seasons", Icon: Sprout },
            { to: "/about", label: "Our Story", desc: "Four generations on the land", Icon: TreePine },
          ].map(({ to, label, desc, Icon }) => (
            <Link
              key={to}
              to={to}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-secondary"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="mt-4 text-lg">{label}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Visit <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

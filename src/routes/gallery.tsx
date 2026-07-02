import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import paddy from "@/assets/paddy.jpg";
import coconut from "@/assets/coconut.jpg";
import areca from "@/assets/areca.jpg";
import mango from "@/assets/mango.jpg";
import jackfruit from "@/assets/jackfruit.jpg";
import semmaram from "@/assets/semmaram.jpg";
import fishpond from "@/assets/fishpond.jpg";
import harvest from "@/assets/harvest.jpg";
import about from "@/assets/about.jpg";
import hero from "@/assets/hero-paddy.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Vaeli Farms" },
      { name: "description", content: "A visual portfolio of farm life, harvests and growth stages across the estate." },
      { property: "og:title", content: "Gallery — Vaeli Farms" },
      { property: "og:description", content: "Photographs from across the year at Vaeli Farms." },
    ],
  }),
  component: Gallery,
});

type Tag = "All" | "Farm life" | "Harvest" | "Growth stages";
const shots: { src: string; tag: Exclude<Tag, "All">; alt: string; span?: string }[] = [
  { src: hero, tag: "Farm life", alt: "Aerial paddy fields", span: "md:col-span-2 md:row-span-2" },
  { src: paddy, tag: "Growth stages", alt: "Young paddy" },
  { src: coconut, tag: "Growth stages", alt: "Coconut palms" },
  { src: areca, tag: "Growth stages", alt: "Areca plantation" },
  { src: harvest, tag: "Harvest", alt: "Basket of harvest", span: "md:col-span-2" },
  { src: mango, tag: "Harvest", alt: "Ripe mango" },
  { src: jackfruit, tag: "Growth stages", alt: "Jackfruit on the tree" },
  { src: semmaram, tag: "Growth stages", alt: "Teak forest" },
  { src: fishpond, tag: "Farm life", alt: "Fish pond" },
  { src: about, tag: "Farm life", alt: "Farmers walking through fields", span: "md:col-span-2" },
];

const tags: Tag[] = ["All", "Farm life", "Harvest", "Growth stages"];

function Gallery() {
  const [tag, setTag] = useState<Tag>("All");
  const list = useMemo(() => (tag === "All" ? shots : shots.filter((s) => s.tag === tag)), [tag]);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Gallery</span>
      <h1 className="mt-3 text-5xl md:text-6xl">Life on the estate</h1>
      <p className="mt-5 max-w-xl text-lg text-muted-foreground">
        Photographs from the paddy bunds, orchards, ponds and forest edges — captured across the seasons.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {tags.map((t) => (
          <button
            key={t}
            onClick={() => setTag(t)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              tag === t ? "bg-primary text-primary-foreground shadow-soft" : "bg-secondary text-secondary-foreground hover:bg-secondary/70"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="mt-10 grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-4">
        {list.map((s, i) => (
          <figure key={i} className={`group relative overflow-hidden rounded-2xl shadow-soft ${s.span ?? ""}`}>
            <img src={s.src} alt={s.alt} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {s.alt}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
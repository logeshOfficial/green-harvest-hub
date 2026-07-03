import { createFileRoute } from "@tanstack/react-router";
import about from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — RVS Agri" },
      { name: "description", content: "Four generations of farming in the Cauvery delta. Our heritage, mission and relationship with the land." },
      { property: "og:title", content: "About RVS Agri" },
      { property: "og:description", content: "A family estate rooted in Tamil Nadu since 1912." },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "1912", title: "The first plot", body: "Great-grandfather Muthu began with 8 acres of paddy along the river." },
  { year: "1958", title: "The coconut grove", body: "The estate expanded with tall coconut palms and areca inter-cropping." },
  { year: "1994", title: "Orchards", body: "Mango and jackfruit orchards planted — the first harvest three years later." },
  { year: "2011", title: "Freshwater ponds", body: "Six acres converted into interconnected, rain-fed fish ponds." },
  { year: "2023", title: "Tradition methods", body: "Drip irrigation, soil analytics and solar aerators without losing craft." },
];

function About() {
  return (
    <div>
      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:items-center md:px-8">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our story</span>
          <h1 className="mt-3 text-5xl md:text-6xl">Four generations, one river, one land.</h1>
          <p className="mt-6 text-lg text-muted-foreground">
            RVS Agri began in 1912 with a single paddy plot on the banks of the Cauvery. A century later, our children walk the same bunds — now managing 120+ acres of agriculture, horticulture, forestry and fisheries.
          </p>
          <p className="mt-4 text-muted-foreground">
            We believe farming is a long conversation with the soil. We compost what the land gives us, plant what the seasons ask for, and never take more than the water table can replace.
          </p>
        </div>
        <img src={about} alt="Farmers walking through the fields at sunset" width={1280} height={832} loading="lazy" className="rounded-3xl shadow-elegant" />
      </section>

      <section className="border-y border-border/60 bg-secondary/50">
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
          <h2 className="text-4xl md:text-5xl">Mission</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ["Grow honestly", "No shortcuts. Sun-ripened fruit, hand-transplanted rice, water we can measure."],
              ["Care for the land", "Cover cropping, composting and crop rotation to keep the soil alive for the next generation."],
              ["Feed our community", "Direct-to-buyer relationships with wholesalers, wet markets and bulk food processors."],
            ].map(([t, b]) => (
              <div key={t} className="rounded-2xl bg-card p-6 shadow-soft">
                <h3 className="text-xl">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 md:px-8">
        <h2 className="text-4xl md:text-5xl">A short timeline</h2>
        <ol className="mt-10 space-y-6 border-l-2 border-primary/25 pl-8">
          {milestones.map((m) => (
            <li key={m.year} className="relative">
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">•</span>
              <div className="font-semibold text-primary">{m.year}</div>
              <div className="text-xl">{m.title}</div>
              <p className="mt-1 text-muted-foreground">{m.body}</p>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
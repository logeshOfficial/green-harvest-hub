import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RVS Agri" },
      { name: "description", content: "Reach RVS Agri for bulk buyer enquiries, farm visits or wholesale supply. Located in Thanjavur, Tamil Nadu." },
      { property: "og:title", content: "Contact RVS Agri" },
      { property: "og:description", content: "Bulk buyer enquiries, farm location, phone and email." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <div className="mx-auto max-w-7xl px-5 py-20 md:px-8">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Contact</span>
          <h1 className="mt-3 text-5xl md:text-6xl">Let's talk harvest</h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Bulk buyers, food processors, exporters and wholesalers — reach out and we'll send seasonal availability and pricing within one business day.
          </p>

          <div className="mt-10 space-y-4">
            {[
              { Icon: MapPin, label: "Farm location", value: "RVS Agri Estate, Thanjavur District, Tamil Nadu 613 501" },
              { Icon: Phone, label: "Phone", value: "+91 98400 12345" },
              { Icon: Mail, label: "Email", value: "hello@rvsagri.in" },
            ].map(({ Icon, label, value }) => (
              <div key={label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="mt-0.5 font-medium">{value}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-soft">
            <iframe
              title="RVS Agri location"
              src="https://www.openstreetmap.org/export/embed.html?bbox=79.05%2C10.72%2C79.20%2C10.83&layer=mapnik&marker=10.7867%2C79.1378"
              className="h-72 w-full"
              loading="lazy"
            />
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="h-fit rounded-3xl border border-border bg-card p-8 shadow-elegant"
        >
          <h2 className="text-3xl">Bulk enquiry</h2>
          <p className="mt-2 text-sm text-muted-foreground">Tell us what you need. We'll reply with volumes, seasonality and pricing.</p>

          {sent ? (
            <div className="mt-8 flex flex-col items-center rounded-2xl bg-primary/10 p-8 text-center">
              <Check className="h-10 w-10 text-primary" />
              <p className="mt-3 text-lg font-semibold">Enquiry received.</p>
              <p className="mt-1 text-sm text-muted-foreground">We'll be in touch within one business day.</p>
            </div>
          ) : (
            <div className="mt-6 space-y-4">
              <Field label="Full name" name="name" required />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" name="email" type="email" required />
                <Field label="Company" name="company" />
              </div>
              <div>
                <label className="text-sm font-medium">Interested in</label>
                <select className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" defaultValue="">
                  <option value="" disabled>Select produce</option>
                  <option>Paddy / rice</option>
                  <option>Coconut</option>
                  <option>Areca nut</option>
                  <option>Mango</option>
                  <option>Jackfruit</option>
                  <option>Teak / Semmaram</option>
                  <option>Freshwater fish</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Message</label>
                <textarea
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
                  placeholder="Expected volume, delivery frequency, timeline…"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition-transform hover:scale-[1.02]"
              >
                Send enquiry <Send className="h-4 w-4" />
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm font-medium" htmlFor={name}>{label}{required && " *"}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary"
      />
    </div>
  );
}
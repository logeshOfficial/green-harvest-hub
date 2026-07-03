import { Link } from "@tanstack/react-router";
import { Mail, Phone, MapPin } from "lucide-react";
import logoAsset from "@/assets/rvs-agri-logo.png.asset.json";

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-[color:var(--primary-dark)] text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 md:px-8">
        <div>
          <div className="inline-flex items-center rounded-xl bg-primary-foreground px-3 py-2">
            <img src={logoAsset.url} alt="RVS Agri — Growing the Future" className="h-12 w-auto" />
          </div>
          <p className="mt-4 text-sm text-primary-foreground/75">
            Four generations cultivating paddy, coconut, areca, mango, jackfruit, teak and freshwater fish on the banks of the Cauvery delta.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Explore</h4>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["/produce", "Our Produce"],
              ["/fisheries", "Fisheries"],
              ["/gallery", "Gallery"],
              ["/about", "Our Story"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-primary-foreground/85 hover:text-primary-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Visit</h4>
          <p className="mt-4 flex items-start gap-2 text-sm text-primary-foreground/85">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
            RVS Agri Estate, Thanjavur District, Tamil Nadu 613 501
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/70">Reach us</h4>
          <p className="mt-4 flex items-center gap-2 text-sm">
            <Phone className="h-4 w-4" /> +91 98400 12345
          </p>
          <p className="mt-2 flex items-center gap-2 text-sm">
            <Mail className="h-4 w-4" /> hello@rvsagri.in
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-primary-foreground/60 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} RVS Agri. Growing the Future.</p>
          <p>Bulk enquiries welcome year-round.</p>
        </div>
      </div>
    </footer>
  );
}
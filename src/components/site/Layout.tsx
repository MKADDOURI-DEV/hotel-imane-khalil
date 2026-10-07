import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { Menu, X, MessageCircle, Phone, Mail, MapPin, Star } from "lucide-react";
import { NAV, PLACEHOLDER, SITE, telUrl, whatsappUrl } from "@/lib/site-config";

function Brand() {
  return (
    <span className="flex flex-col leading-tight">
      <span className="font-display text-xl font-semibold text-primary">{SITE.name}</span>
      <span className="flex items-center gap-1 text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {SITE.city}
        <span className="ml-1 inline-flex">
          {Array.from({ length: SITE.stars }).map((_, i) => (
            <Star key={i} className="h-3 w-3 fill-accent text-accent" />
          ))}
        </span>
      </span>
    </span>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link to="/" onClick={() => setOpen(false)}>
          <Brand />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 transition-colors hover:text-primary"
              activeProps={{ className: "text-sm font-medium text-primary underline underline-offset-8 decoration-accent" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <button
          className="lg:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-6 py-4 lg:hidden" aria-label="Navigation mobile">
          <ul className="flex flex-col gap-3">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} onClick={() => setOpen(false)} className="block py-1 text-foreground/90">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-olive-deep text-primary-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{SITE.name}</p>
          <p className="mt-1 text-sm opacity-80">
            Hôtel {SITE.stars} étoiles · {SITE.city}, {SITE.country}
          </p>
          <p className="mt-4 text-sm opacity-80">
            Un séjour simple et chaleureux au cœur de la région de Béni Mellal.
          </p>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Navigation</p>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}>
                <Link to={n.to} className="opacity-85 hover:opacity-100">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="mb-3 text-xs uppercase tracking-[0.25em] text-accent">Contact</p>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay ?? `Téléphone : ${PLACEHOLDER}`}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              {SITE.email ?? `E-mail : ${PLACEHOLDER}`}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              {SITE.address ?? `Adresse : ${PLACEHOLDER}`}
            </li>
          </ul>
          <div className="mt-4 flex gap-4 text-sm">
            {SITE.instagram && <a href={SITE.instagram} target="_blank" rel="noreferrer">Instagram</a>}
            {SITE.facebook && <a href={SITE.facebook} target="_blank" rel="noreferrer">Facebook</a>}
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-5 text-xs opacity-75 md:flex-row md:justify-between">
          <span>© {new Date().getFullYear()} {SITE.name}. Tous droits réservés.</span>
          <span className="flex gap-4">
            <Link to="/mentions-legales">Mentions légales</Link>
            <Link to="/confidentialite">Confidentialité</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  const url = whatsappUrl("Bonjour, je souhaite des informations sur l'Hôtel Imane Al Khalil.");
  const cls =
    "fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105";
  if (!url) {
    return (
      <Link to="/contact" aria-label="Nous contacter" className={cls}>
        <MessageCircle className="h-6 w-6" />
      </Link>
    );
  }
  return (
    <a href={url} target="_blank" rel="noreferrer" aria-label="Écrire sur WhatsApp" className={cls}>
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export { telUrl };

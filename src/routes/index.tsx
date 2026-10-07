import { createFileRoute, Link } from "@tanstack/react-router";
import { BedDouble, Coffee, ConciergeBell, MapPin, Star } from "lucide-react";
import { SITE } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { btnOutline, btnPrimary, ContactCta, Notice, PhotoPlaceholder, Section } from "@/components/site/ui";

export const Route = createFileRoute("/")({
  head: () =>
    seo(
      "Hôtel Imane Al Khalil — Hôtel 2 étoiles à Béni Mellal",
      "Séjournez à l'Hôtel Imane Al Khalil, hôtel 2 étoiles à Béni Mellal : chambres confortables, restaurant et café, accueil chaleureux.",
    ),
  component: Index,
});

const highlights = [
  { icon: BedDouble, title: "Chambres", text: "Des chambres simples et confortables pour votre séjour.", to: "/chambres" },
  { icon: Coffee, title: "Restaurant & café", text: "Un espace pour prendre un repas ou un café sur place.", to: "/restaurant" },
  { icon: ConciergeBell, title: "Services", text: "Les services pensés pour faciliter votre séjour.", to: "/services" },
  { icon: MapPin, title: "Béni Mellal", text: "Découvrez la ville et ses environs.", to: "/beni-mellal" },
] as const;

function Index() {
  return (
    <>
      <section className="relative bg-olive-deep text-primary-foreground">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2 md:py-28">
          <div>
            <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-accent">
              <span className="inline-flex">
                {Array.from({ length: SITE.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </span>
              Hôtel · {SITE.city}
            </p>
            <h1 className="text-4xl leading-tight md:text-6xl">{SITE.name}</h1>
            <p className="mt-5 max-w-lg text-lg opacity-90">
              Un accueil simple et chaleureux à Béni Mellal, au pied du Moyen Atlas.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center rounded-md bg-accent px-6 py-3 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90">
                Demander une réservation
              </Link>
              <Link to="/chambres" className="inline-flex items-center rounded-md border border-primary-foreground/60 px-6 py-3 text-sm font-medium transition-colors hover:bg-primary-foreground/10">
                Voir les chambres
              </Link>
            </div>
          </div>
          <PhotoPlaceholder label="Photo de la façade à venir" className="aspect-[4/3] rounded-lg" />
        </div>
      </section>

      <Section title="Bienvenue" intro="L'Hôtel Imane Al Khalil vous accueille à Béni Mellal pour un séjour touristique ou professionnel. Retrouvez ici nos chambres, notre restaurant et café, ainsi que toutes les informations pour nous contacter.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((h) => (
            <Link key={h.to} to={h.to} className="group rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md">
              <h.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 text-xl">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
              <span className="mt-4 inline-block text-sm text-primary group-hover:underline">En savoir plus →</span>
            </Link>
          ))}
        </div>
      </Section>

      <Section tone="beige" title="Réserver votre séjour" intro="Envoyez-nous vos dates et le nombre de personnes : nous vous confirmons la disponibilité et le tarif.">
        <div className="flex flex-wrap gap-3">
          <Link to="/contact" className={btnPrimary}>Faire une demande</Link>
          <Link to="/galerie" className={btnOutline}>Voir la galerie</Link>
        </div>
        <div className="mt-8">
          <Notice>Les avis clients et les tarifs seront ajoutés dès que l'hôtel nous les communiquera.</Notice>
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

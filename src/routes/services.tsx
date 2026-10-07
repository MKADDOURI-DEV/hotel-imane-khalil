import { createFileRoute } from "@tanstack/react-router";
import { Clock, ConciergeBell, Coffee, MapPin } from "lucide-react";
import { seo } from "@/lib/seo";
import { ContactCta, Notice, PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/services")({
  head: () =>
    seo(
      "Services — Hôtel Imane Al Khalil, Béni Mellal",
      "Les services de l'Hôtel Imane Al Khalil à Béni Mellal : accueil, restaurant et café, informations touristiques.",
    ),
  component: Services,
});

const items = [
  { icon: ConciergeBell, title: "Accueil", text: "Une équipe disponible pour vous renseigner à votre arrivée et pendant votre séjour." },
  { icon: Coffee, title: "Restaurant & café", text: "Un espace de restauration sur place." },
  { icon: MapPin, title: "Conseils sur la région", text: "Des informations pour découvrir Béni Mellal et ses environs." },
  { icon: Clock, title: "Horaires d'arrivée et de départ", text: "À renseigner par l'hôtel." },
];

function Services() {
  return (
    <>
      <PageHero title="Nos services" subtitle="Ce que l'hôtel met à votre disposition pendant votre séjour." />
      <Section>
        <Notice>Liste à compléter et à valider par l'hôtel (Wi-Fi, climatisation, parking, etc.) : aucun service n'est annoncé sans confirmation.</Notice>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {items.map((i) => (
            <div key={i.title} className="flex gap-4 rounded-lg border border-border bg-card p-6">
              <i.icon className="h-7 w-7 shrink-0 text-primary" />
              <div>
                <h2 className="text-xl">{i.title}</h2>
                <p className="mt-1 text-sm text-muted-foreground">{i.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

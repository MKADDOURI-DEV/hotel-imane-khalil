import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Notice, PageHero, PhotoPlaceholder, Section } from "@/components/site/ui";

export const Route = createFileRoute("/galerie")({
  head: () =>
    seo(
      "Galerie photos — Hôtel Imane Al Khalil, Béni Mellal",
      "La galerie photos de l'Hôtel Imane Al Khalil à Béni Mellal : chambres, restaurant, façade.",
    ),
  component: Gallery,
});

const slots = ["Façade", "Réception", "Chambre", "Chambre", "Restaurant", "Café", "Salle de bain", "Vue"];

function Gallery() {
  return (
    <>
      <PageHero title="Galerie" subtitle="Un aperçu de l'hôtel en images." />
      <Section>
        <Notice>Les photos réelles de l'hôtel seront ajoutées dès réception. Les emplacements ci-dessous sont réservés.</Notice>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {slots.map((s, i) => (
            <PhotoPlaceholder key={i} label={`${s} — photo à venir`} className="aspect-square rounded-lg" />
          ))}
        </div>
      </Section>
    </>
  );
}

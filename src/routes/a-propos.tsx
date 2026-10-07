import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { ContactCta, Notice, PageHero, PhotoPlaceholder, Section } from "@/components/site/ui";

export const Route = createFileRoute("/a-propos")({
  head: () =>
    seo(
      "À propos — Hôtel Imane Al Khalil, Béni Mellal",
      "Faites connaissance avec l'Hôtel Imane Al Khalil, hôtel 2 étoiles à Béni Mellal.",
    ),
  component: About,
});

function About() {
  return (
    <>
      <PageHero title="À propos" subtitle={`${SITE.name}, hôtel ${SITE.stars} étoiles à ${SITE.city}.`} />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>L'Hôtel Imane Al Khalil est un hôtel 2 étoiles situé à Béni Mellal. Nous accueillons voyageurs, familles et professionnels dans un cadre simple et chaleureux.</p>
            <p>Notre histoire et la présentation de l'équipe seront ajoutées avec les informations fournies par l'hôtel.</p>
            <Notice>Texte de présentation à valider par l'hôtel.</Notice>
          </div>
          <PhotoPlaceholder label="Photo de l'équipe ou de l'hôtel à venir" className="aspect-[4/3] rounded-lg" />
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

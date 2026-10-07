import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Notice, PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/confidentialite")({
  head: () => seo("Politique de confidentialité — Hôtel Imane Al Khalil", "Politique de confidentialité du site de l'Hôtel Imane Al Khalil, Béni Mellal."),
  component: () => (
    <>
      <PageHero title="Politique de confidentialité" />
      <Section>
        <div className="space-y-4 text-muted-foreground">
          <p>Les informations saisies dans le formulaire de réservation sont uniquement utilisées pour répondre à votre demande.</p>
          <Notice>Texte complet à valider par l'hôtel.</Notice>
        </div>
      </Section>
    </>
  ),
});

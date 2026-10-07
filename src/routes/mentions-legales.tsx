import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { Notice, PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/mentions-legales")({
  head: () => seo("Mentions légales — Hôtel Imane Al Khalil", "Mentions légales du site de l'Hôtel Imane Al Khalil, Béni Mellal."),
  component: () => (
    <>
      <PageHero title="Mentions légales" />
      <Section>
        <div className="space-y-4 text-muted-foreground">
          <p>Site édité par {SITE.name}, {SITE.city}, {SITE.country}.</p>
          <Notice>Raison sociale, numéro d'identification, adresse, responsable de publication et hébergeur : à fournir par l'hôtel.</Notice>
        </div>
      </Section>
    </>
  ),
});

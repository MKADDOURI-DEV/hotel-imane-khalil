import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ContactCta, Notice, PageHero, PhotoPlaceholder, Section } from "@/components/site/ui";

export const Route = createFileRoute("/restaurant")({
  head: () =>
    seo(
      "Restaurant & café — Hôtel Imane Al Khalil, Béni Mellal",
      "Restaurant et café de l'Hôtel Imane Al Khalil à Béni Mellal : un espace pour déjeuner, dîner ou prendre un café.",
    ),
  component: Restaurant,
});

function Restaurant() {
  return (
    <>
      <PageHero title="Restaurant & café" subtitle="Un lieu pour prendre un repas ou un café, sur place, pendant votre séjour." />
      <Section>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="space-y-4 text-muted-foreground">
            <p>Le restaurant et le café de l'hôtel accueillent nos clients et les visiteurs de passage à Béni Mellal.</p>
            <p>Le menu, les horaires et les tarifs seront publiés dès que l'hôtel nous les aura transmis.</p>
            <Notice>Horaires : à renseigner · Carte et prix : à renseigner.</Notice>
          </div>
          <PhotoPlaceholder label="Photo du restaurant à venir" className="aspect-[4/3] rounded-lg" />
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ContactCta, Notice, PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/beni-mellal")({
  head: () =>
    seo(
      "Découvrir Béni Mellal — Hôtel Imane Al Khalil",
      "Béni Mellal, au pied du Moyen Atlas : découvrez la ville et ses environs depuis l'Hôtel Imane Al Khalil.",
    ),
  component: City,
});

const sites = [
  { name: "Aïn Asserdoune", text: "Source et parc au cœur de la ville, lieu de promenade apprécié des habitants." },
  { name: "Lac Bin El Ouidane", text: "Grand lac de barrage dans la région, connu pour ses paysages." },
  { name: "Cascades d'Ouzoud", text: "Célèbres chutes d'eau de la province voisine d'Azilal." },
];

function City() {
  return (
    <>
      <PageHero title="Découvrir Béni Mellal" subtitle="Une ville entre montagnes et plaines, au pied du Moyen Atlas." />
      <Section>
        <p className="max-w-3xl text-muted-foreground">
          Béni Mellal est la capitale de la région Béni Mellal-Khénifra. Entourée de montagnes et de terres agricoles, elle est un bon point de départ pour explorer le Moyen Atlas.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {sites.map((s) => (
            <article key={s.name} className="rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl">{s.name}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-8">
          <Notice>Distances et temps de trajet depuis l'hôtel : à renseigner par l'hôtel.</Notice>
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

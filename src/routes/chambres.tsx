import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { btnPrimary, ContactCta, Notice, PageHero, PhotoPlaceholder, Section } from "@/components/site/ui";

export const Route = createFileRoute("/chambres")({
  head: () =>
    seo(
      "Chambres — Hôtel Imane Al Khalil, Béni Mellal",
      "Découvrez les chambres de l'Hôtel Imane Al Khalil à Béni Mellal. Demandez la disponibilité et le tarif pour votre séjour.",
    ),
  component: Rooms,
});

// Catégories indicatives : à confirmer par l'hôtel (types, capacités, équipements, tarifs).
const rooms = [
  { name: "Chambre simple", desc: "Une chambre pratique pour un voyageur seul." },
  { name: "Chambre double", desc: "Une chambre pour deux personnes." },
  { name: "Chambre familiale", desc: "Une chambre adaptée aux familles." },
];

function Rooms() {
  return (
    <>
      <PageHero title="Nos chambres" subtitle="Des chambres confortables pour vous reposer après une journée à Béni Mellal." />
      <Section>
        <Notice>Les types de chambres, équipements et tarifs ci-dessous sont indicatifs et seront confirmés par l'hôtel. Tarifs : sur demande.</Notice>
        <div className="mt-8 grid gap-8 md:grid-cols-3">
          {rooms.map((r) => (
            <article key={r.name} className="overflow-hidden rounded-lg border border-border bg-card">
              <PhotoPlaceholder label="Photo de la chambre à venir" className="aspect-[4/3]" />
              <div className="p-6">
                <h2 className="text-2xl">{r.name}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{r.desc}</p>
                <p className="mt-3 text-sm font-medium text-primary">Tarif sur demande</p>
                <Link to="/contact" className={`${btnPrimary} mt-5 w-full`}>Demander la disponibilité</Link>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <ContactCta />
    </>
  );
}

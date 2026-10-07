import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { PLACEHOLDER, SITE, telUrl, whatsappUrl } from "@/lib/site-config";
import { seo } from "@/lib/seo";
import { btnPrimary, Notice, PageHero, Section } from "@/components/site/ui";

export const Route = createFileRoute("/contact")({
  head: () =>
    seo(
      "Contact et réservation — Hôtel Imane Al Khalil, Béni Mellal",
      "Contactez l'Hôtel Imane Al Khalil à Béni Mellal et envoyez une demande de réservation.",
    ),
  component: Contact,
});

const field =
  "w-full rounded-md border border-input bg-card px-3 py-2 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-ring";

function Contact() {
  const [msg, setMsg] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const text =
      `Demande de réservation — ${SITE.name}\n` +
      `Nom : ${d.get("nom")}\nArrivée : ${d.get("arrivee")}\nDépart : ${d.get("depart")}\n` +
      `Personnes : ${d.get("personnes")}\nMessage : ${d.get("message") || "-"}`;
    const url = whatsappUrl(text);
    if (url) window.open(url, "_blank", "noopener");
    else setMsg(text);
  }

  const tel = telUrl();
  return (
    <>
      <PageHero title="Contact & réservation" subtitle="Envoyez-nous votre demande, nous vous confirmons la disponibilité." />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <form onSubmit={onSubmit} className="space-y-4">
            <h2 className="text-2xl">Demande de réservation</h2>
            <div>
              <label className="mb-1 block text-sm" htmlFor="nom">Nom complet</label>
              <input id="nom" name="nom" required className={field} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-1 block text-sm" htmlFor="arrivee">Arrivée</label>
                <input id="arrivee" name="arrivee" type="date" required className={field} />
              </div>
              <div>
                <label className="mb-1 block text-sm" htmlFor="depart">Départ</label>
                <input id="depart" name="depart" type="date" required className={field} />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm" htmlFor="personnes">Nombre de personnes</label>
              <input id="personnes" name="personnes" type="number" min={1} defaultValue={2} required className={field} />
            </div>
            <div>
              <label className="mb-1 block text-sm" htmlFor="message">Message (facultatif)</label>
              <textarea id="message" name="message" rows={4} className={field} />
            </div>
            <button type="submit" className={btnPrimary}>
              {SITE.phone ? "Envoyer par WhatsApp" : "Préparer ma demande"}
            </button>
            {!SITE.phone && (
              <Notice>Le numéro officiel de l'hôtel n'est pas encore renseigné : la demande est préparée ci-dessous pour être copiée.</Notice>
            )}
            {msg && <pre className="whitespace-pre-wrap rounded-md border border-border bg-secondary p-4 text-sm">{msg}</pre>}
          </form>

          <div className="space-y-6">
            <h2 className="text-2xl">Nous trouver</h2>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary" />
                {tel ? <a href={tel}>{SITE.phoneDisplay}</a> : <span className="text-muted-foreground">Téléphone : {PLACEHOLDER}</span>}
              </li>
              <li className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary" />
                {SITE.email ? <a href={`mailto:${SITE.email}`}>{SITE.email}</a> : <span className="text-muted-foreground">E-mail : {PLACEHOLDER}</span>}
              </li>
              <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary" />
                <span className={SITE.address ? "" : "text-muted-foreground"}>{SITE.address ?? `Adresse : ${PLACEHOLDER}`}</span>
              </li>
            </ul>
            <iframe
              title="Carte Google Maps — Hôtel Imane Al Khalil"
              src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
              className="h-72 w-full rounded-lg border border-border"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <p className="text-xs text-muted-foreground">Position à vérifier avec l'adresse exacte de l'hôtel.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

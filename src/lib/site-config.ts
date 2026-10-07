// Configuration centrale du site. Modifier ICI uniquement : tout le site s'adapte.
// Les valeurs à `null` sont des informations non fournies : rien n'est inventé.
export const SITE = {
  name: "Hôtel Imane Al Khalil",
  stars: 2,
  city: "Béni Mellal",
  country: "Maroc",
  // Numéro officiel unique, au format international sans "+" ni espaces (ex. "212600000000").
  phone: null as string | null,
  // Version lisible (ex. "+212 6 00 00 00 00").
  phoneDisplay: null as string | null,
  email: null as string | null,
  address: null as string | null,
  mapsQuery: "Hôtel Imane Al Khalil Béni Mellal",
  instagram: null as string | null,
  facebook: null as string | null,
  googleReviewsUrl: null as string | null,
  bookingUrl: null as string | null,
};

export const PLACEHOLDER = "À renseigner";

export const whatsappUrl = (text?: string) =>
  SITE.phone
    ? `https://wa.me/${SITE.phone}${text ? `?text=${encodeURIComponent(text)}` : ""}`
    : null;

export const telUrl = () => (SITE.phone ? `tel:+${SITE.phone}` : null);

export const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/chambres", label: "Chambres" },
  { to: "/restaurant", label: "Restaurant & café" },
  { to: "/services", label: "Services" },
  { to: "/galerie", label: "Galerie" },
  { to: "/beni-mellal", label: "Béni Mellal" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
] as const;

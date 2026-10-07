import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { ImageIcon } from "lucide-react";

export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium tracking-wide text-primary-foreground transition-colors hover:bg-olive-deep";
export const btnOutline =
  "inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 text-sm font-medium tracking-wide text-primary transition-colors hover:bg-primary hover:text-primary-foreground";

export function PhotoPlaceholder({
  label = "Photo de l'hôtel à venir",
  className = "",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-muted via-secondary to-muted p-4 text-center text-muted-foreground ${className}`}
    >
      <ImageIcon className="h-7 w-7 opacity-60" />
      <span className="text-xs uppercase tracking-widest">{label}</span>
    </div>
  );
}

export function PageHero({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <section className="bg-olive-deep text-primary-foreground">
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <p className="mb-3 text-xs uppercase tracking-[0.3em] text-accent">Hôtel Imane Al Khalil</p>
        <h1 className="text-4xl md:text-5xl">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl text-lg opacity-85">{subtitle}</p>}
      </div>
    </section>
  );
}

export function Section({
  title,
  intro,
  children,
  tone = "light",
}: {
  title?: string;
  intro?: string;
  children: ReactNode;
  tone?: "light" | "beige";
}) {
  return (
    <section className={tone === "beige" ? "bg-secondary" : ""}>
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        {title && <h2 className="text-3xl md:text-4xl">{title}</h2>}
        {intro && <p className="mt-4 max-w-2xl text-muted-foreground">{intro}</p>}
        <div className={title ? "mt-10" : ""}>{children}</div>
      </div>
    </section>
  );
}

export function Notice({ children }: { children: ReactNode }) {
  return (
    <p className="rounded-md border border-dashed border-accent bg-card px-4 py-3 text-sm text-muted-foreground">
      {children}
    </p>
  );
}

export function ContactCta() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl md:text-3xl">Une question, un séjour à préparer ?</h2>
          <p className="mt-2 opacity-85">Envoyez-nous votre demande, nous vous répondons rapidement.</p>
        </div>
        <Link
          to="/contact"
          className="rounded-md bg-background px-6 py-3 text-sm font-medium text-primary transition-opacity hover:opacity-90"
        >
          Demander une réservation
        </Link>
      </div>
    </section>
  );
}

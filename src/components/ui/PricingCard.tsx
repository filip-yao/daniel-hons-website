import { ButtonLink } from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
  badge?: string;
}

export function PricingCard({
  title,
  price,
  description,
  features,
  featured,
  badge,
}: PricingCardProps) {
  return (
    <article
      className={`card-shell sharp-card flex h-full flex-col p-6 transition-transform duration-300 ${
        featured ? "border-primary bg-primary/5 shadow-glow" : ""
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <h3 className="font-inter text-lg font-semibold uppercase tracking-wider text-text">
          {title}
        </h3>
        {badge ? (
          <span className="border border-primary/60 bg-primary/10 px-3 py-1 text-[0.7rem] font-mono uppercase tracking-[0.2em] text-primary">
            {badge}
          </span>
        ) : null}
      </div>

      <div className="mt-6 font-mono text-4xl text-text">{price}</div>
      <p className="mt-3 max-w-sm text-sm leading-7 text-text-muted">{description}</p>

      <ul className="mt-6 space-y-3 text-sm leading-7 text-text-muted">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <ButtonLink
          href="#kontakt"
          variant={featured ? "primary" : "secondary"}
          className="w-full"
        >
          Nezávazně poptat
        </ButtonLink>
      </div>
    </article>
  );
}

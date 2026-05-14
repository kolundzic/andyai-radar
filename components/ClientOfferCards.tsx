import Link from "next/link";
import { clientOffers } from "@/lib/clientOffer";

export function ClientOfferCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {clientOffers.map((offer) => (
        <Link
          key={offer.slug}
          href={`/services/${offer.slug}`}
          className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-radar-blue/50 hover:bg-radar-blue/10"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">
            {offer.shortTitle}
          </p>
          <h3 className="mt-3 text-xl font-semibold text-white group-hover:text-radar-blue">
            {offer.title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{offer.subtitle}</p>
          <p className="mt-5 text-sm font-semibold text-radar-blue">Saznaj više →</p>
        </Link>
      ))}
    </div>
  );
}

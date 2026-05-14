import Link from "next/link";

export function ClientHero() {
  return (
    <section className="radar-grid px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-radar-blue">
          AI bez magle
        </p>
        <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
          Pametno uvedite AI u svoj posao.
        </h1>
        <p className="mt-6 max-w-4xl text-xl leading-9 text-slate-300 md:text-2xl">
          AndyAI Radar pomaže firmama da izaberu prave AI alate,
          izbegnu skupe greške i naprave prvi siguran AI sistem za rad.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/ai-pregled" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">
            Zatražite AI pregled
          </Link>
          <Link href="/services" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
            Pogledajte usluge
          </Link>
        </div>
      </div>
    </section>
  );
}

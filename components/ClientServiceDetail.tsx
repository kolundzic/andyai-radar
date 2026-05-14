import { ClientOffer } from "@/lib/clientOffer";
import Link from "next/link";

function ListBox({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-radar-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ClientServiceDetail({ offer }: { offer: ClientOffer }) {
  return (
    <>
      <section className="radar-grid px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">
            AndyAI Radar usluga
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {offer.title}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold text-slate-200">
            {offer.subtitle}
          </p>
          <div className="mt-8 rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">
              Pitanje klijenta
            </p>
            <p className="mt-3 text-xl font-semibold text-white">“{offer.clientQuestion}”</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">Problem</p>
          <p className="mt-3 max-w-4xl text-lg leading-8 text-slate-300">{offer.plainProblem}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-2">
        <ListBox title="Šta dobijate" items={offer.whatYouGet} />
        <ListBox title="Prvi korak" items={offer.firstStep} />
        <ListBox title="Dobro je za" items={offer.goodFor} />
        <ListBox title="Nije za" items={offer.notFor} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <div className="rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-8">
          <h3 className="text-2xl font-semibold text-white">AI bez magle. Krenite od jednog sigurnog koraka.</h3>
          <p className="mt-3 max-w-3xl text-slate-300">
            Cilj nije da odmah uvedete deset AI alata, nego da izaberete prvi pametan potez
            koji ima smisla za vaš posao.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/kontakt" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">
              Zatražite razgovor
            </Link>
            <Link href="/services" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Nazad na usluge
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

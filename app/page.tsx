import Link from "next/link";
import { ClientHero } from "@/components/ClientHero";
import { Section } from "@/components/Section";
import { ClientOfferCards } from "@/components/ClientOfferCards";
import { ClientSteps } from "@/components/ClientSteps";

export default function HomePage() {
  return (
    <>
      <ClientHero />

      <Section eyebrow="Problem" title="AI nije samo ChatGPT.">
        <p className="max-w-4xl text-lg leading-8">
          Danas postoji mnogo AI alata: za dokumente, automatizaciju, prodaju,
          podršku, programiranje, istraživanje i upravljanje poslom.
          Problem je što nije svaki alat dobar za svaku firmu.
        </p>
      </Section>

      <Section eyebrow="Šta radimo" title="Mi prevodimo AI galamu u poslovnu odluku.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Šta vam treba", "Razumemo posao pre izbora alata."],
            ["Šta je korisno", "Biramo alate koji imaju praktičan rezultat."],
            ["Šta je rizično", "Označavamo gde treba ljudska kontrola."],
            ["Šta može odmah", "Predlažemo mali, siguran prvi korak."],
            ["Šta treba testirati", "Ne guramo neproverene alate u posao."],
            ["Šta ne dirati", "Opasne automatizacije idu u bezbednosnu proveru."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Tri najčešća početka" title="Počnite jednostavno.">
        <ClientOfferCards />
      </Section>

      <Section eyebrow="Kako izgleda saradnja" title="Jedan pametan korak pre velikog ulaganja.">
        <ClientSteps />
      </Section>

      <Section eyebrow="Sledeći korak" title="AI bez magle. Jasan pregled. Pametan izbor. Siguran prvi korak.">
        <div className="rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-200">
            Ako ne znate odakle da krenete, počnite od AI pregleda.
            Ne biramo alat zato što je popularan, nego zato što ima smisla za vaš posao.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/ai-pregled" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">
              Zatražite AI pregled
            </Link>
            <Link href="/kontakt" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Kontakt
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

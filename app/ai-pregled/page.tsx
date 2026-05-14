import { Section } from "@/components/Section";
import { ClientOfferCards } from "@/components/ClientOfferCards";
import { ClientSteps } from "@/components/ClientSteps";

export default function AIPregledPage() {
  return (
    <>
      <section className="radar-grid px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">
            AI Pregled
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Prvo razumemo posao, pa tek onda biramo AI alat.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            AI pregled je početna tačka za firme koje žele da uvedu AI,
            ali ne žele da bacaju vreme i novac na pogrešne alate.
          </p>
        </div>
      </section>

      <Section eyebrow="Ulazi" title="Tri najčešća početka.">
        <ClientOfferCards />
      </Section>

      <Section eyebrow="Proces" title="Kako od razgovora dolazimo do prvog sigurnog AI koraka.">
        <ClientSteps />
      </Section>
    </>
  );
}

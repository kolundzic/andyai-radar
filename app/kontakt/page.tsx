import { Section } from "@/components/Section";

export default function KontaktPage() {
  return (
    <>
      <Section eyebrow="Kontakt" title="Zatražite AI pregled.">
        <div className="rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-8">
          <p className="max-w-3xl text-lg leading-8 text-slate-200">
            Pošaljite kratak opis posla, glavne probleme i šta biste želeli da AI pojednostavi.
            Prvi cilj nije veliki sistem — prvi cilj je jasan i siguran sledeći korak.
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-300">
            <p><strong className="text-white">Founder:</strong> Andrija Kolundzic (Andy)</p>
            <p><strong className="text-white">Company:</strong> Japan IT Business</p>
            <p><strong className="text-white">AI partner:</strong> AndyAI.ai</p>
            <p><strong className="text-white">Email:</strong> kolundzic@gmail.com</p>
          </div>
        </div>
      </Section>
    </>
  );
}

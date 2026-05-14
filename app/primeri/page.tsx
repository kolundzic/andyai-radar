import { Section } from "@/components/Section";

export default function PrimeriPage() {
  return (
    <>
      <Section eyebrow="Primeri" title="Primeri gde AI može da pomogne bez velike komplikacije.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Dokumenti", "AI pomaže da brzo nađete informacije u pravilnicima, ugovorima i PDF-ovima."],
            ["Email i upiti", "AI priprema nacrte odgovora, sa ljudskim odobrenjem pre slanja."],
            ["Interna baza znanja", "Zaposleni pitaju asistenta umesto da traže po folderima."],
            ["Prodaja", "AI pomaže da se upiti klasifikuju i pripreme prvi odgovori."],
            ["Podrška", "AI predlaže odgovor na osnovu uputstava i prethodnih slučajeva."],
            ["Administracija", "AI smanjuje ručno prepisivanje i ponavljanje istih koraka."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

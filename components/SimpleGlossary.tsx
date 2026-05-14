import { simpleTerms } from "@/lib/clientOffer";

export function SimpleGlossary() {
  return (
    <div className="grid gap-3">
      {simpleTerms.map(([technical, simple, explanation]) => (
        <article key={technical} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">{technical}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{simple}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{explanation}</p>
        </article>
      ))}
    </div>
  );
}

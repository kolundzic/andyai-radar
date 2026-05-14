import { radarRecordFields } from "@/lib/registry";

export function RadarRecordTemplate() {
  return (
    <div className="grid gap-3">
      {radarRecordFields.map(([field, meaning]) => (
        <article key={field} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-lg font-semibold text-white">{field}</h3>
          <p className="mt-2 text-sm leading-6 text-slate-300">{meaning}</p>
        </article>
      ))}
    </div>
  );
}

import { decisionCategories } from "@/lib/registry";

export function DecisionCategories() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {decisionCategories.map(([title, description]) => (
        <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{description}</p>
        </article>
      ))}
    </div>
  );
}

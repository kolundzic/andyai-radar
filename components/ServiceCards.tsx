import { services } from "@/lib/data";
export function ServiceCards() {
  return <div className="grid gap-4 md:grid-cols-3">{services.map(([title,target,output])=><article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm text-slate-300">{target}</p><p className="mt-3 text-sm text-radar-blue">{output}</p></article>)}</div>;
}

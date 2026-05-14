import { stackLayers } from "@/lib/data";
export function StackLadder() {
  return <div className="grid gap-3">{stackLayers.map(([number,layer,example,meaning])=><div key={number} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">{number}</p><h3 className="mt-2 text-xl font-semibold text-white">{layer}</h3><p className="mt-2 text-sm text-slate-400">{example}</p></div><p className="max-w-lg text-sm leading-6 text-slate-300">{meaning}</p></div></div>)}</div>;
}

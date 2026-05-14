import { riskRows } from "@/lib/data";
export function RiskRegisterTable() {
  return <div className="grid gap-3">{riskRows.map(([tool,risk,mainRisk,control,status])=><article key={tool} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><div className="flex flex-wrap justify-between gap-3"><h3 className="text-lg font-semibold text-white">{tool}</h3><span className="rounded-full border border-white/10 px-3 py-1 text-xs text-radar-blue">{status}</span></div><p className="mt-3 text-sm text-slate-300"><strong>Risk:</strong> {risk} — {mainRisk}</p><p className="mt-2 text-sm text-slate-300"><strong>Control:</strong> {control}</p></article>)}</div>;
}

const steps = ["Can it control files, shell, browser, apps or accounts?","Is sandboxing available?","Are permission limits clear?","Are audit logs available?","Is human approval required before action?","Is rollback or kill switch defined?"];
export function RedZoneDecisionTree() {
  return <div className="space-y-3">{steps.map((step,index)=><div key={step} className="rounded-2xl border border-radar-red/30 bg-radar-red/10 p-5"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-red">Gate {index + 1}</p><h3 className="mt-2 text-lg font-semibold text-white">{step}</h3></div>)}</div>;
}

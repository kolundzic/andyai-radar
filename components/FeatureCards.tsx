const features = [["Signal Tracking","Monitor AI repos, models, workflows, frameworks and market signals."],["Stack Mapping","Classify every signal by its role in the modern AI stack."],["Risk Review","Evaluate permission, data, automation and action-agent risk."],["Business Roadmap","Turn signals into demos, packages and governed production decisions."]];
export function FeatureCards() {
  return <div className="grid gap-4 md:grid-cols-4">{features.map(([title,text])=><article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"><h3 className="text-lg font-semibold text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-300">{text}</p></article>)}</div>;
}

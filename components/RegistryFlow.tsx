import { registryFlow } from "@/lib/registry";

export function RegistryFlow() {
  return (
    <div className="grid gap-4">
      {registryFlow.map((item) => (
        <article key={item.step} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <div className="flex flex-wrap items-start gap-5">
            <div className="rounded-2xl border border-radar-blue/30 bg-radar-blue/10 px-4 py-3 text-sm font-semibold text-radar-blue">
              {item.step}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">{item.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

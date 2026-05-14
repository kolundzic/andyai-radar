import { ServicePackage } from "@/lib/services";
import { CTA } from "@/components/CTA";

function ListBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-1.5 w-1.5 flex-none rounded-full bg-radar-blue" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceDetail({ service }: { service: ServicePackage }) {
  return (
    <>
      <section className="radar-grid px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">
            AndyAI Radar Service
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-3xl text-2xl font-semibold text-slate-200">
            {service.subtitle}
          </p>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            {service.outcome}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">Audience</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{service.audience}</p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">Problem</p>
          <p className="mt-3 text-sm leading-6 text-slate-300">{service.problem}</p>
        </div>
        <div className="rounded-3xl border border-radar-blue/30 bg-radar-blue/10 p-6">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-radar-blue">CTA</p>
          <p className="mt-3 text-sm font-semibold leading-6 text-white">{service.cta}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-6 px-5 py-14 md:grid-cols-3">
        <ListBlock title="Deliverables" items={service.deliverables} />
        <ListBlock title="Process" items={service.process} />
        <ListBlock title="Proof" items={service.proof} />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-14">
        <CTA />
      </section>
    </>
  );
}

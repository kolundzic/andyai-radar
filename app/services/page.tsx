import { Section } from "@/components/Section";
import { ServicePackageGrid } from "@/components/ServicePackageGrid";
import { CTA } from "@/components/CTA";

export default function ServicesPage() {
  return (
    <>
      <section className="radar-grid px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">
            Services
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Turn AI noise into governed business decisions.
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            AndyAI Radar helps teams decide what AI tools to watch, test, integrate,
            govern or reject — and converts those decisions into practical client-ready packages.
          </p>
        </div>
      </section>

      <Section eyebrow="Service Packages" title="Choose the right entry point.">
        <ServicePackageGrid />
      </Section>

      <Section eyebrow="Commercial Logic" title="From signal intelligence to client value.">
        <div className="grid gap-4 md:grid-cols-4">
          {[
            ["Signal", "Capture tools, repos, models and workflow trends."],
            ["Evaluation", "Classify by stack layer, business value and risk."],
            ["Governance", "Add approval, evidence, permissions and rollback."],
            ["Offer", "Package the result into a clear client outcome."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section eyebrow="Next Step" title="Start with a Radar review, not a random tool choice.">
        <CTA />
      </Section>
    </>
  );
}

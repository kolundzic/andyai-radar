import Link from "next/link";
import { Section } from "@/components/Section";
import { RegistryFlow } from "@/components/RegistryFlow";
import { DecisionCategories } from "@/components/DecisionCategories";

export default function RegistryPage() {
  return (
    <>
      <section className="radar-grid px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-radar-blue">
            Registry
          </p>
          <h1 className="max-w-5xl text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Radar Registry
          </h1>
          <p className="mt-6 max-w-4xl text-lg leading-8 text-slate-300">
            The Radar Registry turns raw AI signals into structured records:
            source, stack layer, risk, permission surface, business value,
            governance decision and next action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/registry/signal-intake" className="rounded-full bg-radar-blue px-5 py-3 text-sm font-semibold text-radar-navy">
              Signal Intake
            </Link>
            <Link href="/registry/evaluation-flow" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Evaluation Flow
            </Link>
            <Link href="/registry/radar-record-template" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white">
              Record Template
            </Link>
          </div>
        </div>
      </section>

      <Section eyebrow="Flow" title="From signal to governed decision.">
        <RegistryFlow />
      </Section>

      <Section eyebrow="Decision Categories" title="Every signal needs a destination.">
        <DecisionCategories />
      </Section>
    </>
  );
}

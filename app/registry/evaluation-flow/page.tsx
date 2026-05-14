import { Section } from "@/components/Section";
import { RegistryFlow } from "@/components/RegistryFlow";

export default function EvaluationFlowPage() {
  return (
    <>
      <Section eyebrow="Registry" title="Evaluation Flow">
        <p className="max-w-4xl leading-8">
          AndyAI Radar evaluates signals through stack role, business value, risk surface,
          permission model, governance requirement and concrete next action.
        </p>
      </Section>
      <Section eyebrow="Process" title="A signal becomes useful only after evaluation.">
        <RegistryFlow />
      </Section>
    </>
  );
}

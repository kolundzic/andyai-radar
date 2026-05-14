import { Section } from "@/components/Section";
import { RadarRecordTemplate } from "@/components/RadarRecordTemplate";

export default function RadarRecordTemplatePage() {
  return (
    <>
      <Section eyebrow="Registry" title="Radar Record Template">
        <p className="max-w-4xl leading-8">
          A Radar Record is the structured memory unit of AndyAI Radar.
          It keeps signal, evidence, classification, risk and next action together.
        </p>
      </Section>
      <Section eyebrow="Fields" title="The minimum structure for a useful AI signal record.">
        <RadarRecordTemplate />
      </Section>
    </>
  );
}

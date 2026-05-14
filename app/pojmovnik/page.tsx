import { Section } from "@/components/Section";
import { SimpleGlossary } from "@/components/SimpleGlossary";

export default function PojmovnikPage() {
  return (
    <>
      <Section eyebrow="Pojmovnik" title="AI pojmovi prevedeni na običan jezik.">
        <p className="mb-8 max-w-4xl leading-8">
          Ovaj pojmovnik postoji da klijent ne mora da zna tehničke izraze da bi doneo pametnu odluku.
        </p>
        <SimpleGlossary />
      </Section>
    </>
  );
}

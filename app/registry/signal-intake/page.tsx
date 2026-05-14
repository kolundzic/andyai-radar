import { Section } from "@/components/Section";

export default function SignalIntakePage() {
  return (
    <>
      <Section eyebrow="Registry" title="Signal Intake">
        <p className="max-w-4xl leading-8">
          Signal Intake is the first controlled entry point for AI tools, GitHub repos,
          model announcements, workflow ideas, articles, videos, client requests and market signals.
        </p>
      </Section>

      <Section eyebrow="Required Intake Fields" title="A signal without source and context is not intelligence.">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            ["Source", "URL, document, repo, article, video or client input."],
            ["Date", "When the signal was captured."],
            ["Reason", "Why it matters to AndyAI Radar."],
            ["Initial Stack Layer", "Where it likely belongs in the AI stack."],
            ["Potential Use Case", "What business or technical value it may create."],
            ["Risk Hint", "Early warning about data, permission or action risk."]
          ].map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
}

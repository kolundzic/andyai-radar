import { Section } from "@/components/Section";
import { StackLadder } from "@/components/StackLadder";
const canon = ["Model gives intelligence.","Runtime gives execution.","UI gives access.","RAG gives context.","Agent logic gives process.","Workflow gives business motion.","Action agents give power.","Governance gives safety.","Human authority gives legitimacy."];
export default function StackMapPage() {
  return <><Section eyebrow="Stack Map" title="AI Stack Signal Map"><p className="mb-8 max-w-3xl leading-8">The AI stack is no longer one model. It is a layered system of runtime, context, agents, workflows, governance and human authority.</p><StackLadder /></Section><Section eyebrow="Canon" title="How AndyAI Radar reads the stack."><div className="grid gap-3 md:grid-cols-3">{canon.map((line)=><div key={line} className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-slate-200">{line}</div>)}</div></Section></>;
}

import { Section } from "@/components/Section";
import { GovernanceLens } from "@/components/GovernanceLens";
export default function GovernancePage() {
  return <><Section eyebrow="Governance Lens" title="AI tools are evaluated by access, action, failure mode, evidence and human control."><p className="mb-8 max-w-4xl leading-8">Some tools only read public information. Some process private documents. Some call APIs. Some automate business workflows. Some can control files, browsers, shells, apps or accounts. AndyAI Radar evaluates each tool by what it can access, what it can change, what can go wrong, who approves it and how the outcome is proven.</p><GovernanceLens /></Section><Section eyebrow="Core Rule" title="No AI tool becomes part of the AndyAI stack because it is popular."><p className="max-w-4xl leading-8">It enters the roadmap only after signal review, stack classification, business value test, risk and permission review, evidence check and human approval.</p></Section></>;
}

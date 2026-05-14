import { Section } from "@/components/Section";
import { RedZoneDecisionTree } from "@/components/RedZoneDecisionTree";
export default function RedZonePage() { return <Section eyebrow="Red Zone" title="Action-Agent Safety"><p className="mb-8 max-w-3xl leading-8">If an AI agent can control shell, browser, apps, credentials, files or accounts, it is automatically Red Zone until sandboxed, audited, approved and reversible.</p><RedZoneDecisionTree /></Section>; }

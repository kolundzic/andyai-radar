export type ServicePackage = {
  slug: string;
  title: string;
  subtitle: string;
  audience: string;
  problem: string;
  outcome: string;
  deliverables: string[];
  process: string[];
  proof: string[];
  cta: string;
};

export const servicePackages: ServicePackage[] = [
  {
    slug: "ai-stack-radar-report",
    title: "AI Stack Radar Report",
    subtitle: "For teams that need to know what AI tools are worth testing first.",
    audience: "Founders, managers, IT teams and agencies facing AI tool overload.",
    problem:
      "AI tools move too fast. Tool lists are noisy, hype-driven and rarely connected to real business risk or integration logic.",
    outcome:
      "A clear AI stack map, evaluation matrix, risk view and practical implementation priority list.",
    deliverables: [
      "AI tool/repo evaluation matrix",
      "Stack-layer classification",
      "Risk and permission overview",
      "Integration priority roadmap",
      "Executive summary for decision makers"
    ],
    process: [
      "Collect signals and candidate tools",
      "Classify by AI stack layer",
      "Score business value and operational risk",
      "Map integration priority",
      "Deliver client-ready report"
    ],
    proof: [
      "Every tool receives a stack role",
      "Every recommendation includes a risk note",
      "Every next step is tied to business value"
    ],
    cta: "Request an AI Stack Radar Report"
  },
  {
    slug: "private-knowledge-assistant",
    title: "Private Knowledge Assistant Starter",
    subtitle: "For organizations that need controlled AI over internal documents.",
    audience: "Document-heavy businesses, consultants, education teams and internal knowledge groups.",
    problem:
      "Teams have PDFs, manuals, policies and notes, but no safe way to query them with citations and governance.",
    outcome:
      "A private knowledge assistant blueprint with source policy, citation logic and governance controls.",
    deliverables: [
      "Private knowledge assistant architecture",
      "RAG/context strategy",
      "Citation and source policy",
      "Document intake model",
      "Governance and approval notes"
    ],
    process: [
      "Identify knowledge sources",
      "Define source trust levels",
      "Design retrieval/citation flow",
      "Map user roles and access boundaries",
      "Prepare implementation roadmap"
    ],
    proof: [
      "Sources are separated by trust level",
      "Answers require evidence/citation logic",
      "Private data boundaries are explicit"
    ],
    cta: "Plan a Private Knowledge Assistant"
  },
  {
    slug: "ai-workflow-automation",
    title: "AI Workflow Automation Starter",
    subtitle: "For teams that want AI to move real work without losing control.",
    audience: "Small businesses, agencies, operations teams and founders.",
    problem:
      "Manual workflows across email, forms, spreadsheets and CRM tools waste time, but blind automation creates risk.",
    outcome:
      "A governed automation blueprint with approval gates, evidence trail and retry/rollback logic.",
    deliverables: [
      "Workflow map",
      "Automation candidate list",
      "Approval gate design",
      "Evidence log model",
      "MVP automation roadmap"
    ],
    process: [
      "Map the current workflow",
      "Identify safe automation points",
      "Add human approval where risk rises",
      "Define event/evidence logging",
      "Prepare pilot workflow"
    ],
    proof: [
      "No risky action without approval",
      "Every automation step has evidence",
      "Rollback/retry logic is defined"
    ],
    cta: "Design an AI Workflow Automation Pilot"
  },
  {
    slug: "local-private-ai-lab",
    title: "Local Private AI Lab Setup",
    subtitle: "For privacy-conscious teams that want local AI experimentation.",
    audience: "Technical founders, researchers, educators and privacy-sensitive teams.",
    problem:
      "Cloud AI is powerful, but some experiments require local models, private testing and clear boundaries.",
    outcome:
      "A local AI lab plan using local runtime, private UI and governed evaluation practice.",
    deliverables: [
      "Local AI lab architecture",
      "Model/runtime selection notes",
      "Private UI recommendation",
      "Usage and data boundary policy",
      "Testing checklist"
    ],
    process: [
      "Assess hardware and privacy requirements",
      "Choose local runtime direction",
      "Define private UI/workflow",
      "Create model evaluation checklist",
      "Document operational limits"
    ],
    proof: [
      "Local/private boundary is clear",
      "Model quality is evaluated before use",
      "Sensitive data policy is documented"
    ],
    cta: "Plan a Local Private AI Lab"
  },
  {
    slug: "governed-agent-prototype",
    title: "Governed Agent Prototype",
    subtitle: "For advanced teams exploring agents that can take multi-step action.",
    audience: "AI builders, product teams and engineering groups.",
    problem:
      "Agent demos look impressive, but real agents need tool boundaries, approval gates, memory rules and audit trails.",
    outcome:
      "A governed agent prototype blueprint with safe tool use, logs and human authority.",
    deliverables: [
      "Agent mission envelope",
      "Tool permission map",
      "Human approval design",
      "Evidence/audit trail model",
      "Prototype roadmap"
    ],
    process: [
      "Define agent goal and boundaries",
      "Map tools and permissions",
      "Add approval gates",
      "Design evidence and audit trail",
      "Prepare controlled prototype"
    ],
    proof: [
      "Every tool has a permission class",
      "Human authority is explicit",
      "Agent output is auditable"
    ],
    cta: "Prototype a Governed Agent"
  },
  {
    slug: "action-agent-safety-review",
    title: "Action-Agent Safety Review",
    subtitle: "For tools that can control browser, shell, apps, accounts or files.",
    audience: "Teams testing autonomous agents or computer-use systems.",
    problem:
      "Action agents can be useful, but they can also damage files, leak credentials or take irreversible actions.",
    outcome:
      "A Red Zone safety review with sandbox rules, permission gates and kill-switch requirements.",
    deliverables: [
      "Action-agent risk review",
      "Permission matrix",
      "Sandbox requirements",
      "Approval and escalation rules",
      "Rollback/kill-switch checklist"
    ],
    process: [
      "Identify action surfaces",
      "Classify permissions",
      "Map failure modes",
      "Define sandbox and approval controls",
      "Produce safety recommendation"
    ],
    proof: [
      "Critical actions are identified",
      "Required controls are documented",
      "No production action without governance"
    ],
    cta: "Request an Action-Agent Safety Review"
  }
];

export function getServicePackage(slug: string) {
  return servicePackages.find((item) => item.slug === slug);
}

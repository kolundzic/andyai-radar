export const site = {
  name: "AndyAI Radar",
  tagline: "Track the AI stack. Filter the hype. Build with governance.",
  description:
    "AndyAI Radar tracks AI tools, GitHub repositories, models, workflows and market signals, then converts them into stack maps, risk analysis, integration priorities, business opportunities and governed production decisions.",
  author: "Andrija Kolundzic (Andy)",
  company: "Japan IT Business",
  partner: "AndyAI.ai",
  domain: "radar.andyai.ai",
  mainDomain: "andyai.ai",
  github: "github.com/kolundzic/andyai-radar"
};

export const repoMatrix = [
  { name: "RAGFlow", layer: "RAG / Context / Evidence", value: "Source-grounded document Q&A", risk: "3/5", decision: "TEST FIRST" },
  { name: "LangGraph / LangChain", layer: "Agent Logic / Orchestration", value: "Controlled multi-step agent workflows", risk: "4/5", decision: "TEST FIRST" },
  { name: "n8n", layer: "Workflow Automation", value: "Business process automation + AI steps", risk: "3/5", decision: "INTEGRATE CANDIDATE" },
  { name: "Ollama", layer: "Local Runtime", value: "Run models locally/private testing", risk: "2/5", decision: "INTEGRATE" },
  { name: "Open WebUI", layer: "Self-hosted AI Interface", value: "ChatGPT-like private/local UI", risk: "3/5", decision: "INTEGRATE" },
  { name: "Dify", layer: "AI App Platform", value: "Fast AI app/RAG/workflow prototypes", risk: "3/5", decision: "TEST" },
  { name: "Gemini CLI", layer: "Developer Cockpit", value: "AI inside terminal workflows", risk: "3/5", decision: "WATCH" },
  { name: "OpenClaw-style agents", layer: "Action Agent", value: "Browser/shell/app potential", risk: "5/5", decision: "GOVERNED ONLY" }
];

export const stackLayers = [
  ["10", "Human Authority", "Andy / operator / client approval", "Final legitimacy and approval."],
  ["09", "Governance + Evidence", "AndyAI Director / Canonizer", "Where action becomes accountable."],
  ["08", "Action Agents", "OpenClaw-style systems", "Where power becomes risky."],
  ["07", "Developer Cockpit", "Gemini CLI", "Where developers command systems."],
  ["06", "Workflow Automation", "n8n", "Where business processes move."],
  ["05", "Product Builders", "Dify / Langflow", "Where prototypes become apps."],
  ["04", "Agent Logic", "LangGraph / LangChain", "Where steps and state are controlled."],
  ["03", "RAG / Context", "RAGFlow", "Where evidence enters."],
  ["02", "UI / Interface", "Open WebUI", "Where humans interact."],
  ["01", "Runtime + Models", "Ollama / DeepSeek-V3 / Gemini", "Where intelligence runs."]
];

export const services = [
  ["AI Stack Radar Report", "For teams unsure what to test first.", "Evaluation matrix, risk summary, next action plan."],
  ["Private Knowledge Assistant", "For document-heavy firms.", "RAG architecture, citation policy, assistant blueprint."],
  ["AI Workflow Automation", "For forms, email, CRM and operations chaos.", "n8n-style flow, approval logic, evidence log."],
  ["Local Private AI Lab", "For privacy-conscious teams.", "Ollama/Open WebUI blueprint and testing policy."],
  ["Governed Agent Prototype", "For advanced AI teams.", "Approval nodes, tool boundaries, audit trail."],
  ["Action-Agent Safety Review", "For Red Zone agent tools.", "Permission review, sandbox requirements, kill switch plan."]
];

export const riskRows = [
  ["RAGFlow", "3/5", "retrieval errors, weak citations, stale sources", "source scoring + citation check", "TEST"],
  ["LangGraph / LangChain", "4/5", "agent loop errors, tool misuse, state corruption", "step log + approval nodes", "TEST"],
  ["n8n", "3/5", "credentials, workflow mistakes, data leakage", "secret policy + dry-run", "INTEGRATE CANDIDATE"],
  ["Ollama", "2/5", "model quality variance, local setup limits", "model registry + local usage policy", "INTEGRATE"],
  ["Open WebUI", "3/5", "private data exposure, user access control", "roles + logs + auth review", "INTEGRATE"],
  ["OpenClaw-style agents", "5/5", "browser/shell/app/account control", "sandbox + approval + kill switch", "GOVERNED ONLY"]
];

export const permissionRows = [
  ["Read public docs", "Low", "Allowed with source log"],
  ["Read private files", "Medium/High", "Explicit approval required"],
  ["Write local files", "Medium/High", "Dry-run first"],
  ["Call external APIs", "Medium/High", "Provider/data policy required"],
  ["Use credentials/tokens", "High", "Secret manager only"],
  ["Run shell commands", "Critical", "Human approval required"],
  ["Control browser/apps", "Critical", "Sandbox + audit required"],
  ["Modify production systems", "Critical", "Approval + rollback plan"]
];

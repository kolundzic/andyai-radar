#!/usr/bin/env node
import fs from "node:fs";

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/reports/page.tsx",
  "app/reports/top-ai-repos-2026/page.tsx",
  "app/stack-map/page.tsx",
  "app/matrix/page.tsx",
  "app/governance/page.tsx",
  "app/governance/risk-register/page.tsx",
  "app/governance/permission-matrix/page.tsx",
  "app/governance/red-zone/page.tsx",
  "app/services/page.tsx",
  "app/services/ai-stack-radar-report/page.tsx",
  "app/services/private-knowledge-assistant/page.tsx",
  "app/services/ai-workflow-automation/page.tsx",
  "app/services/local-private-ai-lab/page.tsx",
  "app/services/governed-agent-prototype/page.tsx",
  "app/services/action-agent-safety-review/page.tsx",
  "app/registry/page.tsx",
  "app/registry/signal-intake/page.tsx",
  "app/registry/evaluation-flow/page.tsx",
  "app/registry/radar-record-template/page.tsx",
  "app/ecosystem/page.tsx",
  "app/about/page.tsx",
  "components/SiteHeader.tsx",
  "components/SiteFooter.tsx",
  "components/Hero.tsx",
  "components/ServicePackageGrid.tsx",
  "components/ServiceDetail.tsx",
  "components/RegistryFlow.tsx",
  "components/RadarRecordTemplate.tsx",
  "components/DecisionCategories.tsx",
  "lib/data.ts",
  "lib/services.ts",
  "lib/registry.ts",
  "vercel.json",
  "package.json",
  "next.config.mjs",
  "tailwind.config.ts",
  "postcss.config.mjs"
];

let ok = true;

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing required file: ${file}`);
    ok = false;
  }
}

const contentChecks = [
  ["lib/data.ts", "AndyAI Radar"],
  ["components/Hero.tsx", "site.name"],
  ["app/reports/top-ai-repos-2026/page.tsx", "Top AI Repos 2026"],
  ["app/stack-map/page.tsx", "AI Stack Signal Map"],
  ["app/governance/page.tsx", "Governance Lens"],
  ["app/services/page.tsx", "Turn AI noise into governed business decisions"],
  ["app/registry/page.tsx", "Radar Registry"],
  ["lib/services.ts", "AI Stack Radar Report"],
  ["lib/registry.ts", "Signal Intake"],
  ["components/SiteFooter.tsx", "Japan IT Business"],
  ["components/SiteFooter.tsx", "AndyAI.ai"],
  ["vercel.json", "@vercel/next"]
];

for (const [file, needle] of contentChecks) {
  const content = fs.existsSync(file) ? fs.readFileSync(file, "utf8") : "";
  if (!content.includes(needle)) {
    console.error(`❌ Missing text "${needle}" in ${file}`);
    ok = false;
  }
}

if (!ok) process.exit(1);

console.log("✅ Next.js route/component verification passed.");

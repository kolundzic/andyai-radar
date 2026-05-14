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
  "app/registry/page.tsx",
  "app/ecosystem/page.tsx",
  "app/about/page.tsx",
  "components/SiteHeader.tsx",
  "components/SiteFooter.tsx",
  "components/Hero.tsx",
  "components/Section.tsx",
  "components/CTA.tsx",
  "components/EvaluationMatrix.tsx",
  "components/StackLadder.tsx",
  "components/GovernanceLens.tsx",
  "components/RiskRegisterTable.tsx",
  "components/PermissionMatrix.tsx",
  "components/RedZoneDecisionTree.tsx",
  "lib/data.ts",
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
  ["components/SiteFooter.tsx", "Japan IT Business"],
  ["components/SiteFooter.tsx", "AndyAI.ai"]
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

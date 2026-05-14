#!/usr/bin/env node
import fs from "node:fs";

const requiredFiles = [
  "app/layout.tsx",
  "app/page.tsx",
  "app/ai-pregled/page.tsx",
  "app/services/page.tsx",
  "app/services/ai-pregled-za-firmu/page.tsx",
  "app/services/ai-asistent-za-dokumente/page.tsx",
  "app/services/ai-automatizacija-posla/page.tsx",
  "app/primeri/page.tsx",
  "app/pojmovnik/page.tsx",
  "app/kontakt/page.tsx",
  "app/reports/top-ai-repos-2026/page.tsx",
  "app/stack-map/page.tsx",
  "app/governance/page.tsx",
  "components/ClientHero.tsx",
  "components/ClientOfferCards.tsx",
  "components/ClientSteps.tsx",
  "components/SimpleGlossary.tsx",
  "components/ClientServiceDetail.tsx",
  "components/SiteHeader.tsx",
  "components/SiteFooter.tsx",
  "lib/clientOffer.ts",
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
  ["app/page.tsx", "AI bez magle"],
  ["components/ClientHero.tsx", "Pametno uvedite AI"],
  ["lib/clientOffer.ts", "AI Pregled za firmu"],
  ["lib/clientOffer.ts", "AI Asistent za vaše dokumente"],
  ["lib/clientOffer.ts", "AI Automatizacija posla"],
  ["app/services/page.tsx", "AI usluge bez tehničke magle"],
  ["app/ai-pregled/page.tsx", "Prvo razumemo posao"],
  ["app/pojmovnik/page.tsx", "AI pojmovi prevedeni"],
  ["app/kontakt/page.tsx", "kolundzic@gmail.com"],
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

console.log("✅ Serbian client clarity route/component verification passed.");

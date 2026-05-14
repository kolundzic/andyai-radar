#!/usr/bin/env node

import fs from "node:fs";

const required = [
  "website/pages/home.md",
  "website/pages/reports.md",
  "website/pages/top-ai-repos-2026.md",
  "website/pages/stack-map.md",
  "website/pages/matrix.md",
  "website/pages/governance.md",
  "website/pages/services.md",
  "website/pages/registry.md",
  "website/pages/ecosystem.md",
  "website/pages/about.md"
];

let ok = true;

for (const file of required) {
  if (!fs.existsSync(file)) {
    console.error(`❌ Missing route content: ${file}`);
    ok = false;
  }
}

if (!ok) {
  process.exit(1);
}

console.log("✅ Route content verification passed.");

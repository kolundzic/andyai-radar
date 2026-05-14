#!/usr/bin/env bash
set -euo pipefail

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️ AndyAI Radar VERIFY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

required_files=(
  "README.md"
  "PROJECT_LOCK.md"
  "PUBLIC_RELEASE_LOCK.md"
  "ROADMAP.md"
  "CHANGELOG.md"
  "docs/ANDYAI_RADAR_MANIFESTO.md"
  "docs/AI_STACK_SIGNAL_MAP.md"
  "docs/REPO_EVALUATION_MATRIX.md"
  "docs/GOVERNANCE_OVERLAY.md"
  "docs/REPO_RISK_REGISTER.md"
  "docs/PERMISSION_MATRIX.md"
  "docs/BUSINESS_USE_CASES.md"
  "docs/DEMO_STACK_BLUEPRINTS.md"
  "docs/CLIENT_PACKAGE_PAGES.md"
  "docs/VERCEL_DEPLOYMENT_PLAN.md"
  "docs/SEO_PUBLIC_LAUNCH_POLISH.md"
  "reports/2026/TOP_AI_REPOS_2026_PUBLIC_RADAR_REPORT.md"
  "registry/RADAR_REGISTRY.md"
  "registry/RADAR_REGISTRY.json"
  "registry/SIGNAL_INTAKE_TEMPLATE.md"
  "registry/DECISION_CATEGORIES.md"
  "registry/KEYWORD_TAXONOMY.md"
  "diagrams/radar-hero-signal-flow.mmd"
  "diagrams/ai-stack-ladder.mmd"
  "diagrams/governance-overlay.mmd"
  "diagrams/red-zone-decision-tree.mmd"
  "diagrams/repo-evaluation-flow.mmd"
  "diagrams/service-package-routing.mmd"
  "diagrams/registry-lifecycle.mmd"
  "diagrams/ecosystem-bridge.mmd"
  "website/ROUTE_MAP.md"
  "website/SEO_METADATA.md"
  "website/FOOTER_AUTHORSHIP.md"
  "scripts/verify-routes.mjs"
  "scripts/verify-build.sh"
  "deployment/DEPLOYMENT_EVIDENCE.md"
)

for file in "${required_files[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "❌ Missing required file: $file"
    exit 1
  fi
done

required_dirs=(
  "docs"
  "reports/2026"
  "registry"
  "diagrams"
  "website"
  "website/pages"
  "scripts"
  "deployment"
  "public/og"
  "assets/visuals"
)

for dir in "${required_dirs[@]}"; do
  if [[ ! -d "$dir" ]]; then
    echo "❌ Missing required directory: $dir"
    exit 1
  fi
done

grep -q "Andrija Kolundzic" README.md || { echo "❌ Authorship missing in README"; exit 1; }
grep -q "Japan IT Business" README.md || { echo "❌ Company missing in README"; exit 1; }
grep -q "AndyAI.ai" README.md || { echo "❌ AndyAI.ai missing in README"; exit 1; }
grep -q "v2.1.0" CHANGELOG.md || { echo "❌ v2.1.0 missing in CHANGELOG"; exit 1; }

node scripts/verify-routes.mjs

echo "✅ VERIFY passed for AndyAI Radar v2.1.0"

#!/usr/bin/env bash
set -euo pipefail
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️ AndyAI Radar VERIFY"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

base_required=("README.md" "PROJECT_LOCK.md" "PUBLIC_RELEASE_LOCK.md" "ROADMAP.md" "CHANGELOG.md")
for file in "${base_required[@]}"; do
  if [[ ! -f "$file" ]]; then
    echo "❌ Missing base required file: $file"
    exit 1
  fi
done

if [[ -f "scripts/verify-routes.mjs" ]]; then node scripts/verify-routes.mjs; fi
if [[ -f "scripts/verify-next-routes.mjs" ]]; then node scripts/verify-next-routes.mjs; fi

grep -q "Andrija Kolundzic" README.md || { echo "❌ Authorship missing in README"; exit 1; }
grep -q "Japan IT Business" README.md || { echo "❌ Company missing in README"; exit 1; }
grep -q "AndyAI.ai" README.md || { echo "❌ AndyAI.ai missing in README"; exit 1; }

echo "✅ VERIFY passed for AndyAI Radar"

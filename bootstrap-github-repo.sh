#!/usr/bin/env bash
set -euo pipefail

REPO_NAME="andyai-radar"
REMOTE="git@github.com:kolundzic/${REPO_NAME}.git"
VERSION="v2.1.0"

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🅰️ AndyAI Radar GitHub Bootstrap"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

if ! command -v gh >/dev/null 2>&1; then
  echo "❌ GitHub CLI 'gh' is not installed or not in PATH."
  echo "Install/login first, then rerun:"
  echo "  brew install gh"
  echo "  gh auth login"
  exit 1
fi

if ! gh auth status >/dev/null 2>&1; then
  echo "❌ gh is installed but not authenticated."
  echo "Run: gh auth login"
  exit 1
fi

if [[ ! -d ".git" ]]; then
  echo "❌ This folder is not a git repo. Run the apply script first."
  exit 1
fi

echo "🔎 Checking GitHub repo..."
if gh repo view "kolundzic/${REPO_NAME}" >/dev/null 2>&1; then
  echo "✅ GitHub repo already exists: kolundzic/${REPO_NAME}"
else
  echo "📦 Creating GitHub repo: kolundzic/${REPO_NAME}"
  gh repo create "kolundzic/${REPO_NAME}" --public --source=. --remote=origin --description "AndyAI Radar — Signal Intelligence for the AI Stack" --push
fi

if git remote get-url origin >/dev/null 2>&1; then
  git remote set-url origin "${REMOTE}"
else
  git remote add origin "${REMOTE}"
fi

echo "🚀 Pushing main and ${VERSION}..."
git branch -M main
git push -u origin main
git push origin "${VERSION}" || true

echo "✅ GitHub bootstrap completed:"
echo "https://github.com/kolundzic/${REPO_NAME}"

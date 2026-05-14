# Repo Risk Register

| Tool / Repo | Risk Level | Main Risk | AndyAI Control | Status |
|---|---:|---|---|---|
| RAGFlow | 3/5 | retrieval errors, weak citations, stale sources | source scoring + citation check | TEST |
| LangGraph / LangChain | 4/5 | agent loop errors, tool misuse, state corruption | step log + approval nodes | TEST |
| n8n | 3/5 | credentials, workflow mistakes, data leakage | secret policy + dry-run | INTEGRATE CANDIDATE |
| Ollama | 2/5 | model quality variance, local setup limits | model registry + local usage policy | INTEGRATE |
| Open WebUI | 3/5 | private data exposure, user access control | roles + logs + auth review | INTEGRATE |
| Dify | 3/5 | provider routing, deployment complexity | environment review + boundary policy | TEST |
| Gemini CLI | 3/5 | shell/file command risk | command review + repo boundary | WATCH |
| OpenClaw-style agents | 5/5 | browser/shell/app/account control | sandbox + approval + kill switch | GOVERNED ONLY |

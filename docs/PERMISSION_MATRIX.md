# Permission Matrix

| Permission | Risk | Rule |
|---|---:|---|
| Read public docs | Low | allowed with source log |
| Read private files | Medium/High | explicit approval required |
| Write local files | Medium/High | dry-run first |
| Call external APIs | Medium/High | provider/data policy required |
| Use credentials/tokens | High | secret manager only |
| Run shell commands | Critical | human approval required |
| Control browser/apps | Critical | sandbox + audit required |
| Install plugins/skills | Critical | skill vetting required |
| Send emails/messages | Critical | draft/approval before sending |
| Modify production systems | Critical | approval + rollback plan |

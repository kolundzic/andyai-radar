export const registryFlow = [
  {
    step: "01",
    title: "Signal Intake",
    description:
      "Capture an AI tool, repo, article, market signal or client need with source, date, link and initial context."
  },
  {
    step: "02",
    title: "Stack Classification",
    description:
      "Classify the signal by AI stack layer: model, runtime, UI, RAG, agent logic, workflow, action agent or governance."
  },
  {
    step: "03",
    title: "Business Value Mapping",
    description:
      "Translate the signal into possible use cases, demos, client packages, internal roadmap items or research notes."
  },
  {
    step: "04",
    title: "Risk + Permission Review",
    description:
      "Evaluate access level, change capability, data exposure, action risk, approval need and rollback requirement."
  },
  {
    step: "05",
    title: "Governance Decision",
    description:
      "Assign the signal to watch, test, integrate, client offer, Red Zone review or reject/archive."
  },
  {
    step: "06",
    title: "Radar Record",
    description:
      "Store the decision as a structured Radar record with evidence, keywords, status, owner and next action."
  }
];

export const radarRecordFields = [
  ["Signal title", "Name of the tool, repo, model, workflow or market signal."],
  ["Source", "URL, document, article, video, repo or client input."],
  ["Date captured", "When the signal entered Radar."],
  ["Stack layer", "Where the signal belongs in the AI stack."],
  ["Business use case", "What practical value it may create."],
  ["Risk level", "Low, medium, high, critical or Red Zone."],
  ["Permission surface", "Read, write, execute, credentials, browser, shell, files, accounts."],
  ["Governance requirement", "Approval, audit trail, sandbox, rollback, kill switch."],
  ["Decision", "Watch, test, integrate, offer, reject/archive."],
  ["Next action", "Concrete follow-up step."]
];

export const decisionCategories = [
  ["Watch", "Interesting signal, not ready for build or offer."],
  ["Test", "Candidate for internal prototype or evaluation."],
  ["Integrate", "Useful enough to enter a controlled AndyAI stack roadmap."],
  ["Client Offer", "Strong enough to become a package, audit, review or service."],
  ["Red Zone", "Requires strict safety review before any action use."],
  ["Archive", "Not useful now, but preserved for future comparison."]
];

export const navLinks = [
  { href: "#hero", label: "Overview" },
  { href: "#agentic-coding", label: "Agentic Coding" },
  { href: "#mcp", label: "MCP" },
  { href: "#workflows", label: "Agent Workflows" },
  { href: "#ethics", label: "Ethics" },
  { href: "#tooling", label: "Production Tools" },
  { href: "#next-steps", label: "Next Steps" },
];

export const heroContent = {
  title: "AI Camp 2025: From Theory to Production Tools",
  subtitle: "Key learnings and practical applications for Yext Services",
  byline: "By Juan Zuluaga | Senior Manager, Professional Services",
  highlights: [
    "Agentic coding with Cursor accelerates delivery",
    "Model Context Protocols unlock live, trusted data",
    "Single-step agent workflows drive reliability",
    "Transparency keeps AI adoption on solid footing",
  ],
};

export const agenticCoding = {
  definition: [
    "AI operates as a delegated engineering partner, not just autocomplete.",
    "Developers provide requirements, edge cases, and guardrails; AI ships the feature.",
    "Cursor coordinates implementation details while preserving architectural intent.",
  ],
  benefits: [
    "Faster iteration loops and shorter PR cycles.",
    "Documentation captured in-line with code generation.",
    "Cleaner handoffs because AI handles boilerplate and tests.",
    "Lower context switching - engineers stay in system design.",
  ],
  impact: [
    "Concept-to-production time compressed from days to hours.",
    "AI backfills scaffolding while humans focus on system-level decisions.",
    "Reusable prompts become living runbooks for the team.",
  ],
  snippet: `Developer → Cursor
1. Define requirements, constraints, and success metrics.
2. Delegate feature build (data models, API routes, UI).
3. Review & iterate with tight feedback loops.

Result → Working feature, docs, and tests delivered as a single package.`,
};

export const mcpDeepDive = {
  summary: [
    "Model Context Protocols give AI access to live data and internal systems.",
    "Act like purpose-built superpowers that extend clean-room AI models.",
    "Claude now answers operational questions with real-time signals inside the chat window.",
  ],
  caseStudy: {
    title: "WMATA Metro MCP",
    challenge:
      "Deliver live DC Metro train arrivals without leaving Claude for the morning commute.",
    phases: [
      {
        label: "Design Phase (Claude.ai)",
        details: [
          "Explored WMATA API endpoints and auth requirements.",
          "Mapped three essential tools: Clarendon arrivals, any-station query, station codes reference.",
        ],
      },
      {
        label: "Code Generation",
        details: [
          "Claude produced production-grade Python with async requests.",
          "Included API key management, error handling, and response shaping.",
          "Delivered REST + SSE extensions for workflow integration.",
        ],
      },
      {
        label: "Implementation (Cursor)",
        details: [
          "Cursor executed the spec, wiring the MCP server in under an hour.",
          "Hand-off preserved architecture while automating the boilerplate.",
        ],
      },
    ],
    result: [
      "Claude now responds to “What are the next trains at Clarendon?” with live WMATA data.",
      "No context switching - real-time transit data appears directly in the chat panel.",
      "Pattern is portable to Yext data services and client environments.",
    ],
  },
  flow: [
    { label: "Claude", detail: "Explores docs + drafts architecture" },
    { label: "Specs", detail: "Tool definitions, auth, success criteria" },
    { label: "Cursor", detail: "Implements MCP + REST/SSE handlers" },
    { label: "Live MCP", detail: "Real-time WMATA arrivals inside Claude" },
  ],
};

export const singleStepWorkflows = {
  principle:
    "Agents are most reliable when they receive a single, unambiguous task with exactly the data they need - no more, no less.",
  antiPatterns: [
    "Multi-threaded prompts with vague routing instructions.",
    "Giant context dumps that shift prioritization back to the model.",
    "Ambiguous requests that mix decision points and execution.",
  ],
  bestPractices: [
    "Break workflows into atomic steps with single responsibility.",
    "Pass structured, minimal inputs tailored to each agent.",
    "Enforce consistent output schemas that downstream steps can trust.",
    "Route based on explicit criteria, not intuition.",
  ],
  csrExample: [
    "Input routing auto-categorizes accounts (Red / Amber / Green).",
    "Dedicated agents per status with bespoke instructions.",
    "Each agent only sees the account packet relevant to its analysis.",
    "Outputs are normalized into an executive-ready narrative for Megan.",
  ],
};

export const ethicsContent = {
  title: "AI Ethics: The Transparency Imperative",
  insight:
    "Trust is won or lost on disclosure. The same AI workflow is celebrated when users know it's there - and rejected when they don't.",
  positive: [
    "Users see clear labels when AI is assisting.",
    "People understand what data AI touches and why.",
    "Opt-in controls turn users into collaborators.",
  ],
  negative: [
    "Hidden automation feels deceptive once discovered.",
    "No opt-out erodes long-term adoption.",
    "Lack of auditability creates compliance risk.",
  ],
  applications: [
    {
      title: "Client-Facing Tools",
      detail: "Label AI-generated insights, surface toggles, document provenance.",
    },
    {
      title: "Internal Automation",
      detail: "Call out AI participation in runbooks and stand-ups; log activity.",
    },
    {
      title: "Team Processes",
      detail: "Make AI’s role explicit in decision loops and review cadences.",
    },
  ],
};

export const tooling = [
  {
    name: "CSR Workflow for Megan",
    purpose: "Automated Client Status Report analysis for executive review.",
    how: "Routes accounts by health signal, assigns specialized agents, and synthesizes narrative recommendations.",
    output: "Executive-level summary with prioritized actions per account.",
    impact: "Hours saved per weekly readout, consistent scoring across Services.",
  },
  {
    name: "Test CSR Workflow for Managers",
    purpose: "Parallel workflow tailored for peer managers (Emmie, Janet).",
    how: "Shares routing logic but customizes prompts per leadership style.",
    output: "Comparable dashboards that fuel cross-team conversations.",
    impact: "Aligns peer reviews without duplicating manual effort.",
  },
  {
    name: "PRD Reviewer Tool",
    purpose: "Raises PRD quality before Engineering review.",
    how: "Evaluates completeness, technical feasibility, and standards compliance.",
    output: "Structured checklist with concrete redlines.",
    impact: "Shorter review cycles and fewer back-and-forth iterations.",
  },
  {
    name: "Zendesk → Jira Transcriber",
    purpose: "Transforms support tickets into engineering-ready specs.",
    how: "Extracts essentials, adds reproduction steps, maps to Jira templates.",
    output: "Actionable Jira issues with preserved customer context.",
    impact: "Faster triage and reduced context switching between teams.",
  },
  {
    name: "Yext MCP Installation via Cursor",
    purpose: "Gives Claude direct access to Yext Knowledge Graph.",
    how: "Installs and configures official MCP server, exposing entity CRUD.",
    output: "Claude commands that query, create, and update KG entities.",
    impact: "Demonstrates MCP practicality on our own platform.",
  },
];

export const nextSteps = {
  takeaways: [
    "Agentic coding: delegate implementation, keep humans on architecture.",
    "MCPs: bridge AI to live enterprise data responsibly.",
    "Single-step agents: clarity beats complexity every time.",
    "Transparency: disclosure is a prerequisite for adoption.",
    "Production tooling: we already have working examples in the field.",
  ],
  roadmap: [
    "Scale single-step patterns across additional Services workflows.",
    "Expand MCP coverage for Knowledge Graph and client data domains.",
    "Bake transparency checkpoints into every AI feature review.",
    "Keep iterating on deployed tools with feedback loops from Services.",
  ],
};


import Image from "next/image";
import Link from "next/link";
import {
  agenticCoding,
  ethicsContent,
  heroContent,
  mcpDeepDive,
  navLinks,
  nextSteps,
  singleStepWorkflows,
  tooling,
} from "@/data/content";

const Section = ({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) => (
  <section
    id={id}
    className="scroll-mt-32 rounded-[var(--radius-lg)] bg-[var(--color-snow)] p-8 shadow-[0_40px_80px_rgba(26,27,28,0.06)] md:p-12"
  >
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-blue)]">
      {eyebrow}
    </p>
    <div className="mt-3 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
      <div>
        <h2 className="text-3xl md:text-4xl">{title}</h2>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-[var(--color-slate-600)]">
            {subtitle}
          </p>
        )}
      </div>
    </div>
    <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--color-slate-600)]">
      {children}
    </div>
  </section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-[var(--color-electric-blue)]/30 bg-[var(--color-electric-blue)]/10 px-4 py-1 text-sm font-semibold text-[var(--color-electric-blue)]">
    {children}
  </span>
);

const Card = ({
  title,
  items,
  tone = "default",
}: {
  title: string;
  items: string[];
  tone?: "default" | "accent" | "warning" | "success";
}) => {
  const toneStyles = {
    default: "bg-[var(--color-mist)] text-[var(--color-midnight)]",
    accent:
      "bg-gradient-to-br from-[#fdf0f0] via-white to-white border border-[#ffd7d2]",
    warning:
      "bg-gradient-to-br from-[#fff2ec] via-white to-white border border-[#ffd0b6]",
    success:
      "bg-gradient-to-br from-[#e4f7ff] via-white to-white border border-[#bfe9ff]",
  } as const;

  return (
    <div
      className={`rounded-3xl p-6 shadow-[0_25px_45px_rgba(26,27,28,0.08)] ${toneStyles[tone]}`}
    >
      <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
        {title}
      </h3>
      <ul className="mt-4 space-y-3 text-[var(--color-slate-600)]">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-base leading-relaxed">
            <span className="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-[var(--color-electric-blue)]" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function Home() {
  return (
    <div className="bg-[var(--color-mist)] py-10 text-[var(--color-midnight)]">
      <a
        href="#hero"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-cta-blue)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>
      <main className="mx-auto flex max-w-6xl flex-col gap-10 px-4 md:px-8">
        {/* Hero image banner */}
        <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
        <Image
            src="/images/hero-group-photo.jpg"
            alt="AI Camp cohort group photo"
            width={2200}
            height={1400}
            className="h-[450px] w-full object-cover md:h-[550px]"
          priority
        />
        </div>

        <header className="sticky top-6 z-20 rounded-full border border-white/40 bg-white/30 px-6 py-4 backdrop-blur-lg">
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="#hero"
              className="text-sm font-semibold uppercase tracking-[0.5em] text-white transition focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent focus:rounded"
            >
              AI CAMP 2025
            </Link>
            <nav className="flex flex-1 flex-wrap items-center gap-3 md:justify-center" aria-label="Main navigation">
              {navLinks.map((link) => {
                const isNextSteps = link.href === "#next-steps";
                return isNextSteps ? (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full bg-[var(--color-cta-blue)] px-4 py-2 text-sm font-semibold !text-white shadow-[0_10px_30px_rgba(0,142,182,.35)] transition hover:bg-[#00779a] hover:!text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-sm font-medium text-white transition hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent focus:rounded"
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>
          </div>
        </header>

        {/* Hero section - clean text like other sections */}
        <section
          id="hero"
          className="rounded-[var(--radius-lg)] bg-[var(--color-snow)] p-8 shadow-[0_40px_80px_rgba(26,27,28,0.06)] md:p-12"
        >
          <div className="flex flex-wrap gap-2">
            <Pill>Executive briefing</Pill>
            <Pill>Yext Professional Services</Pill>
          </div>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-[var(--color-midnight)] md:text-5xl">
            {heroContent.title}
          </h1>
          <p className="mt-4 text-xl text-[var(--color-slate-600)]">
            {heroContent.subtitle}
          </p>
          <p className="mt-2 text-sm uppercase tracking-[0.5em] text-[var(--color-ink-300)]">
            {heroContent.byline}
          </p>
          <div className="mt-8">
            <div className="rounded-3xl border border-[var(--color-mist)] bg-[var(--color-mist)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-blue)]">
                Key Learnings
              </h3>
              <ul className="mt-4 space-y-3 text-base text-[var(--color-slate-600)]">
                {heroContent.highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-coral)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
        </div>
        </section>

        <Section
          id="agentic-coding"
          eyebrow="Agentic Coding with Cursor"
          title="Delegating implementation so humans stay on architecture"
          subtitle="Cursor shifts AI from autocomplete to partner. We give requirements, it delivers polished features - documentation, tests, and context included."
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="What is Agentic Coding?" items={agenticCoding.definition} />
            <Card
              title="Key Benefits"
              items={agenticCoding.benefits}
              tone="success"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Practical Impact" items={agenticCoding.impact} tone="accent" />
            <pre className="overflow-x-auto rounded-3xl bg-[var(--color-midnight)]/95 p-6 text-sm text-white shadow-[0_25px_45px_rgba(0,0,0,.35)]">
              <code className="block whitespace-pre-wrap break-words">{agenticCoding.snippet}</code>
            </pre>
          </div>
        </Section>

        <Section
          id="mcp"
          eyebrow="Model Context Protocol Deep Dive"
          title="Giving Claude live access to real infrastructure"
          subtitle="MCPs act as secure adapters between AI models and operational data. They extend Claude with purpose-built capabilities while keeping governance in place."
        >
          <div className="grid gap-6 md:grid-cols-[3fr_2fr]">
            <div className="space-y-6">
              <Card title="Why MCPs?" items={mcpDeepDive.summary} />
              <div className="rounded-3xl bg-gradient-to-br from-white via-[var(--color-frost-blue)] to-white p-6 shadow-[0_30px_60px_rgba(26,113,137,.15)]">
                <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
                  {mcpDeepDive.caseStudy.title}
                </h3>
                <p className="mt-2 text-[var(--color-slate-600)]">
                  {mcpDeepDive.caseStudy.challenge}
                </p>
                <div className="mt-4 space-y-4">
                  {mcpDeepDive.caseStudy.phases.map((phase) => (
                    <div key={phase.label} className="rounded-2xl bg-white/60 p-4">
                      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-electric-blue)]">
                        {phase.label}
                      </p>
                      <ul className="mt-2 space-y-2 text-[var(--color-slate-600)]">
                        {phase.details.map((detail) => (
                          <li key={detail} className="flex gap-3">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[var(--color-sea-blue)]" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="rounded-3xl bg-[var(--color-midnight)] p-6 text-white shadow-[0_25px_50px_rgba(0,0,0,.4)]">
                <h3 className="text-xl font-semibold !text-white">Claude → Cursor → Live MCP</h3>
                <div className="mt-6 space-y-4">
                  {mcpDeepDive.flow.map((step) => (
                    <div key={step.label} className="flex items-center gap-4 border-l border-white/20 pl-4">
                      <div className="text-sm font-semibold uppercase tracking-[0.2em] !text-white">
                        {step.label}
                      </div>
                      <p className="text-sm !text-white">{step.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <Card title="The Result" items={mcpDeepDive.caseStudy.result} tone="success" />
            </div>
          </div>
        </Section>

        <Section
          id="workflows"
          eyebrow="n8n Agentic Workflows"
          title="The single-step principle drives reliable automation"
          subtitle={singleStepWorkflows.principle}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="What doesn't work ❌" items={singleStepWorkflows.antiPatterns} tone="warning" />
            <Card title="What works ✅" items={singleStepWorkflows.bestPractices} tone="success" />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="CSR Workflow in Practice" items={singleStepWorkflows.csrExample} />
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/workflow-diagram.jpg"
                alt="n8n single-step workflow diagram"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-midnight)]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] !text-white">
                  Live Workflow
                </p>
                <p className="mt-1 text-xl font-semibold !text-white">CSR → Agents → Executive Report</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="ethics"
          eyebrow="AI Ethics"
          title={ethicsContent.title}
          subtitle={ethicsContent.insight}
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Card title="Positive Reception ✅" items={ethicsContent.positive} tone="success" />
            <Card title="Negative Reception ❌" items={ethicsContent.negative} tone="warning" />
          </div>
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {ethicsContent.applications.map((app) => (
                <div key={app.title} className="rounded-3xl border border-[var(--color-mist)] bg-white/70 p-5">
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-electric-blue)]">
                    {app.title}
                  </p>
                  <p className="mt-2 text-[var(--color-slate-600)]">{app.detail}</p>
                </div>
              ))}
            </div>
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/networking-photo.jpg"
                alt="Team networking discussion"
                width={1000}
                height={1300}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] !text-white">
                  AI Trust Discussion
                </p>
                <p className="mt-1 text-xl font-semibold !text-white">Transparency is the lever.</p>
              </div>
            </div>
          </div>
        </Section>

        <Section
          id="tooling"
          eyebrow="Tooling Built"
          title="Prototype Applications for Yext Services"
          subtitle="Every prototype at AI Camp tied directly to a Services workflow. These prototypes could deliver measurable impact."
        >
          <div className="grid gap-6 md:grid-cols-2">
            {tooling.map((tool) => (
              <div key={tool.name} className="rounded-3xl border border-[var(--color-mist)] bg-white p-6 shadow-[0_30px_60px_rgba(26,27,28,0.08)]">
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-[var(--color-electric-blue)]">
                  {tool.purpose}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[var(--color-midnight)]">
                  {tool.name}
                </h3>
                <p className="mt-3 text-[var(--color-slate-600)]">{tool.how}</p>
                <div className="mt-4 rounded-2xl bg-[var(--color-mist)]/60 p-4 text-sm">
                  <p className="font-semibold text-[var(--color-midnight)]">
                    Output
                  </p>
                  <p className="text-[var(--color-slate-600)]">{tool.output}</p>
                  <p className="mt-2 text-[var(--color-sea-blue)]">{tool.impact}</p>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="next-steps"
          eyebrow="Conclusion"
          title="Ready to scale AI Camp patterns across Services"
          subtitle="We have a playbook that balances velocity, reliability, and trust. Here’s what happens next."
        >
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-white p-6 shadow-[0_30px_60px_rgba(26,27,28,0.08)]">
              <h3 className="text-xl font-semibold text-[var(--color-midnight)]">
                Key Takeaways
              </h3>
              <ul className="mt-4 space-y-3 text-[var(--color-slate-600)]">
                {nextSteps.takeaways.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-electric-blue)]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl bg-[var(--color-midnight)] p-6 text-white shadow-[0_30px_60px_rgba(26,27,28,0.3)]">
              <h3 className="text-xl font-semibold">Moving Forward</h3>
              <ul className="mt-4 space-y-4 text-white/80">
                {nextSteps.roadmap.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-coral)]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="mailto:juan.zuluaga@yext.com?subject=AI%20Camp%202025%20Showcase"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-midnight)] transition hover:bg-[var(--color-mist)]"
              >
                Schedule executive readout →
              </Link>
            </div>
        </div>
        </Section>

        <footer className="pb-6 text-center text-sm text-[var(--color-ink-300)]">
          © {new Date().getFullYear()} Yext Professional Services · AI Camp 2025
          Showcase · Designed in Cursor
        </footer>
      </main>
    </div>
  );
}

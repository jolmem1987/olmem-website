// app/services/agentic-ai-creation/page.tsx
import Link from "next/link";
import ClientLoginLink from "@/components/ClientLoginLink";

type SvgProps = React.SVGProps<SVGSVGElement>;

function IconArrowRight(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M5 12h12m0 0-5-5m5 5-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBot(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 3v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M7 8h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M9 13h.01M15 13h.01" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M9 16c1 1 5 1 6 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconClock(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" stroke="currentColor" strokeWidth="2" />
      <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IconCalendar(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 2v3M17 2v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M4 7h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M6 5h12a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconShield(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2 20 6v7c0 5-3.5 8.5-8 9-4.5-.5-8-4-8-9V6l8-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5 11 14.5 15.5 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconPhone(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6.5 3.5h3l1.2 4-2 1.2c1.2 2.7 3.2 4.7 5.9 5.9l1.2-2 4 1.2v3c0 1.1-.9 2-2 2C9.8 21.8 2.2 14.2 3.5 5.5c0-1.1.9-2 2-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconMessage(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4 5.5A3.5 3.5 0 0 1 7.5 2h9A3.5 3.5 0 0 1 20 5.5v6A3.5 3.5 0 0 1 16.5 15H10l-4 4v-4.5A3.5 3.5 0 0 1 4 11.5v-6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWorkflow(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path d="M7 7h4v4H7V7Zm6 6h4v4h-4v-4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M11 9h3a3 3 0 0 1 3 3v1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M7 19h4v-4H7v4Z" stroke="currentColor" strokeWidth="2" />
      <path d="M9 15v-1a3 3 0 0 1 3-3h1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function IconCheck(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 7 10.5 16.5 4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconWrench(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M21 7a6 6 0 0 1-8.6 5.4L7 17.8a2 2 0 0 1-2.8 0l-1-1a2 2 0 0 1 0-2.8l5.4-5.4A6 6 0 0 1 17 3l-3 3 4 4 3-3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
      {children}
    </span>
  );
}

function FeatureCard({
  title,
  description,
  Icon,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<SvgProps>;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-blue-50 text-blue-600">
          <Icon className="h-5 w-5" />
        </span>
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function StepCard({
  step,
  title,
  description,
}: {
  step: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <div className="flex items-center gap-3">
        <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-xs font-bold text-gray-800">
          {step}
        </span>
        <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
      <h4 className="text-sm font-semibold text-gray-900">{q}</h4>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{a}</p>
    </div>
  );
}

export default function AgenticAiCreationPage() {
  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      {/* subtle brand glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-44 right-[-80px] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-90px] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <Pill>
            <span className="inline-flex items-center gap-2">
              <IconBot className="h-4 w-4" />
              Agentic AI Creation
            </span>
          </Pill>

          <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-900">
            AI agents that run your workflows
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            We build custom agentic systems for contractors: lead intake, qualification,
            scheduling, quoting support, and customer updates—so you can focus on jobs, not admin.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
            >
              Talk to us <IconArrowRight className="h-4 w-4" />
            </Link>

            <a
              href="#use-cases"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
            >
              See use-cases <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* outcomes */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Respond instantly"
            description="Your agent replies, collects details, and routes leads in seconds—no missed calls."
            Icon={IconClock}
          />
          <FeatureCard
            title="Book more jobs"
            description="Automate scheduling, reminders, and follow-ups to reduce no-shows and delays."
            Icon={IconCalendar}
          />
          <FeatureCard
            title="Stay consistent"
            description="Approved messaging, business details, and SOPs baked into every conversation."
            Icon={IconShield}
          />
        </div>
      </section>

      {/* USE CASES */}
      <section id="use-cases" className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Common contractor use-cases
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Pick one workflow or combine several into a single agent system.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <FeatureCard
            title="Lead intake + qualification"
            description="Collect job type, address, timeline, photos, urgency—then route it."
            Icon={IconPhone}
          />
          <FeatureCard
            title="Customer messaging"
            description="Send pre-job instructions, on-the-way updates, and post-job check-ins automatically."
            Icon={IconMessage}
          />
          <FeatureCard
            title="Workflow automation"
            description="Create tasks, update statuses, and push notes to your tools the moment a lead comes in."
            Icon={IconWorkflow}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-7 shadow-sm backdrop-blur">
          <h3 className="text-lg font-semibold text-gray-900">
            What an agent can do (examples)
          </h3>

          <ul className="mt-4 grid gap-2 text-sm text-gray-700 md:grid-cols-2">
            {[
              "Qualify leads and request missing details",
              "Generate a clean job summary for your team",
              "Book appointments and send reminders",
              "Handle follow-ups until a lead converts",
              "Triage urgent requests and escalate",
              "Capture reviews and referrals after completion",
            ].map((x) => (
              <li key={x} className="flex items-start gap-2">
                <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                <span>{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            How we build it
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Practical, fast, and focused on your real-world workflow.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <StepCard
            step="01"
            title="Workflow mapping"
            description="We map your lead flow, qualification rules, and handoff points (calls, forms, texts, email)."
          />
          <StepCard
            step="02"
            title="Agent design"
            description="We define tools, memory, guardrails, and scripts so responses stay on-brand and on-task."
          />
          <StepCard
            step="03"
            title="Launch + tuning"
            description="We test edge cases, tune prompts, and iterate with real conversations for reliability."
          />
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          <div className="flex items-start justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Integrations</h2>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                Replace these with real integration logos/labels in your visual editor.
              </p>
            </div>

            <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-semibold text-gray-700">
              <IconWrench className="h-4 w-4" />
              Customizable
            </span>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {["CRM", "Scheduling", "Email/SMS", "Forms/Web"].map((x) => (
              <div
                key={x}
                className="flex items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-6 text-sm font-semibold text-gray-700"
              >
                {x} Placeholder
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + CTA */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">FAQ</h2>
            <p className="mt-2 text-sm text-gray-600">
              Quick answers (easy to tweak in your editor).
            </p>

            <div className="mt-6 grid gap-4">
              <FaqItem
                q="Will it sound like a robot?"
                a="No—your agent uses approved messaging, business details, and tone guidelines so it stays human and consistent."
              />
              <FaqItem
                q="Can it handle edge cases?"
                a="Yes. We add guardrails and escalation paths so unusual or urgent requests route to a person."
              />
              <FaqItem
                q="How fast can we launch?"
                a="Many builds launch in phases: start with lead intake, then add scheduling, then add follow-ups."
              />
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
            <h3 className="text-2xl font-bold text-gray-900">Ready to automate?</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Tell us your workflow and we’ll recommend the simplest agent that delivers ROI fast.
            </p>

            <div className="mt-6 grid gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
              >
                Start a project <IconArrowRight className="h-4 w-4" />
              </Link>

              <ClientLoginLink className="inline-flex items-center justify-center gap-2 rounded-xl border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100">
                Subscribe & Access CMS <IconArrowRight className="h-4 w-4" />
              </ClientLoginLink>

              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50"
              >
                Back to services <IconArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm text-gray-700">
              Tip: bring 3 recent leads (good + bad). We’ll model qualification around them.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
import Link from "next/link";

export default function CustomWorkflowSolutionsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Product
          </p>
          <h1 className="mb-4 text-5xl font-bold text-orange-500">
            Custom Workflow Solutions
          </h1>
          <p className="text-lg text-gray-400">
            Generative and agentic AI systems built for specific business workflows — from lead intake to customer follow-up, quoting, scheduling, and more.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-8">
            <h2 className="mb-3 text-2xl font-semibold text-orange-500">Agentic AI Automation</h2>
            <p className="mb-4 text-gray-400">
              Build AI agents that act on your behalf: qualify leads, schedule jobs, send follow-ups, and handle common tasks without manual effort.
            </p>
            <ul className="mb-6 space-y-3 text-gray-300">
              <li>🧠 Automated lead qualification & follow-up</li>
              <li>📅 Scheduling and calendar coordination</li>
              <li>📣 SMS/email outreach & reminders</li>
              <li>🔎 Custom business logic & escalation rules</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-orange-600"
            >
              Talk to a consultant
            </Link>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-8">
            <h2 className="mb-3 text-2xl font-semibold text-orange-500">Generative Content & AI Tools</h2>
            <p className="mb-4 text-gray-400">
              Use AI to generate copy, proposals, estimates, and marketing assets tailored to your business, with built-in integrations to your website.
            </p>
            <ul className="mb-6 space-y-3 text-gray-300">
              <li>✍️ Proposal & estimate generation</li>
              <li>🗂️ Auto-generated service page content</li>
              <li>📊 Business report & analytics summaries</li>
              <li>✨ Custom prompts & templates for your brand voice</li>
            </ul>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 px-6 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-orange-600"
            >
              Get a custom plan
            </Link>
          </div>
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white/10 p-8 text-center text-sm text-gray-200">
          <p className="mb-2">
            Not sure which approach is right for your business? Our team can help match you with the right mix of automation, content generation, and workflows.
          </p>
          <Link href="/contact" className="font-semibold text-white underline">
            Contact us for a strategy session
          </Link>
        </div>
      </section>
    </main>
  );
}

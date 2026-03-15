import Link from "next/link";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black text-white">
      <Hero />

      {/* Services Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Services</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            We lead with a scalable contractor website model: a one-time setup fee, monthly hosting, and optional maintenance plus security.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Setup + Hosting Model
            </h3>
            <p className="text-gray-400">
              $999 one-time setup fee, then $35/month hosting. Optional maintenance + security is available for $100/month.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Contractor CMS
            </h3>
            <p className="text-gray-400">
              A CMS setup that makes it simple to update services, service areas, projects, and SEO content after launch.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Agentic AI Creation
            </h3>
            <p className="text-gray-400">
              Optional automation add-ons for lead handling, customer communication, and workflow follow-up.
            </p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-blue-500/30 bg-blue-500/10 p-6 text-center">
          <p className="text-sm uppercase tracking-wide text-blue-300">Core Offer</p>
          <h3 className="mt-2 text-3xl font-bold text-white">$999 Setup + $35/mo Hosting</h3>
          <p className="mx-auto mt-3 max-w-3xl text-gray-300">
            Includes home, services, contact form, service areas, gallery, and SEO-ready structure. Add maintenance + security for $100/month.
          </p>
          <p className="mx-auto mt-2 max-w-3xl text-sm text-blue-200">
            SEO is included on every site we build or manage, with support for any WordPress SEO plugin plus our own SEO plugin at no cost.
          </p>
          <div className="mt-5 flex justify-center gap-4">
            <Link href="/subscription" className="rounded-lg bg-orange-500 px-5 py-2 font-semibold text-white hover:bg-orange-600">
              Start Package Intake
            </Link>
            <Link href="/products/themes" className="rounded-lg border border-white/20 px-5 py-2 font-semibold text-white hover:bg-white/10">
              View Template Details
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold text-blue-400">Products</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Tools and systems developed by Olmem Tech to help contractors run better websites and automate their workflows.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Contractor CMS
            </h3>
            <p className="mb-4 text-gray-400">
              A simple system designed to help contractors manage services, projects, and website content easily.
            </p>
            <div className="flex gap-3">
              <Link href="/products/contractor-cms" className="text-orange-400 hover:text-orange-300">
                Learn More →
              </Link>
              <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
                Subscribe →
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Website Themes
            </h3>
            <p className="mb-4 text-gray-400">
              Professional starter themes designed specifically for contractor businesses with built-in SEO and content management.
            </p>
            <div className="flex gap-3">
              <Link href="/products/themes" className="text-orange-400 hover:text-orange-300">
                View Themes →
              </Link>
              <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
                Subscribe →
              </Link>
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              AI Automation
            </h3>
            <p className="mb-4 text-gray-400">
              Custom AI agents that automate lead handling, scheduling, customer communication, and business workflows.
            </p>
            <div className="flex gap-3">
              <Link href="/products/custom-workflow-solutions" className="text-orange-400 hover:text-orange-300">
                Learn More →
              </Link>
              <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
                Subscribe →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contractor CMS Features */}
      <section className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-bold">Contractor CMS Features</h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Built to make contractor websites easier to manage, easier to grow, and easier to keep updated.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Service Page Management
            </h3>
            <p className="text-gray-400">
              Easily update services, descriptions, pricing details, and service areas without rebuilding the site.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Built-In SEO Structure
            </h3>
            <p className="text-gray-400">
              Pages are organized to support search rankings for contractor and automotive businesses from the start.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Project Galleries
            </h3>
            <p className="text-gray-400">
              Show completed work with organized project galleries that help build trust and win more clients.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Managed or Self-Managed
            </h3>
            <p className="text-gray-400">
              Contractors can manage their own websites, or Olmem Tech can handle updates and maintenance for them.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Business Plugin Integrations
            </h3>
            <p className="text-gray-400">
              Pre-built integrations for contractor tools like scheduling software, CRM systems, and payment processors.
            </p>
          </div>

          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6 backdrop-blur">
            <h3 className="mb-3 text-2xl font-semibold text-orange-500">
              Subscriber Tool Requests
            </h3>
            <p className="text-gray-400">
              Current subscribers can submit ideas for future tools and features directly through the CMS platform.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
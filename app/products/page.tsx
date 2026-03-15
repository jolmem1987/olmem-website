import Link from "next/link";

export default function ProductsPage() {
  return (
    <main className="relative overflow-hidden bg-white text-gray-900">
      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-16 top-24 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-28">
        <div className="max-w-4xl">
          <p className="mb-4 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            Product Ecosystem
          </p>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Products built for contractors and automotive businesses
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            Explore the systems, themes, and future tools Olmem Technical Solutions is building
            to help businesses launch faster, manage content easier, and grow
            with software designed for real-world workflows.
          </p>
        </div>
      </section>

      {/* Product Cards */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-8 lg:grid-cols-3">
          <Link
            href="/products/contractor-cms"
            className="group rounded-2xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur transition hover:border-orange-500"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Flagship Product
            </p>
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              Contractor CMS
            </h2>
            <p className="mb-6 text-gray-400 leading-7">
              A contractor-focused content management system built to simplify
              service pages, project galleries, SEO, and long-term site management.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="rounded-lg bg-black/30 px-4 py-3">Service page editing</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Built-in SEO structure</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Managed or self-managed options</div>
            </div>

            <div className="mt-8 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
              View Contractor CMS →
            </div>
          </Link>

          <Link
            href="/products/themes"
            className="group rounded-2xl border border-white/10 bg-zinc-900/80 p-8 backdrop-blur transition hover:border-orange-500"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Design System
            </p>
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              Website Themes
            </h2>
            <p className="mb-6 text-gray-400 leading-7">
              Professional starter themes designed for contractor and automotive
              businesses that need a strong foundation and room to grow.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="rounded-lg bg-black/30 px-4 py-3">Contractor-focused layouts</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Automotive-ready structure</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Custom theme path available</div>
            </div>

            <div className="mt-8 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
              Explore Themes →
            </div>
          </Link>

          <Link
            href="/products/future-tools"
            className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-orange-500"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Expansion
            </p>
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              Future Tools
            </h2>
            <p className="mb-6 text-gray-400 leading-7">
              Upcoming subscriber-requested tools, automation ideas, and industry-specific
              features that expand the Olmem Technical Solutions platform over time.
            </p>

            <div className="space-y-3 text-sm text-gray-300">
              <div className="rounded-lg bg-black/30 px-4 py-3">Subscriber suggestion system</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Automation-focused features</div>
              <div className="rounded-lg bg-black/30 px-4 py-3">Modular platform growth</div>
            </div>

            <div className="mt-8 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
              See Future Direction →
            </div>
          </Link>
          <Link
            href="/products/cms"
            className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-orange-500"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Add‑on
            </p>
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              CMS Plugin
            </h2>
            <p className="mb-6 text-gray-600 leading-7">
              Lightweight content editing tools you can install on any site to
              manage pages, media, and SEO without a full rebuild.
            </p>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="rounded-lg bg-gray-100 px-4 py-3">Page builder</div>
              <div className="rounded-lg bg-gray-100 px-4 py-3">Media library</div>
              <div className="rounded-lg bg-gray-100 px-4 py-3">SEO helpers</div>
            </div>

            <div className="mt-8 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
              Learn about the CMS Plugin →
            </div>
          </Link>
          <Link
            href="/services/web-development"
            className="group rounded-2xl border border-gray-200 bg-white p-8 transition hover:border-orange-500"
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
              Service
            </p>
            <h2 className="mb-4 text-3xl font-bold text-orange-500">
              Web Development
            </h2>
            <p className="mb-6 text-gray-600 leading-7">
              Custom contractor and automotive websites built for ease and SEO.
            </p>

            <div className="my-4 text-sm text-gray-700">
              <div>Contractor: $100 / 1 week</div>
              <div>Automotive: $1,000+ / 4 weeks</div>
            </div>

            <div className="mt-8 text-sm font-semibold text-orange-400 transition group-hover:text-orange-300">
              Discover development services →
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
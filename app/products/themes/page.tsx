import Link from "next/link";

export default function ThemesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Product
          </p>
          <h1 className="mb-4 text-5xl font-bold text-orange-500">
            Contractor Website Package Template
          </h1>
          <p className="text-lg text-gray-400">
            Our reusable contractor template powers a scalable offer: $999 setup, $35/month hosting, and optional $100/month maintenance + security.
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-blue-500/30 bg-blue-500/10 p-6">
          <h2 className="text-2xl font-semibold text-white">Included in Setup + Hosting</h2>
          <p className="mt-2 text-gray-300">
            Theme setup, Home, Services, Contact form, Service Areas, Gallery, and SEO-ready page structure with managed hosting.
          </p>
          <p className="mt-2 text-sm text-blue-200">
            Every site includes SEO support: use any WordPress SEO plugin plus our SEO plugin for free.
          </p>
          <Link href="/subscription" className="mt-4 inline-block text-blue-300 hover:text-blue-200">
            Start package intake →
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-orange-500">
              Contractor Theme
            </h2>
            <p className="mb-4 text-gray-400">
              A conversion-focused starter for trades and contractor businesses with reusable page sections.
            </p>
            <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
              Start setup intake →
            </Link>
          </div>


          <div className="rounded-xl border border-white/10 bg-zinc-900/80 p-6">
            <h2 className="mb-3 text-2xl font-semibold text-orange-500">
              Custom Theme Path
            </h2>
            <p className="mb-4 text-gray-400">
              For businesses that want the same package foundation with custom branding and advanced layout adjustments.
            </p>
            <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
              Start intake →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
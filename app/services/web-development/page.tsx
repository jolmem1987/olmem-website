import Button from "@/components/ui/button";

export default function WebDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-white text-gray-900">
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Web Development Services
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          We build custom contractor and automotive websites that are easy to
          manage and built for SEO right out of the box.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Who it's for</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Contractors who want fast, affordable web presence and automotive
          specialists who need complex data integrations. Every site ships with
          the theme and any Olmem plugin you’re using.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900">Pricing &amp; timeline</h2>
        <ul className="mt-4 space-y-4 text-gray-600">
          <li>
            <strong>Setup fee</strong>: $999 one-time to configure and launch your website.
          </li>
          <li>
            <strong>Hosting</strong>: $35/month for every site we build or acquire through us.
          </li>
        </ul>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Optional maintenance + security is available for $100/month if you want
          us to handle ongoing updates, protection, and technical support.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900">Easy SEO, always</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          SEO is included in every website we build or manage. You can use any
          WordPress SEO plugin, and you also get our SEO plugin for free so you
          can manage SEO yourself.
        </p>
        <div className="mt-8">
          <Button href="/contact">Get Started</Button>
        </div>
      </section>
    </main>
  );
}

import Button from "@/components/ui/button";

export default function CMSDashboardPage() {
  return (
    <main className="relative overflow-hidden bg-white text-gray-900">
      <section className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight">
          Contractor CMS Dashboard
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-gray-600">
          A centralized management panel that lets contractors update every
          aspect of their website without touching code. Change service
          offerings, upload project photos, adjust SEO settings and tweak
          layout elements all from one place.
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-900">Core tools</h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Every piece of your contractor site can be edited here – from the
          homepage tiles to the service pages and SEO metadata. Open any area
          below to get started.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Items on Sale",
            "About Us",
            "Services",
            "Service Areas",
            "Theme Images",
            "Project Photos",
            "Contact Info",
            "Site Structure",
          ].map((label) => (
            <div
              key={label}
              className="rounded-lg bg-gray-50 p-6 shadow hover:shadow-md transition"
            >
              <p className="mb-4 font-semibold text-gray-800">{label}</p>
              <Button href="#" className="text-sm">
                Open
              </Button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

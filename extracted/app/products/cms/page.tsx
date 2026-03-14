import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionheading";

export default function CMSPluginPage() {
  return (
    <main className="relative overflow-hidden bg-white text-gray-900">
      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32 text-center">
        <p className="mb-4 inline-block rounded-full border border-blue-300 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 backdrop-blur">
          Plugin
        </p>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
          Content Management Plugin
        </h1>
        <p className="max-w-3xl mx-auto text-lg leading-8 text-gray-600 md:text-xl">
          A lightweight, extensible CMS plugin that gives you full control of your
          site’s content without leaving the platform you already love. Add
          pages, edit articles, manage media and metadata—all from a clean
          in‑software interface.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <Button href="/contact">Get Help</Button>
          <Button href="/contact" variant="secondary">
            Ask a Question
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <SectionHeading title="What it does" description="Everything you need to keep content fresh without coding." />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Page Builder</h3>
            <p className="text-gray-600">
              Drag‑and‑drop layout elements, save templates, and build new pages
              in minutes.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Rich Text
              Editor</h3>
            <p className="text-gray-600">
              Fully formatted post editor with media support, previews, and
              revision history.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">SEO
              Controls</h3>
            <p className="text-gray-600">
              Set titles, descriptions, and schema — the plugin handles the rest
              so search engines can index your updates immediately.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Media
              Library</h3>
            <p className="text-gray-600">
              Upload, organize, and reuse images and files across pages with an
              intuitive gallery.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">
              Role Management
            </h3>
            <p className="text-gray-600">
              Grant editors, writers, and admins exactly the permissions they
              need without exposing sensitive settings.
            </p>
          </div>
          <div className="group rounded-2xl border border-gray-200 bg-gray-50 p-6 transition hover:border-blue-500/30 hover:bg-white">
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Extensible
              API</h3>
            <p className="text-gray-600">
              Integrate your own plugins or third‑party tools via simple hooks
              and webhooks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to take control of your content?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 mb-8">
          Contact us for setup assistance or explore the admin documentation to
          get started today.
        </p>
        <Button href="/contact" className="px-8 py-3">
          Contact Support
        </Button>
      </section>
    </main>
  );
}

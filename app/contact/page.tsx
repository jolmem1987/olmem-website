import Image from "next/image";
import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionheading";

function CmsSlot({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-4 shadow-sm backdrop-blur">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-sm font-semibold text-gray-900">{title}</h4>
          <p className="mt-1 text-xs text-gray-600">{description}</p>
        </div>

        <span className="inline-flex items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-600">
          <span className="text-gray-600">📷</span>
          CMS
        </span>
      </div>

      <div className="mt-3 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
        <div className="flex aspect-video items-center justify-center px-6 text-center">
          <div className="flex flex-col items-center gap-2">
            <div className="flex size-10 items-center justify-center rounded-xl border border-dashed border-gray-300 bg-white text-gray-500">
              <span className="text-gray-500">📷</span>
            </div>
            <p className="text-xs font-medium text-gray-700">CMS Image Placeholder</p>
            <p className="text-[11px] text-gray-500">
              Replace this block with your screenshot in the visual editor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      {/* ultra-subtle brand glows (blue/orange) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-44 right-[-80px] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-90px] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="border-b border-gray-100/70">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mx-auto max-w-3xl text-center">
            {/* LOGO SLOT (swap src in your editor) */}
            <div className="mb-6 flex justify-center">
              <div className="relative h-16 w-16 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
                <Image
                  src="/brand/logo.jpeg"
                  alt="OLMEM Contractor CMS"
                  fill
                  className="object-contain p-2"
                  priority
                />
              </div>
            </div>

            <SectionHeading title="Get in Touch" />
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Our standard model is $999 setup + $35/month hosting, with optional maintenance + security for $100/month.
              Tell us what you need and we&apos;ll get back to you quickly.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:jeff@olmemtech.com"
                className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white/70 px-4 py-2 text-sm font-medium text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
              >
                <span className="text-gray-700">📧</span>
                <span>
                  Email: <span className="text-blue-600 underline">jeff@olmemtech.com</span>
                </span>
              </a>
              <span className="text-sm text-gray-500">or use the form below</span>
            </div>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          {/* LEFT */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h2 className="text-xl font-semibold text-gray-900">Why Choose Us?</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                Our contractor website system keeps pricing simple and scalable: one-time setup,
                reliable monthly hosting, and optional managed maintenance. SEO is included on every
                site with access to any WordPress SEO plugin plus our plugin for free.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
                    <span className="text-gray-700">⚙️</span>
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">Setup + Hosting</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  $999 one-time setup fee and $35/month hosting gets your site launched with complete
                  control over content, branding, and SEO settings.
                </p>
              </div>

              <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-700">
                    <span className="text-gray-700">✨</span>
                  </span>
                  <h3 className="text-base font-semibold text-gray-900">Maintenance + Security (Optional)</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">
                  Add $100/month if you want us to handle updates, security hardening, and ongoing
                  optimization while you focus on running your business.
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-gray-900">What you’ll get</h3>
              <ul className="mt-3 grid gap-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 text-blue-600">✓</span>
                  <span>Faster content updates (services, locations, photos, testimonials)</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 text-blue-600">✓</span>
                  <span>SEO-friendly structure and controls built into the workflow</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 text-blue-600">✓</span>
                  <span>Use any WordPress SEO plugin plus our SEO plugin for free</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-0.5 h-4 w-4 shrink-0 text-blue-600">✓</span>
                  <span>Clean branding tools to stay consistent across pages</span>
                </li>
              </ul>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
              <h3 className="text-lg font-semibold text-gray-900">CMS previews</h3>
              <p className="mt-2 text-sm text-gray-600">
                Replace these placeholders with CMS screenshots in your visual editor.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <CmsSlot title="Dashboard overview" description="Quick edits, SEO checks, publishing." />
              <CmsSlot title="Page editor" description="Edit services + locations easily." />
              <CmsSlot title="SEO tools" description="Titles, meta, schema, hints." />
              <CmsSlot title="Branding controls" description="Logo, colors, components." />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="mt-14 rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          <h3 className="text-2xl font-bold text-gray-900">Ready to chat?</h3>
          <p className="mt-2 text-sm text-gray-600">
            Fill out the form below or email us directly at {" "}
            <a href="mailto:jeff@olmemtech.com" className="text-blue-600 underline">
              jeff@olmemtech.com
            </a>
            .
          </p>

          <form className="mt-6 grid gap-5">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-100"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-100"
            />

            <label className="grid gap-2 text-sm font-medium text-gray-700">
              Service interested in
              <select className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 font-normal text-gray-900 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-100">
                <option>Setup + Hosting ($999 one-time + $35/month)</option>
                <option>Maintenance + Security ($100/month optional)</option>
                <option>SEO setup + plugin access</option>
                <option>Branding/design</option>
                <option>Other</option>
              </select>
            </label>

            <textarea
              rows={4}
              placeholder="Briefly describe what you do (your business)"
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-100"
            />
            <textarea
              rows={4}
              placeholder="How can we help you?"
              className="w-full resize-none rounded-xl border border-gray-300 bg-white px-4 py-2.5 shadow-sm outline-none transition focus:border-gray-400 focus:ring-2 focus:ring-blue-100"
            />

            <Button type="submit" className="w-full rounded-xl">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </main>
  );
}
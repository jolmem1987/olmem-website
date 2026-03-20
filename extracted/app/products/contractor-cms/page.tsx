import Button from "@/components/ui/button";
import SectionHeading from "@/components/ui/sectionheading";
import ClientLoginLink from "@/components/ClientLoginLink";

export default function ContractorCMSPage() {
  const testimonials = [
    {
      name: "Mike Chen",
      company: "Century Roofing",
      quote: "We updated our entire service menu in 15 minutes. No more waiting for developer changes.",
      rating: 5
    },
    {
      name: "Sarah Williams",
      company: "Elite HVAC Services",
      quote: "The SEO structure built in from day one gave us better Google rankings within weeks.",
      rating: 5
    },
    {
      name: "John Rodriguez",
      company: "Rodriguez Plumbing & Electric",
      quote: "Our clients love the project gallery. We close more jobs since they can see our past work.",
      rating: 5
    }
  ];

  return (
    <main className="relative overflow-hidden bg-white text-gray-900">
      <style>{`
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translate(-800px, -400px) scale(0.2) rotate(-40deg);
          }
          10% {
            opacity: 1;
          }
          85% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate(100px, 100px) scale(1) rotate(0deg);
          }
        }

        @keyframes starTrail {
          0% {
            opacity: 0;
            width: 0;
            boxShadow: 0 0 10px rgba(59, 130, 246, 0), 0 0 20px rgba(249, 115, 22, 0);
          }
          10% {
            opacity: 0.8;
          }
          50% {
            width: 400px;
            boxShadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(249, 115, 22, 0.4);
          }
          100% {
            opacity: 0;
            width: 600px;
            boxShadow: 0 0 10px rgba(59, 130, 246, 0), 0 0 20px rgba(249, 115, 22, 0);
          }
        }

        .logo-shooting-star {
          animation: shootingStar 2.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }

        .star-trail {
          animation: starTrail 2.5s cubic-bezier(0.4, 0.0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-20 top-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute right-20 top-32 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl" />
        <div className="absolute bottom-20 left-1/3 h-64 w-64 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* Hero */}
      <section className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
       <div className="max-w-4xl">
          <p className="mb-4 inline-block rounded-full border border-blue-300 bg-blue-50 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-blue-600 backdrop-blur">
            Product
          </p>

          <h1 className="mb-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-7xl">
            Contractor CMS
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-gray-600 md:text-xl">
            A contractor-focused website management system built to make updates,
            service content, project galleries, and SEO easier to manage without
            rebuilding your site.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
             <Button href="/contact">Request a Demo</Button>
             <Button href="/contact" variant="secondary">
               Contact Sales
             </Button>
          </div>

        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-6 backdrop-blur transition hover:border-orange-300 hover:bg-orange-50/70">
            <p className="text-2xl font-bold text-orange-600">SEO-Ready</p>
            <p className="mt-2 text-sm text-gray-600">
              Structured pages designed for visibility.
            </p>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-6 backdrop-blur transition hover:border-orange-300 hover:bg-orange-50/70">
            <p className="text-2xl font-bold text-orange-600">Self-Managed</p>
            <p className="mt-2 text-sm text-gray-600">
              Contractors can update their own content.
            </p>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-6 backdrop-blur transition hover:border-orange-300 hover:bg-orange-50/70">
            <p className="text-2xl font-bold text-orange-600">Managed Option</p>
            <p className="mt-2 text-sm text-gray-600">
              Olmem Tech can handle updates for clients.
            </p>
          </div>

          <div className="group rounded-xl border border-gray-200 bg-gray-50/70 p-6 backdrop-blur transition hover:border-orange-300 hover:bg-orange-50/70">
            <p className="text-2xl font-bold text-orange-600">Expandable</p>
            <p className="mt-2 text-sm text-gray-600">
              Built to grow into a larger software platform.
            </p>
          </div>
        </div>

        {/* Shooting Star Logo */}
        <div className="mt-20 relative h-40 flex items-center">
          <div className="star-trail absolute left-0 top-1/2 h-1 bg-gradient-to-r from-blue-500 via-orange-500 to-transparent rounded-full" />
          <div className="logo-shooting-star absolute left-0 top-1/2 -translate-y-1/2">
            <img src="/olmem-tech-logo.png" alt="Logo" className="h-20 w-auto drop-shadow-lg" />
          </div>
        </div>
        </div>
      </section>

      {/* Product Preview Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Dashboard Preview
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Built like a real platform, not just a website backend
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-gray-600 mb-8">
              Contractor CMS is designed to feel simple for clients while still
              giving your business room to grow into a full software platform.
              It centralizes service content, project showcases, SEO settings,
              and future subscriber tools in one system.
            </p>

            <div className="mt-8 space-y-4">
              <div className="group rounded-xl border border-gray-200 bg-white/70 p-5 transition hover:border-blue-500/30 hover:bg-white/90">
                <h3 className="font-semibold text-orange-500 flex items-center gap-2">
                  <span className="text-lg">📋</span> Service Management
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Update service pages, pricing notes, service areas, and descriptions.
                </p>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-white/70 p-5 transition hover:border-blue-500/30 hover:bg-white/90">
                <h3 className="font-semibold text-orange-500 flex items-center gap-2">
                  <span className="text-lg">🎨</span> Project Galleries
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Add job photos and completed work to build trust and credibility.
                </p>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-white/70 p-5 transition hover:border-blue-500/30 hover:bg-white/90">
                <h3 className="font-semibold text-orange-500 flex items-center gap-2">
                  <span className="text-lg">💬</span> Subscriber Suggestions
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  Future subscribers can submit ideas for tools and improvements directly.
                </p>
              </div>
            </div>
          </div>

          {/* Fake SaaS Dashboard Preview */}
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-md">
            <div className="mb-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <div>
                <p className="text-sm text-gray-400">Contractor CMS</p>
                <h3 className="text-xl font-semibold text-gray-900">Dashboard</h3>
              </div>
              <div className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                Live Preview
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="group rounded-xl border border-gray-200 bg-gray-100/40 p-4 transition hover:border-orange-500/30">
                <p className="text-sm text-gray-400">Services</p>
                <p className="mt-2 text-2xl font-bold text-orange-500">12</p>
                <p className="mt-1 text-xs text-gray-500">Active service pages</p>
              </div>

              <div className="group rounded-xl border border-gray-200 bg-gray-100/40 p-4 transition hover:border-orange-500/30">
                <p className="text-sm text-gray-400">Projects</p>
                <p className="mt-2 text-2xl font-bold text-orange-500">38</p>
                <p className="mt-1 text-xs text-gray-500">Gallery entries</p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-100/40 p-4 md:col-span-2">
                <div className="mb-3 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">SEO Health</p>
                  <p className="text-xs text-blue-400">Optimized</p>
                </div>
                <div className="h-2 w-full rounded-full bg-white/10">
                  <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-orange-500 to-blue-500" />
                </div>
                <p className="mt-2 text-xs text-gray-500">
                  Structured content, service pages, and metadata configured.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-gray-100/40 p-4 md:col-span-2">
                <p className="mb-3 text-sm font-medium text-gray-900">Recent Activity</p>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10">
                    <span>Updated Roofing Services page</span>
                    <span className="text-xs text-gray-500">2h ago</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10">
                    <span>Added 6 gallery photos</span>
                    <span className="text-xs text-gray-500">Yesterday</span>
                  </div>
                  <div className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 transition hover:bg-white/10">
                    <span>Subscriber feature request submitted</span>
                    <span className="text-xs text-gray-500">3d ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Core Features
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Everything needed to manage a contractor site</h2>
          <p className="mt-4 max-w-2xl text-gray-600">Powerful tools designed specifically for contractors, with zero learning curve.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">📄</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Service Page Editing</h3>
            <p className="text-gray-400">
              Easily update service offerings, service areas, descriptions, and business details.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">🔍</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Built-In SEO</h3>
            <p className="text-gray-400">
              Structured content designed to support strong search visibility from the start.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">🖼️</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Project Galleries</h3>
            <p className="text-gray-400">
              Showcase completed jobs and prove credibility with visual project examples.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">⚙️</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Managed or Self-Managed</h3>
            <p className="text-gray-400">
              Clients can manage their own site, or Olmem Tech can handle it as a service.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">💡</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Subscriber Suggestions</h3>
            <p className="text-gray-400">
              Give subscribers a direct way to shape future product improvements and tools.
            </p>
          </div>

          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-6 backdrop-blur transition hover:border-orange-500/40 hover:bg-white/95 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <div className="mb-3 text-3xl text-orange-500">🚀</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900">Expandable Platform</h3>
            <p className="text-gray-400">
              Built as a foundation for future contractor software and automotive integrations.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="relative mx-auto max-w-7xl border-t border-gray-200 px-6 py-24 md:py-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
              Why it matters
            </p>
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900">
              Built for real contractor workflows
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Most small business sites are hard to maintain, not built for SEO,
              and not designed around how contractors actually update content.
              Contractor CMS changes that by focusing on the exact workflow your
              customers need.
            </p>
          </div>

          <div className="space-y-5">
            <div className="group rounded-xl border border-gray-200 bg-white/70 p-6 transition hover:border-orange-500/30 hover:bg-white/90 hover:shadow-[0_0_25px_rgba(249,115,22,0.08)]">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-2xl text-orange-500">⚡</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Faster updates</h3>
                  <p className="mt-2 text-gray-400">
                    Make changes without digging through messy page builders or code.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-xl border border-gray-200 bg-white/70 p-6 transition hover:border-orange-500/30 hover:bg-white/90 hover:shadow-[0_0_25px_rgba(249,115,22,0.08)]">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-2xl text-orange-500">📈</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Better search visibility</h3>
                  <p className="mt-2 text-gray-400">
                    Start with SEO-conscious structure instead of trying to fix it later.
                  </p>
                </div>
              </div>
            </div>

            <div className="group rounded-xl border border-gray-200 bg-white/70 p-6 transition hover:border-orange-500/30 hover:bg-white/90 hover:shadow-[0_0_25px_rgba(249,115,22,0.08)]">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-2xl text-orange-500">🔮</div>
                <div>
                  <h3 className="font-semibold text-gray-900">Future-ready platform</h3>
                  <p className="mt-2 text-gray-400">
                    Add more tools, subscriber features, and integrations over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Real Results
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Contractors love it</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white/60 p-6 transition hover:border-blue-500/30 hover:bg-white/80 backdrop-blur"
            >
              <div className="mb-4 flex gap-1">
                {Array(testimonial.rating).fill(0).map((_, i) => (
                  <span key={i} className="text-orange-500">★</span>
                ))}
              </div>
              <p className="mb-6 text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-24">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
            Simple Pricing
          </p>
          <h2 className="text-4xl font-bold text-gray-900">Choose what works best for you</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="group rounded-2xl border border-gray-200 bg-white/80 p-8 backdrop-blur transition hover:border-orange-500/30 hover:shadow-[0_0_30px_rgba(249,115,22,0.1)]">
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Self-Managed</h3>
            <p className="mb-6 text-gray-400">Perfect for contractors who want full control</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-orange-500">Custom</p>
              <p className="text-sm text-gray-500">Based on your site size & needs</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-300">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Full content management</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Service & project updates</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Built-in SEO tools</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-blue-400 font-bold">✓</span>
                <span>Email & chat support</span>
              </li>
            </ul>
            <Button href="/contact" variant="secondary" className="w-full">Get Started</Button>
          </div>

          <div className="group relative rounded-2xl border border-orange-500/30 bg-white/80 p-8 backdrop-blur transition hover:border-orange-500/60 hover:shadow-[0_0_40px_rgba(249,115,22,0.2)]">
            <div className="absolute -top-3 left-8 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-gray-900">
              Most Popular
            </div>
            <h3 className="mb-2 text-2xl font-bold text-gray-900">Managed Service</h3>
            <p className="mb-6 text-gray-400">We handle everything, you focus on your business</p>
            <div className="mb-6">
              <p className="text-4xl font-bold text-orange-500">Custom</p>
              <p className="text-sm text-gray-500">Dedicated content manager included</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex gap-3 text-gray-300">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Everything in Self-Managed</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Monthly content updates</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Dedicated account manager</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Priority support</span>
              </li>
              <li className="flex gap-3 text-gray-300">
                <span className="text-orange-500 font-bold">✓</span>
                <span>Analytics & optimization</span>
              </li>
            </ul>
            <Button href="/subscription" className="w-full">Get Started</Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-3xl border border-gray-200 bg-gradient-to-br from-white to-gray-100 p-10 text-center shadow-[0_0_50px_rgba(249,115,22,0.08)]">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            Get Started
          </p>
          <h2 className="mb-4 text-4xl font-bold">See how Contractor CMS can work for your business</h2>
          <p className="mx-auto mb-8 max-w-2xl text-gray-400">
            Launch faster, manage content easier, and give contractors a website system built for growth. Get a demo in the next 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="/subscription" className="rounded-lg bg-orange-500 px-8 py-3 font-semibold text-gray-900 transition hover:bg-orange-600 duration-200">
              Subscribe & Access CMS
            </Button>
            <Button href="/contact">Request a Demo</Button>
            <button className="rounded-lg border border-blue-500 px-8 py-3 font-semibold text-gray-900 transition hover:border-blue-400 hover:bg-blue-500/10 duration-200">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

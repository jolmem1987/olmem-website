import Link from "next/link";

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

function IconLightbulb(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18h6M10 22h4M9.09 3.54A8 8 0 0 1 16.91 3.54a8 8 0 0 1 0 14.92A8 8 0 0 1 9.09 3.54Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 6v2M12 14v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

function IconTrendingUp(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M23 6l-9.5 9.5-5-5L1 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6h6v6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
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

function IconUsers(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function StoryCard({
  title,
  description,
  Icon,
  accent = "blue",
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<SvgProps>;
  accent?: "blue" | "orange" | "slate";
}) {
  const accentClasses =
    accent === "orange"
      ? {
          bg: "bg-orange-50",
          text: "text-orange-600",
          border: "border-orange-200",
        }
      : accent === "slate"
      ? {
          bg: "bg-gray-50",
          text: "text-gray-700",
          border: "border-gray-200",
        }
      : {
          bg: "bg-blue-50",
          text: "text-blue-600",
          border: "border-blue-200",
        };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
      <div className="flex items-center gap-4 mb-4">
        <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${accentClasses.bg} ${accentClasses.text}`}>
          <Icon className="h-6 w-6" />
        </span>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
      </div>
      <p className="text-lg leading-relaxed text-gray-600">{description}</p>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      {/* subtle brand glows */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-44 right-[-80px] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-90px] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      {/* HERO */}
      <section className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
          About Us
        </span>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-900">
          From automotive data headaches to contractor solutions
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          What started as solving one company's data problems has grown into a mission:
          equip small businesses with tools that let them own their content, their traffic, and their independence.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/services"
            className="rounded-xl border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
          >
            Our services
          </Link>
          <Link
            href="/contact"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            Get in touch
          </Link>
          <Link
            href="/subscription"
            className="rounded-xl border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
          >
            Subscribe & Access CMS
          </Link>
        </div>
      </section>

      {/* STORY CARDS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <StoryCard
            title="The Spark"
            description="While building a website for my own auto parts company, I dealt with constantly changing product data and frustrating third-party integrators. To eliminate that pain, I built internal software that sorted and managed the data automatically. The relief was immense, and I realized others could benefit as well."
            Icon={IconLightbulb}
            accent="orange"
          />

          <StoryCard
            title="Expanding the Vision"
            description="Contractors face similar struggles with content, SEO, and platform costs. Many pay inflated prices for advertising, while real organic traffic comes from search engines. I saw an opportunity to bring the same data-driven, DIY philosophy to this space."
            Icon={IconTrendingUp}
            accent="blue"
          />

          <StoryCard
            title="Building for Independence"
            description="Our plugins include built-in SEO tools so clients never have to pay extra for optimization. Everything is designed so anyone can set up and manage their own content without needing a developer. We know data keeps changing, so our platforms are flexible and extensible."
            Icon={IconShield}
            accent="slate"
          />

          <StoryCard
            title="Join the Movement"
            description="Whether you're running an automotive shop or a contracting business, Olmem Technical Solutions is built to give you control, lower your costs, and grow with you. We believe software should adapt to your needs—not the other way around."
            Icon={IconUsers}
            accent="blue"
          />
        </div>
      </section>

      {/* VALUES */}
      <section className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
            What drives us
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Simple principles that guide everything we build.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur text-center">
            <div className="text-3xl text-orange-500 mb-3">🎯</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Problem-First</h3>
            <p className="text-sm text-gray-600">We start with real business problems, not trendy features.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur text-center">
            <div className="text-3xl text-blue-500 mb-3">🔧</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">DIY Power</h3>
            <p className="text-sm text-gray-600">Give businesses the tools to manage their own success.</p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur text-center">
            <div className="text-3xl text-green-500 mb-3">📈</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Organic Growth</h3>
            <p className="text-sm text-gray-600">Focus on SEO and content that drives real, sustainable traffic.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

// app/services/page.tsx
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

function IconCode(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M9 18 3 12l6-6M15 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 5 11 19"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function IconBot(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 3v3"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M7 8h10a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M9 13h.01M15 13h.01"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M9 16c1 1 5 1 6 0"
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

function IconCheck(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M20 7 10.5 16.5 4 10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconBadge(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l3 2 3.5.5.5 3.5 2 3-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5 16l-2-3 2-3 .5-3.5L9 4l3-2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M8.5 12l2.2 2.2L15.5 9.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconZap(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13 2 3 14h8l-1 8 10-12h-8l1-8Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ServiceCard({
  href,
  title,
  description,
  accent,
  Icon,
  bullets,
}: {
  href: string;
  title: string;
  description: string;
  accent: "orange" | "blue" | "slate";
  Icon: React.ComponentType<SvgProps>;
  bullets: string[];
}) {
  const accentClasses =
    accent === "orange"
      ? {
          ring: "hover:border-orange-400/70 hover:shadow-orange-100",
          iconBg: "bg-orange-50",
          iconText: "text-orange-600",
          title: "text-orange-600",
          link: "text-orange-500 group-hover:text-orange-400",
          pill: "border-orange-200 bg-orange-50 text-orange-700",
        }
      : accent === "blue"
      ? {
          ring: "hover:border-blue-400/70 hover:shadow-blue-100",
          iconBg: "bg-blue-50",
          iconText: "text-blue-600",
          title: "text-blue-600",
          link: "text-blue-500 group-hover:text-blue-400",
          pill: "border-blue-200 bg-blue-50 text-blue-700",
        }
      : {
          ring: "hover:border-gray-300 hover:shadow-gray-100",
          iconBg: "bg-gray-50",
          iconText: "text-gray-700",
          title: "text-gray-900",
          link: "text-gray-700 group-hover:text-gray-900",
          pill: "border-gray-200 bg-gray-50 text-gray-700",
        };

  return (
    <Link
      href={href}
      className={[
        "group relative rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur transition",
        "hover:-translate-y-0.5 hover:shadow-lg",
        accentClasses.ring,
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <span
            className={[
              "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200",
              accentClasses.iconBg,
              accentClasses.iconText,
            ].join(" ")}
          >
            <Icon className="h-5 w-5" />
          </span>

          <div>
            <h2 className={["text-2xl font-bold", accentClasses.title].join(" ")}>
              {title}
            </h2>
            <span
              className={[
                "mt-2 inline-flex items-center rounded-full border px-2.5 py-1 text-[11px] font-medium",
                accentClasses.pill,
              ].join(" ")}
            >
              Service
            </span>
          </div>
        </div>

        <IconArrowRight className="mt-2 h-5 w-5 text-gray-300 transition group-hover:translate-x-0.5 group-hover:text-gray-400" />
      </div>

      <p className="mt-4 text-sm leading-relaxed text-gray-600">{description}</p>

      <ul className="mt-5 grid gap-2 text-sm text-gray-600">
        {bullets.map((b) => (
          <li key={b} className="flex items-start gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className={["mt-7 inline-flex items-center gap-2 text-sm font-semibold", accentClasses.link].join(" ")}>
        Learn more <IconArrowRight className="h-4 w-4" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-100" />
    </Link>
  );
}

function PricingCard({
  title,
  badge,
  description,
  features,
  ctaHref,
  ctaLabel,
  featured,
}: {
  title: string;
  badge?: string;
  description: string;
  features: string[];
  ctaHref: string;
  ctaLabel: string;
  featured?: boolean;
}) {
  return (
    <div
      className={[
        "relative rounded-2xl border bg-white/70 p-7 shadow-sm backdrop-blur",
        featured ? "border-gray-900/20 shadow-lg" : "border-gray-200",
      ].join(" ")}
    >
      {badge ? (
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-xs font-semibold text-gray-700">
          <IconBadge className="h-4 w-4" />
          {badge}
        </div>
      ) : null}

      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>

      <ul className="mt-5 grid gap-2 text-sm text-gray-700">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={ctaHref}
        className={[
          "mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition",
          featured ? "bg-gray-900 text-white hover:bg-gray-800" : "border border-gray-200 bg-white hover:bg-gray-50",
        ].join(" ")}
      >
        {ctaLabel} <IconArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute top-44 right-[-80px] h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute bottom-[-140px] left-[-90px] h-80 w-80 rounded-full bg-sky-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-5xl px-6 py-20 text-center">
        <span className="inline-flex items-center rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
          Services
        </span>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight">What we build for contractors</h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          A scalable contractor website system centered around a clear offer: $999 one-time setup, $35/month hosting,
          and optional maintenance + security for $100/month.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#services"
            className="rounded-xl border border-gray-200 bg-white/70 px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm backdrop-blur transition hover:bg-white"
          >
            Browse services
          </a>
          <Link
            href="/contact"
            className="rounded-xl bg-gray-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800"
          >
            Contact us
          </Link>
          <Link
            href="/subscription"
            className="rounded-xl border border-blue-500 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 shadow-sm transition hover:bg-blue-100"
          >
            Start Setup Intake
          </Link>
        </div>
      </section>

      <section id="services" className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <ServiceCard
            href="/products/themes"
            title="Contractor Websites"
            description="Professional website themes designed specifically for contractors, with built-in SEO and easy content management."
            accent="orange"
            Icon={IconCode}
            bullets={["Mobile-first responsive design", "Built-in SEO structure", "Project galleries & service pages", "Easy content updates", "Business plugin integrations"]}
          />

          <ServiceCard
            href="/products/custom-workflow-solutions"
            title="Custom Workflow Solutions"
            description="Generative & agentic AI designed to automate your unique business workflows and reduce manual work."
            accent="blue"
            Icon={IconBot}
            bullets={["Lead intake & qualification", "Automated scheduling", "AI-generated proposals & content", "Escalation paths & review", "Custom business logic"]}
          />
        </div>

        <div className="mt-10 rounded-2xl border border-gray-200 bg-white/70 p-6 text-center text-sm text-gray-600 shadow-sm backdrop-blur">
          Need something custom? We can combine services into a single build plan.
        </div>
      </section>

      <section id="pricing" className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur">
            <IconZap className="h-4 w-4" />
            Pricing tiers
          </div>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-gray-900">
            Pricing built around a scalable core package
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-gray-600">
            Start with setup + hosting, then add maintenance + security only if you want managed support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <PricingCard
            title="$999 Setup Fee"
            badge="One-time"
            description="Professional contractor site setup and launch configuration."
            features={["Contractor theme setup", "Home, Services, Contact, Service Areas, Gallery pages", "Intake + launch workflow", "Initial pre-launch edits", "WordPress setup", "SEO-ready page structure"]}
            ctaHref="/subscription"
            ctaLabel="Start setup"
            featured
          />

          <PricingCard
            title="$35/mo Hosting"
            badge="Required"
            description="Reliable monthly hosting for every site launched through us."
            features={["Managed hosting", "Site uptime monitoring", "Basic performance tuning", "SSL support", "Backups", "Platform updates"]}
            ctaHref="/subscription"
            ctaLabel="Choose hosting"
          />

          <PricingCard
            title="$100/mo Maintenance + Security"
            badge="Optional"
            description="Hands-on monthly management for businesses that want full support."
            features={["Content updates", "Security hardening", "Malware and vulnerability checks", "Priority support", "Performance optimization", "Ongoing technical maintenance"]}
            ctaHref="/subscription"
            ctaLabel="Add maintenance"
          />
        </div>

        <div className="mt-8 rounded-2xl border border-blue-200 bg-blue-50 p-5 text-center text-sm text-blue-900">
          SEO is included with every website we build or manage. Clients can use any WordPress SEO plugin and also get our SEO plugin for free to manage SEO independently.
        </div>
      </section>
    </main>
  );
}
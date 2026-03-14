"use client";

import { useState } from "react";
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

function IconStar(props: SvgProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PricingCard({
  title,
  planValue,
  price,
  billingLabel,
  description,
  features,
  popular = false,
  ctaText = "Subscribe Now",
  onSelect,
}: {
  title: string;
  planValue: string;
  price: string;
  billingLabel?: string;
  description: string;
  features: string[];
  popular?: boolean;
  ctaText?: string;
  onSelect?: (plan: string) => void;
}) {
  return (
    <div
      className={`relative rounded-2xl border bg-white/70 p-8 shadow-sm backdrop-blur ${
        popular ? "border-blue-500/50 shadow-lg" : "border-gray-200"
      }`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="inline-flex items-center gap-1 rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
            <IconStar className="h-3 w-3" />
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <div className="mt-4">
          <span className="text-4xl font-bold text-gray-900">{price}</span>
          {billingLabel && <span className="ml-1 text-gray-600">{billingLabel}</span>}
        </div>
        <p className="mt-2 text-sm text-gray-600">{description}</p>
      </div>

      <ul className="mt-8 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
            <span className="text-sm text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={() => {
          onSelect?.(planValue);
          document.getElementById("email")?.scrollIntoView({ behavior: "smooth" });
        }}
        className={`mt-8 w-full rounded-xl px-4 py-3 text-sm font-semibold transition ${
          popular
            ? "bg-blue-600 text-white hover:bg-blue-700"
            : "border border-gray-200 bg-white text-gray-900 hover:bg-gray-50"
        }`}
      >
        {ctaText}
      </button>
    </div>
  );
}

export default function SubscriptionPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [plan, setPlan] = useState("setup-hosting");

  const [businessName, setBusinessName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [businessDetails, setBusinessDetails] = useState("");
  const [logoName, setLogoName] = useState<string | null>(null);
  const [logoBase64, setLogoBase64] = useState<string | null>(null);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!agreeTerms) {
      setMessage("You must agree to the terms and conditions to continue.");
      return;
    }

    if (!businessName || !contactName || !phone) {
      setMessage("Please provide your business name, contact name, and a phone number so we can get started.");
      return;
    }

    if (password && password !== confirmPassword) {
      setMessage("Passwords do not match. Please confirm your password.");
      return;
    }

    if (password && password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          plan,
          password,
          businessName,
          contactName,
          phone,
          website,
          businessDetails,
          logoName,
          logoBase64,
        }),
      });

      if (res.ok) {
        setMessage("Thank you! Your package intake was submitted. We'll follow up with next steps within 24 hours.");
        if (typeof window !== "undefined") {
          window.localStorage.setItem("olmemSubscriberEmail", email);
        }
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setBusinessName("");
        setContactName("");
        setPhone("");
        setWebsite("");
        setBusinessDetails("");
        setLogoName(null);
        setLogoBase64(null);
        setAgreeTerms(false);
      } else {
        const data = await res.json();
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          Subscription
        </span>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-gray-900">
          Pricing Built For Scale
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
          Pay a one-time $999 setup fee, then $35/month for hosting.
          Add maintenance + security for $100/month only if you want full managed support.
        </p>
      </section>

      {/* PRICING CARDS */}
      <section className="relative mx-auto max-w-7xl px-6 pb-16">
        <div className="grid gap-8 lg:grid-cols-3">
          <PricingCard
            title="Setup Fee"
            planValue="setup-hosting"
            price="$999"
            billingLabel="one-time"
            description="One-time setup to launch your contractor website the right way."
            features={[
              "Contractor theme + setup",
              "Home, Services, and Contact pages",
              "Service Areas and Gallery pages",
              "SEO-ready structure",
              "Any WordPress SEO plugin supported",
              "Our SEO plugin included for free"
            ]}
            ctaText="Select Setup"
            popular={true}
            onSelect={setPlan}
          />

          <PricingCard
            title="Hosting"
            planValue="setup-hosting"
            price="$35"
            billingLabel="/month"
            description="Required monthly hosting for websites built or acquired through us."
            features={[
              "Reliable managed hosting",
              "SSL + uptime monitoring",
              "Routine platform updates",
              "Site backups",
              "Performance baseline tuning",
              "SEO tools ready out of the box"
            ]}
            ctaText="Select Hosting"
            onSelect={setPlan}
          />

          <PricingCard
            title="Maintenance + Security"
            planValue="setup-hosting-maintenance"
            price="$100"
            billingLabel="/month (optional)"
            description="Optional managed service for businesses that want hands-on support."
            features={[
              "Content updates",
              "Security hardening",
              "Vulnerability checks",
              "Performance optimization",
              "Priority support",
              "Managed technical upkeep"
            ]}
            ctaText="Add Maintenance"
            onSelect={setPlan}
          />
        </div>

        <div className="mt-12 rounded-2xl border border-gray-200 bg-white/70 p-6 text-center shadow-sm backdrop-blur">
          <p className="text-sm text-gray-600">
            Total to launch: $999 one-time setup + $35/month hosting. Maintenance + security is optional at $100/month.
          </p>
          <p className="mt-2 text-sm text-gray-600">
            SEO is included with every site: use any WordPress SEO plugin and our SEO plugin for free.
          </p>
        </div>
      </section>

      {/* SUBSCRIPTION FORM */}
      <section id="subscribe" className="relative mx-auto max-w-2xl px-6 pb-24">
        <div className="rounded-2xl border border-gray-200 bg-white/70 p-8 shadow-sm backdrop-blur">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900">Start Your Intake</h2>
            <p className="mt-2 text-sm text-gray-600">
              Share your business details so we can begin your website package setup
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password (optional)
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Choose a password"
                className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm password
              </label>
              <input
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm password"
                className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="business-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Business name
                </label>
                <input
                  id="business-name"
                  type="text"
                  required
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  placeholder="e.g. Acme Roofing"
                  className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="e.g. Jeff Smith"
                  className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone number
                </label>
                <input
                  id="phone"
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="(555) 123-4567"
                  className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
                  Website (optional)
                </label>
                <input
                  id="website"
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="https://yourbusiness.com"
                  className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </div>

            <div>
              <label htmlFor="business-details" className="block text-sm font-medium text-gray-700 mb-2">
                What are your goals for this site?
              </label>
              <textarea
                id="business-details"
                rows={4}
                value={businessDetails}
                onChange={(e) => setBusinessDetails(e.target.value)}
                placeholder="Tell us what you need (e.g., more leads, better SEO, scheduling, etc.)"
                className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="logo" className="block text-sm font-medium text-gray-700 mb-2">
                Company logo (optional)
              </label>
              <input
                id="logo"
                type="file"
                accept="image/*"
                onChange={async (e) => {
                  const file = e.target.files?.[0];
                  if (!file) {
                    setLogoName(null);
                    setLogoBase64(null);
                    return;
                  }

                  const allowedTypes = ["image/png", "image/jpeg", "image/gif", "image/webp", "image/svg+xml"];
                  if (!allowedTypes.includes(file.type)) {
                    setMessage("Logo must be a PNG, JPG, GIF, WebP, or SVG image.");
                    e.target.value = "";
                    return;
                  }

                  const MAX_SIZE_BYTES = 5 * 1024 * 1024; // 5 MB
                  if (file.size > MAX_SIZE_BYTES) {
                    setMessage("Logo file is too large. Maximum size is 5 MB.");
                    e.target.value = "";
                    return;
                  }

                  setLogoName(file.name);

                  const reader = new FileReader();
                  reader.onload = () => {
                    const result = reader.result;
                    if (typeof result === "string") {
                      setLogoBase64(result);
                    }
                  };
                  reader.readAsDataURL(file);
                }}
                className="block w-full text-sm text-gray-700"
              />
              {logoName && (
                <p className="mt-2 text-sm text-gray-500">Selected file: {logoName}</p>
              )}
            </div>

            <div className="flex items-start gap-3">
              <input
                id="agree-terms"
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="agree-terms" className="text-sm text-gray-700">
                I agree to the <a href="/terms" className="font-medium text-blue-600 hover:underline">Terms & Conditions</a>.
              </label>
            </div>

            <div>
              <label htmlFor="plan-select" className="block text-sm font-medium text-gray-700 mb-2">
                Choose Your Package Option
              </label>
              <select
                id="plan-select"
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="block w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="setup-hosting">Setup + Hosting ($999 one-time + $35/mo)</option>
                <option value="setup-hosting-maintenance">Setup + Hosting + Maintenance ($999 one-time + $35/mo + $100/mo)</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-gray-900 px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Processing..." : "Start Package Intake"}
              {!isSubmitting && <IconArrowRight className="ml-2 inline h-4 w-4" />}
            </button>
          </form>

          {message && (
            <div className={`mt-6 rounded-xl p-4 text-center text-sm ${
              message.includes("Thank you")
                ? "border border-green-200 bg-green-50 text-green-800"
                : "border border-red-200 bg-red-50 text-red-800"
            }`}>
              {message}
            </div>
          )}

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500">
              By subscribing, you agree to our terms of service and privacy policy.
              We'll send you account setup instructions within 24 hours.
            </p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back to home
          </Link>
        </div>
      </section>
    </main>
  );
}

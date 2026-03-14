export default function TermsPage() {
  return (
    <main className="relative isolate overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white text-gray-900">
      <section className="relative mx-auto max-w-5xl px-6 py-20">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Terms & Conditions</h1>
        <p className="mt-4 text-gray-600">
          These terms explain how Olmem Technical Solutions provides service to you. By subscribing, you agree to these terms.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900">1. Service</h2>
            <p className="mt-3 text-gray-600">
              We provide access to a CMS platform and contractor-focused website tooling. Subscription gives you access to content management,
              themes, and support features.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">2. Data & Privacy</h2>
            <p className="mt-3 text-gray-600">
              We store subscriber information securely. Sensitive fields are encrypted at rest. We will not share your information without
              consent, except as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">3. Payments</h2>
            <p className="mt-3 text-gray-600">
              Pricing is billed monthly. Cancellation will stop future billing, but any paid amounts are non-refundable unless required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">4. Support</h2>
            <p className="mt-3 text-gray-600">
              Support is provided via email. Response times may vary based on the plan selected.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900">5. Changes</h2>
            <p className="mt-3 text-gray-600">
              We may update these terms from time to time. Continued use of the service indicates acceptance of the updated terms.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}

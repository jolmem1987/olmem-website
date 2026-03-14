import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-xl font-bold text-orange-500">Olmem Technical Solutions</h3>
          <p className="text-sm text-gray-400">
            Websites and CMS solutions for contractors and automotive businesses.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">About</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-white transition-colors">Projects</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">
            Products
          </h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>
              <Link href="/products/contractor-cms" className="hover:text-white transition-colors">Contractor CMS</Link>
            </li>
            <li>
              <Link href="/products/themes" className="hover:text-white transition-colors">Website Themes</Link>
            </li>
            <li>
              <Link href="/products/custom-workflow-solutions" className="hover:text-white transition-colors">Custom Workflow Solutions</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-4 text-center text-sm text-gray-500">
        © 2026 Olmem Technical Solutions. All rights reserved.
      </div>
    </footer>
  );
}
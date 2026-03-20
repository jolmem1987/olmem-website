import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-white/10 bg-black text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        <Link href="/" className="flex items-center gap-2 leading-tight">
          <img src="/olmem-tech-logo.png" alt="Olmem logo" className="h-8 w-auto" />
          <div>
            <span className="block text-lg font-bold text-orange-500">Olmem Technical Solutions</span>
            <span className="block text-xs tracking-wide text-gray-400"></span>
          </div>
        </Link>

        <nav className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/subscription" className="text-orange-400 hover:text-orange-300">Subscribe</Link>
          <Link href="/subscriber" className="text-blue-400 hover:text-blue-300">My Account</Link>
          <Link href="/contact">Contact</Link>
        </nav>

      </div>
    </header>
  );
}

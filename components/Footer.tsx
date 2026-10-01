import Link from 'next/link';
import { DASHBOARD_URL } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 text-zinc-400 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-zinc-800">
          {/* Left: Brand & Tagline */}
          <div className="space-y-2 max-w-sm">
            <Link
              href="/"
              className="flex items-center gap-2.5 text-white font-bold tracking-tight text-xl"
            >
              <div className="w-8 h-8 rounded-lg bg-white text-zinc-950 flex items-center justify-center font-black text-base">
                M
              </div>
              <span className="text-white font-extrabold tracking-tight">Modulor</span>
            </Link>
            <p className="text-sm text-zinc-400 leading-relaxed">
              The Business OS for freelancers and solo businesses. Built for Kenya.
            </p>
          </div>

          {/* Center: Nav links */}
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-zinc-300">
            <Link href="/features" className="hover:text-white transition-colors">
              Features
            </Link>
            <Link href="/apps" className="hover:text-white transition-colors">
              Apps
            </Link>
            <Link href="/pricing" className="hover:text-white transition-colors">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href={DASHBOARD_URL}
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              Dashboard
            </a>
          </nav>
        </div>

        {/* Bottom row: copyright & details */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© 2026 Modulor. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>KES Billing</span>
            <span>·</span>
            <span>M-Pesa Supported</span>
            <span>·</span>
            <span>Nairobi, Kenya</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

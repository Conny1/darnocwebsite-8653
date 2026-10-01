'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { DASHBOARD_URL, LOGIN_URL } from '@/lib/constants';

interface NavItem {
  label: string;
  href: string;
}

const NAV_LINKS: NavItem[] = [
    { label: 'Home', href: '/' },
  { label: 'Features', href: '/features' },
  { label: 'Apps', href: '/apps' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },

];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-200 border-b bg-white/90 backdrop-blur-md border-zinc-200">
      <div className="flex items-center justify-between h-16 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark & Icon */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-zinc-950 font-bold tracking-tight text-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 rounded-md"
        >
          <div className="flex items-center justify-center w-8 h-8 text-base font-black text-white rounded-lg shadow-sm bg-zinc-900">
            M
          </div>
          <span className="font-extrabold tracking-tight text-zinc-900">Modulor</span>
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="items-center hidden gap-8 text-sm font-medium md:flex text-zinc-600">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? 'text-zinc-950 font-semibold'
                    : 'text-zinc-600 hover:text-zinc-950'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="items-center hidden gap-3 md:flex">
          <a
            href={LOGIN_URL}
            className="px-3.5 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 rounded-xl transition-colors whitespace-nowrap"
          >
            Sign In
          </a>
          <a
            href={DASHBOARD_URL}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl transition-colors shadow-sm whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
          >
            Get Started
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 transition-colors rounded-lg text-zinc-700 hover:text-zinc-950 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="px-4 pt-3 pb-5 space-y-3 duration-200 bg-white border-b shadow-lg md:hidden border-zinc-200 animate-in slide-in-from-top">
          <div className="flex flex-col space-y-1">
            {NAV_LINKS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-zinc-100 text-blue-600 font-semibold'
                      : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`px-3 py-2 text-base font-medium rounded-lg transition-colors ${
                pathname === '/contact'
                  ? 'bg-zinc-100 text-blue-600 font-semibold'
                  : 'text-zinc-700 hover:bg-zinc-50 hover:text-zinc-950'
              }`}
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-2 pt-2 border-t border-zinc-100">
            <a
              href={LOGIN_URL}
              className="w-full text-center py-2.5 text-sm font-medium text-zinc-800 bg-zinc-100 hover:bg-zinc-200 rounded-xl transition-colors"
            >
              Sign In
            </a>
            <a
              href={DASHBOARD_URL}
              className="w-full flex items-center justify-center gap-1.5 py-2.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-sm"
            >
              Get Started
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

'use client';

import { useState } from 'react';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  ArrowRight,
  ShieldCheck,
  Check,
  Megaphone,
  Boxes,
  Timer,
  Sparkles,
  Layers,
  Globe,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DASHBOARD_URL, MODULOR_APPS } from '@/lib/constants';

export default function AppsPage() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }
    setErrorMsg('');
    setSubscribed(true);
  };

  const getAppIcon = (id: string) => {
    switch (id) {
      case 'crm':
        return Users;
      case 'invoicing':
        return Receipt;
      case 'projects':
        return CheckSquare;
      case 'calendar':
        return Calendar;
      case 'documents':
        return FileText;
      default:
        return Layers;
    }
  };

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-zinc-900 selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="px-4 pt-16 pb-16 mx-auto text-center sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 sm:px-6 lg:px-8 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <span className="px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase rounded-md bg-blue-50">
              App Marketplace
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Install What You Need.{' '}
              <span className="block font-serif italic font-normal text-zinc-700 sm:inline">
                Pay for What You Use.
              </span>
            </h1>
            <p className="max-w-3xl mx-auto mt-6 text-lg leading-relaxed sm:text-xl text-zinc-600 text-balance">
              Every app works independently or connects with your other installed apps. Start with
              one, add more as your business grows.
            </p>
          </div>
        </section>

        {/* HOW IT WORKS - 3 STEPS */}
        <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto mb-12 text-center">
              <span className="text-xs font-bold tracking-wider uppercase text-zinc-400">
                Getting Started
              </span>
              <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl text-zinc-900">
                How Modulor Works
              </h2>
            </div>

            <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-3">
              {/* Step 1 */}
              <div className="relative p-6 bg-white border shadow-xs border-zinc-200 rounded-2xl">
                <div className="flex items-center justify-center mb-4 text-sm font-black text-white w-9 h-9 rounded-xl bg-zinc-900">
                  1
                </div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">
                  Create your free workspace
                </h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Sign up in seconds with zero credit card required. Your core workspace and
                  dashboard are free forever.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative p-6 bg-white border shadow-xs border-zinc-200 rounded-2xl">
                <div className="flex items-center justify-center mb-4 text-sm font-black text-white bg-blue-600 w-9 h-9 rounded-xl">
                  2
                </div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">Browse and install apps</h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Pick only the tools your business needs right now. Test any tool with an automatic
                  30-day free trial.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative p-6 bg-white border shadow-xs border-zinc-200 rounded-2xl">
                <div className="flex items-center justify-center mb-4 text-sm font-black text-white w-9 h-9 rounded-xl bg-emerald-600">
                  3
                </div>
                <h3 className="mb-2 text-base font-bold text-zinc-900">Run your business</h3>
                <p className="text-sm leading-relaxed text-zinc-600">
                  Everything works together from one place. Seamless Kenyan M-Pesa billing, client
                  tracking, and task management.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* APP GRID */}
        <section className="py-20 bg-white lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center mb-14">
              <span className="px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase rounded-md bg-blue-50">
                Catalog
              </span>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900">
                Available & Upcoming Apps
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                Each app functions as a standalone system or connects into a unified workflow.
              </p>
            </div>

            <div className="grid max-w-6xl grid-cols-1 gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3">
              {MODULOR_APPS.map((app) => {
                const Icon = getAppIcon(app.id);
                return (
                  <div
                    key={app.id}
                    className="flex flex-col justify-between p-6 transition-all bg-white border shadow-xs border-zinc-200 rounded-2xl hover:border-zinc-300"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
                        <div className="flex flex-col items-end gap-1">
                          <span
                            className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                              app.status === 'available'
                                ? 'bg-emerald-50 text-emerald-700'
                                : 'bg-zinc-100 text-zinc-600'
                            }`}
                          >
                            {app.badge}
                          </span>
                          <span className="text-[11px] font-medium text-blue-600 flex items-center gap-1">
                            <ShieldCheck className="w-3 h-3" /> 30-day free trial
                          </span>
                        </div>
                      </div>

                      <h3 className="mb-1 text-lg font-bold text-zinc-900">{app.name}</h3>
                      <p className="mb-4 text-sm leading-relaxed text-zinc-600">
                        {app.shortDescription}
                      </p>

                      <div className="mb-6">
                        <span className="text-2xl font-black text-zinc-900 tabular-nums">
                          KES {app.priceKes}
                        </span>
                        <span className="text-xs text-zinc-500"> / month</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100">
                      {app.status === 'available' ? (
                        <a
                          href={DASHBOARD_URL}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm rounded-xl transition-colors shadow-xs"
                        >
                          <span>Install Now</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      ) : (
                        <div className="w-full text-center py-2.5 px-4 bg-zinc-100 text-zinc-500 font-medium text-sm rounded-xl">
                          Coming Soon
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* COMING SOON SECTION */}
        <section className="py-20 border-t lg:py-24 bg-zinc-50 border-zinc-200/80">
          <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
            <span className="px-3 py-1 text-xs font-bold tracking-wider uppercase rounded-md text-amber-600 bg-amber-50">
              Roadmap
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl text-zinc-900">
              More apps on the way.
            </h2>
            <p className="max-w-2xl mx-auto mt-4 text-base sm:text-lg text-zinc-600">
              We&apos;re building more apps based on what our users actually need.
            </p>

            {/* Planned apps list */}
          <div className="grid max-w-2xl grid-cols-1 gap-4 mx-auto mt-8 text-left sm:grid-cols-3">
  <div className="flex items-center gap-3 p-4 bg-white border shadow-xs border-zinc-200 rounded-xl">
    <div className="flex items-center justify-center rounded-lg w-9 h-9 bg-zinc-100 text-zinc-800 shrink-0">
      <Megaphone className="w-4 h-4 text-blue-600" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-zinc-900">Marketing</h4>
      <p className="text-xs text-zinc-500">Email campaigns & client outreach</p>
    </div>
  </div>

  <div className="flex items-center gap-3 p-4 bg-white border shadow-xs border-zinc-200 rounded-xl">
    <div className="flex items-center justify-center rounded-lg w-9 h-9 bg-zinc-100 text-zinc-800 shrink-0">
      <Globe className="w-4 h-4 text-blue-600" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-zinc-900">Web Studio</h4>
      <p className="text-xs text-zinc-500">Build & manage your website</p>
    </div>
  </div>

  <div className="flex items-center gap-3 p-4 bg-white border shadow-xs border-zinc-200 rounded-xl">
    <div className="flex items-center justify-center rounded-lg w-9 h-9 bg-zinc-100 text-zinc-800 shrink-0">
      <Zap className="w-4 h-4 text-blue-600" />
    </div>
    <div>
      <h4 className="text-sm font-bold text-zinc-900">AI & Automation</h4>
      <p className="text-xs text-zinc-500">Workflows & AI-powered actions</p>
    </div>
  </div>
</div>
            {/* Email capture */}
            <div className="max-w-md p-6 mx-auto mt-12 bg-white border shadow-sm rounded-2xl border-zinc-200">
              <h3 className="mb-1 text-base font-bold text-zinc-900">
                Want to know when a new app launches?
              </h3>
              <p className="mb-4 text-xs text-zinc-500">
                Leave your email below. We only send release updates, zero spam.
              </p>

              {subscribed ? (
                <div className="flex items-center justify-center gap-2 p-3 text-xs font-semibold border bg-emerald-50 border-emerald-200 rounded-xl text-emerald-800">
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span>Thank you! We&apos;ll notify you as new apps go live.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <div className="flex flex-col gap-2 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      className="flex-1 bg-zinc-50 border border-zinc-200 rounded-xl px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <button
                      type="submit"
                      className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-colors shrink-0 shadow-xs"
                    >
                      Notify Me
                    </button>
                  </div>
                  {errorMsg && (
                    <p className="pl-1 text-xs text-left text-red-600">{errorMsg}</p>
                  )}
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 text-white lg:py-24 bg-zinc-900">
          <div className="max-w-4xl px-4 mx-auto space-y-6 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl text-balance">
              Your workspace is free to start.
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-zinc-400 text-balance">
              Create your account in 30 seconds and install only what your business requires.
            </p>
            <div className="pt-2">
              <a
                href={DASHBOARD_URL}
                className="inline-flex items-center gap-2 px-8 py-4 text-base font-bold transition-colors bg-white shadow-lg hover:bg-zinc-100 active:bg-zinc-200 text-zinc-950 rounded-xl"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

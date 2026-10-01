import Link from 'next/link';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  ArrowRight,
  ShieldCheck,
  Check,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DASHBOARD_URL, MODULOR_APPS } from '@/lib/constants';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
              About Modulor
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Built by a Freelancer,{' '}
              <span className="font-serif italic font-normal text-zinc-700 block sm:inline">
                for Freelancers.
              </span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Modulor exists because the tools freelancers needed didn&apos;t.
            </p>
          </div>
        </section>

        {/* STORY SECTION */}
        <section className="py-16 bg-zinc-50 border-y border-zinc-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white border border-zinc-200 rounded-2xl p-8 sm:p-12 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Our Story
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Why Modulor exists.
              </h2>
              <div className="text-base sm:text-lg text-zinc-700 leading-relaxed space-y-5">
                <p>
                  Most business software is built for companies — teams, departments, IT budgets.
                  When you&apos;re running a business alone, those tools feel like they were designed
                  for someone else entirely.
                </p>
                <p>
                  You either pay for a bloated suite you&apos;ll never fully use, or you stitch together
                  five different apps that don&apos;t talk to each other. Neither works.
                </p>
                <p>
                  Modulor was built to fill that gap — a Business OS designed from the ground up for
                  the one-person business. Install what you need. Pay for that. Nothing else.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Guiding Principles
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                The modular philosophy.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Point 1 */}
              <div className="border border-zinc-200 rounded-2xl p-7 bg-white shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 font-extrabold text-sm flex items-center justify-center">
                  01
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  You shouldn&apos;t pay for what you don&apos;t use
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Every app is priced and installed separately. No forced packages. No subsidizing
                  enterprise features you will never open.
                </p>
              </div>

              {/* Point 2 */}
              <div className="border border-zinc-200 rounded-2xl p-7 bg-white shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 font-extrabold text-sm flex items-center justify-center">
                  02
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Everything should connect
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  Your tools should work as one system, not five separate browser tabs. A CRM contact
                  becomes an invoice without manual copy-pasting.
                </p>
              </div>

              {/* Point 3 */}
              <div className="border border-zinc-200 rounded-2xl p-7 bg-white shadow-xs space-y-3">
                <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 font-extrabold text-sm flex items-center justify-center">
                  03
                </div>
                <h3 className="text-lg font-bold text-zinc-900">
                  Simple is powerful
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed">
                  A tool you actually use every day is worth far more than a complex feature you never
                  open. Fast, clean, and zero-distraction.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WHAT WE'RE BUILDING SECTION */}
        <section className="py-20 lg:py-24 bg-zinc-50 border-t border-zinc-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Current State
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                What&apos;s available today.
              </h2>
            </div>

            <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 divide-y divide-zinc-100 shadow-xs mb-8">
              {MODULOR_APPS.map((app) => (
                <div key={app.id} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-zinc-900 text-base">{app.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500">{app.shortDescription}</p>
                  </div>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-bold text-zinc-800">
                      KES {app.priceKes}/mo
                    </span>
                    <span
                      className={`text-xs font-semibold px-2.5 py-1 rounded-md ${
                        app.status === 'available'
                          ? 'bg-emerald-50 text-emerald-700'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      {app.badge}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-zinc-600 italic">
              And we&apos;re adding more based on what our users actually need.
            </p>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 lg:py-24 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Join us early.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-balance">
              We&apos;re in early access and completely free right now. All we ask is your honest
              feedback.
            </p>
            <div className="pt-2">
              <a
                href={DASHBOARD_URL}
                className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-zinc-100 active:bg-zinc-200 text-zinc-950 font-bold text-base rounded-xl transition-colors shadow-lg"
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

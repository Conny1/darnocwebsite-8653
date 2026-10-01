import Link from 'next/link';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  ArrowRight,
  Sparkles,
  Layers,
  KeyRound,
  Download,
  CreditCard,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppMockupCenter from '@/components/AppMockupCenter';
import EnterpriseVsModulorComparison from '@/components/EnterpriseVsModulorComparison';
import PricingCalculator from '@/components/PricingCalculator';
import { DASHBOARD_URL, MODULOR_APPS } from '@/lib/constants';

export default function HomePage() {
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
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* 1. HERO SECTION */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              The Business OS{' '}
              <span className="font-serif italic font-normal text-zinc-700 block sm:inline">
                Built for Freelancers.
              </span>
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Stop juggling disconnected apps. Modulor brings your CRM, Invoicing, Projects,
              Calendar, and more into one connected workspace — install only what you need, pay
              for what you use.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DASHBOARD_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-zinc-900 hover:bg-zinc-800 active:bg-zinc-950 text-white font-semibold text-base rounded-xl transition-colors shadow-sm"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/apps"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white border border-zinc-300 hover:bg-zinc-50 active:bg-zinc-100 text-zinc-800 font-semibold text-base rounded-xl transition-colors"
              >
                View Apps
              </Link>
            </div>
          </div>

          {/* App Marketplace UI Mockup */}
          <div className="mt-14 sm:mt-18">
            <AppMockupCenter />
          </div>
        </section>

        {/* 2. PROBLEM SECTION */}
        <section className="bg-[#1a1a24] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                The Problem
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Business Software Wasn&apos;t Built for You.
              </h2>
              <p className="mt-4 text-lg text-zinc-300 leading-relaxed text-balance">
                Every tool out there was built for companies with teams and budgets. Modulor is
                built for the one-person business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left: 4 Problem Cards in 2x2 grid */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Problem 1 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Built for Companies</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Most business software is designed for teams and departments. Solo businesses
                    and freelancers are an afterthought.
                  </p>
                </div>

                {/* Problem 2 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Pay for What You Don&apos;t Use</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Bundled plans force you to pay for dozens of features you&apos;ll never touch. You
                    should only pay for what you actually use.
                  </p>
                </div>

                {/* Problem 3 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Too Complex</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Enterprise tools take weeks to set up and learn. A one-person business needs
                    something they can start using in minutes.
                  </p>
                </div>

                {/* Problem 4 */}
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Nothing Connects</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Juggling five different apps that don&apos;t talk to each other is not a system.
                    Your tools should work together as one.
                  </p>
                </div>
              </div>

              {/* Right: Visual comparison card */}
              <div className="lg:col-span-5">
                <EnterpriseVsModulorComparison />
              </div>
            </div>
          </div>
        </section>

        {/* 3. SOLUTION SECTION */}
        <section className="py-20 lg:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                The Solution
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
                A Modular Approach to Business Tools.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 text-balance">
                Start simple. Add tools as you grow. Never pay for what you don&apos;t use.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
              {/* Solution 1 */}
              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <KeyRound className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">One Account</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  One login for your entire business. No password managers full of different SaaS
                  credentials, different billing dates, or disconnected dashboards.
                </p>
              </div>

              {/* Solution 2 */}
              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <Download className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Install What You Need</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Browse the App Marketplace and install only the apps that your business actually
                  needs right now. Add more tools whenever you need them.
                </p>
              </div>

              {/* Solution 3 */}
              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <CheckCircle2 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Everything Connected</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Data flows between apps automatically. Your CRM, Invoicing, and Projects work
                  together without any manual setup or third-party webhooks.
                </p>
              </div>

              {/* Solution 4 */}
              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <CreditCard className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Unified Billing</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  One monthly total in Kenyan Shillings for all your apps. Add or remove apps anytime
                  and your billing adjusts automatically.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. APPS SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Apps
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
                Explore the Modulor Apps
              </h2>
              <p className="mt-4 text-lg text-zinc-600 text-balance">
                Every app works on its own or connects with the others.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {MODULOR_APPS.map((app) => {
                const Icon = getAppIcon(app.id);
                return (
                  <div
                    key={app.id}
                    className="border border-zinc-200 rounded-2xl p-6 bg-white hover:border-zinc-300 transition-all flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>
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

                      <h3 className="text-lg font-bold text-zinc-900 mb-1">{app.name}</h3>
                      <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                        {app.shortDescription}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <div>
                        <span className="text-sm font-extrabold text-zinc-900 tabular-nums">
                          KES {app.priceKes}
                        </span>
                        <span className="text-xs text-zinc-500"> / mo</span>
                      </div>

                      <Link
                        href={`/features#${app.id}`}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1"
                      >
                        Learn more
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/apps"
                className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                <span>View All Apps</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 5. PRICING SECTION */}
        <section className="py-20 lg:py-28 bg-zinc-50 border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCalculator />
          </div>
        </section>

        {/* 6. CTA BANNER */}
        <section className="py-20 lg:py-24 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Ready to run your business from one place?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-balance">
              Create your free workspace and install the apps you need.
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

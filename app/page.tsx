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
  BriefcaseBusiness,
  BarChart3,
  Building2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppMockupCenter from '@/components/AppMockupCenter';
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

  const businessFunctions = [
    {
      title: 'Customers & Sales',
      description: 'CRM, customer records, lead management, and sales tools.',
      icon: Users,
    },
    {
      title: 'Finance',
      description: 'Invoicing, payments, and other financial tools.',
      icon: Receipt,
    },
    {
      title: 'Work & Productivity',
      description: 'Project management, tasks, calendars, and scheduling.',
      icon: CheckSquare,
    },
    {
      title: 'Business Operations',
      description: 'Documents, inventory, and other operational tools as they become available.',
      icon: Building2,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-blue-700">
              Business software platform
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Everything You Need to Run Your Business.
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed text-balance">
              From managing customers and projects to handling invoices, payments, and everyday
              operations, Modulor brings the tools you need to run your business into one
              connected platform.
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
                Explore Business Tools
              </Link>
            </div>
          </div>

          <div className="mt-14 sm:mt-18">
            <AppMockupCenter />
          </div>
        </section>

        <section className="bg-[#1a1a24] text-white py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                Why businesses switch
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight text-balance">
                Running a business shouldn&apos;t mean juggling a dozen different tools.
              </h2>
              <p className="mt-4 text-lg text-zinc-300 leading-relaxed text-balance">
                Business owners often need separate software for customers, finances, projects,
                scheduling, and day-to-day operations. That creates scattered information, weak
                handoffs, and expensive subscriptions with no clear system behind them.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Information scattered</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Customer details, payments, and project progress live in different apps, making it
                    harder to stay on top of day-to-day decisions.
                  </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Tools do not work together</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    When systems do not connect well, work slows down and teams keep duplicating tasks.
                  </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Subscriptions add up</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Multiple products can become expensive quickly, especially when a business is
                    still figuring out what it actually needs.
                  </p>
                </div>

                <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 space-y-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0" />
                    <h3 className="font-bold text-white text-base">Business needs change</h3>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    A growing business needs tools that can expand with it, rather than a rigid setup
                    designed for one stage only.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl border border-zinc-800 bg-zinc-900/80 p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-300 flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-blue-300">Platform view</p>
                    <h3 className="text-xl font-bold text-white">One system for the work behind the business</h3>
                  </div>
                </div>
                <ul className="space-y-4 text-sm text-zinc-300">
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400 shrink-0" />
                    <span>Customer relationships, invoices, and operations stay connected in one place.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400 shrink-0" />
                    <span>Teams avoid app-hopping and duplicated records across separate systems.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400 shrink-0" />
                    <span>Businesses can start with the tools they need and expand as they grow.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white border-b border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                The solution
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
                One platform. The tools your business needs.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 text-balance">
                Modulor brings essential business software into one platform so businesses can manage
                different functions without assembling a disconnected collection of products.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <BriefcaseBusiness className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Tools for Your Business</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Access software for different business functions from one platform, without starting from scratch with a dozen separate products.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Connected Operations</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Use business tools designed to work together and reduce fragmented workflows across customers, finance, and day-to-day operations.
                </p>
              </div>

              <div className="border border-zinc-200 rounded-2xl p-7 hover:border-zinc-300 transition-colors bg-white shadow-xs">
                <div className="w-12 h-12 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center font-bold mb-5">
                  <Layers className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">Flexibility as You Grow</h3>
                <p className="text-zinc-600 leading-relaxed text-sm">
                  Start with the tools you need and expand your setup as your business evolves, instead of forcing a rigid system onto your operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Business tools
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
                Tools for Every Part of Your Business
              </h2>
              <p className="mt-4 text-lg text-zinc-600 text-balance">
                Modulor is the platform. These applications are the tools that help businesses run more smoothly.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mb-10">
              {businessFunctions.map(({ title, description, icon: Icon }) => (
                <div key={title} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-xs">
                  <div className="w-11 h-11 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">{title}</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">{description}</p>
                </div>
              ))}
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
                      <p className="text-sm text-zinc-600 leading-relaxed mb-6">{app.shortDescription}</p>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between gap-3">
                      <span className="text-xs text-zinc-500">{app.status === 'available' ? 'Available today' : 'Coming soon'}</span>
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
          </div>
        </section>

        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Modular business model
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-900 tracking-tight text-balance">
                Your business. Your tools. Your choice.
              </h2>
            </div>

            <div className="rounded-3xl border border-zinc-200 bg-zinc-50 p-8 sm:p-10">
              <p className="text-lg sm:text-xl text-zinc-700 leading-relaxed text-balance max-w-3xl mx-auto text-center">
                Every business operates differently. Start with the tools you need today and add more as your business grows. With Modulor, you choose the applications that fit your business and keep your operations flexible.
              </p>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
                <div className="rounded-2xl bg-white border border-zinc-200 p-5">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">Choose the tools you need</h3>
                  <p className="text-sm text-zinc-600">Build a setup that matches your actual workflow instead of paying for a rigid bundle.</p>
                </div>
                <div className="rounded-2xl bg-white border border-zinc-200 p-5">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">Keep everything connected</h3>
                  <p className="text-sm text-zinc-600">The platform is built so your business tools can work together as one operating system.</p>
                </div>
                <div className="rounded-2xl bg-white border border-zinc-200 p-5">
                  <h3 className="text-lg font-bold text-zinc-900 mb-2">Scale when you are ready</h3>
                  <p className="text-sm text-zinc-600">Add tools as your business grows, without rethinking the foundation of your operations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-zinc-900 text-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Ready to build your business on one connected platform?
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-balance">
              Start with the tools you need today and expand as your business grows.
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

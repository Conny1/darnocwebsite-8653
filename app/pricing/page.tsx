'use client';

import { useState } from 'react';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  Layers,
  Check,
  ChevronDown,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  RefreshCw,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PricingCalculator from '@/components/PricingCalculator';
import { DASHBOARD_URL } from '@/lib/constants';

interface PricingAppItem {
  id: string;
  name: string;
  priceKes: number;
  icon: typeof Users;
  features: string[];
  status: 'available' | 'coming_soon';
}

const PRICING_APPS: PricingAppItem[] = [
  {
    id: 'crm',
    name: 'CRM',
    priceKes: 300,
    icon: Users,
    features: [
      'Clients and leads management',
      'Visual sales pipeline',
      'Follow-up reminders',
      'Connected to Invoicing and Projects',
    ],
    status: 'available',
  },
  {
    id: 'invoicing',
    name: 'Invoicing',
    priceKes: 400,
    icon: Receipt,
    features: [
      'Professional PDF invoices & quotes',
      'M-Pesa and card payments',
      'Payment tracking & automated receipts',
      'Multi-currency (KES & USD)',
    ],
    status: 'available',
  },
  {
    id: 'projects',
    name: 'Projects',
    priceKes: 300,
    icon: CheckSquare,
    features: [
      'Kanban board task management',
      'Milestones and deadlines',
      'Client deliverable tracking',
      'Connected to CRM and Invoicing',
    ],
    status: 'available',
  },
  {
    id: 'calendar',
    name: 'Calendar',
    priceKes: 300,
    icon: Calendar,
    features: [
      'Custom booking links',
      'Availability management',
      'Client self-scheduling',
      'Connected to CRM contacts',
    ],
    status: 'coming_soon',
  },
  {
    id: 'documents',
    name: 'Documents',
    priceKes: 300,
    icon: FileText,
    features: [
      'Document creation & templates',
      'Secure file storage',
      'Linked to clients and projects',
      'Export and shareable PDF links',
    ],
    status: 'coming_soon',
  },
];

const FAQS = [
  {
    q: 'Is there a free trial?',
    a: 'Yes. Every app comes with a 30-day free trial. No credit card required. You can test any app thoroughly before committing.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. Remove any app or close your account at any time directly from your settings. There are no annual lock-ins or cancellation penalties.',
  },
  {
    q: 'Do I have to install all apps?',
    a: "No. That's the whole point. Install only what you need. If you only need Invoicing, you only install Invoicing and pay KES 400/month.",
  },
  {
    q: 'How does billing work?',
    a: 'You pay per app per month. Add or remove apps anytime and your billing adjusts immediately. We consolidate everything into a single transparent monthly charge.',
  },
  {
    q: 'Do the apps work together?',
    a: 'Yes. When you install multiple apps they share data automatically. A client in CRM connects to Invoicing. A project links to an invoice. Zero manual syncing required.',
  },
  {
    q: 'Is M-Pesa supported?',
    a: 'Yes. M-Pesa and card payments are both supported for both your subscription billing and when receiving client invoice payments.',
  },
];

export default function PricingPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
              Pricing
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Simple, Honest Pricing.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed text-balance">
              No bundles, no forced packages. Pay only for the apps you actually use. Your base
              workspace is always free.
            </p>
          </div>
        </section>

        {/* BASE WORKSPACE CARD - PROMINENT */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
          <div className="bg-zinc-900 text-white rounded-2xl p-6 sm:p-8 border border-zinc-800 shadow-lg flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-extrabold text-white">Base Workspace</h2>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 border border-emerald-800/60 px-2 py-0.5 rounded">
                    Free Forever
                  </span>
                </div>
                <p className="text-sm text-zinc-400 max-w-xl">
                  Includes unified dashboard, account management, app marketplace access, and
                  notifications. No credit card required.
                </p>
              </div>
            </div>

            <div className="flex sm:items-center gap-4 shrink-0">
              <div className="text-left md:text-right">
                <span className="text-3xl font-black text-white">KES 0</span>
                <span className="text-xs text-zinc-400 block font-medium">Free forever</span>
              </div>
              <a
                href={DASHBOARD_URL}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-white text-zinc-950 font-bold text-sm rounded-xl hover:bg-zinc-100 transition-colors shadow-xs shrink-0"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* INDIVIDUAL APP CARDS IN A ROW / GRID */}
        <section className="py-12 bg-white border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                Individual App Rates
              </h2>
              <p className="mt-2 text-zinc-600 text-sm">
                Every app is priced individually. Add what you need, drop what you don&apos;t.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {PRICING_APPS.map((app) => {
                const Icon = app.icon;
                return (
                  <div
                    key={app.id}
                    className="border border-zinc-200 rounded-2xl p-6 bg-white flex flex-col justify-between hover:border-zinc-300 transition-all shadow-xs"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-900 flex items-center justify-center">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        {app.status === 'coming_soon' ? (
                          <span className="text-xs font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                            Coming Soon
                          </span>
                        ) : (
                          <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                            Available
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900">{app.name}</h3>

                      <div className="mt-2 mb-6">
                        <span className="text-3xl font-black text-zinc-900 tabular-nums">
                          KES {app.priceKes}
                        </span>
                        <span className="text-xs text-zinc-500"> / month</span>
                      </div>

                      <div className="space-y-2.5 pt-4 border-t border-zinc-100 mb-6">
                        {app.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-xs text-zinc-600">
                            <Check className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-zinc-100 space-y-2">
                      <div className="flex items-center justify-center gap-1 text-[11px] text-zinc-500">
                        <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
                        <span>30-day free trial</span>
                      </div>

                      {app.status === 'available' ? (
                        <a
                          href={DASHBOARD_URL}
                          className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs"
                        >
                          <span>Add to Workspace</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <div className="w-full text-center py-2.5 px-4 bg-zinc-100 text-zinc-400 font-medium text-xs rounded-xl">
                          In Development
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR */}
        <section className="py-20 lg:py-24 bg-zinc-50 border-y border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PricingCalculator
              title="Build your own plan"
              subtitle="Toggle the apps you need and see your total instantly in Kenyan Shillings."
            />
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                FAQ
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Common Questions
              </h2>
              <p className="mt-3 text-base text-zinc-600">
                Clear answers about billing, trials, and how Modulor works.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="border border-zinc-200 rounded-xl overflow-hidden transition-all bg-white"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-zinc-900 text-base hover:bg-zinc-50/50 transition-colors focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-blue-600' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-zinc-600 leading-relaxed border-t border-zinc-100">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA BANNER */}
        <section className="py-20 lg:py-24 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              Start free. Add what you need.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-balance">
              Join Kenyan freelancers and solo entrepreneurs using a business OS built specifically
              for them.
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

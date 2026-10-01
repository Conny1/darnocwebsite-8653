import Link from 'next/link';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  Check,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AppWorkflowConnect from '@/components/AppWorkflowConnect';
import {
  CrmMockup,
  InvoicingMockup,
  ProjectsMockup,
  CalendarMockup,
  DocumentsMockup,
} from '@/components/FeatureMockups';
import { DASHBOARD_URL } from '@/lib/constants';

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="pt-16 pb-20 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
              Features & Architecture
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 tracking-tight leading-[1.1] text-balance">
              Everything You Need to Run Your Business.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-3xl mx-auto leading-relaxed text-balance">
              Modulor gives freelancers and solo businesses the same connected tools that
              companies use — without the complexity and without paying for what you don&apos;t
              need.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={DASHBOARD_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-semibold text-base rounded-xl transition-colors shadow-sm"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <Link
                href="/pricing"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 bg-white border border-zinc-300 hover:bg-zinc-50 active:bg-zinc-100 text-zinc-800 font-semibold text-base rounded-xl transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* PER-APP FEATURE BREAKDOWN - 5 SECTIONS */}

        {/* 1. CRM - White background */}
        <section id="crm" className="py-20 lg:py-24 bg-white border-t border-zinc-100 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
                      CRM
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">KES 300 / month</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight text-balance">
                  Never lose track of a client or lead again.
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed">
                  When you work for yourself, leads are revenue. Modulor replaces disorganized
                  WhatsApp chats and notes with a clear, fast pipeline tailored for solo operators.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Manage all your clients and leads in one place',
                    'Visual sales pipeline — move deals from lead to closed',
                    'Follow-up reminders so nothing falls through',
                    'Full client history — notes, deals, invoices',
                    'Connect directly to Invoicing and Projects',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <CrmMockup />
              </div>
            </div>
          </div>
        </section>

        {/* 2. Invoicing - Light gray background */}
        <section
          id="invoicing"
          className="py-20 lg:py-24 bg-zinc-50 border-y border-zinc-200/80 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <InvoicingMockup />
              </div>

              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                    <Receipt className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                      Invoicing
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">KES 400 / month</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight text-balance">
                  Send professional invoices and get paid faster.
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed">
                  Generate branded PDF invoices in seconds. Support both local Kenyan payments via
                  M-Pesa and international clients via card, with automatic payment tracking.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Create invoices and quotes in seconds',
                    'Branded PDF invoices with your logo',
                    'M-Pesa and card payment support',
                    'Track payment status — draft, sent, paid, overdue',
                    'Connect invoices directly to CRM clients',
                    'Multi-currency support — KES and USD',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Projects & Tasks - White background */}
        <section
          id="projects"
          className="py-20 lg:py-24 bg-white border-b border-zinc-100 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-600 block">
                      Projects & Tasks
                    </span>
                    <span className="text-xs text-zinc-500 font-medium">KES 300 / month</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight text-balance">
                  Keep your work organized and your clients happy.
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed">
                  Ditch the messy to-do apps. Modulor connects tasks directly to the client they
                  belong to, so you always know what deliverable comes next and when it is due.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Kanban board for visual task tracking',
                    'Organize work into projects with deadlines',
                    'Assign tasks and track progress',
                    'Connect projects to clients and invoices',
                    'Never miss a deliverable',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <ProjectsMockup />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Calendar & Scheduling - Light gray background */}
        <section
          id="calendar"
          className="py-20 lg:py-24 bg-zinc-50 border-y border-zinc-200/80 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <CalendarMockup />
              </div>

              <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-600">
                        Calendar & Scheduling
                      </span>
                      <span className="text-[11px] font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.2 rounded">
                        Coming Soon
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 font-medium">KES 300 / month</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight text-balance">
                  Stop the back-and-forth scheduling.
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed">
                  Share a simple booking link with clients. Set your availability once, let clients
                  pick open times, and eliminate endless WhatsApp messages trying to find a slot.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Share a booking link with clients',
                    'Set your availability once',
                    'Clients book directly without WhatsApp back-and-forth',
                    'Connects to your CRM contacts',
                    'Automated meeting reminders',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Documents - White background */}
        <section
          id="documents"
          className="py-20 lg:py-24 bg-white border-b border-zinc-100 scroll-mt-20"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                        Documents
                      </span>
                      <span className="text-[11px] font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.2 rounded">
                        Coming Soon
                      </span>
                    </div>
                    <span className="text-xs text-zinc-500 font-medium">KES 300 / month</span>
                  </div>
                </div>

                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight leading-tight text-balance">
                  Create and store your business documents in one place.
                </h2>

                <p className="text-base text-zinc-600 leading-relaxed">
                  Never search through random Google Drive folders or downloads again. Keep client
                  contracts, brief documents, and proposals attached directly to the active project.
                </p>

                <ul className="space-y-3 pt-2">
                  {[
                    'Create, edit, and share documents',
                    'Store files linked to clients and projects',
                    'Access everything from your workspace',
                    'Client proposal templates',
                    'Secure PDF downloads',
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                      <div className="w-5 h-5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="lg:col-span-6">
                <DocumentsMockup />
              </div>
            </div>
          </div>
        </section>

        {/* HOW APPS CONNECT SECTION */}
        <section className="py-20 lg:py-28 bg-zinc-50 border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
                Interconnected System
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-zinc-950 tracking-tight text-balance">
                Every app talks to the others.
              </h2>
              <p className="mt-4 text-lg text-zinc-600 text-balance">
                Install multiple apps and they share data automatically — no manual syncing, no
                copy-pasting between tools.
              </p>
            </div>

            <AppWorkflowConnect />
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 lg:py-24 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight text-balance">
              See it for yourself.
            </h2>
            <p className="text-lg text-zinc-400 max-w-2xl mx-auto text-balance">
              Create your free base workspace today and test any app with a 30-day free trial.
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

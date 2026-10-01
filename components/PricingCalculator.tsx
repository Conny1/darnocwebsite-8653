'use client';

import { useState } from 'react';
import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  Layers,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  RefreshCw,
  Check,
} from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/constants';

interface AppToggle {
  id: string;
  name: string;
  priceKes: number;
  description: string;
  icon: typeof Users;
  status: 'available' | 'coming_soon';
}

const APPS: AppToggle[] = [
  {
    id: 'crm',
    name: 'CRM',
    priceKes: 300,
    description: 'Clients, leads, and sales pipeline',
    icon: Users,
    status: 'available',
  },
  {
    id: 'invoicing',
    name: 'Invoicing',
    priceKes: 400,
    description: 'Quotes, invoices, M-Pesa payments',
    icon: Receipt,
    status: 'available',
  },
  {
    id: 'projects',
    name: 'Projects & Tasks',
    priceKes: 300,
    description: 'Kanban boards and deliverables',
    icon: CheckSquare,
    status: 'available',
  },
  {
    id: 'calendar',
    name: 'Calendar & Scheduling',
    priceKes: 300,
    description: 'Booking links and availability',
    icon: Calendar,
    status: 'coming_soon',
  },
  {
    id: 'documents',
    name: 'Documents',
    priceKes: 300,
    description: 'Contracts, proposals, file storage',
    icon: FileText,
    status: 'coming_soon',
  },
];

export default function PricingCalculator({
  title = 'Build Your Own Plan',
  subtitle = 'No forced packages. Toggle the apps you need and see your total instantly.',
  showHeading = true,
}: {
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
}) {
  // Start with CRM and Invoicing selected by default
  const [selectedApps, setSelectedApps] = useState<Record<string, boolean>>({
    crm: true,
    invoicing: true,
    projects: false,
    calendar: false,
    documents: false,
  });

  const toggleApp = (id: string) => {
    setSelectedApps((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const totalMonthlyKes = APPS.reduce((sum, app) => {
    return sum + (selectedApps[app.id] ? app.priceKes : 0);
  }, 0);

  const selectedCount = Object.values(selectedApps).filter(Boolean).length;

  return (
    <div className="w-full">
      {showHeading && (
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-md">
            Pricing
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
            {title}
          </h2>
          <p className="mt-3 text-lg text-zinc-600">{subtitle}</p>
        </div>
      )}

      {/* Main Calculator Box */}
      <div className="max-w-4xl mx-auto bg-white border border-zinc-200 rounded-2xl shadow-sm overflow-hidden">
        {/* Base Workspace Header */}
        <div className="p-6 sm:p-8 bg-zinc-50 border-b border-zinc-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-zinc-900 text-white flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-zinc-900">Base Workspace</h3>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
                  Included
                </span>
              </div>
              <p className="text-sm text-zinc-500">
                Unified account, dashboard, app marketplace, and notifications
              </p>
            </div>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-2xl font-extrabold text-zinc-900">KES 0</span>
            <span className="text-xs text-zinc-500 block font-medium">Free forever</span>
          </div>
        </div>

        {/* App Toggles List */}
        <div className="p-6 sm:p-8 space-y-4">
          <p className="text-xs font-bold uppercase tracking-wider text-zinc-400">
            Select Apps for Your Stack
          </p>

          <div className="divide-y divide-zinc-100">
            {APPS.map((app) => {
              const Icon = app.icon;
              const isSelected = !!selectedApps[app.id];

              return (
                <div
                  key={app.id}
                  onClick={() => toggleApp(app.id)}
                  className={`py-4 flex items-center justify-between gap-4 cursor-pointer select-none rounded-xl px-3 transition-colors ${
                    isSelected ? 'bg-blue-50/50' : 'hover:bg-zinc-50'
                  }`}
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-blue-600 text-white shadow-sm'
                          : 'bg-zinc-100 text-zinc-600'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-zinc-900 truncate">{app.name}</span>
                        {app.status === 'coming_soon' && (
                          <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 px-2 py-0.5 rounded">
                            Coming Soon
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-zinc-500 truncate">
                        {app.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <div className="text-right">
                      <span className="font-bold text-zinc-900 tabular-nums">
                        KES {app.priceKes}
                      </span>
                      <span className="text-xs text-zinc-500 block">/month</span>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      type="button"
                      role="switch"
                      aria-checked={isSelected}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleApp(app.id);
                      }}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 ${
                        isSelected ? 'bg-blue-600' : 'bg-zinc-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          isSelected ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Total & CTA Footer */}
        <div className="p-6 sm:p-8 bg-zinc-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                Your Monthly Total
              </span>
              <span className="text-xs font-semibold text-blue-400">
                ({selectedCount} app{selectedCount === 1 ? '' : 's'} selected)
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-4xl font-black text-white tabular-nums tracking-tight">
                KES {totalMonthlyKes}
              </span>
              <span className="text-zinc-400 text-sm">/ month</span>
            </div>
            <p className="text-xs text-zinc-400 mt-1">
              No hidden fees. Add or remove apps anytime.
            </p>
          </div>

          <a
            href={DASHBOARD_URL}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>Deploy This Stack</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Trust Points */}
      <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-600">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0" />
          <span>30-day free trial per app</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-600">
          <CreditCard className="w-4 h-4 text-blue-600 shrink-0" />
          <span>No credit card required</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-sm text-zinc-600">
          <RefreshCw className="w-4 h-4 text-blue-600 shrink-0" />
          <span>Cancel or modify anytime</span>
        </div>
      </div>
    </div>
  );
}

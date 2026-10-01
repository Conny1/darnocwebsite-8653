'use client';

import { useState } from 'react';
import {
  Search,
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  Check,
  Plus,
  SlidersHorizontal,
  ExternalLink,
} from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/constants';

interface MockApp {
  id: string;
  name: string;
  category: string;
  description: string;
  priceKes: number;
  icon: typeof Users;
  installed: boolean;
  status: 'available' | 'coming_soon';
}

const INITIAL_APPS: MockApp[] = [
  {
    id: 'crm',
    name: 'CRM',
    category: 'Sales',
    description: 'Manage clients, leads, and your sales pipeline.',
    priceKes: 300,
    icon: Users,
    installed: true,
    status: 'available',
  },
  {
    id: 'invoicing',
    name: 'Invoicing',
    category: 'Finance',
    description: 'Create invoices, send quotes, track payments.',
    priceKes: 400,
    icon: Receipt,
    installed: true,
    status: 'available',
  },
  {
    id: 'projects',
    name: 'Projects & Tasks',
    category: 'Work',
    description: 'Manage work with projects, tasks, and deadlines.',
    priceKes: 300,
    icon: CheckSquare,
    installed: false,
    status: 'available',
  },
  {
    id: 'calendar',
    name: 'Calendar & Scheduling',
    category: 'Time',
    description: 'Book meetings and manage your availability.',
    priceKes: 300,
    icon: Calendar,
    installed: false,
    status: 'coming_soon',
  },
  {
    id: 'documents',
    name: 'Documents',
    category: 'Files',
    description: 'Create, store, and share business documents.',
    priceKes: 300,
    icon: FileText,
    installed: false,
    status: 'coming_soon',
  },
];

export default function AppMockupCenter() {
  const [apps, setApps] = useState<MockApp[]>(INITIAL_APPS);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState<'all' | 'installed' | 'available'>('all');

  const toggleInstall = (id: string) => {
    setApps((prev) =>
      prev.map((app) =>
        app.id === id ? { ...app, installed: !app.installed } : app
      )
    );
  };

  const filteredApps = apps.filter((app) => {
    const matchesSearch =
      app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      app.description.toLowerCase().includes(searchTerm.toLowerCase());
    if (!matchesSearch) return false;
    if (activeFilter === 'installed') return app.installed;
    if (activeFilter === 'available') return app.status === 'available';
    return true;
  });

  return (
    <div className="w-full max-w-5xl mx-auto rounded-2xl border border-zinc-200 bg-white shadow-xl overflow-hidden transition-all">
      {/* Browser Bar */}
      <div className="bg-zinc-100 border-b border-zinc-200 px-4 py-3 flex items-center justify-between gap-4">
        {/* Window controls */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-zinc-300" />
          <div className="w-3 h-3 rounded-full bg-zinc-300" />
          <div className="w-3 h-3 rounded-full bg-zinc-300" />
          <span className="ml-2 text-xs font-semibold text-zinc-600 hidden sm:inline">
            Modulor App Center
          </span>
        </div>

        {/* Center Search Input */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search business apps (CRM, Invoicing, Projects...)"
            className="w-full bg-white border border-zinc-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-zinc-900 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-blue-600"
          />
        </div>

        {/* Live Status indicator */}
        <div className="flex items-center gap-2 text-xs font-medium text-zinc-600">
          <span className="hidden sm:inline text-zinc-500">Workspace:</span>
          <span className="font-semibold text-zinc-900">Active</span>
        </div>
      </div>

      {/* App Center Body */}
      <div className="p-4 sm:p-6 lg:p-8 bg-zinc-50/50">
        {/* Subheader / Filter Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div>
            <h3 className="text-base font-bold text-zinc-900">Installed & Available Apps</h3>
            <p className="text-xs text-zinc-500">
              Install modular business tools to your solo workspace with one click.
            </p>
          </div>

          <div className="flex items-center gap-1 bg-zinc-200/70 p-1 rounded-lg text-xs font-medium self-start sm:self-auto">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeFilter === 'all'
                  ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              All ({apps.length})
            </button>
            <button
              onClick={() => setActiveFilter('installed')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeFilter === 'installed'
                  ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Installed ({apps.filter((a) => a.installed).length})
            </button>
            <button
              onClick={() => setActiveFilter('available')}
              className={`px-3 py-1 rounded-md transition-colors ${
                activeFilter === 'available'
                  ? 'bg-white text-zinc-950 shadow-xs font-semibold'
                  : 'text-zinc-600 hover:text-zinc-950'
              }`}
            >
              Available Now
            </button>
          </div>
        </div>

        {/* Grid of Apps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredApps.map((app) => {
            const Icon = app.icon;
            return (
              <div
                key={app.id}
                className="bg-white border border-zinc-200 rounded-xl p-5 hover:border-zinc-300 transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 text-zinc-800 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-zinc-900 block tabular-nums">
                        KES {app.priceKes}/mo
                      </span>
                      {app.status === 'coming_soon' && (
                        <span className="text-[10px] font-medium text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>

                  <h4 className="font-bold text-zinc-900 text-sm mb-1">{app.name}</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed min-h-[36px]">
                    {app.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-[11px] text-zinc-400 font-medium">
                    {app.installed ? 'Connected to workspace' : 'Standalone or connected'}
                  </span>

                  {app.status === 'coming_soon' ? (
                    <button
                      type="button"
                      disabled
                      className="px-2.5 py-1 text-xs font-medium text-zinc-400 bg-zinc-100 rounded-lg cursor-not-allowed"
                    >
                      Notify Me
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={() => toggleInstall(app.id)}
                      className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                        app.installed
                          ? 'bg-zinc-100 text-zinc-800 hover:bg-zinc-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-xs'
                      }`}
                    >
                      {app.installed ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span>Installed</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Install</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Mockup bottom bar info */}
        <div className="mt-6 pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>Zero lock-in. Add or remove any app with instant monthly billing prorating.</span>
          </div>
          <a
            href={DASHBOARD_URL}
            className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-700"
          >
            <span>Open Modulor App Center</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

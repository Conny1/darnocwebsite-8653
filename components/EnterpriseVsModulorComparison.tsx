'use client';

import { AlertTriangle, Lock, XCircle, CheckCircle2, ArrowRight } from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/constants';

export default function EnterpriseVsModulorComparison() {
  return (
    <div className="space-y-4">
      {/* Bloated Enterprise Tool Card */}
      <div className="bg-zinc-900/90 border border-red-950/60 rounded-2xl p-5 sm:p-6 text-zinc-300 relative overflow-hidden shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="text-xs font-bold uppercase tracking-wider text-red-400">
              Legacy Enterprise Suite
            </span>
          </div>
          <span className="text-xs font-semibold text-zinc-400">
            $189/mo <span className="text-zinc-600 line-through">(KES 24,500)</span>
          </span>
        </div>

        {/* Warning banner */}
        <div className="mb-4 p-2.5 bg-red-950/40 border border-red-900/40 rounded-xl flex items-center gap-2 text-xs text-red-300">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0" />
          <span>Minimum 5 seat license required. Annual upfront commitment.</span>
        </div>

        {/* Locked features & error clutter */}
        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-zinc-500" />
              Simple PDF Invoicing
            </span>
            <span className="text-[10px] text-amber-400 bg-amber-950/40 border border-amber-800/40 px-2 py-0.5 rounded">
              Requires Enterprise Tier ($299)
            </span>
          </div>

          <div className="p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-400 flex items-center gap-2">
              <XCircle className="w-3.5 h-3.5 text-red-400" />
              Kenyan M-Pesa Integration
            </span>
            <span className="text-[10px] text-zinc-500">Not supported</span>
          </div>

          <div className="p-2.5 bg-zinc-950/60 rounded-xl border border-zinc-800/80 flex items-center justify-between">
            <span className="text-zinc-500">Sync with 4 other third-party SaaS tabs</span>
            <span className="text-[10px] text-zinc-500">Zapier / Webhook setup needed</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500">
          <span>Onboarding time: 3 weeks</span>
          <span className="text-red-400">142 unused features</span>
        </div>
      </div>

      {/* Clean Modulor Workspace Card */}
      <div className="bg-zinc-900 border border-blue-600/40 rounded-2xl p-5 sm:p-6 text-white shadow-xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between pb-3 mb-4 border-b border-zinc-800">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
              M
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
              Modulor Workspace
            </span>
          </div>
          <span className="text-xs font-bold text-blue-400 tabular-nums">
            From KES 300/mo · Free Base
          </span>
        </div>

        <div className="space-y-2.5 text-xs">
          <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-zinc-700/60 flex items-center justify-between">
            <span className="text-zinc-200 flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Built for 1 person — Zero IT setup
            </span>
            <span className="text-[10px] text-emerald-400 bg-emerald-950/50 border border-emerald-800/40 px-2 py-0.5 rounded">
              Ready in 2 min
            </span>
          </div>

          <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-zinc-700/60 flex items-center justify-between">
            <span className="text-zinc-200 flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              M-Pesa & Card Payments Included
            </span>
            <span className="text-[10px] text-zinc-300">Instant KES receipts</span>
          </div>

          <div className="p-2.5 bg-zinc-800/50 rounded-xl border border-zinc-700/60 flex items-center justify-between">
            <span className="text-zinc-200 flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              Modular apps connect automatically
            </span>
            <span className="text-[10px] text-blue-400">CRM → Invoice → Project</span>
          </div>
        </div>

        <div className="mt-4 pt-3 border-t border-zinc-800 flex items-center justify-between">
          <span className="text-xs text-zinc-400">No contracts. Cancel anytime.</span>
          <a
            href={DASHBOARD_URL}
            className="inline-flex items-center gap-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
          >
            Start Free
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
}

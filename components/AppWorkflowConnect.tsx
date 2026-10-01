'use client';

import { useState } from 'react';
import { ArrowRight, Users, Receipt, CheckSquare, Calendar, Sparkles, Check } from 'lucide-react';
import { DASHBOARD_URL } from '@/lib/constants';

interface ConnectionFlow {
  id: string;
  source: string;
  sourceIcon: typeof Users;
  action: string;
  target: string;
  targetIcon: typeof Receipt;
  description: string;
  exampleData: {
    from: string;
    actionDetail: string;
    result: string;
  };
}

const FLOWS: ConnectionFlow[] = [
  {
    id: 'crm-to-invoice',
    source: 'CRM Lead',
    sourceIcon: Users,
    action: 'Convert in 1 click',
    target: 'Invoice',
    targetIcon: Receipt,
    description: 'When you close a deal in your sales pipeline, click "Generate Invoice". All client details, negotiated rates, and terms carry over instantly.',
    exampleData: {
      from: 'Acme Digital (Lead: KES 85,000)',
      actionDetail: 'Pipeline Stage: Won → Generate Invoice',
      result: 'Invoice #INV-2026-041 created with M-Pesa payment prompt',
    },
  },
  {
    id: 'project-to-invoice',
    source: 'Project Completed',
    sourceIcon: CheckSquare,
    action: 'Generate Invoice automatically',
    target: 'Invoice',
    targetIcon: Receipt,
    description: 'Deliver your final milestone on the Kanban board. Modulor triggers a draft or final invoice linked to the project scope without re-entering itemized work.',
    exampleData: {
      from: 'Brand Identity & Web Refresh (100% Tasks Done)',
      actionDetail: 'Milestone "Final Delivery" marked Complete',
      result: 'Final balance invoice of KES 45,000 emailed to client',
    },
  },
  {
    id: 'calendar-to-crm',
    source: 'Calendar Booking',
    sourceIcon: Calendar,
    action: 'Create CRM contact automatically',
    target: 'CRM Contact',
    targetIcon: Users,
    description: 'A prospective client books a 30-minute discovery call via your booking link. Modulor automatically creates their CRM lead profile and logs meeting notes.',
    exampleData: {
      from: 'Client books "30-min Project Discovery"',
      actionDetail: 'Contact form submitted on Modulor Calendar link',
      result: 'New Lead created in CRM tagged "Discovery Call Scheduled"',
    },
  },
];

export default function AppWorkflowConnect() {
  const [activeFlowId, setActiveFlowId] = useState<string>('crm-to-invoice');

  const currentFlow = FLOWS.find((f) => f.id === activeFlowId) || FLOWS[0];
  const SourceIcon = currentFlow.sourceIcon;
  const TargetIcon = currentFlow.targetIcon;

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Flow Selector Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {FLOWS.map((flow) => {
          const isActive = flow.id === activeFlowId;
          return (
            <button
              key={flow.id}
              onClick={() => setActiveFlowId(flow.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all ${
                isActive
                  ? 'bg-zinc-900 text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-900'
              }`}
            >
              {flow.source} → {flow.target}
            </button>
          );
        })}
      </div>

      {/* Interactive Visual Flow Card */}
      <div className="bg-white border border-zinc-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        {/* Visual Pipeline Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-zinc-50 rounded-xl border border-zinc-200">
          {/* Source node */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-blue-600 flex items-center justify-center shrink-0">
              <SourceIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                Trigger
              </span>
              <span className="font-bold text-zinc-900 text-sm sm:text-base">
                {currentFlow.source}
              </span>
            </div>
          </div>

          {/* Action connector */}
          <div className="flex flex-col items-center justify-center text-center px-2">
            <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200 flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {currentFlow.action}
            </span>
            <ArrowRight className="w-4 h-4 text-zinc-400 mt-1 hidden sm:block" />
          </div>

          {/* Target node */}
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center shrink-0">
              <TargetIcon className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block">
                Outcome
              </span>
              <span className="font-bold text-zinc-900 text-sm sm:text-base">
                {currentFlow.target}
              </span>
            </div>
          </div>
        </div>

        {/* Detailed Explanation */}
        <div className="mt-6 space-y-4">
          <p className="text-sm text-zinc-600 leading-relaxed">
            {currentFlow.description}
          </p>

          {/* Live Data Simulation Box */}
          <div className="bg-zinc-900 text-zinc-200 rounded-xl p-4 text-xs font-mono space-y-2">
            <div className="flex items-center justify-between text-zinc-400 pb-2 border-b border-zinc-800">
              <span>Automatic Data Transfer Preview</span>
              <span className="text-emerald-400 flex items-center gap-1">
                <Check className="w-3 h-3" /> Zero Manual Re-entry
              </span>
            </div>
            <div className="space-y-1 pt-1 text-[13px]">
              <div>
                <span className="text-zinc-500">Source: </span>
                <span className="text-blue-300 font-sans">{currentFlow.exampleData.from}</span>
              </div>
              <div>
                <span className="text-zinc-500">Event: </span>
                <span className="text-amber-300 font-sans">{currentFlow.exampleData.actionDetail}</span>
              </div>
              <div>
                <span className="text-zinc-500">Output: </span>
                <span className="text-emerald-300 font-sans font-medium">{currentFlow.exampleData.result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

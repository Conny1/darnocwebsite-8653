'use client';

import {
  Users,
  Receipt,
  CheckSquare,
  Calendar,
  FileText,
  Check,
  Clock,
  ArrowRight,
  Download,
  Phone,
  Building,
  DollarSign,
  Tag,
  ChevronRight,
} from 'lucide-react';

export function CrmMockup() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 sm:p-6 text-zinc-900 w-full overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Pipeline View
          </span>
          <h4 className="text-sm font-extrabold text-zinc-900">Active Deals & Leads</h4>
        </div>
        <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md">
          KES 240,000 Pipeline
        </span>
      </div>

      <div className="grid grid-cols-3 gap-3 text-xs">
        {/* Stage 1: Lead */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-700">Leads</span>
            <span className="text-[10px] text-zinc-400 font-semibold">2</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-zinc-200 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900">Zawadi Tech</p>
            <p className="text-zinc-500 text-[11px]">Brand & UI Design</p>
            <div className="flex items-center justify-between pt-1 text-[11px] text-zinc-700 font-medium">
              <span>KES 60,000</span>
              <span className="text-[10px] text-amber-600 bg-amber-50 px-1 rounded">Call today</span>
            </div>
          </div>
        </div>

        {/* Stage 2: Proposal */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-700">Proposal</span>
            <span className="text-[10px] text-zinc-400 font-semibold">1</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-blue-200 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900">Safari Creative</p>
            <p className="text-zinc-500 text-[11px]">Mobile App MVP</p>
            <div className="flex items-center justify-between pt-1 text-[11px] text-zinc-700 font-medium">
              <span>KES 95,000</span>
              <span className="text-[10px] text-blue-600 bg-blue-50 px-1 rounded">Sent</span>
            </div>
          </div>
        </div>

        {/* Stage 3: Closed Won */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-700">Won</span>
            <span className="text-[10px] text-zinc-400 font-semibold">1</span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-emerald-200 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900">Nairobi Logistics</p>
            <p className="text-zinc-500 text-[11px]">Website Redesign</p>
            <div className="flex items-center justify-between pt-1 text-[11px] text-emerald-700 font-bold">
              <span>KES 85,000</span>
              <span className="text-[10px] text-emerald-600 bg-emerald-50 px-1 rounded">Invoiced</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
        <span className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-blue-600" />
          Automated WhatsApp & Email follow-up scheduled
        </span>
        <span className="font-semibold text-blue-600">Client History →</span>
      </div>
    </div>
  );
}

export function InvoicingMockup() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 sm:p-6 text-zinc-900 w-full overflow-hidden">
      {/* Invoice Header */}
      <div className="flex items-start justify-between pb-4 mb-4 border-b border-zinc-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="font-extrabold text-sm text-zinc-900">Invoice #INV-2026-039</span>
            <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">
              PAID
            </span>
          </div>
          <p className="text-xs text-zinc-500 mt-0.5">Billed to: Kibo Media Kenya</p>
        </div>
        <div className="text-right">
          <span className="text-lg font-black text-zinc-900 tabular-nums">KES 65,000</span>
          <span className="text-[10px] text-zinc-400 block">Due date: 24 Oct 2026</span>
        </div>
      </div>

      {/* Line Items */}
      <div className="space-y-2 text-xs">
        <div className="p-2.5 bg-zinc-50 rounded-lg flex items-center justify-between">
          <div>
            <p className="font-semibold text-zinc-900">Brand Identity System</p>
            <p className="text-[11px] text-zinc-500">Logo, brand guidelines, typography</p>
          </div>
          <span className="font-bold text-zinc-800 tabular-nums">KES 35,000</span>
        </div>

        <div className="p-2.5 bg-zinc-50 rounded-lg flex items-center justify-between">
          <div>
            <p className="font-semibold text-zinc-900">Landing Page Development</p>
            <p className="text-[11px] text-zinc-500">Responsive Next.js + Tailwind site</p>
          </div>
          <span className="font-bold text-zinc-800 tabular-nums">KES 30,000</span>
        </div>
      </div>

      {/* M-Pesa & Payment Badge */}
      <div className="mt-4 p-3 bg-emerald-50/60 border border-emerald-200/60 rounded-xl flex items-center justify-between text-xs text-emerald-950">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center font-black text-[10px]">
            M
          </div>
          <div>
            <span className="font-bold block">Paid via M-Pesa Paybill</span>
            <span className="text-[10px] text-emerald-800">Ref: QDH382109K · Auto-Receipt Sent</span>
          </div>
        </div>
        <button
          type="button"
          className="text-xs font-semibold text-emerald-800 hover:text-emerald-950 flex items-center gap-1"
        >
          <Download className="w-3.5 h-3.5" />
          PDF
        </button>
      </div>
    </div>
  );
}

export function ProjectsMockup() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 sm:p-6 text-zinc-900 w-full overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block">
            Kanban Board
          </span>
          <h4 className="text-sm font-extrabold text-zinc-900">E-Commerce Web Build</h4>
        </div>
        <span className="text-xs text-zinc-500 font-medium">Due in 5 days</span>
      </div>

      <div className="grid grid-cols-2 gap-3 text-xs">
        {/* Column 1: In Progress */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-700">In Progress</span>
            <span className="w-2 h-2 rounded-full bg-blue-500" />
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-zinc-200 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900">Checkout M-Pesa Flow</p>
            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Task #14</span>
              <span className="text-blue-600 font-medium">80% Done</span>
            </div>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-zinc-200 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900">Mobile Navigation Polish</p>
            <div className="flex items-center justify-between text-[10px] text-zinc-400">
              <span>Task #15</span>
              <span className="text-zinc-600 font-medium">Tomorrow</span>
            </div>
          </div>
        </div>

        {/* Column 2: Completed */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-xl p-3 space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-bold text-zinc-700">Done</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-emerald-200/80 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900 flex items-center gap-1.5 line-through text-zinc-500">
              Product Catalog Grid
            </p>
            <span className="text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
              Verified by Client
            </span>
          </div>
          <div className="bg-white p-2.5 rounded-lg border border-emerald-200/80 shadow-xs space-y-1">
            <p className="font-semibold text-zinc-900 flex items-center gap-1.5 line-through text-zinc-500">
              Typography Setup
            </p>
            <span className="text-[10px] text-zinc-400">Completed yesterday</span>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
        <span>Linked to Client: Rafiki Apparel</span>
        <span className="text-blue-600 font-medium">View Project Files →</span>
      </div>
    </div>
  );
}

export function CalendarMockup() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 sm:p-6 text-zinc-900 w-full overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            Coming Soon
          </span>
          <h4 className="text-sm font-extrabold text-zinc-900">Direct Client Booking</h4>
        </div>
        <span className="text-[10px] font-semibold bg-zinc-100 text-zinc-700 px-2 py-0.5 rounded">
          Nairobi (EAT, UTC+3)
        </span>
      </div>

      <div className="bg-zinc-50 p-4 rounded-xl border border-zinc-200 space-y-3 text-xs">
        <div className="flex items-center justify-between">
          <span className="font-bold text-zinc-800">30-Min Strategy Call</span>
          <span className="text-zinc-500 font-medium">Free Discovery</span>
        </div>
        <p className="text-zinc-600 text-[11px]">
          Share modulor.co.ke/book/yourname. Clients pick open slots without WhatsApp back-and-forth.
        </p>

        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="p-2 bg-white rounded-lg border border-blue-600 text-center text-blue-600 font-bold shadow-xs">
            10:00 AM
          </div>
          <div className="p-2 bg-white rounded-lg border border-zinc-200 text-center text-zinc-700 font-medium hover:border-zinc-300">
            02:30 PM
          </div>
          <div className="p-2 bg-white rounded-lg border border-zinc-200 text-center text-zinc-700 font-medium hover:border-zinc-300">
            04:00 PM
          </div>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
        <span>Google & Outlook Sync</span>
        <span className="text-blue-600 font-semibold">Auto-adds to CRM</span>
      </div>
    </div>
  );
}

export function DocumentsMockup() {
  return (
    <div className="bg-white border border-zinc-200 rounded-2xl shadow-lg p-5 sm:p-6 text-zinc-900 w-full overflow-hidden">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-100">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block">
            Coming Soon
          </span>
          <h4 className="text-sm font-extrabold text-zinc-900">Client Files & Contracts</h4>
        </div>
        <span className="text-xs text-zinc-500 font-medium">Cloud Vault</span>
      </div>

      <div className="space-y-2 text-xs">
        <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">
              PDF
            </div>
            <div>
              <p className="font-bold text-zinc-900">Standard Freelance Contract 2026</p>
              <p className="text-[11px] text-zinc-500">Linked to: Zawadi Tech · Signed</p>
            </div>
          </div>
          <Download className="w-4 h-4 text-zinc-400" />
        </div>

        <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
              DOC
            </div>
            <div>
              <p className="font-bold text-zinc-900">Project Scope & Deliverables</p>
              <p className="text-[11px] text-zinc-500">Linked to: Brand Refresh Project</p>
            </div>
          </div>
          <Download className="w-4 h-4 text-zinc-400" />
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
        <span>Instant PDF export</span>
        <span className="text-blue-600 font-semibold">Share via secure link</span>
      </div>
    </div>
  );
}

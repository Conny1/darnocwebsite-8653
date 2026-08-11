"use client";
import  { useState } from 'react'
import { Calendar, Check, CreditCard, Layout, Link2Off, MoveRight, Plus, Settings, TriangleAlert, Unlink, Users, X } from "lucide-react";

function ProblemCards() {
      const [hoveredCard, setHoveredCard] = useState<"legacy" | "optimized" | null>(null);

  return (
     <div className="relative mt-20 lg:mt-0 min-h-[450px] md:min-h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px]">
              
              {/* Legacy Card */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                  ${hoveredCard === "legacy" ? "z-30 scale-[1.02] -translate-x-4 -translate-y-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]" : hoveredCard === "optimized" ? "z-10 scale-[0.98] translate-x-16 translate-y-16 opacity-30 blur-[1px]" : "z-20 translate-x-0 translate-y-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"}
                  w-[85%] h-[85%] md:w-[90%] md:h-[90%]
                `}
                onMouseEnter={() => setHoveredCard("legacy")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-full bg-[#f9fafb] border border-zinc-200 rounded-[2rem] overflow-hidden flex flex-col relative shadow-sm">
                  <div className="h-10 border-b border-zinc-200 bg-zinc-100/50 flex items-center px-6 justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                      <div className="w-2.5 h-2.5 rounded-full bg-zinc-300" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-zinc-200/50 text-[8px] font-bold text-zinc-400 uppercase tracking-widest">Legacy_v4.2.8_Enterprise</div>
                    <div className="w-10" />
                  </div>

                  <div className="flex-1 p-4 md:p-6 relative overflow-hidden bg-white/50">
                    <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-zinc-100 bg-zinc-50/50 p-2 flex flex-col gap-2">
                       {[...Array(12)].map((_, i) => (
                         <div key={i} className="h-2 w-full bg-zinc-200 rounded-full" />
                       ))}
                    </div>

                    <div className="ml-16 space-y-4">
                       <div className="flex items-center justify-between mb-4">
                         <div className="h-4 w-32 bg-zinc-200 rounded" />
                         <div className="px-2 py-1 bg-red-50 border border-red-100 text-red-600 text-[10px] font-bold rounded flex items-center gap-1">
                           <TriangleAlert className="w-3 h-3" />
                           SYSTEM OVERLOAD
                         </div>
                       </div>

                       <div className="grid grid-cols-3 gap-2 opacity-40">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="h-12 bg-zinc-100 border border-zinc-200 rounded-lg p-2">
                               <div className="h-1.5 w-full bg-zinc-200 rounded-full mb-2" />
                               <div className="h-1.5 w-2/3 bg-zinc-200 rounded-full" />
                            </div>
                          ))}
                       </div>
                    </div>

                    <div className="absolute top-12 left-24 w-48 h-40 bg-white border border-zinc-200 rounded-xl shadow-xl p-4 rotate-2 z-10">
                       <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] font-bold text-zinc-600 uppercase">CRM Module</span>
                          <X className="w-3 h-3 text-zinc-400" />
                       </div>
                       <div className="space-y-2">
                          <div className="h-2 w-full bg-zinc-100 rounded" />
                          <div className="h-2 w-4/5 bg-zinc-100 rounded" />
                          <div className="h-6 w-full bg-zinc-50 border border-zinc-100 rounded flex items-center px-2">
                             <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse mr-2" />
                             <span className="text-[8px] text-zinc-400">Sync Error...</span>
                          </div>
                       </div>
                    </div>

                    <div className="absolute bottom-10 right-10 w-44 h-48 bg-white border border-zinc-300 rounded-xl shadow-2xl p-4 -rotate-3 z-20">
                       <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-2">
                          <span className="text-[10px] font-bold text-zinc-600 uppercase">Accounting</span>
                          <Settings className="w-3 h-3 text-zinc-400" />
                       </div>
                       <div className="space-y-3">
                          <div className="flex justify-between items-center">
                             <span className="text-[9px] text-zinc-400">Monthly Cost</span>
                             <span className="text-[10px] font-bold text-zinc-900">$1,200.00</span>
                          </div>
                          <div className="h-8 bg-blue-50 border border-blue-100 rounded flex flex-col items-center justify-center cursor-not-allowed">
                             <span className="text-[9px] font-bold text-blue-600">UPGRADE PLAN</span>
                             <span className="text-[7px] text-blue-400">Unlock Features</span>
                          </div>
                          <div className="space-y-1.5">
                             <div className="h-1.5 w-full bg-zinc-100 rounded-full" />
                             <div className="h-1.5 w-5/6 bg-zinc-100 rounded-full" />
                             <div className="h-1.5 w-4/6 bg-zinc-100 rounded-full" />
                          </div>
                       </div>
                    </div>

                    <div className="absolute top-24 right-4 w-32 h-24 bg-white/80 backdrop-blur-sm border border-zinc-200 rounded-lg shadow-lg p-3 rotate-6 z-0 opacity-60">
                       <span className="text-[8px] font-bold text-zinc-400 block mb-2 uppercase tracking-tighter">Marketing Suite</span>
                       <div className="grid grid-cols-2 gap-1">
                          {[...Array(4)].map((_, i) => <div key={i} className="h-3 bg-zinc-100 rounded-sm" />)}
                       </div>
                    </div>

                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none">
                       <div className="flex gap-4">
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-red-100 flex items-center justify-center text-red-500 shadow-lg">
                             <Unlink className="w-5 h-5" />
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white border-2 border-red-100 flex items-center justify-center text-red-500 shadow-lg mt-8">
                             <Link2Off className="w-5 h-5" />
                          </div>
                       </div>
                    </div>

                    <div className="absolute inset-0 flex flex-wrap gap-2 p-10 opacity-[0.05] pointer-events-none">
                       {[...Array(40)].map((_, i) => (
                         <div key={i} className="h-5 w-12 bg-zinc-900 rounded-md" />
                       ))}
                    </div>
                  </div>

                  <div className="h-8 border-t border-red-100 bg-red-50/30 flex items-center px-6 justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-400" />
                       <span className="text-[9px] font-medium text-red-500 uppercase tracking-tight">42 modules require attention</span>
                    </div>
                    <div className="text-[8px] font-mono text-zinc-400">EB_0x1A42_FEAT_RESTRICTED</div>
                  </div>
                </div>
              </div>

              {/* Modulor Card */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                  ${hoveredCard === "optimized" ? "z-30 scale-[1.02] translate-x-4 -translate-y-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.2)]" : hoveredCard === "legacy" ? "z-10 scale-[0.98] -translate-x-16 translate-y-16 opacity-30 blur-[1px]" : "z-20 translate-x-12 translate-y-12 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"}
                  w-[85%] h-[85%] md:w-[90%] md:h-[90%]
                `}
                onMouseEnter={() => setHoveredCard("optimized")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-full bg-white border border-zinc-200/60 rounded-[2rem] overflow-hidden p-6 md:p-8 flex flex-col gap-5 relative">
                  <div className="flex items-center justify-between">
                    <div className="flex gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-500" />
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <div className="w-2 h-2 rounded-full bg-blue-300" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-blue-600/5 border border-blue-600/10 text-[9px] font-bold text-blue-600 uppercase tracking-widest">Your Workspace</div>
                  </div>

                  <div className="flex-1 flex flex-col gap-6">
                    <div className="grid grid-cols-3 gap-3">
                      <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100/50 flex flex-col gap-1 transition-all hover:bg-blue-50">
                        <span className="text-[9px] text-blue-600 font-bold uppercase tracking-tighter">Active Leads</span>
                        <span className="text-xl font-bold text-zinc-900">12</span>
                      </div>
                      <div className="p-3 bg-emerald-50/50 rounded-xl border border-emerald-100/50 flex flex-col gap-1 transition-all hover:bg-emerald-50">
                        <span className="text-[9px] text-emerald-600 font-bold uppercase tracking-tighter">Revenue</span>
                        <span className="text-xl font-bold text-zinc-900">$4,250</span>
                      </div>
                      <div className="p-3 bg-zinc-50 rounded-xl border border-zinc-100 flex flex-col gap-1 transition-all hover:bg-zinc-100/50">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-tighter">Projects</span>
                        <span className="text-xl font-bold text-zinc-900">8</span>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Active Modules</span>
                        <div className="w-4 h-4 text-zinc-300"><Settings className="w-full h-full" /></div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "CRM", icon: <Users className="w-4 h-4" />, color: "bg-blue-600" },
                          { name: "Invoicing", icon: <CreditCard className="w-4 h-4" />, color: "bg-blue-600" },
                          { name: "Projects", icon: <Layout className="w-4 h-4" />, color: "bg-blue-600" },
                          { name: "Calendar", icon: <Calendar className="w-4 h-4" />, color: "bg-blue-600" }
                        ].map((mod) => (
                          <div key={mod.name} className="flex items-center justify-between p-3 border border-zinc-100 rounded-xl bg-white shadow-sm transition-all hover:border-blue-200">
                            <div className="flex items-center gap-3">
                              <div className={`w-8 h-8 rounded-lg ${mod.color} flex items-center justify-center text-white shadow-sm shadow-blue-200`}>
                                {mod.icon}
                              </div>
                              <span className="text-xs font-bold text-zinc-800">{mod.name}</span>
                            </div>
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                              <Check className="w-3 h-3" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-auto group cursor-pointer">
                      <div className="flex items-center justify-between bg-zinc-900 hover:bg-zinc-800 text-white p-3.5 rounded-xl transition-all shadow-lg shadow-zinc-200">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center">
                            <Plus className="w-4 h-4" />
                          </div>
                          <span className="text-xs font-bold">Install More Modules</span>
                        </div>
                        <MoveRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-4 right-8 pointer-events-none opacity-20">
                    <div className="flex items-center gap-2">
                       <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
                       <span className="text-[8px] font-bold text-zinc-900 tracking-tight">SYSTEM_READY</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>  )
}

export default ProblemCards


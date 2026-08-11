"use client";
import { Check } from "lucide-react";
import { useState } from "react";

const PricingSection = () => {
  // Track exactly which individual modules are turned on
  const [activeModules, setActiveModules] = useState<{ [key: string]: boolean }>({
    "CRM": true,
    "Invoicing & Payments": true,
    "Projects & Tasks": false,
    "Calendar & Scheduling": false,
  });

  // Individual pricing per module matching your ecosystem values
  const modulePrices: { [key: string]: number } = {
    "CRM": 300,
    "Invoicing & Payments": 400,
    "Projects & Tasks": 300,
  };

  const toggleModule = (name: string) => {
    setActiveModules(prev => ({ ...prev, [name]: !prev[name] }));
  };

  // Calculate total dynamically based on exactly which specific items are active
  const totalCost = Object.keys(activeModules).reduce((sum, name) => {
    return sum + (activeModules[name] ? modulePrices[name] : 0);
  }, 0);

  return (
    <section className="py-24 px-6 bg-white" id="pricing">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Granular Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Build Your Own Bill</h2>
          <p className="text-zinc-600 text-lg">
            No forced packages. Pick the exact modules your business runs on. Toggle items on or off instantly.
          </p>
        </div>

        {/* Dynamic Matrix Box */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-5 gap-8 bg-zinc-50 border border-zinc-200 p-6 md:p-10 rounded-3xl items-center shadow-sm">
          
          {/* Left Module Selection List */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xl font-bold text-zinc-900 mb-2">Select Active Modules</h3>
            
            <div className="space-y-2.5">
              {Object.keys(modulePrices).map((name) => {
                const isActive = activeModules[name];
                return (
                  <div 
                    key={name}
                    onClick={() => toggleModule(name)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all cursor-pointer bg-white select-none ${
                      isActive 
                        ? "border-blue-500 ring-1 ring-blue-500/10 shadow-sm" 
                        : "border-zinc-200 hover:border-zinc-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center border transition-all ${
                        isActive ? "bg-blue-600 border-blue-600 text-white" : "border-zinc-300 bg-zinc-50"
                      }`}>
                        {isActive && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <span className="text-sm font-bold text-zinc-800">{name}</span>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-semibold text-zinc-400 block uppercase tracking-wider text-[9px]">Monthly</span>
                      <span className="text-sm font-extrabold text-zinc-900">KES {modulePrices[name].toLocaleString()}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Base platform clarification */}
            <div className="p-3 bg-zinc-100 rounded-xl border border-zinc-200/60 flex justify-between items-center text-xs">
              <span className="text-zinc-500 font-medium">Modulor Base Engine Dashboard</span>
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-[10px]">Included Free</span>
            </div>
          </div>

          {/* Right Dynamic Live Invoice Box */}
          <div className="md:col-span-2 p-8 bg-zinc-900 rounded-2xl text-white text-center space-y-6 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div className="space-y-2">
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold block">Your Monthly Total</span>
              <div className="text-4xl font-black tracking-tight text-white transition-all duration-300">
                KES {totalCost.toLocaleString()}
                <span className="text-xs text-zinc-400 font-normal">/mo</span>
              </div>
            </div>
            
            <div className="h-[1px] bg-zinc-800 w-full" />

            {/* Itemized summary breakdown */}
            <div className="text-left space-y-2 text-xs text-zinc-400 max-h-[120px] overflow-y-auto">
              {Object.keys(activeModules).filter(name => activeModules[name]).length === 0 ? (
                <p className="text-center italic text-zinc-500 py-2">No modules selected (Core engine active)</p>
              ) : (
                Object.keys(activeModules).map((name) => {
                  if (!activeModules[name]) return null;
                  return (
                    <div key={name} className="flex justify-between items-center text-[11px]">
                      <span className="truncate max-w-[140px] text-zinc-300">{name}</span>
                      <span className="font-mono text-zinc-400">+{modulePrices[name]}</span>
                    </div>
                  );
                })
              )}
            </div>

            <a 
              href="https://dashboard.modulor.co.ke/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-xs transition-all shadow-lg shadow-blue-900/40"
            >
              Deploy This Stack
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
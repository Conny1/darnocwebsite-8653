"use client";

import { useState, useEffect } from "react";
import { 
  MoveRight, Check, Plus, Mail, Layout, Users, Zap, 
  Shield, CreditCard, Search, Settings, 
  Calendar, TriangleAlert, Unlink, Link2Off, X, Infinity,
  Minus,
  BarChart2,
  Puzzle
} from "lucide-react";

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3" : "bg-transparent py-5"}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
              <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center text-white text-sm">M</div>
              <span>Modulor</span>
            </a>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Features</a>
              <a href="#modules" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Modules</a>
              <a href="#pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Pricing</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="https://dashboard.modulor.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              Sign In
            </a>
            <a 
              href="https://dashboard.modulor.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-all shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Hero = () => {
  const [installedApps, setInstalledApps] = useState(["CRM", "Projects & Tasks"]);

  const apps = [
    { name: "CRM", description: "Manage leads, clients, and sales pipeline", icon: <Users className="w-5 h-5" /> },
    { name: "Invoicing & Payments", description: "Create invoices, accept payments, track revenue", icon: <CreditCard className="w-5 h-5" /> },
    { name: "Projects & Tasks", description: "Manage work with projects, tasks, and deadlines", icon: <Layout className="w-5 h-5" /> },
    { name: "Calendar & Scheduling", description: "Book meetings and manage availability", icon: <Calendar className="w-5 h-5" /> },
    { name: "File Manager", description: "Store and link documents across your business", icon: <Shield className="w-5 h-5" /> },
  ];

  const handleToggle = (appName: string) => {
    setInstalledApps(prev => 
      prev.includes(appName) 
        ? prev.filter(a => a !== appName) 
        : [...prev, appName]
    );
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 leading-[1.1] mb-8">
            Run Your Business with <br />
            <span className="italic font-serif font-light text-zinc-600">Only the Tools You Need</span>
          </h1>
          <p className="text-xl md:text-2xl text-zinc-700 mb-10 leading-relaxed max-w-2xl">
            A modular workspace for entrepreneurs - install CRM, invoicing, projects, and more as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a 
              href="https://dashboard.modulor.co.ke/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded flex items-center justify-center gap-2 transition-all shadow-lg shadow-zinc-200"
            >
              Get Started Free
              <MoveRight className="w-4 h-4" />
            </a>
            <a 
              href="#modules" 
              className="px-8 py-4 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 font-semibold rounded text-center transition-all"
            >
              View Modules
            </a>
          </div>
        </div>
        
        <div className="relative mt-12">
          <div className="bg-white rounded-2xl border border-zinc-200 shadow-2xl overflow-hidden flex flex-col min-h-[600px]">
            {/* App Store Header */}
            <div className="h-16 border-b border-zinc-100 px-8 flex items-center justify-between bg-zinc-50/50">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                  <div className="w-3 h-3 rounded-full bg-zinc-300" />
                </div>
                <div className="h-8 w-[1px] bg-zinc-200 mx-2" />
                <h3 className="font-bold text-zinc-900 tracking-tight text-sm">Modulor App Center</h3>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-white border border-zinc-200 rounded-lg shadow-sm">
                   <div className="w-4 h-4 text-zinc-400"><Search className="w-full h-full" /></div>
                   <span className="text-xs font-medium text-zinc-400">Search apps...</span>
                </div>
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">JD</div>
              </div>
            </div>
            
            <div className="flex-1 p-8 md:p-12 bg-white">
              <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <h2 className="text-2xl font-bold text-zinc-900 mb-1">Your Marketplace</h2>
                    <p className="text-zinc-500 text-sm">Pick and choose the tools for your workspace.</p>
                  </div>
                  <div className="flex items-center gap-2">
                     <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase border border-blue-100">
                        {installedApps.length} INSTALLED
                     </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {apps.map((app) => {
                    const isInstalled = installedApps.includes(app.name);
                    return (
                      <div key={app.name} className={`p-6 bg-white border rounded-2xl transition-all group ${isInstalled ? "border-blue-100 shadow-sm" : "border-zinc-100 hover:border-zinc-200"}`}>
                        <div className="flex items-start justify-between mb-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isInstalled ? "bg-blue-600 text-white" : "bg-zinc-50 text-zinc-400 group-hover:text-zinc-600"}`}>
                            {app.icon}
                          </div>
                          {isInstalled && (
                            <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                        <h4 className="font-bold text-zinc-900 mb-2">{app.name}</h4>
                        <p className="text-zinc-500 text-xs leading-relaxed mb-6 h-8 overflow-hidden line-clamp-2">
                          {app.description}
                        </p>
                        <button 
                          onClick={() => handleToggle(app.name)}
                          className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                          isInstalled 
                            ? "bg-zinc-100 text-zinc-500 hover:bg-zinc-200" 
                            : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                        }`}>
                          {isInstalled ? "Uninstall" : "Install App"}
                        </button>
                      </div>
                    );
                  })}
                  <div className="p-6 bg-zinc-50/30 border border-zinc-100 border-dashed rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-50 transition-colors">
                    <div className="w-10 h-10 bg-white border border-zinc-200 border-dashed rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-200 transition-all mb-4">
                      <Plus className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors text-xs">Request App</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-96 h-96 bg-zinc-900/5 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  );
};

const ProblemSection = () => {
  const [hoveredCard, setHoveredCard] = useState<"legacy" | "optimized" | null>(null);

  const problems = [
    { title: "Bloated Software", description: "Most SaaS tools come with hundreds of features you'll never use, making them slow and confusing." },
    { title: "Expensive Bundles", description: "Paying for a 'Pro' plan just for one feature? That's old school. We believe in modularity." },
    { title: "Hard to Learn", description: "Enterprise tools require weeks of training. Modulor is designed for speed and intuition." },
    { title: "Disconnected Tools", description: "Switching between 10 different apps is tiring. Modulor connects everything into one dashboard." }
  ];

  return (
    <section className="py-24 px-6 bg-[#1a1a24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="w-full">
            <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">The Problem</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Business Software <br className="hidden md:block" /> is Broken.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Enterprise tools weren't built for entrepreneurs. They're built to upsell. Entrepreneurs deserve simpler tools.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {problems.map((p, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm shadow-blue-500/50" />
                    <h3 className="font-bold text-base uppercase tracking-wider text-white">{p.title}</h3>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </div>
          
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
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  return (
    <section className="py-24 px-6 bg-white" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-24 items-start">
          <div className="sticky top-32 z-10">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
              A Modular Approach to <br /> Business Tools.
            </h2>
            <div className="w-20 h-1.5 bg-zinc-900 mb-8" />
            <p className="text-zinc-700 text-lg md:text-xl leading-relaxed">
              Start simple. Add tools as you grow. Never pay for what you don't use.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-12 z-20">
            <div className="group space-y-4 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-900 mb-6 shadow-sm group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">One Account</h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                One login for your entire business. No more password managers full of dozens of different SaaS credentials.
              </p>
            </div>
            <div className="group space-y-4 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-900 mb-6 shadow-sm group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                <Plus className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Install What You Need</h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                Browse the Modulor Marketplace and install only the modules that serve your current business stage.
              </p>
            </div>
            <div className="group space-y-4 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-900 mb-6 shadow-sm group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                <Zap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Everything Connected</h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                Data flows seamlessly between modules. Your CRM, Invoicing, and Projects work together without any manual setup.
              </p>
            </div>
            <div className="group space-y-4 p-8 rounded-2xl bg-zinc-50 border border-zinc-100 hover:border-blue-200 hover:bg-blue-50/30 transition-all duration-300">
              <div className="w-14 h-14 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-900 mb-6 shadow-sm group-hover:border-blue-300 group-hover:text-blue-600 transition-colors">
                <CreditCard className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Unified Billing</h3>
              <p className="text-zinc-600 text-base md:text-lg leading-relaxed">
                One monthly invoice for all your tools. Add or remove modules at any time and your billing adjusts automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ModulesSection = () => {
  const modules = [
    { title: "CRM", description: "Manage leads, clients, and sales pipeline templates natively.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Users className="w-5 h-5" /> },
    { title: "Invoicing & Payments", description: "Create professional invoices, accept payments, and track dynamic revenue streams.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Projects & Tasks", description: "Manage product execution cleanly with boards, tasks, milestones, and deadlines.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Layout className="w-5 h-5" /> },
    { title: "Calendar & Scheduling", description: "Book meetings, sync internal teams, and manage client availability timelines.", status: "Coming Soon", statusColor: "text-blue-700 bg-blue-50", icon: <Calendar className="w-5 h-5" /> },
    { title: "Workflows & Automation", description: "Connect with external tools and automate workflows with our native integration builder.", status: "Coming Soon", statusColor: "text-zinc-500 bg-zinc-100", icon: <Puzzle className="w-5 h-5" /> },
         
    ];

  return (
    <section className="py-24 px-6 bg-zinc-50 border-y border-zinc-200" id="modules">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-3 block">Ecosystem Overview</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-4">Explore the Modulor Ecosystem</h2>
          <p className="text-zinc-600 text-lg">Every utility operates as an independent micro-frontend element inside your unified dashboard framework.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, idx) => (
            <div key={idx} className="p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-blue-300 transition-all duration-300">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-xl bg-zinc-900 text-white flex items-center justify-center">
                    {m.icon}
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${m.statusColor}`}>
                    {m.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-2">{m.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{m.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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

const CTASection = () => {
  return (
    <section className="py-24 px-6 bg-[#1a1a24] text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight">Ready to Modernize Your Operations?</h2>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto leading-relaxed">
          Create an account in minutes, activate your target configuration apps, and scale your business workflow natively.
        </p>
        <div>
          <a 
            href="https://dashboard.modulor.co.ke/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-zinc-900 font-bold rounded-xl hover:bg-zinc-100 transition-all shadow-xl"
          >
            Launch Your Space Free
            <MoveRight className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-12 px-6 text-zinc-500 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2 text-white font-bold text-sm">
          <div className="w-6 h-6 bg-white text-zinc-900 rounded flex items-center justify-center text-xs">M</div>
          <span>Modulor</span>
        </div>
        <div>
          <p>© {new Date().getFullYear()} Modulor Workspace. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#modules" className="hover:text-white transition-colors">Modules</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>
      </div>
    </footer>
  );
};

export default function RootLayoutPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
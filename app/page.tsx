"use client"
import { useState, useEffect } from "react";
import { 
  MoveRight, Check, Plus, Minus, Mail, Layout, Users, Zap, 
  Shield, Globe, CreditCard, Search, Bell, Settings, Monitor, 
  Smartphone, Filter, Lock, Calendar, MessageSquare, PieChart,
  Layers, Package, ChevronRight, X, Link2Off, DollarSign, Unlink,
  TriangleAlert, Activity, ArrowRightLeft, ExternalLink, Infinity
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3" : "bg-transparent py-5"}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-bold tracking-tight text-zinc-900 flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 rounded flex items-center justify-center text-white text-sm">M</div>
            <span>Modulor</span>
          </a>
          <div className="hidden md:!flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Features</a>
            <a href="#modules" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Modules</a>
            <a href="#pricing" className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors">Pricing</a>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <a 
            href="https://darmoc-client.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
          >
            Sign In
          </a>
          <a 
            href="https://darmoc-client.netlify.app/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded transition-all shadow-sm"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
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
            A modular workspace for entrepreneurs — install CRM, invoicing, projects, and more as your business grows.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <a 
              href="https://darmoc-client.netlify.app/" 
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
                    <h4 className="text-2xl font-bold text-zinc-900 mb-1">Your Marketplace</h4>
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
                            <div className="w-6 h-6 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center animate-in zoom-in duration-300">
                              <Check className="w-3.5 h-3.5" />
                            </div>
                          )}
                        </div>
                        <h5 className="font-bold text-zinc-900 mb-2">{app.name}</h5>
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
          
          {/* Decorative elements */}
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
            {/* Stacking Container */}
            <div className="relative w-full max-w-[500px] h-[400px] md:h-[500px]">
              
              {/* Legacy / Bloated Card (Left-ish) */}
              <div 
                className={`absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] cursor-pointer
                  ${hoveredCard === "legacy" ? "z-30 scale-[1.02] -translate-x-4 -translate-y-4 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)]" : hoveredCard === "optimized" ? "z-10 scale-[0.98] translate-x-16 translate-y-16 opacity-30 blur-[1px]" : "z-20 translate-x-0 translate-y-0 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)]"}
                  w-[85%] h-[85%] md:w-[90%] md:h-[90%]
                `}
                onMouseEnter={() => setHoveredCard("legacy")}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="w-full h-full bg-[#f9fafb] border border-zinc-200 rounded-[2rem] overflow-hidden flex flex-col relative shadow-sm">
                  {/* Browser/App Header Bar */}
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
                    {/* Cluttered Sidebar */}
                    <div className="absolute left-0 top-0 bottom-0 w-16 border-r border-zinc-100 bg-zinc-50/50 p-2 flex flex-col gap-2">
                       {[...Array(12)].map((_, i) => (
                         <div key={i} className="h-2 w-full bg-zinc-200 rounded-full" />
                       ))}
                    </div>

                    {/* Main Content Mess */}
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

                    {/* Overlapping Floating Windows */}
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

                    {/* Disconnected Symbols */}
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

                    {/* Buttons Chaos Background */}
                    <div className="absolute inset-0 flex flex-wrap gap-2 p-10 opacity-[0.05] pointer-events-none">
                       {[...Array(40)].map((_, i) => (
                         <div key={i} className="h-5 w-12 bg-zinc-900 rounded-md" />
                       ))}
                    </div>
                  </div>

                  {/* Warning Footer */}
                  <div className="h-8 border-t border-red-100 bg-red-50/30 flex items-center px-6 justify-between">
                    <div className="flex items-center gap-2">
                       <div className="w-2 h-2 rounded-full bg-red-400" />
                       <span className="text-[9px] font-medium text-red-500 uppercase tracking-tight">42 modules require attention</span>
                    </div>
                    <div className="text-[8px] font-mono text-zinc-400">EB_0x1A42_FEAT_RESTRICTED</div>
                  </div>
                </div>
              </div>

              {/* Modulor / Optimized Card (Right-ish) */}
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
                    {/* Dashboard Metrics */}
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

                    {/* Installed Modules */}
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

                    {/* Quick Action */}
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
          <div className="sticky top-32">
            <span className="text-blue-600 font-bold tracking-widest text-sm uppercase mb-4 block">The Solution</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-8 leading-tight">
              A Modular Approach to <br /> Business Tools.
            </h2>
            <div className="w-20 h-1.5 bg-zinc-900 mb-8" />
            <p className="text-zinc-700 text-lg md:text-xl leading-relaxed">
              Start simple. Add tools as you grow. Never pay for what you don't use.
            </p>
          </div>
          <div className="grid sm:grid-cols-1 gap-12">
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
    { title: "CRM", description: "Manage leads, clients, and sales pipeline", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Users className="w-5 h-5" /> },
    { title: "Invoicing & Payments", description: "Create invoices, accept payments, track revenue", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <CreditCard className="w-5 h-5" /> },
    { title: "Projects & Tasks", description: "Manage work with projects, tasks, and deadlines", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Layout className="w-5 h-5" /> },
    { title: "Calendar & Scheduling", description: "Book meetings and manage availability", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Globe className="w-5 h-5" /> },
    { title: "File Manager", description: "Store and link documents across your business", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Shield className="w-5 h-5" /> },
    { title: "More Coming", description: "We're constantly building new modules to help you run your business better.", status: "Coming Soon", statusColor: "text-zinc-600 bg-zinc-100", icon: <Plus className="w-5 h-5" /> }
  ];

  return (
    <section className="py-24 px-6 bg-zinc-50" id="modules">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Powerful modules for every stage.</h2>
          <p className="text-zinc-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Install what you need, uninstall what you don't. Your workspace evolves with your business.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((m, i) => (
            <div key={i} className="bg-white p-10 rounded-2xl border border-zinc-200 hover:border-blue-300 hover:shadow-2xl hover:shadow-blue-900/5 transition-all group relative overflow-hidden">
              <div className="flex justify-between items-start mb-8">
                <div className="w-12 h-12 bg-zinc-50 rounded-xl flex items-center justify-center text-zinc-600 group-hover:text-blue-600 group-hover:bg-blue-50 transition-colors">
                  {m.icon}
                </div>
                <span className={`text-sm font-bold uppercase tracking-widest px-3 py-1.5 rounded-full ${m.statusColor}`}>
                  {m.status}
                </span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{m.title}</h3>
              <p className="text-zinc-600 text-base leading-relaxed">{m.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    { title: "Create your workspace", description: "Sign up in seconds. Your business command center is ready." },
    { title: "Install the tools you need", description: "Browse modules and add only what's useful right now." },
    { title: "Run your business", description: "Everything works together from one unified dashboard." }
  ];

  return (
    <section className="py-24 px-6 bg-white border-y border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-16 relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-[1px] bg-zinc-100 -z-10" />
          
          {steps.map((step, i) => (
            <div key={i} className="relative bg-white pt-8">
              <div className="w-16 h-1.5 bg-zinc-900 mb-10" />
              <div className="text-blue-600 font-bold text-sm mb-4 tracking-widest">STEP 0{i + 1}</div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">{step.title}</h3>
              <p className="text-zinc-600 text-lg leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WhoItsFor = () => {
  const personas = [
    { title: "Solo Entrepreneurs", description: "Start lean. Add tools as your business grows." },
    { title: "Freelancers", description: "Track clients, projects, and payments in one place." },
    { title: "Consultants", description: "Manage engagements and deliver better client experiences." },
    { title: "Small Businesses", description: "Scale from 1 to 20 employees without changing tools." },
    { title: "Startups", description: "Move fast with tools that evolve as quickly as you do." }
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 mb-6">Built for the modern builder.</h2>
          <p className="text-zinc-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">Modulor adapts to your business, whether you're a team of one or twenty.</p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {personas.map((p, i) => (
            <div key={i} className="p-8 bg-zinc-50 rounded-2xl border border-zinc-100 hover:border-blue-200 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300">
              <h3 className="text-base font-bold text-zinc-900 mb-3">{p.title}</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const modulePrices = [
    { name: "CRM", price: "$9", sub: "per month", desc: "Pipeline & Lead Management" },
    { name: "Invoicing", price: "$5", sub: "per month", desc: "Payments & Revenue Tracking" },
    { name: "Projects", price: "$7", sub: "per month", desc: "Task & Deadline Tracking" },
    { name: "Calendar", price: "$5", sub: "per month", desc: "Scheduling & Availability" },
    { name: "File Manager", price: "TBD", sub: "Coming Soon", desc: "Secure Document Storage" },
  ];

  return (
    <section className="py-24 px-6 bg-zinc-50" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6 tracking-widest border border-blue-100">
             <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
             CORE WORKSPACE IS FREE FOREVER
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8">
             Pay Only for What You Use.
          </h2>
          <p className="text-zinc-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
             No complex tiers or expensive bundles. Choose the modules you need and build your own custom business suite.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mb-16">
          {modulePrices.map((m, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border border-zinc-200 shadow-sm flex flex-col items-center text-center hover:border-blue-300 hover:shadow-lg transition-all">
              <p className="text-sm font-bold text-zinc-600 uppercase tracking-[0.2em] mb-6">{m.name}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-zinc-900">{m.price}</span>
                {m.price !== "TBD" && <span className="text-zinc-600 text-sm ml-1">/mo</span>}
              </div>
              <p className="text-zinc-600 text-sm leading-relaxed">{m.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-xl mx-auto text-center">
           <p className="text-base text-zinc-600 italic mb-10">
             No credit card required. Cancel or remove modules anytime. <br className="hidden md:block" /> All modules include a 14-day free trial.
           </p>
           <a 
              href="https://darmoc-client.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-10 py-5 bg-zinc-900 hover:bg-zinc-800 text-white text-lg font-bold rounded-xl transition-all shadow-xl shadow-zinc-200 inline-block"
            >
              Start Free Workspace
            </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-24 px-6 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-2">
            <a href="/" className="text-2xl font-bold tracking-tight text-zinc-900 flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white text-base">M</div>
              <span>Modulor</span>
            </a>
            <p className="text-zinc-600 text-lg max-w-sm leading-relaxed">
              The modular workspace for modern entrepreneurs. Build your custom business stack, one module at a time.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-8">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Features</a></li>
              <li><a href="#modules" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Modules</a></li>
              <li><a href="#pricing" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-zinc-900 text-lg mb-8">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-600 hover:text-blue-600 text-base transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-10 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-600 text-sm">© {new Date().getFullYear()} Modulor. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors"><Globe className="w-5 h-5" /></a>
            <a href="#" className="text-zinc-400 hover:text-blue-600 transition-colors"><Mail className="w-5 h-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-900">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ModulesSection />
        <HowItWorks />
        <WhoItsFor />
        <Pricing />
        
        <section className="py-32 px-6 bg-[#1a1a24] text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-10 leading-tight">
              Start with what you need. <br className="hidden md:block" />Grow without limits.
            </h2>
            <p className="text-zinc-200 text-xl md:text-2xl mb-14 max-w-2xl mx-auto leading-relaxed">
              Join thousands of entrepreneurs building their businesses with modular tools.
            </p>
            <a 
              href="https://darmoc-client.netlify.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-3 px-12 py-6 bg-blue-600 hover:bg-blue-700 text-white text-xl font-bold rounded-xl transition-all shadow-2xl shadow-blue-600/20 hover:scale-[1.02]"
            >
              Create Your Workspace
              <MoveRight className="w-6 h-6" />
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

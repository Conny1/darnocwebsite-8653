"use client"
import { useState } from "react";

// Icons as simple SVG components
const IconCRM = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
  </svg>
);

const IconInvoice = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
  </svg>
);

const IconProjects = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
  </svg>
);

const IconCalendar = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
  </svg>
);

const IconFiles = () => (
  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

const IconArrow = () => (
  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
  </svg>
);

// Header Component
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-200/60">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <span className="text-white font-bold text-lg font-['Outfit']">D</span>
          </div>
          <span className="font-['Outfit'] font-bold text-xl tracking-tight text-slate-900">Darnoc</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Features</a>
          <a href="#modules" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Modules</a>
          <a href="#pricing" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Pricing</a>
          <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Sign In</a>
        </div>

        <div className="hidden md:block">
          <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 hover:shadow-xl hover:shadow-slate-900/30 hover:-translate-y-0.5 inline-block">
            Get Started Free
          </a>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 py-4 px-6 space-y-4">
          <a href="#features" className="block text-sm font-medium text-slate-600">Features</a>
          <a href="#modules" className="block text-sm font-medium text-slate-600">Modules</a>
          <a href="#pricing" className="block text-sm font-medium text-slate-600">Pricing</a>
          <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="block text-sm font-medium text-slate-600">Sign In</a>
          <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full px-5 py-2.5 bg-slate-900 text-white text-sm font-semibold rounded-xl text-center">
            Get Started Free
          </a>
        </div>
      )}
    </header>
  );
}

// Hero Section
function Hero() {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-violet-200/40 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-to-br from-indigo-50 via-white to-violet-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-medium text-indigo-700 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
            Launching Soon — Join the Waitlist
          </div>

          <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Run Your Business with{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Only the Tools You Need
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 leading-relaxed mb-10 font-['DM_Sans']">
            A modular workspace for entrepreneurs — install CRM, invoicing, projects, and more as your business grows.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-violet-600 text-white font-semibold rounded-2xl hover:from-indigo-700 hover:to-violet-700 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
              Get Started Free
              <IconArrow />
            </a>
            <a href="#modules" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-2xl border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all text-center">
              View Modules
            </a>
          </div>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/10 border border-slate-200/60 p-4 md:p-6">
            {/* Mock browser bar */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
              </div>
              <div className="flex-1 bg-slate-100 rounded-lg h-8 flex items-center justify-center">
                <span className="text-xs text-slate-400 font-mono">app.darnoc.io/dashboard</span>
              </div>
            </div>

            {/* Dashboard content */}
            <div className="grid grid-cols-12 gap-4">
              {/* Sidebar */}
              <div className="col-span-3 hidden md:block bg-slate-50 rounded-2xl p-4 space-y-3">
                <div className="flex items-center gap-2 px-3 py-2 bg-indigo-100 rounded-xl">
                  <div className="w-5 h-5 bg-indigo-500 rounded-lg" />
                  <span className="text-sm font-medium text-indigo-700">Dashboard</span>
                </div>
                {["CRM", "Invoicing", "Projects", "Calendar"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors">
                    <div className="w-5 h-5 bg-slate-300 rounded-lg" />
                    <span className="text-sm text-slate-600">{item}</span>
                  </div>
                ))}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 px-3 py-2 text-indigo-600 hover:bg-indigo-50 rounded-xl cursor-pointer">
                    <span className="text-lg">+</span>
                    <span className="text-sm font-medium">Add Module</span>
                  </div>
                </div>
              </div>

              {/* Main content */}
              <div className="col-span-12 md:col-span-9 space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { label: "Revenue", value: "$12,450", color: "bg-emerald-500" },
                    { label: "Clients", value: "48", color: "bg-blue-500" },
                    { label: "Projects", value: "12", color: "bg-violet-500" },
                    { label: "Tasks", value: "34", color: "bg-amber-500" },
                  ].map((stat, i) => (
                    <div key={i} className="bg-slate-50 rounded-xl p-4">
                      <div className={`w-2 h-2 ${stat.color} rounded-full mb-2`} />
                      <p className="text-xs text-slate-500">{stat.label}</p>
                      <p className="text-xl font-bold text-slate-900 font-['Outfit']">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm font-medium text-slate-700 mb-3">Recent Activity</p>
                  <div className="space-y-2">
                    {[
                      "New invoice #1024 sent to Acme Corp",
                      "Meeting scheduled with TechStart Inc",
                      "Project 'Brand Redesign' marked complete",
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-slate-600">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                        {activity}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating module badges */}
          <div className="absolute -left-4 top-1/4 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200 px-4 py-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                <IconInvoice />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">Invoicing</p>
                <p className="text-xs text-slate-500">Installed</p>
              </div>
            </div>
          </div>

          <div className="absolute -right-4 top-1/2 hidden lg:block">
            <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200 px-4 py-3 flex items-center gap-3 animate-float-delayed">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
                <IconCRM />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-900">CRM</p>
                <p className="text-xs text-slate-500">Installed</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .animate-float-delayed { animation: float 4s ease-in-out infinite; animation-delay: 2s; }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.6s ease-out; }
      `}</style>
    </section>
  );
}

// Problem Section
function Problem() {
  const problems = [
    { title: "Bloated Software", desc: "Business tools are packed with features you'll never use." },
    { title: "Expensive Bundles", desc: "Paying for 50 features when you only need 5." },
    { title: "Hard to Learn", desc: "Complex interfaces that waste your time." },
    { title: "Disconnected Tools", desc: "Jumping between apps that don't talk to each other." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.15),transparent_50%)]" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-16">
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white mb-4">
            Business Software is Broken
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Enterprise tools weren't built for entrepreneurs. They're built to upsell.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {problems.map((problem, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-slate-600 transition-colors">
              <div className="w-10 h-10 bg-red-500/20 rounded-xl flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-['Outfit'] text-xl font-semibold text-white mb-2">{problem.title}</h3>
              <p className="text-slate-400">{problem.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-2xl md:text-3xl font-['Outfit'] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            Entrepreneurs deserve simpler tools.
          </p>
        </div>
      </div>
    </section>
  );
}

// Solution Section
function Solution() {
  const solutions = [
    { icon: "🏠", title: "One Account", desc: "A single workspace for all your business tools." },
    { icon: "📦", title: "Install What You Need", desc: "Add modules only when you actually need them." },
    { icon: "🔗", title: "Everything Connected", desc: "Your data flows between modules seamlessly." },
    { icon: "💳", title: "Unified Billing", desc: "One invoice. No surprises. Cancel anytime." },
  ];

  return (
    <section id="features" className="py-20 md:py-28 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4 tracking-wide uppercase">The Solution</span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            A Modular Approach to Business Tools
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Start simple. Add tools as you grow. Never pay for what you don't use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {solutions.map((solution, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="font-['Outfit'] text-lg font-semibold text-slate-900 mb-2">{solution.title}</h3>
              <p className="text-slate-600 text-sm">{solution.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Modules Section
function Modules() {
  const modules = [
    { icon: <IconCRM />, name: "CRM", desc: "Manage leads, clients, and sales pipeline", color: "bg-blue-100 text-blue-600" },
    { icon: <IconInvoice />, name: "Invoicing & Payments", desc: "Create invoices, accept payments, track revenue", color: "bg-emerald-100 text-emerald-600" },
    { icon: <IconProjects />, name: "Projects & Tasks", desc: "Manage work with projects, tasks, and deadlines", color: "bg-violet-100 text-violet-600" },
    { icon: <IconCalendar />, name: "Calendar & Scheduling", desc: "Book meetings and manage availability", color: "bg-amber-100 text-amber-600" },
    { icon: <IconFiles />, name: "File Manager", desc: "Store and link documents across your business", color: "bg-rose-100 text-rose-600" },
  ];

  return (
    <section id="modules" className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4 tracking-wide uppercase">Modules</span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Install What Your Business Needs
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Each module is optional. Install them when you need them. Remove them when you don't.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((module, i) => (
            <div key={i} className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-200 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-indigo-100/60 transition-all cursor-pointer">
              <div className={`w-14 h-14 ${module.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                {module.icon}
              </div>
              <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-2">{module.name}</h3>
              <p className="text-slate-600 mb-4">{module.desc}</p>
              <div className="flex items-center gap-2 text-sm text-indigo-600 font-medium">
                <span>Learn more</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border-2 border-dashed border-slate-300 flex flex-col items-center justify-center text-center">
            <div className="w-14 h-14 bg-slate-200 rounded-2xl flex items-center justify-center mb-5">
              <span className="text-2xl">+</span>
            </div>
            <h3 className="font-['Outfit'] text-xl font-semibold text-slate-700 mb-2">More Coming</h3>
            <p className="text-slate-500">New modules added based on what you need.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// How It Works Section
function HowItWorks() {
  const steps = [
    { num: "01", title: "Create your workspace", desc: "Sign up in seconds. Your business command center is ready." },
    { num: "02", title: "Install the tools you need", desc: "Browse modules and add only what's useful right now." },
    { num: "03", title: "Run your business", desc: "Everything works together from one unified dashboard." },
  ];

  return (
    <section className="py-20 md:py-28 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4 tracking-wide uppercase">How It Works</span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Three Steps to a Simpler Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="text-center md:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-2xl text-white font-bold text-xl mb-6 shadow-lg shadow-indigo-500/30 font-['Outfit']">
                {step.num}
              </div>
              <h3 className="font-['Outfit'] text-xl font-semibold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Who It's For Section
function WhoItsFor() {
  const personas = [
    { emoji: "🚀", title: "Solo Entrepreneurs", desc: "Start lean. Add tools as your business grows." },
    { emoji: "💼", title: "Freelancers", desc: "Track clients, projects, and payments in one place." },
    { emoji: "🎯", title: "Consultants", desc: "Manage engagements and deliver better client experiences." },
    { emoji: "🏢", title: "Small Businesses", desc: "Scale from 1 to 20 employees without changing tools." },
    { emoji: "⚡", title: "Startups", desc: "Move fast with tools that evolve as quickly as you do." },
  ];

  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4 tracking-wide uppercase">Who It's For</span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Built for Builders
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're just starting or scaling up, Darnoc grows with you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {personas.map((persona, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 text-center hover:border-indigo-200 hover:shadow-lg transition-all">
              <div className="text-4xl mb-4">{persona.emoji}</div>
              <h3 className="font-['Outfit'] font-semibold text-slate-900 mb-2">{persona.title}</h3>
              <p className="text-sm text-slate-600">{persona.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Pricing Section
function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28 px-6 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold text-indigo-600 mb-4 tracking-wide uppercase">Pricing</span>
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Pay Only for What You Use
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            No bundles. No enterprise contracts. Just simple, transparent pricing.
          </p>
        </div>

        <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Free Core */}
            <div className="p-8 md:p-10">
              <div className="inline-block px-3 py-1 bg-slate-100 rounded-full text-sm font-medium text-slate-600 mb-6">
                Core Workspace
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-['Outfit'] text-5xl font-bold text-slate-900">$0</span>
                <span className="text-slate-500">/month</span>
              </div>
              <p className="text-slate-600 mb-6">Everything you need to get started.</p>

              <ul className="space-y-3 mb-8">
                {["Dashboard & workspace", "Unlimited contacts", "Basic reporting", "Community support"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <span className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="block w-full py-3 border-2 border-slate-200 rounded-xl font-semibold text-slate-700 hover:bg-slate-50 transition-colors text-center">
                Start Free
              </a>
            </div>

            {/* Modules */}
            <div className="p-8 md:p-10 bg-gradient-to-br from-indigo-600 to-violet-600 text-white">
              <div className="inline-block px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-6">
                Add Modules
              </div>
              <div className="flex items-baseline gap-1 mb-4">
                <span className="font-['Outfit'] text-5xl font-bold">$5-15</span>
                <span className="text-indigo-200">/module/mo</span>
              </div>
              <p className="text-indigo-100 mb-6">Only pay for what you install.</p>

              <ul className="space-y-3 mb-8">
                {["CRM from $9/mo", "Invoicing from $5/mo", "Projects from $7/mo", "Calendar from $5/mo"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
                      <IconCheck />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a href="#modules" className="block w-full py-3 bg-white rounded-xl font-semibold text-indigo-600 hover:bg-indigo-50 transition-colors text-center">
                View All Modules
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 mt-8">
          No credit card required to start. Cancel or remove modules anytime.
        </p>
      </div>
    </section>
  );
}

// Final CTA Section
function FinalCTA() {
  return (
    <section className="py-24 md:py-32 px-6 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative">
        <h2 className="font-['Outfit'] text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Start with what you need.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            Grow without limits.
          </span>
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
          Join thousands of entrepreneurs building their businesses with modular tools.
        </p>

        <a href="https://darmoc-client.netlify.app/" target="_blank" rel="noopener noreferrer" className="px-10 py-4 bg-gradient-to-r from-indigo-500 to-violet-500 text-white font-semibold rounded-2xl hover:from-indigo-600 hover:to-violet-600 transition-all shadow-xl shadow-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/40 hover:-translate-y-1 text-lg flex items-center gap-3 mx-auto group inline-flex">
          Create Your Workspace
          <IconArrow />
        </a>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-lg font-['Outfit']">D</span>
              </div>
              <span className="font-['Outfit'] font-bold text-xl text-white">Darnoc</span>
            </div>
            <p className="text-sm">Modular business tools for entrepreneurs who want to stay lean.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-white mb-4">Product</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Modules</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-['Outfit'] font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-slate-700 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm">© 2024 Darnoc. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Index Page
function Home() {
  return (
    <div className="min-h-screen bg-white font-['DM_Sans']">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Modules />
        <HowItWorks />
        <WhoItsFor />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

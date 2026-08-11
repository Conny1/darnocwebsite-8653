import { MoveRight, Search } from "lucide-react";
import AppCenter from "../clientside/AppCenter";


const Hero = () => {



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
                 
                </div>

              {/* App cebnter */}
              <AppCenter />
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

export default Hero;
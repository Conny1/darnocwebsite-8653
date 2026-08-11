import { CreditCard, Plus, Users, Zap } from "lucide-react";

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
export default SolutionSection;

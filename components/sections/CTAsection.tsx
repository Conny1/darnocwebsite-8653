import { MoveRight } from "lucide-react";

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

export default CTASection;
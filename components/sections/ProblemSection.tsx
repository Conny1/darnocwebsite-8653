import ProblemCards from "../clientside/ProblemCards";

const ProblemSection = () => {

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
          
     {/* problem Card */}
     <ProblemCards/>
        </div>
      </div>
    </section>
  );
};
export default ProblemSection;
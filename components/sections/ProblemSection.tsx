import ProblemCards from "../clientside/ProblemCards";

const ProblemSection = () => {
  const problems = [
    {
      title: "Built for Companies",
      description:
        "Most business software is designed for teams and departments. Solo businesses and freelancers are an afterthought.",
    },
    {
      title: "Pay for What You Don't Use",
      description:
        "Bundled plans force you to pay for dozens of features you'll never touch. You should only pay for what you actually use.",
    },
    {
      title: "Too Complex",
      description:
        "Enterprise tools take weeks to set up and learn. A one-person business needs something they can start using in minutes.",
    },
    {
      title: "Nothing Connects",
      description:
        "Juggling five different apps that don't talk to each other is not a system. Your tools should work together as one.",
    },
  ];
  return (
    <section className="py-24 px-6 bg-[#1a1a24] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="w-full">
            <span className="text-blue-400 font-bold tracking-widest text-sm uppercase mb-4 block">
              The Problem
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Business Software <br className="hidden md:block" /> Wasn't Built
              for You.
            </h2>
            <p className="text-zinc-300 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              Every tool out there was built for companies with teams and
              budgets. Modulor is built for the one-person business.
            </p>
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              {problems.map((p, i) => (
                <div key={i} className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full shadow-sm shadow-blue-500/50" />
                    <h3 className="font-bold text-base uppercase tracking-wider text-white">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* problem Card */}
          <ProblemCards />
        </div>
      </div>
    </section>
  );
};
export default ProblemSection;

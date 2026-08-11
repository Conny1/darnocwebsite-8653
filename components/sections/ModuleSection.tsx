import { Calendar, CreditCard, Layout, Puzzle, Users } from "lucide-react";
import Link from "next/link";

const ModulesSection = () => {
  const modules = [
    { slug:"crm", title: "CRM", description: "Manage leads, clients, and sales pipeline templates natively.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Users className="w-5 h-5" /> },
    { slug:"invoicing", title: "Invoicing & Payments", description: "Create professional invoices, accept payments, and track dynamic revenue streams.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <CreditCard className="w-5 h-5" /> },
    { slug:"projects", title: "Projects & Tasks", description: "Manage product execution cleanly with boards, tasks, milestones, and deadlines.", status: "Available", statusColor: "text-blue-700 bg-blue-50", icon: <Layout className="w-5 h-5" /> },
    { slug:"calendar", title: "Calendar & Scheduling", description: "Book meetings, sync internal teams, and manage client availability timelines.", status: "Coming Soon", statusColor: "text-blue-700 bg-blue-50", icon: <Calendar className="w-5 h-5" /> },
    { slug:"workflows", title: "Workflows & Automation", description: "Connect with external tools and automate workflows with our native integration builder.", status: "Coming Soon", statusColor: "text-zinc-500 bg-zinc-100", icon: <Puzzle className="w-5 h-5" /> },
         
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
            <Link key={idx} href={`/blogs/${m.slug}`} className=" hover:border-blue-300 transition-all duration-300">
            <div  className="p-8 bg-white border border-zinc-200 rounded-2xl shadow-sm flex flex-col justify-between group hover:border-blue-300 transition-all duration-300">
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
           
           
           </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ModulesSection;
import { Users, FileText, FolderKanban, Calendar, HardDrive, TrendingUp } from "lucide-react";

const DashboardPreview = () => {
  const modules = [
    { icon: Users, name: "CRM", color: "bg-primary/10 text-primary", active: true },
    { icon: FileText, name: "Invoicing", color: "bg-accent/10 text-accent", active: true },
    { icon: FolderKanban, name: "Projects", color: "bg-emerald-500/10 text-emerald-600", active: true },
    { icon: Calendar, name: "Calendar", color: "bg-amber-500/10 text-amber-600", active: false },
    { icon: HardDrive, name: "Files", color: "bg-sky-500/10 text-sky-600", active: false },
  ];

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-accent/20 rounded-3xl blur-2xl opacity-50" />
      
      {/* Dashboard container */}
      <div className="relative bg-card rounded-2xl border border-border shadow-xl overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border bg-secondary/30">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-destructive/60" />
              <div className="w-3 h-3 rounded-full bg-amber-400/60" />
              <div className="w-3 h-3 rounded-full bg-emerald-400/60" />
            </div>
        
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-xs font-medium text-primary">JD</span>
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Left sidebar - modules */}
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-muted-foreground mb-4">Your Modules</h3>
              {modules.map((module, index) => (
                <div
                  key={module.name}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all ${
                    module.active 
                      ? "bg-secondary/50 border border-border shadow-sm" 
                      : "opacity-50"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`p-2 rounded-lg ${module.color}`}>
                    <module.icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{module.name}</span>
                  {module.active && (
                    <span className="ml-auto w-2 h-2 rounded-full bg-emerald-500" />
                  )}
                </div>
              ))}
            </div>

            {/* Main content area */}
            <div className="md:col-span-2 space-y-6">
              {/* Stats row */}
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Active Leads</p>
                  <p className="text-2xl font-bold text-foreground">24</p>
                  <div className="flex items-center gap-1 mt-1 text-emerald-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs">+12%</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Revenue</p>
                  <p className="text-2xl font-bold text-foreground">$8.4k</p>
                  <div className="flex items-center gap-1 mt-1 text-emerald-600">
                    <TrendingUp className="w-3 h-3" />
                    <span className="text-xs">+8%</span>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-secondary/30 border border-border hidden lg:block">
                  <p className="text-sm text-muted-foreground mb-1">Tasks Done</p>
                  <p className="text-2xl font-bold text-foreground">89%</p>
                  <div className="w-full h-1.5 rounded-full bg-border mt-2">
                    <div className="w-[89%] h-full rounded-full gradient-primary" />
                  </div>
                </div>
              </div>

              {/* Recent activity placeholder */}
              <div className="p-4 rounded-xl bg-secondary/30 border border-border">
                <h4 className="text-sm font-medium text-foreground mb-3">Recent Activity</h4>
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10" />
                      <div className="flex-1">
                        <div className="h-3 w-3/4 rounded bg-border" />
                        <div className="h-2 w-1/2 rounded bg-border/50 mt-1.5" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;

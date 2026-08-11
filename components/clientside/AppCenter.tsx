"use client";
import {
  Calendar,
  Check,
  CreditCard,
  Layout,
  Plus,
  Shield,
  Users,
} from "lucide-react";
import { useState } from "react";
import AppInstallButton from "./AppInstallButton";
function AppCenter() {
  const [installedApps, setInstalledApps] = useState([
    "CRM",
    "Projects & Tasks",
  ]);

  const apps = [
    {
      name: "CRM",
      description: "Manage leads, clients, and sales pipeline",
      icon: <Users className="w-5 h-5" />,
    },
    {
      name: "Invoicing & Payments",
      description: "Create invoices, accept payments, track revenue",
      icon: <CreditCard className="w-5 h-5" />,
    },
    {
      name: "Projects & Tasks",
      description: "Manage work with projects, tasks, and deadlines",
      icon: <Layout className="w-5 h-5" />,
    },
    {
      name: "Calendar & Scheduling",
      description: "Book meetings and manage availability",
      icon: <Calendar className="w-5 h-5" />,
    },
    {
      name: "File Manager",
      description: "Store and link documents across your business",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  const handleToggle = (appName: string) => {
    setInstalledApps((prev) =>
      prev.includes(appName)
        ? prev.filter((a) => a !== appName)
        : [...prev, appName],
    );
  };
  return (
    <>
      <div className="flex items-center gap-2 ">
        <div className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase border border-blue-100">
          {installedApps.length} INSTALLED
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app) => {
          const isInstalled = installedApps.includes(app.name);
          return (
            <div
              key={app.name}
              className={`p-6 bg-white border rounded-2xl transition-all group ${isInstalled ? "border-blue-100 shadow-sm" : "border-zinc-100 hover:border-zinc-200"}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${isInstalled ? "bg-blue-600 text-white" : "bg-zinc-50 text-zinc-400 group-hover:text-zinc-600"}`}
                >
                  {app.icon}
                </div>
                I{" "}
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

              <AppInstallButton
                installed={isInstalled}
                onToggle={() => handleToggle(app.name)}
                installedText="Uninstall"
                uninstalledText="Install App"
                className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isInstalled
                    ? "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
                    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200"
                }`}
              />
            </div>
          );
        })}
        <div className="p-6 bg-zinc-50/30 border border-zinc-100 border-dashed rounded-2xl flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-zinc-50 transition-colors">
          <div className="w-10 h-10 bg-white border border-zinc-200 border-dashed rounded-xl flex items-center justify-center text-zinc-400 group-hover:text-blue-500 group-hover:border-blue-200 transition-all mb-4">
            <Plus className="w-5 h-5" />
          </div>
          <p className="font-bold text-zinc-400 group-hover:text-zinc-600 transition-colors text-xs">
            Request App
          </p>
        </div>
      </div>
    </>
  );
}

export default AppCenter;

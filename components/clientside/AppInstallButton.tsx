"use client";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface AppInstallButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  installed: boolean;
  onToggle: () => void;
  installedText?: ReactNode;
  uninstalledText?: ReactNode;
  className?: string;
}

export default function AppInstallButton({
  installed,
  onToggle,
  installedText = "Uninstall",
  uninstalledText = "Install App",
  className = "",
  type = "button",
  ...rest
}: AppInstallButtonProps) {
  const baseStyles =
    "w-full py-2.5 rounded-xl text-xs font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed";

  const stateStyles = installed
    ? "bg-zinc-100 text-zinc-500 hover:bg-zinc-200"
    : "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200";

  return (
    <button
      type={type}
      onClick={onToggle}
      className={`${baseStyles} ${stateStyles} ${className}`.trim()}
      {...rest}
    >
      {installed ? installedText : uninstalledText}
    </button>
  );
}
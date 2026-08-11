"use client";

import { useEffect, useState, type ReactNode } from "react";

// The ONLY reason the navbar needs client JS is this scroll listener.
// Logo, links, and CTA buttons are passed in as children (server markup),
// so they cost zero extra client JS.
export default function ScrollHeader({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-md border-b border-zinc-200 py-3"
          : "bg-transparent py-5"
      }`}
    >
      {children}
    </nav>
  );
}
import { Menu, X, Server, Rocket } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Minecraft", href: "#minecraft" },
    { label: "VPS", href: "#vps" },
    { label: "Pricing", href: "#pricing" },
    { label: "Features", href: "#features" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/70 dark:bg-black/40 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 grid place-content-center text-white shadow-lg shadow-violet-500/30">
              <Server className="h-5 w-5" />
            </div>
            <span className="text-lg tracking-tight">BlueHost Nodes</span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">
                {n.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#pricing" className="px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white">Login</a>
            <a href="#pricing" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium shadow-lg shadow-violet-500/30">
              Get Started <Rocket className="h-4 w-4" />
            </a>
          </div>

          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-md hover:bg-white/50 dark:hover:bg-white/10" onClick={() => setOpen((s) => !s)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-6 animate-in">
            <div className="grid gap-4">
              {navItems.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md text-slate-700 dark:text-slate-200 hover:bg-white/60 dark:hover:bg-white/10">
                  {n.label}
                </a>
              ))}
              <a href="#pricing" className="px-3 py-2 rounded-md bg-gradient-to-r from-blue-600 to-violet-600 text-white text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

import Icons from "./Icons";
import Logo from "./Logo";
import { ArrowUp, Cpu, Heart, Sparkles } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/70 backdrop-blur-xl py-12 px-6 relative z-10">
      <div className="w-[92%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Left: Brand & Telemetry */}
        <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <Logo />
          <div className="h-8 w-[1px] bg-slate-800 hidden sm:block"></div>
          <div className="flex flex-col text-xs font-mono text-slate-400">
            <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              NEURAL CORE v4.2 PROD • ONLINE
            </span>
            <span className="text-[11px] text-slate-500 mt-0.5">
              Engineered with LangChain • PyTorch • React 18 • Vite
            </span>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex flex-col items-center gap-2">
          <Icons />
          <p className="text-[11px] font-mono text-slate-500">
            © {new Date().getFullYear()} Muhammad Usman. All Rights Reserved.
          </p>
        </div>

        {/* Right: Scroll to top */}
        <div className="flex items-center gap-4">
          <button
            onClick={scrollToTop}
            aria-label="Back to Top"
            className="p-3 rounded-xl border border-slate-800 bg-slate-900/80 text-cyan-400 hover:text-white hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300 flex items-center gap-2 text-xs font-mono"
          >
            <span>TOP</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

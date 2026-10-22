import logo from "../assets/logo.png";
import { Cpu } from "lucide-react";

const Logo = () => {
  return (
    <a href="#main" className="flex items-center gap-3 group cursor-pointer">
      <div className="relative">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
          <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center overflow-hidden">
            <img src={logo} alt="Usman AI" className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
      </div>

      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <span className="font-mono font-bold tracking-tight text-lg text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
            USMAN
          </span>
          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
            .AI
          </span>
        </div>
        <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500 dark:text-slate-400 -mt-0.5">
          Neural Architect
        </span>
      </div>
    </a>
  );
};

export default Logo;
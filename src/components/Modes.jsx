import { ModeContext } from "../Context/ModeContext";
import { useContext } from "react";
import { Moon, Sun } from "lucide-react";

const Modes = () => {
  const { mode, setmode } = useContext(ModeContext);

  return (
    <button
      onClick={() => setmode(!mode)}
      aria-label="Toggle Theme Mode"
      className={`relative p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center ${
        mode
          ? "bg-slate-900/80 border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]"
          : "bg-white border-slate-300 text-amber-500 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] shadow-sm"
      }`}
    >
      {mode ? (
        <Sun className="w-4 h-4 transition-transform duration-500 rotate-0 hover:rotate-90 text-amber-300" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-500 rotate-0 hover:-rotate-12 text-slate-700" />
      )}
    </button>
  );
};

export default Modes;
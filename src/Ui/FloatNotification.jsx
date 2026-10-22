import { useState, useEffect } from "react";
import { Bot, Cpu, Sparkles, ArrowUpRight, MessageSquareCode, Activity, Zap } from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";

const FloatNotification = ({ mode }) => {
  const [latency, setLatency] = useState(14);
  const [tokenRate, setTokenRate] = useState(128);

  // Subtle real-time live telemetry pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(12 + Math.random() * 5));
      setTokenRate(Math.floor(124 + Math.random() * 8));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className={`w-full rounded-2xl p-5 sm:p-6 transition-all duration-500 border ${
          mode
            ? "bg-slate-900/90 border-cyan-500/30 text-white shadow-2xl shadow-cyan-950/60"
            : "bg-white/95 border-slate-300/90 text-slate-900 shadow-2xl shadow-slate-300/50"
        } backdrop-blur-xl scanline-effect main-notes`}
      >
        {/* Header Telemetry Badge */}
        <div className={`flex items-center justify-between pb-3.5 border-b ${
          mode ? "border-slate-800" : "border-slate-200"
        }`}>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className={`font-mono text-xs font-bold tracking-wider ${
              mode ? "text-emerald-400" : "text-emerald-700"
            }`}>
              AGENT ORCHESTRATOR
            </span>
          </div>

          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold tracking-wide border ${
            mode
              ? "bg-cyan-500/15 text-cyan-400 border-cyan-500/30"
              : "bg-cyan-50 text-cyan-800 border-cyan-300"
          }`}>
            v4.2 PROD
          </span>
        </div>

        {/* Core AI Capabilities Rows */}
        <div className="py-3.5 space-y-2.5">
          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`flex items-center gap-1.5 ${
              mode ? "text-slate-400" : "text-slate-600 font-medium"
            }`}>
              <Cpu className="w-3.5 h-3.5 text-cyan-500" /> Neural Architecture:
            </span>
            <span className={`font-bold ${
              mode ? "text-cyan-300" : "text-cyan-700"
            }`}>
              Multi-Agent Swarm
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`flex items-center gap-1.5 ${
              mode ? "text-slate-400" : "text-slate-600 font-medium"
            }`}>
              <Sparkles className="w-3.5 h-3.5 text-purple-500" /> Retrieval Precision:
            </span>
            <span className={`font-bold ${
              mode ? "text-purple-300" : "text-purple-700"
            }`}>
              99.4% (RAGAS)
            </span>
          </div>

          <div className="flex items-center justify-between text-xs font-mono">
            <span className={`flex items-center gap-1.5 ${
              mode ? "text-slate-400" : "text-slate-600 font-medium"
            }`}>
              <Bot className="w-3.5 h-3.5 text-emerald-500" /> Availability:
            </span>
            <span className={`font-bold ${
              mode ? "text-emerald-400" : "text-emerald-700"
            }`}>
              Immediate Booking
            </span>
          </div>
        </div>

        {/* Live Telemetry Ticker */}
        <div className={`p-2.5 rounded-xl border flex items-center justify-between text-[11px] font-mono mb-3.5 ${
          mode
            ? "bg-slate-950/80 border-slate-800 text-slate-400"
            : "bg-slate-100 border-slate-200 text-slate-700"
        }`}>
          <div className="flex items-center gap-1">
            <Activity className="w-3 h-3 text-cyan-500 animate-pulse" />
            <span>Lat: <strong className={mode ? "text-cyan-300" : "text-cyan-700"}>{latency}ms</strong></span>
          </div>
          <span className="text-slate-400">•</span>
          <div className="flex items-center gap-1">
            <Zap className="w-3 h-3 text-amber-500" />
            <span>Throughput: <strong className={mode ? "text-amber-300" : "text-amber-700"}>{tokenRate} t/s</strong></span>
          </div>
          <span className="text-slate-400">•</span>
          <span className="text-emerald-600 dark:text-emerald-400 font-bold">Optimal</span>
        </div>

        {/* Call to action & WhatsApp */}
        <div className="flex items-center gap-2 pt-1">
          <a
            href="https://wa.me/+923049513443"
            target="_blank"
            rel="noreferrer"
            className="flex-grow flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-mono text-xs font-bold transition-all duration-300 shadow-md shadow-emerald-500/20 hover:scale-[1.02] active:scale-95"
          >
            <BiLogoWhatsapp className="text-xl" />
            <span>AI DISCOVERY CALL</span>
          </a>

          <a
            href="#ai-playground"
            aria-label="Test AI Sandbox"
            title="Launch Interactive AI Sandbox"
            className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-center ${
              mode
                ? "bg-slate-800 border-slate-700 text-cyan-400 hover:border-cyan-400 hover:bg-slate-700"
                : "bg-slate-100 border-slate-300 text-slate-700 hover:border-cyan-600 hover:bg-white shadow-sm"
            }`}
          >
            <MessageSquareCode className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FloatNotification;

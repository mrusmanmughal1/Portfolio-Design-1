import FloatNotification from "../Ui/FloatNotification";
import NeuralCanvas from "./NeuralCanvas";
import user from "../assets/user-image.jfif";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  Sparkles,
  Terminal,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Database,
  Network,
} from "lucide-react";

const Main = ({ mode }) => {
  const [text] = useTypewriter({
    words: [
      "Autonomous Agent Architect",
      "Enterprise RAG Systems Engineer",
      "LLM Orchestration Specialist",
      "Full-Stack AI Products Builder",
    ],
    loop: 0,
    delaySpeed: 2000,
    typeSpeed: 60,
    deleteSpeed: 40,
  });

  return (
    <section
      id="main"
      className="relative w-full py-12 md:py-16 overflow-hidden"
    >
      {/* Interactive Neural Canvas Background */}
      <NeuralCanvas mode={mode} />

      <div className="relative z-10 w-[92%] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14">
        {/* Left Column: Hero Text & Badges */}
        <div className="w-full lg:w-[56%] flex flex-col gap-6 text-left">
          {/* Top Status Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs md:text-sm font-mono w-fit backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
            </span>
            <span>AVAILABLE FOR AI CONTRACTS & ARCHITECTURE</span>
          </div>

          {/* Name & Title */}
          <div>
            <h2 className="text-sm md:text-base font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-2 flex items-center gap-2">
              <Cpu className="w-4 h-4 text-cyan-500" />
              <span>Senior AI Software Engineer</span>
            </h2>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-none font-sans">
              <span className={`${mode ? "text-white" : "text-slate-900"}`}>
                MUHAMMAD
              </span>{" "}
              <span className="gradient-text-ai">USMAN</span>
            </h1>
          </div>

          {/* Dynamic Typewriter Role */}
          <div className="min-h-[44px] flex items-center">
            <h3
              className={`text-xl sm:text-2xl md:text-3xl font-semibold font-mono ${mode ? "text-slate-200" : "text-slate-800"}`}
            >
              Specializing in{" "}
              <span className="text-cyan-500 dark:text-cyan-400 border-b-2 border-cyan-400/50 pb-0.5">
                {text}
              </span>
              <Cursor cursorColor="#00f2fe" />
            </h3>
          </div>

          {/* Bio paragraph */}
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base md:text-lg leading-relaxed">
            Engineering robust autonomous agent swarms, high-throughput
            enterprise RAG search engines, and production-grade generative AI
            web applications. Transforming complex AI models into scalable
            digital products.
          </p>

          {/* Live Metric HUD Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl pt-2">
            <div
              className={`p-3 rounded-xl border backdrop-blur-sm ${
                mode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-cyan-500 dark:text-cyan-400 font-medium">
                <Network className="w-3.5 h-3.5" />
                <span>AGENTS</span>
              </div>
              <div
                className={`text-xl font-bold font-mono ${mode ? "text-white" : "text-slate-900"}`}
              >
                40+ Swarms
              </div>
            </div>

            <div
              className={`p-3 rounded-xl border backdrop-blur-sm ${
                mode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-purple-600 dark:text-purple-400 font-medium">
                <Database className="w-3.5 h-3.5" />
                <span>LATENCY</span>
              </div>
              <div
                className={`text-xl font-bold font-mono ${mode ? "text-white" : "text-slate-900"}`}
              >
                &lt; 25ms RAG
              </div>
            </div>

            <div
              className={`p-3 rounded-xl border backdrop-blur-sm col-span-2 sm:col-span-1 ${
                mode
                  ? "bg-slate-900/60 border-slate-800"
                  : "bg-white/80 border-slate-200 shadow-sm"
              }`}
            >
              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>PRECISION</span>
              </div>
              <div
                className={`text-xl font-bold font-mono ${mode ? "text-white" : "text-slate-900"}`}
              >
                99.4% Accuracy
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 items-center pt-2">
            <a
              href="https://www.upwork.com/freelancers/~01860d35c85271198e"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-xl font-mono text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>DEPLOY AI PROJECT</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#ai-playground"
              className={`px-7 py-3.5 rounded-xl font-mono text-sm font-semibold border transition-all duration-300 flex items-center gap-2 ${
                mode
                  ? "bg-slate-900/80 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 shadow-md shadow-cyan-950/40"
                  : "bg-white border-slate-300 text-slate-800 hover:bg-slate-50 hover:border-cyan-600 shadow-sm"
              }`}
            >
              <Terminal className="w-4 h-4 text-cyan-500" />
              <span>TEST AI SANDBOX</span>
            </a>
          </div>
        </div>

        {/* Right Column: Holographic Avatar & Spacious Telemetry HUD */}
        <div className="w-full lg:w-[44%] flex flex-col items-center justify-center gap-6">
          {/* Holographic Avatar Presentation */}
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex items-center justify-center">
            {/* Pulsing orbital rings */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-spin-slow"></div>
            <div
              className="absolute -inset-3 rounded-full border border-dashed border-purple-500/25 animate-spin-slow"
              style={{ animationDirection: "reverse" }}
            ></div>
            <div className="absolute -inset-6 rounded-full border border-cyan-400/15"></div>

            {/* Glowing backdrop aura */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/20 via-purple-600/20 to-transparent blur-2xl"></div>

            {/* Profile Avatar Image */}
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden border-2 border-cyan-400/50 shadow-[0_0_35px_rgba(6,182,212,0.3)] bg-gradient-to-b from-slate-900 to-slate-950">
              <img
                src={user}
                alt="Muhammad Usman - AI Software Engineer"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
              {/* Subtle radar scanline over image */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent pointer-events-none animate-radar"></div>
            </div>

            {/* Floating Tech Badges */}
            <div className="absolute -top-2 -left-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-cyan-500/40 text-cyan-300 text-[11px] font-mono shadow-lg flex items-center gap-1.5 animate-float-slow z-20">
              <Sparkles className="w-3 h-3 text-cyan-400" /> LangChain & CrewAI
            </div>

            <div className="absolute -bottom-2 -right-3 px-3 py-1 rounded-lg bg-slate-900/90 border border-purple-500/40 text-purple-300 text-[11px] font-mono shadow-lg flex items-center gap-1.5 animate-float-fast z-20">
              <Cpu className="w-3 h-3 text-purple-400" /> PyTorch & RAG
            </div>
          </div>

          {/* AI Telemetry Card - Full width & perfectly spaced */}
          <FloatNotification mode={mode} />
        </div>
      </div>
    </section>
  );
};

export default Main;

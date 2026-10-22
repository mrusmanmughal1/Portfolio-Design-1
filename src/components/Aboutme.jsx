import Img from "../assets/aboutme.jfif";
import Icons from "./Icons";
import cv from "../assets/usman2024.pdf";
import {
  Sparkles,
  Bot,
  Cpu,
  Database,
  Award,
  Download,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Aboutme = ({ mode }) => {
  const stats = [
    { label: "Systems Deployed", value: "50+", desc: "AI & Full-Stack Apps" },
    { label: "RAG Precision", value: "99.4%", desc: "Context Verification" },
    { label: "Engineering XP", value: "4+ Yrs", desc: "Production Code" },
    { label: "Agentic Swarms", value: "40+", desc: "Autonomous Workflows" },
  ];

  const corePillars = [
    {
      icon: <Bot className="w-5 h-5 text-cyan-400" />,
      title: "Autonomous Agentic Swarms",
      desc: "Architecting multi-agent networks with LangGraph, CrewAI, and AutoGen that plan, self-reflect, and execute complex workflows.",
    },
    {
      icon: <Database className="w-5 h-5 text-purple-400" />,
      title: "Enterprise RAG & Vector Intelligence",
      desc: "Engineering sub-25ms hybrid retrieval systems with Pinecone, ChromaDB, Cohere reranking, and semantic chunking.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Full-Stack AI Product Engineering",
      desc: "Building ultra-responsive streaming interfaces with FastAPI, WebSockets, React 18, and scalable cloud microservices.",
    },
  ];

  return (
    <section id="about-me" className="py-24 relative overflow-hidden">
      {/* Background cyber accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineering Profile</span>
          </div>
          <h2
            className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}
          >
            About <span className="gradient-text-ai">The AI Architect</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Bridging state-of-the-art foundation models and scalable production
            software architectures.
          </p>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col lg:flex-row items-center gap-14">
          {/* Left Column: Cyber Holographic Card & Image */}
          <div className="w-full lg:w-5/12 flex justify-center">
            <div
              className={`relative w-full max-w-md rounded-2xl p-6 border ${
                mode
                  ? "bg-slate-900/80 border-cyan-500/30 shadow-2xl shadow-cyan-950/50"
                  : "bg-white border-slate-200 shadow-xl"
              } backdrop-blur-xl scanline-effect`}
            >
              {/* Corner Cyber Brackets */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-cyan-400"></div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

              {/* Top HUD Telemetry */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/50 font-mono text-xs">
                <span className="text-cyan-400 font-bold flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5" /> ID: USMAN-AI-01
                </span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> ACTIVE AGENT
                </span>
              </div>

              {/* Main Image in Holographic Window */}
              <div className="relative my-4 rounded-xl overflow-hidden border border-slate-700/60 bg-gradient-to-b from-slate-900 to-black group">
                <img
                  src={Img}
                  alt="Muhammad Usman"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>

                {/* Floating pill over image */}
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-lg bg-slate-950/80 backdrop-blur-md border border-cyan-500/30 text-xs font-mono text-slate-300 flex items-center justify-between">
                  <span>Stack: LangChain • PyTorch • React</span>
                  <span className="text-cyan-400 font-bold">PROD</span>
                </div>
              </div>

              {/* Bottom Quick Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2 font-mono">
                <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-center">
                  <div className="text-xs text-slate-400">Location</div>
                  <div className="text-sm font-bold text-cyan-300">
                    Pakistan (Remote Global)
                  </div>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-800/50 border border-slate-700/60 text-center">
                  <div className="text-xs text-slate-400">Response SLA</div>
                  <div className="text-sm font-bold text-emerald-400">
                    &lt; 2 Hours
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Pillars, Stats, and Actions */}
          <div className="w-full lg:w-7/12 flex flex-col gap-6">
            <div>
              <div className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase mb-2">
                SYSTEM ARCHITECTURE & INTELLIGENCE
              </div>
              <h3
                className={`text-3xl sm:text-4xl font-bold ${mode ? "text-white" : "text-slate-900"}`}
              >
                I am <span className="gradient-text-ai">Muhammad Usman</span>
              </h3>
              <p className="text-lg font-mono text-cyan-400/90 mt-1">
                Senior AI Software Engineer & Full-Stack Systems Specialist
              </p>
            </div>

            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              I architect and deploy scalable, production-grade Artificial
              Intelligence systems. From autonomous agent swarms and multi-step
              reasoning pipelines to sub-second vector search engines and
              reactive full-stack web applications, I help technology startups
              and enterprises build dependable, high-impact AI products that
              solve real-world problems.
            </p>

            {/* Core Architectural Pillars */}
            <div className="space-y-3 pt-2">
              {corePillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl border transition-all duration-300 flex items-start gap-3.5 ${
                    mode
                      ? "bg-slate-900/60 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90"
                      : "bg-slate-50 border-slate-200 hover:border-cyan-400 hover:bg-white"
                  }`}
                >
                  <div className="p-2 rounded-lg bg-slate-950 border border-slate-700/60 flex-shrink-0 mt-0.5">
                    {pillar.icon}
                  </div>
                  <div>
                    <h4
                      className={`text-sm font-bold font-mono ${mode ? "text-slate-100" : "text-slate-900"}`}
                    >
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Metric Counters Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3">
              {stats.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-3.5 rounded-xl border text-center font-mono ${
                    mode
                      ? "bg-slate-900/50 border-slate-800"
                      : "bg-slate-50 border-slate-200"
                  }`}
                >
                  <div className="text-2xl font-extrabold text-cyan-400">
                    {item.value}
                  </div>
                  <div
                    className={`text-xs font-bold mt-1 ${mode ? "text-slate-200" : "text-slate-800"}`}
                  >
                    {item.label}
                  </div>
                  <div className="text-[10px] text-slate-400 mt-0.5">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-mono text-xs">
              <div
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  mode
                    ? "bg-slate-900/60 border-slate-800 text-slate-300"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <span className="text-slate-400">PHONE:</span>
                <a
                  href="tel:+923049513443"
                  className="font-bold text-cyan-400 hover:underline"
                >
                  +92 304 9513443
                </a>
              </div>

              <div
                className={`p-3 rounded-xl border flex items-center justify-between ${
                  mode
                    ? "bg-slate-900/60 border-slate-800 text-slate-300"
                    : "bg-slate-50 border-slate-200 text-slate-700"
                }`}
              >
                <span className="text-slate-400">EMAIL:</span>
                <a
                  href="mailto:mrusmanmughal1@gmail.com"
                  className="font-bold text-cyan-400 hover:underline truncate ml-2"
                >
                  mrusmanmughal1@gmail.com
                </a>
              </div>
            </div>

            {/* Social Icons & Download Resume */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-slate-400 uppercase">
                  Connect:
                </span>
                <Icons />
              </div>

              <a
                href={cv}
                download={true}
                className="px-6 py-3.5 rounded-xl font-mono text-xs font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>DOWNLOAD AI CV / RESUME</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

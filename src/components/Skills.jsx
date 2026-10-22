import { useState } from "react";
import { Sparkles, Brain, Cpu, Database, Network, Code, Layers, CheckCircle2, Terminal } from "lucide-react";
import {
  BiLogoReact,
  BiLogoJavascript,
  BiLogoTailwindCss,
  BiLogoNodejs,
  BiLogoPython,
} from "react-icons/bi";
import { SiPytorch, SiOpenai, SiFastapi, SiDocker } from "react-icons/si";

const skillCategories = ["All", "AI & LLM", "RAG & Vector DB", "Full-Stack AI"];

const skillsData = [
  {
    name: "LangChain & LangGraph",
    category: "AI & LLM",
    level: 95,
    icon: <Network className="w-6 h-6 text-cyan-400" />,
    desc: "Autonomous agent graphs, state checkpoints & supervisory workflows",
    color: "#06b6d4"
  },
  {
    name: "Multi-Agent Swarms (CrewAI)",
    category: "AI & LLM",
    level: 92,
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    desc: "Hierarchical agent delegation, tool execution & consensus reasoning",
    color: "#a855f7"
  },
  {
    name: "Enterprise RAG & Hybrid Search",
    category: "RAG & Vector DB",
    level: 94,
    icon: <Database className="w-6 h-6 text-emerald-400" />,
    desc: "Vector chunking, Cohere reranking, BM25 + dense embedding retrieval",
    color: "#10b981"
  },
  {
    name: "Pinecone / ChromaDB / Qdrant",
    category: "RAG & Vector DB",
    level: 90,
    icon: <Cpu className="w-6 h-6 text-blue-400" />,
    desc: "HNSW index optimization, metadata filtering & vector clustering",
    color: "#3b82f6"
  },
  {
    name: "Python & PyTorch",
    category: "AI & LLM",
    level: 88,
    icon: <SiPytorch className="text-2xl text-rose-400" />,
    desc: "Model fine-tuning (LoRA / QLoRA), transformer pipelines & inference",
    color: "#f43f5e"
  },
  {
    name: "OpenAI / Claude / Gemini API",
    category: "AI & LLM",
    level: 96,
    icon: <SiOpenai className="text-2xl text-teal-400" />,
    desc: "Function calling, JSON mode, prompt caching & model evaluation",
    color: "#14b8a6"
  },
  {
    name: "FastAPI & Async Streaming",
    category: "Full-Stack AI",
    level: 92,
    icon: <SiFastapi className="text-2xl text-emerald-400" />,
    desc: "Server-sent events (SSE), WebSockets & high-throughput model serving",
    color: "#10b981"
  },
  {
    name: "React 18 & Next.js",
    category: "Full-Stack AI",
    level: 95,
    icon: <BiLogoReact className="text-2xl text-cyan-400" />,
    desc: "Streaming generative UI, responsive dashboards & reactive states",
    color: "#06b6d4"
  },
  {
    name: "Node.js & Express",
    category: "Full-Stack AI",
    level: 85,
    icon: <BiLogoNodejs className="text-2xl text-lime-400" />,
    desc: "Backend microservices, orchestration API gateways & authentication",
    color: "#84cc16"
  },
  {
    name: "Docker & Containerization",
    category: "Full-Stack AI",
    level: 86,
    icon: <SiDocker className="text-2xl text-sky-400" />,
    desc: "Reproducible inference environments, model containerization & CI/CD",
    color: "#0284c7"
  },
  {
    name: "Tailwind CSS & Cyber UI",
    category: "Full-Stack AI",
    level: 94,
    icon: <BiLogoTailwindCss className="text-2xl text-cyan-400" />,
    desc: "Glassmorphic cyber layouts, dynamic animations & responsive design",
    color: "#06b6d4"
  },
  {
    name: "JavaScript / TypeScript",
    category: "Full-Stack AI",
    level: 90,
    icon: <BiLogoJavascript className="text-2xl text-amber-400" />,
    desc: "Strong type safety, asynchronous architecture & frontend performance",
    color: "#f59e0b"
  }
];

const experienceData = [
  {
    period: "2023 - Present",
    role: "Senior AI Software Engineer & Systems Architect",
    company: "Ormox AI & Digital Labs",
    type: "Contract / Full-Time",
    highlight: "Architected multi-agent swarms with LangGraph and low-latency enterprise RAG pipelines, serving 100k+ monthly semantic queries.",
    tags: ["LangGraph", "CrewAI", "FastAPI", "React 18", "Pinecone"]
  },
  {
    period: "2022 - 2023",
    role: "Full-Stack & AI Solutions Engineer",
    company: "Smart Moves Lab",
    type: "Full-Time",
    highlight: "Built scalable web apps and early LLM workflow integrations. Engineered reactive dashboards and automated API pipelines.",
    tags: ["React.js", "Node.js", "OpenAI API", "Python", "Tailwind"]
  },
  {
    period: "2021 - 2022",
    role: "Associate Software Engineer",
    company: "Netsol Technologies Ltd",
    type: "Full-Time",
    highlight: "Developed enterprise software modules, microservices, and front-end architectures following strict Agile methodologies.",
    tags: ["Software Architecture", "React", "REST APIs", "Enterprise Systems"]
  },
  {
    period: "2020 - 2021",
    role: "Software Engineering Fellow",
    company: "Pakistan IT Solutions",
    type: "Fellowship",
    highlight: "Created responsive interactive web components and foundational full-stack architectures for cross-industry clients.",
    tags: ["JavaScript", "HTML5/CSS3", "Frontend Systems"]
  }
];

const Skills = ({ mode }) => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredSkills = activeTab === "All"
    ? skillsData
    : skillsData.filter((s) => s.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      
      {/* Background glow accent */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}>
            AI Arsenal & <span className="gradient-text-ai">Career Circuit</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Proficiencies across deep learning frameworks, autonomous agent swarms, vector databases, and full-stack cloud systems.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {skillCategories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 scale-105"
                    : mode
                    ? "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                    : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Skills & Timeline Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Skills Grid */}
          <div className="lg:col-span-7">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold font-mono flex items-center gap-2 ${mode ? "text-white" : "text-slate-900"}`}>
                <Terminal className="w-5 h-5 text-cyan-400" />
                <span>Proficiency Matrix ({filteredSkills.length})</span>
              </h3>
              <span className="text-xs font-mono text-cyan-400">90%+ Production Ready</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 group hover:-translate-y-1 ${
                    mode
                      ? "bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-md hover:shadow-cyan-950/50"
                      : "bg-white border-slate-200 hover:border-cyan-400 shadow-sm hover:shadow-md"
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-center">
                      {skill.icon}
                    </div>
                    <span className="text-xs font-mono font-bold text-cyan-400">
                      {skill.level}%
                    </span>
                  </div>

                  <div className="mt-3">
                    <div className={`text-sm font-bold font-mono ${mode ? "text-slate-100" : "text-slate-900"}`}>
                      {skill.name}
                    </div>
                    <div className="text-[11px] text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                      {skill.desc}
                    </div>
                  </div>

                  {/* Progress bar */}
                  <div className="mt-3 w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        boxShadow: `0 0 8px ${skill.color}`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Experience Circuit Timeline */}
          <div className="lg:col-span-5">
            <div className="flex items-center justify-between mb-6">
              <h3 className={`text-xl font-bold font-mono flex items-center gap-2 ${mode ? "text-white" : "text-slate-900"}`}>
                <Cpu className="w-5 h-5 text-purple-400" />
                <span>Career Milestones</span>
              </h3>
              <span className="text-xs font-mono text-purple-400">4+ Years XP</span>
            </div>

            <div className="relative border-l-2 border-cyan-500/30 pl-6 ml-3 space-y-8">
              {experienceData.map((exp, index) => (
                <div key={index} className="relative group">
                  
                  {/* Glowing timeline node */}
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>

                  <div className={`p-5 rounded-xl border transition-all duration-300 ${
                    mode
                      ? "bg-slate-900/60 border-slate-800 group-hover:border-purple-500/40 group-hover:bg-slate-900/90"
                      : "bg-white border-slate-200 group-hover:border-purple-400 shadow-sm"
                  }`}>
                    
                    <div className="flex items-center justify-between flex-wrap gap-2 text-xs font-mono">
                      <span className="px-2.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                        {exp.period}
                      </span>
                      <span className="text-slate-500 text-[11px]">{exp.type}</span>
                    </div>

                    <h4 className={`text-base font-bold mt-2 ${mode ? "text-white" : "text-slate-900"}`}>
                      {exp.role}
                    </h4>

                    <div className="text-xs font-mono text-purple-400 font-semibold mt-0.5">
                      {exp.company}
                    </div>

                    <p className="text-xs text-slate-400 mt-2.5 leading-relaxed">
                      {exp.highlight}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-slate-800">
                      {exp.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;

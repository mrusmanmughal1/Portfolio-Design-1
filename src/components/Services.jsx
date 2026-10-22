import { useState } from "react";
import {
  Sparkles,
  Bot,
  Database,
  Cpu,
  Terminal,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

const solutions = [
  {
    icon: <Bot className="w-8 h-8 text-cyan-400" />,
    title: "Autonomous AI Agents & Multi-Agent Swarms",
    desc: "Architecting self-orchestrating multi-agent systems using LangGraph and CrewAI. Featuring persistent memory checkpoints, deterministic function-calling loops, and multi-step self-reflective reasoning.",
    tags: ["LangGraph", "CrewAI", "Function Calling", "Stateful Memory"],
    metrics: "10x Workflow Acceleration",
    color: "#06b6d4",
  },
  {
    icon: <Database className="w-8 h-8 text-purple-400" />,
    title: "Enterprise RAG & Knowledge Engines",
    desc: "Engineering high-precision vector search architectures with Pinecone, ChromaDB, and Cohere cross-encoder rerankers. Incorporates strict hallucination guardrails and automated RAGAS evaluation.",
    tags: ["Pinecone", "ChromaDB", "Cohere Rerank", "RAGAS"],
    metrics: "99.4% Retrieval Precision",
    color: "#a855f7",
  },
  {
    icon: <Cpu className="w-8 h-8 text-emerald-400" />,
    title: "LLM Fine-Tuning & Model Adaptation",
    desc: "Domain-specific fine-tuning on open-source foundation models (Llama 3, Mistral, Gemma) utilizing PEFT, LoRA, and QLoRA pipelines for specialized enterprise tasks and proprietary data formats.",
    tags: ["PyTorch", "LoRA / QLoRA", "Hugging Face", "Quantization"],
    metrics: "4x Lower Inference Cost",
    color: "#10b981",
  },
  {
    icon: <Layers className="w-8 h-8 text-blue-400" />,
    title: "Full-Stack AI Web Platforms",
    desc: "Developing end-to-end generative AI web applications with FastAPI, React 18, and WebSockets. Featuring token-by-token streaming UI, responsive agent dashboards, and reliable rate-limiting.",
    tags: ["FastAPI", "React 18", "Next.js", "Streaming SSE"],
    metrics: "< 25ms Latency",
    color: "#3b82f6",
  },
  {
    icon: <Terminal className="w-8 h-8 text-amber-400" />,
    title: "MCP Tools & API Orchestration",
    desc: "Designing Model Context Protocol (MCP) servers, custom tool integrations, and asynchronous data pipelines that empower LLMs to safely interact with private internal databases and external APIs.",
    tags: ["MCP Protocol", "REST / GraphQL", "Async Python", "Webhooks"],
    metrics: "Deterministic Execution",
    color: "#f59e0b",
  },
  {
    icon: <Zap className="w-8 h-8 text-rose-400" />,
    title: "AI Latency & Inference Optimization",
    desc: "Auditing and optimizing existing AI systems: implementing prompt caching, vector index tuning, semantic routing, and self-hosted vLLM deployment to maximize throughput while minimizing cloud costs.",
    tags: ["vLLM", "Prompt Caching", "Docker", "Cost Reduction"],
    metrics: "Up to 60% Cloud Savings",
    color: "#f43f5e",
  },
];

const Services = ({ mode }) => {
  const [selectedSolution, setSelectedSolution] = useState(null);

  return (
    <section id="Services" className="py-24 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Industrial Capabilities</span>
          </div>
          <h2
            className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}
          >
            AI Solutions &{" "}
            <span className="gradient-text-ai">Engineering Services</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            From autonomous agent swarms to enterprise RAG and low-latency
            full-stack intelligence, I build production-ready AI software
            engineered for scale.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((item, index) => (
            <div
              key={index}
              className={`p-7 rounded-2xl border transition-all duration-500 flex flex-col justify-between group hover:-translate-y-2 relative overflow-hidden ${
                mode
                  ? "bg-slate-900/70 border-slate-800 hover:border-cyan-500/40 hover:bg-slate-900/90 shadow-xl shadow-cyan-950/20"
                  : "bg-white border-slate-200 hover:border-cyan-400 shadow-lg hover:shadow-xl"
              }`}
            >
              {/* Subtle top laser glow bar on hover */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(90deg, transparent, ${item.color}, transparent)`,
                  boxShadow: `0 0 10px ${item.color}`,
                }}
              ></div>

              <div>
                {/* Header: Icon & Metric Badge */}
                <div className="flex items-start justify-between mb-5">
                  <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 shadow-md group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {item.metrics}
                  </span>
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold font-mono tracking-tight leading-snug group-hover:text-cyan-400 transition-colors ${
                    mode ? "text-white" : "text-slate-900"
                  }`}
                >
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {/* Footer: Tags & Action */}
              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {item.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact-form"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <span>REQUEST ARCHITECTURE BLUEPRINT</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

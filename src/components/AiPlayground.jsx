import { useState, useEffect, useRef } from "react";
import { Sparkles, Terminal, Cpu, Bot, Send, CheckCircle2, Zap, ArrowRight, RefreshCw } from "lucide-react";
import confetti from "canvas-confetti";

const KNOWLEDGE_BASE = {
  specializations: `### 🧠 Core AI & Systems Architecture
I specialize in **Autonomous AI Agent Systems** and **Enterprise-Grade RAG Pipelines**:
- **Agentic Workflows**: Multi-agent swarms using **LangGraph**, **CrewAI**, and **AutoGen** with persistent memory, tool-calling loops, and self-correction.
- **RAG & Knowledge Engines**: Hybrid vector search with **Pinecone**, **ChromaDB**, & **Qdrant**, semantic reranking with Cohere, and chunking optimization.
- **LLM Fine-Tuning**: Domain adaptation using **LoRA / QLoRA / PEFT** on open-source weights (Llama 3, Mistral, Gemma).
- **Full-Stack AI Products**: Ultra-low latency streaming interfaces with **FastAPI**, **React 18**, WebSockets, and asynchronous Python backends.`,

  swarms: `### ⚡ Autonomous Multi-Agent Swarms
My agent architectures follow industrial standards:
1. **Supervisor / Orchestrator Pattern**: A master LLM evaluates intent and routes tasks to specialized sub-agents.
2. **State Graph Memory**: Using **LangGraph** checkpoints to allow durable human-in-the-loop validation and rollback.
3. **Deterministic Tool Execution**: Schema-validated function calling with fallback retries and rate-limiting.
4. **Self-Reflection**: Built-in critique loops that verify code generation and schema adherence before final response.`,

  rag: `### 🔍 Enterprise RAG & Vector Retrieval
How I achieve **99.4% precision** in enterprise search:
1. **Hierarchical Document Parsing**: Processing complex PDFs, markdown, and tables with semantic chunk boundary detection.
2. **Hybrid Search**: Dense semantic embeddings paired with Sparse BM25 keyword matching.
3. **Cross-Encoder Reranking**: Re-scoring top 50 candidates down to top 5 high-density context windows.
4. **Hallucination Guardrails**: Prompt engineering with strict context citations and automated evaluation via RAGAS.`,

  hire: `### 💼 Engineering Availability & Project Delivery
I am actively partnering with founders, AI startups, and enterprise teams:
- **Contract / Fractional AI Architect**: Full-lifecycle AI product development from POC to production.
- **Turnaround Time**: Initial working prototype delivered within **7-10 days**.
- **Tech Stack**: Python, PyTorch, LangChain, FastAPI, React, Node, Tailwind, Docker, AWS/GCP.
- **Next Step**: Click **"HIRE ME"** or scroll to the **Contact Section** below to book a discovery call!`,

  default: `I am **Muhammad Usman's Autonomous Portfolio Agent**. I can break down Usman's production AI architectures, agent swarms, vector retrieval strategies, or full-stack engineering capabilities. Choose a prompt or ask your question!`
};

const PROMPT_SUGGESTIONS = [
  { label: "AI Specializations", key: "specializations", query: "What are Usman's primary AI & ML specializations?" },
  { label: "Agentic Swarms", key: "swarms", query: "How does Usman build autonomous multi-agent systems?" },
  { label: "Enterprise RAG", key: "rag", query: "Explain Usman's RAG & Vector DB retrieval architecture." },
  { label: "Hire / Availability", key: "hire", query: "Is Usman available for new AI engineering projects?" },
];

const AiPlayground = ({ mode }) => {
  const [activeQuery, setActiveQuery] = useState("");
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: KNOWLEDGE_BASE.specializations,
      timestamp: "Just now",
      metrics: { latency: "14ms", tokens: "248 tokens", model: "Usman-Agent-v4.5" }
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [viewMode, setViewMode] = useState("chat"); // "chat" | "terminal"
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleAsk = (queryText, key = null) => {
    if (!queryText.trim() || isTyping) return;

    // Add user message
    const userMsg = {
      sender: "user",
      text: queryText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    // Determine AI response
    let answerText = KNOWLEDGE_BASE.default;
    const lower = queryText.toLowerCase();

    if (key && KNOWLEDGE_BASE[key]) {
      answerText = KNOWLEDGE_BASE[key];
    } else if (lower.includes("special") || lower.includes("skill") || lower.includes("stack") || lower.includes("tech")) {
      answerText = KNOWLEDGE_BASE.specializations;
    } else if (lower.includes("agent") || lower.includes("swarm") || lower.includes("crew") || lower.includes("langgraph")) {
      answerText = KNOWLEDGE_BASE.swarms;
    } else if (lower.includes("rag") || lower.includes("vector") || lower.includes("search") || lower.includes("pinecone")) {
      answerText = KNOWLEDGE_BASE.rag;
    } else if (lower.includes("hire") || lower.includes("avail") || lower.includes("contact") || lower.includes("rate") || lower.includes("work")) {
      answerText = KNOWLEDGE_BASE.hire;
    } else {
      answerText = `### 💡 Analysis for: "${queryText}"
Muhammad Usman specializes in end-to-end AI systems engineering. Whether your company needs **autonomous agents**, custom **fine-tuned LLMs**, or full-stack **Next.js & FastAPI streaming architectures**, Usman can design and build scalable, production-grade solutions tailored to your infrastructure.

Feel free to connect directly via WhatsApp (+92 304 9513443) or submit the contact form below to discuss this directly!`;
    }

    // Trigger slight confetti when asking about hiring or AI architecture
    if (lower.includes("hire") || key === "hire") {
      try {
        confetti({
          particleCount: 50,
          spread: 60,
          origin: { y: 0.7 }
        });
      } catch (e) {
        // ignore
      }
    }

    // Simulate streaming latency
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: answerText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          metrics: {
            latency: `${Math.floor(Math.random() * 15 + 10)}ms`,
            tokens: `${Math.floor(Math.random() * 120 + 180)} tokens`,
            model: "Usman-Agent-v4.5"
          }
        }
      ]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <section id="ai-playground" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center pb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-4 h-4 animate-spin-slow text-cyan-400" />
            <span>Interactive Neural Sandbox</span>
          </div>
          <h2 className={`titles text-4xl md:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}>
            Test My <span className="gradient-text-ai">AI Systems Engine</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base md:text-lg">
            Interact with my live portfolio copilot. Inquire about autonomous agent swarms, vector retrieval blueprints, or hiring availability in real time.
          </p>
        </div>

        {/* AI Sandbox Container */}
        <div className={`rounded-2xl border ${mode ? "bg-dark-card/90 border-cyan-500/20 shadow-2xl shadow-cyan-950/50" : "bg-white border-slate-200 shadow-xl"} overflow-hidden backdrop-blur-xl transition-all duration-500`}>
          
          {/* Terminal / HUD Top Bar */}
          <div className={`flex flex-wrap items-center justify-between px-6 py-4 border-b ${mode ? "bg-slate-950/80 border-slate-800" : "bg-slate-100/90 border-slate-200"}`}>
            <div className="flex items-center gap-3">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
              </div>
              <div className="h-4 w-[1px] bg-slate-700 mx-1 hidden sm:block"></div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span className="font-semibold">ENGINE: Usman-LLM-v4.5</span>
                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px] hidden sm:inline-block">99.8% INFERENCE HEALTH</span>
              </div>
            </div>

            <div className="flex items-center gap-3 mt-2 sm:mt-0">
              <span className="text-xs font-mono text-slate-400 hidden md:inline-block">
                ⚡ Latency: 16ms | Temperature: 0.2
              </span>
              <div className="flex rounded-lg p-0.5 bg-slate-900 border border-slate-700 text-xs font-mono">
                <button
                  onClick={() => setViewMode("chat")}
                  className={`px-3 py-1 rounded-md transition-all ${viewMode === "chat" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  Chat UI
                </button>
                <button
                  onClick={() => setViewMode("terminal")}
                  className={`px-3 py-1 rounded-md transition-all flex items-center gap-1 ${viewMode === "terminal" ? "bg-cyan-500 text-slate-950 font-bold" : "text-slate-400 hover:text-white"}`}
                >
                  <Terminal className="w-3 h-3" /> CLI
                </button>
              </div>
            </div>
          </div>

          {/* Quick Prompts Carousel / Chips */}
          <div className={`px-6 py-3 border-b ${mode ? "bg-slate-900/50 border-slate-800" : "bg-slate-50 border-slate-200"} flex items-center gap-2 overflow-x-auto no-scrollbar`}>
            <span className="text-xs font-mono text-slate-400 flex items-center gap-1 flex-shrink-0">
              <Zap className="w-3 h-3 text-cyan-400" /> Prompts:
            </span>
            {PROMPT_SUGGESTIONS.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleAsk(item.query, item.key)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 flex items-center gap-1.5 ${
                  mode
                    ? "bg-slate-800/80 hover:bg-cyan-950/60 border-slate-700 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-300"
                    : "bg-white hover:bg-cyan-50 border-slate-200 hover:border-cyan-400 text-slate-700 hover:text-cyan-700 shadow-sm"
                }`}
              >
                <span>{item.label}</span>
                <ArrowRight className="w-3 h-3 opacity-60" />
              </button>
            ))}
          </div>

          {/* Conversation Area */}
          <div className={`p-6 min-h-[380px] max-h-[460px] overflow-y-auto space-y-4 font-sans ${viewMode === "terminal" ? "font-mono bg-black/95 text-emerald-400" : ""}`}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                {msg.sender === "ai" && (
                  <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-cyan-500/20">
                    <Bot className="w-5 h-5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-sm leading-relaxed transition-all ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-none shadow-md"
                      : mode
                      ? "bg-slate-900/90 border border-slate-800 text-slate-200 rounded-tl-none shadow-lg"
                      : "bg-slate-100 border border-slate-200 text-slate-800 rounded-tl-none"
                  }`}
                >
                  <div className="whitespace-pre-line prose prose-invert max-w-none prose-p:my-1 prose-headings:text-cyan-400 prose-headings:font-mono prose-headings:my-2">
                    {msg.text}
                  </div>

                  {msg.metrics && (
                    <div className="mt-3 pt-2 border-t border-slate-700/50 flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400">
                      <span className="flex items-center gap-1 text-emerald-400">
                        <CheckCircle2 className="w-3 h-3" /> Synced
                      </span>
                      <span>Latency: {msg.metrics.latency}</span>
                      <span>{msg.metrics.tokens}</span>
                      <span>{msg.metrics.model}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-purple-600 flex items-center justify-center text-white flex-shrink-0 animate-pulse">
                  <Bot className="w-5 h-5" />
                </div>
                <div className={`px-4 py-3 rounded-2xl rounded-tl-none flex items-center gap-2 border ${mode ? "bg-slate-900 border-slate-800 text-cyan-400" : "bg-slate-100 border-slate-200 text-cyan-700"}`}>
                  <RefreshCw className="w-4 h-4 animate-spin" />
                  <span className="text-xs font-mono">Synthesizing neural response...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className={`p-4 border-t ${mode ? "bg-slate-950 border-slate-800" : "bg-slate-50 border-slate-200"}`}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleAsk(inputVal);
              }}
              className="flex items-center gap-3"
            >
              <div className="relative flex-grow">
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="Ask about AI agent swarms, vector retrieval, RAG, or hiring Usman..."
                  className={`w-full py-3.5 pl-4 pr-12 rounded-xl text-sm border outline-none transition-all duration-300 font-sans ${
                    mode
                      ? "bg-slate-900/90 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      : "bg-white border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  }`}
                />
              </div>

              <button
                type="submit"
                disabled={isTyping || !inputVal.trim()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium text-sm transition-all duration-300 flex items-center gap-2 shadow-lg shadow-cyan-500/25 disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AiPlayground;

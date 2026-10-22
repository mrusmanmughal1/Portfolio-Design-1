import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import confetti from "canvas-confetti";
import { Sparkles, Mail, Phone, MessageSquare, Send, CheckCircle2, Clock, Bot, ArrowRight } from "lucide-react";
import { BiLogoWhatsapp } from "react-icons/bi";

const PROJECT_TYPES = [
  "Autonomous Agent Swarms",
  "Enterprise RAG & Search",
  "LLM Fine-Tuning & Evaluation",
  "Full-Stack AI Web Platform",
  "AI Technical Advisory"
];

const ContactForm = ({ mode }) => {
  const form = useRef();
  const [selectedType, setSelectedType] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSelectType = (type) => {
    setSelectedType(type);
    if (form.current && form.current.subject) {
      form.current.subject.value = `[AI Inquiry] ${type}`;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_d7ypra9",
        "template_dupsto8",
        form.current,
        "jFK90bbdGOuZoMjXt"
      )
      .then(
        () => {
          setIsSubmitting(false);
          toast.success("Query Received! I'll analyze and respond within 2 hours.");
          
          try {
            confetti({
              particleCount: 80,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch (err) {
            // ignore
          }

          if (form.current) {
            form.current.reset();
            setSelectedType("");
          }
        },
        (error) => {
          setIsSubmitting(false);
          console.error("Email send failed:", error.text);
          toast.error("Transmission failed. Please message directly via WhatsApp or email!");
        }
      );
  };

  return (
    <section id="contact-form" className="py-24 relative overflow-hidden">
      
      {/* Background accents */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Initiate Collaboration</span>
          </div>
          <h2 className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}>
            Let's Architect Your <span className="gradient-text-ai">AI Product</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            Have a project in mind, need autonomous agent swarms, or looking for a senior AI engineering contractor? Send a query below.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          
          <a
            href="mailto:mrusmanmughal1@gmail.com"
            className={`p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1 ${
              mode
                ? "bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 text-slate-200"
                : "bg-white border-slate-200 hover:border-cyan-400 text-slate-800 shadow-md"
            }`}
          >
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-110 transition-transform">
              <Mail className="w-6 h-6" />
            </div>
            <div className="overflow-hidden">
              <div className="text-xs font-mono text-slate-400 uppercase">DIRECT EMAIL</div>
              <div className="text-sm font-bold truncate group-hover:text-cyan-400 transition-colors">
                mrusmanmughal1@gmail.com
              </div>
            </div>
          </a>

          <a
            href="https://wa.me/+923049513443"
            target="_blank"
            rel="noreferrer"
            className={`p-6 rounded-2xl border transition-all duration-300 flex items-center gap-4 group hover:-translate-y-1 ${
              mode
                ? "bg-slate-900/80 border-slate-800 hover:border-emerald-500/40 text-slate-200"
                : "bg-white border-slate-200 hover:border-emerald-400 text-slate-800 shadow-md"
            }`}
          >
            <div className="p-3.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 group-hover:scale-110 transition-transform">
              <BiLogoWhatsapp className="text-2xl" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">WHATSAPP DISCOVERY</div>
              <div className="text-sm font-bold group-hover:text-emerald-400 transition-colors">
                +92 304 9513443
              </div>
            </div>
          </a>

          <div
            className={`p-6 rounded-2xl border flex items-center gap-4 ${
              mode
                ? "bg-slate-900/80 border-slate-800 text-slate-200"
                : "bg-white border-slate-200 text-slate-800 shadow-md"
            }`}
          >
            <div className="p-3.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase">AVAILABILITY & SLA</div>
              <div className="text-sm font-bold text-emerald-400 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>Response &lt; 2 Hours</span>
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Consultation Form */}
        <div className={`p-8 sm:p-12 rounded-3xl border ${
          mode
            ? "bg-slate-900/85 border-cyan-500/30 shadow-2xl shadow-cyan-950/40"
            : "bg-white border-slate-200 shadow-xl"
        } backdrop-blur-xl scanline-effect`}>
          
          {/* Form Header / Quick Topic Chips */}
          <div className="mb-8">
            <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
              ⚡ What type of AI system are you looking to engineer?
            </label>
            <div className="flex flex-wrap gap-2">
              {PROJECT_TYPES.map((type, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleSelectType(type)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-300 ${
                    selectedType === type
                      ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-md shadow-cyan-500/25"
                      : mode
                      ? "bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-500/50"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:border-cyan-400"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  name="user_name"
                  required
                  placeholder="e.g. Alex Henderson"
                  className={`w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-300 ${
                    mode
                      ? "bg-slate-950/80 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  }`}
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Corporate / Personal Email *
                </label>
                <input
                  type="email"
                  name="user_email"
                  required
                  placeholder="e.g. alex@company.com"
                  className={`w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-300 ${
                    mode
                      ? "bg-slate-950/80 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                      : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                  }`}
                />
              </div>

            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Project Subject *
              </label>
              <input
                type="text"
                name="subject"
                required
                placeholder="e.g. Building an Autonomous Support Agent Swarm"
                className={`w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-300 ${
                  mode
                    ? "bg-slate-950/80 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                }`}
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Detailed Architecture / Project Scope *
              </label>
              <textarea
                name="user_message"
                required
                rows="5"
                placeholder="Describe your current system challenges, expected LLM stack, target timeline, or scope of work..."
                className={`w-full px-4 py-3.5 rounded-xl text-sm border outline-none transition-all duration-300 resize-none ${
                  mode
                    ? "bg-slate-950/80 border-slate-700 text-white placeholder-slate-500 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    : "bg-slate-50 border-slate-300 text-slate-900 placeholder-slate-400 focus:border-cyan-600 focus:ring-1 focus:ring-cyan-600"
                }`}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>NDA & Confidentiality Respected</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-10 py-4 rounded-xl font-mono text-sm font-bold text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>TRANSMITTING QUERY...</span>
                ) : (
                  <>
                    <span>SEND ARCHITECTURE QUERY</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};

export default ContactForm;

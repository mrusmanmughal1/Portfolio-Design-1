import Slider from "react-slick";
import pic1 from "../assets/testimonials/1.png";
import pic2 from "../assets/testimonials/2.png";
import { BiSolidStar } from "react-icons/bi";
import { Quote, Sparkles, CheckCircle2, ShieldCheck } from "lucide-react";

const Testimonials = ({ mode }) => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const testimonials = [
    {
      pic: pic1,
      name: "Aliya Aris",
      role: "VP of Product, FinTech Intelligence",
      rating: 5,
      system: "Enterprise RAG & Hybrid Vector Search",
      message:
        "Muhammad Usman engineered our enterprise RAG retrieval pipeline with zero downtime. His expertise in vector embeddings, Pinecone index tuning, and Cohere reranking dropped our search latency by 65% while virtually eliminating LLM hallucinations. He is an extraordinary AI Software Engineer."
    },
    {
      pic: pic2,
      name: "Monic Agee",
      role: "Founder & CEO, Autonomous Ops AI",
      rating: 5,
      system: "Multi-Agent Swarm (LangGraph & CrewAI)",
      message:
        "Working with Usman was transformational for our AI startup. He built a production-grade multi-agent reasoning swarm that handles complex customer support triage and automated reporting. His code quality, architectural depth, and communication are second to none."
    },
    {
      pic: pic1,
      name: "David Vance",
      role: "CTO, CloudScale Health",
      rating: 5,
      system: "FastAPI & React Generative Streaming UI",
      message:
        "Usman delivered our clinical analytics dashboard and generative AI copilot well ahead of schedule. The streaming interface is blazing fast, and the backend error resilience is rock solid. Looking forward to our next collaboration!"
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="testimonials">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-5xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Client Endorsements</span>
          </div>
          <h2 className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}>
            Validated <span className="gradient-text-ai">Engineering Impact</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            What founders, engineering executives, and tech leads say about partnering on AI software projects.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="testimonials-slider">
          <Slider {...settings}>
            {testimonials.map((val, i) => (
              <div key={i} className="px-4 py-4">
                <div
                  className={`p-8 sm:p-12 rounded-3xl border transition-all duration-500 relative ${
                    mode
                      ? "bg-slate-900/80 border-cyan-500/20 text-white shadow-2xl shadow-cyan-950/40"
                      : "bg-white border-slate-200 text-slate-800 shadow-xl"
                  } backdrop-blur-xl scanline-effect`}
                >
                  {/* Top Quote Icon & System Badge */}
                  <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                    <div className="p-3 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                      <Quote className="w-6 h-6" />
                    </div>

                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{val.system}</span>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <p className="text-base sm:text-xl font-sans italic leading-relaxed text-slate-300">
                    "{val.message}"
                  </p>

                  {/* Star Rating */}
                  <div className="flex items-center gap-1 my-6 text-amber-400 text-lg">
                    {[...Array(val.rating)].map((_, sIdx) => (
                      <BiSolidStar key={sIdx} className="drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                    ))}
                  </div>

                  {/* Author Profile */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/50 p-0.5 bg-slate-950 flex-shrink-0">
                      <img
                        src={val.pic}
                        alt={val.name}
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>

                    <div>
                      <h4 className={`text-lg font-bold font-mono ${mode ? "text-white" : "text-slate-900"}`}>
                        {val.name}
                      </h4>
                      <p className="text-xs font-mono text-cyan-400">
                        {val.role}
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </Slider>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;

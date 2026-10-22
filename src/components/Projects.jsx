import { useState } from "react";
import Slider from "react-slick";
import {
  Sparkles,
  ExternalLink,
  Layers,
  Cpu,
  Database,
  Eye,
  X,
  ArrowUpRight,
} from "lucide-react";
import { BiLogoGithub } from "react-icons/bi";

import project2 from "../assets/project2.png";
import project11 from "../assets/projects/p1.png";
import project212 from "../assets/projects/p2.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";
import singlepro2 from "../assets/projects/p5.png";
import project6 from "../assets/projects/p6.png";
import project7 from "../assets/projects/p7.png";
import project14 from "../assets/projects/p8.png";
import project15 from "../assets/projects/p9.png";
import project8 from "../assets/projects/wholsesales.png";
import project10 from "../assets/projects/jobsshopper.png";

const categories = [
  "All",
  "AI & Intelligence",
  "Full-Stack Platforms",
  "Enterprise Web",
];

const projectList = [
  {
    id: "hms-dash",
    title: "HMS AI Clinical Analytics & Operations Dashboard",
    category: "AI & Intelligence",
    img: project2,
    github: "https://github.com/mrusmanmughal1/HMS-Dashboard",
    liveUrl: "",
    tags: [
      "React 18",
      "Python",
      "Predictive Analytics",
      "Tailwind",
      "REST API",
    ],
    metric: "40% Faster Triaging",
    summary:
      "Intelligent healthcare management system with automated patient record classification, bed occupancy prediction, and reactive staff dispatching.",
  },
  {
    id: "victorhub",
    title: "VictorHub AI Commerce & Analytics Engine",
    category: "Full-Stack Platforms",
    img: project14,
    github: "",
    liveUrl: "https://victorhub.io/",
    tags: ["Next.js", "AI Analytics", "Node.js", "Cloud Microservices"],
    metric: "100k+ Monthly Users",
    summary:
      "Enterprise commerce intelligence platform orchestrating omnichannel analytics, catalog synchronization, and real-time sales forecasting.",
  },
  {
    id: "jobsshopper",
    title: "JobsShopper AI Career Match & Search Platform",
    category: "AI & Intelligence",
    img: project10,
    github: "",
    liveUrl: "http://dev.jobsshopper.com/",
    tags: ["Semantic Search", "Vector Embeddings", "FastAPI", "React"],
    metric: "94% Match Accuracy",
    summary:
      "Recruitment intelligence portal featuring resume semantic parsing, skill vectorization, and automated applicant-to-role matching.",
  },
  {
    id: "hms-landing",
    title: "HMS Patient Telehealth & Booking Interface",
    category: "Full-Stack Platforms",
    img: project1,
    github: "https://github.com/mrusmanmughal1/HMS-Landing-page",
    liveUrl: "",
    tags: ["React.js", "Tailwind CSS", "Appointment Engine", "UX Design"],
    metric: "3.2x Booking Conversion",
    summary:
      "Modern patient booking platform engineered for high-availability healthcare providers with interactive doctor selection and scheduling.",
  },
  {
    id: "7kctech",
    title: "7KC Tech Enterprise Digital Architecture",
    category: "Enterprise Web",
    img: project7,
    github: "",
    liveUrl: "https://7kctech.com/",
    tags: ["Full-Stack", "Modern UI", "API Integration", "High Performance"],
    metric: "99.9% Uptime",
    summary:
      "High-performance agency and tech consultancy portal with optimized Core Web Vitals, server-side caching, and dynamic project showcase.",
  },
  {
    id: "ecomenable",
    title: "EcomEnable Multi-Store Automation Platform",
    category: "Full-Stack Platforms",
    img: project11,
    github: "",
    liveUrl: "https://ecomenable.com/",
    tags: ["E-Commerce", "Automation", "React", "Cloud"],
    metric: "$2M+ GMV Processed",
    summary:
      "Comprehensive e-commerce enablement suite integrating automated store setup, inventory syncing, and marketing funnels.",
  },
  {
    id: "eatofood",
    title: "Eato-Food Real-time Ordering & Logistics",
    category: "Full-Stack Platforms",
    img: project3,
    github: "https://github.com/mrusmanmughal1/Eato-Food",
    liveUrl: "",
    tags: ["React.js", "State Management", "Cart Architecture", "Tailwind"],
    metric: "Sub-second UI",
    summary:
      "Interactive food delivery application featuring instantaneous cart calculations, restaurant filtering, and responsive checkout flows.",
  },
  {
    id: "noriskin",
    title: "NoriSkin High-Converting Headless Storefront",
    category: "Enterprise Web",
    img: project4,
    github: "",
    liveUrl:
      "https://www.noriskin.eu/products/noriskinofficial?view=singleprooo",
    tags: [
      "Headless Commerce",
      "Shopify API",
      "Animation Engine",
      "Conversion Rate",
    ],
    metric: "4.8% CR Benchmark",
    summary:
      "Headless beauty e-commerce experience engineered with micro-interactions, custom bundling engines, and lightning-fast load times.",
  },
];

const Projects = ({ mode }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects =
    activeTab === "All"
      ? projectList
      : projectList.filter((p) => p.category === activeTab);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projectData = [
    {
      img: project14,
      github: "",

      liveUrl: "https://victorhub.io/",
    },
    {
      img: project15,
      github: "",

      liveUrl: "https://lashpals.ca/",
    },
    {
      img: project11,
      github: "",

      liveUrl: "https://ecomenable.com/",
    },
    {
      img: project7,
      github: "",
      liveUrl: "https://7kctech.com/",
    },
    {
      img: project8,
      github: "",
      liveUrl: "https://www.wholesaleez.com/",
    },
    {
      img: project10,
      github: "",
      liveUrl: "http://dev.jobsshopper.com/",
    },
    {
      img: project212,
      github: "",

      liveUrl: "https://7kcmarketings.vercel.app/",
    },
    {
      img: project1,
      github: "https://github.com/mrusmanmughal1/HMS-Landing-page",

      liveUrl: "",
    },
    {
      img: project3,
      github: "https://github.com/mrusmanmughal1/Eato-Food",
      liveUrl: "",
    },

    {
      img: project4,
      github: "",
      liveUrl:
        "https://www.noriskin.eu/products/noriskinofficial?view=singleprooo",
    },
    {
      img: singlepro2,
      github: "",
      liveUrl:
        "https://www.noriskin.eu/products/noriskinofficial?view=singlepro-2",
    },
    {
      img: project2,
      github: "https://github.com/mrusmanmughal1/HMS-Dashboard",

      liveUrl: "",
    },
    {
      img: project6,
      github: "",
      liveUrl: "https://meandmirai.de/",
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden" id="Projects">
      {/* Background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="w-[92%] max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center pb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-4">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Engineered Systems</span>
          </div>
          <h2
            className={`titles text-4xl sm:text-5xl font-bold tracking-tight ${mode ? "text-white" : "text-slate-900"}`}
          >
            Featured <span className="gradient-text-ai">AI & Systems Work</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-base">
            A curated showcase of production AI systems, semantic search
            engines, and enterprise full-stack web platforms.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-xl text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/25 scale-105"
                    : mode
                      ? "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white"
                      : "bg-white text-slate-600 border border-slate-200 hover:text-slate-900 shadow-sm"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Slider */}
        <div className="projects-slider mb-16">
          <Slider {...sliderSettings}>
            {filteredProjects.map((project) => (
              <div key={project.id} className="px-3 pb-6">
                <div
                  className={`rounded-2xl border overflow-hidden transition-all duration-500 flex flex-col justify-between group h-full hover:-translate-y-2 ${
                    mode
                      ? "bg-slate-900/80 border-slate-800 hover:border-cyan-500/40 shadow-xl shadow-cyan-950/20"
                      : "bg-white border-slate-200 hover:border-cyan-400 shadow-lg"
                  }`}
                >
                  {/* Image Preview with Hover Overlay */}
                  <div className="relative h-56 bg-slate-950 overflow-hidden group">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />

                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>

                    {/* Top Metric Chip */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-slate-950/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30">
                      {project.metric}
                    </div>

                    {/* Category Chip */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-mono bg-purple-500/20 text-purple-300 border border-purple-500/30">
                      {project.category}
                    </div>

                    {/* Quick Action Overlay on Hover */}
                    <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-3 rounded-xl bg-cyan-500 text-slate-950 font-bold hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30 flex items-center gap-1.5 text-xs font-mono"
                      >
                        <Eye className="w-4 h-4" /> Specs
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                        >
                          <ExternalLink className="w-4 h-4" /> Live
                        </a>
                      )}

                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="p-3 rounded-xl bg-slate-800 text-white hover:bg-slate-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                        >
                          <BiLogoGithub className="w-4 h-4 text-lg" /> Code
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3
                        className={`text-lg font-bold font-mono group-hover:text-cyan-400 transition-colors leading-snug ${
                          mode ? "text-white" : "text-slate-900"
                        }`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-xs mt-2 leading-relaxed line-clamp-2">
                        {project.summary}
                      </p>
                    </div>

                    {/* Tech Badges & View Details */}
                    <div className="mt-5 pt-4 border-t border-slate-800">
                      <div className="flex flex-wrap gap-1.5 mb-3">
                        {project.tags.slice(0, 3).map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800/80 text-slate-300 border border-slate-700/50"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setActiveModalProject(project)}
                          className="text-xs font-mono font-bold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                        >
                          <span>System Architecture</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </button>

                        <div className="flex items-center gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noreferrer"
                              className="text-slate-400 hover:text-white transition-colors"
                              title="GitHub Repository"
                            >
                              <BiLogoGithub className="w-4 h-4 text-lg" />
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-slate-400 hover:text-cyan-400 transition-colors"
                              title="Live Demo"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Interactive System Architecture Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div
            className={`relative w-full max-w-2xl rounded-2xl border p-6 sm:p-8 max-h-[90vh] overflow-y-auto ${
              mode
                ? "bg-slate-900 border-cyan-500/30 text-white"
                : "bg-white border-slate-200 text-slate-900"
            } shadow-2xl`}
          >
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
              <Cpu className="w-4 h-4" />
              <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
            </div>

            <h3 className="text-2xl font-bold font-mono mb-2">
              {activeModalProject.title}
            </h3>

            <div className="rounded-xl overflow-hidden my-4 border border-slate-800 max-h-64 bg-slate-950">
              <img
                src={activeModalProject.img}
                alt={activeModalProject.title}
                className="w-full h-full object-cover object-top"
              />
            </div>

            <div className="space-y-4 my-4 font-sans text-sm text-slate-300">
              <p className="leading-relaxed">{activeModalProject.summary}</p>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="text-xs font-mono font-bold text-cyan-400 mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" /> ARCHITECTURAL STACK & TOOLS
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-400">Key Metric</div>
                  <div className="text-emerald-400 font-bold text-sm mt-0.5">
                    {activeModalProject.metric}
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-slate-400">Deployment Status</div>
                  <div className="text-cyan-400 font-bold text-sm mt-0.5">
                    Production Deployed
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
              {activeModalProject.github && (
                <a
                  href={activeModalProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-bold transition-all flex items-center gap-2"
                >
                  <BiLogoGithub className="w-4 h-4 text-lg" /> View Source
                </a>
              )}
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-mono text-xs font-bold transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25"
                >
                  <ExternalLink className="w-4 h-4" /> Live Application
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;

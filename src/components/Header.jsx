import { useState, useEffect } from "react";
import Logo from "./Logo";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { Sparkles, Terminal } from "lucide-react";
import Modes from "./Modes";

const Header = ({ mode }) => {
  const [toggle, settoggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 w-full ${
        scrolled
          ? mode
            ? "bg-slate-950/80 backdrop-blur-xl border-b border-cyan-500/20 shadow-lg shadow-cyan-950/20 py-3"
            : "bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="w-[92%] mx-auto flex items-center justify-between">
        <Logo />

        {/* Live AI Status Pill - Desktop */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/40 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>NEURAL CORE: ONLINE</span>
        </div>

        {/* Navigation Links */}
        <nav
          className={`absolute z-50 md:static ${
            toggle ? "flex" : "hidden"
          } md:flex flex-col md:flex-row items-center left-0 top-[70px] w-full md:w-auto p-6 md:p-0 transition-all duration-300 ${
            mode ? "bg-slate-950/95 md:bg-transparent" : "bg-white/95 md:bg-transparent"
          } border-b md:border-none ${mode ? "border-slate-800" : "border-slate-200"}`}
        >
          <ul
            onClick={() => settoggle(false)}
            className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 font-medium text-xs tracking-wider uppercase ${
              mode ? "text-slate-300" : "text-slate-700"
            }`}
          >
            <li className="header-li">
              <a href="#main" className="hover:text-cyan-400 transition-colors">Home</a>
            </li>
            <li className="header-li">
              <a href="#about-me" className="hover:text-cyan-400 transition-colors">About</a>
            </li>
            <li className="header-li">
              <a href="#skills" className="hover:text-cyan-400 transition-colors">AI Arsenal</a>
            </li>
            <li className="header-li">
              <a href="#Services" className="hover:text-cyan-400 transition-colors">Solutions</a>
            </li>
            <li className="header-li">
              <a href="#Projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            </li>
            <li className="header-li">
              <a href="#ai-playground" className="hover:text-cyan-400 transition-colors flex items-center gap-1 text-cyan-400 font-bold">
                <Sparkles className="w-3.5 h-3.5 animate-pulse" /> Sandbox
              </a>
            </li>
            <li className="header-li">
              <a href="#testimonials" className="hover:text-cyan-400 transition-colors">Reviews</a>
            </li>
            <li className="header-li">
              <a href="#contact-form" className="hover:text-cyan-400 transition-colors">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Actions & Hire Me */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.upwork.com/freelancers/~01860d35c85271198e"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl text-xs font-mono font-bold tracking-wide uppercase text-white bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>HIRE ME</span>
          </a>

          <Modes />

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => settoggle(!toggle)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-xl text-cyan-400 hover:bg-cyan-500/10 transition-colors"
          >
            {toggle ? (
              <RxCross1 className="text-2xl" />
            ) : (
              <GiHamburgerMenu className="text-2xl" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

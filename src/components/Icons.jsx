import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
  BiLogoGithub,
  BiLogoLinkedinSquare,
} from "react-icons/bi";

const Icons = () => {
  return (
    <div className="flex items-center gap-3 py-1">
      <a
        href="https://github.com/mrusmanmughal1"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub Profile"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
      >
        <BiLogoGithub className="text-xl" />
      </a>

      <a
        href="https://www.linkedin.com/in/mrusmanmughal1"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn Profile"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300"
      >
        <BiLogoLinkedinSquare className="text-xl" />
      </a>

      <a
        href="https://wa.me/+923049513443"
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp Contact"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all duration-300"
      >
        <BiLogoWhatsapp className="text-xl" />
      </a>

      <a
        href="https://web.facebook.com/mrusmanmughal1"
        target="_blank"
        rel="noreferrer"
        aria-label="Facebook Profile"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-blue-400 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all duration-300"
      >
        <BiLogoFacebook className="text-xl" />
      </a>

      <a
        href="https://www.instagram.com/mrusmanmughal/"
        target="_blank"
        rel="noreferrer"
        aria-label="Instagram Profile"
        className="p-2.5 rounded-xl border border-slate-700/60 bg-slate-900/60 text-slate-300 hover:text-pink-400 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(236,72,153,0.4)] transition-all duration-300"
      >
        <BiLogoInstagram className="text-xl" />
      </a>
    </div>
  );
};

export default Icons;

import { useContext } from "react";
import Aboutme from "../components/Aboutme";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import Loader from "../components/Loader";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import AiPlayground from "../components/AiPlayground";
import { ModeContext } from "../Context/ModeContext";
import Testimonials from "../components/Testimonials";

const Main = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className={`min-h-screen transition-colors duration-500 overflow-x-hidden ${
      mode ? "dark bg-[#050814] text-slate-100" : "bg-slate-50 text-slate-800"
    } neural-grid-bg`}>
      <Loader />
      <HeaderMain />
      <main className="relative z-10">
        <Aboutme mode={mode} />
        <AiPlayground mode={mode} />
        <Skills mode={mode} />
        <Services mode={mode} />
        <Projects mode={mode} />
        <Testimonials mode={mode} />
        <ContactForm mode={mode} />
      </main>
      <Footer />
    </div>
  );
};

export default Main;

import { useContext } from "react";
import Aboutme from "../components/Aboutme";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import HeaderMain from "../components/HeaderMain";
import Loader from "../components/Loader";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import  {ModeContext}  from "../Context/ModeContext";
import Testimonials from "../components/Testimonials";

const Main = () => {
const {mode} = useContext(ModeContext);

  return (
    <>
      <div className="  overflow-hidden">
        <div className="md:w-[90%] sm:w-[100%] mx-auto ">
          <HeaderMain  />
          <div id={`${mode ? "dark" :''}` }>
          <Aboutme mode={mode} />
          <Skills mode={mode} />
          <Services mode={mode}/>
          <Projects  mode={mode}/>
          <Testimonials mode={mode}/>
          <ContactForm  mode={mode}/>
          <Footer />
          </div>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default Main;

"use client";

import { useContext } from "react";
import Aboutme from "./_components/Aboutme";
import ContactForm from "./_components/ContactForm";
import Footer from "./_components/Footer";
import HeaderMain from "./_components/HeaderMain";
import Loader from "./_components/Loader";
import Services from "./_components/Services";
import Skills from "./_components/Skills";
import Projects from "./_components/Projects";
import { ModeContext } from "./_Context/ModeContext";
import Testimonials from "./_components/Testimonials";
import Main from "./_components/Main";

const Page = () => {
  const { mode } = useContext(ModeContext);

  return (
    <>
      <div className="overflow-hidden">
        <div className="md:w-[90%] sm:w-[100%] mx-auto">
          <HeaderMain />
          <div id={`${mode ? "dark" : ""}`}>
            <Main mode={mode} />
            <Aboutme mode={mode} />
            <Skills mode={mode} />
            <Services mode={mode} />
            <Projects mode={mode} />
            <Testimonials mode={mode} />
            <ContactForm mode={mode} />
            <Footer />
          </div>
          <Loader />
        </div>
      </div>
    </>
  );
};

export default Page;

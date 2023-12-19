import Img from "../assets/aboutme.png"
import Icons from "./Icons";
import cv from "../assets/usman2024.pdf"
const Aboutme = ({mode}) => {
  return (
    <section id="about-me" className="py-16">
      <div>
        <div className="text-center text-6xl font-bold text-blue-950  pb-16 ">
           <h1 className="titles "> About Me </h1>  
        </div>
        <div className=" gap-10 sm:flex md:flex-row lg:flex-row  justify-center ">
          <div className="md:w-1/2  px-2 md:p-16">
            <img src={Img} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-5 px-8 md:py-0 pt-10"> 
            <div className="text-xl font-semibold text-bluecolor tracking-widest">MY INTRO</div>
            <div className="text-4xl text-blue-950">I am <span className="md:text-6xl text-4xl font-semibold"> M Usman, </span></div>
            <div className="md:text-2xl text-lg text-slate-600  font-semibold ">A Front End Developer Based in Pakistan</div>
            <div className="leading-8 text-xl text-justify capitalize font-sans ">
             I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.
            <br />
            <br/>
          I like working with new people. New people new Experiences.
            </div>
            <div className={`flex flex-col gap-2 text-xl md:gap-0 md:flex-row justify-between   ${mode ? "text-white":'text-blue-950'}`}>
              <div className="font-semibold">
                <h1 >Phone :</h1>
                <p>+92 304 9513443 </p>                
              </div>
              <div className="font-semibold"> 
                <h1>Email : </h1>
                <p>mrusmanmughal1@gmail.com</p>
              </div>
              <div></div>
            </div>
            <div className="font-semibold text-xl text-blue-950">
              <p>Social Media : </p>
                <Icons/>
              </div>
            <a href={cv} className="btn_shadow text-white text-center bg-bluecolor font-semibold py-4 px-2" download={true}>DOWNLOAD CV </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

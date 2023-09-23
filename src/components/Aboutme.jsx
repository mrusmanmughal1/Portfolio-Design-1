import Img from "../assets/aboutme.png"
import Icons from "./Icons";
const Aboutme = () => {
  return (
    <section id="about-me" className="py-16">
      <div>
        <div className="text-center text-6xl font-bold text-blue-950  pb-16 ">
           <h1 className="titles "> About Me </h1>  
        </div>
        <div className=" gap-10 sm:flex md:flex-row lg:flex-row  justify-center ">
          <div className="md:w-1/2 p-6">
            <img src={Img} alt="" />
          </div>
          <div className="md:w-1/2 flex flex-col gap-5 px-8"> 
            <div className="text-xl font-semibold text-bluecolor tracking-widest">MY INTRO</div>
            <div className="text-4xl text-blue-950">I am <span className="md:text-6xl text-4xl font-semibold"> M Usman, </span></div>
            <div className="md:text-2xl text-lg text-slate-600 ">A Front End Developer Based in Pakistan</div>
            <div className="leading-8 text-lg text-justify">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio.
            <br />
            <br />
          I like work with new people. New people new Experiences.
            </div>
            <div className="flex justify-between text-blue-950">
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
            <div className="font-semibold text-blue-950">
              <p>Social Media : </p>
                <Icons/>
              </div>
            <button className="btn_shadow text-white bg-bluecolor font-semibold py-4 px-2">DOWNLOAD CV </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

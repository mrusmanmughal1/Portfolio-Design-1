import Img from "../assets/aboutme.png"
const Aboutme = () => {
  return (
    <section id="about-me">
      <div>
        <div className="text-center text-6xl font-bold text-blue-950 py-14">
          About Me
        </div>
        <div className="flex gap-10">
          <div className="w-1/2">
            <img src={Img} alt="" />
          </div>
          <div className="w-1/2 flex flex-col gap-5"> 
            <div className="text-xl font-semibold text-bluecolor tracking-widest">MY INTRO</div>
            <div className="text-4xl text-blue-950">I am <span className="text-6xl font-semibold"> M Usman </span></div>
            <div className="text-2xl text-slate-700">A lead Full Stack Developer based in India</div>
            <div className="leading-8 text-lg">
            I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio.
            <br />
            I like work with new people. New people new Experiences.
            </div>
            <button className="btn_shadow text-white bg-bluecolor font-semibold ">DOWNLOAD CV </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

import FloatNotification from "../Ui/FloatNotification";
import hand from "../assets/hand.png";
import user from "../assets/user-image.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Main = ({ mode }) => {
  const [text] = useTypewriter({
    words: ["Website Developer", "React Developer", "Shopify Developer","Custom Website Developer"],
    loop: {},
  });
  
  const [handRef, handVisible] = useScrollAnimation({ threshold: 0.2 });
  const [nameRef, nameVisible] = useScrollAnimation({ threshold: 0.2 });
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [buttonsRef, buttonsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [imageRef, imageVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id={`${mode ? "darkmode" : "main"}`} className="relative min-h-screen">
      <div 
        ref={imageRef}
        className={`absolute bottom-0 md:bottom-20 left-1/2 -translate-x-1/2 -z-10 max-w-xs md:max-w-sm w-auto fade-in ${imageVisible ? 'visible' : ''}`}
      >
        <img src={user} alt="Muhammad Usman" loading="lazy" className="w-full hidden md:block h-auto object-contain" />
      </div>
      <div className="flex  md:flex-row flex-col overflow-hidden     px-5 md:px-0 ">
        <div className="md:w-[70%] flex flex-col gap-4 md:align-middle md:justify-center justify-center align-bottom md:py-28 md:h-screen pt-56 pb-20 md:pb-0">
          <div 
            ref={handRef}
            className={`flex items-center gap-2 fade-in-left ${handVisible ? 'visible' : ''}`}
          >
            <img src={hand} alt="hello hand" />
            <p
              className={`"${
                mode ? "text-white " : "text-gray-700"
              } font-semibold md:text-2xl text-lg  flex gap-4"`}
            >
              HELLO , I AM
            </p>
          </div>
          <p 
            ref={nameRef}
            className={`font-bold md:text-7xl text-4xl text-bluecolor fade-in-up ${nameVisible ? 'visible' : ''} animate-delay-200`}
          >
            MUHAMAMD <br /> USMAN
          </p>
          <div className="min-h-3">
            <p
              ref={titleRef}
              className={`"text-2xl  md:text-4xl font-semibold uppercase fade-in-up ${titleVisible ? 'visible' : ''} animate-delay-300  ${
                mode ? "text-white" : "text-black"
              }  "`}
            >
              Freelance
              <i id="typewriter" className="text-bluecolor font-bold">
                "{text}
                <Cursor />"
              </i>
            </p>
          </div>
          <div 
            ref={buttonsRef}
            className={`flex  gap-4 items-center fade-in-up ${buttonsVisible ? 'visible' : ''} animate-delay-400`}
          >
            <a
              href="https://www.upwork.com/freelancers/~01860d35c85271198e"
              target="_blank"
              rel="noreferrer"
              className=" bg-bluecolor md:px-8 md:py-4 block  px-4 py-2 text-sm     btn_shadow md:font-semibold text-white cursor-pointer hover:bg-blue-600 "
            >
              HIRE ME
            </a>
            <a
              href="#Projects"
              className={`${
                mode ? " border-white" : "border-black"
              } md:px-8 md:py-4 px-4 py-2  block  text-sm btn_shadow border-2 md:font-semibold  "`}
            >
              SEE MY PROJECTS
            </a>
          </div>
        </div>

        <FloatNotification mode={mode} />
      </div>
    </section>
  );
};

export default Main;

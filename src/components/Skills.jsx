import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoBootstrap,
} from "react-icons/bi";
import {BiLogoTailwindCss,BiLogoNodejs} from "react-icons/bi"
import{FaShopify} from "react-icons/fa"
import {SiNextdotjs} from "react-icons/si"
import useScrollAnimation from "../hooks/useScrollAnimation";
const icons = [
  {
    icon: <AiFillHtml5 />,
    text: "80%",
    color: "text-html",
    bgcolor: "#FFE5DC",
    Text: "HTML",
  },
  {
    icon: <BiLogoCss3 />,
    text: "80%",
    color: "text-css",
    bgcolor: "#DEE4FF",
    Text: "CSS",
  },
  {
    icon: <BiLogoJavascript />,
    text: "70%",
    color: "text-js",
    bgcolor: "#F6FBFF",
    Text: "JAVASCRIPT",
  },
  {
    icon: <BiLogoReact />,
    text: "90%",
    color: "text-react",
    bgcolor: "#D1F8FF",
    Text: "REACT JS ",
  },
  {
    icon: <SiNextdotjs />,
    text: "85%",
    color: "text-black",
    bgcolor: "#000000",
    Text: "NEXT JS ",
  },
  {
    icon: <BiLogoNodejs />,
    text: "60%",
    color: "text-node",
    bgcolor: "#D1F8FF",
    Text: "Node  JS ",
  },
  {
    icon: <BiLogoTailwindCss />,
    text: "90%",
    color: "text-react",
    bgcolor: "#D1F8FF",
    Text: "Tailwind Css ",
  },

  {
    icon: <BiLogoBootstrap />,
    text: "90%",
    color: "text-bootstrap",
    Text: "BOOTSTRAP",
  },
  {
    icon: <FaShopify />,
    text: "70%",
    color: "text-node",
    bgcolor:"#687920",
    Text: "Shopify ",
  },
];

const Experience = [
  {
    year: 2025,
    designation: "Mern Stack Developer         ",
    Company: "Maham AI ",
  },
  {
    year: 2024,
    designation: "Senior Front End Developer",
    Company: "7 Kings Code",
  },
 
  {
    year: 2021,
    designation: "Associate Software Engineer  ",
    Company: "Netsol Technologies Ltd",
  },
 
  {
    year: 2020,
    designation: "Front End Developer",
    Company: "Pakistan IT Solutions",
  },
];

const Skills = ({mode}) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [skillsRef, skillsVisible] = useScrollAnimation({ threshold: 0.1 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="skills" className="md:pb-16 pb-8">
      <div className="pt-16">
        <div 
          ref={titleRef}
          className={`${mode && "text-bluecolor"} text-center md:pb-16 pb-8 md:text-6xl text-3xl font-bold text-blue-950 fade-in-up ${titleVisible ? 'visible' : ''} `}
        >
          <h1 className="titles pb-2">Skills & Experience</h1>
        </div>
        <div className="flex md:flex-row flex-col">
          <div 
            ref={skillsRef}
            className={`md:w-1/2 flex flex-wrap md:gap-8 gap-8 justify-center md:mb-0 mb-16 text-center items-center fade-in-left ${skillsVisible ? 'visible' : ''}`}
          >
            {icons.map((val, i) => {
              const { icon, color, text, bgcolor, Text } = val;
              return (
                <div
                  key={i}
                  className={`hover:-translate-y-2 transition-all  duration-700 scale-in ${skillsVisible ? 'visible' : ''}`}
                  style={{ transitionDelay: `${i * 0.1}s` }}
                >
                  {" "}
                  <div
                    className={` shadow-md rounded-full px-8 py-4 flex flex-col hover:scale-105 transition-all duration-700 border-2 items-center bg-[${bgcolor}]`}
                  >
                    <i className={`text-6xl ${color}`}>{icon}</i>
                    <p className="font-semibold text-lg">{text}</p>
                  </div>
                  <p className="p-2 font-semibold">{Text}</p>
                </div>
              );
            })}
          </div>
          <div 
            ref={experienceRef}
            className={`md:w-1/2 fade-in-right ${experienceVisible ? 'visible' : ''}`}
          >
            <div className="flex flex-col px-8 gap-10 ">
              {Experience.map((val, i) => {
                const { Company, designation, year } = val;
                return (
                  <div 
                    key={i} 
                    className={`grid grid-cols-2 text-sm md:text-2xl fade-in-up ${experienceVisible ? 'visible' : ''}`}
                    style={{ transitionDelay: `${i * 0.15}s` }}
                  >
                   
                    <div>
                      <h1 className={`${mode ? 'text-white':"text-slate-900"} font-bold   pt-4 md:pt-0 `}>
                        {designation}
                      </h1>
                      <p className="text-slate-500">{Company}</p>
                    </div>
                    <div className="text-bluecolor text-end font-semibold ">
                      {year}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

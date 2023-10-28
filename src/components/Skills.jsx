import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoBootstrap,
} from "react-icons/bi";
import {BiLogoTailwindCss,BiLogoNodejs} from "react-icons/bi"
import{FaShopify} from "react-icons/fa"
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
    year: 2023,
    designation: "React js / Shopify Developer         ",
    Company: "Ormox ",
    duration: "1year",
  },
  {
    year: 2022,
    designation: "Associate Software Engineer",
    Company: "Smart Moves Lab ",
    duration: "1year",
  },
 
  {
    year: 2021,
    designation: "Software Engineer ( Reactjs )",
    Company: "Netsol Technologies Ltd",
    duration: "1year",
  },
 
  {
    year: 2020,
    designation: "Front End Developer (internee)",
    Company: "Pakistan IT Solutions",
    duration: "1year",
  },
];
const Skills = ({mode}) => {
  return (
    <section id="skills" className="md:pb-16 pb-8">
      <div className="pt-16">
        <div className="text-center md:pb-16 pb-8 md:text-6xl text-3xl  font-bold text-blue-950  ">
          <h1 className="titles pb-2">Skills & Experience</h1>
        </div>
        <div className="flex md:flex-row flex-col">
          <div className="md:w-1/2 flex flex-wrap md:gap-8  gap-8 justify-center md:mb-0 mb-16 text-center items-center ">
            {icons.map((val, i) => {
              const { icon, color, text, bgcolor, Text } = val;
              return (
                <div
                  key={i}
                  className=" hover:-translate-y-2 transition-all duration-700 "
                >
                  {" "}
                  <div
                    className={` shadow-md rounded-full px-8 py-4 flex flex-col border-2 items-center bg-[${bgcolor}]`}
                  >
                    <i className={`text-6xl ${color}`}>{icon}</i>
                    <p className="font-semibold text-lg">{text}</p>
                  </div>
                  <p className="p-2 font-semibold">{Text}</p>
                </div>
              );
            })}
          </div>
          <div className="md:w-1/2 " >
            <div className="flex flex-col px-8 gap-10 ">
              {Experience.map((val, i) => {
                const { duration, Company, designation, year } = val;
                return (
                  <div key={i} className="flex justify-between md:items-start items-center text-sm md:text-2xl ">
                    <div className="text-bluecolor font-semibold ">
                      {year}
                    </div>
                    <div>
                      <h1 className={`${mode ? 'text-white':"text-slate-900"} font-bold   pt-4 md:pt-0 `}>
                        {designation}
                      </h1>
                      <p className="text-slate-500">{Company}</p>
                    </div>

                    <div>{duration}</div>
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

import { AiFillHtml5 } from "react-icons/ai";
import {
  BiLogoCss3,
  BiLogoReact,
  BiLogoJavascript,
  BiLogoBootstrap,
} from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";

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
    icon: <BiLogoBootstrap />,
    text: "90%",
    color: "text-black",
    Text: "BOOTSTRAP",
  },
  {
    icon: <AiFillGithub />,
    text: "70%",
    color: "bg-gray-100",
    bgcolor:"#687920",
    Text: "GITHUB",
  },
];

const Experience = [
  {
    year: 2023,
    designation: "React js/Shopify Developer",
    Company: "Ormox ",
    duration: "1years",
  },
 
  {
    year: 2021,
    designation: "Software Engineer (Reactjs)",
    Company: "Netsol Technologies Ltd",
    duration: "1years",
  },
  {
    year: 2022,
    designation: "Associate Software Engineer",
    Company: "Smart Moves Lab ",
    duration: "1years",
  },
  {
    year: 2020,
    designation: "Front End Developer (internee)",
    Company: "Pakistan IT Solutions",
    duration: "1years",
  },
];
const Skills = () => {
  return (
    <section id="skills" className="pb-16">
      <div className="pt-16">
        <div className="text-center pb-16 text-6xl font-bold text-blue-950  ">
          <h1 className="titles pb-2">Skills & Experience</h1>
        </div>
        <div className="flex ">
          <div className="w-1/2 flex flex-wrap gap-10 text-center items-center ">
            {icons.map((val, i) => {
              const { icon, color, text, bgcolor, Text } = val;
              return (
                <div
                  key={i}
                  className=" hover:-translate-y-2 transition-all duration-700 "
                >
                  {" "}
                  <div
                    className={` shadow-md rounded-full px-8 py-4 flex flex-col  items-center bg-[${bgcolor}]`}
                  >
                    <i className={`text-6xl ${color}`}>{icon}</i>
                    <p className="font-semibold text-lg">{text}</p>
                  </div>
                  <p className="p-2 font-semibold">{Text}</p>
                </div>
              );
            })}
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-10">
              {Experience.map((val, i) => {
                const { duration, Company, designation, year } = val;
                return (
                  <div key={i} className="flex justify-between items-center">
                    <div className="text-bluecolor font-semibold text-2xl">
                      {year}
                    </div>
                    <div>
                      <h1 className="font-bold text-slate-900 text-2xl">
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

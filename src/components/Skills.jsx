import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoReact, BiLogoJavascript } from "react-icons/bi";

const icons = [
  {
    icon: <AiFillHtml5 />,
    text: "80%",
    color: "text-html",
    bgcolor: "#FFE5DC",
  },
  {
    icon: <BiLogoCss3 />,
    text: "80%",
    color: "text-css",
    bgcolor: "#DEE4FF",
  },
  {
    icon: <BiLogoJavascript />,
    text: "70%",
    color: "text-js",
    bgcolor: "#F6FBFF",
  },
  {
    icon: <BiLogoReact />,
    text: "90%",
    color: "text-react",
    bgcolor: "#D1F8FF",
  },
];

const Experience = [
  {
    year: 2019,
    designation: "Software Engineer",
    Company: "Netsol",
    duration: "1years",
  },
  {
    year: 2019,
    designation: "Software Engineer",
    Company: "Netsol",
    duration: "1years",
  },
  {
    year: 2019,
    designation: "Software Engineer",
    Company: "Netsol",
    duration: "1years",
  },
  {
    year: 2019,
    designation: "Software Engineer",
    Company: "Netsol",
    duration: "1years",
  },
];
const Skills = () => {
  return (
    <section id="skills" className="bg-gray-100">
      <div className="text-center py-16 text-6xl font-bold ">
        Skills & Experience
      </div>
      <div className="flex py-14">
        <div className="w-1/2 flex flex-wrap gap-10 text-center items-center ">
          {icons.map((val, i) => {
            const { icon, color, text, bgcolor } = val;
            return (
              <div
                key={i}
                className={`border rounded-full px-8 py-4 flex flex-col items-center bg-${bgcolor}`}
              >
                <i className={`text-6xl ${color}`}>{icon}</i>
                <p className="font-semibold text-lg">{text}</p>
              </div>
            );
          })}
        </div>
        <div className="w-1/2">
        <div className="flex flex-col gap-10">
          {Experience.map((val, i) => {
            const { duration, Company, designation, year } = val;
            return (
                
              <div  key={i}  className="flex gap-20 items-center">
                <div className="text-bluecolor font-semibold text-2xl">{year}</div>
                <div>
                  <h1 className="font-bold text-slate-900 text-2xl">{designation}</h1>
                  <p className="text-slate-500">{Company}</p>
                </div>

                <div>{duration}</div>
             
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

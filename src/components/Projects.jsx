import Slider from "react-slick";
import project2 from "../assets/project2.png";
import project11 from "../assets/projects/p1.png";
import project212 from "../assets/projects/p2.png";

import project1 from "../assets/project1.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";
import singlepro2 from "../assets/projects/p5.png";
import project6 from "../assets/projects/p6.png";
import project7 from "../assets/projects/p7.png";
import project8 from "../assets/projects/wholsesales.png";
import project10 from "../assets/projects/jobsshopper.png";

const Projects = ({ mode }) => {
  return (
    <section className="py-16 " id="Projects">
      <div
        className={`${
          mode && "text-bluecolor"
        } text-center pb-16 md:text-6xl text-3xl font-bold text-blue-950 `}
      >
        <p className="titles pb-2"> Latest Projects</p>
      </div>
      <div className="mx-auto">
        <AllProjects />
      </div>
    </section>
  );
};

export default Projects;

export const AllProjects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const projectData = [
    {
      img: project11,
      github: "",

      liveUrl: "https://ecomenable.com/",
    },
    {
      img: project7,
      github: "",
      liveUrl: "https://7kctech.com/",
    },
    {
      img: project8,
      github: "",
      liveUrl: "https://www.wholesaleez.com/",
    },
    {
      img: project10,
      github: "",
      liveUrl: "http://dev.jobsshopper.com/",
    },
    {
      img: project212,
      github: "",

      liveUrl: "https://7kcmarketings.vercel.app/",
    },
    {
      img: project1,
      github: "https://github.com/mrusmanmughal1/HMS-Landing-page",

      liveUrl: "",
    },
    {
      img: project3,
      github: "https://github.com/mrusmanmughal1/Eato-Food",
      liveUrl: "",
    },

    {
      img: project4,
      github: "",
      liveUrl:
        "https://www.noriskin.eu/products/noriskinofficial?view=singleprooo",
    },
    {
      img: singlepro2,
      github: "",
      liveUrl:
        "https://www.noriskin.eu/products/noriskinofficial?view=singlepro-2",
    },
    {
      img: project2,
      github: "https://github.com/mrusmanmughal1/HMS-Dashboard",

      liveUrl: "",
    },
    {
      img: project6,
      github: "",
      liveUrl: "https://meandmirai.de/",
    },
  ];

  return (
    <Slider {...settings}>
      {projectData.map((val, i) => {
        const { img, github, liveUrl } = val;

        return (
          <div key={i} className="rounded-full  relative  ">
            <div className="absolute bottom-0 border-slate-600 bg-slate-50  w-full  transition-opacity duration-1000 ease-out opacity-0 hover:opacity-75">
              <div className="flex gap-4 justify-center items-center py-16">
                {github && (
                  <a href={github} target="_blank" rel="noreferrer">
                    <button className="bg-blue-950 hover:opacity-100 text-white px-4 py-2 rounded-md">
                      Git Hub
                    </button>
                  </a>
                )}
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noreferrer">
                    <button className="bg-blue-950 text-white px-4 py-2 rounded-md">
                      Live Link
                    </button>
                  </a>
                )}
              </div>
            </div>
            <a href={liveUrl} target="_blank" rel="noreferrer">
              <img
                src={img}
                className="   w-96 h-96 object-contain"
                alt=""
                border="0"
              />
            </a>
          </div>
        );
      })}
    </Slider>
  );
};

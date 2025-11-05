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
import project14 from "../assets/projects/p8.png";
import project15 from "../assets/projects/p9.png";
import project16 from "../assets/projects/mahamai.png"; 
import project17 from "../assets/projects/legato.png"; 



import project8 from "../assets/projects/wholsesales.png";
import project10 from "../assets/projects/jobsshopper.png";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Projects = ({ mode }) => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
  const [sliderRef, sliderVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section className="py-16 " id="Projects">
      <div
        ref={titleRef}
        className={`${
          mode && "text-bluecolor"
        } text-center pb-16 md:text-6xl text-3xl font-bold text-blue-950 fade-in-up ${titleVisible ? 'visible' : ''}`}
      >
        <p className="titles pb-2"> Latest Projects</p>
      </div>
      <div 
        ref={sliderRef}
        className={`mx-auto fade-in ${sliderVisible ? 'visible' : ''}`}
      >
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
    { img: project17,

      liveUrl: "https://legatoo.fastestfranchise.net/",},
    { img: project16,

      liveUrl: "https://maham-ai.sa/login",},
    {
      img: project14,
      github: "",

      liveUrl: "https://victorhub.io/",
    },
    {
      img: project15,
      github: "",

      liveUrl: "https://lashpals.ca/",
    },
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
    <div className="px-4 md:px-8">
      <Slider {...settings}>
        {projectData.map((val, i) => {
          const { img, github, liveUrl } = val;

          return (
            <div key={i} className="px-2 md:px-4">
              <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Image Container */}
                <div className="relative h-80 md:h-96 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100">
                  <img
                    src={img}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    alt={`Project ${i + 1}`}
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Action Buttons Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    {github && (
                      <a 
                        href={github} 
                        target="_blank" 
                        rel="noreferrer"
                        className="transform hover:scale-110 transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          GitHub
                        </button>
                      </a>
                    )}
                    {liveUrl && (
                      <a 
                        href={liveUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="transform hover:scale-110 transition-transform duration-300"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="bg-gradient-to-r from-bluecolor to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </button>
                      </a>
                    )}
                    {!github && !liveUrl && (
                      <div className="text-white text-center px-4">
                        <p className="text-sm opacity-75">No links available</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer - Optional if you want to add project titles */}
                {liveUrl && (
                  <a href={liveUrl} target="_blank" rel="noreferrer" className="block">
                    <div className="p-4 bg-gradient-to-r from-gray-50 to-white border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-600 text-sm font-medium">View Project</span>
                        <svg className="w-4 h-4 text-bluecolor group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

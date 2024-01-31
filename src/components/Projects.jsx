import Slider from "react-slick";
import project2 from "../assets/project2.png";
import project1 from "../assets/project1.png";
import project3 from "../assets/projects/p3.png";
import project4 from "../assets/projects/p4.png";




const Projects = ({ mode }) => {
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
        <Slider {...settings}>
          <div className="rounded-full mx-4   ">
            <a
              href="https://github.com/mrusmanmughal1/HMS-Landing-page"
              target="_blank"
              rel="noreferrer"
            >
              <img src={project1} className="shadow-lg " alt="" border="0" />
            </a>
          </div>
          <div className="rounded-full  ">
            <a
              href="https://github.com/mrusmanmughal1/HMS-Dashboard"
              rel="noreferrer"
              target="_blank"
            >
              <img
                src={project2}
                alt="opt-aboutcom-coeus-re "
                className="h-auto max-w-full shadow-lg"
                border="0"
                loading="lazy"
              />
            </a>
          </div>
          <div className="rounded-full ">
            <a href="https://ibb.co/P5h4wJF">
              <img
                src={project3}
                alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2"
                border="0"
                loading="lazy" 
                className="shadow-lg "
              />
            </a>
          </div>
          <div className="rounded-full project-img">
            <a href="https://ibb.co/P5h4wJF">
              <img
                src={project4}
                alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2"
                border="0"
                loading="lazy"
                className="shadow-lg "
              />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Projects;

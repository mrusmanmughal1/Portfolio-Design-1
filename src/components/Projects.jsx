import Slider from "react-slick";
import logo from '../assets/d.png'

const Projects = ({mode}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <section className="py-16 " id="Projects">
      <div className={`${mode && "text-bluecolor"} text-center pb-16 md:text-6xl text-3xl font-bold text-blue-950 `}>
        <p className="titles pb-2"> Latest Projects</p>
      </div>
        <div className="mx-auto"> 
          <Slider {...settings}>
           
            <div className="rounded-full ">
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div className="rounded-full  ">
               <a href="https://github.com/mrusmanmughal1/HMS-Dashboard" rel="noreferrer"  target="_blank" ><img src={logo} alt="opt-aboutcom-coeus-re "  className="h-80" border="0"/></a>  
            </div>
            <div className="rounded-full ">
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div className="rounded-full">
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
             
          </Slider>
        </div>
    </section>
  );
};

export default Projects;

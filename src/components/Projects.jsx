import Slider from "react-slick";
const Projects = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <section className="py-16 " id="Projects">
      <div className="text-center pb-16 md:text-6xl text-3xl font-bold text-blue-950 ">
        <p className="titles pb-2"> Latest Projects</p>
      </div>
      <div className=" ">
        <div> 
          <Slider {...settings}>
            <div >
               <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>  
            </div>
            <div>
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div>
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div>
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div>
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
            <div>
             <a href="https://ibb.co/P5h4wJF"><img src="https://i.ibb.co/vJPmZfV/opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2.jpg" alt="opt-aboutcom-coeus-resources-content-migration-serious-eats-seriouseats-com-recipes-images-2014-09-2" border="0"/></a>
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Projects;

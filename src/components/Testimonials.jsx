import Slider from "react-slick";
import pic1 from "../assets/testimonials/1.png"
import pic2 from "../assets/testimonials/2.png"

import { BiSolidStar } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const Testimonials = ({mode}) => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials =[
    {
      pic : pic1,
      Name : "Aliya Aris ",
      Message : "I have had the pleasure of working with M Usman over the past few months, and I must say they are an exceptional professional. M Usman brings a wealth of expertise and a positive attitude to every project."
    },
    {
      pic : pic2,
      Name : "Monic Agee",
      Message : "Working with M Usman has been an absolute pleasure, and I am thrilled to share my positive experiences with their outstanding contributions, they are a game-changer in every aspect."
    }
  ]
  return (
    <section className="py-20  sm:pb-40 sm:pt-32  overflow-hidden " id="testimonials">
      <div className={` ${mode && "text-bluecolor"} text-center pb-16 md:text-5xl text-3xl font-bold text-blue-950`}>
        <p className="titles pb-2 text-center sm:p-0 px-8">What people say about us?</p>
      </div>
      <div className="mx-auto testimonials md:w-1/2  w-9/12 max-h-min">
        <Slider {...settings}>
          

            {
              testimonials.map(( val ,i)=>{
                return <div key={i} >
                  <div className="">
            <div className="flex justify-center ">
              <div className="bg-slate-100  rounded-2xl ">
              <img src={val.pic} alt="" className="w-52 p " />
              </div>
            </div>
            <p className="font-bold text-center  text-bluecolor text-3xl font-serif  font-thin pt-2">{val.Name}</p>

            <div className="">
            <FaQuoteLeft className="block me-2 " />
            <p  className="ps-6"  >
                  {val.Message}
            </p>
            <div className="flex justify-end pe-10">
            <FaQuoteRight  /> 
            </div>
            </div>
          </div>

                </div>
              })
            }
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;

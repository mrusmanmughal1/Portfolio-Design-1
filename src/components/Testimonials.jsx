import Slider from "react-slick";
import pic from "../assets/user-image.png";
import { BiSolidStar } from "react-icons/bi";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import bg from "../assets/bg-1.png";
const Testimonials = ({mode}) => {
  const settings = {
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const testimonials =[
    {
      pic : pic,
      Name : "MUHAMMAD USMAN",
      Message : " Lorem ipsum, dolor sit amet conslitia totam ipsa!Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa!"
    },
    {
      pic : pic,
      Name : "MUHAMMAD USMAN",
      Message : " Lorem ipsum, dolor sit amet conslitia totam ipsa!Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa! Lorem ipsum, dolor sit amet conslitia totam ipsa!"
    }
  ]
  return (
    <section className="py-16 h-screen overflow-hidden" id="testimonials">
      <div className={` ${mode && "text-bluecolor"} text-center pb-16 md:text-5xl text-3xl font-bold text-blue-950`}>
        <p className="titles pb-2">What people say about us?</p>
      </div>
      <div className="mx-auto testimonials w-1/2">
        <Slider {...settings}>
          

            {
              testimonials.map(( val ,i)=>{
                return <div key={i} >
                  <div className="">
            <div className="flex justify-center">
              <img src={val.pic} alt="" className="w-44  " />
            </div>
            <p className="font-bold text-center  text-bluecolor text-3xl font-serif ">{val.Name}</p>

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

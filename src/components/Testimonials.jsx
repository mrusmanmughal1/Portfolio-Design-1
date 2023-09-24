import Slider from "react-slick";
import pic from "../assets/user-image.png";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="py-16 " id="Projects">
      <div className="text-center pb-16 md:text-5xl text-3xl font-bold text-blue-950 ">
        <p className="titles pb-2"> What people say about us?</p>
      </div>
      <div className=" ">
        <div>
          <Slider {...settings}  >
            <div className="rounded-3xl p-5  bg-slate-100 text-center">
              <div className=" text-center">
                <div className="bg-slate-200 rounded-full h-full ">
                  <img src={pic} alt="" className="h-2" />
                </div>
                <p className="text-bluecolor font-semibold text-4xl">
                  MUHAMMAD USMAN
                </p>
                <p className="text-slate-800">
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae totam debitis rem doloremque qui error quia rerum
                  officia, iure laborum? "
                </p>
                <p className="text-2xl">⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="rounded-3xl p-5  bg-slate-100 text-center">
              <div className=" text-center">
                <div className="bg-slate-200 rounded-full">
                  <img src={pic} alt="" className="p-10" />
                </div>
                <p className="text-bluecolor font-semibold text-4xl">
                  MUHAMMAD USMAN
                </p>
                <p className="text-slate-800">
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae totam debitis rem doloremque qui error quia rerum
                  officia, iure laborum?"
                </p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="rounded-3xl p-5  bg-slate-100 text-center">
              <div className=" text-center">
                <div className="bg-slate-200 rounded-full">
                  <img src={pic} alt="" className="p-10" />
                </div>
                <p className="text-bluecolor font-semibold text-4xl">
                  MUHAMMAD USMAN
                </p>
                <p className="text-slate-800">
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae totam debitis rem doloremque qui error quia rerum
                  officia, iure laborum?"
                </p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
            <div className="rounded-3xl p-5  bg-slate-100 text-center">
              <div className=" text-center">
                <div className="bg-slate-200 rounded-full">
                  <img src={pic} alt="" className="p-10" />
                </div>
                <p className="text-bluecolor font-semibold text-4xl">
                  MUHAMMAD USMAN
                </p>
                <p className="text-slate-800">
                  " Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Vitae totam debitis rem doloremque qui error quia rerum
                  officia, iure laborum?"
                </p>
                <p>⭐⭐⭐⭐⭐</p>
              </div>
            </div>
          
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

import { 
  MdOutlineWeb
} from "react-icons/md";
import { 
  FaLaptopCode,
  FaShopify,
  FaMobileAlt
} from "react-icons/fa";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Services = ({mode}) => {
    const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.2 });
    const [servicesRef, servicesVisible] = useScrollAnimation({ threshold: 0.1 });

    const Services = [
        {
            icon: <MdOutlineWeb className="w-full h-full" />,
            iconBg: "from-blue-500 to-blue-600",
            title:'Web Development',
            description :"We craft user-friendly websites. Our team ensures cutting-edge technology for secure and scalable solutions. Elevate your digital presence with our tailored expertise."
        },
        {
            icon: <FaLaptopCode className="w-full h-full" />,
            iconBg: "from-purple-500 to-purple-600",
            title:'Front End Development',
            description :"Transform visions into captivating digital interfaces through our Front End Development expertise, ensuring optimal performance across devices and browsers."
        },
        {
            icon: <FaShopify className="w-full h-full" />,
            iconBg: "from-green-500 to-green-600",
            title:'Shopify Store Development',
            description :"Unlock the full potential of e-commerce with our Shopify Development services, tailoring scalable and feature-rich online stores that captivate your audience."
        },
        {
            icon: <FaMobileAlt className="w-full h-full" />,
            iconBg: "from-orange-500 to-orange-600",
            title:'Mobile App Development',
            description :"Revolutionize your business with our custom iOS and Android app development services, enhancing functionality and addressing unique business needs."
        }
    ];

  return (
    <section className="md:py-20 py-16 px-4 md:px-8" id="Services">
        <div 
          ref={titleRef}
          className={`${mode && "text-bluecolor"} text-center md:pb-20 pb-12 md:text-6xl text-4xl font-bold text-blue-950 fade-in-up ${titleVisible ? 'visible' : ''}`}
        >
          <h1 className="titles pb-2">Services</h1>
          <p className={`text-base md:text-lg mt-4 ${mode ? "text-gray-300" : "text-gray-600"}`}>
            Professional solutions tailored to your needs
          </p>
        </div>
        
        <div 
          ref={servicesRef}
          className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {Services.map((val, i) => {
            const { icon, iconBg, title, description } = val;
            return (
              <div 
                key={i} 
                className={`group relative overflow-hidden rounded-2xl ${mode ? "bg-gray-800 border border-gray-700" : "bg-white border border-gray-200"} shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 scale-in ${servicesVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Gradient Background on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(0deg, rgba(245, 204, 230, 0.3169642857142857) 41%, rgba(140, 234, 255, 0.3841911764705882) 100%)'
                  }}
                ></div>
                
                {/* Card Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon Container */}
                  <div className="mb-6 relative">
                    <div className={`w-20 h-20 md:w-24 md:h-24 mx-auto rounded-2xl bg-gradient-to-br ${iconBg} p-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 flex items-center justify-center`}>
                      <div className="text-white text-4xl md:text-5xl">
                        {icon}
                      </div>
                    </div>
                    {/* Decorative Circle */}
                    <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${iconBg} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}></div>
                  </div>

                  {/* Title */}
                  <h2 className={`text-xl md:text-2xl font-bold mb-4 text-center ${mode ? "text-white" : "text-gray-800"} group-hover:text-bluecolor transition-colors duration-300`}>
                    {title}
                  </h2>

                  {/* Description */}
                  <p className={`text-sm md:text-base leading-relaxed text-center ${mode ? "text-gray-300" : "text-gray-600"} line-clamp-4`}>
                    {description}
                  </p>

                  {/* Bottom Accent Line */}
                  <div className={`mt-6 h-1 w-0 mx-auto bg-gradient-to-r ${iconBg} group-hover:w-full transition-all duration-500 rounded-full`}></div>
                </div>

                {/* Shine Effect */}
                {/* <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div> */}
              </div>
            );
          })}
        </div>
    </section>
  );
};

export default Services
import { IoMdAppstore } from "react-icons/io";
import { MdOutlineWeb } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";
const Services = () => {
    const Services= [{
        icon:<MdOutlineWeb/>,
        title:'Web Developemt',
        Descrption :"we craft user-friendly websites. Our team ensures cutting-edge technology for secure and scalable solutions. Elevate your digital presence with our tailored expertise."

    },
    {
        icon:<FaLaptopCode/>,
        title:'Front End Development',
        Descrption :"Transform visions into captivating digital interfaces through our Front End Development expertise, ensuring optimal performance across devices and browsers."

    },
    {
        icon:<MdLocalGroceryStore />,
        title:'Shopify Store Development',
        Descrption :"Unlock the full potential of e-commerce with our Shopify Development services, tailoring scalable and feature-rich online stores that captivate your audience."

    },
    {
        icon:<IoMdAppstore />,
        title:'Shopify App Development',
        Descrption :"Revolutionize your Shopify store with our custom Shopify App Development services, enhancing functionality and addressing unique business needs."

    }
]
  return (
    <section className="md:py-16 py-10 " id="Services">
        <div className="text-center md:pb-16  pb-8 md:text-6xl text-3xl font-bold text-blue-950">
        <h1 className="titles pb-2"> Services </h1>
        </div>
        <div className="flex justify-center gap-8 md:gap-4 flex-wrap ">
                { Services.map((val,i)=>{
                    const {  title, Descrption , icon}=val;
                    return (
                    <div key={i} className="border-2 rounded-2xl  p-6 hover:shadow-xl   hover:translate-y-3 transition-all duration-700 ">
                      <div className="flex justify-center text-6xl text-bluecolor">
                        {icon}
                        </div>
                        <h1 className="py-6 text-gray-800 font-semibold text-center">{title}</h1>
                        <p className="w-64 text-center">{Descrption}</p>
                    </div>  
                     )                 
                })}
        </div>
    </section>
  )
}

export default Services
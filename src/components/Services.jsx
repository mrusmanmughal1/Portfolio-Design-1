import icon1 from "../assets/services/icon-1.png";
const Services = () => {
    const Services= [{
        icon:icon1,
        title:'Web Development',
        Descrption :" Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    },
    {
        icon:'logo ',
        title:' hello',
        Descrption :"  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    },
    {
        icon:'logo ',
        title:' hello',
        Descrption :"  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    },
    {
        icon:'logo ',
        title:' hello',
        Descrption :"  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "

    }
]
  return (
    <section className="py-16" id="Services">
        <div className="text-center pb-16 text-6xl font-bold text-blue-950">
        <h1 className="titles pb-2"> Services </h1>
        </div>
        <div className="flex justify-center gap-4 flex-wrap ">
                { Services.map((val,i)=>{
                    const {  title, Descrption}=val;
                    return (
                    <div key={i} className="  border-2 rounded-2xl  p-6 hover:shadow-xl text-center hover:translate-y-3 transition-all duration-700 ">
                      <div className="flex justify-center">
                        <img src={icon1}/>
                        </div>
                        <h1 className="py-8 text-gray-800 font-semibold">{title}</h1>
                        <p className="w-64">{Descrption}</p>
                    </div>  
                     )                 
                })}
        </div>
    </section>
  )
}

export default Services
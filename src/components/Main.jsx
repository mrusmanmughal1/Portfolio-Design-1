import hand from "../assets/hand.png";
import user from '../assets/user-image.png'
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Main = () => {
  const [text] = useTypewriter({
    words: ["WEb Develoepr", "React Js Developer", "Shopify Developer"],
    loop: {},
  });
  return (
    <section id="main">
      <div className="flex relative sm:flex-wrap overflow-hidden ">
        <div className="w-[70%] flex flex-col gap-4 align-middle justify-center py-28">
        <div className=" absolute -z-10 max-w-sm  bottom-0  left-1/3">
          <img src={user} alt="" />
        </div>
          <div className="flex items-center gap-2">
        <img src={hand} alt="hello hand" /> 
          <p className="text-gray-700 font-semibold flex gap-4">
          HELLO , I AM
          </p>
          </div>
          <p className="font-bold text-7xl text-bluecolor">
            MUHAMAMD <br/> USMAN
          </p>
          <p className="text-4xl font-semibold uppercase text-black ">
            Freelance 
            <i id="typewriter" className="text-bluecolor font-bold">
              "{text}
              <Cursor />"
            </i>
            
          </p>
          <div className="flex  gap-4 items-center">
            <a className=" bg-bluecolor px-8 py-4  btn_shadow font-semibold text-white cursor-pointer hover:bg-blue-600 ">
              HIRE ME
            </a>
            <button className="px-8 py-4  btn_shadow border-2 font-semibold  border-black   ">
              SEE MY PROJECTS
            </button>
          
          </div>
        </div>
        
        <div className=" w-[30%]  flex justify-end  ">
           
          <div className="rounded-3xl text-center px-10 py-4 w-80 h-40 bg-white shadow-lg absolute bottom-48  transition-all duration-700 main-notes ">
            <p className="font-semibold text-2xl text-bluecolor"> 🎁  50% Discount </p>
            <p className="my-2 font-semibold">For the first Customer </p>
            <p className="font-semibold">Placing Order</p>
            <p> happy Coding </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;

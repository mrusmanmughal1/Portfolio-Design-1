import hand from "../assets/hand.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Main = () => {
  const [text] = useTypewriter({
    words: ["WEb Develoepr", "React Js Developer", "Shopify Developer"],
    loop: {},
  });
  return (
    <section id="main">
    <div className="flex h-screen">
      <div className=" w-[70%] flex flex-col gap-4 align-middle justify-center">
        <p className="text-2xl font-semibold flex gap-4">
          {" "}
          <img src={hand} alt="hello hand" /> HELLO , I AM{" "}
        </p>
        <p className="font-bold text-8xl text-bluecolor">MUHAMAMD  USMAN</p>
        <p className="text-4xl font-semibold uppercase ">
          {" "}
          Freelance "
          <i id="typewriter" className="text-bluecolor font-bold">
            {text}
            <Cursor />
          </i>
          "
        </p>
        <div className="flex  gap-4">
          <a className=" bg-bluecolor  btn_shadow font-semibold text-white cursor-pointer hover:bg-blue-600 ">
            HIRE ME
          </a>
          <button className="px-8 py-4  btn_shadow border-2 font-semibold  border-black   ">
            SEE MY PROJECTS
          </button>
        </div>
      </div>
      <div className=" w-[30%] h-screen  flex justify-end relative">
        <img
          src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="h-3/4"
        />
        <div className="rounded-3xl px-10 py-4 w-80 h-40 bg-white shadow-lg absolute bottom-48  transition-all duration-700 main-notes ">
        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta mollitia, ipsum dignissimos ea accusamus earum? Magnam eum tenetur alias dolor.</p>

        </div>
      </div>
    </div>
    </section>
  );
};

export default Main;

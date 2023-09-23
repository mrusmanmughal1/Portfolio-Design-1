import hand from "../assets/hand.png";
import user from "../assets/user-image.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Main = () => {
  const [text] = useTypewriter({
    words: ["Website Develoepr", "React Developer", "Shopify Developer"],
    loop: {},
  });
  return (
    <section id="main">
      <div className="flex relative md:flex-row flex-col overflow-hidden  px-5 md:px-0">
        <div className="w-[70%] flex flex-col gap-4 align-middle justify-center md:py-28 py-10  ">
          <div className=" absolute -z-10 max-w-sm  bottom-0  left-1/3">
            <img src={user} alt="" />
          </div>
          <div className="flex items-center gap-2">
            <img src={hand} alt="hello hand" />
            <p className="text-gray-700 font-semibold flex gap-4">
              HELLO , I AM
            </p>
          </div>
          <p className="font-bold md:text-7xl text-4xl  text-bluecolor">
            MUHAMAMD <br /> USMAN
          </p>
          <div className="min-h-3">
          <p className="text-2xl  md:text-4xl font-semibold uppercase text-black  ">
            Freelance
            <i id="typewriter" className="text-bluecolor font-bold">
              "{text}
              <Cursor />"
            </i>
          </p>
          </div>
          <div className="flex  gap-4 items-center">
            <a className=" bg-bluecolor md:px-8 md:py-4 block  px-4 py-2 text-sm     btn_shadow md:font-semibold text-white cursor-pointer hover:bg-blue-600 ">
              HIRE ME
            </a>
            <a className="md:px-8 md:py-4 px-4 py-2  block  text-sm btn_shadow border-2 md:font-semibold  border-black   ">
              SEE MY PROJECTS
            </a>
          </div>
        </div>

        <div className=" w-[30%]  flex justify-end  ">
          <div className="rounded-3xl text-center px-10 py-4 w-80 h-40 bg-white shadow-lg absolute bottom-48  transition-all duration-700 main-notes ">
            <p className="font-semibold text-2xl text-bluecolor">
              {" "}
              🎁 50% Discount{" "}
            </p>
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

import FloatNotification from "../Ui/FloatNotification";
import hand from "../assets/hand.png";
import user from "../assets/user-image.png";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Main = ({ mode }) => {
  const [text] = useTypewriter({
    words: ["Website Developer", "React Developer", "Shopify Developer","Custom Website Developer"],
    loop: {},
  });
  return (
    <section id={`${mode ? "darkmode" : "main"}`}>
      <div className="flex  md:flex-row flex-col overflow-hidden    px-5 md:px-0 ">
        <div className="md:w-[70%] flex flex-col gap-4 md:align-middle     md:justify-center justify-center  align-bottom md:py-28 md:h-screen pt-20  ">
          <div className=" md:absolute order-2 md:order-1 -z-10 max-w-sm  bottom-0   left-1/3">
            <img src={user} alt="" loading="lazy" className="" />
          </div>
          <div className="flex items-center gap-2">
            <img src={hand} alt="hello hand" />
            <p
              className={`"${
                mode ? "text-white " : "text-gray-700"
              } font-semibold md:text-2xl text-lg  flex gap-4"`}
            >
              HELLO , I AM
            </p>
          </div>
          <p className="font-bold md:text-7xl text-4xl  text-bluecolor">
            MUHAMAMD <br /> USMAN
          </p>
          <div className="min-h-3">
            <p
              className={`"text-2xl  md:text-4xl font-semibold uppercase  ${
                mode ? "text-white" : "text-black"
              }  "`}
            >
              Freelance
              <i id="typewriter" className="text-bluecolor font-bold">
                "{text}
                <Cursor />"
              </i>
            </p>
          </div>
          <div className="flex  gap-4 items-center ">
            <a
              href="https://www.upwork.com/freelancers/~01860d35c85271198e"
              target="_blank"
              rel="noreferrer"
              className=" bg-bluecolor md:px-8 md:py-4 block  px-4 py-2 text-sm     btn_shadow md:font-semibold text-white cursor-pointer hover:bg-blue-600 "
            >
              HIRE ME
            </a>
            <a
              href="#Projects"
              className={`${
                mode ? " border-white" : "border-black"
              } md:px-8 md:py-4 px-4 py-2  block  text-sm btn_shadow border-2 md:font-semibold  "`}
            >
              SEE MY PROJECTS
            </a>
          </div>
        </div>

        <FloatNotification mode={mode} />
      </div>
    </section>
  );
};

export default Main;

import { useContext } from "react";
import mail from "../assets/email.png";
import phone from "../assets/phone.png";
import { ModeContext } from "../Context/ModeContext";
const ContactForm = () => {
const {mode} = useContext(ModeContext);
const black = mode ? "bg-black": 'bg-transparent text-black';

  return (
    <section  id="contact-form">
      <div className="text-center pb-16 md:text-5xl text-3xl py-16 font-bold text-blue-950 ">
        <h1 className="titles px-3">Take a Coffee & chat with me</h1>
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center gap-8 text-gray-700 font-semibold px-5 md:text-2xl text-sm">
        <div className="flex items-center gap-5  bg-[#F9D9FD] px-4 py-4 rounded-xl">
          <img src={mail} alt="" /> mrusmanmughal1 @gmail.com
        </div>
        <div className="flex items-center gap-5  bg-[#D1E4FC] px-14 py-4 rounded-xl">
          <img src={phone} alt="" /> +92 304 9513443
        </div>
      </div>
      <div className="flex justify-center   py-10 ">
        <form className="md:w-2/3 w-full px-4 ">
          <div className=" flex md:flex-row flex-col    justify-between w-full">
            <input
              type="text"
              placeholder="Your Name"
              className={`${black} rounded-2xl  border-b-2 pt-10 pb-5 w-full ps-2 outline-none`}            />
            <input
              type="text"
              placeholder="Email Address"
              className={`${black} rounded-2xl border-b-2 md:mx-10 w-full pt-10 pb-5 ps-2 outline-none`}
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className={`w-full border-b-2 outline-none  ps-2 pt-10 pb-5 ${black} rounded-2xl`}
          />
          <div>
            <textarea
              type="textarea"
              rows="4" cols="50"
              placeholder="Your Message here"
              className={`w-full border-b-2 outline-none  ps-2 pt-10 pb-5 ${black} rounded-2xl`}
            />
          </div>
          <div className="flex justify-center py-6 w-full">
            <button className="bg-bluecolor px-10 font-semibold py-4 text-white rounded-full"> SEND QUERY  </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

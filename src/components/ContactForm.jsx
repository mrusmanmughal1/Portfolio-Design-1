import mail from "../assets/email.png";
import phone from "../assets/phone.png";
const ContactForm = () => {
  return (
    <section className="py-16" id="contact-form">
      <div className="text-center pb-16 md:text-5xl text-2xl  font-bold text-blue-950 ">
        <h1 className="titles">Take a Coffee & chat with me</h1>
      </div>
      <div className="flex md:flex-row flex-wrap items-center justify-center gap-8 text-gray-700 font-semibold">
        <div className="flex items-center gap-5 md:text-2xl text-lg bg-[#F9D9FD] px-4 py-4 rounded-xl">
          <img src={mail} alt="" /> mrusmanmughal1@gmail.com
        </div>
        <div className="flex items-center gap-5 text-2xl bg-[#D1E4FC] px-14 py-4 rounded-xl">
          <img src={phone} alt="" /> +92 304 9513443
        </div>
      </div>
      <div className="flex justify-center   py-10 ">
        <form className="md:w-2/3 w-full px-4">
          <div className=" flex md:flex-row flex-col  border justify-between w-full">
            <input
              type="text"
              placeholder="Your Name"
              className=" border-b-2 pt-10 pb-5 w-full ps-5 outline-none"
            />
            <input
              type="text"
              placeholder="Email Address"
              className=" border-b-2 md:mx-10 w-full pt-10 pb-5 ps-5 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 outline-none  ps-5 pt-10 pb-5"
          />
          <div>
            <input
              type="textarea"
              placeholder="Your Message here"
              className="w-full border-b-2 outline-none  ps-5 pt-10 pb-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

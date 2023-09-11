import mail from "../assets/email.png";
import phone from "../assets/phone.png";
const ContactForm = () => {
  return (
    <section className="py-16" id="contact-form">
      <div className="text-center pb-16 text-5xl font-bold text-blue-950 ">
        <h1 className="titles">Take a Coffee & chat with me</h1>
      </div>
      <div className="flex items-center justify-center gap-8 text-gray-700 font-semibold">
        <div className="flex items-center gap-5 text-2xl bg-[#F9D9FD] px-4 py-4 rounded-xl">
          <img src={mail} alt="" /> mrusmanmughal1@gmail.com
        </div>
        <div className="flex items-center gap-5 text-2xl bg-[#D1E4FC] px-4 py-4 rounded-xl">
          <img src={phone} alt="" /> +92 304 9513443
        </div>
      </div>
      <div className="flex justify-center   py-10 ">
        <form className="w-2/3">
          <div className=" flex justify-between w-full">
            <input
              type="text"
              placeholder="Your Name"
              className=" border-b-2 pt-10 pb-5 outline-none"
            />
            <input
              type="text"
              placeholder="Email Address"
              className=" border-b-2 mx-10 pt-10 pb-5 outline-none"
            />
          </div>
          <input
            type="text"
            placeholder="Subject"
            className="w-full border-b-2 outline-none  pt-10 pb-5"
          />
          <div>
            <input
              type="textarea"
              placeholder="Your Message here"
              className="w-full border-b-2 outline-none  pt-10 pb-5"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

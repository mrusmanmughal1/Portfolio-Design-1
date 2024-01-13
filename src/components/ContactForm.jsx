import { useRef } from "react";
import mail from "../assets/email.png";
import phone from "../assets/phone.png";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";
const ContactForm = ({mode}) => {
  const form = useRef();

   
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_d7ypra9', 'template_dupsto8', form.current, 'jFK90bbdGOuZoMjXt')
      .then(() => {
       toast.success("Thank You For the Intentions ! i'll Contact you in 2hr");
       document.querySelector('[name="user_name"]').value = "";
       document.querySelector('[name="user_email"]').value = "";
       document.querySelector('[name="user_message"]').value='';
       document.querySelector('[name="subject"]').value='';
      }, (error) => {
          console.log(error.message);
      });
 



  };
 

  return (
    <section  id="contact-form">
      <div className={`${ mode && "text-bluecolor"} text-center pb-16 md:text-5xl text-3xl py-16 font-bold text-blue-950 `}>
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
        <form className="md:w-2/3 w-full px-4 " ref={form} onSubmit={(e)=>sendEmail(e)}>
          <div className=" flex md:flex-row flex-col    justify-between w-full">
            <input
              type="text"
              required
              placeholder="Your Name"
              name="user_name"
              className={`${ mode ? "bg-black rounded-none ": "bg-transparent text-black rounded-2xl" }    border-b-2 pt-10 pb-5 w-full ps-2 outline-none`}            />
            <input
              type="email"
              name="user_email"
              placeholder="Email Address"
              className={`${ mode ? "bg-black rounded-none": "bg-transparent text-black rounded-2xl" }   border-b-2 md:mx-10 w-full pt-10 pb-5 ps-2 outline-none`}
            />
          </div>
          <input
            type="text"
            name="subject"
            required
            placeholder="Subject"
            className={`w-full border-b-2 outline-none  ps-2 pt-10 pb-5 ${ mode ? "bg-black rounded-none": "bg-transparent text-black rounded-2xl" }  `}
          />
          <div>
            <textarea
              type="textarea"
              name="user_message"
              required
              rows="4" cols="50"
              placeholder="Your Message here"
              className={`w-full border-b-2 outline-none  ps-2 pt-10 pb-5 ${ mode ? "bg-black rounded-none": "bg-transparent text-black rounded-2xl" }  `}
            />
          </div>
          <div className="flex justify-center py-6 w-full">
            <button type="submit" className="bg-bluecolor px-10 font-semibold py-4 text-white rounded-full"> SEND QUERY  </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

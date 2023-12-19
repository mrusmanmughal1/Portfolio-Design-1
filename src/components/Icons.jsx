import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";
const Icons = () => {
  return (
    <div className="flex gap-4 text-4xl py-2 ">
      <a href="https://wa.me/+923049513443
      " 
      rel="noreferrer"
      target="_blank"
      >
      <BiLogoWhatsapp className="F-icons" />
      </a>
      <a
        href="
      https://web.facebook.com/mrusmanmughal1
      "
      target="_blank"
      >
      <BiLogoFacebook className="F-icons" />
      </a>
      <a href="https://www.instagram.com/mrusmanmughal/" 
         rel="noreferrer"
         target="_blank"
      >
        
      <BiLogoInstagram className="F-icons" />
      </a>
      
    </div>
  );
};

export default Icons;

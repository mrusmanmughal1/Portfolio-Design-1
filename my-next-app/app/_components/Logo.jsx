import Image from "next/image";
import logo from "../icon.png";
const Logo = () => {
  return <Image src={logo} alt="logo" className="w-10 h-auto" />;
};

export default Logo;

import { useState } from "react"
import Logo from "./Logo"
import {GiHamburgerMenu} from "react-icons/gi"
import {RxCross1} from "react-icons/rx"
import Modes from "./Modes"
const Header = ({mode}) => {
  const [toggle , settoggle]=useState(false);
  return (
    <header className={`md:w-[92%]  mx-auto px-5  md:bg-transparent  ${mode ? "bg-black":'bg-white'}`} >
      <div className="flex  md:flex-row justify-between   md:items-center py-5   md:bg-transparent ">
        <Logo/>
        <nav className={`absolute z-50 md:static md:min-h-fit  ${mode ?'bg-black text-white':'bg-white text-black '}   min-h-[100vh] md:block ${toggle ? "block" : "hidden"} left-0  px-5  top-[80px] w-full md:w-auto flex items-start   md:bg-transparent`}>
          <ul onClick={()=>settoggle(!toggle)} className={`flex md:flex-row flex-col   w-full text-center md:max-h-fit  gap-12 md:gap-10 cursor-pointer uppercase  ${mode ? "text-white":'text-black'}`}>
            <li className="header-li"><a href="#main">Home</a></li>
            <li className="header-li"><a href="#about-me">About</a></li>
            <li className="header-li"><a href="#skills">Resume </a></li>
            <li className="header-li"><a href="#Services">Services </a></li> 
            <li className="header-li"><a href="#Projects">Work</a></li>
            <li className="header-li"><a href="#contact-form"> Contact</a></li>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <a className="px-4 py-3 text-xs  md:px-8 md:py-3  text-white  md:text-xs   hover:bg-blue-700 transition-all duration-700 rounded-full bg-bluecolor cursor-pointer font-semibold">HIRE ME </a>
          { toggle ? <p onClick={()=>settoggle(!toggle)}><RxCross1 className="text-bluecolor  md:hidden block text-2xl"/></p> :<GiHamburgerMenu onClick={()=>settoggle(!toggle)} className="md:hidden text-3xl text-bluecolor"/>}
<Modes/>
        </div>
          </div>
    </header>
  )
}

export default Header
import { useState } from "react"
import Logo from "./Logo"
import {GiHamburgerMenu} from "react-icons/gi"
const Header = () => {
  const [toggle , settoggle]=useState(false);
  const [dark,setdark]=useState(true)
  return (
    <header className="w-[92%] mx-auto" >
      <div className="flex  md:flex-row justify-between   md:items-center py-5    bg-transparent">
        <Logo/>
        <nav className={`absolute z-50 md:static md:min-h-fit  min-h-[60vh] left-0  px-5  top-[${toggle ? "-100%" : "13%"}] w-full md:w-auto flex items-center bg-green-100 md:bg-transparent`}>
          <ul onClick={()=>settoggle(!toggle)} className="flex md:flex-row flex-col  w-full text-center md:max-h-fit  gap-10 cursor-pointer uppercase  ">
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
          { toggle ? <p onClick={()=>settoggle(!toggle)}>helo</p> :<GiHamburgerMenu onClick={()=>settoggle(!toggle)} className="md:hidden text-3xl text-bluecolor"/>}
          <button className="bg-slate-50 border hidden md:block text-2xl rounded-full ps-4 " onClick={()=>setdark(!dark)}> {dark ? <>🌛</>: <>🌞</>}</button>

        </div>
          </div>
    </header>
  )
}

export default Header
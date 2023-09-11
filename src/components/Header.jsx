import Logo from "./Logo"

const Header = () => {
  return (
    <header >
      <div className="flex justify-around  items-center py-5 shadow-sm    bg-transparent">
        <Logo/>
        <nav  >
          <ul className="flex gap-10 cursor-pointer uppercase ">
            <li className="header-li"><a href="#main">Home</a></li>
            <li className="header-li"><a href="#about-me">About</a></li>
            <li className="header-li"><a href="#skills">Resume </a></li>
            <li className="header-li"><a href="#Services">Services </a></li> 
            <li className="header-li"><a href="#Projects">Work</a></li>
            <li className="header-li"><a href="#contact-form">Contact</a></li>
          </ul>
        </nav>
          <a className="px-8 text-white   py-3 hover:bg-blue-700 transition-all duration-700 rounded-full bg-bluecolor cursor-pointer font-semibold">HIRE ME </a>
          </div>
    </header>
  )
}

export default Header
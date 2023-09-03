import Logo from "./Logo"

const Header = () => {
  return (
    <header className="flex z-50   justify-around  items-center py-5 shadow-sm outline-none uppercase fixed top-0 left-0 right-0 bg-white">
        <Logo/>
        <nav >
          <ul className="flex gap-10 cursor-pointer font-semibold ">
            <li>Home</li>
            <li>About</li>
            <li>Resume </li>
            <li>Services </li>
            <li>Work</li>
            <li>Contact</li>
          </ul>
        </nav>
          <a className="px-7 text-white font-semibold py-3 rounded-full bg-blue-700">Hire Me</a>
    </header>
  )
}

export default Header
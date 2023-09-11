import Icons from "./Icons"
import Logo from "./Logo"

const Footer = () => {
  return (
    <div className="flex justify-between py-8 border-t-2 px-4">
       <div className="flex items-center gap-4"> <Logo/> © Copyright 2023 | All Rights Reserved </div>
       <Icons/>
    </div>
  )
}

export default Footer
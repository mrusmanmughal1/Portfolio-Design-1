import { useContext } from "react";
import Header from "./Header"
import Main from "./Main"
import { ModeContext } from "../Context/ModeContext";

const HeaderMain = () => {
const {mode} = useContext(ModeContext);

  return (
    <div className={`${mode ? "darkmode text-white  md:h-screen  h-auto   " :"header-main md:h-screen  h-auto  "}`}>
    <Header mode={mode}/>
    <Main mode={mode}/>
    </div>
  )
}

export default HeaderMain
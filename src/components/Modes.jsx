import { ModeContext } from "../Context/ModeContext";
import { useContext } from "react";


const Modes = () => {

const {mode, setmode} = useContext(ModeContext);

  return (
    <button className={` border hidden md:block text-2xl rounded-full   transition-all duration-700 ${mode ? "bg-slate-500 pe-0 ps-4 ":"bg-slate-50 pe-4 ps-0" }  `} onClick={()=>setmode(!mode)}> {mode ? <>🌛</>: <>🌞</>}</button>
    
  )
}

export default Modes
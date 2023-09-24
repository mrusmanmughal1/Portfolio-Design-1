import { useState } from "react";
import { createContext } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
const [mode , setmode]=useState()

  return (
    <ModeContext.Provider value={{mode,setmode}}>{children}</ModeContext.Provider>
  );
};

export { ModeProvider, ModeContext };

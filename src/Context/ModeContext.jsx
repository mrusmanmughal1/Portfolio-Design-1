import { useState, useEffect, createContext } from "react";

const ModeContext = createContext();

const ModeProvider = ({ children }) => {
  const [mode, setmode] = useState(() => {
    const saved = localStorage.getItem("portfolio_mode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("portfolio_mode", JSON.stringify(mode));
    if (mode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ModeContext.Provider value={{ mode, setmode }}>
      {children}
    </ModeContext.Provider>
  );
};

export { ModeProvider, ModeContext };

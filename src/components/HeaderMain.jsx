import { useContext } from "react";
import Header from "./Header";
import Main from "./Main";
import { ModeContext } from "../Context/ModeContext";

const HeaderMain = () => {
  const { mode } = useContext(ModeContext);

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Header mode={mode} />
      <div className="flex-grow flex items-center">
        <Main mode={mode} />
      </div>
    </div>
  );
};

export default HeaderMain;
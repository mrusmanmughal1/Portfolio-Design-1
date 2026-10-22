import Header from "./Header";
import Main from "./Main";
// import { ModeContext } from "../Context/ModeContext";

const HeaderMain = () => {
  // const { mode } = useContext(ModeContext);
  const mode = 0;
  return (
    <div
      className={`${
        mode
          ? "darkmode text-white  md:h-screen  h-auto   "
          : "header-main md:h-screen  h-auto  "
      }`}
    >
      <Header />
      {/* <Main mode={mode} /> */}
    </div>
  );
};

export default HeaderMain;

import { BrowserRouter, Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hello" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

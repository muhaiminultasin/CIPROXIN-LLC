import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/common/Navbar";
import Home from "./Components/Home/Home";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import About from "./Components/Home/HomeCompomemts/why";
import Accordion from "./Components/FAQ/Accordion/Accordion";
import FAQ from "./Components/FAQ/FAQ";
import PrivecyPolicy from "./Components/PrivecyPolicy/PrivecyPolicy";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/terms&condition" element={<TermsCondition />} />
          <Route path={"/privecyPolicy"} element={<PrivecyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

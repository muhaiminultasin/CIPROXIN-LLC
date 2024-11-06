import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
// for home
import Navbar from "./Components/common/Navbar";
import Home from "./Components/Home/Home";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import PrivecyPolicy from "./Components/PrivecyPolicy/PrivecyPolicy";
// for faq 
import FAQ from "./Components/FAQ/FAQ";
// ontact
import Contact from "./Components/Contact/Contact";
import Iframe from "./Components/Contact/Ifram/Iframe";
import Dashboard from "./Components/Contact/ApDashboard/Dashboard";

// about
import About from "./Components/About/About"

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
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path={"/iframe"} element={<Iframe/>}/>
          <Route path="apDashboard" element={<Dashboard/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import React from "react";
import LandingIntro from "./HomeCompomemts/LandingIntro"
import LandingUsp from "./HomeCompomemts/LandingUsp"
import SingUpBlock from "./HomeCompomemts/SingUpBlock"
import Footer from "../common/Footer"
import FAQ from "../FAQ/FAQ";

function Page() {
  return (
    <>
      <LandingIntro/>
      <LandingUsp/>
      <SingUpBlock/>
      <Footer/>
    </>
  );
}

export default Page;

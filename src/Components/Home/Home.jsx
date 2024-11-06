import React from "react";
import LandingIntro from "./HomeCompomemts/LandingIntro"
import LandingUsp from "./HomeCompomemts/LandingUsp"
import MemberShip from "./HomeCompomemts/IncomeTracking"
import SingUpBlock from "./HomeCompomemts/SingUpBlock"
import Footer from "../common/Footer"
import CTAadaptiveComp from "./HomeCompomemts/CTAadaptiveComp";
import WhyCiprox from "./HomeCompomemts/WhyCiprox";

function Page() {
  return (
    <>
      <LandingIntro/>
      <LandingUsp/>
      <CTAadaptiveComp/>
      <MemberShip/>
      <WhyCiprox/>
      <SingUpBlock/>
      <Footer/>
    </>
  );
}

export default Page;

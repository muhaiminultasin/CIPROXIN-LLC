import React from "react";
import LandingIntro from "./HomeCompomemts/LandingIntro"
import LandingUsp from "./HomeCompomemts/LandingUsp"
import MemberShip from "./HomeCompomemts/Membership"
import SingUpBlock from "./HomeCompomemts/SingUpBlock"
import Footer from "../common/Footer"
import CTAadaptiveComp from "./HomeCompomemts/CTAadaptiveComp";

function Page() {
  return (
    <>
      <LandingIntro/>
      <LandingUsp/>
      <CTAadaptiveComp/>
      <MemberShip/>
      <SingUpBlock/>
      <Footer/>
    </>
  );
}

export default Page;

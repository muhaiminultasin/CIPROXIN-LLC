import React from "react";
import Navbar from "./common/Navbar";
import LandingIntro from "./section/LandingIntro"
import LandingUsp from "./section/LandingUsp";
import WhyUs from "./section/WhyUs"
import CTAadaptiveComp from "./section/CTAadaptiveComp";
import Membership from "./section/Membership";
import SingUpBlock from "./section/SingUpBlock";
import Footer from "./section/Footer";
import MobileMenu from "./common/MobileMenu";


function Page() {
  return (
    <>
      <Navbar />
      <LandingIntro/>
      <LandingUsp/>
      <WhyUs/>
      <SingUpBlock/>
      <Footer/>
    </>
  );
}

export default Page;

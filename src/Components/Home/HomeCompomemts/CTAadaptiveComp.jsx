import React from "react";
import Title from "../../common/title"
import Button from "../../common/Button"

function CTAadaptiveComp() {
  return (
    <section className="bg-[#E3E9ED] pt-[50px] px-[20px]  md:px-[70px] lg:px-[140px]">
      <div className="">
        {/* <div className="flex gap-5 items-center justify-center">
          <img src="./PBImage/apple-black.png" alt="" className="w-[40px]" />
          <img
            src="./PBImage/windows.jpeg"
            alt=""
            className="w-[40px] rounded-full"
          />
          <img
            src="./PBImage/Android-Logo-Black-PNG.png"
            alt=""
            className="w-[40px]"
          />
        </div> */}

        <div className="py-5 text-center">
          <Title
            titleClass={
              "text-[25px] md:text-[30px] font-[500] md:text-center md:leading-0"
            }
            subtitleClass={"text-[#7E8999] text-base font-[400] md:text-center"}
            title={"Streamline Your Income Tracking"}
            subtitle={
              "Seamlessly manage and reconcile your revenue reporting, ensuring full visibility and control over your financial data. Know exactly how your income flows, from source to settlement."
            }
          />

          {/* <div className="w-fit mx-auto mt-5">
            <Button
              Name={"Try it Now"}
              className={"bg-[#000000] text-white px-4 py-3"}
            />
          </div> */}
        </div>
      </div>

      <div>
        <img src="./PBImage/Analyze.png" alt="" />
      </div>
    </section>
  );
}

export default CTAadaptiveComp;

import React from "react";
import cn from "../../assets/lib/utility/cn";
import Title from "../common/title";

function CTAblockComp() {

const Points = [
  {
    point:"- Your music stays online indefinitely, so your fans can always access your tracks."
  },
  {
    point:"- An intuitive interface that makes navigating our platform easy."
  },
  {
    point:"- Extensive audience reach across multiple streaming platforms, allowing you to select the best distribution options for your needs."
  },
  {
    point:"- Transparent financial terms with no hidden fees."
  },
  {
    point:"- Personalized support and consultations at every stage of your journey."
  },
  {
    point:"- Clear reporting and statistics accessible dashboard."
  },
]

  return (
    <section>
      <div className={cn(`text-[25px] md:text-[35px] lg:text-[40px] bg-[#E3E9ED] gap-5 px-[20px]  md:px-[70px] lg:px-[140px] py-[100px] items-center`)}>
        <Title title={"Why CIPROXIN LLC"} subtitle={"Our music distribution service provides a fast track to success, helping you achieve global recognition and share your creativity. Here’s what we offer:"}/>

        <ul className="py-10 space-y-3">
          {
            Points.map( ({point},i) => {
              return <li key={i} className="text-[16px] text-[#7E8999] font-[500]">{point}</li>
            })
          }
        </ul>

        <p className="text-[16px] text-[#7E8999] font-[400]">
        Partnering with us means you’ll deliver your music to all platforms quickly, enhancing your chances of success. Don’t miss out on this opportunity to experience exceptional service from the CIPROXIN team!</p>
      </div>
    </section>
  );
}

export default CTAblockComp;

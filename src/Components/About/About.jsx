import React from "react";
import Title from "../common/title";
import Footer from "../common/Footer";

function PrivecyPolicy() {
  const policy = [
    {
      policyTitle: "1. Our Mission",
      conditions: [
        {
          condition: "At CIPROXIN, we believe that every artist deserves the opportunity to reach a global audience. Our goal is to equip musicians with the tools they need to distribute their music effectively while retaining control over their creative works. Whether you're a solo artist, a band, or a record label, we are here to support your journey in the ever-evolving music industry.",
        }
      ],
    },

    {
      policyTitle: "2. What We Offer",
      conditions: [
        {
          condition: "CIPROXIN LLC offers a range of services tailored to meet the needs of today’s independent musicians, including:",
        },
        {
          condition:
            "Music Distribution: Seamlessly distribute your tracks to popular platforms like Spotify, Apple Music, and YouTube.",
        },
        {
            condition:`Analytics and Reporting: Gain insights into your music's performance with analytics helping you make informed decisions.`,
        },
        {
          condition: `Fair Revenue Sharing: Enjoy transparent and fair payout structures, ensuring you receive the income you deserve from your music sales and streams.`,
        },
        {
          condition: `Dedicated Support: Our team is committed to providing personalized support to help you navigate the distribution process.`,
        },
      ],
    },

    {
      policyTitle: "3. Our Values",
      conditions: [
        {
          condition:
            "Empowerment: We are dedicated to empowering artists by providing them with the resources and knowledge they need to succeed.",
        },
        {
          condition: "Transparency: We believe in clear communication and honesty, ensuring our clients understand every step of the distribution process.",
        },
        {
          condition: "Community: At CIPROXIN, we foster a community of artists and music lovers who support and inspire one another.",
        }
      ],
    },

    {
      policyTitle: "4. Join Us",
      conditions: [
        {
          condition: "We invite you to join our growing family of artists at CIPROXIN LLC. Together, we can redefine the music distribution landscape and make your music accessible to audiences worldwide.",
        }
      ],
    },
  ];

  return (
    <section>
      <div className=" text-start px-[20px] md:px-[70px] lg:px-[140px] py-10">
      <Title
        titleClass={" text-[25px] md:text-[35px] lg:text-[40px] text-start"}
        title={"About Us"}
        subtitleClass={"mt-0 text-start"}
        subtitle={"Welcome to CIPROXIN LLC!"}
      />
      <p className="font-[400] text-[16px] text-[#7E8999]  text-start  mt-3">
      Founded by Krystal Perez on December 13, 2022, CIPROXIN is dedicated to empowering independent artists and labels to share their music with the world. Our mission is to provide a comprehensive music distribution platform that simplifies the process of getting your music heard on major streaming services and digital retailers.
      </p>

      <div className="py-10">
        {policy.map(({ policyTitle, conditions }, i) => {
          return (
            <ul key={i} className="mt-5 mb-10">
              <h1 className="my-2 font-[600] text-base md:text-[18px] lg:text-[20px]">
                {policyTitle}
              </h1>

              {conditions.map(({ condition },i) => {
                return (
                  <li key={i} className="text-[15px] font-[500] text-[#7E8999]">
                    {condition}
                  </li>
                );
              })}
            </ul>
          );
        })}
      </div>
      <div className='space-y-2 text-[#111C2EA3]'>
          {/* <p>CIPROXIN LLC</p> */}
          <p>For more information or to get started, feel free to reach out to us at contact@ciproxinllc.com</p>
          <p>Thank you for choosing CIPROXIN LLC. We can’t wait to help you share your music!</p>
    </div>
    </div>

    
    <Footer/>
    </section>
  );
}

export default PrivecyPolicy;

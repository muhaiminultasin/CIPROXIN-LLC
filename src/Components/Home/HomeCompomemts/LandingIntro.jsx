import React from "react";
import Title from "../../common/title";
import Button from "../../common/Button";

function LandingIntro() {
  const companyLogo = [
    {
      img: "./PBImage/tidal.svg",
    },
    {
      img: "./PBImage/apple-music.svg",
    },
    {
      img: "./PBImage/youtube-music.svg",
    },
    {
      img: "./PBImage/spotify.svg",
    },
    {
      img: "./PBImage/amazon-music.svg",
    },
    {
      img: "./PBImage/tiktok.svg",
    },
  ];

  return (
    <div>
      <div
        id="LandingIntro-top"
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-0 px-[20px] md:px-[70px] lg:px-[140px]  bg-[#000000] pt-[50px] md:pt-[75px] pb-10 overflow-hidden"
      >
        <div className=" z-30 ">
          <div>
          <Title
            titleClass={
              "text-[#ffffff]  text-[30px] md:text-[35px] lg:text-[60px] md:leading-[45px] lg:leading-[90px]"
            }
            
            title={"Sell Your Music" }
            
          />
          <Title
            titleClass={
              "text-[#ffffff]  text-[30px] md:text-[35px] lg:text-[60px] md:leading-[45px] lg:leading-[90px]"
            }
            
            title={"With" }
            
          />
          <Title
            titleClass={
              "text-[#ffffff] max-w-[550px] text-[30px] md:text-[35px] lg:text-[70px] md:leading-[45px] lg:leading-[90px]"
            }
            subtitleClass={"text-[#ffffff]  lg:max-w-[430px] leading-6"}
            title={" CIPROXIN LLC" }
            subtitle={
              "Get your music on Spotify, Apple Music, iTunes, TIDAL, TikTok, Amazon, and more. Keep 80% of your earnings with us!"
            }
          />
          </div>
          <Button btnPosition={"text-center lg:text-start"} className={"py-3 px-10 mt-5"} Name={"Contact"} />
        </div>
        <div className=" mt-[-50px]  md:mt-0 md:h-[600px] z-20 ">
          <img
            src="./PBImage/CIPROXINLLC.png"
            alt=""
            className="w-fit ms-auto "
          />
        </div>
      </div>

      <div id="LandingIntro-bottom " className="bg-[#F1F4F6] py-10">
        <ul className="grid grid-cols-3 md:grid-cols-6 gap-5 mb-5 px-[20px] md:px-[70px] lg:px-[140px]">
          {companyLogo.map(({ img }, i) => {
            return (
              <li key={i} className="flex justify-center">
                <img src={img} alt="" />
              </li>
            );
          })}
        </ul>

        
      </div>
    </div>
  );
}

export default LandingIntro;

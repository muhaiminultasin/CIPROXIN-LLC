import React from 'react'
import Title from '../../common/title'

function SingUpBlock() {
  return (
    <section className='bg-[url(/PBImage/equipment.jpg)] bg-center  bg-no-repeat px-[20px] md:px-[70px] lg:px-[140px] py-[100px] opacity-100'>
      <div>
        <Title titleClass={"text-[25px] md:text-[40px] text-white md:text-center max-w-[700px"} subtitleClass={"text-white"} title={"Start selling your music Worldwide today"} subtitle={"Start selling your music worldwide with *CIPROXIN LLC*, distributing your tracks across major platforms like Spotify, Apple Music, and YouTube. Monetize your music through royalties from streams, downloads, and licensing opportunities. With an easy upload process, you can begin earning without the need for a record label."}/>
      </div>

      {/* <div className="flex flex-col md:flex-row md:gap-5 justify-center ">
        <StoreButton className={"bg-[#1877F2] text-white font-[500] rounded-full py-2 px-4 w-full sm:w-fit md:w-fit "} img={"./PBImage/facebook-logo-1-2.png"} title={"Continue with Facebook"}  />
        <StoreButton className={"bg-white text-black font-[500] rounded-full py-2 px-4 w-full sm:w-fit md:w-fit "} img={"./PBImage/google.png"} title={"Continue with Google"}  />
        </div> */}
    </section>
  )
}

export default SingUpBlock;

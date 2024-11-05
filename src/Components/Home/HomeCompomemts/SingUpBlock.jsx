import React from 'react'
import Title from '../../common/title'
import StoreButton from "../../common/StoreButton"

function SingUpBlock() {
  return (
    <section className='bg-[url(/PBImage/equipment.jpg)] bg-center  bg-no-repeat px-[20px] md:px-[70px] lg:px-[140px] py-[100px] opacity-100'>
      <div>
        <Title titleClass={"text-[25px] md:text-[40px] text-white md:text-center max-w-[700px"} subtitleClass={"text-white"} title={"Join a global movement of over 100 million creators and fans."} subtitle={"BandLab is the next-generation music creation platform used by millions around the world to make and share their music. Sign up today (it’s free!) and discover a whole new world of creativity."}/>
      </div>

      <div className="flex flex-col md:flex-row md:gap-5 justify-center ">
        <StoreButton className={"bg-[#1877F2] text-white font-[500] rounded-full py-2 px-4 w-full sm:w-fit md:w-fit "} img={"./PBImage/facebook-logo-1-2.png"} title={"Continue with Facebook"}  />
        <StoreButton className={"bg-white text-black font-[500] rounded-full py-2 px-4 w-full sm:w-fit md:w-fit "} img={"./PBImage/google.png"} title={"Continue with Google"}  />
        </div>
    </section>
  )
}

export default SingUpBlock

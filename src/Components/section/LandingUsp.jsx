import React from 'react'
import Title from '../common/title'
import Step from '../common/Step'

function LandingUsp() {

    const steps = [
        {
            img:"PBImage/music-icon.svg",
            title:"Upload Your Music",
            subtitle: "Access the CIPROXIN LLC Dashboard through Contact with  Us. Release a single or multiple tracks."
        },
        {
            img:"PBImage/details-icon.svg",
            title:"Provide Your Release Details",
            subtitle: "Fill out your release information, upload cover art, and submit it for a quick review by CIPROXIN LLC team."
        },
        {
            img:"PBImage/release-icon.svg",
            title:"Release Your Tracks",
            subtitle: "Once approved, your music will be distributed to digital streaming platforms. Please note that distribution times may vary by store."
        },
        {
            img:"PBImage/earn-icon.svg",
            title:"Profit from Your Music",
            subtitle: "With CIPROXIN LLC you receive 80% of the earnings from your releases.",
            button: "Get Paid"
        },
    ]

  return (
    <section className='py-[80px] px-[20px] md:px-[70px] lg:px-[140px]'>
      <Title titleClass={"text-[25px] md:text-[35px] lg:text-[40px] font-[500] md:text-center md:leading-8"}
       subtitleClass={"md:text-center text-[16px] "} title={"Distribute your music in four simple steps!"} subtitle={"Sell your tracks online quickly with CIPROXIN LLC Distribution."}/>

       <div className='grid grid-cols-1 sm:grid-cols-2 md:flex flex-wrap'>
            {
                steps.map( ({img,title,subtitle},i)=> {
                        return <Step className={"mx-auto mt-10 "} key={i} img={img} title={title} subtitle={subtitle} />
                })
            }
       </div>
    </section>
  )
}

export default LandingUsp

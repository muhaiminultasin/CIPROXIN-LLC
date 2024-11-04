import React from 'react'
import Title from '../common/title'
import Button from '../common/Button'

function Membership() {

    const tags = [
        {
            title:"Distribution"
        },
        {
            title:"Fan reach"
        },
        {
            title:"Profile boost"
        },
        {
            title:"Unlimited opportunities"
        }
    ]

  return (
    <section className=' bg-[#E3E9ED] px-[20px] md:px-[70px] lg:px-[170px] py-[100px] frid-cols-1 md:grid grid-cols-2 items-center gap-10 md:gap-5'>
      <div>
        <Title title={"Comes with your Membership"} titleClass={"text-[25px] md:text-[35px] lg:text-[40px] font-[500]"}/>

        <div className='tags '>
            <ul className='flex flex-wrap gap-2'>
            {
                tags.map( ({title},i) => {
                    return <li><Button key={i} Name={title} className={"bg-white text-[14px]"}/></li>
                })
            }
            </ul>
        </div>

        <Title subtitleClass={"text-[#7E8999]"} subtitle={"Enjoy BandLab Distribution, along with a full suite of artist-centric features under BandLab Membership."}/>
      </div>

      <div>
            <img src="./PBImage/distro-landing-membership_2x.png" alt="" />
      </div>
    </section>
  )
}

export default Membership

import React from 'react'
import Title from '../../common/title'
import Button from '../../common/Button'

function Membership() {

    const tags = [
        {
            title:"Revenue"
        },
        {
            title:"Real-time Finance"
        },
        {
            title:"Customizable Reporting"
        },
        {
            title:"Data Privacy"
        }
    ]

  return (
    <section className='  px-[20px] md:px-[70px] lg:px-[170px] py-[100px] frid-cols-1 md:grid grid-cols-2 items-center gap-10 md:gap-5'>
      <div>
        <Title title={"Analyze Your Data with Clarity"} titleClass={"text-[25px] md:text-[35px] lg:text-[40px] font-[500]"}/>

        <div className='tags '>
            <ul className='flex flex-wrap gap-2'>
            {
                tags.map( ({title},i) => {
                    return <li><Button key={i} Name={title} className={"bg-white text-[14px]"}/></li>
                })
            }
            </ul>
        </div>

        <Title subtitleClass={"text-[#7E8999]"} subtitle={"Unlock the power of your data. Harness advanced analytics to gain clarity on streaming trends, revenue patterns, and marketing effectiveness, driving smarter strategies and growth."}/>
      </div>

      <div>
            <img src="./PBImage/IncomeTracking.png" alt="" className='md:ms-20'/>
      </div>
    </section>
  )
}

export default Membership

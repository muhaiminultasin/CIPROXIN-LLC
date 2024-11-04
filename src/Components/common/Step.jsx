import React from 'react'
import Title from './title'
import Button from "./Button"
import cn from '../../assets/lib/utility/cn'

function Step({img,title,subtitle,button,className}) {
  return (
    <div className={cn(`md:w-[220px] md:h-[290px]`, className)}>
      <div>
         <div className='w-fit bg-[#F0F3F5] p-2 rounded-md mb-5 mx-auto md:mx-0' >
            <img src={img} alt="" className=''/>
         </div>

         <div>
            <Title titleClass={"text-[18px] md:text-[20px] lg:text-[24px]"} subtitleClass={"text-[14px]"} title={title} subtitle={subtitle}/>
         </div>
         {button && <Button Name={button} className={"bg-[#E3E9ED] mt-5"} />}
      </div>
    </div>
  )
}

export default Step

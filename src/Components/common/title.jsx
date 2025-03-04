import React from 'react'
import  cn  from '../../assets/lib/utility/cn'

function Title({title, subtitle,titleClass, subtitleClass}) {
  return (
    <div className='flex flex-col'>
      <h1 className={cn(` font-[600] text-center md:text-start `,titleClass)}>{title}</h1>
      <p className={cn(`font-[500] text-[15px] text-[#7E8999]  text-center md:text-start mt-3`,subtitleClass)}>{subtitle}</p>
    </div>
  )
}

export default Title

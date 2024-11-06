import React from 'react'
import cn from '../../assets/lib/utility/cn'

function ReportBtn({ img, title, link,className}
) {
  return (
    <div>
      <button className={cn(`'bg-black text-white flex gap-2 py-1 px-3 mt-5 rounded-md text-start items-center`,className)}>
            <img src={img} alt="" className='block w-[25px]'/>
            <div>
                <h1 className={cn(`font-[400] md:text-[14px]`,className)}>{title}</h1>
            </div>
      </button>
    </div>
  )
}

export default ReportBtn;
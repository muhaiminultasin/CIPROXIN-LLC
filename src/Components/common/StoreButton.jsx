import React from 'react'
import cn from '../../assets/lib/utility/cn'

function StoreButton({ img, title,subtitle,className}
) {
  return (
    <div>
      <button className={cn(`'bg-black text-white flex gap-2 py-1 px-3 mt-5 rounded-md text-start items-center`,className)}>
            <img src={img} alt="" className='block w-[25px]'/>
            <div>
                <p className="text-[10px] font-[300]">{subtitle} </p>
                <h1 className={cn(`font-[400] md:text-[14px]`,className)}>{title}</h1>
            </div>
      </button>
    </div>
  )
}

export default StoreButton

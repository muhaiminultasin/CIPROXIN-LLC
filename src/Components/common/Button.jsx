import React from 'react'
import cn from "../../assets/lib/utility/cn"
function Button({Name,className,btnPosition,onClick}) {
  return (
    <div className={cn(`w-full`,btnPosition)}>
      <button onClick={onClick} className={cn(`bg-[#ffffff] px-4 py-2 rounded-full font-semibold`,className)}>{Name}</button>
    </div>
  )
}

export default Button;

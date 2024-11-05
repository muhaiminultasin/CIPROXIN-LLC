import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {


const navigate = useNavigate()
const termscondition = () => {
  navigate("/terms&condition")
}

  return (
    <footer className='py-5 px-[20px]  md:px-[70px] lg:px-[140px]'>
      
      <div className='grid grid-cols-2 gap-auto mt-5 text-[14px] text-[#111C2EA3]'>
        <p>Office Address:
7713 BRIGHT AVE #3, WHITTIER, California, 90602, United States
Incorporation on 13 December 2022</p>
        <div className=''>
          <ul className='flex gap-5 justify-end'>
          <li className='cursor-pointer' onClick={termscondition}>Terms of Use</li>
          <li className='cursor-pointer' href="">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;



        
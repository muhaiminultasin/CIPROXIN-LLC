import React from 'react'
import { useNavigate } from 'react-router-dom';

function Footer() {


const navigate = useNavigate()
const termscondition = () => {
  window.scrollTo(0,0)
  navigate("/terms&condition")
}

const privecyPolicy = () => {
  window.scrollTo(0,0)
  navigate("/privecyPolicy")
}


const faq = () => {
  window.scrollTo(0,0)
  navigate("/faq")
}

const About = () => {
  window.scrollTo(0,0)
  navigate("/About")
}

  return (
    <footer className='py-5 px-[20px]  md:px-[70px] lg:px-[140px]'>
      
      <div className='grid grid-cols-2 md:gap-5 mt-5 text-[14px] text-[#111C2EA3]'>
        <div className='space-y-2'>
          <p>Office Address:</p>
          <p>7713 BRIGHT AVE #3, WHITTIER, California, 90602, United States .</p>
          <p>Incorporation on 13 December 2022</p>
        </div>
        <div className='relative w-full'>
          <ul className='absolute bottom-0 right-0 grid grid-cols-1  md:grid-cols-4 md:gap-5 space-y-2 md:space-y-0  md:justify-end'>
            <li className='cursor-pointer md:mx-auto md:text-center' onClick={termscondition}>Terms of Use</li>
            <li className='cursor-pointer md:mx-auto md:text-center' onClick={privecyPolicy}>Privacy Policy</li>
            <li className='cursor-pointer md:mx-auto md:text-center' onClick={faq}>Faq</li>
            <li className='cursor-pointer md:mx-auto md:text-center' onClick={About}>About Us</li>
          </ul>
        </div>
      </div>
      <p className='text-[14px] text-[#111C2EA3] text-center mt-5'>2024 © <span className='font-[600]'>CIPROXIN LLC</span>. All rights reserved.</p>
    </footer>
  )
}

export default Footer;
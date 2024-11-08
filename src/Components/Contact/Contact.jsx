import React from 'react'
import ReportBtn from "../common/ReportBtn"
import Title from '../common/title'
import { NavLink, useNavigate } from 'react-router-dom'
import Footer from '../common/Footer'

function Contact() {

    const btnProp = [
        {
            title:"Report copyright infringement",
            img:"./PBImage/link-icon.png",
            link:"/report"
        },
        {
            title:"Dashboard Application",
            img:"./PBImage/link-icon.png",
            link: "/apDashboard"
        },
    ]

    const navigate = useNavigate();

    

    

  return (
    <div>
        <div className='w-full py-[50px] px-[20px] md:px-[70px] lg:px-[140px]'>
        <Title title={"Contact Us"} titleClass={"md:text-center text-[25px] md:text-[35px] lg:text-[40px]"}/>
            <div className='w-full'>
                <div className='w-fit mx-auto'>
                {btnProp.map( ({title,img,link},i) => {
                    return <NavLink key={i} to={link}><ReportBtn  className={"text-black text-center"} title={title} img={img} link={link}/></NavLink>
                })}
                </div>
            </div>
        </div>
        <Footer className={"absolute bottom-0 w-full"}/>
    </div>
  )
}

export default Contact;

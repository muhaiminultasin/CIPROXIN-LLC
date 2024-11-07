import React from 'react'
import Title from '../../common/title'
import Step from '../../common/Step'
import Footer from '../../common/Footer'

function Dashboard() {

    const steps = [
        
        {
            img:"PBImage/apply.png",
            title:"Your Application",
            subtitle: "Complete the form by providing all necessary information and as many details as possible."
        },
        {
            img:"PBImage/review.png",
            title:"Team Review",
            subtitle: "Our team will carefully review the details of your application, assessing all the information provided to ensure it meets our criteria and requirements."
        },
        {
            img:"PBImage/decision.png",
            title:"Our Decision",
            subtitle: "If approved, you'll receive an email with instructions to access your dashboard."
        },
    ]
  return (
    <div >
      <div className='py-[50px] px-[20px] md:px-[70px] lg:px-[140px]'>
      <Title titleClass={"text-[25px] md:text-[35px] lg:text-[40px] md:text-center"} title={"Dashboard Application"} />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:flex flex-wrap'>
            {
                steps.map( ({img,title,subtitle},i)=> {
                        return <Step className={"mx-auto mt-10  md:w-[300px]"} key={i} img={img} title={title} subtitle={subtitle} />
                })
            }
        </div>

         <iframe src="https://tally.so/r/mYz7xJ"  className='w-full h-[100vh]'></iframe>
      </div>
            <Footer/>

    </div>
  )
}

export default Dashboard

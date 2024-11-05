import React from 'react';
import Accordion from './Accordion/Accordion';
import Title from '../common/title';
import Footer from '../common/Footer';

function FAQ() {

    const QS = [
        {
            id: 1,
            title: "Does CIPROXIN LLC have any hidden fees?",
            ans: "Nope, with CIPROXIN LLC, there are never any hidden fees. You keep 80% of your earnings from over 200 streaming and social media platforms like YouTube and Instagram."
        },
        {
            id: 2,
            title: "What is Digital Music Distribution?",
            ans: "Digital music distribution allows artists to make their music available through online downloads and streaming platforms. Traditionally, this was managed by record labels, which made deals with music outlets. However, the digital age has transformed this model, enabling independent distribution without a record label."
        },
        {
            id: 3,
            title: "Do I Need a Distributor for My Music?",
            ans: "Yes, to put your music on download or streaming platforms like Spotify or Apple Music, you will need to work with a digital music distributor."
        },
        {
            id: 4,
            title: "How Do I Digitally Distribute My Music?",
            ans: "Contact CIPROXIN LLC to access your dashboard. Upload your music and select the streaming and download platforms for distribution. Our Quality Assurance team will ensure your audio files, cover art, and metadata meet the requirements of digital platforms and online stores. We will then distribute your release."
        },
        {
            id: 5,
            title: "How Do I Get Paid for My Music?",
            ans: "Nowadays most of your revenue will come from streaming services. We take 20% and give 80%."
        }
    ];

  return (
    <section >
      <div className='h-[100%] px-[20px] md:px-[70px] lg:px-[140px] bg-[#F1F4F6] py-[50px]'>
      <div>
        <Title titleClass={"text-[25px] md:text-[35px] lg:text-[40px] mb-9 md:text-center font-[500]"} title={"freequently asked questions"}/>

        <div className='space-y-5 '>
          {QS.map(({ id, title, ans }) => (
            <Accordion key={id} ques={title} ans={ans} />
          ))}
        </div>
      </div>
      </div>

      <Footer/>
    </section>
  );
}

export default FAQ;

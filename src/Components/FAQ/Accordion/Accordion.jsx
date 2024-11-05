import React, { useState } from 'react';

function Accordion({ ques, ans }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='bg-white px-5 rounded-xl '>
      <button onClick={toggleAccordion} className="flex justify-between w-full p-3 font-[500]  rounded-lg bg-[white] text-start">
        <span>{ques}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>

      {isOpen && (
        <div className="  p-2 grid overflow-hidden transition-all duration-300 ease-in-out">
          <p className='text-[#7E8999] text-[14px]'>{ans}</p>
        </div>
      )}
    </div>
  );
}

export default Accordion;

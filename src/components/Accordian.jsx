import { useState } from 'react';

const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const accordionItems = [
    {
      question: 'How often do you come per month?',
      answer:
        "We aim to come weekly for lawn and yard maintenance, especially in peak growth season. Every yard is unique, which is why we're regularly checking up and keeping notes on your yard so we can best serve you year-round.",
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'Your cancellation policy details go here.',
    },
    {
      question: 'Title',
      answer: 'Description for the title goes here.',
    },
    // Add more accordion items as needed
  ];

  return (
    <div className='max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10'>
      {accordionItems.map((item, index) => (
        <div key={index} className='border-b'>
          <button
            className='flex justify-between items-center p-5 w-full text-left font-semibold text-sky-400 focus:outline-none'
            onClick={() => toggleAccordion(index)}
          >
            <span>{item.question}</span>
            <img
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/b4cf947232c15b3d0223f56683dc6042884844734f5f16d60c52bea9d9bc1175?'
              alt=''
              className='shrink-0 w-8 aspect-square'
            />
          </button>
          {activeAccordion === index && (
            <div className='p-5 text-slate-900'>{item.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

import React, { useState } from 'react';
import Subsribe from '../components/assets/Home/Subscribe.svg';
import cross from '../components/assets/Home/cross.svg';

function Newsletter() {
  const [newsLetter, setNewsLetter] = useState(true);

  const removeNewsletter = () => {
    setNewsLetter(false);
  };
  return (
    <>
      {newsLetter && (
        <div className='flex overflow-hidden relative flex-col items-end px-20 py-16 w-[850px] min-h-[396px] mb-20 max-md:px-5 max-md:max-w-full font-dmSans'>
          <button
            className='absolute right-[11px] top-[11px] z-10'
            onClick={removeNewsletter}
          >
            <img src={cross} alt='' />
          </button>
          <img
            loading='lazy'
            src={Subsribe}
            className='object-cover absolute inset-0 size-full'
          />
          <div className='relative text-2xl leading-9 text-indigo-950 font-bold'>
            Subscribe to our newsletter
          </div>
          <div className='relative mt-6 leading-8 w-[360px]'>
            Fill your email below to join our marketing email newsletter today!
          </div>
          <input
            placeholder='Email'
            className='relative justify-center items-start px-5 py-6 mt-9 max-w-full bg-white border border-gray-100 border-solid shadow-sm rounded-[60px] w-[360px] max-md:px-5'
          />

          <button className='relative justify-center items-center px-10 pt-5 pb-5 mt-6 max-w-full text-center text-white whitespace-nowrap bg-emerald-600 shadow-sm rounded-[56px] w-[360px] max-md:px-5'>
            Done
          </button>
        </div>
      )}
    </>
  );
}

export default Newsletter;

import React, { useState } from 'react';
import location from '../components/assets/Home/location.svg';
import date from '../components/assets/Home/date.svg';
function TravellerShipper() {
  const [bgColor1, setbgColor1] = useState(true);
  const [bgColor2, setbgColor2] = useState(false);

  const handleClick1 = () => {
    setbgColor1(true);
    setbgColor2(false);
  };
  const handleClick2 = () => {
    setbgColor1(false);
    setbgColor2(true);
  };
  return (
    <form className='flex flex-col w-[38%] max-md:ml-0 max-md:w-full'>
      <div className='flex flex-col grow px-1.5 pt-1.5 pb-6 w-full text-base font-medium  bg-white rounded-3xl shadow-sm max-md:max-w-full'>
        <div className='flex  whitespace-nowrap bg-white rounded-2xl border-solid border-[3px] border-neutral-100 text-slate-900 max-md:flex-wrap max-md:max-w-full'>
          <button 
          type='button'
          className= {bgColor1 ?'justify-center items-start px-20 py-4 rounded-2xl  text-center  bg-neutral-100':'justify-center items-start px-20 py-4 rounded-2xl  text-center '}
          onClick={handleClick1}
          >
            Traveler
          </button>
          <button 
          type='button'
          className={bgColor2 ? 'justify-center items-start px-20 py-4 rounded-2xl  text-center  bg-neutral-100': 'justify-center items-start px-20 py-4 rounded-2xl  text-center'}
          onClick={handleClick2}
          >Shipper</button>
        </div>
        <div className='relative'>
          <input
            placeholder='Pickup Place'
            className='placeholder-sky-400 flex gap-5 justify-between px-10 py-2.5 mx-4 mt-12 bg-neutral-100 w-[420px] h-[70px] rounded-[41px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full'
          />

          <img
            loading='lazy'
            src={location}
            className='shrink-0 aspect-square w-[53px] h-[53px] absolute inset-y-[55px] right-12 pl-3 flex items-center pointer-events-none'
          />
        </div>
        <div className='relative'>
          <input
            placeholder='Drop Place'
            className='placeholder-sky-400 flex gap-5 justify-between px-10 py-2.5 mx-4 mt-7 bg-neutral-100 w-[420px] h-[70px] rounded-[41px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full'
          />
          <img
            loading='lazy'
            src={location}
            className='shrink-0 aspect-square w-[53px] h-[53px] absolute inset-y-[37px] right-12 pl-3 flex items-center pointer-events-none'
          />
        </div>
        <div className='relative'>
          <input
            placeholder='Pref Date'
            className='placeholder-sky-400 flex gap-5 justify-between px-10 py-2.5 mx-4 mt-7 bg-neutral-100 w-[420px] h-[70px] rounded-[41px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full'
          />
          <img
            loading='lazy'
            src={date}
            className='shrink-0 aspect-square w-[53px] h-[53px] absolute inset-y-[37px] right-12 pl-3 flex items-center pointer-events-none'
          />
        </div>

        <button className='justify-center items-center self-center px-16 py-7 mt-16 max-w-full text-base font-bold tracking-wide text-center text-white bg-sky-400 rounded-[29px] w-[303px] max-md:px-5 max-md:mt-10'>
          Search Now
        </button>
      </div>
    </form>
  );
}

export default TravellerShipper;

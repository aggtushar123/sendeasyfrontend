import React, { useState } from 'react';

function TravellerShipper() {
  const [isActiveClass1, setIsActiveClass1] = useState(true);
  const [isActiveClass2, setIsActiveClass2] = useState(false);
  const [bgColor1, setbgColor1] = useState(true);
  const [bgColor2, setbgColor2] = useState(false);

  const handleClick1 = () => {
    setIsActiveClass1(true);
    setIsActiveClass2(false);
    setbgColor1(true);
    setbgColor2(false);
  };
  const handleClick2 = () => {
    setIsActiveClass1(false);
    setIsActiveClass2(true);
    setbgColor1(false);
    setbgColor2(true);
  };
  return (
    <div className='flex flex-col w-[54%] max-md:ml-0 max-md:w-full'>
      <div className='flex flex-col grow px-1.5 pt-1.5 pb-6 w-full text-base font-medium text-sky-400 bg-white rounded-3xl shadow-sm max-md:max-w-full'>
        <div className='flex gap-5 whitespace-nowrap bg-white rounded-2xl border-solid border-[3px] border-neutral-100 text-slate-900 max-md:flex-wrap max-md:max-w-full'>
          <button className='justify-center items-start px-16 py-2.5 rounded-2xl bg-neutral-100 max-md:pr-5 max-md:pl-6'>
            Traveler
          </button>
          <button className='flex-auto my-auto text-center'>Shipper</button>
        </div>
        <div className='relative '>
          <input
            placeholder='Pickup Place'
            className='flex gap-5 justify-between py-5  pr-3 pl-10 mt-12 mr-4 ml-5 max-w-full bg-neutral-100 rounded-[41px] max-md:pl-5 max-md:mx-2.5 max-md:mt-10  w-[430px] h-[70px]'
          />

          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4a417873fe7c330c8c9d2a6709c305c10289e9ca5ba387e35ff92f4019b342b8?'
            className='shrink-0 aspect-square w-[53px] h-[53px] absolute inset-y-[55px] right-12 pl-3  
            flex items-center  
            pointer-events-none'
          />
        </div>
        <div className='relative '>
          <input
            placeholder='Pickup Place'
            className='flex gap-5 justify-between py-5  pr-3 pl-10 mt-12 mr-4 ml-5 max-w-full bg-neutral-100 rounded-[41px] max-md:pl-5 max-md:mx-2.5 max-md:mt-10  w-[430px] h-[70px]'
          />

          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4a417873fe7c330c8c9d2a6709c305c10289e9ca5ba387e35ff92f4019b342b8?'
            className='shrink-0 aspect-square w-[53px] h-[53px] absolute inset-y-[55px] right-12 pl-3  
            flex items-center  
            pointer-events-none'
          />
        </div>
        <div className='relative '>
          <input
            placeholder='Pickup Place'
            className='flex gap-5 justify-between py-5  pr-3 pl-10 mt-12 mr-4 ml-5 max-w-full bg-neutral-100 rounded-[41px] max-md:pl-5 max-md:mx-2.5 max-md:mt-10  w-[430px] h-[70px]'
          />

          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/4421f82590a81a7dbfa7765561e7110ef14439bb2784910244cb15bc90e6f8a4?'
            className='shrink-0 aspect-square w-[35px] h-[35px] absolute inset-y-[65px] right-14 pl-3  
            flex items-center  
            pointer-events-none'
          />
        </div>

        <button className='justify-center items-center self-center px-16 py-7 mt-16 max-w-full text-base font-bold tracking-wide text-center text-white bg-sky-400 rounded-[29px] w-[278px] max-md:px-5 max-md:mt-10'>
          Search Now
        </button>
      </div>
    </div>
  );
}

export default TravellerShipper;

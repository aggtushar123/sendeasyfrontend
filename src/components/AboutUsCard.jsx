import React from 'react';

function AboutUsCard() {
  return (
    <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full  rounded-xl shadow-sm  max-md:pr-5   items-center flex-shrink-0  hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
      <div className='flex flex-col grow items-center pb-9 max-md:mt-8'>
        <img
          loading='lazy'
          srcSet='https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D'
          className='object-cover w-full aspect-[0.98] rounded-xl'
        />
        <div className='mt-8 text-2xl font-semibold leading-8 text-slate-900'>
          John Doe
        </div>
        <div className='mt-2.5 text-xl leading-7 text-sky-400'>Founder</div>
        <div className='flex gap-5 mt-8'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/0909c58c43f22228141dc1bc20449a8aa705552af7e260664b0943b88c31f306?'
            className='shrink-0 w-8 aspect-square'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/bfef91c74d2acfcb42d22bf31df156320d13e8cc12ff5c87580efdeb28e590b2?'
            className='shrink-0 w-8 aspect-square'
          />
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/863f8f81cc1fa7a6583a4544243b4885917dd4c657794ac25fb4366f9802326a?'
            className='shrink-0 w-8 aspect-square'
          />
        </div>
      </div>
    </div>
  );
}

export default AboutUsCard;

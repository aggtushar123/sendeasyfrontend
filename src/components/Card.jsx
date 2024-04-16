import * as React from 'react';

function Card() {
  return (
    <div className=' bg-[#F5F4F8] rounded-xl shadow-sm max-w-[745px] max-md:pr-5  flex flex-col items-center flex-shrink-0 w-[500px] md:w-[600px] xl:w-[600px] hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden '>
      <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
        <div className='flex flex-col w-[37%] max-md:ml-0 max-md:w-full'>
          <img
            loading='lazy'
            srcSet='https://plus.unsplash.com/premium_photo-1711132425055-1c289c69b950?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0NXx8fGVufDB8fHx8fA%3D%3D'
            className='grow w-full aspect-[1] h-[296px] '
          />
        </div>
        <div className='flex flex-col ml-5 w-[83%] max-md:ml-0 max-md:w-full text-black'>    
          <div className='flex flex-col self-stretch my-auto text-xs text-slate-900 max-md:mt-10 max-md:max-w-full'>
            <div className='text-left max-md:max-w-full'>May 8, 2020</div>
            <div className='mt-4 text-2xl font-semibold max-md:max-w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
            <div className='mt-4 max-md:max-w-full'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              nibh mauris, nec turpis orci lectus maecenas. Suspendisse sed
              magna eget nibh in turpis. Consequat duis diam lacus arcu. ipsum
              dolor sit amet, consectetur adipiscing elit. Cursus nibh mauris,
              nec turpis orci lectus maecenas. Suspendisse sed magna eget nibh
              in turpis. Conseq
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;

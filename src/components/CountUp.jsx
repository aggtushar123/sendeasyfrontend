import React from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import CountUp from 'react-countup';
function CountUpComponent() {
  return (
    <div className='flex justify-between mt-9 text-base text-center w-[80%] max-md:flex-wrap  '>
      <div className='w-full mt-[170px] xl:h-[200px] md:p-10 xl:my-10 text-center  py-4  text-2xl xl:text-4xl text-[#0D9276]'>
        {' '}
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/dd9902efdd84f4770e7420b90c2b9e51b8a25ec75a0e12f3e659259e130f1587?'
          className='w-8 mx-auto aspect-square'
        />
        <h1 className='text-[20px] py-3 text-[#0D9276] mb-4'>Eco Friendly</h1>
        <CountUp
          enableScrollSpy={true}
          redraw={true}
          end={100}
          scrollSpyDelay={2}
          suffix='%'
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} className='text-[64px] ' />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
      <div className='w-full mt-[170px] xl:h-[200px] md:p-10 xl:my-10 text-center  py-4  text-2xl xl:text-4xl text-[#0D9276]'>
        {' '}
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/3e45292c297a50c80de5371389ee635892ec1dfe917a7ac3b5a6064e583d0c17?'
          className='w-8 mx-auto aspect-square'
        />
        <h1 className='text-[20px] py-3 text-[#0D9276] mb-4'>
          Satisfied Client
        </h1>
        <CountUp
          enableScrollSpy={true}
          redraw={true}
          end={100}
          scrollSpyDelay={2}
          suffix='+'
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} className='text-[64px] ' />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>

      <div className='w-full mt-[170px] xl:h-[200px] md:p-10 xl:my-10 text-center  py-4  text-2xl xl:text-4xl text-[#0D9276]'>
        {' '}
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/0409997c80796cc93f3602fcb137ad3cbfc83ca7b1155256660f5e1439d4ac1a?'
          className='w-8 aspect-square mx-auto'
        />
        <h1 className='text-[20px] py-3 text-[#0D9276] mb-4'>
          Years Of Experience
        </h1>
        <CountUp
          enableScrollSpy={true}
          redraw={true}
          end={11}
          scrollSpyDelay={2}
          suffix=' Years'
        >
          {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start}>
              <span ref={countUpRef} className='text-[64px] ' />
            </VisibilitySensor>
          )}
        </CountUp>
      </div>
    </div>
  );
}

export default CountUpComponent;

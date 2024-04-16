import React from 'react';
import Accordion from '../components/Accordian';
import CountUpComponent from '../components/CountUp';
import AboutUsCard from '../components/AboutUsCard';

function About() {
  return (
    <div className='flex flex-col items-center  rounded-[29px] font-inter'>
      <div className='flex flex-col items-center self-stretch px-20 pt-8 pb-0.5 w-full max-md:px-5 max-md:max-w-full'>
        <div className='mt-24 max-w-full w-[996px] max-md:mt-10'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col text-sky-400 max-md:mt-10 max-md:max-w-full w-[80%]'>
                <div className='text-3xl font-bold tracking-wider leading-10 capitalize max-md:max-w-full font-reem'>
                  About Us
                </div>
                <div className='mt-6 text-4xl font-semibold max-md:max-w-full font-raleway'>
                  Lorem ipsum dolor sit amet
                </div>
                <div className='mt-11 text-base leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
              <img
                loading='lazy'
                srcSet='https://s3-alpha-sig.figma.com/img/a0dd/41a5/dc6befe011a68514e414644fff863090?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aFrhV7PK1OLLpwtyJgfZntcwXeiWjPm9kDQUDrEUQnNuwIC0qdgWBlbbIoIpne-iPVaHWEh5lAjOr0SRRRn1bIFw--VgppSIoIiaxorppmGFJrucCkVy5kbrhR1bBni9kmtcmyCRptD3tAcGdc69bL-cbGHT1wf6AP9hrlqnaKVOZ-nGbXNpW9Ta~JYNWHHFslrYDRTQV4uBeP~xR3-4oYveI8-Vz~8VeEJ6CBnfi4fdxQztzPffJxsFiucn6dzVLc634JRY68HjAxkwzkID7Qkn6SPOauDsNWphnHnq~JAosfneZEhFhyELsoVdYH5J07YkwLRufZOw0acEBrWBaw__'
                className='grow aspect-[1.27] max-md:mt-10 max-md:max-w-full rounded-xl w-[454px] h-[357px]'
              />
            </div>
          </div>
        </div>
      </div>
      <CountUpComponent />
      <div className='mt-20 max-w-full w-[965px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow px-5 mt-11 max-md:mt-10 max-md:max-w-full'>
              <div className='text-4xl font-semibold text-sky-400 max-md:max-w-full font-raleway'>
                Our Mission
              </div>
              <div className='mt-32 text-base leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col px-5 max-md:mt-9 max-md:max-w-full'>
              <div className='text-base leading-5 text-slate-900 max-md:max-w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
              </div>
              <div className='self-center mt-32 text-4xl font-semibold text-sky-400 max-md:mt-10 font-raleway'>
                Our Vision
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-20 text-4xl font-semibold leading-10 text-center text-sky-400 max-md:mt-10 max-md:max-w-full '>
        Get to know our team
      </div>
      <div className='mt-5 px-20 text-base leading-5 text-center text-slate-900 max-md:max-w-full w-[80%]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      </div>
      <div className='px-5 max-w-full w-[915px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='w-full flex space-x-12 overflow-x-scroll p-12 snap-x snap-mandatory mt-20 '>
            <AboutUsCard />
            <AboutUsCard />
            <AboutUsCard />
          </div>
        </div>
      </div>
      <div className='mt-40 text-xs font-semibold tracking-wide text-emerald-600 uppercase max-md:mt-10'>
        Frequently Asked Questions
      </div>
      <div className='mt-5 text-4xl font-semibold leading-10 text-center mb-20 text-sky-400 max-md:max-w-full'>
        You've got questions. we've got answers.
        <div className='flex flex-col p-8 mt-16 max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10'>
          <div className='flex gap-2.5 justify-between text-2xl  font-semibold leading-8 text-sky-400 rounded-xl max-md:flex-wrap max-md:max-w-full'>
            <Accordion />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

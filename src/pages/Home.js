import React from 'react';
import step1 from '../components/assets/Home/step1.svg';
import step2 from '../components/assets/Home/step2.svg';
import step3 from '../components/assets/Home/step3.svg';
import step4 from '../components/assets/Home/step4.svg';
import step5 from '../components/assets/Home/step5.svg';
import money from '../components/assets/Home/Money.svg';
import delivery from '../components/assets/Home/delivery.svg';
import green from '../components/assets/Home/green.svg';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import CountUpComponent from '../components/CountUp';
import CarouselComponent from '../components/Carousel';
import Card from '../components/Card';
import Newsletter from '../components/Newsletter';

function Home() {
  return (
    <div className='flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full'>
      <div className='mt-12 w-full max-w-[1080px] max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[38%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow px-1.5 pt-1.5 pb-6 w-full text-base font-medium text-sky-400 bg-white rounded-3xl shadow-sm max-md:max-w-full'>
              <div className='flex gap-5 whitespace-nowrap bg-white rounded-2xl border-solid border-[3px] border-neutral-100 text-slate-900 max-md:flex-wrap max-md:max-w-full'>
                <div className='justify-center items-start px-16 py-2.5 rounded-2xl bg-neutral-100 max-md:pr-5 max-md:pl-6'>
                  Traveler
                </div>
                <div className='flex-auto my-auto text-center'>Shipper</div>
              </div>
              <div className='flex gap-5 justify-between py-2.5 pr-3 pl-10 mt-12 mr-4 ml-5 max-w-full bg-neutral-100 rounded-[41px] w-[420px] max-md:pl-5 max-md:mx-2.5 max-md:mt-10'>
                <div className='my-auto'>Pickup Place</div>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/4a417873fe7c330c8c9d2a6709c305c10289e9ca5ba387e35ff92f4019b342b8?'
                  className='shrink-0 aspect-square w-[33px]'
                />
              </div>

              <div className='justify-center items-start px-10 py-5 mt-7 mr-4 ml-5 bg-neutral-100 rounded-[41px] max-md:px-5 max-md:mx-2.5'>
                Drop place
              </div>
              <div className='flex gap-5 justify-between py-5 pr-5 pl-10 mt-6 mr-4 ml-5 max-w-full bg-neutral-100 rounded-[41px] w-[420px] max-md:pl-5 max-md:mx-2.5'>
                <div className='my-auto'>Pref Date </div>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/4421f82590a81a7dbfa7765561e7110ef14439bb2784910244cb15bc90e6f8a4?'
                  className='shrink-0 aspect-square w-[18px]'
                />
              </div>
              <div className='justify-center items-center self-center px-16 py-7 mt-16 max-w-full text-base font-bold tracking-wide text-center text-white bg-sky-400 rounded-[29px] w-[278px] max-md:px-5 max-md:mt-10'>
                Search Now
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full'>
            <div className='justify-center items-start self-stretch px-12 py-11 my-auto w-full text-5xl font-bold bg-sky-400 max-w-[774px] min-h-[244px] tracking-widest text-white capitalize leading-[54px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]'>
              Send a package, carry a package
            </div>
          </div>
        </div>
      </div>
      <div className='self-start mt-32 ml-36 text-4xl font-semibold text-sky-400 max-md:mt-10 max-md:ml-2.5'>
        How it works
      </div>
      <div className='mt-12  text-base text-slate-900 max-md:mt-10 max-md:max-w-full'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. 
      </div>
      <div className='mt-16 max-w-full w-[1131px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow text-slate-900 max-md:mt-10'>
              <img loading='lazy' src={step1} />
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow text-slate-900 max-md:mt-10'>
              <img loading='lazy' src={step2} />
            </div>
          </div>

          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow text-slate-900 max-md:mt-10'>
              <img loading='lazy' src={step3} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-28 max-w-full w-[740px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
            <img loading='lazy' src={step4} />
          </div>
          <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
            <img loading='lazy' src={step5} />
          </div>
        </div>
      </div>
      <div className='mt-32 w-full max-w-[1236px] max-md:mt-10 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-5 justify-center px-4 py-6 w-full text-xl font-semibold leading-6 bg-sky-50 rounded-[32px] text-slate-900 max-md:mt-10'>
              <img
                loading='lazy'
                src={money}
                className='shrink-0 aspect-square w-[84px]'
              />
              <div className='self-start'>Money based</div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-5 justify-center px-4 py-6 w-full text-xl font-semibold leading-6 bg-sky-50 rounded-[32px] text-slate-900 max-md:mt-10'>
              <img
                loading='lazy'
                src={delivery}
                className='shrink-0 aspect-square w-[84px]'
              />
              <div>Guaranteed fastest delivery</div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex grow gap-5 justify-center px-4 py-6 w-full text-xl font-semibold leading-6 bg-sky-50 rounded-[32px] text-slate-900 max-md:mt-10'>
              <img
                loading='lazy'
                src={green}
                className='shrink-0 aspect-square w-[84px]'
              />
              <div className='self-start'>Go green</div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex gap-5 justify-between mt-6 max-w-full text-base text-center text-slate-900 w-[1127px] max-md:flex-wrap'>
        <div className='w-[292px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className='w-[292px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
        <div className='w-[292px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </div>
      </div>

      <CountUpComponent />

      <div className='text-4xl font-medium mt-20 text-center text-sky-400 max-md:max-w-full'>
        What Our Clients Say About Us
      </div>

      <div className='w-full flex space-x-12 overflow-x-scroll p-12 snap-x snap-mandatory mt-10 mb-10 '>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      {/* <div className='flex gap-5 justify-between max-w-[430px] mb-10'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/f2af070893427b2b16e9d9d6744f2efad484b50ca7c7fd8ca73494e65409938b?'
          className='shrink-0 w-10 aspect-square'
        />
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/b8779b961abdf423a85e7a0ba6ddfa561353928e3796d787476f811d15934b98?'
          className='shrink-0 w-10 aspect-square'
        />
      </div> */}

      <div className='max-w-[996px] mt-20'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col px-5 text-sky-400 max-md:mt-10 max-md:max-w-full'>
              <div className='text-3xl font-bold tracking-wider leading-10 capitalize max-md:max-w-full'>
                Who are we
              </div>
              <div className='mt-6 text-4xl font-semibold max-md:max-w-full'>
                Lorem ipsum dolor sit amet
              </div>
              <div className='mt-11 text-base leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full mb-[150px]'>
            <img
              loading='lazy'
              srcSet='https://s3-alpha-sig.figma.com/img/a0dd/41a5/dc6befe011a68514e414644fff863090?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aFrhV7PK1OLLpwtyJgfZntcwXeiWjPm9kDQUDrEUQnNuwIC0qdgWBlbbIoIpne-iPVaHWEh5lAjOr0SRRRn1bIFw--VgppSIoIiaxorppmGFJrucCkVy5kbrhR1bBni9kmtcmyCRptD3tAcGdc69bL-cbGHT1wf6AP9hrlqnaKVOZ-nGbXNpW9Ta~JYNWHHFslrYDRTQV4uBeP~xR3-4oYveI8-Vz~8VeEJ6CBnfi4fdxQztzPffJxsFiucn6dzVLc634JRY68HjAxkwzkID7Qkn6SPOauDsNWphnHnq~JAosfneZEhFhyELsoVdYH5J07YkwLRufZOw0acEBrWBaw__'
              className='grow aspect-[1.27] max-md:mt-10 max-md:max-w-full w-[454px] h-[357px] mb-10 rounded-xl'
            />
          </div>
        </div>
      </div>

      <Newsletter />
    </div>
  );
}

export default Home;

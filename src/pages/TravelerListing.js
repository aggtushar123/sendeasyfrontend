import React, { useEffect } from 'react';
import Traveler from '../components/Traveler';
import travelerListing from '../components/assets/TravelerListing/TravelerListing.svg';
import { motion } from 'framer-motion';
import ListingLogo from '../components/assets/TravelerListing/ListingLogo.svg';
import searchButton from '../components/assets/TravelerListing/SearchButton.svg';
import SortPrice from '../components/SortPrice';
import location from '../components/assets/Home/location.svg';
import kg from '../components/assets/TravelerListing/kg.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTravelerListings } from '../features/listing/listingSlice';

const TravelerListing = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  // const routeChange = () => {
  //   let path = `/luggageListing`;
  //   navigate(path);
  // };

  useEffect(() => {
    dispatch(fetchTravelerListings());
  }, [dispatch]);

  return (
    <div className='flex flex-col pt-8 pb-20 rounded-[29px]'>
      <div className='flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full'>
        <div className='mt-7 w-full max-w-[1441px] max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col   w-2/5 max-md:ml-0 max-md:w-full'>
              <div className='self-stretch my-auto max-md:mt-10 max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                  <div className='flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                      className='text-8xl font-bold text-sky-400 max-md:mt-2.5 max-md:text-4xl ml-12'
                    >
                      Traveler
                      <br />
                      <span className='text-emerald-600'>Listing</span>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full'>
              <motion.div
                initial={{ opacity: 0, x: '100%' }}
                whileInView={{ opacity: 1, x: '0%' }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className='flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 min-h-[538px] max-md:px-5 max-md:mt-10 max-md:max-w-full'
              >
                <img
                  loading='lazy'
                  src={travelerListing}
                  className='object-cover absolute inset-0 size-full'
                />
              </motion.div>
            </div>
          </div>
        </div>
        {/* <div className='flex gap-5 mt-12 max-w-full  w-[1147px] max-md:flex-wrap max-md:mt-10'>
          <div className='relative'>
            <input
              placeholder='Search Destination'
              className='flex grow gap-5 px-24 py-4 mt-3  tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950 w-[602px]'
            />

            <Link>
              <img
                loading='lazy'
                src={searchButton}
                className='z-10 shrink-0 self-stretch my-auto aspect-square w-[70px] left-[540px] top-[6px] absolute '
              />
            </Link>
          </div>

          <div className='relative'>
            {' '}
            <button
              onClick={routeChange}
              className='justify-center px-16 py-3 mt-3 text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'
            >
              Have Luggage Space
            </button>
          </div>

          <div className='relative'>
            {' '}
            <SortPrice />
          </div>
        </div> */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='flex gap-5 px-5 mt-16 max-md:flex-wrap max-md:mt-10 '
        >
          <div className='grow mt-5 mr-5 font-medium text-stone-300'>
            Filter
          </div>

          <div className='relative '>
            <input
              placeholder='Destination Location'
              className='flex grow gap-5 px-8 py-6  text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950 w-[280px]'
            />

            <img
              loading='lazy'
              src={location}
              className='shrink-0 aspect-square w-[50px] z-10  self-stretch my-auto left-[220px] top-[6px] absolute'
            />
          </div>
          <div className='relative '>
            <input
              placeholder='Source Location'
              className='flex grow gap-5 px-8 py-6  text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950 w-[280px]'
            />

            <img
              loading='lazy'
              src={location}
              className='shrink-0 aspect-square w-[50px] z-10  self-stretch my-auto left-[220px] top-[6px] absolute'
            />
          </div>

          <div className='relative '>
            <input
              type='number'
              placeholder='Available Luggage Space'
              className='flex grow gap-5 px-8 py-6  text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950 w-[280px]'
            />

            <img
              loading='lazy'
              src={kg}
              className='shrink-0 aspect-square w-[50px] z-10  self-stretch my-auto left-[220px] top-[22px] absolute size-5'
            />
          </div>

          <div className='relative'>
            {' '}
            <input
              type='date'
              className='flex grow gap-5 px-5 py-6 w-auto text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950'
            />
          </div>
        </motion.div>

        <div>
          <Traveler />
        </div>
      </div>
    </div>
  );
};

export default TravelerListing;

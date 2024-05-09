import React,  {  useEffect } from 'react';
import { Link } from 'react-router-dom';
import Traveler from '../components/Traveler';
import location from '../components/assets/Home/location.svg';
import kg from '../components/assets/TravelerListing/kg.svg';
import luggageListing from '../components/assets/TravelerListing/LuggageListing.svg';
import ListingLogo from '../components/assets/TravelerListing/ListingLogo.svg';
import searchButton from '../components/assets/TravelerListing/SearchButton.svg';
import Dropdown from '../components/GoToListingDropdown';
import SortPrice from '../components/SortPrice';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchLuggageListings } from "../features/listing/listingSlice";

const LuggageListing = () => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const { luggageListings, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );
  console.log(luggageListings);
  const routeChange = () => {
    let path = `/travelerListing`;
    navigate(path);
  };

  useEffect(() => {
    dispatch(fetchLuggageListings());
  }, [dispatch]);
  return (
    <div className='flex flex-col pt-8  rounded-[29px]'>
      <div className='flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full'>
        <div className='mt-7 w-full max-w-[1441px] max-md:max-w-full'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col   w-2/5 max-md:ml-0 max-md:w-full'>
              <div className='self-stretch my-auto max-md:mt-10 max-md:max-w-full'>
                <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
                  <div className='flex flex-col w-[19%] max-md:ml-0 max-md:w-full'>
                    <img
                      loading='lazy'
                      src={ListingLogo}
                      className='shrink-0 mt-1 aspect-[1.16] w-[85px] max-md:mt-3.5'
                    />
                  </div>
                  <div className='flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full'>
                    <div className='text-8xl font-bold text-sky-400 max-md:mt-2.5 max-md:text-4xl'>
                      Luggage
                      <br />
                      <span className='text-emerald-600'>Listing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full'>
              <div className='flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 min-h-[538px] max-md:px-5 max-md:mt-10 max-md:max-w-full'>
                <img
                  loading='lazy'
                  src={luggageListing}
                  className='object-cover absolute inset-0 size-full'
                />
              </div>
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
              Want To Ship Items
            </button>
          </div>

          <div className='relative'>
            {' '}
            <SortPrice />
          </div>
        </div> */}

        <div className='flex gap-5 px-5 mt-16 max-md:flex-wrap max-md:mt-10'>
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
        </div>

        <div>
          <Traveler />
        </div>
        <button className='justify-center items-center px-16 py-5 mt-28 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10'>
          See more
        </button>
      </div>
    </div>
  );
};

export default LuggageListing;

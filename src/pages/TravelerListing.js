import React from "react";
import {Link} from 'react-router-dom'
import Traveler from "./Traveler";
import travelerListing from '../components/assets/TravelerListing/TravelerListing.svg'
import ListingLogo from '../components/assets/TravelerListing/ListingLogo.svg'
import searchButton from '../components/assets/TravelerListing/SearchButton.svg'

const TravelerListing = () => {
  return (
    <div className="flex flex-col pt-8 bg-white rounded-[29px]">
      <div className="flex flex-col items-center px-20 w-full max-md:px-5 max-md:max-w-full">
        <div className="mt-7 w-full max-w-[1441px] max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col   w-2/5 max-md:ml-0 max-md:w-full">
              <div className="self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                    <img
                      loading="lazy"
                      src={ListingLogo}
                      className="shrink-0 mt-1 aspect-[1.16] w-[85px] max-md:mt-3.5"
                    />
                  </div>
                  <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="text-8xl font-bold text-sky-400 max-md:mt-2.5 max-md:text-4xl">
                      Traveler
                      <br />
                      <span className="text-emerald-600">Listing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
              <div className="flex overflow-hidden relative flex-col grow justify-center items-center px-16 py-20 min-h-[538px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                <img
                  loading="lazy"
                  src={travelerListing}
                  className="object-cover absolute inset-0 size-full"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-start mt-12 max-w-full font-medium w-[920px] max-md:flex-wrap max-md:mt-10">
          <div className="flex gap-4 items-center pl-10 mt-4 text-base border-white border-solid bg-neutral-100 border-[3px] rounded-[41px] text-stone-300 max-md:flex-wrap max-md:max-w-full">
            <input className="flex-auto self-stretch my-auto w-[300px]" type="text" placeholder="Search travelers"/>
              
        <Link>
        <img
              loading="lazy"
              src={searchButton}
              className="z-10 shrink-0 self-stretch my-auto aspect-square w-[70px]"
            />
        </Link>
            
          </div>
          <button className="justify-center px-6 py-2 mt-8 text-xl text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5">
            Have luggage space
          </button>
          <div className="justify-center flex gap-3 self-stretch px-4 py-7 text-xs text-center tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950">
            <div className="grow">Sort: Price Low to High</div>
            <img
              loading="lazy"
              src=""
              className="shrink-0 my-auto aspect-[1.79] w-[9px]"
            />
          </div>
        </div>
        <div className="flex gap-5 mt-12 max-md:flex-wrap max-md:mt-10 w-[950px]">
          <div className="grow my-auto text-base font-medium text-stone-300">
            Filter
          </div>
          <div className="flex gap-2 px-4 py-2 text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950">
            <div className="flex-auto my-auto">destination location</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c07de4edeb3ac1ee32e5a543167e5deb39b60719ad723b2a52f9282fe808343d?"
              className="shrink-0 aspect-square w-[50px]"
            />
          </div>
          <div className="flex gap-5 justify-between px-4 py-2.5 text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950">
            <div className="my-auto">source location</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92ee52690ef9818bb372d1e3848a55c30563a079c441fe7da5b2b0f35e1f92c0?"
              className="shrink-0 aspect-square w-[50px]"
            />
          </div>
          <div className="flex gap-5 px-5 py-7 bg-gray-100 rounded-3xl">
            <div className="flex-auto text-xs tracking-wide capitalize text-blue-950">
              available luggage space
            </div>
            <div className="self-start text-lg font-semibold tracking-wide text-sky-400">
              KG
            </div>
          </div>
          <div className="flex gap-5 justify-between px-4 py-6 text-xs tracking-wide capitalize bg-gray-100 rounded-3xl text-blue-950">
            <input type="date" className="my-auto" placeholder="Date Range"/>
            
          </div>
        </div>
        <div>
         <Traveler/>
        </div>
        <div className="justify-center items-center px-16 py-5 mt-28 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
          See more
        </div>
      </div>
    </div>
  );
}


export default TravelerListing;
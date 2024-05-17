import React from "react";

const LuggageTrips = ({ luggage }) => {
  return (
    <div className="px-7 pt-6 pb-14 bg-gray-100 max-w-[885px] rounded-[38px] max-md:pl-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-5 justify-between self-stretch my-auto leading-[158.5%] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-2 whitespace-nowrap">
            <div className="text-xs">From:</div>
            <div className="mt-3.5 text-xl font-semibold">USA</div>
          </div>
          <div className="flex flex-col py-2 whitespace-nowrap">
            <div className="text-xs">Destination:</div>
            <div className="mt-3.5 text-xl font-semibold">India</div>
          </div>
          <div className="flex flex-col py-1.5">
            <div className="text-xs">Before:</div>
            <div className="mt-3.5 text-xl font-semibold">21 Sep 2024</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="text-xs">Available bags:</div>
            <div className="mt-2.5 text-xl font-semibold">2</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="text-xs">Weight:</div>
            <div className="mt-2.5 text-xl font-semibold">4 KG</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center leading-[158.5%] max-md:mt-10">
          <div className="text-xs text-sky-400">Expected to pay</div>
          <div className="mt-2.5 text-xl font-semibold text-sky-400">
            $ 50
          </div>
          <div className="flex gap-2.5 self-stretch mt-8">
            <div className="grow my-auto text-xs text-slate-900">
              Item type:
            </div>
            <div className="justify-center px-5 py-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px] max-md:px-5">
              Jewlery
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LuggageTrips;

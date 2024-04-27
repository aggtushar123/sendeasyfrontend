import React from "react";
import date from "../components/assets/Home/date.svg";
function CreateLuggage() {
  return (
    <div className="flex justify-center items-center pb-20 rounded-[29px] max-md:px-5">
      <div className="flex flex-col mt-10 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
          <span className="font-semibold text-sky-400">Create</span> Traveler
          listing
        </div>
        <div className="flex gap-4 mt-3.5 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[849px] max-md:flex-wrap">
          <button
            type="button"
            className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5"
          >
            Local
          </button>
          <button
            type="button"
            className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5"
          >
            Outstation
          </button>
          <button
            type="button"
            className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5"
          >
            International
          </button>
        </div>

        

        <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
          <div className="flex-auto">
            <div className="flex-auto">Expected time of delivery</div>
            <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
              <input
                type="text"
                className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex-auto">Source Location</div>
            <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
              <input
                type="text"
                className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                alt="icon"
                className="shrink-0 aspect-square w-[50px] cursor-pointer"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
          <div className="flex-auto">
            <div className="flex-auto">Time of dept</div>
            <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
              <input
                type="text"
                className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="flex-auto">
            <div className="flex-auto">Items you won’t want to carry</div>
            <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
              <input
                type="text"
                className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                alt="icon"
                className="shrink-0 aspect-square w-[50px] cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col self-center mt-24 max-w-full w-[693px] max-md:mt-10">
          <div className="justify-center items-center self-center px-16 py-5 max-w-full text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] w-[349px] max-md:px-5">
            Create Now
          </div>
          <div className="mt-40 text-lg font-semibold tracking-wide text-rose-500 max-md:mt-10 max-md:max-w-full">
            Disclaimer{" "}
          </div>
          <div className="flex gap-5 mt-2.5 text-base tracking-wide text-center max-md:flex-wrap">
            <div className="flex-auto text-rose-500">
              These Items are prohibited one Flight
            </div>
            <div className="flex-auto text-sky-400 underline">
              Visit here to learn more
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="mt-11 w-full aspect-[2.56] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default CreateLuggage;

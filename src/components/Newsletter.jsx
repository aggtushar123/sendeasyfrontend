import React from "react";

function Newsletter() {
  return (
    <div className="flex flex-col justify-center text-lg font-bold leading-5 max-w-[764px] text-slate-500">
      <div className="flex overflow-hidden relative flex-col items-end px-20 py-16 w-full min-h-[396px] max-md:px-5 max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/08ea1ec64f1a2c31b3cddb9d5151d303f4903ecbbd3d3e2c66f3388c6f3d85cb?"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative text-2xl leading-9 text-indigo-950">
          Subscribe to our newsletter
        </div>
        <div className="relative mt-6 leading-8 w-[360px]">
          Fill your email below to join our marketing email newsletter today!
        </div>
        <div className="relative justify-center items-start px-5 py-6 mt-9 max-w-full bg-white border border-gray-100 border-solid shadow-sm rounded-[60px] w-[360px] max-md:px-5">
          Enter your email
        </div>
        <div className="relative justify-center items-center px-10 pt-5 pb-5 mt-6 max-w-full text-center text-white whitespace-nowrap bg-emerald-600 shadow-sm rounded-[56px] w-[360px] max-md:px-5">
          Done
        </div>
      </div>
    </div>
  );
}


export default Newsletter
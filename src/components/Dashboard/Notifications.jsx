import * as React from "react";

function Notifications() {
  return (
    <div className="flex z-10 flex-col self-center w-full max-w-[1600px] max-md:max-w-full">
      <div className="self-center mt-28 w-full max-w-[1205px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[16%] max-md:ml-0 max-md:w-full" />
          <div className="flex flex-col ml-5 w-[84%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center py-12 pr-20 pl-8 w-full font-medium text-sky-400 bg-neutral-100 rounded-[39px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
              <div className="self-stretch text-2xl leading-8 uppercase tracking-[8.81px] max-md:mr-1.5 max-md:max-w-full">
                Notification
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="mt-6 max-w-full aspect-[6.25] w-[808px]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="mt-4 max-w-full aspect-[6.25] w-[808px]"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="mt-4 max-w-full aspect-[6.25] w-[808px]"
              />
              <div className="justify-center items-center px-16 py-5 mt-14 max-w-full text-xl text-center bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
                See more
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default Notifications

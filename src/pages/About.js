import * as React from "react";



function About
() {
  return (
    <div className="mt-24 max-w-full w-[996px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col text-sky-400 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-bold tracking-wider leading-10 capitalize max-md:max-w-full">
              About Us
            </div>
            <div className="mt-6 text-4xl font-semibold max-md:max-w-full">
              Lorem ipsum dolor sit amet
            </div>
            <div className="mt-11 text-base leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. 
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            srcSet="..."
            className="grow w-full aspect-[1.27] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
}



export default About

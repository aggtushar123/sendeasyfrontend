import  React from "react";
import Accordion from "../components/Accordian";

function About() {
  return (
    <div className="flex flex-col items-center  rounded-[29px]">
      <div className="flex flex-col items-center self-stretch px-20 pt-8 pb-0.5 w-full max-md:px-5 max-md:max-w-full">
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
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. 
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
      </div>
      <div className="mt-20 max-w-full w-[1140px] max-md:pr-5 max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 font-semibold text-center text-emerald-600 rounded-2xl max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd9902efdd84f4770e7420b90c2b9e51b8a25ec75a0e12f3e659259e130f1587?"
                className="w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl leading-7">Eco Friendly</div>
              <div className="mt-2.5 text-6xl leading-[78.08px] max-md:text-4xl">
                100%
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-20 font-semibold text-center text-emerald-600 rounded-2xl max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e45292c297a50c80de5371389ee635892ec1dfe917a7ac3b5a6064e583d0c17?"
                className="w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl leading-7">Satisfied Client</div>
              <div className="mt-2.5 text-6xl leading-[78.08px] max-md:text-4xl">
                100+
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 font-semibold text-center text-emerald-600 rounded-2xl max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0409997c80796cc93f3602fcb137ad3cbfc83ca7b1155256660f5e1439d4ac1a?"
                className="w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl leading-7">
                Years of Experience
              </div>
              <div className="self-stretch mt-2.5 text-6xl leading-[78.08px] max-md:text-4xl">
                11 Years
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 max-w-full w-[965px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 mt-11 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-semibold text-sky-400 max-md:max-w-full">
                Our Mission
              </div>
              <div className="mt-32 text-base leading-5 text-slate-900 max-md:mt-10 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 max-md:mt-9 max-md:max-w-full">
              <div className="text-base leading-5 text-slate-900 max-md:max-w-full">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. 
              </div>
              <div className="self-center mt-32 text-4xl font-semibold text-sky-400 max-md:mt-10">
                Our Vision
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 text-4xl font-semibold leading-10 text-center text-sky-400 max-md:mt-10 max-md:max-w-full">
        Get to know our team
      </div>
      <div className="mt-5 px-20 text-base leading-5 text-center text-slate-900 max-md:max-w-full">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
      </div>
      <div className="px-5 mt-16 max-w-full w-[915px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pb-9 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="self-stretch w-full aspect-[0.98]"
              />
              <div className="mt-8 text-2xl font-semibold leading-8 text-slate-900">
                John Doe
              </div>
              <div className="mt-2.5 text-xl leading-7 text-sky-400">
                Founder
              </div>
              <div className="flex gap-5 mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0909c58c43f22228141dc1bc20449a8aa705552af7e260664b0943b88c31f306?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/bfef91c74d2acfcb42d22bf31df156320d13e8cc12ff5c87580efdeb28e590b2?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/863f8f81cc1fa7a6583a4544243b4885917dd4c657794ac25fb4366f9802326a?"
                  className="shrink-0 w-8 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pb-9 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="self-stretch w-full aspect-[0.98]"
              />
              <div className="mt-8 text-2xl font-semibold leading-8 text-slate-900">
                John Doe
              </div>
              <div className="mt-2.5 text-xl leading-7 text-sky-400">
                Co Founder
              </div>
              <div className="flex gap-5 mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b79f92538e28c4e52a2ae94b20222b4a6580d382d12442abc3881bb4c355b0d8?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b1540d16e306bb3ae98e84080df3f027e07dab8108d8c4931acdeee4aba12eba?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5dddcde80791a4be7bb034e13837e79211f7da6e7d0123d220eeff7e40dd519?"
                  className="shrink-0 w-8 aspect-square"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center pb-9 max-md:mt-8">
              <img
                loading="lazy"
                srcSet="..."
                className="self-stretch w-full aspect-[0.98]"
              />
              <div className="mt-8 text-2xl font-semibold leading-8 text-slate-900">
                John Doe
              </div>
              <div className="mt-2.5 text-xl leading-7 text-sky-400">CEO</div>
              <div className="flex gap-5 mt-8">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8bbb3a10812c511dc52fd76a70f75d017701973189afb3459237bfb583a45f3a?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1a888d919716b42ecdbd6be5c0ad58b461bdd9e773b0c79a1e1482ffd1912ab8?"
                  className="shrink-0 w-8 aspect-square"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a71f130cdd97db7761a2c329eedb0ebaebb49b15656d7bb50c4ae632e97a13d?"
                  className="shrink-0 w-8 aspect-square"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-40 text-xs font-semibold tracking-wide text-emerald-600 uppercase max-md:mt-10">
        Frequently Asked Questions
      </div>
      <div className="mt-5 text-4xl font-semibold leading-10 text-center mb-20 text-sky-400 max-md:max-w-full">
        You've got questions. we've got answers.
        <div className="flex flex-col p-8 mt-16 max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-2.5 justify-between text-2xl  font-semibold leading-8 text-sky-400 rounded-xl max-md:flex-wrap max-md:max-w-full">
          <Accordion/>
        </div>
          
        </div>
      </div>
    </div>
  );
}


export default About
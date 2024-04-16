import * as React from "react";

function Home1() {
  return (
    <div className="flex flex-col items-center pt-20 rounded-[29px]">
      <div className="flex flex-col items-center px-5 mt-5 w-full max-w-[1307px] max-md:mt-10 max-md:max-w-full">
        <div className="self-stretch max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[38%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-1.5 pt-1.5 pb-6 w-full text-base font-medium text-sky-400 bg-white rounded-3xl shadow-sm max-md:max-w-full">
                <div className="flex gap-5 whitespace-nowrap bg-white rounded-2xl border-solid border-[3px] border-neutral-100 text-slate-900 max-md:flex-wrap max-md:max-w-full">
                  <div className="justify-center items-start px-16 py-2.5 rounded-2xl bg-neutral-100 max-md:pr-5 max-md:pl-6">
                    Traveler
                  </div>
                  <div className="flex-auto my-auto text-center">Shipper</div>
                </div>
                <div className="flex gap-5 justify-between px-10 py-2.5 mx-4 mt-12 bg-neutral-100 rounded-[41px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto">Pickup Place</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4a417873fe7c330c8c9d2a6709c305c10289e9ca5ba387e35ff92f4019b342b8?"
                    className="shrink-0 aspect-square w-[33px]"
                  />
                </div>
                <div className="justify-center items-start px-10 py-5 mx-4 mt-7 bg-neutral-100 rounded-[41px] max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  Drop place
                </div>
                <div className="flex gap-5 justify-between px-11 py-5 mx-4 mt-6 bg-neutral-100 rounded-[41px] max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
                  <div className="my-auto">Pref Date </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4421f82590a81a7dbfa7765561e7110ef14439bb2784910244cb15bc90e6f8a4?"
                    className="shrink-0 aspect-square w-[18px]"
                  />
                </div>
                <div className="justify-center items-center self-center px-16 py-7 mt-16 max-w-full text-base font-bold tracking-wide text-center text-white bg-sky-400 rounded-[29px] w-[303px] max-md:px-5 max-md:mt-10">
                  Search Now
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[62%] max-md:ml-0 max-md:w-full">
              <div className="justify-center items-start self-stretch px-12 py-11 bg-sky-300 my-auto w-full text-5xl font-bold tracking-widest text-white capitalize leading-[54px] max-md:px-5 max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                Send a package, carry a package
              </div>
            </div>
          </div>
        </div>
        <div className="self-start mt-32 ml-7 text-4xl font-semibold text-sky-400 max-md:mt-10 max-md:ml-2.5">
          How it works
        </div>
        <div className="self-end mt-12 text-base text-slate-900 max-md:mt-10 max-md:max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. 
        </div>
        <div className="mt-16 max-w-full w-[1131px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-slate-900 max-md:mt-10">
                <div className="flex z-10 gap-1.5 self-start py-2 ml-7 text-lg whitespace-nowrap bg-sky-200 rounded-lg max-md:ml-2.5">
                  <div>Step</div>
                  <div className="font-semibold">1</div>
                </div>
                <div className="flex flex-col px-11 pt-7 pb-14 text-xl font-semibold text-center bg-sky-200 rounded-[32px] max-md:px-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea24fbb796d6f418f1bae5861598af028ae555216a9ccd3e8e78dc0dca406624?"
                    className="w-full aspect-[1.23]"
                  />
                  <div className="self-center mt-7 w-[307px]">
                    List for sending/carrying luggage
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow text-slate-900 max-md:mt-10">
                <div className="flex z-10 gap-1.5 self-start py-2 ml-6 text-lg whitespace-nowrap bg-sky-200 rounded-lg max-md:ml-2.5">
                  <div>Step</div>
                  <div className="font-semibold">2</div>
                </div>
                <div className="flex flex-col px-11 py-14 text-xl font-semibold text-center bg-sky-200 rounded-[32px] max-md:px-5">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="self-center mx-5 aspect-[1.41] w-[217px]"
                  />
                  <div className="mt-16 max-md:mt-10">
                    Choose the best match and send invite
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch px-7 pb-7 m-auto w-full bg-sky-200 rounded-[32px] max-md:px-5 max-md:mt-10">
                <div className="flex z-10 gap-1.5 self-start py-2 mt-0 text-lg whitespace-nowrap bg-sky-200 rounded-lg text-slate-900">
                  <div>Step</div>
                  <div className="font-semibold">3</div>
                </div>
                <div className="flex gap-5 justify-between self-center mt-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0fa29571283f362eb892dbbe0bb08d2c5e1f7362bfc9e9473d7a2c3246436e7f?"
                    className="shrink-0 aspect-[0.48] w-[95px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6f3869f6e1e0bdc9b15c5db18a521a394a8785d05704ebc77d2181594fef75a9?"
                    className="shrink-0 self-start mt-5 aspect-[0.41] w-[72px]"
                  />
                </div>
                <div className="mt-8 text-xl font-semibold text-center text-slate-900">
                  Luggage handover from sender to carrier. <br />
                  Carrier starts trip
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-28 max-w-full w-[740px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 pb-7 mx-auto w-full bg-sky-200 rounded-[32px] max-md:px-5 max-md:mt-10">
                <div className="flex z-10 gap-1.5 self-start py-2 mt-0 text-lg whitespace-nowrap bg-sky-200 rounded-lg text-slate-900">
                  <div>Step</div>
                  <div className="font-semibold">4</div>
                </div>
                <div className="flex gap-5 justify-between self-center mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f260558337c2a485af2268392cdde09846327c7c11b8e5a8cc3b73beb35902b?"
                    className="shrink-0 self-start aspect-[0.4] w-[77px]"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dff3af88d2f04fa14d53b1b7c134dd96b8fc9bc96a91c371ff07648bc9724c3?"
                    className="shrink-0 max-w-full aspect-[0.51] w-[100px]"
                  />
                </div>
                <div className="mt-3 text-xl font-semibold text-center text-slate-900">
                  Luggage handover from sender to carrier. <br />
                  Sender confirms delivery
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow items-start pr-14 pb-14 pl-6 mx-auto w-full bg-sky-200 rounded-[32px] text-slate-900 max-md:px-5 max-md:mt-10">
                <div className="flex z-10 gap-1.5 py-2 mt-0 text-lg whitespace-nowrap bg-sky-200 rounded-lg">
                  <div>Step</div>
                  <div className="font-semibold">5</div>
                </div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-center mt-9 max-w-full aspect-[1.43] w-[202px]"
                />
                <div className="mt-16 text-xl font-semibold text-center max-md:mt-10">
                  Sender makes payment. Sender/receiver ends trip
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Home1
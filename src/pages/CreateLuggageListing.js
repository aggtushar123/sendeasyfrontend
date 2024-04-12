import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-center px-16 pt-10 pb-20 bg-white rounded-[29px] max-md:px-5">
      <div className="flex flex-row">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/087efe570c0d416145a7f74be73927c629a33b5cd79cef618233b03697bbabe6?"
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
        <div className="flex flex-col w-full max-w-[1388px] max-md:max-w-full">
          <div className="flex flex-col pl-20 mt-16 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
            <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
              <span className="font-semibold text-sky-400">Create</span> Luggage
              listing
            </div>
            <div className="flex gap-4 mt-3.5 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[768px] max-md:flex-wrap">
              <div className="grow justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5">
                Local
              </div>
              <div className="grow justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl border border-sky-400 border-solid max-md:px-5">
                Outstation
              </div>
              <div className="grow justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5">
                ----
              </div>
            </div>
            <div className="flex gap-5 justify-between items-start mt-7 text-xs tracking-wide capitalize whitespace-nowrap text-blue-950 max-md:flex-wrap">
              <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
                <div className="self-start ml-7 max-md:ml-2.5">Title</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f52fe8cc639a51f0a0dd46bdd110f4b5b9812525fb6914eb0717f4cd4dde4f86?"
                  className="self-center aspect-[9.09] w-[475px] max-md:max-w-full"
                />
              </div>
              <div className="flex flex-col grow shrink-0 mt-2 basis-0 w-fit max-md:max-w-full">
                <div className="self-start mr-5 ml-7 max-md:ml-2.5">
                  no of bags
                </div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/20bf60d5c2d4cf4aa765190a597e7d347586190439e8af48e25780d0cc443063?"
                  className="self-center aspect-[9.09] w-[494px] max-md:max-w-full"
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-5 ml-8 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[742px] max-md:flex-wrap">
              <div className="flex-auto pr-52 mr-16">destination location</div>
              <div className="mr-44 ml-16">total weight</div>
            </div>
            <div className="flex gap-5 justify-between max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4ae3382497f7e8c28934404118a0ba0adaa0c63a24b82975607c5d0dc430b9d7?"
                className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ddb29d440f484b4b86ef465dd25a5da3f11f1841ef1d7c8c26b433ac70278b?"
                className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
              />
            </div>
            <div className="flex gap-5 justify-between mt-5 ml-8 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[802px] max-md:flex-wrap">
              <div>source location</div>
              <div className="flex-auto mr-28 ml-52 max-sm:mr-0 max-sm:ml-40">
                names & pics of items
              </div>
            </div>
            <div className="flex gap-5 justify-between max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4d095f4a53d4ab5112f7bdc74b5545ea3d6d6ff91e4d77395f0b740c8e84159?"
                className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
              />
            </div>
            <div className="mt-4 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow mt-8 text-xs tracking-wide capitalize whitespace-nowrap text-blue-950 max-md:mt-9 max-md:max-w-full">
                    <div className="self-start ml-7 max-md:ml-2.5">
                      preferred date range for transport
                    </div>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="self-center -ml-px aspect-[9.09] w-[495px] max-md:max-w-full"
                    />
                    <div className="self-start mt-11 ml-7 max-md:mt-10 max-md:ml-2.5">
                      Type of item
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/be569ac6c646f5d6a563659754d03dda34d709bedd8d7e5852f9f70d92f758f6?"
                      className="self-center aspect-[9.09] w-[490px] max-md:max-w-full"
                    />
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-start -mr-0.5 text-xs tracking-wide capitalize whitespace-nowrap text-blue-950 max-md:mt-8 max-md:max-w-full">
                    <div className="relative flex-col max-w-full w-[428px]">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="absolute inset-0 size-full"
                      />
                      <div className="relative flex-col max-w-full w-[428px]">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="absolute inset-0 size-full"
                        />
                        <div className="relative flex-col max-w-full w-[428px]">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="absolute inset-0 size-full"
                          />
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="max-w-full aspect-[3.45] w-[474px]"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mt-5 ml-7 max-md:ml-2.5">Receiver Name</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a8c4d73ad0d2d6e60ab51f9cd611abad494dee674aa61794eea0bd72ca39dfc?"
                      className="self-center ml-12 aspect-[9.09] w-[513px] max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-5 ml-8 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[759px] max-md:flex-wrap">
              <div className="flex-auto">Minimum Charges (recommmened)</div>
              <div className="mr-40 ml-1">Receiver phone</div>
            </div>
            <div className="flex gap-5 justify-between max-md:flex-wrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b8f5c7a0b3fa095e28eb1d8f4e0f7b9c57e888940dfe36dac1a222421cda6f4f?"
                className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/87a41ca5bf9942f7b97f94d9a16ffdbc47f6c1faac1313fc1add7cd692f7ccb7?"
                className="grow shrink-0 -mr-1 ml-4 aspect-[8.14] basis-0 max-w-[488px] w-fit max-md:max-w-full"
              />
            </div>
            <div className="justify-center items-center self-center px-16 py-5 mt-14 ml-11 max-w-full text-xl font-medium text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
              Create Now
            </div>
          </div>
          <div className="flex flex-col mt-11 ml-28 max-w-full w-[693px] max-md:mt-10">
            <div className="flex gap-5 justify-between items-start max-md:flex-wrap">
              <div className="flex flex-col grow shrink-0 self-start text-rose-500 basis-0 w-fit">
                <div className="text-lg font-semibold tracking-wide">
                  Disclaimer{" "}
                </div>
                <div className="mt-2.5 text-base tracking-wide text-center whitespace-nowrap">
                  These Items are prohibited one Flight
                </div>
              </div>
              <div className="flex-auto self-end mt-6 text-base tracking-wide text-center text-sky-400 underline">
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
    </div>
  );
}



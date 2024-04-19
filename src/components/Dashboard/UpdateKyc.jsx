import * as React from "react";

function UpdateKyc() {
  return (
    <div className="flex flex-col bg-white rounded-[29px]">
      <div className="self-center mt-20 max-w-full w-[926px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
          </div>
          <div className="flex flex-col ml-5 w-[76%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-bold tracking-wide text-blue-950 max-md:max-w-full">
                Profile Details
              </div>
              <div className="flex flex-col justify-center items-start px-4 py-6 mt-5 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f935d634716d8df7f6e187ab4ad79575d845dffc8f2da9a6903421b5ec087b5e?"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>Allison Ekstrom Bothman</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-4 py-6 mt-4 text-sm tracking-wide whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aaf900b4234e0b66298289f25b665bdfb971ef81916c0f64ef3f89e98195adf?"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>allison@gmail.com</div>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start px-4 py-6 mt-4 text-sm tracking-wide capitalize whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f12b5d55e2ee83ea60d60aa2dd9f333a86138efe0dda795d3aceb6f984a91a?"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>+695542385</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between px-5 py-5 mt-4 w-full text-sm bg-gray-100 rounded-3xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 my-auto tracking-wide whitespace-nowrap text-slate-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d77484d2ddda742524b71e88618e772f7c6e50d05768210143bc327bc4e1489?"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>***********</div>
                </div>
                <div className="justify-center px-6 py-2.5 font-semibold text-center text-sky-400 bg-indigo-100 rounded-[31px] max-md:px-5">
                  Change Password
                </div>
              </div>
              <div className="self-end mt-3 text-xs font-semibold tracking-wide leading-5 text-right text-sky-400">
                Show password
              </div>
              <div className="mt-12 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full">
                KYC Document
              </div>
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                KYC (Aadhar, PAN, Voter card, Passport, DL, 10th certificate)
                number
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb411a647a9cc3b9b9ad18eeff8dfebfc5e38c474bcef72cd9766d9e1a52abf?"
                className="self-center aspect-[9.09] w-[636px] max-md:max-w-full"
              />
              <div className="self-start mt-5 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Upload a softcopy
              </div>
              <img
                loading="lazy"
                srcSet="..."
                className="self-center aspect-[9.09] w-[636px] max-md:max-w-full"
              />
              <img
                loading="lazy"
                srcSet="..."
                className="self-center mt-2.5 aspect-[9.09] w-[636px] max-md:max-w-full"
              />
              <div className="flex gap-5 justify-between mt-3.5 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 text-lg font-semibold tracking-wide text-neutral-400">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 aspect-square w-[55px]"
                  />
                  <div className="flex-auto my-auto">Connect to Digilocker</div>
                </div>
                <div className="justify-center items-center self-start px-16 py-5 text-xl font-medium text-center text-white whitespace-nowrap bg-emerald-600 rounded-[31px] max-md:px-5">
                  Verified
                </div>
              </div>
              <div className="mt-20 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full">
                Social Media link
              </div>
              <div className="flex gap-3 mt-6 text-xs font-medium tracking-wide whitespace-nowrap text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <div className="grow justify-center items-start px-6 py-8 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full">
                  https://www.linkedin.com/
                </div>
              </div>
              <div className="flex gap-3 mt-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <div className="grow justify-center items-start px-6 py-8 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full">
                  https://www.facebook.com/
                </div>
              </div>
              <div className="flex gap-3 mt-2.5 text-xs font-medium tracking-wide text-stone-300 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <div className="grow justify-center items-start px-6 py-7 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full">
                  Add Instagram
                </div>
              </div>
              <div className="justify-center self-end px-11 py-4 mt-9 text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5">
                Save Change
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




export default UpdateKyc

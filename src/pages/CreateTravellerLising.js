import * as React from "react";

function CreateTraveller() {
  return (
    <div className="flex flex-col pb-20  rounded-[29px]">
      
      <div className="flex flex-col self-center px-5 mt-9 w-full max-w-[1304px] max-md:max-w-full">
        <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
          <span className="font-semibold text-sky-400">Create</span> Traveler
          listing
        </div>
        <div className="flex gap-4 mt-3.5 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[849px] max-md:flex-wrap max-sm:mx-auto max-sm:w-[967px]">
        <button className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl border  max-md:px-5 max-sm:-mr-px">
            Local
          </button>
          <button className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl border max-md:px-5 max-sm:-mr-px">
            Outstation
          </button>
          <button className="justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl border max-md:px-5 max-sm:-mr-px">
            International
          </button>
        </div>
        <div className="flex gap-5 mt-12 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[817px] max-md:flex-wrap max-md:mt-10">
          <div className="flex-auto pr-52">destination location</div>
          <div className="flex-auto">available luggage space</div>
        </div>
        <div className="flex gap-5 w-full font-semibold max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f16f325aac1dfc536dac73dc28d8ef1bd8ae111ddaa9b1f86d82d35f7acef6?"
            className="grow shrink-0 aspect-[9.09] basis-0 max-w-[567px] w-fit max-md:max-w-full"
          />
          <div className="flex  gap-5 justify-between items-start px-7 pt-7 pb-3.5 bg-gray-100 rounded-3xl max-md:flex-wrap max-md:px-5 max-md:max-w-full max-sm:-ml-0.5">
            <div className="flex flex-col text-blue-950">
              <div className="flex gap-3.5 text-lg tracking-wide whitespace-nowrap">
                <div className="grow">1</div>
                <img
                  loading="lazy"
                  srcSet="..."
                  className="shrink-0 self-start max-w-full border-sky-400 border-solid aspect-[10] border-[5px] stroke-[5px] stroke-sky-400 w-[109px]"
                />
              </div>
              <div className="self-end mt-1.5 text-xs tracking-wide">4 KG</div>
            </div>
            <div className="flex gap-5 justify-between text-lg tracking-wide whitespace-nowrap">
              <div className="text-blue-950">Max</div>
              <div className="text-sky-400">KG</div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between self-center mt-5 w-full text-xs tracking-wide capitalize max-w-[1177px] text-blue-950 max-md:flex-wrap max-md:max-w-full">
          <div>date for Travel</div>
          <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
            <div className="flex-auto">Est Monetary expectation</div>
            <div>Recommended</div>
          </div>
        </div>
        <div className="flex gap-5 text-lg font-semibold tracking-wide max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="..."
            className="grow shrink-0 w-full aspect-[9.09] basis-0 max-w-[689px] max-md:max-w-full"
          />
          <div className="flex overflow-hidden relative flex-col grow shrink-0 justify-center items-end px-16 basis-0 min-h-[70px] w-fit max-md:max-w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bc99ebff8c4ed8cca549bd240b367203c124ded5880a01c9ad7da8eede3cf064?"
              className="object-cover absolute inset-0 size-full"
            />
            <div className="flex relative gap-5 justify-between px-7 py-7 -mr-px bg-gray-100 rounded-3xl max-md:px-5">
              <div className="self-start text-blue-950">120</div>
              <div className="text-sky-400">
                <span className="text-sm">Per kg</span> USD
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-5 mt-5 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[763px] max-md:flex-wrap">
          <div className="flex-auto">Expected time of delivery</div>
          <div>source location</div>
        </div>
        <div className="flex gap-5 max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f67c93f7a1a0ff0a7be026e4a769b3cbe568f81af87f58648be4b222bb924a9?"
            className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f433638d6069d10b0a54c537542bdecc4ec6856122af6a257307453171b4127?"
            className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
          />
        </div>
        <div className="flex gap-5 items-start mt-5 text-xs tracking-wide capitalize text-blue-950 max-md:flex-wrap">
          <div className="flex flex-col flex-1 grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="self-start ml-7 max-md:ml-2.5">Time of dept</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/012669fbd49dbc58d3f1d0ab81f3e99ad95034036f9c9426330bce31f1958426?"
              className="self-center aspect-[9.09] w-[636px] max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col flex-1 grow shrink-0 mt-2 basis-0 w-fit max-md:max-w-full">
            <div className="self-start ml-7 max-md:ml-2.5">
              Items you won’t want to carry
            </div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ad8f599d980772fc36daf9d017bd98fac45fc194226479890e553ef7e0cef45?"
              className="self-center aspect-[9.09] w-[636px] max-md:max-w-full"
            />
          </div>
        </div>
        <div className="justify-center items-center self-center px-16 py-5 mt-24 max-w-full text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
          Create Now
        </div>
        <div className="self-start mt-40 ml-72 text-lg font-semibold tracking-wide text-rose-500 max-md:mt-10 max-md:ml-2.5">
          Disclaimer{" "}
        </div>
        <div className="flex gap-5 self-center mt-2.5 text-base tracking-wide text-center max-md:flex-wrap">
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
          className="self-center mt-11 max-w-full aspect-[2.56] w-[693px] max-md:mt-10"
        />
      </div>
    </div>
  );
}


export default CreateTraveller;
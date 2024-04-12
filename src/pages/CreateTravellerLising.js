import * as React from "react";

function MyComponent() {
  return (
    <div className="flex flex-col items-start pt-10 pb-20 pl-20 bg-white rounded-[29px] max-md:pl-5">
      
      <div className="mt-16 ml-32 text-3xl font-medium tracking-wider capitalize whitespace-nowrap text-slate-900 max-md:mt-10 max-md:ml-2.5">
        <span className="font-semibold text-sky-400">Create</span> Traveler
        listing
      </div>
      <div className="flex gap-4 mt-3.5 ml-32 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[768px] max-md:flex-wrap">
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
      <div className="mt-8 ml-40 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5">
        Title
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/ce70c62d67f5d82a4d788a0113fab624f71b271a90b13d4c78af8a930578b9f6?"
        className="ml-32 max-w-full aspect-[9.09] w-[636px]"
      />
      <div className="flex gap-5 justify-between mt-5 ml-40 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[817px] max-md:flex-wrap">
        <div className="flex-auto">destination location</div>
        <div className="flex-auto">available luggage space</div>
      </div>
      <div className="flex gap-5 justify-between self-center -ml-20 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9874056d18f830c331b8d76dbd10d100fcb10ad301029787e42cea0f6a8730da?"
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65ddb29d440f484b4b86ef465dd25a5da3f11f1841ef1d7c8c26b433ac70278b?"
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-40 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[820px] max-md:flex-wrap">
        <div className="flex-auto">date for transport</div>
        <div className="flex-auto">Est Monetary expectation</div>
      </div>
      <div className="flex gap-5 justify-between self-center ml-7 max-md:flex-wrap">
        <img
          loading="lazy"
          srcSet="..."
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="grow shrink-0 aspect-[12.5] basis-0 w-fit max-md:max-w-full"
        />
      </div>
      <div className="flex gap-5 justify-between mt-5 ml-40 max-w-full text-xs tracking-wide capitalize text-blue-950 w-[763px] max-md:flex-wrap">
        <div className="flex-auto">Expected time of delivery</div>
        <div>source location</div>
      </div>
      <div className="flex gap-5 justify-between self-center -ml-20 max-md:flex-wrap">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7f67c93f7a1a0ff0a7be026e4a769b3cbe568f81af87f58648be4b222bb924a9?"
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5297704c38de451c93eea94bd49d46969ba7cbba34a74d37ce97c7f223982d63?"
          className="grow shrink-0 aspect-[9.09] basis-0 w-fit max-md:max-w-full"
        />
      </div>
      <div className="mt-5 ml-40 text-xs tracking-wide capitalize whitespace-nowrap text-blue-950 max-md:ml-2.5">
        Time of dept
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/012669fbd49dbc58d3f1d0ab81f3e99ad95034036f9c9426330bce31f1958426?"
        className="ml-32 max-w-full aspect-[9.09] w-[636px]"
      />
      <div className="justify-center items-center self-center px-16 py-5 mt-16 max-w-full text-xl font-medium text-center text-white whitespace-nowrap bg-sky-400 rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
        Create Now
      </div>
      <div className="flex gap-5 justify-between items-start mt-8 ml-40 max-md:flex-wrap">
        <div className="flex flex-col grow shrink-0 self-start text-rose-500 basis-0 w-fit">
          <div className="text-lg font-semibold tracking-wide">Disclaimer </div>
          <div className="mt-2.5 text-base tracking-wide text-center whitespace-nowrap">
            These Items are prohibited one Flight
          </div>
        </div>
        <div className="grow self-end mt-6 text-base tracking-wide text-center text-sky-400 underline whitespace-nowrap">
          Visit here to learn more
        </div>
      </div>
      <img
        loading="lazy"
        srcSet="..."
        className="mt-11 ml-40 max-w-full aspect-[2.56] w-[693px] max-md:mt-10"
      />
    </div>
  );
}


export default MyComponent
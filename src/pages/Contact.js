import * as React from "react";

const contact = () => {
  return (
    <div className="flex flex-col items-center pt-8 bg-white rounded-[29px]">
      <div className="justify-between px-5 mt-16 max-w-full w-[745px] max-md:mt-10">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center text-center rounded-2xl text-slate-900">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9164fcf8a09b8f6b078d5e10b21df47ab8738a0c0432d35a6bd7c291b351d572?"
                className="w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl font-semibold leading-7">
                Office
              </div>
              <div className="self-stretch mt-2.5 text-base leading-6">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat n
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-20 text-center rounded-2xl text-slate-900 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/650a70c65de8dc7bd5536eafc02fdbd338deaff7aa3b3466decea6796561a2a7?"
                className="self-center w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl font-semibold leading-7 max-md:mr-0.5">
                Phone
              </div>
              <div className="mt-2.5 text-base leading-6 max-md:mr-0.5">
                +123456790+123456790
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col items-center px-8 text-center whitespace-nowrap rounded-2xl text-slate-900 max-md:px-5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/23433e7d6dbdd14d434dc3d57cac055f1d8d493e1dbe7e25d918f779f70a6406?"
                className="w-8 aspect-square"
              />
              <div className="mt-2.5 text-xl font-semibold leading-7">
                Location
              </div>
              <div className="self-stretch mt-2.5 text-base leading-6">
                hello@yourewebsite.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 text-xs font-semibold tracking-wide text-sky-400 uppercase max-md:mt-10">
        contact form
      </div>
      <div className="mt-5 text-4xl font-semibold text-center text-sky-400 max-md:max-w-full">
        Let's schedule your appointment
      </div>
      <div className="mt-5 text-xl leading-7 text-center text-slate-900 w-[754px] max-md:max-w-full">
        Feel free to give us a call or send us a message and we'll help get the
        answers you need, or a quote for services at your residential or
        commercial property.
      </div>
      <div className="flex gap-5 justify-between mt-16 max-w-full w-[750px] max-md:flex-wrap max-md:mt-10">
        <div className="flex flex-col px-5">
          <div className="text-xs font-semibold tracking-wide uppercase text-slate-900">
            name
          </div>
          <input 
          className="justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5"
          placeholder="Write your name"
          type="text"
          />
            
          
        </div>
        <div className="flex flex-col px-5">
          <div className="text-xs font-semibold tracking-wide uppercase text-slate-900">
            email
          </div>
          <input 
          className="justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300  w-[320px] max-md:pr-5"
          placeholder="Write your email address"
          type="email"
          />
            
          
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 max-w-full w-[750px] max-md:flex-wrap">
        <div className="flex flex-col px-5">
          <div className="text-xs font-semibold tracking-wide uppercase text-slate-900">
            Phone number
          </div>
          <input 
          className="justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5"
          placeholder="Write your phone number"
          type="tel"
          />
            
          
        </div>
        <div className="flex flex-col px-5">
          <div className="text-xs font-semibold tracking-wide uppercase text-slate-900">
            Address
          </div>
          <input 
          className="justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5"
          placeholder="Write your street address, zipcode , etc"
          type="text"
          />
            
          
        </div>
      </div>
      <div className="mt-8 text-xs font-semibold tracking-wide uppercase text-slate-900 max-md:max-w-full">
        notes
      </div>
      <input 
        className="items-start px-4 pt-4 pb-24 mt-3.5 max-w-full text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[715px] max-md:pr-5"
        placeholder="Type Here"

        />
        
      
      <button className="justify-center px-8 py-5 mt-8 text-base font-semibold text-center text-white bg-emerald-600 rounded-md max-md:px-5">
        Send Message
      </button>
      <div className="mt-36 text-xs font-semibold tracking-wide text-emerald-600 uppercase max-md:mt-10">
        Frequently Asked Questions
      </div>
      <div className="mt-5 text-4xl font-semibold leading-10 text-center text-sky-400 max-md:max-w-full">
        You've got questions. we've got answers.
      </div>
      <div className="flex flex-col p-8 mt-16 max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10">
        <div className="flex gap-2.5 justify-between text-2xl font-semibold leading-8 text-sky-400 rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div>How often do you come per month?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4cf947232c15b3d0223f56683dc6042884844734f5f16d60c52bea9d9bc1175?"
            className="shrink-0 w-8 aspect-square"
          />
        </div>
        <div className="mt-5 text-base leading-6 text-slate-900 max-md:max-w-full">
          We aim to come weekly for lawn and yard maintenance, especially in
          peak growth season. Every yard is unique, which is why we're regularly
          checking up and keeping notes on your yard so we can best serve you
          year-round.{" "}
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 mt-8 max-w-full text-2xl font-semibold leading-8 text-sky-400 bg-gray-100 rounded-xl w-[750px] max-md:px-5">
        <div className="flex gap-2.5 justify-between rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div>What is your cancellation policy?</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a43208e20f2c102fc949f3be0ca0dbbe2065ddb25c4cf5e357f526646c40598?"
            className="shrink-0 w-8 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 mt-8 max-w-full text-2xl font-semibold leading-8 text-sky-400 whitespace-nowrap bg-gray-100 rounded-xl w-[750px] max-md:px-5">
        <div className="flex gap-2.5 justify-between rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div>Title</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a43208e20f2c102fc949f3be0ca0dbbe2065ddb25c4cf5e357f526646c40598?"
            className="shrink-0 w-8 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col justify-center p-8 mt-8 max-w-full text-2xl font-semibold leading-8 text-sky-400 whitespace-nowrap bg-gray-100 rounded-xl w-[750px] max-md:px-5">
        <div className="flex gap-2.5 justify-between rounded-xl max-md:flex-wrap max-md:max-w-full">
          <div>Title</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8a43208e20f2c102fc949f3be0ca0dbbe2065ddb25c4cf5e357f526646c40598?"
            className="shrink-0 w-8 aspect-square"
          />
        </div>
      </div>
      <div className="flex flex-col items-center px-20 mt-32 max-w-full font-semibold text-slate-900 w-[1140px] max-md:px-5 max-md:mt-10">
        <div className="text-xs tracking-wide uppercase">contact us</div>
        <div className="mt-5 text-4xl text-center text-sky-400 max-md:max-w-full">
          Get in touch
        </div>
        <div className="mt-5 text-xl leading-7 text-center w-[751px] max-md:max-w-full">
          We're happy to answer any questions you may have about our lawn care
          or landscaping services, Feel free to give us a call or send us a
          message and we'll help get the answers you need
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="mt-16 max-w-full aspect-[1.72] w-[950px] max-md:mt-10"
        />
      </div>
    </div>
  );
};

export default contact;

import React from "react";
import {Link} from "react-router-dom"
const Footer = () => {
  return (
    <div className="flex flex-col items-center p-20 bg-slate-900 max-md:px-5">
      <div className="justify-center px-px pb-2.5 mt-3 max-w-full w-[1144px]">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <div className="flex gap-5 pr-12 max-md:pr-5">

                <Link to="https://www.facebook.com/">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d5b2354b342ec113d3c66f4946947d05a6e937abfafdc2c415eac0c37d79415?"
                  className="shrink-0 w-8 aspect-square"
                />
                </Link>
                <Link to="https://twitter.com/?lang=en">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/451cbd16eaaee04f31ca11239c69995537e765baa78a9f5b3b08b8550a78e17c?"
                  className="shrink-0 w-8 aspect-square"
                />
                </Link>
                <Link to="https://www.instagram.com/">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d9b7492d13a345a3138e177dd38748e20ca38cf4b346094484bcba8e0a7edc52?"
                  className="shrink-0 w-8 aspect-square"
                />   ]
                </Link>
                <Link to="https://www.youtube.com/">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/e7a4ef92b7f984ca594edae440c4d6e8bcc4301cb9e596f203c2a4bedaa8c8be?"
                  className="shrink-0 w-8 aspect-square"
                />
                </Link>
                
                
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ff7d72e0cfca62b755b5c102e7882104bbc280e7b69780175be42aff297d0bd3?"
                className="self-center mt-12 aspect-[4] w-[238px] max-md:mt-10"
              />
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
            <div className="grow mt-2.5 max-md:mt-10 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[49%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-6 text-white max-md:mt-10">
                    <div className="font-semibold text-sky-400">ADDRESS</div>
                    <div className="mt-5">
                      Desa Bangsal Rt 11 Rw 02 Bangsal MojokertoJawa timur
                      Indonesia{" "}
                    </div>
                    <div className="mt-5">
                      Phone: +1 800 123 45 67
                      <br />
                      Email: email@example.com
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-base leading-6 text-white whitespace-nowrap max-md:mt-10">
                    <div className="font-semibold text-sky-400">NAVIGATION</div>
                    <Link className="mt-5" to="/home">Home</Link>
                    <Link className="mt-4" to="/about">About</Link>
                    <Link className="mt-4" to="/services">Services</Link>
                    <Link className="mt-4" to="/contact">Contact</Link>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[26%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col text-base leading-6 text-white max-md:mt-10">
                    <div className="font-semibold text-sky-400">
                      OUR SERVICES
                    </div>
                    <Link className="mt-5" to="/traveller-listing">Traveler listing</Link>
                    <Link className="mt-4" to="/luggage-listing">Luggage listing</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2.5 justify-between mt-24 max-w-full text-base leading-6 text-white w-[1144px] max-md:flex-wrap max-md:mt-10">
        <div>© 2023 FlyLite has All rights reserved. </div>
        <div className="flex gap-5 justify-between">
          <Link to="/privacy-policy">Privacy policy</Link>
          <Link to="/t&c">Terms and Conditions</Link>
        </div>
      </div>
    </div>
  );
}


export default Footer;
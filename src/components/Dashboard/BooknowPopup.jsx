import React from "react";
import Luggage from "../assets/Profile/Luggage.svg";
import Traveler from "../assets/Profile/Traveler.svg";
import { Link } from "react-router-dom";

const BookNowPopup = (state) => {

    
  return (
    <div>
    
      <h3 className="font-semibold leading-6 text-gray-900" id="modal-title">
        <div className="text-center mt-1 mx-5 text-2xl font-medium tracking-wider leading-10 ">
          Do you want to 
          <span className="font-extrabold text-sky-400"> List? </span>
        </div>
        <div className="mt-14  max-w-full w-[480px] max-md:mt-10">
          <div className="flex justify-center items-center gap-5 max-md:flex-col max-md:gap-0">
            {state.state==="travel" && (<Link
              to="/createLuggage"
              className="flex flex-col max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow items-start px-12 py-10  text-lg font-medium tracking-wide text-center capitalize whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={Luggage}
                  className="aspect-[1.28] max-sm:mx-auto"
                />
                <div className="mx-auto mt-5">Luggage</div>
              </div>
            </Link>)}
            {state.state === "luggage" && (<Link
              to="/createTraveler"
              className="flex flex-col max-md:ml-0 max-md:w-full"
            >
              <div className="flex flex-col grow px-12 py-10  text-lg font-semibold tracking-wide text-center whitespace-nowrap bg-gray-100 rounded-3xl text-blue-950 max-md:px-5 max-md:mt-10">
                <img
                  loading="lazy"
                  srcSet={Traveler}
                  className="self-center aspect-[1.25]"
                />
                <div className="mt-7">Traveling</div>
              </div>
            </Link>)}
            
          </div>
        </div>
      </h3>
    </div>
  );
};

export default BookNowPopup;

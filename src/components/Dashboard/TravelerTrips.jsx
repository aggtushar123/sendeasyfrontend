import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTravelerTripsStatus } from "../../features/listing/listingSlice";

const Trips = ({ tripData }) => {
  const [tripStatus, setTripStatus] = useState({ trips: "" });
  const dispatch = useDispatch();
  const userId = tripData._id;
  const handleCancelTrip = () => {
    setTripStatus({ trips: "cancelled" });
    dispatchUpdate({ trips: "cancelled" }); // Pass the updated status directly
  };
  const handleStartTrip = () => {
    setTripStatus({ trips: "ongoing" });
    dispatchUpdate({ trips: "ongoing" }); // Pass the updated status directly
  };
  const dispatchUpdate = (updatedStatus) => {
    dispatch(updateTravelerTripsStatus({ userId, tripStatus: updatedStatus }));
  };
  return (
    <div
      key={tripData.id}
      className="flex flex-col px-10 pt-7 pb-12 w-full mb-5 bg-gray-100 rounded-[38px] max-md:px-5 max-md:mt-1 max-md:max-w-full"
    >
      <div className="flex gap-5 w-full leading-[158.5%] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-3.5 justify-between text-slate-900 max-md:flex-wrap">
          <div className="flex flex-col self-start whitespace-nowrap">
            <div className="text-xs">From:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {tripData.sourceLocation}
            </div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/156b7646d3a3594f87f8cc546848978b6f0d516431fa1cf0dffdfa93676e3929?"
            className="shrink-0 my-auto max-w-full border-2 border-sky-200 border-solid aspect-[14.29] stroke-[2px] stroke-sky-200 w-[184px]"
          />
          <div className="flex flex-col text-xs">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb0915405607aca567de60aa5d650b42762448e0826befbffa6d2d0854b03c9a?"
              className="self-center aspect-[1.61] w-[47px]"
            />
            <div className="mt-1">Travel Via</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/671d40e01603eaa7be2652454afb858051a914c0548b32fe04ef048f3197190d?"
            className="shrink-0 my-auto max-w-full border-2 border-sky-200 border-solid aspect-[16.67] stroke-[2px] stroke-sky-200 w-[202px]"
          />
          <div className="flex flex-col self-start whitespace-nowrap">
            <div className="text-xs">Destination:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {tripData.destinationLocation}
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start text-sky-400">
          <div className="text-xs">Expected Price</div>
          <div className="mt-2.5 text-xl font-semibold">
            $ {tripData.expectation}
          </div>
        </div>
      </div>
      <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-auto gap-5 justify-between items-center self-start px-0.5">
          <div className="flex flex-col self-stretch">
            <div className="flex gap-1 pr-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60030bc9c8e5a8a4c7f8475adbfdf3b3e6f73dd2a0e6b91e22adfaec6ca5510c?"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/60030bc9c8e5a8a4c7f8475adbfdf3b3e6f73dd2a0e6b91e22adfaec6ca5510c?"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/a53154cabd88a723d9c16ba5a84ddeebc7afb70b08b39a0469148f0d0f9b4436?"
                className="shrink-0 w-6 aspect-square"
              />
            </div>
            <div className="mt-3 text-xs leading-5 text-slate-900">
              2 people Booked
            </div>
          </div>
          <div className="flex flex-col self-stretch my-auto text-sky-400 leading-[158.5%]">
            <div className="text-xs">Already Booked </div>
            <div className="mt-3 text-xl font-semibold">75%</div>
          </div>
          <div className="flex flex-col self-stretch my-auto leading-[158.5%] text-slate-900">
            <div className="text-xs">Past QD</div>
            <div className="mt-3 text-xl font-semibold">12</div>
          </div>
        </div>
        <div className="flex flex-auto gap-5 justify-between px-0.5 leading-[158.5%] text-slate-900">
          <div className="flex flex-col py-1.5">
            <div className="text-xs">Date:</div>
            <div className="mt-3.5 text-xl font-semibold">{tripData.date}</div>
          </div>
          <div className="flex flex-col py-2">
            <div className="text-xs">Time:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {tripData.timeOfDelivery}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <div className="text-xs">Luggage Space:</div>
            <div className="mt-2.5 text-xl font-semibold">
              {tripData.luggageSpace} KG
            </div>
          </div>
          <div className="flex flex-col space-y-2">
      <button
        type="button"
        className="w-40 px-4 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
        onClick={() => handleStartTrip()}
      >
        Start Trip
      </button>
      <button
        type="button"
        className="w-40 px-4 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        onClick={() => handleCancelTrip()}
      >
        Cancel Trip
      </button>
      
    </div>
    
        </div>
        
      </div>
      <button
        type="button"
        className="justify-center w-40 px-4 py-1 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600"
        onClick={() => handleCancelTrip()}
      >
        Edit 

      </button>
    </div>
  );
};

export default Trips;

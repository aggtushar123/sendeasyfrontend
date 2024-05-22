import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTravelerTripsStatus } from "../../features/listing/listingSlice";

const TravelerModal = ({ travel, status }) => {
  const [tripStatus, setTripStatus] = useState({ trips: "" });
  const { sourceLocation, destinationLocation, user, _id } = travel;
  const dispatch = useDispatch();

  const userId = _id;
  if (travel.length < 1) {
    console.log("O");
  }
  const handleFinishTrip = () => {
    setTripStatus({ trips: "finished" });
    dispatchUpdate({ trips: "finished" }); // Pass the updated status directly
  };
  const handleSendDetails = (details) => {
    console.log(details)
  }

  const dispatchUpdate = (updatedStatus) => {
    dispatch(updateTravelerTripsStatus({ userId, tripStatus: updatedStatus }));
    window.location.reload()
  };
  return (
    <div className="flex flex-col px-10 pt-7 pb-6 mt-7 bg-gray-100 rounded-[38px] max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 w-full leading-[158.5%] max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-auto gap-3.5 justify-between text-slate-900 max-md:flex-wrap max-md:max-w-[300px]">
          <div className="flex flex-col self-start whitespace-nowrap">
            <div className="text-xs">From:</div>
            <div className="mt-3.5 text-xl font-semibold">{sourceLocation}</div>
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
              className="self-center w-11 aspect-[1.52]"
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
              {destinationLocation}
            </div>
          </div>
        </div>
        <div className="flex flex-col self-start text-sky-400">
          <div className="text-xs">Expected Price</div>
          <div className="mt-2.5 text-xl font-semibold">$ 150</div>
        </div>
      </div>
      <div className="flex gap-5 mt-4 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-auto gap-5 justify-between items-center self-start">
          <div className="flex flex-col self-stretch">
            <div className="flex gap-1 pr-3.5">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d823d78b993bb8776d2a36c0c166bd06da6653ef60349a72f0608a82d4f5bb1b?"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d823d78b993bb8776d2a36c0c166bd06da6653ef60349a72f0608a82d4f5bb1b?"
                className="shrink-0 w-6 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/20701a5830447ea2c8554b63a45c659ef11dc3b61983c9bba8bd28780b7fa20b?"
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
          <div className="flex flex-col self-stretch my-auto leading-[158.5%] text-slate-900">
            <div className="text-xs">Date:</div>
            <div className="mt-3 text-xl font-semibold">21 Sep 2024</div>
          </div>
          <div className="flex flex-col self-stretch my-auto leading-[158.5%] text-slate-900">
            <div className="text-xs">Time:</div>
            <div className="mt-3 text-xl font-semibold">2: 25 AM</div>
          </div>
          <div className="flex flex-col self-stretch my-auto leading-[158.5%] text-slate-900">
            <div className="text-xs">Luggage Space:</div>
            <div className="mt-3 text-xl font-semibold">25 KG</div>
          </div>
         
        </div>
      </div>
      {status === "ongoing" && (
            <div className="flex flex-auto gap-5 justify-center items-center mt-4">
              <button
                type="button"
                className="justify-center items-center px-4 py-2 text-xl font-medium text-center text-white bg-sky-400 max-w-[349px] rounded-[31px]"
                onClick={() => handleFinishTrip()}
              >
                Trip Completed
              </button>
            </div>
          )}
          {status === "created" && (
            <div className="flex flex-auto gap-5 justify-center items-center mt-4">
              <button
                type="button"
                className="justify-center items-center px-4 py-2 text-xl font-medium text-center text-white bg-sky-400 max-w-[349px] rounded-[31px]"
                onClick={() => handleSendDetails(travel)}
              >
                Send Listing Details
              </button>
            </div>
          )}
    </div>
  );
};

export default TravelerModal;

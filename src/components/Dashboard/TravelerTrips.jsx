import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { updateTravelerTripsStatus } from "../../features/listing/listingSlice";
import cross from "../../components/assets/Login/crossIcon.svg";
const Trips = ({ tripData }) => {
  const [tripStatus, setTripStatus] = useState({ trips: "" });
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  
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
    window.location.reload();
  };
  const editPost = (tripData) => {
    
    navigate('/edittravelerlisting', { state: { travelerData: tripData } });
  };
  return (
    <>
      {showEditModal && (
        <form className="flex justify-center items-center">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl py-2">
                <div
                  className="absolute left-[750px] top-4 cursor-pointer"
                  onClick={() => {
                    setShowEditModal(false);
                  }}
                >
                  <img src={cross} alt="" />
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

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
        <div className="flex gap-5 mt-6 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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
              <div className="mt-3.5 text-xl font-semibold">
                {tripData.date}
              </div>
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
          
          </div>
        </div>
        <div className="flex flex-row gap-5 justify-end mt-4 ">
        <button
          type="button"
          className="justify-center px-10 py-3 mt-5 text-lg font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5"
          onClick={() => handleStartTrip()}
        >
          Start Gig
        </button>
        
        <button
          type="button"
          className="justify-center px-10 py-3 mt-5 text-lg font-medium text-center text-sky-400 bg-sky-100 rounded-[31px] max-md:px-5"
          onClick={() => editPost(tripData)}
        >
          Edit Gig
        </button>
        <button
          type="button"
          className="justify-center px-10 py-3 mt-5 text-lg font-medium text-center text-rose-500 bg-rose-200 rounded-[31px] max-md:px-5"
          onClick={() => handleCancelTrip()}
        >
          Cancel Gig
        </button>
            </div>
      </div>
    </>
  );
};

export default Trips;

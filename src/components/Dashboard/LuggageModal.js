import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateLuggageTripsStatus } from "../../features/listing/listingSlice";
import { bookNowTraveler } from "../../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const LuggageModal = ({ userDetail, luggage, status }) => {
  const [tripStatus, setTripStatus] = useState({ trips: "" });
  const { sourceLocation, destinationLocation, _id } = luggage;
  const {user} = useSelector((state) => state.auth)
  const dispatch = useDispatch();
const navigate = useNavigate();
  const userId = _id;
  if (luggage.length < 1) {
    console.log("O");
  }
  const handleFinishTrip = () => {
    setTripStatus({ trips: "finished" });
    dispatchUpdate({ trips: "finished" }); // Pass the updated status directly
  };

  const handleSendDetails = async(details) => {
    try {
      const action = await dispatch(bookNowTraveler({userId: user._id, listedId:userDetail._id, listingInfo: details, userInfo: user}))
      navigate('/dashboard/notification')
    } catch (error) {
      console.log(error)
    }
  }

  const dispatchUpdate = (updatedStatus) => {
    dispatch(updateLuggageTripsStatus({ userId, tripStatus: updatedStatus }));
    window.location.reload()
  };
  return (
    <div className="px-7 pt-6 pb-6  mt-7 bg-gray-100 max-w-[885px] rounded-[38px] max-md:pl-5">
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
        <div className="flex gap-5 justify-between self-stretch my-auto leading-[158.5%] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col py-2 whitespace-nowrap">
            <div className="text-xs">From:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {luggage.sourceLocation}
            </div>
          </div>
          <div className="flex flex-col py-2 whitespace-nowrap">
            <div className="text-xs">Destination:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {luggage.destinationLocation}
            </div>
          </div>
          <div className="flex flex-col py-1.5">
            <div className="text-xs">Before:</div>
            <div className="mt-3.5 text-xl font-semibold">
              {luggage.dateRange}
            </div>
          </div>
          <div className="flex flex-col py-2">
            <div className="text-xs">Available bags:</div>
            <div className="mt-2.5 text-xl font-semibold">
              {luggage.numberOfBags}
            </div>
          </div>

          <div className="flex flex-col py-2">
            <div className="text-xs">Weight:</div>
            <div className="mt-2.5 text-xl font-semibold">
              {luggage.totalWeight} KG
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow items-center leading-[158.5%] max-md:mt-10">
          <div className="text-xs text-sky-400">Expected to pay</div>
          <div className="mt-2.5 text-xl font-semibold text-sky-400">
            $ 50
          </div>
          <div className="flex gap-2.5 self-stretch mt-8">
            <div className="grow my-auto text-xs text-slate-900">
              Item type:
            </div>
            <div className="justify-center px-5 py-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px] max-md:px-5">
              {luggage.typeOfItems}
            </div>
          </div>
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
                onClick={() => handleSendDetails(luggage)}
              >
                Send Listing Details
              </button>
            </div>
          )}
  </div>
  );
};

export default LuggageModal;

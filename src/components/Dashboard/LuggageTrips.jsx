import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateLuggageTripsStatus } from "../../features/listing/listingSlice";
import cross from "../../components/assets/Login/crossIcon.svg";
const LuggageTrips = ({ luggage }) => {
  const [tripStatus, setTripStatus] = useState({ trips: "" });
  const [showEditModal, setShowEditModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = luggage._id;

  const handleCancelTrip = () => {
    setTripStatus({ trips: "cancelled" });
    dispatchUpdate({ trips: "cancelled" }); // Pass the updated status directly
  };
  const handleStartTrip = () => {
    setTripStatus({ trips: "ongoing" });
    dispatchUpdate({ trips: "ongoing" }); // Pass the updated status directly
  };
  const dispatchUpdate = (updatedStatus) => {
    dispatch(updateLuggageTripsStatus({ userId, tripStatus: updatedStatus }));
    window.location.reload();
  };
  const editPost = (luggage) => {
    navigate("/editluggagelisting", { state: { travelerData: luggage } });
  };
  return (
    <div className="px-7 pt-6 pb-14 bg-gray-100 max-w-[885px] rounded-[38px] max-md:pl-5">
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
      <div className="flex flex-row gap-5 justify-center mt-6 space-y-2">
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
        <button
          type="button"
          className="justify-center w-40 px-4 py-1 mt-4 bg-green-500 text-white rounded-md hover:bg-green-600"
          onClick={() => editPost(luggage)}
        >
          Edit
        </button>
      </div>
    </div>
  );
};

export default LuggageTrips;

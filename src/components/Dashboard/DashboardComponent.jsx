import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelers, getLuggage } from "../../features/listing/listingSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import TravelerTrips from "./TravelerTrips";
function DashboardComponent() {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  useEffect(() => {
    dispatch(getTravelers());
    dispatch(getLuggage());
  }, [dispatch]);

  const { traveler, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );

  // console.log(traveler);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  
  const travelerList = Array.isArray(traveler) ? traveler : [];
  let ongoingTrips = 0;
  let finishedTrips = 0;
  let cancelledTrips = 0;

  // Iterate through each traveler object to count trips based on status
  travelerList.forEach((travel) => {
    switch (travel.trips) {
      case "ongoing":
        ongoingTrips++;
        break;
      case "finished":
        finishedTrips++;
        break;
      case "cancelled":
        cancelledTrips++;
        break;
      default:
        break;
    }
  });

  const onClick = () => {
    navigate("/createTraveler");
  };
  return (
    <div className="flex flex-col  rounded-[29px]">
      <div className="flex flex-col items-center self-center mt-5 w-full max-w-[1296px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 self-stretch max-md:flex-wrap">
          <div className="flex flex-col justify-center self-start text-base text-sky-400" />
          <div className="flex flex-col grow shrink-0 basis-0 w-fit max-md:max-w-full">
            <div className="flex flex-col pt-7 pr-20 pb-16 pl-5 bg-gray-100 rounded-3xl max-md:pr-5 max-md:max-w-full">
              <div className="mr-5 text-lg font-bold tracking-wide text-blue-950 max-md:mr-2.5 max-md:max-w-full">
                Trip Status
              </div>
              <div className="self-center mt-8 max-w-full w-[887px]">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center px-12 py-6 w-full font-semibold text-center text-sky-400 bg-white rounded-[39px] max-md:px-5 max-md:mt-6">
                      <div className="text-xl leading-7 text-slate-900">
                        Ongoing Trip
                      </div>
                      <div className="mt-5 text-4xl leading-10">
                        {ongoingTrips}
                      </div>
                      <div className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm capitalize bg-indigo-100 rounded-[31px] max-md:px-5">
                        Check Status
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center px-12 py-6 w-full font-semibold text-center text-sky-400 bg-white rounded-[39px] max-md:px-5 max-md:mt-6">
                      <div className="text-xl leading-7 text-slate-900">
                        Previous Trips
                      </div>
                      <div className="mt-5 text-4xl leading-10">
                        {finishedTrips}
                      </div>
                      <div className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm capitalize bg-indigo-100 rounded-[31px] max-md:px-5">
                        Check History
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col grow items-center px-12 py-6 w-full font-semibold text-center bg-white rounded-[39px] max-md:px-5 max-md:mt-6">
                      <div className="text-xl leading-7 text-slate-900">
                        Cancelled Trips
                      </div>
                      <div className="mt-5 text-4xl leading-10 text-rose-500">
                        {cancelledTrips}
                      </div>
                      <div className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm text-sky-400 capitalize bg-indigo-100 rounded-[31px] max-md:px-5">
                        Check History
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-start mt-10 ml-5 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:ml-2.5">
              Your Ongoing post
            </div>
            <div className="mt-9 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[83%] max-md:ml-0 max-md:w-full">
                  {travelerList && (
                    <>
                      {travelerList.map((travel) => {
                        if (travel.trips === "ongoing") {
                          // Check if the trip is ongoing
                          return (
                            <TravelerTrips key={travel.id} tripData={travel} />
                          ); // Render the Trips component
                        }
                        return null; // Skip rendering if the trip is not ongoing
                      })}
                    </>
                  )}
                </div>
                <button
                  onClick={onClick}
                  className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col grow px-7 py-20 w-full text-base font-medium text-center capitalize bg-gray-100 rounded-[31px] text-stone-300 max-md:px-5 max-md:mt-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1bb8ddabbdf1c47ce14310afe8cd532ac176314285e17a4f9f6729e6410f36a?"
                      className="self-center w-10 aspect-square"
                    />
                    <div className="mt-3">Create a Listing</div>
                  </div>
                </button>
              </div>
            </div>
            <div className="self-start mt-16 ml-5 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:ml-2.5">
              Your status
            </div>
            <div className="px-0.5 mt-6 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow items-center px-20 py-6 w-full font-semibold text-center whitespace-nowrap bg-gray-100 rounded-[35px] max-md:px-5 max-md:mt-10">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/83c59c068dd80aa2657401558a8e64da315205f047a6309a2a3c094f288a3fce?"
                      className="w-8 aspect-square"
                    />
                    <div className="mt-4 text-xl leading-7 text-slate-900">
                      Earned
                    </div>
                    <div className="mt-5 text-4xl leading-10 text-sky-400">
                      $1,250
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-16 py-6 w-full font-semibold text-center bg-gray-100 rounded-[35px] max-md:px-5 max-md:mt-10">
                    <div className="flex flex-col items-center px-6 rounded-2xl max-md:px-5 max-md:mr-0.5 max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/332c71fe89f1b5be15f8aabc3afc12d8b938727d9612f8e5169029e90c84c908?"
                        className="w-8 aspect-square"
                      />
                      <div className="self-stretch mt-2.5 text-xl leading-7 text-slate-900">
                        Satisfied Client
                      </div>
                      <div className="mt-2.5 text-4xl leading-10 text-sky-400">
                        52
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow justify-center px-16 py-6 w-full font-semibold text-center whitespace-nowrap bg-gray-100 rounded-[35px] max-md:px-5 max-md:mt-10">
                    <div className="flex flex-col items-center px-12 rounded-2xl max-md:px-5 max-md:mr-0.5 max-md:ml-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/5e394190121d3bc2b87f86cf2b1869d0e5a75a394a6beb3672dc52339f695668?"
                        className="w-8 aspect-square"
                      />
                      <div className="mt-2.5 text-xl leading-7 text-slate-900">
                        Since
                      </div>
                      <div className="self-stretch mt-2.5 text-4xl leading-10 text-sky-400">
                        2024
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-start mt-14 ml-5 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:ml-2.5">
              New Notifications
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="..."
          className="mt-6 max-w-full aspect-[6.25] w-[808px]"
        />
        <img
          loading="lazy"
          srcSet="..."
          className="mt-7 max-w-full aspect-[6.25] w-[808px]"
        />
      </div>
    </div>
  );
}

export default DashboardComponent;

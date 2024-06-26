import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTravelers, getLuggage } from "../../features/listing/listingSlice";
import { setShowModal, setModalType, setOngoingTripsData, setFinishedTripsData, setCancelledTripsData, setCreatedTripsData, setOngoingLuggageTripsData, setFinishedLuggageTripsData, setCancelledLuggageTripsData, setCreatedLuggageTripsData  }  from "../../features/modalSlice";
import { useNavigate } from "react-router-dom";
import Spinner from "../Spinner";
import TravelerTrips from "./TravelerTrips";
import LuggageModal from "./LuggageModal"
import LuggageTrips from "./LuggageTrips";
import cross from "../../components/assets/Login/crossIcon.svg";
import TravelerModal from "./TravelerModal";
import CreateListingPopup from "./CreateListingPopup";
function DashboardComponent() {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const showModal = useSelector((state) => state.modal.showModal);
  const modalType = useSelector((state) => state.modal.modalType);
  const [showCreateListingModal, setShowCreateListingModal] = useState(false)

  const ongoingTripsData = useSelector((state) => state.modal.ongoingTripsData);
  const finishedTripsData = useSelector((state) => state.modal.finishedTripsData);
  const cancelledTripsData = useSelector((state) => state.modal.cancelledTripsData);
  const createdTripsData = useSelector((state) => state.modal.createdTripsData);
  const ongoingLuggageTripsData = useSelector((state) => state.modal.ongoingLuggageTripsData);
  const finishedLuggageTripsData = useSelector((state) => state.modal.finishedLuggageTripsData);
  const cancelledLuggageTripsData = useSelector((state) => state.modal.cancelledLuggageTripsData);
  const createdLuggageTripsData = useSelector((state) => state.modal.createdLuggageTripsData);
  //Show More, Show Less Button
  const [showAllTravelerListings, setShowAllTravelerListings] = useState(false);
  const [showAllFinishedListings, setShowAllFinishedListings] = useState(false);
  const [showAllCancelledListings, setShowAllCancelledListings] = useState(false);
  const [showAllOngoingListings, setShowAllOngoingListings] = useState(false);
  

  
  useEffect(() => {
    dispatch(getTravelers());
    dispatch(getLuggage());
  }, [dispatch]);

  const { traveler, luggage, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );

  // console.log(traveler);

  const travelerList = Array.isArray(traveler) ? traveler : [];
  const luggageList = Array.isArray(luggage) ? luggage : []; 

  useEffect(() => {
    if (travelerList.length) {
      const filteredOngoingTrips = travelerList.filter(
        (travel) => travel.trips === "ongoing"
      );
      const filteredFinishedTrips = travelerList.filter(
        (travel) => travel.trips === "finished"
      );
      const filteredCancelledTrips = travelerList.filter(
        (travel) => travel.trips === "cancelled"
      );
      const filteredCreatedTrips = travelerList.filter(
        (travel) => travel.trips === "created"
      );

      dispatch(setOngoingTripsData(filteredOngoingTrips));
      dispatch(setFinishedTripsData(filteredFinishedTrips));
      dispatch(setCancelledTripsData(filteredCancelledTrips));
      dispatch(setCreatedTripsData(filteredCreatedTrips));
    }
  }, [travelerList, dispatch]);

  useEffect(() => {
    if (luggageList.length) {
      const filteredOngoingLuggageTrips = luggageList.filter(
        (luggage) => luggage.trips === "ongoing"
      );
      const filteredFinishedLuggageTrips = luggageList.filter(
        (luggage) => luggage.trips === "finished"
      );
      const filteredCancelledLuggageTrips = luggageList.filter(
        (luggage) => luggage.trips === "cancelled"
      );
      const filteredCreatedLuggageTrips = luggageList.filter(
        (luggage) => luggage.trips === "created"
      );

      dispatch(setOngoingLuggageTripsData(filteredOngoingLuggageTrips));
      dispatch(setFinishedLuggageTripsData(filteredFinishedLuggageTrips));
      dispatch(setCancelledLuggageTripsData(filteredCancelledLuggageTrips));
      dispatch(setCreatedLuggageTripsData(filteredCreatedLuggageTrips));
    }
  }, [luggageList, dispatch]);

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
  luggageList.forEach((travel) => {
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

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const openOngoingModal = () => {
    if ((ongoingTripsData.length + ongoingLuggageTripsData.length) > 0) {
      dispatch(setModalType("ongoing"));
      dispatch(setShowModal(true));
    }
  };
  const openFinishedModal = () => {
    if ((finishedTripsData.length + finishedLuggageTripsData.length) > 0) {
      dispatch(setModalType("finished"));
      dispatch(setShowModal(true));
    }
  };
  const openCancelledModal = () => {
    if ((cancelledTripsData.length + cancelledLuggageTripsData.length) > 0) {
      dispatch(setModalType("cancelled"));
      dispatch(setShowModal(true));
    }
  };
  const closeModal = () => {
    dispatch(setShowModal(false));
    window.location.reload()
  };
  const handleCreateListing = () => {
    setShowCreateListingModal(true)
  };
  return (
    <>
      {showModal && (
        <form className="flex justify-center items-center">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-4xl py-2">
                <div
                  className="absolute left-[750px] top-4 cursor-pointer"
                  onClick={() => {
                    dispatch(setShowModal(false));
                  }}
                >
                  <img src={cross} alt="" />
                </div>
                {modalType === "ongoing" && (
                  <div className="flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5">
                    <div className="self-center text-xl font-semibold leading-7 text-center text-slate-900">
                      Ongoing Trips
                    </div>
                    {ongoingTripsData
                      .slice(
                        0,
                        showAllOngoingListings ? ongoingTripsData.length : 2
                      )
                      .map((travel) => (
                        <TravelerModal
                          key={travel.id}
                          travel={travel}
                          status="ongoing"
                        />
                      ))}
                      {ongoingLuggageTripsData
                      .slice(
                        0,
                        showAllOngoingListings ? ongoingLuggageTripsData.length : 2
                      )
                      .map((luggage) => (
                        <LuggageModal
                          key={luggage.id}
                          luggage={luggage}
                          status="ongoing"
                        />
                      ))}
                      <>
                      {(ongoingTripsData.length + ongoingLuggageTripsData.length) === 0 && (
                        
                        closeModal()  )} 
                      </>
                      
                    {(ongoingTripsData.length + ongoingLuggageTripsData.length) > 2 && (
                      <button
                        onClick={() =>
                          setShowAllOngoingListings(!showAllOngoingListings)
                        }
                        type="button"
                        className="justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5"
                      >
                        {showAllTravelerListings ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                )}
                {modalType === "finished" && (
                  <div className="flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5">
                    <div className="self-center text-xl font-semibold leading-7 text-center text-slate-900">
                      Previous Trips
                    </div>
                    {finishedTripsData
                      .slice(
                        0,
                        showAllFinishedListings ? finishedTripsData.length : 2
                      )
                      .map((travel) => (
                        <TravelerModal
                          key={travel.id}
                          travel={travel}
                          status="finished"
                        />
                      ))}
                      {finishedLuggageTripsData
                      .slice(
                        0,
                        showAllFinishedListings ? finishedLuggageTripsData.length : 2
                      )
                      .map((luggage) => (
                        <LuggageModal
                          key={luggage.id}
                          luggage={luggage}
                          status="finished"
                        />
                      ))}
                    {(finishedTripsData.length + finishedLuggageTripsData.length) > 2 && (
                      <button
                        onClick={() =>
                          setShowAllFinishedListings(!showAllFinishedListings)
                        }
                        type="button"
                        className="justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5"
                      >
                        {showAllFinishedListings ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                )}
                {modalType === "cancelled" && (
                  <div className="flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5">
                    <div className="self-center text-xl font-semibold leading-7 text-center text-slate-900">
                      Cancelled Trips
                    </div>
                    {cancelledTripsData
                      .slice(
                        0,
                        showAllCancelledListings ? cancelledTripsData.length : 2
                      )
                      .map((travel) => (
                        <TravelerModal
                          key={travel.id}
                          travel={travel}
                          status="cancelled"
                        />
                      ))}
                      {cancelledLuggageTripsData
                      .slice(
                        0,
                        showAllCancelledListings ? cancelledLuggageTripsData.length : 2
                      )
                      .map((luggage) => (
                        <LuggageModal
                          key={luggage.id}
                          luggage={luggage}
                          status="cancelled"
                        />
                      ))}
                    {(cancelledTripsData.length + cancelledLuggageTripsData.length) > 2 && (
                      <button
                        onClick={() =>
                          setShowAllCancelledListings(!showAllCancelledListings)
                        }
                        type="button"
                        className="justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5"
                      >
                        {showAllCancelledListings ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
      {showCreateListingModal && (
        <form className="flex justify-center items-center">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {" "}
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg py-12 ">
                <div
                  className="absolute left-[450px] top-4 cursor-pointer"
                  onClick={() => {
                    setShowCreateListingModal(false);
                  }}
                >
                  <img src={cross} alt="" />
                </div>
                <div>
                  <div className="sm:flex items-center">
                    <div className="mt-3 text-left px-4 sm:mt-0 ">
                      <CreateListingPopup/>
                      <div className="relative mt-5 mx-5">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"></div>
                      </div>

                      <div>
                        {/* <button className="justify-center items-center self-center px-16 py-4 mt-10  ml-8 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] ">
                          Next
                        </button> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6"></div>
              </div>
            </div>
          </div>
        </form>
      )}

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
                        <button
                          onClick={openOngoingModal}
                          className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm capitalize bg-indigo-100 rounded-[31px] max-md:px-5"
                        >
                          Check Status
                        </button>
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
                        <button
                        type="button"
                          onClick={openFinishedModal}
                          className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm capitalize bg-indigo-100 rounded-[31px] max-md:px-5"
                        >
                          Check History
                        </button>
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
                        <button
                          onClick={openCancelledModal}
                          className="justify-center self-stretch px-11 py-2.5 mt-4 text-sm text-sky-400 capitalize bg-indigo-100 rounded-[31px] max-md:px-5"
                        >
                          Check History
                        </button>
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
                    {createdTripsData && (
                      <>
                        {createdTripsData
                          .slice(
                            0,
                            showAllTravelerListings
                              ? createdTripsData.length
                              : 1
                          )
                          .map((travel, index) => {
                            if (travel.trips === "created") {
                              // Check if the trip is ongoing
                              return (
                                <TravelerTrips
                                  key={travel.id}
                                  tripData={travel}
                                />
                              ); // Render the Trips component
                            }
                            return null; // Skip rendering if the trip is not ongoing
                          })}
                          {createdLuggageTripsData
                          .slice(
                            0,
                            showAllTravelerListings
                              ? createdLuggageTripsData.length
                              : 1
                          )
                          .map((luggage, index) => {
                            if (luggage.trips === "created") {
                              // Check if the trip is ongoing
                              return (
                                <LuggageTrips
                                  key={luggage.id}
                                  luggage={luggage}
                                />
                              ); // Render the Trips component
                            }
                            return null; // Skip rendering if the trip is not ongoing
                          })}
                      </>
                    )}

                    {(createdTripsData.length + createdLuggageTripsData.length)  > 1 && (
                      <button
                        onClick={() =>
                          setShowAllTravelerListings(!showAllTravelerListings)
                        }
                        className="justify-center items-center self-center px-16 py-5 mt-7 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5"
                      >
                        {showAllTravelerListings ? "Show Less" : "Show More"}
                      </button>
                    )}
                  </div>
                  <button
                    onClick={handleCreateListing}
                    className="flex flex-col ml-5 w-[17%] max-md:ml-0 max-md:w-full"
                  >
                    <div className="flex flex-col  px-7 py-20 w-full text-base font-medium text-center capitalize bg-gray-100 rounded-[31px] text-stone-300 max-md:px-5 max-md:mt-1">
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
              {/* <div className="self-start mt-14 ml-5 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:ml-2.5">
                New Notifications
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardComponent;

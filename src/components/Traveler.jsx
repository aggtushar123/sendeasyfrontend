import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";
import { getLuggage } from "../features/listing/listingSlice";
import LuggageModal from "./Dashboard/LuggageModal";
import cross from "../components/assets/Login/crossIcon.svg";
import CreateListingPopup from "./Dashboard/CreateListingPopup";
import BookNowPopup from "./Dashboard/BooknowPopup";
const Traveler = () => {
  const [currentTraveler, setCurrentTraveler] = useState(null);
  const [showAllTravelerListings, setShowAllTravelerListings] = useState(false);
  const [ongoingTripsData, setOngoingTripsData] = useState([]);
  const [userDetails, setUserDetails] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showAllOngoingListings, setShowAllOngoingListings] = useState(false);
  const [createdLuggageList, setCreatedLuggageList] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLuggage());
  }, [dispatch]);

  const { travelers, luggage, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.listing);
  const { user } = useSelector((state) => state.auth);

  const luggageList = Array.isArray(luggage) ? luggage : [];

  useEffect(() => {
    // Filter the travelerList to get only ongoing trips data
    const filteredOngoingTrips = travelers.filter(
      (travel) => travel.trips === "created"
    );
    setOngoingTripsData(filteredOngoingTrips);
  }, [travelers]);

  useEffect(() => {
    const filteredCreatedLuggageTrips = luggageList.filter(
      (luggage) => luggage.trips === "created"
    );
    setCreatedLuggageList(filteredCreatedLuggageTrips);
  }, [luggageList]);

  useEffect(() => {
    // Fetch user details for each traveler in ongoing trips
    const fetchUserDetails = async () => {
      for (const i of ongoingTripsData) {
        if (!userDetails[i.user]) {
          const action = await dispatch(getUser(i.user));

          if (action.payload) {
            setUserDetails((prevDetails) => ({
              ...prevDetails,
              [i.user]: action.payload,
            }));
          }
        }
      }
    };
    if (ongoingTripsData.length > 0) {
      fetchUserDetails();
    }
  }, [ongoingTripsData, dispatch, userDetails]);

  const handleBookNow = (userDetail) => {
    setCurrentUser(userDetail);
    setShowModal(true);
  };
  const handleClick = (traveler) => {
    
    // setCurrentTraveler(traveler); // Set the current traveler
    
    navigate(`/travelerListing/travelerdetails/${traveler._id}`);
  };

  const handleContactNow = (userId) => {
    console.log(userId);
    navigate("/dashboard/chats");
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
                    setShowModal(false);
                  }}
                >
                  <img src={cross} alt="" />
                </div>
                {createdLuggageList.length === 0 ? (
                  <div className="flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5">
                    <BookNowPopup state={"travel"} />
                  </div>
                ) : (
                  <>
                    <div className="flex flex-col px-4 py-11 bg-white max-w-[980px] rounded-[51px] max-md:px-5">
                      <div className="self-center text-xl font-semibold leading-7 text-center text-slate-900">
                        Created Listings
                      </div>

                      {createdLuggageList
                        .slice(
                          0,
                          showAllOngoingListings ? createdLuggageList.length : 2
                        )
                        .map((luggage) => (
                          <LuggageModal
                            key={luggage.id}
                            luggage={luggage}
                            status="created"
                            userDetail={currentUser}
                          />
                        ))}
                      <>
                        {createdLuggageList.length === 0 &&
                          console.log("empty")}
                      </>

                      {createdLuggageList.length > 2 && (
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
                  </>
                )}
              </div>
            </div>
          </div>
        </form>
      )}
      <div>
        {ongoingTripsData
          .slice(0, showAllTravelerListings ? ongoingTripsData.length : 2).reverse()
          .map((traveler) => {
            const userDetail = userDetails[traveler.user];
          
            return (
              <div
                key={traveler.id}
                onClick={() => handleClick(traveler)}
                className="flex gap-5 justify-between items-start px-7 pt-7 pb-12 mt-16 mb-10 w-full bg-gray-100 max-w-[1239px] rounded-[38px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full"
              >
                <div className="flex flex-col pr-4 max-md:ml-0 max-md:w-full">
                  <div className="flex gap-5 justify-between max-md:mt-10">
                    <div className="flex flex-col items-center font-semibold">
                      <img
                        loading="lazy"
                        srcSet="..."
                        className="aspect-[1.03] w-[86px]"
                      />
                      <div className="self-stretch mt-1 text-base leading-6 text-sky-400">
                        {userDetail?.fName ?? " "}
                      </div>
                      <div className="flex gap-0.5 mt-2.5 text-xs leading-loose text-slate-900">
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/12fa56c1f59dd970aca6c251a796b3783cbe34dc570bfbeda374ae6ec76517dd?"
                          className="shrink-0 aspect-square w-[22px]"
                        />
                        <div className="my-auto">4.9 (16)</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col max-md:max-w-full">
                  <div className="flex gap-5 justify-between px-px leading-[158.5%] text-slate-900 max-md:flex-wrap">
                    <div className="flex flex-col self-start whitespace-nowrap">
                      <div className="text-xs">From:</div>
                      <div className="mt-3.5 text-xl font-semibold">
                        {traveler.sourceLocation}
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/b4556d9019a2f348b1e771dccaa0d0920d8007533c240495519edc8813c8ee00?"
                      className="my-auto border-b-4 border-sky-200 border-solid aspect-[25] w-[276px]"
                    />
                    <div className="flex flex-col text-xs">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb0915405607aca567de60aa5d650b42762448e0826befbffa6d2d0854b03c9a?"
                        className="self-center w-10 aspect-[1.39]"
                      />
                      <div className="mt-1">Travel Via</div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/324e4d607ee3a823cd7a664feef3678c17e206b1a317fafb9a4f12d2744b038b?"
                      className="my-auto border-b-4 border-sky-200 border-solid aspect-[25] w-[276px]"
                    />
                    <div className="flex flex-col self-start whitespace-nowrap">
                      <div className="text-xs">Destination:</div>
                      <div className="mt-3.5 text-xl font-semibold">
                        {traveler.destinationLocation}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
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
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ed5d22ff8845c8dffa2a711e8bd78c8f9a8a1eba29e2a9767122ed92d983ff96?"
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
                      <div className="flex flex-col py-1.5 ml-6">
                        <div className="text-xs">Date:</div>
                        <div className="mt-3.5 text-xl font-semibold">
                          {traveler.date}
                        </div>
                      </div>
                      <div className="flex flex-col py-2">
                        <div className="text-xs">Time:</div>
                        <div className="mt-3.5 text-xl font-semibold">
                          {traveler.timeOfDelivery}
                        </div>
                      </div>
                      <div className="flex flex-col py-2">
                        <div className="text-xs">Luggage Space:</div>
                        <div className="mt-2.5 text-xl font-semibold">
                          {traveler.luggageSpace} KG
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="flex flex-col items-start pl-11 max-md:pl-5">
                    <div className="text-xs leading-5 text-sky-400">Price</div>
                    <div className="mt-2.5 text-xl font-semibold leading-8 text-sky-400">
                      $ {traveler.expectation}
                    </div>
                    <div className="mt-2 ml-2.5 text-xs leading-4 text-emerald-600">
                      (Suggested $100)
                    </div>
                    <div className="flex gap-3 px-0.5 mt-6">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/baefcd77e32ab6ff6d774be13ef038cf0629e78074ad69d103f920c6101aefe2?"
                        className="shrink-0 my-auto w-7 aspect-square"
                      />
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/05837094a9bbfcd0543d8bfad4056edf315ad88eb2b9e1174c7cff73a4b0c171?"
                        className="shrink-0 w-8 aspect-square"
                      />

                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/29daa0f8450483a2071e63756aba7eeb8d4d4067f2db7427c7c150e8c797d74d?"
                        className="shrink-0 w-8 aspect-square"
                      />
                    </div>
                  </div>
                  {user?._id === traveler.user ? (
                    <></>
                  ) : (
                    <>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow(userDetail);
                        }}
                        className="flex gap-2 px-6 py-2 mt-6 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]"
                      >
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleBookNow(userDetail);
                          }}
                          className="flex-auto my-auto"
                        >
                          Book Now
                        </button>
                      </div>
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBookNow();
                        }}
                        className="flex gap-2 px-6 py-2 mt-6 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]"
                      >
                        <img
                          loading="lazy"
                          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73552b36b8c3d58faba037db1fd35fff9dc2b0b3fe363beda8f6703a660968fc?"
                          className="shrink-0 w-6 aspect-square"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleContactNow(userDetail._id);
                          }}
                          className="flex-auto my-auto"
                        >
                          Contact Now
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        {ongoingTripsData.length > 2 && (
          <div className="flex justify-center  mb-20">
            <button
              onClick={() =>
                setShowAllTravelerListings(!showAllTravelerListings)
              }
              className="justify-center items-center px-16 py-5 mt-20 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10"
            >
              {showAllTravelerListings ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Traveler;

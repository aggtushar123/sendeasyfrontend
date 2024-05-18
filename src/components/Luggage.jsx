import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";

function LuggageListing() {
  const [currentTraveler, setCurrentTraveler] = useState(null);
  const [showAllLuggageListings, setShowAllLuggageListings] = useState(false);
  const [ongoingTripsData, setOngoingTripsData] = useState([]);
  const { luggageListings, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.listing);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (luggage) => {
    dispatch(getUser(luggage.user));
    setCurrentTraveler(luggage); // Set the current traveler
    navigate("/luggageListing/luggagedetails", {
      state: { luggageDetails: luggage },
    });
  };
  useEffect(() => {
    // Filter the travelerList to get only ongoing trips data
    const filteredOngoingTrips = luggageListings.filter(
      (travel) => travel.trips === "created"
    );
    
    setOngoingTripsData(filteredOngoingTrips);
  
  }, [luggageListings]);
  return (
    <div>
      {ongoingTripsData.slice(0, showAllLuggageListings ? ongoingTripsData.length : 2).map(
        (luggage) =>
          luggage.trips === "created" && (
            <div
              key={luggage.id}
              className="flex gap-5 justify-between items-start px-7 pt-7 pb-12 mt-16 mb-10 w-full bg-gray-100 max-w-[1239px] rounded-[38px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full"
            >
              <div className="flex flex-col w-[23%] max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 justify-between max-md:mt-10">
                  <div className="flex flex-col items-center font-semibold">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[1.03] w-[86px]"
                    />
                    <div className="self-stretch mt-1 text-base leading-6 text-sky-400">
                      Ahmad L.
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
                  <div className="flex flex-col my-auto">
                    <div className="text-xs text-slate-900">Item type:</div>
                    <div className="justify-center px-5 py-2.5 mt-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px]">
                      Electronics
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[77%] max-md:ml-0 max-md:w-full">
                <div className="grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                    <div className="flex flex-col w-[78%] max-md:ml-0 max-md:w-full">
                      <div className="flex gap-5 justify-between self-stretch my-auto leading-[158.5%] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <div className="flex flex-col py-2 whitespace-nowrap">
                          <div className="text-xs">From:</div>
                          <div className="mt-3.5 text-xl font-semibold">
                            {luggage.destinationLocation}
                          </div>
                        </div>
                        <div className="flex flex-col py-2 whitespace-nowrap">
                          <div className="text-xs">Destination:</div>
                          <div className="mt-3.5 text-xl font-semibold">
                            {luggage.sourceLocation}
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
                    <div className="flex flex-col ml-5 w-[22%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow max-md:mt-10">
                        <div className="flex flex-col items-start pr-3.5 pl-8 max-md:pl-5">
                          <div className="text-xs leading-5 text-sky-400">
                            Expected to pay
                          </div>
                          <div className="mt-2.5 text-xl font-semibold leading-8 text-sky-400">
                            $ 50
                          </div>
                          <div className="self-center mt-1.5 text-xs leading-4 text-emerald-600">
                            (Suggested $100)
                          </div>
                          <div className="flex gap-3 px-px mt-4">
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/baefcd77e32ab6ff6d774be13ef038cf0629e78074ad69d103f920c6101aefe2?"
                              className="shrink-0 my-auto w-7 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4670388bdad860b316bb01da5602ccdb1744b65ae82d1ad90f18fb7c329ad1?"
                              className="shrink-0 w-8 aspect-square"
                            />
                            <img
                              loading="lazy"
                              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6fb7678beaa272b2e03a023748156a99d2e4c84f680af33c3c1c7fedcaedde84?"
                              className="shrink-0 w-8 aspect-square"
                            />
                          </div>
                        </div>
                        <div className="flex gap-2 px-3 py-3.5 mt-4 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]">
                          <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/73552b36b8c3d58faba037db1fd35fff9dc2b0b3fe363beda8f6703a660968fc?"
                            className="shrink-0 w-6 aspect-square"
                          />
                   
                          <button
                    onClick={() => handleClick(luggage)}
                    className="flex-auto my-auto"
                  >
                    Contact Now
                  </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      )}
      {ongoingTripsData.length > 2 && (
        <div className="flex justify-center mb-20">
        <button
          onClick={() => setShowAllLuggageListings(!showAllLuggageListings)}
          className="justify-center items-center px-16 py-5 mt-20 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10"
        >
          {showAllLuggageListings ? "Show Less" : "Show More"}
        </button>
        </div>
      )}
    </div>
  );
}

export default LuggageListing;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../features/auth/authSlice";

const Traveler = () => {
  const [currentTraveler, setCurrentTraveler] = useState(null);
  const [showAllTravelerListings, setShowAllTravelerListings] = useState(false);
  const [ongoingTripsData, setOngoingTripsData] = useState([]);
  const { travelers, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = (traveler) => {
    dispatch(getUser(traveler.user));
    setCurrentTraveler(traveler); // Set the current traveler
    navigate("/travelerListing/travelerdetails", {
      state: { travelerDetails: traveler },
    });
  };
  useEffect(() => {
    // Filter the travelerList to get only ongoing trips data
    const filteredOngoingTrips = travelers.filter(
      (travel) => travel.trips === "created"
    );
    
    setOngoingTripsData(filteredOngoingTrips);
  
  }, [travelers]);
  
  return (
    <div>
      {ongoingTripsData.slice(0, showAllTravelerListings ? ongoingTripsData.length : 2).map(
        (traveler) =>
            <div
              key={traveler.id}
              className="flex gap-5 justify-between items-start px-7 pt-7 pb-12 mt-16 mb-10 w-full bg-gray-100 max-w-[1239px] rounded-[38px] max-md:flex-wrap max-md:px-5 max-md:mt-10 max-md:max-w-full"
            >
              <img
                loading="lazy"
                srcSet="https://s3-alpha-sig.figma.com/img/049d/8973/a367dd32260621365d9cdf0b6cf3ea5f?Expires=1714348800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Frzff7iksjDZ8bNvA3w77PPqEW75kIgAf57S1QiGlmysvxryHsoe2oqAdtvpnVVbWdl8XHVBaRTyop66XCGaXS1HmEgYAri7QMi1G0AWgwaeUzgyjTXP4ccudMBP8A5swGpET5tY~LsM-NVkQ8eUdb3QcGpe6kTbItw9T5JxkuiW0HCDocnvAqa8s2-OEeDFl5B6oM3iIBtRzykTaRsgG9nxd5nvFvxeMADu8wMaFivfDGOVCJzu3gDhfq682jo40W-~rLYynbIGOUrKKm2wJpateBcbwkr6BvnP6UQPS0ApWl~HHSTw14AkPmgfwVoo5gqpNkgoCLG2X-cj~rOyNg__"
                className="shrink-0 my-auto max-w-full w-[79px] rounded-full border-green-500 border-4"
              />
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
                <div className="flex gap-2 px-3 py-3.5 mt-6 text-base font-medium text-center text-white bg-sky-400 rounded-[31px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/73552b36b8c3d58faba037db1fd35fff9dc2b0b3fe363beda8f6703a660968fc?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <button
                    onClick={() => handleClick(traveler)}
                    className="flex-auto my-auto"
                  >
                    Contact Now
                  </button>
                </div>
              </div>
            </div>
          
      )}
      {ongoingTripsData.length > 2 && (
        <div className="flex justify-center  mb-20">
        <button
          onClick={() => setShowAllTravelerListings(!showAllTravelerListings)}
          className="justify-center items-center px-16 py-5 mt-20 mb-20 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10"
        >
          {showAllTravelerListings ? "Show Less" : "Show More"}
        </button>
        </div>
      )}
    </div>
  );
};

export default Traveler;

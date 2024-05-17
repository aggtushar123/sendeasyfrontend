import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
import dateIcon from "../components/assets/Home/date.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createTraveler } from '../features/listing/listingSlice';
const CreateTraveller = () => {
  const [travelerData, setTravelerData] = useState({
    destinationLocation: "",
    luggageSpace: "",
    date: "",
    expectation: "",
    timeOfDelivery: "",
    sourceLocation: "",
    departure: "",
    items: "",
  });
  const [travelType, setTravelType] = useState("");
  const {
    destinationLocation,
    luggageSpace,
    date,
    expectation,
    timeOfDelivery,
    sourceLocation,
    departure,
    items,
  } = travelerData;
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChange = (e) => {
    setTravelerData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleButtonClick = (option) => {
    setTravelType(option);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !destinationLocation ||
      !luggageSpace ||
      !date ||
      !expectation ||
      !timeOfDelivery ||
      !sourceLocation ||
      !departure
    ) {
      toast.error("Empty fields not allowed");
    } else {
      const travelerListingData = {
        travelType,
        destinationLocation,
        luggageSpace,
        date,
        expectation,
        timeOfDelivery,
        sourceLocation,
        departure,
        items,
      };
      console.log(travelerListingData);
      try {
        const response = await dispatch(createTraveler(travelerListingData));
        if (response.meta.requestStatus === 'fulfilled') {
          console.log("Created") // Set showModal to true upon successful registration
          navigate('/travelerListing')
        } else {
          // Extract and show the specific error message from the response
          const errorMessage = response.error.message;
          toast.error(errorMessage);
        }
      } catch (error) {
        // Handle dispatch error
        console.error('Dispatch error:', error);
        toast.error('An error occurred. Please try again later.');}
    }
  };

  return (
    <div className="flex justify-center items-center pb-20 rounded-[29px] max-md:px-5">
      <div className="flex flex-col mt-10 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
          <span className="font-semibold text-sky-400">Create</span> Traveler
          listing
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex gap-4 mt-3.5 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[849px] max-md:flex-wrap">
            <button
              type="button"
              className={`justify-center items-center px-16 py-6 rounded-3xl max-md:px-5 ${
                travelType === "local"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100"
              }`}
              onClick={() => handleButtonClick("local")}
            >
              Local
            </button>
            <button
              type="button"
              className={`justify-center items-center px-16 py-6 rounded-3xl max-md:px-5 ${
                travelType === "outstation"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100"
              }`}
              onClick={() => handleButtonClick("outstation")}
            >
              Outstation
            </button>
            <button
              type="button"
              className={`justify-center items-center px-16 py-6 rounded-3xl max-md:px-5 ${
                travelType === "international"
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-gray-100"
              }`}
              onClick={() => handleButtonClick("international")}
            >
              International
            </button>
          </div>

          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Destination Location</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="destinationLocation"
                  name="destinationLocation"
                  value={destinationLocation}
                  onChange={onChange}
                  required
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                  alt="icon"
                  className="shrink-0 aspect-square w-[50px] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Available Luggage Space</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="range"
                  min="1"
                  max="20"
                  className="flex-auto py-5 marker:my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="dluggageSpace"
                  name="luggageSpace"
                  value={luggageSpace}
                  onChange={onChange}
                  required
                />
                <span className="ml-3 py-2.5 text-blue-950">Max</span>
                <span className="ml-3 pr-5 py-2.5 text-sky-400">KG</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Date For Travel</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="date"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  placeholder="Enter Date"
                  id="date"
                  name="date"
                  value={date}
                  onChange={onChange}
                  required
                />
                <img
                  loading="lazy"
                  src={dateIcon}
                  alt="icon"
                  className="shrink-0 aspect-square w-[50px] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Est Monetary expectation</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[426px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="expectation"
                  name="expectation"
                  value={expectation}
                  onChange={onChange}
                  required
                />
                <span className="ml-3 py-2.5 pr-2 text-sky-400">
                  Per kg USD
                </span>
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Recommended</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[184px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <div className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none" />
                <span className="ml-3 py-2.5 text-sky-400">Per kg USD</span>
              </div>
            </div>
          </div>

          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Expected time of delivery</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="timeOfDelivery"
                  name="timeOfDelivery"
                  value={timeOfDelivery}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Source Location</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="sourceLocation"
                  name="sourceLocation"
                  value={sourceLocation}
                  onChange={onChange}
                  required
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                  alt="icon"
                  className="shrink-0 aspect-square w-[50px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Time of dept</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="departure"
                  name="departure"
                  value={departure}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Items you won’t want to carry</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="items"
                  name="items"
                  value={items}
                  onChange={onChange}
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                  alt="icon"
                  className="shrink-0 aspect-square w-[50px] cursor-pointer"
                />
              </div>
            </div>
          </div>
          <button className="justify-center items-center mt-16 self-center px-16 py-5 max-w-full text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] w-[349px] max-md:px-5">
            Create Now
          </button>
        </form>

        <div className="flex flex-col self-center mt-24 max-w-full w-[693px] max-md:mt-10">
          <div className="mt-40 text-lg font-semibold tracking-wide text-rose-500 max-md:mt-10 max-md:max-w-full">
            Disclaimer{" "}
          </div>
          <div className="flex gap-5 mt-2.5 text-base tracking-wide text-center max-md:flex-wrap">
            <div className="flex-auto text-rose-500">
              These Items are prohibited one Flight
            </div>
            <div className="flex-auto text-sky-400 underline">
              Visit here to learn more
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="..."
            className="mt-11 w-full aspect-[2.56] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateTraveller;

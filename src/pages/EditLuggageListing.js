import React, { useState } from "react";
import {useLocation, useNavigate} from "react-router-dom"
import dateIcon from "../components/assets/Home/date.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateLuggage } from '../features/listing/listingSlice';
const Editluggage = () => {
    const location = useLocation();
    const luggageData = location.state.luggageData;
const [formData, setFormData] = useState({
    destinationLocation:luggageData.destinationLocation,
    numberOfBags: luggageData.numberOfBags,
    sourceLocation:luggageData.sourceLocation,
    totalWeight: luggageData.totalWeight,
    dateRange: luggageData.dateRange,
    typeOfItems: luggageData.typeOfItems,
    nameOfItems: luggageData.nameOfItems,
    receiverName: luggageData.receiverName,
    receiverNumber: luggageData.receiverNumber,
    receiverLocation: luggageData.receiverLocation,
    note: luggageData.note,
    travelType:luggageData.travelType,
    _id:luggageData._id,
})
  
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleButtonClick = (option) => {
    setFormData((prevState) => ({
      ...prevState,
      travelType: option,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
      console.log(formData)
    //   try {
    //     const response = await dispatch(updateluggage({ luggageId: luggageData._id, luggageData: formData }));
    //     if (response.meta.requestStatus === 'fulfilled') {
    //       console.log("Updated") // Set showModal to true upon successful registration
    //       navigate('/luggageListing')
    //     } else {
    //       // Extract and show the specific error message from the response
    //       const errorMessage = response.error.message;
    //       toast.error(errorMessage);
    //     }
    //   } catch (error) {
    //     // Handle dispatch error
    //     console.error('Dispatch error:', error);
    //     toast.error('An error occurred. Please try again later.');}
    
  };

  return (
    <div className="flex justify-center items-center pb-20 rounded-[29px] max-md:px-5">
      <div className="flex flex-col mt-10 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
          <span className="font-semibold text-sky-400">Edit</span> Luggage
          listing
        </div>

        <form onSubmit={onSubmit}>
          <div className="flex gap-4 mt-3.5 max-w-full text-lg font-semibold tracking-wide text-center whitespace-nowrap text-blue-950 w-[849px] max-md:flex-wrap">
            <button
              type="button"
              className={`justify-center items-center px-16 py-6 rounded-3xl max-md:px-5 ${
                formData.travelType === "local"
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
                formData.travelType === "outstation"
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
                formData.travelType === "international"
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
                  value={formData.destinationLocation}
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
              <div className="flex-auto">Number of Bags</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="numberOfBags"
                  name="numberOfBags"
                  value={formData.numberOfBags}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Source Location</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="sourceLocation"
                  name="sourceLocation"
                  value={formData.sourceLocation}
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
              <div className="flex-auto">Total Weight</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="totalWeight"
                  name="totalWeight"
                  value={formData.totalWeight}
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
              <div className="flex-auto">Date For Travel</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="date"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  placeholder="Enter Date"
                  id="dateRange"
                  name="dateRange"
                  value={formData.dateRange}
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
              <div className="flex-auto">Name & Pics of Items</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="nameOfItems"
                  name="nameOfItems"
                  value={formData.nameOfItems}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Type of Item</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="typeOfItems"
                  name="typeOfItems"
                  value={formData.typeOfItems}
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
              <input
                type="file"
                accept="image/*"
                className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Minimum Charges (Recommended)</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <div
                 
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                ></div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/02d3a26d6f2a423afe74d7ebea8938f79d59ceaf8af12eb2c7dfae01c51954e9?"
                  alt="icon"
                  className="shrink-0 aspect-square w-[50px] cursor-pointer"
                />
              </div>
            </div>
            <div className="flex-auto"></div>
          </div>
          <div className="text-3xl font-medium mt-20 tracking-wider capitalize text-slate-900 max-md:max-w-full">
            <span className="font-semibold text-sky-400">Receiver</span> Details
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Receiver Full Name</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto py-2.5 max-md:max-w-full bg-transparent border-none focus:outline-none"
                  placeholder="Enter Name"
                  id="receiverName"
                  name="receiverName"
                  value={formData.receiverName}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
            <div className="flex-auto">
              <div className="flex-auto">Receiver Phone Number</div>
              <div className="flex gap-2 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="receiverNumber"
                  name="receiverNumber"
                  value={formData.receiverNumber}
                  onChange={onChange}
                  required
                />
              </div>
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Receiver Location</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="receiverLocation"
                  name="receiverLocation"
                  value={formData.receiverLocation}
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
              <div className="flex-auto">Note</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="note"
                  name="note"
                  value={formData.note}
                  onChange={onChange}
                
                />
              </div>
            </div>
          </div>
          <button className="justify-center items-center self-center px-16 py-5 mt-10 max-w-full text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] w-[349px] max-md:px-5">
            Update Now
          </button>
        </form>

        
      </div>
    </div>
  );
};

export default Editluggage;

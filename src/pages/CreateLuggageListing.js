import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import date from "../components/assets/Home/date.svg";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createLuggage } from "../features/listing/listingSlice";

function CreateLuggage() {
  const [image, setImage] = useState("");
  const [image2, setImage2] = useState("");
  const [luggageData, setLuggageData] = useState({
    destinationLocation: "",
    numberOfBags: "",
    sourceLocation: "",
    totalWeight: "",
    dateRange: "",
    typeOfItems: "",
    nameOfItems: "",
    receiverName: "",
    receiverNumber: "",
    receiverLocation: "",
    note: "",
    type: "luggage",
    expectation: "",
  });
  const [travelType, setTravelType] = useState("");
  const [file, setFile] = useState("");
  const [file2, setFile2] = useState("");
  const {
    destinationLocation,
    numberOfBags,
    sourceLocation,
    totalWeight,
    dateRange,
    typeOfItems,
    nameOfItems,
    receiverName,
    receiverNumber,
    receiverLocation,
    note,
    type,
    expectation
  } = luggageData;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onChange = (e) => {
    setLuggageData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const handleButtonClick = (option) => {
    setTravelType(option);
  };

  function previewFiles(file) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result);
    };
  }
  function previewFiles2(file2) {
    const reader = new FileReader();
    reader.readAsDataURL(file2);
    reader.onloadend = () => {
      setImage2(reader.result);
    };
  }
  const handleFileChange1 = (e) => {
    const file = e.target.files[0];
    setFile(file);
    previewFiles(file);
  };
  const handleFileChange2 = (e) => {
    const file2 = e.target.files[0];
    setFile2(file2);
    previewFiles2(file2);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      !travelType ||
      !destinationLocation ||
      !numberOfBags ||
      !sourceLocation ||
      !totalWeight ||
      !dateRange ||
      !typeOfItems ||
      !nameOfItems ||
      !receiverName ||
      !receiverNumber ||
      !receiverLocation ||
      !image ||
      !image2 ||
      !expectation
    ) {
      toast.error("Empty fields not allowed");
    } else {
      const luggageListingData = {
        travelType,
        destinationLocation,
        numberOfBags,
        sourceLocation,
        image,
        image2,
        totalWeight,
        dateRange,
        typeOfItems,
        nameOfItems,
        receiverName,
        receiverNumber,
        receiverLocation,
        note,
        type,
        expectation,
      };
      console.log(luggageListingData);
      try {
        const response = await dispatch(createLuggage(luggageListingData));
        if (response.meta.requestStatus === "fulfilled") {
          console.log("Created");
          navigate("/luggageListing"); // Set showModal to true upon successful registration
        } else {
          // Extract and show the specific error message from the response
          const errorMessage = response.error.message;
          toast.error(errorMessage);
        }
      } catch (error) {
        // Handle dispatch error
        console.error("Dispatch error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };
  return (
    <div className="flex justify-center items-center pb-20 rounded-[29px] max-md:px-5">
      <div className="flex flex-col mt-10 w-full max-w-[1304px] max-md:mt-10 max-md:max-w-full">
        <div className="text-3xl font-medium tracking-wider capitalize text-slate-900 max-md:max-w-full">
          <span className="font-semibold text-sky-400">Create</span> Luggage
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
              <div className="flex-auto">Number of Bags</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="numberOfBags"
                  name="numberOfBags"
                  value={numberOfBags}
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
            <div className="flex-auto">
              <div className="flex-auto">Total Weight</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="totalWeight"
                  name="totalWeight"
                  value={totalWeight}
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
                  value={dateRange}
                  onChange={onChange}
                  required
                />
                <img
                  loading="lazy"
                  src={date}
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
                  value={nameOfItems}
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
                  value={typeOfItems}
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
            <div className="flex flex-row">
              <input
                id="fileInput1"
                onChange={(e) => handleFileChange1(e)}
                type="file"
                accept="image/*"
                className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                required
              />
              <img
                src={image}
                alt=""
                className="shrink-0 aspect-[1.04] w-[120px]"
              />
              <input
                id="fileInput2"
                onChange={(e) => handleFileChange2(e)}
                type="file"
                accept="image/*"
                className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                required
              />
              <img
                src={image2}
                alt=""
                className="shrink-0 aspect-[1.04] w-[120px]"
              />
            </div>
          </div>
          <div className="flex gap-5 mt-5 max-w-[1380px] mx-auto text-xs tracking-wide capitalize text-blue-950 w-[1380px] max-md:flex-wrap max-md:mt-10">
            <div className="flex-auto">
              <div className="flex-auto">Minimum Charges (Recommended)</div>
              <div className="flex gap-5 py-2.5 pr-2 pl-7 mt-2 text-lg font-semibold tracking-wide bg-gray-100 rounded-3xl max-w-[636px] text-blue-950 max-md:flex-wrap max-md:pl-5">
                <input
                  type="text"
                  className="flex-auto py-2.5 my-auto max-md:max-w-full bg-transparent border-none focus:outline-none"
                  id="expectation"
                  name="expectation"
                  value={expectation}
                  onChange={onChange}
                  placeholder="50"
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
                  value={receiverName}
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
                  value={receiverNumber}
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
                  value={receiverLocation}
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
                  value={note}
                  onChange={onChange}
                />
              </div>
            </div>
          </div>
          <button className="justify-center items-center self-center px-16 py-5 mt-10 max-w-full text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] w-[349px] max-md:px-5">
            Create Now
          </button>
        </form>

        <div className="flex flex-col self-center mt-10 max-w-full w-[693px] max-md:mt-10">
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
}

export default CreateLuggage;

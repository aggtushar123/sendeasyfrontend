import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogo from "../assets/Profile/FacebookLogo.svg";
import LinkedInLogo from "../assets/Profile/LinkedInLogo.svg";
import InstagramLogo from "../assets/Profile/InstagramLogo.svg";
import { useNavigate, Link } from "react-router-dom";
import TravelerTrips from "./TravelerTrips";
function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { traveler, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const travelerList = Array.isArray(traveler) ? traveler : [];

  const kycClicked = () => {
    navigate("/dashboard/updatekyc");
  };
  return (
    <div className="flex gap-5 justify-between items-start mt-10 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col justify-center text-base text-sky-400" />
      <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
      </div>
      <div className="flex flex-col self-stretch max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto justify-center items-center self-start text-lg font-bold tracking-wide text-blue-950">
            Profile Details
          </div>
          <button
            onClick={kycClicked}
            className="justify-center items-center px-16 py-5 text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5"
          >
            Edit Profile
          </button>
        </div>

        <div className="flex flex-col justify-center items-start px-6 py-6 mt-9 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b6064dea33688c741bf584a0e5ed0763eae0305aca86a0da592f3ab1e958f3da?"
              className="shrink-0 w-5 aspect-square"
            />
            <div>{user.fName}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-6 py-6 mt-4 text-sm tracking-wide whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/55df987dbbe14e21d0f709d80302569953f04bc663f4df8176f415207380e6ff?"
              className="shrink-0 w-5 aspect-square"
            />
            <div>{user.email}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-6 py-6 mt-4 text-sm tracking-wide capitalize whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/749df466dcd5279d69d921d0a4d3bd8a0b91805e79674e88afa89d5fb8b6d51a?"
              className="shrink-0 w-5 aspect-square"
            />
            <div>{user.mobile}</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start px-6 py-6 mt-4 text-sm tracking-wide whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d77484d2ddda742524b71e88618e772f7c6e50d05768210143bc327bc4e1489?"
              className="shrink-0 w-5 aspect-square"
            />
            <div>***********</div>
          </div>
        </div>
        <div className="flex gap-5 justify-between mt-16 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          <div className="my-auto text-lg font-bold tracking-wide text-blue-950">
            My Posts
          </div>
          <Link
            to="/createTraveler"
            className="justify-center items-center px-16 py-4 text-xl font-medium text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5"
          >
            Create a Listing
          </Link>
        </div>
        <div className="mt-2 mr-auto text-xs font-semibold tracking-wide leading-5 text-right text-sky-400 max-md:max-w-full">
          Traveler listing
        </div>
        <div className="flex flex-col  mt-4 rounded-[38px] max-md:px-5 max-md:max-w-full">
          {travelerList && (
            <>
              {travelerList.map((travel) => {
                if (travel.trips === "finished") {
                  // Check if the trip is ongoing
                  return <TravelerTrips key={travel.id} tripData={travel} />; // Render the Trips component
                }
                return null; // Skip rendering if the trip is not ongoing
              })}
            </>
          )}
        </div>

        <div className="mt-10 mr-auto text-xs font-semibold tracking-wide leading-5 text-right text-sky-400 max-md:max-w-full">
          Luggage listing
        </div>
            <div className="flex flex-col  mt-4 rounded-[38px] max-md:px-5 max-md:max-w-full">
          {travelerList && (
            <>
              {travelerList.map((travel) => {
                if (travel.trips === "finished") {
                  // Check if the trip is ongoing
                  return <TravelerTrips key={travel.id} tripData={travel} />; // Render the Trips component
                }
                return null; // Skip rendering if the trip is not ongoing
              })}
            </>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center mt-24 max-md:mt-10">
        <Link to={user.linkedin}>
          <img
            loading="lazy"
            srcSet={LinkedInLogo}
            className="aspect-[1.04] w-[73px]"
          />
        </Link>
        <Link to={user.facebook}>
          <img
            loading="lazy"
            srcSet={FacebookLogo}
            className="mt-4 aspect-[1.04] w-[73px]"
          />
        </Link>
        <Link to={user.instagram}>
          <img
            loading="lazy"
            srcSet={InstagramLogo}
            className="mt-4 aspect-[1.04] w-[73px]"
          />
        </Link>
      </div>
    </div>
  );
}

export default Profile;

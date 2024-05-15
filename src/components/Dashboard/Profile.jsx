import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogo from "../assets/Profile/FacebookLogo.svg";
import LinkedInLogo from "../assets/Profile/LinkedInLogo.svg";
import InstagramLogo from "../assets/Profile/InstagramLogo.svg";
import { useNavigate, Link } from "react-router-dom";
import TravelerTrips from "./TravelerTrips";
import cross from "../../components/assets/Login/crossIcon.svg";
import Luggage from "../assets/Profile/Luggage.svg";
import Traveler from "../assets/Profile/Traveler.svg";
function Profile() {
  const { user } = useSelector((state) => state.auth);
  const { traveler, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.listing
  );
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const travelerList = Array.isArray(traveler) ? traveler : [];

  const createListing = () => {
    setShowModal(true);
  };

  const kycClicked = () => {
    navigate("/dashboard/updatekyc");
  };
  return (
    <>
      {showModal && (
        <form className="flex justify-center items-center">
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              {" "}
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
              <div className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg py-12 ">
                <div
                  className="absolute left-[450px] top-4 cursor-pointer"
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <img src={cross} alt="" />
                </div>
                <div className="bg-white px-4 pb-4  sm:p-6 sm:pb-4">
                  <div className="sm:flex items-center">
                    <div className="mt-3 text-left px-4 sm:mt-0 ">
                      <h3
                        className="font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        <div className="text-left mt-1 mx-5 text-2xl font-medium tracking-wider leading-10 ">
                          What do you want to
                          <span className="font-extrabold text-sky-400">
                            {" "}
                            List?{" "}
                          </span>
                        </div>
                        <div className="mt-14 max-w-full w-[480px] max-md:mt-10">
                          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                            <Link
                              to="/createLuggage"
                              className="flex flex-col max-md:ml-0 max-md:w-full"
                            >
                              <div className="flex flex-col grow items-start px-12 py-10  text-lg font-medium tracking-wide text-center capitalize whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:mt-10">
                                <img
                                  loading="lazy"
                                  srcSet={Luggage}
                                  className="aspect-[1.28] max-sm:mx-auto"
                                />
                                <div className="mx-auto mt-5">Luggage</div>
                              </div>
                            </Link>
                            <Link
                              to="/createTraveler"
                              className="flex flex-col max-md:ml-0 max-md:w-full"
                            >
                              <div className="flex flex-col grow px-12 py-10  text-lg font-semibold tracking-wide text-center whitespace-nowrap bg-gray-100 rounded-3xl text-blue-950 max-md:px-5 max-md:mt-10">
                                <img
                                  loading="lazy"
                                  srcSet={Traveler}
                                  className="self-center aspect-[1.25]"
                                />
                                <div className="mt-7">Traveling</div>
                              </div>
                            </Link>
                          </div>
                        </div>
                      </h3>
                      <div className="relative mt-5 mx-5">
                        <div
                          className="absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none"
                        ></div>
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

      <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
          </div>
          <div className="flex flex-col  w-[86%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-row justify-between px-5 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col">
                <div className="text-lg font-bold tracking-wide text-blue-950 max-md:max-w-full">
                  Profile Details
                </div>
              </div>
              <button
                onClick={kycClicked}
                className="flex justify-center items-center px-16 py-5 text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5"
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
              <button
                onClick={createListing}
                className="justify-center items-center px-16 py-4 text-xl font-medium text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5"
              >
                Create a Listing
              </button>
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
                      return (
                        <TravelerTrips key={travel.id} tripData={travel} />
                      ); // Render the Trips component
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
                      return (
                        <TravelerTrips key={travel.id} tripData={travel} />
                      ); // Render the Trips component
                    }
                    return null; // Skip rendering if the trip is not ongoing
                  })}
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center ml-8 mt-24 max-md:mt-10">
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
      </div>
    </>
  );
}

export default Profile;

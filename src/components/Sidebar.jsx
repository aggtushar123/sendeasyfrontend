import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import cross from "../components/assets/Login/crossIcon.svg";
function Sidebar() {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const { user } = useSelector((state) => state.auth);

  const deleteAccount = () => {
    setShowModal(true);
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
                          Are you sure, you want to
                          <span className="font-extrabold text-rose-500">
                            {" "}
                            Delete your account?{" "}
                          </span>
                        </div>
                        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="grow justify-center items-center px-16 py-7 mt-16 w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-rose-500 rounded-[29px] max-md:px-5 max-md:mt-10">
                              Yes
                            </div>
                          </div>
                          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                            <div className="grow justify-center items-center px-16 py-7 mt-16 w-full text-base font-bold tracking-wide text-center text-sky-400 whitespace-nowrap bg-white border-2 border-sky-400 border-solid rounded-[29px] max-md:px-5 max-md:mt-10">
                              No
                            </div>
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
      <div className="flex flex-col grow  text-base text-sky-400  mt-5 max-md:mt-10">
        <div className="flex flex-col self-stretch py-9 -ml-px w-[185px] h-[765px] bg-gray-100 grow-0 rounded-[39px]">
          <img
            loading="lazy"
            srcSet=""
            className="self-center w-40 rounded-full border-emerald-600 border-solid aspect-[1.03] border-[6px] stroke-[6px]"
          />
          <div className="flex gap-0.5 self-center mt-1.5 font-semibold whitespace-nowrap leading-[50%] text-slate-900">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c2740be267d6d9e5c960131d2fa3a48ed688dd1574704a6f3408ca29098d71?"
              className="shrink-0 aspect-square w-[22px]"
            />
            <div className="my-auto">4.9</div>
          </div>

          <div className="flex gap-4 self-center mt-5 mb-5 text-xl leading-8 whitespace-nowrap text-slate-900">
            <div>Review:</div>
            <div className="font-semibold">16</div>
          </div>

          {/* DASHBOARD */}
          <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5"
            to="/dashboard"
          >
            Dashboard
          </Link>
          {/* PROFILE */}
          <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
            to="profile"
          >
            Profile
          </Link>

          {/* NOTIFICATIONS */}
          {/* <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
            to="notification"
          >
            Notifications
          </Link> */}

          {/* CHATS */}

          <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
            to="chats"
          >
            Chats
          </Link>

          {/* UPDATE KYC */}

          <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
            to="updatekyc"
          >
            Update KYC
          </Link>

          {/* TERMS AND CONDITIONS */}

          <Link
            className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
            to="t&c"
          >
            T&C
          </Link>

          <button
            onClick={deleteAccount}
            className="self-center w-[160px] h-[43px]  mt-4 font-medium text-center text-rose-500 bg-rose-500 bg-opacity-10 rounded-[31px] max-md:px-5 py-2"
          >
            Delete Account
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;

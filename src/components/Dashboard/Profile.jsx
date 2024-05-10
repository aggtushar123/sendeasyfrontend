import React from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogo from "../assets/Profile/FacebookLogo.svg";
import LinkedInLogo from "../assets/Profile/LinkedInLogo.svg";
import InstagramLogo from "../assets/Profile/InstagramLogo.svg";
import {
  toggleDashFalse,
  toggleProfileFalse,
  toggleNotifFalse,
  toggleChatFalse,
  toggleUpdateKycTrue,
  toggleTnCFalse,
} from "../../features/dashboardSlice";

function Profile() {
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  const dispatch = useDispatch();

  const kycClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycTrue());
    dispatch(toggleTnCFalse());
  };
  return (
    <div className="flex gap-5 justify-between items-start mt-10 max-md:flex-wrap max-md:max-w-full">
      <div className="flex flex-col justify-center text-base text-sky-400" />
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
          <div className="justify-center items-center px-16 py-4 text-xl font-medium text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5">
            Create a Listing
          </div>
        </div>
        <div className="mt-2 mr-auto text-xs font-semibold tracking-wide leading-5 text-right text-sky-400 max-md:max-w-full">
          Traveler listing
        </div>
        <div className="flex flex-col px-10 pt-7 pb-12 mt-4 bg-gray-100 rounded-[38px] max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 w-full leading-[158.5%] max-md:flex-wrap max-md:max-w-full">
            <div className="flex flex-auto gap-3.5 justify-between text-slate-900 max-md:flex-wrap">
              <div className="flex flex-col self-start whitespace-nowrap">
                <div className="text-xs">From:</div>
                <div className="mt-3.5 text-xl font-semibold">USA</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/156b7646d3a3594f87f8cc546848978b6f0d516431fa1cf0dffdfa93676e3929?"
                className="shrink-0 my-auto max-w-full border-2 border-sky-200 border-solid aspect-[14.29] stroke-[2px] stroke-sky-200 w-[184px]"
              />
              <div className="flex flex-col text-xs">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb0915405607aca567de60aa5d650b42762448e0826befbffa6d2d0854b03c9a?"
                  className="self-center w-11 aspect-[1.52]"
                />
                <div className="mt-1">Travel Via</div>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/671d40e01603eaa7be2652454afb858051a914c0548b32fe04ef048f3197190d?"
                className="shrink-0 my-auto max-w-full border-2 border-sky-200 border-solid aspect-[16.67] stroke-[2px] stroke-sky-200 w-[202px]"
              />
              <div className="flex flex-col self-start whitespace-nowrap">
                <div className="text-xs">Destination:</div>
                <div className="mt-3.5 text-xl font-semibold">India</div>
              </div>
            </div>
            <div className="flex flex-col self-start text-sky-400">
              <div className="text-xs">Expected Price</div>
              <div className="mt-2.5 text-xl font-semibold">$ 150</div>
            </div>
          </div>
          <div className="flex gap-5 mt-16 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-auto gap-5 justify-between items-center self-start">
              <div className="flex flex-col self-stretch">
                <div className="flex gap-1 pr-3.5">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e30c5de11332e744237695df7b1157d8e6355b1e8fd6d9d89b9d744c81346f?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/25e30c5de11332e744237695df7b1157d8e6355b1e8fd6d9d89b9d744c81346f?"
                    className="shrink-0 w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/0d493eb9cab9b9e20b4b56d175b8eaba94f0a128703bdd5a03eb8bf113a9184d?"
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
            </div>
            <div className="flex flex-auto gap-5 justify-between leading-[158.5%] text-slate-900">
              <div className="flex flex-col py-1.5">
                <div className="text-xs">Date:</div>
                <div className="mt-3.5 text-xl font-semibold">21 Sep 2024</div>
              </div>
              <div className="flex flex-col py-2">
                <div className="text-xs">Time:</div>
                <div className="mt-3.5 text-xl font-semibold">2: 25 AM</div>
              </div>
              <div className="flex flex-col py-2">
                <div className="text-xs">Luggage Space:</div>
                <div className="mt-2.5 text-xl font-semibold">25 KG</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 mr-auto text-xs font-semibold tracking-wide leading-5 text-right text-sky-400 max-md:max-w-full">
          Luggage listing
        </div>
        <div className="px-7 py-12 mt-4 bg-gray-100 rounded-[38px] max-md:pl-5 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[77%] max-md:ml-0 max-md:w-full">
              <div className="flex gap-5 justify-between self-stretch my-auto leading-[158.5%] text-slate-900 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                <div className="flex flex-col py-2 whitespace-nowrap">
                  <div className="text-xs">From:</div>
                  <div className="mt-3.5 text-xl font-semibold">USA</div>
                </div>
                <div className="flex flex-col py-2 whitespace-nowrap">
                  <div className="text-xs">Destination:</div>
                  <div className="mt-3.5 text-xl font-semibold">India</div>
                </div>
                <div className="flex flex-col py-1.5">
                  <div className="text-xs">Before:</div>
                  <div className="mt-3.5 text-xl font-semibold">
                    21 Sep 2024
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <div className="text-xs">Available bags:</div>
                  <div className="mt-2.5 text-xl font-semibold">2</div>
                </div>
                <div className="flex flex-col py-2">
                  <div className="text-xs">Weight:</div>
                  <div className="mt-2.5 text-xl font-semibold">4 KG</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow leading-[158.5%] max-md:mt-10">
                <div className="text-xs text-sky-400">Expected to pay</div>
                <div className="mt-2.5 text-xl font-semibold text-sky-400">
                  $ 50
                </div>
                <div className="flex gap-2.5 mt-4">
                  <div className="grow my-auto text-xs text-slate-900">
                    Item type:
                  </div>
                  <div className="justify-center px-5 py-2.5 text-sm font-semibold text-center text-sky-400 whitespace-nowrap bg-indigo-100 rounded-[31px] max-md:px-5">
                    Jewlery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-24 max-md:mt-10">
        <img
          loading="lazy"
          srcSet={LinkedInLogo}
          className="aspect-[1.04] w-[73px]"
        />
        <img
          loading="lazy"
          srcSet={FacebookLogo}
          className="mt-4 aspect-[1.04] w-[73px]"
        />
        <img
          loading="lazy"
          srcSet={InstagramLogo}
          className="mt-4 aspect-[1.04] w-[73px]"
        />
      </div>
    </div>
  );
}

export default Profile;

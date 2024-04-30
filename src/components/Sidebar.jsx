import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import {
  toggleDashFalse,
  toggleDashTrue,
  toggleProfileTrue,
  toggleProfileFalse,
  toggleNotifTrue,
  toggleNotifFalse,
  toggleChatTrue,
  toggleChatFalse,
  toggleUpdateKycTrue,
  toggleUpdateKycFalse,
  toggleTnCTrue,
  toggleTnCFalse,
} from '../features/dashboardSlice';

function Sidebar() {
  const dispatch = useDispatch();

  const dashBoardClicked = () => {
    dispatch(toggleDashTrue());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycFalse());
    dispatch(toggleTnCFalse());
  };

  const profileClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileTrue());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycFalse());
    dispatch(toggleTnCFalse());
  };
  const NotificationClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifTrue());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycFalse());
    dispatch(toggleTnCFalse());
  };
  const chatsClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatTrue());
    dispatch(toggleUpdateKycFalse());
    dispatch(toggleTnCFalse());
  };

  const kycClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycTrue());
    dispatch(toggleTnCFalse());
  };

  const tncClicked = () => {
    dispatch(toggleDashFalse());
    dispatch(toggleProfileFalse());
    dispatch(toggleNotifFalse());
    dispatch(toggleChatFalse());
    dispatch(toggleUpdateKycFalse());
    dispatch(toggleTnCTrue());
  };
  const { user } = useSelector((state) => state.auth);
  console.log(user);
  let ppUrl;
  if (user.data) {
    ppUrl = user.data.user.profilePicture;
  } else ppUrl = user.user.profilePicture;
  return (
    <div className='flex flex-col grow  text-base text-sky-400  mt-5 max-md:mt-10'>
      <div className='flex flex-col self-stretch py-9 -ml-px w-[185px] h-[765px] bg-gray-100 grow-0 rounded-[39px]'>
        <img
          loading='lazy'
          srcSet={ppUrl}
          className='self-center w-40 rounded-full border-emerald-600 border-solid aspect-[1.03] border-[6px] stroke-[6px]'
        />
        <div className='flex gap-0.5 self-center mt-1.5 font-semibold whitespace-nowrap leading-[50%] text-slate-900'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/c1c2740be267d6d9e5c960131d2fa3a48ed688dd1574704a6f3408ca29098d71?'
            className='shrink-0 aspect-square w-[22px]'
          />
          <div className='my-auto'>4.9</div>
        </div>

        <div className='flex gap-4 self-center mt-5 mb-5 text-xl leading-8 whitespace-nowrap text-slate-900'>
          <div>Review:</div>
          <div className='font-semibold'>16</div>
        </div>

        {/* DASHBOARD */}
        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5'
          onClick={dashBoardClicked}
        >
          Dashboard
        </button>
        {/* PROFILE */}
        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '
          onClick={profileClicked}
        >
          Profile
        </button>

        {/* NOTIFICATIONS */}
        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '
          onClick={NotificationClicked}
        >
          Notifications
        </button>

        {/* CHATS */}

        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '
          onClick={chatsClicked}
        >
          Chats
        </button>

        {/* UPDATE KYC */}

        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '
          onClick={kycClicked}
        >
          Update KYC
        </button>

        {/* TERMS AND CONDITIONS */}

        <button
          className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '
          onClick={tncClicked}
        >
          T&C
        </button>

        {/* CONTACT US */}

        <button className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '>
          Contact Us
        </button>

        {/* LOG OUT */}

        <button className='flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 '>
          Log Out
        </button>
        <NavLink className='self-center w-[160px] h-[43px]  mt-4 font-medium text-center text-rose-500 bg-rose-500 bg-opacity-10 rounded-[31px] max-md:px-5 py-2'>
          Delete Account
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;

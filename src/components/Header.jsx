import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './assets/Group.png';
import Avatar from './assets/AvatarIcon.svg';
import { useSelector, useDispatch } from 'react-redux';
import { logout, reset } from '../features/auth/authSlice';
import Dropdown from './GoToListingDropdown';
import CreateListingDropdown from './CreateAListingDropdown';

const Header = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const location = useLocation();

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
  };
  return (
    <div className='flex gap-5 justify-between pt-5 ml-5 mr-5 max-md:flex-wrap max-md:max-w-full'>
      <div className='flex gap-5 justify-between items-start text-center capitalize text-stone-300 max-md:flex-wrap'>
        <Link to='/'>
          <img
            loading='lazy'
            src={logo}
            className='shrink-0 mt-1.5 max-w-full aspect-[3.33] w-[166px]'
            alt='Company Logo'
          />
        </Link>

        {location.pathname !== '/login' && location.pathname !== '/signup' && (
          <div className='flex flex-auto gap-5 justify-between py-0.5 pl-20 backdrop-blur-[4.400000095367432px] bg-none bg-opacity-70 rounded-[34px]'>
            <div className='my-auto text-gray-400'> Kolkata</div>
            <img
              loading='lazy'
              src='https://cdn.builder.io/api/v1/image/assets/TEMP/d5f4d6d74f28ca8672970bb57400ecedd031c1d7dee63cd755a966e79e2ba151?'
              className='shrink-0 aspect-square w-[50px]'
            />
          </div>
        )}
      </div>
      <div className='flex gap-5 justify-between items-center my-auto text-slate-900 max-md:flex-wrap'>
        <div className='flex  self-stretch py-0.5 my-auto capitalize whitespace-nowrap'>
          {user && <CreateListingDropdown />}
          <Dropdown />
        </div>

        <>
          <Link className='self-stretch my-auto' to='/about'>
            About Us
          </Link>
          <Link className='flex-auto self-stretch my-auto' to='/contact'>
            Contact Us
          </Link>
        </>

        {user ? (
          <>
            <Link to='/dashboard'>
              <img loading='lazy' src={Avatar} alt='Company Logo' />
            </Link>

            <Link
              className='flex flex-col flex-1 justify-center self-stretch font-semibold text-sky-400 whitespace-nowrap'
              onClick={onLogout}
              to={'/'}
            >
              <div className='justify-center px-11 py-3 bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'>
                Logout
              </div>
            </Link>
          </>
        ) : (
          <>
            {location.pathname !== '/login' && (
              <Link
                className='flex flex-col flex-1 justify-center self-stretch text-center text-white whitespace-nowrap'
                to='/login'
              >
                <div className='justify-center px-14 py-3 bg-sky-400 rounded-[31px] max-md:px-5'>
                  Login
                </div>
              </Link>
            )}

            {location.pathname !== '/signup' && (
              <Link
                className='flex flex-col flex-1 justify-center self-stretch font-semibold text-sky-400 whitespace-nowrap'
                to='/signup'
              >
                <div className='justify-center px-11 py-3 bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'>
                  Signup
                </div>
              </Link>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Header;

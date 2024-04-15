import * as React from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFalse, toggleTrue } from '../features/headerSlice';
import logo from '../components/assets/Group.png';
import image from '../components/assets/Login/main.svg';
import GoogleIcon from '../components/assets/Login/GoogleIcon.svg';
import FacebookIcon from '../components/assets/Login/FaebookIcon.svg';
import Dropdown from '../components/Dropdown';

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const options = ['Traveler Listing', 'Luggage Listing', 'Create a Listing'];
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
    navigate(`/${selected.value.toLowerCase().replace(/\s/g, '')}`);
  };
  const handleLoginToggle = () => {
    dispatch(toggleFalse());
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div className='flex flex-col pt-5 pr-4 pb-20 pl-15 rounded-[29px] max-md:pl-5'>
      {/* <div className="flex gap-5 justify-between ml-12 text-xl font-medium text-slate-900 max-md:flex-wrap max-md:max-w-full">
        <Link to="/">
          <img
            loading="lazy"
            src={logo}
            className="shrink-0 max-w-full aspect-[3.33] w-[166px]"
            onClick={handleLoginToggle}
          />
        </Link>

        <div className="flex gap-5 justify-between items-center self-start max-md:flex-wrap">
          <Dropdown/>
          <Link className="flex flex-col flex-1 justify-center self-stretch font-semibold text-sky-400 whitespace-nowrap">
            <Link
              className="justify-center px-11 py-3 bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5"
              to="/signup"
            >
              Sign up
            </Link>
          </Link>
        </div>
      </div> */}
      <div className='flex gap-2 justify-between self-center mt-7 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
        <img
          loading='lazy'
          src={image}
          className='self-start w-full aspect-[1.1] max-md:max-w-full'
        />
        <div className='flex flex-col mt-3.5'>
          <div className='flex flex-col px-3 text-sm tracking-wide text-slate-400'>
            <div className='text-3xl font-medium tracking-wider leading-10 text-sky-400 max-md:ml-1.5'>
              <span className=''>Let’s</span>{' '}
              <span className='font-extrabold text-sky-400'>Sign In</span>{' '}
            </div>
            <div className='mt-5 whitespace-nowrap leading-[143%] text-slate-600 max-md:ml-1.5'>
              quis nostrud exercitation ullamco laboris nisi ut
            </div>

            <input
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-9 max-w-full bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              placeholder='Email'
            />
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src={EmailIcon.svg}
                  className="shrink-0 w-5 aspect-square"
                />
               
              </div> */}

            <input
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              placeholder='Password'
              type={showPassword ? 'text' : 'password'}
            />
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src={PasswordIcon.svg}
                  className="shrink-0 w-5 aspect-square"
                />
               
              </div> */}

            <div className='flex gap-5 justify-between mt-4 font-semibold text-sky-400 leading-[143%] max-md:mr-2'>
              <button className='flex-auto'>Forgot password?</button>
              <button
                className='flex-auto text-right'
                onClick={handleShowPassword}
              >
                Show password
              </button>
            </div>
            <Link className='justify-center items-center self-center px-16 py-6 mt-6 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] max-md:px-5'>
              Login
            </Link>
            <div className='flex justify-center items-center px-16 mt-3 font-semibold text-center whitespace-nowrap max-md:px-5 max-md:mr-2'>
              <div className='justify-center px-2.5 py-1.5 bg-white'>OR</div>
            </div>
          </div>
          <div className='flex gap-3 mt-4'>
            <button className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'>
              <img
                loading='lazy'
                src={GoogleIcon}
                className='aspect-square w-[25px]'
              />
            </button>
            <button className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'>
              <img
                loading='lazy'
                src={FacebookIcon}
                className='aspect-square w-[25px]'
              />
            </button>
          </div>
          <div className='self-center mt-20 text-sm tracking-wide leading-5 text-cyan-900 whitespace-nowrap max-md:mt-10'>
            <span className=''>Don’t have an account? </span>
            <Link className='font-bold text-cyan-900' to='/signup'>
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

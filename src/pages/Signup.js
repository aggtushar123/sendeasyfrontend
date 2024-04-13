import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Dropdown from '../components/Dropdown'
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../features/headerSlice';
import logo from '../components/assets/Group.png'
import image from '../components/assets/Login/main.svg'
import GoogleIcon from '../components/assets/Login/GoogleIcon.svg'
import FacebookIcon from '../components/assets/Login/FaebookIcon.svg'

const Signup = () => {
  const dispatch = useDispatch();
  const handleLoginToggle = () => {
    dispatch(toggleView());
  };
  const [showPassword, setShowPassword] = useState(false);
  const options = ['Traveler Listing', 'Luggage Listing', 'Create a Listing'];
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
    navigate(`/${selected.value.toLowerCase().replace(/\s/g, '-')}`);
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className='flex flex-col pt-5 pr-4 pb-20 pl-15 bg-white rounded-[29px] max-md:pl-5'>
      <div className='flex gap-5 justify-between ml-8 text-xl font-medium text-slate-900 max-md:flex-wrap max-md:max-w-full'>
        <Link to='/'>
          <img
            loading='lazy'
            src={logo}
            className='shrink-0 max-w-full aspect-[3.33] w-[166px]'
            onClick={handleLoginToggle}
          />
        </Link>

        <div className='flex gap-5 justify-between items-center self-start max-md:flex-wrap'>
          
          <Dropdown/>
          <Link
            className='flex flex-col flex-1 justify-center self-stretch text-center text-white whitespace-nowrap'
            to='/login'
          >
            <div className='justify-center px-14 py-3 bg-sky-400 rounded-[31px] max-md:px-5'>
              Log in
            </div>
          </Link>
        </div>
      </div>
      <div className='flex gap-2 justify-between self-center mt-7 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
        <img
          loading='lazy'
          src={image}
          className='self-start w-full aspect-[1.1] max-md:max-w-full'
        />
        <div className='flex flex-col '>
          <div className='flex flex-col pl-4 text-xs tracking-wide text-slate-400'>
            <div className='text-3xl font-medium tracking-wider leading-10 text-sky-400 '>
              <span className=''>Let’s</span>{' '}
              <span className='font-extrabold text-sky-400'>Sign Up</span>{' '}
            </div>
            <div className='mt-1 text-sm tracking-wide leading-5 whitespace-nowrap text-slate-600 max-md:ml-1'>
              quis nostrud exercitation ullamco laboris nisi ut
            </div>
            <input
              placeholder='First name'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-7 max-w-full bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
            />
           

            <input
              placeholder='Email'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
            />
           

            <input
              placeholder='Password'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              type={showPassword ? 'text' : 'password'}
            />
           
            <input
              placeholder='Confirm Password'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              type={showPassword ? 'text' : 'password'}
            />
           

            <button
              className='self-end mt-2 font-semibold text-right text-sky-400 whitespace-nowrap leading-[167%]'
              onClick={handleShowPassword}
            >
              Show password
            </button>
          </div>

          <div className='flex flex-col px-3.5 '>
            <div className='flex gap-2 text-xs '>
              <input
                type='checkbox'
                className='shrink-0 rounded aspect-[1.06] to-blue-600 w-[17px]'
              />
              <div className='flex-auto my-auto mt-1'>
                I agree with the{' '}
                <Link to='t&c' className='text-sky-400'>
                  terms and condition
                </Link>{' '}
                of this.
              </div>
            </div>
            <button className='justify-center items-center self-center px-16 py-7 mt-3 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] max-md:px-5'>
              Next
            </button>
            <div className='flex justify-center items-center px-16  text-sm font-semibold tracking-wide text-center whitespace-nowrap text-slate-400 max-md:px-5'>
              <div className='justify-center px-2.5 py-1.5 bg-white'>OR</div>
            </div>
          </div>
          <div className='flex gap-3'>
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
          <div className='self-center mt-2 text-sm tracking-wide leading-5 text-cyan-900 whitespace-nowrap'>
            <span className=''>Already have an account?</span>
            <Link className='font-bold text-cyan-900' to='/login'>
              {' '}
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

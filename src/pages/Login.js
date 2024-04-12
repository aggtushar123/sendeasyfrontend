import * as React from 'react';
import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import { envelope } from '@heroicons/vue/outline';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../redux/stateManager/counterSlice';

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const options = ['Traveler Listing', 'Luggage Listing', 'Create a Listing'];
  const [selectedOption, setSelectedOption] = useState();
  const navigate = useNavigate();

  const handleDropdownChange = (selected) => {
    setSelectedOption(selected.value);
    navigate(`/${selected.value.toLowerCase().replace(/\s/g, '-')}`);
  };
  const handleLoginToggle = () => {
    dispatch(toggleView());
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className='flex flex-col pt-5 pr-4 pb-20 pl-15 bg-white rounded-[29px] max-md:pl-5'>
      <div className='flex gap-5 justify-between ml-12 text-xl font-medium text-slate-900 max-md:flex-wrap max-md:max-w-full'>
        <Link to='/'>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/185cf0d94db80904890925432d177a31775474e254651792c34dc0deb43e85a8?'
            className='shrink-0 max-w-full aspect-[3.33] w-[166px]'
            onClick={handleLoginToggle}
          />
        </Link>

        <div className='flex gap-5 justify-between items-center self-start max-md:flex-wrap'>
          {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/96b7625a7246ab9eff90b36014d3446f441392a4fbe176490583a9492bc4b46f?"
            className="shrink-0 self-stretch my-auto aspect-[1.79] w-[9px]"
          /> */}

          <Dropdown
            options={options}
            onChange={handleDropdownChange}
            value={selectedOption}
            placeholder='Go to Listing'
            className='custom-dropdown'
          />

          <Link className='flex flex-col flex-1 justify-center self-stretch font-semibold text-sky-400 whitespace-nowrap'>
            <Link
              className='justify-center px-11 py-3 bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'
              to='/signup'
            >
              Sign up
            </Link>
          </Link>
        </div>
      </div>
      <div className='flex gap-5 justify-between items-start self-center mt-20 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
        <img
          loading='lazy'
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/a73a5da37169a3c13c6c4227c5a047d4c6ba268127357c5de448ee46a5891fd1?'
          className='w-full aspect-[1.1] max-md:max-w-full'
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d39d921c3211f1a9db8510f79d57a1b3521e70b2e1084f52acee93172cb430ec?"
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
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e16b371d326e0e8b1bb375a91d5c9468caf8195f3be09e4eb722b4a908d5146?"
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
            <div className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/14bce6c8f32a002f8374b37f0df4b76c47225733ff8fd8ee959131f56d20899a?'
                className='aspect-square w-[25px]'
              />
            </div>
            <div className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/7e6f8764dfc88862201611e1e332ba44b41ddb02fd97cfdc23092990d99fec07?'
                className='aspect-square w-[25px]'
              />
            </div>
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

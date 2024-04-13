import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { envelope } from '@heroicons/vue/outline';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../features/headerSlice';
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
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/77bef0bc0c92c66befec65f15750a8d069b6dd172c3c4bd83dbf08cd69980a8d?'
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
          src='https://cdn.builder.io/api/v1/image/assets/TEMP/00ca7080ddb547f8eb4dc61ff36b0cd8bc60fa79a4b1749836f4ee3710723faf?'
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
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/04dd2fbeab29c993a0e679716e1b65de1749083c24f10fa6695931f8789e8bf8?"
                  className="shrink-0 w-5 aspect-square"
                />
                
              </div> */}

            <input
              placeholder='Email'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
            />
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/001848ec6217bbe27cfcbc222ed63c6db01587802ebc1e14620c5201ceb3920d?"
                  className="shrink-0 w-5 aspect-square"
                />
                
              </div> */}

            <input
              placeholder='Password'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              type={showPassword ? 'text' : 'password'}
            />
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb6e03dac75e14973e8c3ab07b7ded9a218812b74e89a375db03382e1dd4c83?"
                  className="shrink-0 w-5 aspect-square"
                />
                
              </div>
           */}
            <input
              placeholder='Confirm Password'
              className='flex flex-col justify-center items-start py-6 pr-16 pl-4 mt-4 max-w-full whitespace-nowrap bg-gray-100 rounded-xl w-[327px] max-md:pr-5 max-md:mr-2'
              type={showPassword ? 'text' : 'password'}
            />
            {/* <div className="flex gap-2.5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/abb6e03dac75e14973e8c3ab07b7ded9a218812b74e89a375db03382e1dd4c83?"
                  className="shrink-0 w-5 aspect-square"
                />
               
              </div> */}

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
            <div className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'>
              <img
                loading='lazy'
                src='https://cdn.builder.io/api/v1/image/assets/TEMP/d5f8e2b898f51b67aa766f4ed3c2a87ae4d2a2943bfa553884498aa9338ea793?'
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

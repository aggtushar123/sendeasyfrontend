import React from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/Group.png';
import { useSelector, useDispatch } from 'react-redux';
import { toggleView } from '../features/headerSlice';
import Dropdown from './Dropdown';

const Header = () => {
  // const ViewHeader = useSelector((state) => state.header.value);
  const dispatch = useDispatch();

  const handleLoginToggle = () => {
    // console.log('CICKED');
    dispatch(toggleView());
    // console.log(ViewHeader);
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

        <div className='flex flex-auto gap-5 justify-between py-0.5 pl-20 backdrop-blur-[4.400000095367432px] bg-white bg-opacity-70 rounded-[34px]'>
          <div className='my-auto'> Kolkata</div>
          <img
            loading='lazy'
            src='https://cdn.builder.io/api/v1/image/assets/TEMP/d5f4d6d74f28ca8672970bb57400ecedd031c1d7dee63cd755a966e79e2ba151?'
            className='shrink-0 aspect-square w-[50px]'
          />
        </div>
      </div>
      <div className='flex gap-5 justify-between items-center my-auto text-slate-900 max-md:flex-wrap'>
        <div className='flex gap-2 self-stretch py-0.5 my-auto capitalize whitespace-nowrap'>
          <Dropdown/>
          
        </div>
        <Link className='self-stretch my-auto' to='/about'>
          About Us
        </Link>
        <Link className='flex-auto self-stretch my-auto' to='/contact'>
          Contact Us
        </Link>
        <Link
          className='flex flex-col flex-1 justify-center self-stretch text-center text-white whitespace-nowrap'
          to='/login'
          onClick={handleLoginToggle}
        >
          <div className='justify-center px-14 py-3 bg-sky-400 rounded-[31px] max-md:px-5'>
            Login
          </div>
        </Link>
        <Link
          className='flex flex-col flex-1 justify-center self-stretch font-semibold text-sky-400 whitespace-nowrap'
          to='/signup'
          onClick={handleLoginToggle}
        >
          <div className='justify-center px-11 py-3 bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'>
            Signup
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;

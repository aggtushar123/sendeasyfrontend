import * as React from 'react';
import { useSelector } from 'react-redux';
import FacebookLogo from '../assets/Profile/FacebookLogo.svg';
import LinkedInLogo from '../assets/Profile/LinkedInLogo.svg';
import InstagramLogo from '../assets/Profile/InstagramLogo.svg';
function Profile() {
  const { user } = useSelector((state) => state.auth);
  return (
    <div className='flex flex-col px-24 '>
      <div className='max-md:pr-5 max-md:max-w-full'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[80%] max-md:ml-0 max-md:w-full'>
            <div className='mt-5 max-md:mt-10'>
              <div className='flex overflow-hidden relative flex-col items-end self-center px-16 pt-20 pb-2.5 rounded-full border-sky-400 border-solid aspect-square border-[6px] w-[155px] max-md:pl-5'>
                <img
                  loading='lazy'
                  srcSet={FacebookLogo}
                  className='object-cover absolute inset-0 size-full'
                />
              </div>
              <div className='mt-16 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10'>
                Profile Details
              </div>
            </div>
          </div>
          <div className='flex w-[85%] max-md:ml-0 max-md:w-full'>
            <div className=' max-md:mt-10'>
              <div className='flex gap-4'>
                <img
                  loading='lazy'
                  srcSet={LinkedInLogo}
                  className='shrink-0 aspect-[1.04] w-[73px]'
                />
                <img
                  loading='lazy'
                  srcSet={FacebookLogo}
                  className='shrink-0 aspect-[1.04] w-[73px]'
                />
                <img
                  loading='lazy'
                  srcSet={InstagramLogo}
                  className='shrink-0 aspect-[1.04] w-[73px]'
                />
              </div>
              <div className='justify-center  px-14 py-5 mt-4 text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5'>
                Edit Profile
              </div>
            </div>
          </div>
        </div>
      </div>

      <input
        placeholder="name"
        className=' justify-center w-[636px]  px-6 py-6 mt-5 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full'
      />

      <input
        placeholder="email"
        className='flex flex-col justify-center w-[636px]  px-6 py-6 mt-5 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full'
      />

      <input
        placeholder='+91 1234567890'
        className='flex flex-col justify-center w-[636px]  px-6 py-6 mt-5 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full'
      />

      <input
        placeholder='Password'
        className='flex flex-col justify-center w-[636px]  px-6 py-6 mt-5 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full'
      />

      <div className='self-center mt-3 ml-36 text-xs font-semibold tracking-wide leading-5 text-right text-sky-400'>
        Show password
      </div>
      <div className='mt-14 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full'>
        Personal Details
      </div>
      <div className='flex flex-col items-start py-0.5 mt-5 max-md:max-w-full'>
        <div className='ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Short Description
        </div>
        <input
          placeholder='Allison Ekstrom Bothman'
          className='flex flex-col justify-center w-[636px]  px-6 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:px-5 max-md:max-w-full'
        />

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Date of birth
        </div>

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Gender
        </div>

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Occupation
        </div>

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Workplace/ University
        </div>

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:max-w-full'>
          Email Id provided by workplace or University
        </div>

        <div className='mt-5 ml-7 text-xs tracking-wide capitalize text-blue-950 max-md:ml-2.5'>
          Address
        </div>

        <div className='flex gap-5 justify-between self-stretch mt-20 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full'>
          <div className='my-auto text-lg font-bold tracking-wide text-blue-950'>
            My Posts
          </div>
          <div className='justify-center items-center px-16 py-4 text-xl font-medium text-center text-sky-400 capitalize bg-white border-2 border-sky-400 border-solid rounded-[31px] max-md:px-5'>
            Create a Listing
          </div>
        </div>
        <div className='mt-2 ml-3 text-xs font-semibold tracking-wide leading-5 text-right text-sky-400 max-md:ml-2.5'>
          Traveler listing
        </div>
      </div>
      <div className='flex flex-col pl-1.5 mt-10 max-md:max-w-full' />
    </div>
  );
}

export default Profile;

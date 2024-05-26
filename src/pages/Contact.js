import React from 'react';
import office from '../components/assets/Contact/Office.svg';
import phone from '../components/assets/Contact/Phone.svg';
import location from '../components/assets/Contact/Location.svg';
import Accordion from '../components/Accordian';
import AboutUsCard from '../components/AboutUsCard';
import { motion } from 'framer-motion';
const contact = () => {
  return (
    <div className='flex flex-col items-center pt-8 rounded-[29px]'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='justify-between px-5 mt-16 max-w-full w-[745px] max-md:mt-10'
      >
        <div className='justify-between max-w-[745px]'>
          <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
            <div className='flex flex-col w-6/12 max-md:ml-0 max-md:w-full'>
              <div className='flex grow justify-center items-center px-16 text-center rounded-2xl text-slate-900 max-md:px-5'>
                <div className='flex flex-col items-center max-w-full w-[116px]'>
                  <img
                    loading='lazy'
                    src='https://cdn.builder.io/api/v1/image/assets/TEMP/63dd1dda038054991f54aeb3bd7c10b9c1243483ca8df0420fa282f2adb0d29b?'
                    className='w-8 aspect-square'
                  />
                  <div className='mt-2.5 text-xl font-semibold leading-7'>
                    Phone
                  </div>
                  <div className='self-stretch mt-2.5 text-base leading-6'>
                    7973426726
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full'>
              <div className='flex flex-col grow items-center px-20 text-center whitespace-nowrap rounded-2xl text-slate-900 max-md:px-5'>
                <img
                  loading='lazy'
                  src='https://cdn.builder.io/api/v1/image/assets/TEMP/2bed6b93e0f6827dbf0b317b3e3461dce36069636396e15993c6eb1e39d39af4?'
                  className='w-8 aspect-square'
                />
                <div className='mt-2.5 text-xl font-semibold leading-7'>
                  Location
                </div>
                <div className='mt-2.5 text-base leading-6'>
                  sendalong93@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=' text-4xl font-semibold text-center text-sky-400 max-md:max-w-full mt-64'>
        Contact Us
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='mt-5 text-xl leading-7 text-center text-slate-900 w-[754px] max-md:max-w-full font-thin mb-6'
      >
        Feel free to give us a call or send us a message and we'll help get the
        answers you need.
      </motion.div>
      <motion.div className='flex gap-5 justify-between mt-16 max-w-full w-[750px] max-md:flex-wrap max-md:mt-10'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='flex flex-col px-5'
        >
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            name
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your name'
            type='text'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          className='flex flex-col px-5'
        >
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            email
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300  w-[320px] max-md:pr-5'
            placeholder='Write your email address'
            type='email'
          />
        </motion.div>
      </motion.div>
      <div className='flex gap-5 justify-between mt-8 max-w-full w-[750px] max-md:flex-wrap'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.9, ease: 'easeInOut' }}
          className='flex flex-col px-5'
        >
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            Phone number
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your phone number'
            type='tel'
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: 'easeInOut' }}
          className='flex flex-col px-5'
        >
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            Address
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your street address, zipcode , etc'
            type='text'
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
        className='mt-8 text-xs font-semibold tracking-wide uppercase text-slate-900 max-md:max-w-full'
      >
        notes
      </motion.div>
      <motion.input
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: 'easeInOut' }}
        className='items-start px-4 pt-4 pb-24 mt-3.5 max-w-full text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[715px] max-md:pr-5'
        placeholder='Type Here'
      />

      <button className='px-8 py-5 mt-8 text-base font-semibold text-center text-white bg-emerald-600 rounded-md max-md:px-5'>
        Send Message
      </button>

      <div className='mt-36 text-xs font-semibold tracking-wide text-emerald-600 uppercase max-md:mt-10'>
        Frequently Asked Questions
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='mt-5 text-4xl font-semibold leading-10 text-center text-sky-400 max-md:max-w-full'
      >
        You've got questions. we've got answers.
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        className='flex flex-col p-8 mt-16 mb-28 max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10'
      >
        <Accordion />
      </motion.div>

      {/* <div className='flex flex-col items-center px-20 mt-32 max-w-full font-semibold text-slate-900 w-[1140px] max-md:px-5 max-md:mt-10'>
        <div className='text-xs tracking-wide uppercase'>contact us</div>
        <div className='mt-5 text-4xl text-center text-sky-400 max-md:max-w-full'>
          Get in touch
        </div>
        <div className='mt-5 text-xl leading-7 text-center w-[751px] max-md:max-w-full font-normal'>
          We're happy to answer any questions you may have about our lawn care
          or landscaping services, Feel free to give us a call or send us a
          message and we'll help get the answers you need
        </div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.5131038219242!2d78.33810017515599!3d17.43513880142779!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939d186aa671%3A0xe0130f40b7e04e9e!2sIndian%20School%20of%20Business%E2%80%93Hyderabad%20(ISB%E2%80%93Hyderabad)!5e0!3m2!1sen!2sin!4v1713288043070!5m2!1sen!2sin'
          width='600'
          height='450'
          style={{ border: '0' }}
          allowfullscreen=''
          loading='lazy'
          referrerpolicy='no-referrer-when-downgrade'
          className='my-10 rounded-xl'
        ></iframe>
      </div> */}
    </div>
  );
};

export default contact;

import React from 'react';
import office from '../components/assets/Contact/Office.svg';
import phone from '../components/assets/Contact/Phone.svg';
import location from '../components/assets/Contact/Location.svg';
import Accordion from '../components/Accordian';
const contact = () => {
  return (
    <div className='flex flex-col items-center pt-8 rounded-[29px]'>
      <div className='justify-between px-5 mt-16 max-w-full w-[745px] max-md:mt-10'>
        <div className='flex gap-5 max-md:flex-col max-md:gap-0'>
          <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col grow items-center text-center rounded-2xl text-slate-900'>
              <img loading='lazy' src={office} className='w-8 aspect-square' />
              <div className='mt-2.5 text-xl font-semibold leading-7'>
                Office
              </div>
              <div className='self-stretch mt-2.5 text-base leading-6'>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat n
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col px-20 text-center rounded-2xl text-slate-900 max-md:px-5'>
              <img
                loading='lazy'
                src={phone}
                className='self-center w-8 aspect-square'
              />
              <div className='mt-2.5 text-xl font-semibold leading-7 max-md:mr-0.5'>
                Phone
              </div>
              <div className='mt-2.5 text-base leading-6 max-md:mr-0.5'>
                +123456790+123456790
              </div>
            </div>
          </div>
          <div className='flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full'>
            <div className='flex flex-col items-center px-8 text-center whitespace-nowrap rounded-2xl text-slate-900 max-md:px-5'>
              <img
                loading='lazy'
                src={location}
                className='w-8 aspect-square'
              />
              <div className='mt-2.5 text-xl font-semibold leading-7'>
                Location
              </div>
              <div className='self-stretch mt-2.5 text-base leading-6'>
                hello@yourewebsite.com
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mt-32 text-xs font-semibold tracking-wide text-sky-400 uppercase max-md:mt-10'>
        contact form
      </div>
      <div className='mt-5 text-4xl font-semibold text-center text-sky-400 max-md:max-w-full'>
        Let's schedule your appointment
      </div>
      <div className='mt-5 text-xl leading-7 text-center text-slate-900 w-[754px] max-md:max-w-full'>
        Feel free to give us a call or send us a message and we'll help get the
        answers you need, or a quote for services at your residential or
        commercial property.
      </div>
      <div className='flex gap-5 justify-between mt-16 max-w-full w-[750px] max-md:flex-wrap max-md:mt-10'>
        <div className='flex flex-col px-5'>
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            name
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your name'
            type='text'
          />
        </div>
        <div className='flex flex-col px-5'>
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            email
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300  w-[320px] max-md:pr-5'
            placeholder='Write your email address'
            type='email'
          />
        </div>
      </div>
      <div className='flex gap-5 justify-between mt-8 max-w-full w-[750px] max-md:flex-wrap'>
        <div className='flex flex-col px-5'>
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            Phone number
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your phone number'
            type='tel'
          />
        </div>
        <div className='flex flex-col px-5'>
          <div className='text-xs font-semibold tracking-wide uppercase text-slate-900'>
            Address
          </div>
          <input
            className='justify-center items-start p-4 mt-3.5 text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[320px] max-md:pr-5'
            placeholder='Write your street address, zipcode , etc'
            type='text'
          />
        </div>
      </div>
      <div className='mt-8 text-xs font-semibold tracking-wide uppercase text-slate-900 max-md:max-w-full'>
        notes
      </div>
      <input
        className='items-start px-4 pt-4 pb-24 mt-3.5 max-w-full text-base leading-6 bg-gray-100 rounded-xl text-stone-300 w-[715px] max-md:pr-5'
        placeholder='Type Here'
      />

      <button className='justify-center px-8 py-5 mt-8 text-base font-semibold text-center text-white bg-emerald-600 rounded-md max-md:px-5'>
        Send Message
      </button>
      <div className='mt-36 text-xs font-semibold tracking-wide text-emerald-600 uppercase max-md:mt-10'>
        Frequently Asked Questions
      </div>
      <div className='mt-5 text-4xl font-semibold leading-10 text-center text-sky-400 max-md:max-w-full'>
        You've got questions. we've got answers.
      </div>
      <div className='flex flex-col p-8 mt-16 max-w-full bg-gray-100 rounded-xl w-[750px] max-md:px-5 max-md:mt-10'>
        <Accordion />
      </div>

      <div className='flex flex-col items-center px-20 mt-32 max-w-full font-semibold text-slate-900 w-[1140px] max-md:px-5 max-md:mt-10'>
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
      </div>
    </div>
  );
};

export default contact;

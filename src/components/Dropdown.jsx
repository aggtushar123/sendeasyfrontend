import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative' ref={dropdownRef}>
      <button
        id='dropdownHoverButton'
        onClick={toggleDropdown}
        className='text-slate-900 font-medium rounded-lg text-l px-3 py-2 text-center inline-flex items-center'
        type='button'
      >
        Go to Listing{' '}
        <svg
          className={`w-2.5 h-2.5 ${isOpen ? 'rotate-180' : ''} mx-2`}
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 10 6'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 4 4 4-4'
          />
        </svg>
      </button>

      {isOpen && (
        <div
          id='dropdownHover'
          className='bg-white z-10 divide-y text-slate-600 rounded-lg shadow w-44 absolute right-0 mt-2 dark:bg-gray-100'
        >
          <ul
            className='py-2 text-sm text-slate-700 dark:text-slate-600'
            aria-labelledby='dropdownHoverButton'
          >
            <li>
              <Link
                to='/travelerListing'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white-600 dark:hover:text-slate-900'
              >
                Traveler Listing
              </Link>
            </li>
            <li>
              <Link
                to='/luggageListing'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white-600 dark:hover:text-slate-900'
              >
                Luggage Listing
              </Link>
            </li>
            <li>
              <Link
                to='/createaListing'
                className='block px-4 py-2 hover:bg-gray-100 dark:hover:bg-white-600 dark:hover:text-slate-900'
              >
                Create A Listing
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

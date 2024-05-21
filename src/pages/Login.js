import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import EmailIcon from '../components/assets/Login/EmailIcon.svg';
import PasswordIcon from '../components/assets/Login/PasswordIcon.svg';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import image from '../components/assets/Login/main.svg';
import GoogleIcon from '../components/assets/Login/GoogleIcon.svg';
import FacebookIcon from '../components/assets/Login/FaebookIcon.svg';
import cross from '../components/assets/Login/crossIcon.svg';
import { login, reset } from '../features/auth/authSlice';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = loginData;

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    //Redirect when logged in
    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onChange = (e) => {
    setLoginData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };


  const googleAuth = () => {
    window.location.href = `${process.env.REACT_APP_API_URL}/auth/google/callback`;
  };


  return (
    <>
      {showModal && (
        <div className='flex justify-center items-center'>
          <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
            <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
              {' '}
              <div className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'></div>
              <div className='relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all sm:my-8 sm:max-w-lg py-12 '>
                <div
                  className='absolute left-[380px] top-4 cursor-pointer'
                  onClick={() => {
                    setShowModal(false);
                  }}
                >
                  <img src={cross} alt='' />
                </div>
                <div className='bg-white px-4 pb-4  sm:p-6 sm:pb-4'>
                  <div className='sm:flex items-center'>
                    <div className='mt-3 text-left px-4 sm:mt-0 '>
                      <h3
                        className='font-semibold leading-6 text-gray-900'
                        id='modal-title'
                      >
                        <div className='text-left mt-1 mx-5 text-2xl font-medium tracking-wider leading-10 '>
                          Search your
                          <span className='font-extrabold text-sky-400'>
                            {' '}
                            Id
                          </span>
                        </div>
                        <div className='mt-5 text-xs tracking-wide leading-5 text-slate-600 font-light text-left mx-5'>
                          Put your email or mobile number to find your id
                        </div>
                      </h3>
                      <div class='relative mt-5 mx-5'>
                        <input
                          type='email'
                          class='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                          placeholder='Email'
                        />
                        <div
                          class='absolute inset-y-0 left-0 pl-3  
                      flex items-center  
                      pointer-events-none'
                        >
                          <img src={EmailIcon} alt='' />
                        </div>
                      </div>

                      <div>
                        <button className='justify-center items-center self-center px-16 py-4 mt-10  ml-8 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] '>
                          Next
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=' px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6'></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className='flex flex-col pt-5 pr-4 pb-20 pl-15 rounded-[29px] max-md:pl-5'>
        <div className='flex gap-2 justify-between self-center mt-7 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
          <img
            loading='lazy'
            src={image}
            className='self-start w-full aspect-[1.1] max-md:max-w-full'
          />
          <div className='flex flex-col mt-3.5 text-sm tracking-wide text-slate-400'>
            <div className='text-3xl font-medium tracking-wider leading-10 text-sky-400 max-md:ml-1.5'>
              <span className=''>Let’s</span>{' '}
              <span className='font-extrabold text-sky-400'>Sign In</span>{' '}
            </div>
            <div className='mt-1 whitespace-nowrap leading-[143%] text-slate-600 max-md:ml-1.5'>
              quis nostrud exercitation ullamco laboris nisi ut
            </div>
            <form
              className='flex flex-col text-sm mt-3 tracking-wide text-slate-400'
              onSubmit={onSubmit}
            >
              <div className='relative mt-2'>
                <input
                  type='email'
                  className='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                  placeholder='Email'
                  id='email'
                  name='email'
                  value={email}
                  onChange={onChange}
                  required
                />
                <div
                  className='absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none'
                >
                  <img src={EmailIcon} alt='' />
                </div>
              </div>
              <div className='relative mt-2'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                  placeholder='Password'
                  id='password'
                  name='password'
                  value={password}
                  onChange={onChange}
                  required
                />
                <div
                  className='absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none'
                >
                  <img src={PasswordIcon} alt='' />
                </div>
              </div>
              <div className='flex gap-5 justify-between mt-4 font-semibold text-sky-400 leading-[143%] max-md:mr-2'>
                <button
                  type='button'
                  className='flex-auto'
                  onClick={() => {
                    setShowModal(true);
                  }}
                >
                  Forgot password?
                </button>
                <button
                  type='button'
                  className='flex-auto text-right'
                  onClick={handleShowPassword}
                >
                  {showPassword ? 'Hide' : 'Show'} password
                </button>
              </div>
              <button className='justify-between items-center self-center px-16 py-6 mt-6 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] max-md:px-5'>
                Login
              </button>
            </form>

            <div className='flex justify-center items-center px-16 mt-3 font-semibold text-center whitespace-nowrap max-md:px-5 max-md:mr-2'>
              <div className='justify-center px-2.5 py-1.5 bg-white'>OR</div>
            </div>

            <div className='flex gap-3 mt-4 cursor-pointer'>
              <button
                onClick={googleAuth}
                className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'
              >
                <img
                  loading='lazy'
                  src={GoogleIcon}
                  className='aspect-square w-[25px]'
                />
              </button>
              <button
                className='flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5'
                onClick={() => {
                  window.open(
                    `${process.env.REACT_APP_API_URL}/authFacebook/facebook/callback`
                  );
                }}
              >
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
    </>
  );
};

export default Login;

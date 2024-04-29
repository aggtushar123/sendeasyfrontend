import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'react-dropdown/style.css';
import { useSelector, useDispatch } from 'react-redux';
import image from '../components/assets/Login/main.svg';
import GoogleIcon from '../components/assets/Login/GoogleIcon.svg';
import FacebookIcon from '../components/assets/Login/FaebookIcon.svg';
import EmailIcon from '../components/assets/Login/EmailIcon.svg';
import NameIcon from '../components/assets/Login/NameIcon.svg';
import PasswordIcon from '../components/assets/Login/PasswordIcon.svg';
import { toast } from 'react-toastify';
import { register, sendOtp, googleLogin } from '../features/auth/authSlice';
import cross from '../components/assets/Login/crossIcon.svg';

const Signup = () => {
  let check = false;
  const [showModal, setShowModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [authWindow, setAuthWindow] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fName: '',
    email: '',
    password: '',
    cPassword: '',
  });

  const { fName, email, password, cPassword } = signupData;

  const [otp, setOtp] = useState('');

  const { user, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  const onChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onChangeOtp = (e) => {
    const { value } = e.target;
    setOtp(value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error('Password do not match');
    } else {
      const userData = {
        fName,
        email,
        password,
        cPassword,
      };
      try {
        const response = await dispatch(register(userData));
        if (response.meta.requestStatus === 'fulfilled') {
          setShowModal(true); // Set showModal to true upon successful registration
        } else {
          // Extract and show the specific error message from the response
          const errorMessage = response.error.message;
          toast.error(errorMessage);
        }
      } catch (error) {
        // Handle dispatch error
        console.error('Dispatch error:', error);
        toast.error('An error occurred. Please try again later.');
      }
    }
  };

  const otpOnClick = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error('OTP ERROR');
    }
    try {
      const userVerified = await dispatch(sendOtp(otp));

      if (userVerified.payload.data) {
        navigate('/');
        if (check) {
          localStorage.setItem(
            'verified',
            JSON.stringify(userVerified.payload.data.user.verified)
          );
          check = false;
        }
      } else {
        localStorage.removeItem('verified');
        check = true;
      }
    } catch (error) {
      console.error('Error sending OTP:', error);
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const googleAuth = async () => {
    const newAuthWindow = window.open(
      'http://localhost:3001/auth/google/callback'
    );

    setAuthWindow(newAuthWindow);
  };

  useEffect(() => {
    if (authWindow) {
      const intervalId = setInterval(() => {
        if (authWindow.closed) {
          clearInterval(intervalId);
          dispatch(googleLogin());
        }
      }, 1000); // Check every second if the authentication window is closed
    }
  }, [authWindow, dispatch]);

  return (
    <>
      {showModal && (
        <form
          onSubmit={otpOnClick}
          className='flex justify-center items-center'
        >
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
                          Enter the OTP
                          <span className='font-extrabold text-sky-400'> </span>
                        </div>
                        <div className='mt-5 text-xs tracking-wide leading-5 text-slate-600 font-light text-left mx-5'>
                          We have sent an OTP at your registered email
                        </div>
                      </h3>
                      <div className='relative mt-5 mx-5'>
                        <input
                          type='text'
                          className='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                          placeholder='OTP'
                          id='otp'
                          name='otp'
                          value={otp}
                          onChange={onChangeOtp}
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
        </form>
      )}

      <div className='flex flex-col pt-5 pr-4 pb-20 pl-15 rounded-[29px] max-md:pl-5'>
        <div className='flex gap-2 justify-between self-center mt-7 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full'>
          <img
            loading='lazy'
            src={image}
            className='self-start w-full aspect-[1.1] max-md:max-w-full'
          />
          <div className='flex flex-col '>
            <div className='text-3xl font-medium tracking-wider leading-10 text-sky-400 '>
              <span className=''>Let’s</span>{' '}
              <span className='font-extrabold text-sky-400'>Sign Up</span>{' '}
            </div>
            <div className='mt-1 text-sm tracking-wide leading-5 whitespace-nowrap text-slate-600 max-md:ml-1'>
              quis nostrud exercitation ullamco laboris nisi ut
            </div>

            <form
              className='flex flex-col text-xs mt-3 tracking-wide text-slate-400'
              onSubmit={onSubmit}
            >
              <div className='relative mt-2'>
                <input
                  type='text'
                  className='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                  placeholder='Full Name'
                  id='fName'
                  name='fName'
                  value={fName}
                  onChange={onChange}
                  required
                />
                <div
                  className='absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none'
                >
                  <img src={NameIcon} alt='' />
                </div>
              </div>
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
              <div className='relative mt-2'>
                <input
                  type={showPassword ? 'text' : 'password'}
                  className='pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] '
                  placeholder='Confirm Password'
                  id='cPassword'
                  name='cPassword'
                  value={cPassword}
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

              <button
                type='button'
                className=' mt-2 font-semibold text-right text-sky-400 whitespace-nowrap leading-[167%]'
                onClick={handleShowPassword}
              >
                Show password
              </button>
              <div className='flex gap-2 text-xs '>
                <input
                  type='checkbox'
                  className='shrink-0 rounded aspect-[1.06] to-blue-600 w-[17px]'
                  required
                />
                <div className='flex-auto my-auto mt-2'>
                  I agree with the{' '}
                  <Link to='t&c' className='text-sky-400'>
                    terms and condition
                  </Link>{' '}
                  of this.
                </div>
              </div>
              <button className='flex  flex-col align-middle justify-center items-center self-center px-16 py-7 mt-3 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] max-md:px-5'>
                Next
              </button>
            </form>

            <div className='flex flex-col px-3.5 '>
              <div className='flex justify-center items-center px-16  text-sm font-semibold tracking-wide text-center whitespace-nowrap text-slate-400 max-md:px-5'>
                <div className='justify-center px-2.5 py-1.5 bg-white'>OR</div>
              </div>
            </div>

            <div className='flex gap-3'>
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
                    'http://localhost:3001/authFacebook/facebook/callback'
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
    </>
  );
};

export default Signup;

import React from "react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-dropdown/style.css";
import { useSelector, useDispatch } from "react-redux";
import image from "../components/assets/Login/main.svg";
import GoogleIcon from "../components/assets/Login/GoogleIcon.svg";
import FacebookIcon from "../components/assets/Login/FaebookIcon.svg";
import EmailIcon from "../components/assets/Login/EmailIcon.svg";
import NameIcon from "../components/assets/Login/NameIcon.svg";
import PasswordIcon from "../components/assets/Login/PasswordIcon.svg";
import { toast } from "react-toastify";
import { register, reset } from "../features/auth/authSlice";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    fName: "",
    email: "",
    password: "",
    cPassword: "",
  });

  const { fName, email, password, cPassword } = signupData;

  const { user, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(()=>{
    if(isError){
      toast.error(message)
    }

    //Redirect when logged in 
    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())
  }, [isError, isSuccess, user, message, navigate, dispatch])

  const onChange = (e) => {
    setSignupData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== cPassword) {
      toast.error("Password do not match");
    } else {
      const userData = {
        fName,
        email,
        password,
        cPassword
      };
      console.log(userData);
      dispatch(register(userData));
    }
  };


  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col pt-5 pr-4 pb-20 pl-15 rounded-[29px] max-md:pl-5">
      <div className="flex gap-2 justify-between self-center mt-7 w-full max-w-[1080px] max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
        <img
          loading="lazy"
          src={image}
          className="self-start w-full aspect-[1.1] max-md:max-w-full"
        />
        <div className="flex flex-col ">
          <div className="text-3xl font-medium tracking-wider leading-10 text-sky-400 ">
            <span className="">Let’s</span>{" "}
            <span className="font-extrabold text-sky-400">Sign Up</span>{" "}
          </div>
          <div className="mt-1 text-sm tracking-wide leading-5 whitespace-nowrap text-slate-600 max-md:ml-1">
            quis nostrud exercitation ullamco laboris nisi ut
          </div>

          <form
            className="flex flex-col text-xs mt-3 tracking-wide text-slate-400"
            onSubmit={onSubmit}
          >
            <div className="relative mt-2">
              <input
                type="text"
                className="pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] "
                placeholder="Full Name"
                id="fName"
                name="fName"
                value={fName}
                onChange={onChange}
                required
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <img src={NameIcon} alt="" />
              </div>
            </div>
            <div className="relative mt-2">
              <input
                type="email"
                className="pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] "
                placeholder="Email"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <img src={EmailIcon} alt="" />
              </div>
            </div>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] "
                placeholder="Password"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                required
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <img src={PasswordIcon} alt="" />
              </div>
            </div>
            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                className="pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] "
                placeholder="Confirm Password"
                id="cPassword"
                name="cPassword"
                value={cPassword}
                onChange={onChange}
                required
              />
              <div
                className="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <img src={PasswordIcon} alt="" />
              </div>
            </div>

            <button
              type="button"
              className=" mt-2 font-semibold text-right text-sky-400 whitespace-nowrap leading-[167%]"
              onClick={handleShowPassword}
            >
              Show password
            </button>
            <div className="flex gap-2 text-xs ">
              <input
                type="checkbox"
                className="shrink-0 rounded aspect-[1.06] to-blue-600 w-[17px]"
                required
              />
              <div className="flex-auto my-auto mt-2">
                I agree with the{" "}
                <Link to="t&c" className="text-sky-400">
                  terms and condition
                </Link>{" "}
                of this.
              </div>
            </div>
            <button className="flex  flex-col align-middle justify-center items-center self-center px-16 py-7 mt-3 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px] max-md:px-5">
              Next
            </button>
          </form>

          <div className="flex flex-col px-3.5 ">
            <div className="flex justify-center items-center px-16  text-sm font-semibold tracking-wide text-center whitespace-nowrap text-slate-400 max-md:px-5">
              <div className="justify-center px-2.5 py-1.5 bg-white">OR</div>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5">
              <img
                loading="lazy"
                src={GoogleIcon}
                className="aspect-square w-[25px]"
              />
            </button>
            <button className="flex flex-1 justify-center items-center px-16 py-6 bg-gray-100 rounded-3xl max-md:px-5">
              <img
                loading="lazy"
                src={FacebookIcon}
                className="aspect-square w-[25px]"
              />
            </button>
          </div>
          <div className="self-center mt-2 text-sm tracking-wide leading-5 text-cyan-900 whitespace-nowrap">
            <span className="">Already have an account?</span>
            <Link className="font-bold text-cyan-900" to="/login">
              {" "}
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

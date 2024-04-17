import * as React from "react";
import EmailIcon from "../components/assets/Login/EmailIcon.svg";

function ForgetPassword() {
  return (
    <div className="flex flex-col px-12 py-20 bg-white rounded-2xl max-w-[428px]">
      <div className="self-start mt-1 ml-5 text-2xl font-medium tracking-wider leading-10 text-sky-400">
        Search your<span className="font-extrabold text-sky-400"> Id</span>
      </div>
      <div className="mt-5 ml-5 text-xs tracking-wide leading-5 text-slate-600 w-[241px]">
        Put your email or mobile number to find your id
      </div>

      <div class="relative mt-5">
              <input
                type="email"
                class="pl-10 pr-4 py-2 border rounded-xl bg-gray-100 w-[327px] h-[70px] "
                placeholder="Email"
              />
              <div
                class="absolute inset-y-0 left-0 pl-3  
                    flex items-center  
                    pointer-events-none"
              >
                <img src={EmailIcon} alt="" />
              </div>
            </div>
      
      <button className="justify-center items-center self-center px-16 py-7 mt-10 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px]">
        Next
      </button>
    </div>
  );
}


export default ForgetPassword
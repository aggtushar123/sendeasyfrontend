import React from "react";
import { Link } from "react-router-dom";

function ForgetOtp() {
  return (
    <div className="flex flex-col px-12 py-20 bg-white rounded-2xl max-w-[428px]">
    <div className="text-2xl font-medium tracking-wider leading-10 text-sky-400">
        Enter the <span className="font-extrabold text-sky-400">OTP</span>
      </div>
      <div className="mt-5 text-xs tracking-wide leading-5 text-slate-900">
        <span className="">To recover your id Enter the 4 digit code that</span>
        <br />
        <span className="">we just sent to </span>
        <span className="font-semibold text-slate-900">jonathan@email.com</span>
      </div>
      {/* <div className="flex gap-2.5 mt-5">
        <div className="flex flex-col justify-center text-xl font-medium tracking-wide whitespace-nowrap text-slate-900">
          <div className="flex flex-col justify-center bg-gray-100 rounded-xl border-2  border-solid">
            <div className="justify-center items-start px-8 py-7 bg-gray-100 rounded-xl border-2  border-solid">
              2
            </div>
          </div>
        </div>
       
       
      </div> */}
      <div class="flex gap-2.5 mt-5 flex-row items-center justify-between mx-auto w-full max-w-xs">
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 rounded-xl border border-gray-100 text-lg bg-gray-100 focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 rounded-xl border border-gray-200 text-lg bg-gray-100 focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 rounded-xl border border-gray-200 text-lg bg-gray-100 focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
              <div class="w-16 h-16 ">
                <input class="w-full h-full flex flex-col items-center justify-center text-center px-5 rounded-xl border border-gray-200 text-lg bg-gray-100 focus:bg-gray-50 focus:ring-1 ring-blue-700" type="text" name="" id=""/>
              </div>
            </div>
      <button className="justify-center items-center self-center px-16 py-7 mt-10 max-w-full text-base font-bold tracking-wide text-center text-white whitespace-nowrap bg-sky-400 rounded-[29px] w-[278px]">
        Next
      </button>
      <div className="flex gap-2 self-center p-4 mt-8 text-xs font-medium tracking-wide text-center whitespace-nowrap bg-gray-100 rounded-[100px] text-slate-900">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5616a36184eb8aad8ec1f5e8250d0069f548cdad9db5b73b9ec37279220df7cd?"
          className="shrink-0 w-5 aspect-square"
        />
        <div className="my-auto">00.21</div>
      </div>
      <div className="self-center mt-6 text-xs tracking-wide leading-5 text-center text-sky-400">
        <span className="">Didn’t receive the OTP? </span>
        <Link className="font-bold text-sky-400">Resend OTP</Link>
      </div>
    </div>
  );
}


export default ForgetOtp
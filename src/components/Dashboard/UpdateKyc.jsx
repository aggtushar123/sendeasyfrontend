import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import FacebookLogo from "../assets/Profile/FacebookLogo.svg";
import LinkedInLogo from "../assets/Profile/LinkedInLogo.svg";
import InstagramLogo from "../assets/Profile/InstagramLogo.svg";
import { updateUser } from "../../features/auth/authSlice";
function UpdateKyc() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fName: user.fName,
    email: user.email,
    mobile: user.mobile,
    kycDocument: user.kycDocument,
    description: user.description,
    dob: user.dob,
    gender: user.gender,
    occupation: user.occupation,
    workplace: user.workplace,
    workplaceEmail: user.workplaceEmail,
    address: user.address,
    linkedin: user.linkedin,
    facebook: user.facebook,
    instagram: user.instagram,
    token: user.token,
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    dispatch(updateUser({ userId: user._id, userData: formData }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
        <div className="flex max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
          </div>
          <div className="flex flex-col  w-[86%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow px-5 max-md:mt-10 max-md:max-w-full">
              <div className="text-lg font-bold tracking-wide text-blue-950 max-md:max-w-full">
                Profile Details
              </div>
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="flex flex-col justify-center items-start px-4 py-6 mt-10 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/f935d634716d8df7f6e187ab4ad79575d845dffc8f2da9a6903421b5ec087b5e?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                className="flex flex-col justify-center items-start px-4 py-6 mt-4 text-sm tracking-wide whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3aaf900b4234e0b66298289f25b665bdfb971ef81916c0f64ef3f89e98195adf?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>

              <input
                type="text"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Enter Mobile"
                className="flex flex-col justify-center items-start px-4 py-6 mt-4 text-sm tracking-wide capitalize whitespace-nowrap bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/17f12b5d55e2ee83ea60d60aa2dd9f333a86138efe0dda795d3aceb6f984a91a?"
                  className="shrink-0 w-5 aspect-square"
                />
              </div>

              <div className="flex gap-5 justify-between px-5 py-5 mt-4 w-full text-sm bg-gray-100 rounded-3xl max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 my-auto tracking-wide whitespace-nowrap text-slate-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/7d77484d2ddda742524b71e88618e772f7c6e50d05768210143bc327bc4e1489?"
                    className="shrink-0 w-5 aspect-square"
                  />
                  <div>***********</div>
                </div>
                <div className="justify-center px-6 py-2.5 font-semibold text-center text-sky-400 bg-indigo-100 rounded-[31px] max-md:px-5">
                  Change Password
                </div>
              </div>
              <div className="self-end mt-3 text-xs font-semibold tracking-wide leading-5 text-right text-sky-400">
                Show password
              </div>
              <div className="mt-12 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full">
                KYC Document
              </div>
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                KYC (Aadhar, PAN, Voter card, Passport, DL, 10th certificate) number
              </div>
              <input
                type="text"
                name="kycDocument"
                value={formData.kycDocument}
                onChange={handleChange}
                placeholder="Enter KYC Details"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-5 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Upload a softcopy
              </div>
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <input
                type="text"
                name="fName"
                value={formData.fName}
                onChange={handleChange}
                placeholder="Enter Full Name"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="flex gap-5 justify-between mt-3.5 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-3.5 text-lg font-semibold tracking-wide text-neutral-400">
                  <img
                    loading="lazy"
                    srcSet="..."
                    className="shrink-0 aspect-square w-[55px]"
                  />
                  <div className="flex-auto my-auto">Connect to Digilocker</div>
                </div>
                <div className="justify-center items-center self-start px-16 py-5 text-xl font-medium text-center text-white whitespace-nowrap bg-emerald-600 rounded-[31px] max-md:px-5">
                  Verified
                </div>
              </div>

              <div className="mt-12 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full">
                Personal Details
              </div>
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Short Description
            
              </div>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Enter short description"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Date Of Birth
            
              </div>
              <input
                type="date"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Enter date of birth"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Gender
            
              </div>
              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Select Gender"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Occupation
            
              </div>
              <input
                type="text"
                name="occupation"
                value={formData.occupation}
                onChange={handleChange}
                placeholder="Enter occupation"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Workplace University
            
              </div>
              <input
                type="text"
                name="workplace"
                value={formData.workplace}
                onChange={handleChange}
                placeholder="Enter your workplace"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
              Email Id provided by workplace or University
            
              </div>
              <input
                type="text"
                name="workplaceEmail"
                value={formData.workplaceEmail}
                onChange={handleChange}
                placeholder="Enter your workplace email"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />
              <div className="self-start mt-6 text-xs tracking-wide capitalize text-blue-950 max-md:ml-1.5">
                Address
            
              </div>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter your address"
                className="flex flex-col justify-center items-start px-4 py-6 mt-2 text-sm tracking-wide bg-gray-100 rounded-3xl text-slate-900 max-md:pr-5 max-md:max-w-full"
              />

              <div className="mt-20 text-lg font-bold tracking-wide text-blue-950 max-md:mt-10 max-md:max-w-full">
                Social Media link
              </div>
              <div className="flex gap-3 mt-6 text-xs font-medium tracking-wide whitespace-nowrap text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={LinkedInLogo}
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  placeholder="Enter LinkedIn"
                  className="grow justify-center items-start px-6 py-8 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full"
                />
              </div>
              <div className="flex gap-3 mt-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="url"
                  srcSet={FacebookLogo}
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <input
                  type="url"
                  name="facebook"
                  value={formData.facebook}
                  onChange={handleChange}
                  placeholder="Enter Facebook"
                  className="grow justify-center items-start px-6 py-8 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full"
                />
              </div>
              <div className="flex gap-3 mt-2.5 text-xs font-medium tracking-wide whitespace-nowrap text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <img
                  loading="lazy"
                  srcSet={InstagramLogo}
                  className="shrink-0 aspect-[1.04] w-[73px]"
                />
                <input
                  type="url"
                  name="instagram"
                  value={formData.instagram}
                  onChange={handleChange}
                  placeholder="Enter Instagram"
                  className="grow justify-center items-start px-6 py-8 bg-gray-100 rounded-3xl w-fit max-md:px-5 max-md:max-w-full"
                />
              </div>
              <button
                type="submit"
                className="justify-center self-end px-11 py-4 mt-9 text-xl font-medium text-center text-white bg-sky-400 rounded-[31px] max-md:px-5"
              >
                Save Change
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UpdateKyc;

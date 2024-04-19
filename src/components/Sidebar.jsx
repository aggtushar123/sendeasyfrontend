import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  const menuItem = [
    {
      path: "/t&c",
      name: "Dashboard",
    },
    {
      path: "/t&c",
      name: "Profile",
    },
    {
      path: "/t&c",
      name: "Notifications",
    },
    {
      path: "/t&c",
      name: "Chats",
    },
    {
      path: "/t&c",
      name: "Update KYC",
    },
    {
      path: "/t&c",
      name: "Terms and Condition",
    },
    {
      path: "/contact",
      name: "Contact Us",
    },
    {
      path: "/t&c",
      name: "Logout",
    },
  ];
  return (
  
          <div className="flex flex-col grow justify-center text-base text-sky-400 max-md:mt-10">
              <div className="flex flex-col self-stretch py-9 -ml-px w-[185px] h-[765px] bg-gray-100 grow-0 rounded-[39px]">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="self-center w-40 rounded-full border-emerald-600 border-solid aspect-[1.03] border-[6px] stroke-[6px]"
                />
                <div className="flex gap-0.5 self-center mt-1.5 font-semibold whitespace-nowrap leading-[50%] text-slate-900">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/c1c2740be267d6d9e5c960131d2fa3a48ed688dd1574704a6f3408ca29098d71?"
                    className="shrink-0 aspect-square w-[22px]"
                  />
                  <div className="my-auto">4.9</div>
                </div>

                <div className="flex gap-4 self-center mt-5 mb-5 text-xl leading-8 whitespace-nowrap text-slate-900">
                  <div>Review:</div>
                  <div className="font-semibold">16</div>
                </div>
                {menuItem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className="flex items-center justify-center self-center mt-4 w-[160px] h-[43px] font-medium text-center bg-indigo-100 rounded-[31px] max-md:px-5 "
                  >
                    {item.name}
                  </NavLink>
                ))}

                <NavLink className="self-center w-[160px] h-[43px]  mt-4 font-medium text-center text-rose-500 bg-rose-500 bg-opacity-10 rounded-[31px] max-md:px-5">
                  Delete Account
                </NavLink>
              </div>
            </div>
  );
}

export default Sidebar;

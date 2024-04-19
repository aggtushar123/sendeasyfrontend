import React from "react";
import Sidebar from "../components/Sidebar";
import Terms from "./Terms";
import DashboardComponent from "../components/Dashboard/DashboardComponent";
import Profile from "../components/Dashboard/Profile";
import Chats from "../components/Dashboard/Chats";
import Notifications from "../components/Dashboard/Notifications";
import UpdateKyc from "../components/Dashboard/UpdateKyc";

const Dashboard = () => {
  return (
    <div>
      <div className="flex flex-col pb-20 rounded-[29px]">
        <div className="self-center mt-10 max-w-full w-[1300px] max-md:mt-10">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
              <Sidebar />
            </div>

            <div className="flex flex-col ml-5 w-[85%] max-md:ml-0 max-md:w-full">
            {/* <DashboardComponent/> */}
            <Profile/>
            {/* <Notifications/>
            <Chats/>
            <UpdateKyc/>
              <Terms /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  deleteAllNotification,
  getAllNotifications,
} from "../../features/auth/authSlice";
import {fetchBookingById} from '../../features/booking/bookingSlice'

const Notifications = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, notification } = useSelector((state) => state.auth);

  // delete notifications

  useEffect(() => {
    if (user && user._id) {
      dispatch(getAllNotifications({ userId: user._id }));
    }
  }, [dispatch, user]);

  const handleDeleteAllRead = async () => {
    try {
      dispatch(deleteAllNotification(user._id));
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (bookingId) => {
    // Delay the navigate call to ensure it happens within an event handler
    return () => {
      navigate(`/dashboard/bookingdetails/${bookingId}`);
    };
  };
  return (
    <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
        </div>
        <div className="flex flex-col  w-[86%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col items-center py-12 pr-20 pl-8 bg-neutral-100 max-w-[978px] rounded-[39px] max-md:px-5">
            <div className="self-stretch text-2xl font-medium leading-8 text-sky-400 uppercase tracking-[8.81px] max-md:mr-1.5 max-md:max-w-full">
              Notification
            </div>

            {notification
              .slice()
              .reverse()
              .map((notificationMessage) => (
                <div 
                onClick={handleClick(notificationMessage.bookingId)}
                className="flex gap-5 py-3 pr-9 pl-3.5 mt-6 max-w-full bg-white shadow-2xl rounded-[64.093px] w-[808px] max-md:flex-wrap max-md:pr-5">
                  <div className="flex-auto max-md:max-w-full">
                    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                      <div className="flex flex-col w-1/5 max-md:ml-0 max-md:w-full">
                        <div className="flex grow justify-center items-center p-1.5 rounded-full border-solid border-[3px] border-blue-300 border-opacity-20 stroke-[3px] max-md:mt-4">
                          <img
                            loading="lazy"
                            srcSet="..."
                            className="aspect-square w-[93px]"
                          />
                        </div>
                      </div>
                      <div className="flex flex-col ml-5 w-4/5 max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col grow mt-2 font-medium max-md:mt-6 max-md:max-w-full">
                          <div className="text-lg text-zinc-500 max-md:max-w-full">
                            {notificationMessage.from}
                          </div>
                          <div className="mt-1.5 text-xs text-zinc-400 max-md:max-w-full">
                            {notificationMessage.message}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between items-start self-start text-xs font-medium text-zinc-400">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f935c514f70a29b6d7e9850beee98f296c0dc7a47e85fa985b7a5653bcc171e?"
                      className="shrink-0 self-end mt-10 w-3 aspect-square"
                    />
                  </div>
                </div>
              ))}

            <div className="justify-center items-center px-16 py-5 mt-8 max-w-full text-xl font-medium text-center text-sky-400 bg-white border-2 border-sky-400 border-solid rounded-[31px] w-[349px] max-md:px-5 max-md:mt-10">
              See more
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;

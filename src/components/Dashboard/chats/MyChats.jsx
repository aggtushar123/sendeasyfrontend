import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchChats,
  setSelectedChat,
  reset,
} from "../../../features/chats/chatSlice";
import Spinner from "../../Spinner";
import { getSender } from "./config/ChatLogics";

function MyChats({fetchAgain}) {
  const [loggedUser, setLoggedUser] = useState();
  const { user } = useSelector((state) => state.auth);
  const { chats, isLoadingChat, isErrorChat, message } = useSelector((state) => state.chat);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoggedUser(JSON.parse(localStorage.getItem("user")));
    dispatch(fetchChats());


  }, [fetchAgain, dispatch]);

  const handleChatClick = (chat) => {
    dispatch(setSelectedChat(chat));
  };

  return (
    <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
        </div>
        <div className="flex flex-col w-[86%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col pt-10 pr-9 pb-6 pl-3 mt-3.5 w-full rounded-3xl bg-neutral-100 leading-[158.5%] max-md:pr-5 max-md:max-w-full">
            <div className="text-2xl font-medium leading-8 text-sky-400 uppercase tracking-[8.81px] max-md:max-w-full">
              
            </div>

            {isLoadingChat ? (
              <Spinner />
            ) : isErrorChat ? (
              <div className="text-red-500">Error: {message}</div>
            ) : (
              chats.map((chat) => (
                <div
                  key={chat._id}
                  onClick={() => handleChatClick(chat)}
                  className="flex gap-5 justify-between px-4 py-2 mt-6 w-full bg-white rounded-3xl border-sky-400 border-solid border-[3px] max-md:flex-wrap max-md:px-5 max-md:max-w-full"
                >
                  <div className="flex gap-5 max-md:flex-wrap">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 rounded-full aspect-square w-[83px]"
                    />
                    <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
                      <div className="text-2xl font-semibold text-sky-400">
                        {!chat.isGroupChat
                          ? getSender(loggedUser, chat.users)
                          : chat.chatName}
                      </div>
                      <div className="mt-3 text-xl font-medium text-sky-950">
                        {/* Add other chat details here */}
                      </div>
                    </div>
                  </div>
                  <div className="my-auto text-base font-medium text-right text-stone-300">
                    {/* Add other details like timestamp here */}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyChats;

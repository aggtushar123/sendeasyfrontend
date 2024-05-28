import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSender, getSenderEmail } from "./config/ChatLogics";
import Spinner from "../../Spinner";
import {
  fetchMessage,
  sendMessage,
  addMessage,
  addNotification,
} from "../../../features/message/messageSlice";
import { setSelectedChat } from "../../../features/chats/chatSlice";
import ScrollableChat from "./ScrollableChat";
import io from "socket.io-client";
const ENDPOINT = process.env.REACT_APP_API_URL;
var socket, selectedChatCompare;

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
  const { user } = useSelector((state) => state.auth);
  const { selectedChat, isLoadingChat, isErrorChat, message } = useSelector(
    (state) => state.chat
  );
  const { notification, messages, isLodingMessage } = useSelector(
    (state) => state.message
  );
  const [currentMessage, setCurrentMessage] = useState("");
  const [socketConnected, setSocketConnected] = useState(false);
  const [typing, setTyping] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  const dispatch = useDispatch();

 
  useEffect(() => {
    socket = io(ENDPOINT);
    socket.emit("setup", user);
    socket.on("connected", () => setSocketConnected(true));
    socket.on("typing", () => setIsTyping(true));
    socket.on("stop typing", () => setIsTyping(false));
  }, [user]);

  useEffect(() => {
    if (selectedChat) {
      dispatch(fetchMessage(selectedChat._id)).then((action) => {
        if (action.meta.requestStatus === "fulfilled") {
          socket.emit("join chat", selectedChat._id);
          console.log(action.payload);
        }
      });
    }
    selectedChatCompare = selectedChat;
  }, [dispatch, selectedChat]);



  useEffect(() => {
    const callback = (newMessageRecieved) => {
      if (
        !selectedChatCompare || // if chat is not selected or doesn't match current chat
        selectedChatCompare._id !== newMessageRecieved.chat._id
      ) {
        if (!notification.includes(newMessageRecieved)) {
          dispatch(addNotification(newMessageRecieved));
          setFetchAgain(!fetchAgain);
        }
      } else {
        dispatch(addMessage(newMessageRecieved));
      }
    };

    socket.on("message recieved", callback);

    return () => {
      socket.removeAllListeners("message recieved")
    };
  });

  const handleSendMessage = async (event) => {
    if (event.key === "Enter" && currentMessage) {
        socket.emit("stop typing", selectedChat._id);
        try {
            const action = await dispatch(sendMessage({ content: currentMessage, chatId: selectedChat._id }));

            if (action.meta.requestStatus === "fulfilled") {
                // Emit the new message to the socket
                socket.emit("new message", action.payload);

                // Clear the current message input
                setCurrentMessage("");
            }
        } catch (error) {
            console.log(error);
        }
    }
};
  const typingHandler = (e) => {
    setCurrentMessage(e.target.value);
    if (!socketConnected) return;

    if (!typing) {
      setTyping(true);
      socket.emit("typing", selectedChat._id);
    }
    let lastTypingTime = new Date().getTime();
    var timerLength = 3000;
    setTimeout(() => {
      var timeNow = new Date().getTime();
      var timeDiff = timeNow - lastTypingTime;
      if (timeDiff >= timerLength && typing) {
        socket.emit("stop typing", selectedChat._id);
        setTyping(false);
      }
    }, timerLength);
  };
  const handleBackButtonClick = () => {
    dispatch(setSelectedChat(""));
  };
  return (
    <>
      {selectedChat ? (
        <>
          {!selectedChat.isGroupChat ? (
            <>
              <div className="flex flex-col w-[86%] h-[720px] bg-neutral-100 max-md:ml-0 max-md:w-full">
                <div className="flex gap-5 justify-between items-center px-7 py-3.5 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
                  <div className="flex gap-5 justify-center self-stretch font-medium max-md:flex-wrap">
                  <button onClick={handleBackButtonClick}>Back</button>
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="shrink-0 my-auto rounded-full aspect-square w-[83px]"
                    />
                    <div className="flex flex-col justify-center">
                      <div className="text-2xl leading-10 text-sky-950">
                        {getSender(user, selectedChat.users)}
                      </div>
                      <div className="text-base leading-6 text-gray-500">
                        {getSenderEmail(user, selectedChat.users)}
                      </div>
                    </div>
                  </div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c4e31042334ef408f0b1a2ac5dfa8fe0039203be4fd67de39c74c2892e93b7?"
                    className="shrink-0 self-stretch my-auto aspect-square w-[39px]"
                  />
                </div>

                <div className="flex-grow">
                  {isLodingMessage ? (
                    <Spinner />
                  ) : (
                    <div>
                      <ScrollableChat messages={messages}/>
                    </div>
                  )}
                </div>

                <div className="flex flex-col px-11 mt-6 max-md:px-5 max-md:max-w-full">
                  <div
                    onKeyDown={handleSendMessage}
                    className="flex flex-col justify-bottom px-2.5 py-7 mt-12 text-base font-medium leading-6 bg-white rounded-3xl text-neutral-400 max-md:mt-10 max-md:max-w-full"
                  >
                  {isTyping ? <>Loading...</>: <></> }
                    <input
                      placeholder="Type Something..."
                      name="TypeMessage"
                      value={currentMessage}
                      onChange={typingHandler}
                      className="flex gap-5 justify-between py-1.5 pr-2 pl-5 w-full bg-neutral-100 rounded-[88px] max-md:flex-wrap max-md:max-w-full"
                    />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>{selectedChat.chatName.toUpperCase()}</>
          )}
        </>
      ) : (
        <div className="flex flex-col w-[86%] bg-neutral-100 max-md:ml-0 max-md:w-full">
          Click On the User to Start Chatting
        </div>
      )}
    </>
  );
};

export default SingleChat;

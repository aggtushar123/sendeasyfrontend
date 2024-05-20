import React from 'react'
import { useSelector } from "react-redux";
import SingleChat from './SingleChat';
const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, isLoadingChat, isErrorChat, message } = useSelector((state) => state.chat);
    
  return (
    <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
    <div className="flex max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
      </div>
     
    <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
  </div>
  </div>
  )
}

export default Chatbox

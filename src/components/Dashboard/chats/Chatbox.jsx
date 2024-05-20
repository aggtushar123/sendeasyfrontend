import React from 'react'
import { useSelector } from "react-redux";
const Chatbox = ({ fetchAgain, setFetchAgain }) => {
    const { selectedChat, isLoadingChat, isErrorChat, message } = useSelector((state) => state.chat);
    console.log(selectedChat)
  return (
    <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
    <div className="flex max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
      </div>
      <div className="flex flex-col w-[86%] bg-neutral-100 max-md:ml-0 max-md:w-full">
      <div className="flex gap-5 justify-between items-center px-7 py-3.5 w-full bg-white max-md:flex-wrap max-md:px-5 max-md:max-w-full">
        <div className="flex gap-5 justify-center self-stretch font-medium max-md:flex-wrap">
          <img
            loading="lazy"
            srcSet="..."
            className="shrink-0 my-auto rounded-full aspect-square w-[83px]"
          />
          <div className="flex flex-col justify-center">
            <div className="text-2xl leading-10 text-sky-950">
              Christopher Campbell
            </div>
            <div className="text-base leading-6 text-gray-500">
              campbell@gmail.com
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-between items-center self-stretch my-auto text-sm font-semibold text-center text-sky-400 capitalize">
          <div className="justify-center self-stretch px-11 py-2.5 my-auto bg-indigo-100 rounded-[31px] max-md:px-5">
            send request
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/62bc9f98bfbc2061cffe33eb7b3cc7b8f0c49a9ae84c71c719507351747ac968?"
            className="shrink-0 self-stretch my-auto aspect-square w-[46px]"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/75e2527a9d6675920688d46ed05328174158561d83ab0fb2f478bde51d047066?"
            className="shrink-0 self-stretch aspect-square w-[54px]"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4c4e31042334ef408f0b1a2ac5dfa8fe0039203be4fd67de39c74c2892e93b7?"
          className="shrink-0 self-stretch my-auto aspect-square w-[39px]"
        />
      </div>
      
      <div className="flex flex-col px-11 mt-6 max-md:px-5 max-md:max-w-full">
        
      
        <div className="flex flex-col justify-center px-2.5 py-7 mt-12 text-base font-medium leading-6 bg-white rounded-3xl text-neutral-400 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-between py-1.5 pr-2 pl-5 w-full bg-neutral-100 rounded-[88px] max-md:flex-wrap max-md:max-w-full">
            <div className="flex gap-5 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3accfb74b05bb407839f2a10027d6c7cda58172ed09bad07adfc1fb78b23ecf5?"
                className="shrink-0 aspect-square w-[30px]"
              />
              <div className="flex-auto my-auto">Type Something...</div>
            </div>
            <img
              loading="lazy"
              srcSet="..."
              className="shrink-0 aspect-square w-[50px]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Chatbox

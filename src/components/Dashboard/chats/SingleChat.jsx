import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const SingleChat = ({ fetchAgain, setFetchAgain }) => {
    const { user } = useSelector((state) => state.auth);
    const { selectedChat, isLoadingChat, isErrorChat, message } = useSelector((state) => state.chat);
  return (
    <>
      {selectedChat ? (<>

        
      </>) :(<>
        Click On the User to Start Chatting
      </>)
      }
    </>
  )
}

export default SingleChat

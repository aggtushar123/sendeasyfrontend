import React, { useState } from "react";
import { useSelector } from "react-redux";
import MyChats from "./chats/MyChats";
import SearchSideDrawer from "./chats/SearchSideDrawer";
import Chatbox from "./chats/Chatbox";
function Chats() {
  const {
    user,
    searchResult,
    isLoading: isLoadingAuth,
  } = useSelector((state) => state.auth);
  const [fetchAgain, setFetchAgain] = useState(false);
  const { selectedChat, isLoadingChat, isErrorChat, message } = useSelector(
    (state) => state.chat
  );
  return (
    <div>
      
      {selectedChat
        ? user && (
            <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
          )
        : user && (<>
          <SearchSideDrawer /> <MyChats fetchAgain={fetchAgain} /> 
        </>)}
    </div>
  );
}

export default Chats;

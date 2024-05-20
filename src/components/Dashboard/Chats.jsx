import React, { useState} from "react";
import { useSelector } from "react-redux";
import { searchUser } from "../../features/auth/authSlice";
import { accessChat, fetchChats, reset } from "../../features/chats/chatSlice";
import Spinner from "../Spinner";
import MyChats from "./chats/MyChats";
import SearchSideDrawer from "./chats/SearchSideDrawer";
import Chatbox from "./chats/Chatbox";
function Chats() {
  const { user, searchResult, isLoading: isLoadingAuth } = useSelector((state) => state.auth);
  const [fetchAgain, setFetchAgain] = useState(false);

  return (
    
<div >
      {user && <SearchSideDrawer />}
     
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <Chatbox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      
    </div>
      
    
  );
}

export default Chats;

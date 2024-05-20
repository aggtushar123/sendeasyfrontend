import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchUser } from "../../../features/auth/authSlice";
import { accessChat, fetchChats, reset } from "../../../features/chats/chatSlice";
import Spinner from "../../Spinner";


function SearchSideDrawer() {
  const { user, searchResult, isLoading: isLoadingAuth } = useSelector((state) => state.auth);
  const { chats, selectedChat, isLoadingChat, isErrorChat, message } = useSelector((state) => state.chat);
  const [searchData, setSearchData] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (isErrorChat) {
      console.error("Error accessing chat:", message);
    }

    dispatch(fetchChats());

    return () => {
      dispatch(reset());
    };
  }, [isErrorChat, message, dispatch]);

  const handleChange = (e) => {
    setSearchData(e.target.value);
  };

  const handleSearch = () => {
    dispatch(searchUser(searchData));
  };

  const handleAccessChat = async (userId) => {
    try {
      await dispatch(accessChat(userId)).unwrap();
    } catch (error) {
      console.error("Failed to access chat:", error);
    }
  };

  return (
    <div className="mt-5 max-w-full w-[926px] max-md:mt-10">
      <div className="flex max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[14%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center text-base text-sky-400 max-md:mt-10" />
        </div>
        <div className="flex flex-col w-[86%] max-md:ml-0 max-md:w-full">
          <div className="flex">
            <input
              type="text"
              name="searchData"
              value={searchData}
              onChange={handleChange}
              placeholder="Search"
              className="justify-center items-start py-7 pr-16 pl-20 mt-5 w-full text-lg tracking-wide text-center bg-gray-100 rounded-2xl text-black max-md:pr-5 max-md:pl-8 max-md:max-w-full"
            />
            <button
              onClick={handleSearch}
              className="ml-2 py-7 px-10 mt-5 bg-sky-300 text-white rounded-2xl"
            >
              Go
            </button>
          </div>

          <div className="flex flex-col pt-10 pr-9 pb-6 pl-3 mt-3.5 w-full rounded-3xl bg-neutral-100 leading-[158.5%] max-md:pr-5 max-md:max-w-full">
            {isLoadingAuth || isLoadingChat ? (
              <Spinner />
            ) : (
              <>
                {searchResult.map((user) => (
                    <div
                      key={user._id}
                      onClick={() => handleAccessChat(user._id)}
                      className="flex gap-5 justify-between px-4 py-2 mt-6 w-full bg-white rounded-3xl border-sky-400 border-solid border-[3px] max-md:flex-wrap max-md:px-3 max-md:max-w-full"
                    >
                      <div className="flex gap-3 max-md:flex-wrap">
                        <img
                          loading="lazy"
                          srcSet="..."
                          className="shrink-0 rounded-full aspect-square w-[50px]" // Reduced the size of the image
                        />
                        <div className="flex flex-col grow shrink-0 justify-center basis-0 w-fit">
                          <div className="text-xl font-semibold text-sky-400">
                            {user.fName}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </>
            )}
          </div>
          
        </div>
        
      </div>
    </div>
  );
}

export default SearchSideDrawer;

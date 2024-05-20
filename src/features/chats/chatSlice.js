import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import chatService from "./chatService";

const initialState = {
  selectedChat: "",
  notification: [],
  chats: [],
  isLoadingChat: false,
  isErrorChat: false,
  isSuccessChat: false,
  message: ""
};

export const accessChat = createAsyncThunk(
  "chat/accessChat",
  async (userId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await chatService.accessChat(userId, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchChats = createAsyncThunk(
  "chat/fetchChats",
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await chatService.fetchChats(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoadingChat = false;
      state.isErrorChat = false;
      state.isSuccessChat = false;
      state.message = "";
    },
    setSelectedChat: (state, action) => {
      state.selectedChat = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(accessChat.pending, (state) => {
        state.isLoadingChat = true;
      })
      .addCase(accessChat.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoadingChat = false;
        state.isSuccessChat = true;

        // Check if the chat already exists
        const chatExists = state.chats.find((c) => c._id === action.payload._id);

        if (!chatExists) {
          state.chats = [action.payload, ...state.chats];
        }
        state.selectedChat = action.payload;
      })
      .addCase(accessChat.rejected, (state, action) => {
        state.isLoadingChat = false;
        state.isErrorChat = true;
        state.message = action.payload;
      })
      .addCase(fetchChats.pending, (state) => {
        state.isLoadingChat = true;
      })
      .addCase(fetchChats.fulfilled, (state, action) => {
       
        state.isLoadingChat = false;
        state.isSuccessChat = true;
        state.chats = action.payload;
      })
      .addCase(fetchChats.rejected, (state, action) => {
        state.isLoadingChat = false;
        state.isErrorChat = true;
        state.message = action.payload;
      });
  },
});

export const { reset, setSelectedChat } = chatSlice.actions;

export default chatSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import messageService from "./messageService";

const initialState = {
  messages: [],
  notification: [],
  isLoadingMessage: false,
  isErrorMessage: false,
  isSuccessMessage: false,
  message: ""
};

export const fetchMessage = createAsyncThunk(
  "message/fetchMessage",
  async (chatId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await messageService.fetchMessage(chatId, token);
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

export const sendMessage = createAsyncThunk(
  "message/sendMessage",
  async ({content, chatId}, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await messageService.sendMessage(content, chatId, token);
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

export const messageSlice = createSlice({
  name: 'message',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoadingMessage = false;
      state.isErrorMessage = false;
      state.isSuccessMessage = false;
      state.message = "";
    },
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    addNotification: (state, action) => {
      state.notification.push(action.payload);
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMessage.pending, (state) => {
        state.isLoadingMessage = true;
        state.isErrorMessage = false;
        state.isSuccessMessage = false;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.isLoadingMessage = false;
        state.isSuccessMessage = true;
        state.messages.push(action.payload);
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.isLoadingMessage = false;
        state.isErrorMessage = true;
        state.errorMessage = action.payload;
      })
      .addCase(fetchMessage.pending, (state) => {
        state.isLoadingMessage = true;
        state.isErrorMessage = false;
        state.isSuccessMessage = false;
      })
      .addCase(fetchMessage.fulfilled, (state, action) => {
        state.isLoadingMessage = false;
        state.isSuccessMessage = true;
        state.messages = action.payload;
      })
      .addCase(fetchMessage.rejected, (state, action) => {
        state.isLoadingMessage = false;
        state.isErrorMessage = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset, addMessage, addNotification } = messageSlice.actions;

export default messageSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dash: true,
  profile: false,
  notification: false,
  chats: false,
  updatekyc: false,
  tnc: false,
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    toggleDashTrue: (state) => {
      state.dash = true;
    },
    toggleDashFalse: (state) => {
      state.dash = false;
    },
    toggleProfileTrue: (state) => {
      state.profile = true;
    },
    toggleProfileFalse: (state) => {
      state.profile = false;
    },
    toggleNotifTrue: (state) => {
      state.notification = true;
    },
    toggleNotifFalse: (state) => {
      state.notification = false;
    },
    toggleChatTrue: (state) => {
      state.chats = true;
    },
    toggleChatFalse: (state) => {
      state.chats = false;
    },
    toggleUpdateKycTrue: (state) => {
      state.updatekyc = true;
    },
    toggleUpdateKycFalse: (state) => {
      state.updatekyc = false;
    },
    toggleTnCTrue: (state) => {
      state.tnc = true;
    },
    toggleTnCFalse: (state) => {
      state.tnc = false;
    },
  },
});

export const {
  toggleDashFalse,
  toggleDashTrue,
  toggleProfileTrue,
  toggleProfileFalse,
  toggleNotifTrue,
  toggleNotifFalse,
  toggleChatTrue,
  toggleChatFalse,
  toggleUpdateKycTrue,
  toggleUpdateKycFalse,
  toggleTnCTrue,
  toggleTnCFalse,
} = dashboardSlice.actions;

export default dashboardSlice.reducer;

// src/features/modal/modalSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showModal: false,
  modalType: '',
  ongoingTripsData: [],
  finishedTripsData: [],
  cancelledTripsData: [],
  createdTripsData: [],
  ongoingLuggageTripsData: [],
  finishedLuggageTripsData: [],
  cancelledLuggageTripsData: [],
  createdLuggageTripsData: [],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setShowModal: (state, action) => {
      state.showModal = action.payload;
    },
    setModalType: (state, action) => {
      state.modalType = action.payload;
    },
    setOngoingTripsData: (state, action) => {
      state.ongoingTripsData = action.payload;
    },
    setFinishedTripsData: (state, action) => {
      state.finishedTripsData = action.payload;
    },
    setCancelledTripsData: (state, action) => {
      state.cancelledTripsData = action.payload;
    },
    setCreatedTripsData: (state, action) => {
      state.createdTripsData = action.payload;
    },
    setOngoingLuggageTripsData: (state, action) => {
      state.ongoingLuggageTripsData = action.payload;
    },
    setFinishedLuggageTripsData: (state, action) => {
      state.finishedLuggageTripsData = action.payload;
    },
    setCancelledLuggageTripsData: (state, action) => {
      state.cancelledLuggageTripsData = action.payload;
    },
    setCreatedLuggageTripsData: (state, action) => {
      state.createdLuggageTripsData = action.payload;
    },
  },
});

export const { 
  setShowModal, 
  setModalType,
  setOngoingTripsData,
  setFinishedTripsData,
  setCancelledTripsData,
  setCreatedTripsData,
  setCancelledLuggageTripsData,
  setFinishedLuggageTripsData,
  setCreatedLuggageTripsData,
  setOngoingLuggageTripsData 
} = modalSlice.actions;

export default modalSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },

    toggleTrue: (state) => {
      state.value = true;
    },
    toggleFalse: (state) => {
      state.value = false;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { toggleFalse, toggleTrue } = headerSlice.actions;

export default headerSlice.reducer;

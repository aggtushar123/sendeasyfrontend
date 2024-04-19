import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleTrue: (state) => {
      state.value = true;
    },
    toggleFalse: (state) => {
      state.value = false;
    },
  },
});

export const { toggleFalse, toggleTrue } = headerSlice.actions;

export default headerSlice.reducer;

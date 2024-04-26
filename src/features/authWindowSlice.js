import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: false,
};

export const authWindowSlice = createSlice({
  name: 'authWindow',
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

export const { toggleFalse, toggleTrue } = authWindowSlice.actions;

export default authWindowSlice.reducer;

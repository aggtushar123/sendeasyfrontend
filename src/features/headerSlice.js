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
    toggleView: (state) => {
      state.value = !state.value;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, toggleView } =
  headerSlice.actions;

export default headerSlice.reducer;

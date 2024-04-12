import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: true,
};

export const counterSlice = createSlice({
  name: 'counter',
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
  counterSlice.actions;

export default counterSlice.reducer;

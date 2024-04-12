import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './stateManager/counterSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../features/headerSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    auth: authReducer,

  },
});

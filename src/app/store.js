import { configureStore } from '@reduxjs/toolkit';
import headerReducer from '../features/headerSlice';
import dashboardReducer from '../features/dashboardSlice';
import authReducer from '../features/auth/authSlice';
import authWindowReducer from '../features/authWindowSlice'

export const store = configureStore({
  reducer: {
    header: headerReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    authWindow: authWindowReducer
  },
});

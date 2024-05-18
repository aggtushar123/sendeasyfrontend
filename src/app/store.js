import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import headerReducer from '../features/headerSlice';
import dashboardReducer from '../features/dashboardSlice';
import authReducer from '../features/auth/authSlice';
import modalReducer from '../features/modalSlice'
import listingReducer from '../features/listing/listingSlice'

import { serializableCheck } from '@reduxjs/toolkit/query/react';

export const store = configureStore({
  reducer: {
    header: headerReducer,
    auth: authReducer,
    dashboard: dashboardReducer,
    listing: listingReducer,
    modal: modalReducer,
  },
});

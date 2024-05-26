import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import bookingService from './bookingService';

// Initial state
const initialState = {
  booking: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  message: '',
};

// Async thunk for fetching booking by ID
export const fetchBookingById = createAsyncThunk(
  'booking/fetchById',
  async (id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
      return await bookingService.getBookingById(id, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Async thunk for accepting booking
export const acceptBooking = createAsyncThunk(
  'booking/accept',
  async ( id, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token;
      return await bookingService.acceptBooking(id, token);
    } catch (error) {
      const message = error.response?.data?.message || error.message || error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    reset: (state) => {
      state.booking = null;
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBookingById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchBookingById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload;
      })
      .addCase(fetchBookingById.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(acceptBooking.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptBooking.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.booking = action.payload
      })
      .addCase(acceptBooking.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = bookingSlice.actions;
export default bookingSlice.reducer;

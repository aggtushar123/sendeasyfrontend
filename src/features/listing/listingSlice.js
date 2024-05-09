import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import listingService from "./listingService";

const initialState = {
  travelers: [],
  luggageListings: [],
  traveler: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const createTraveler = createAsyncThunk(
  "traveler/create",
  async (travelerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await listingService.createTraveler(travelerData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTravelers = createAsyncThunk(
  "traveler/get",
  async (travelerData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      
      return await listingService.getTraveler(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const createLuggage = createAsyncThunk(
  "luggage/create",
  async (luggageData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await listingService.createLuggage(luggageData, token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getLuggage = createAsyncThunk(
  "luggage/getLuggage",
  async (luggageData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await listingService.getLuggage(token);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchTravelerListings = createAsyncThunk(
  "listing/fetchTravelerListings",
  async (_, thunkAPI) => {
    try {
      const listings = await listingService.fetchTravelerListings();
      return listings;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const fetchLuggageListings = createAsyncThunk(
  "listing/fetchLuggageListings",
  async (_, thunkAPI) => {
    try {
      const listings = await listingService.fetchLuggageListings();
      return listings;
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const listingSlice = createSlice({
  name: 'listing',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createTraveler.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createTraveler.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createTraveler.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getTravelers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTravelers.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.traveler = action.payload;
      })
      .addCase(getTravelers.rejected, (state, action) => {
    
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(createLuggage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createLuggage.fulfilled, (state) => {
        state.isLoading = false;
        state.isSuccess = true;
      })
      .addCase(createLuggage.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getLuggage.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getLuggage.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = action.payload;
      })
      .addCase(getLuggage.rejected, (state, action) => {
        console.log(action.payload)
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchTravelerListings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchTravelerListings.fulfilled, (state, action) => {
        
        state.isLoading = false;
        state.isSuccess = true;
        state.travelers = action.payload;
      })
      .addCase(fetchTravelerListings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(fetchLuggageListings.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchLuggageListings.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.luggageListings = action.payload;
      })
      .addCase(fetchLuggageListings.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = listingSlice.actions;

export default listingSlice.reducer;

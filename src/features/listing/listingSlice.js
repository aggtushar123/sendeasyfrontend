import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import listingService from './listingService'

const initialState = {
    travelers : [],
    traveler: {},
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''

}

export const  createTraveler = createAsyncThunk('traveler/create', async(travelerData, thunkAPI) => {
   
    try {
        const token = thunkAPI.getState().auth.user.token
        
        return await listingService.createTraveler(travelerData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const  getTraveler = createAsyncThunk('travelers/getAll', async(travelerData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await listingService.getTraveler(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const  createLuggage = createAsyncThunk('luggage/create', async(luggageData, thunkAPI) => {
   
    try {
        const token = thunkAPI.getState().auth.user.token
        
        return await listingService.createLuggage(luggageData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const  getLuggage = createAsyncThunk('luggage/getAll', async(luggageData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await listingService.getLuggage(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

export const listingSlice = createSlice({
    name: 'listing',
    initialState,
    reducers : {
        reset : (state) => initialState
    },
    extraReducers: (builder) => {
        builder 
            .addCase(createTraveler.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createTraveler.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createTraveler.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getTraveler.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getTraveler.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(getTraveler.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(createLuggage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createLuggage.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(createLuggage.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
            .addCase(getLuggage.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getLuggage.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.message = action.payload
            })
            .addCase(getLuggage.rejected, (state,action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

    }
})

export const {reset} = listingSlice.actions
export default listingSlice.reducer
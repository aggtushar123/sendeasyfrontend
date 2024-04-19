import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from "./authService";

const initialState = {
    user: null,
    isError : false,
    isSuccess : false,
    isLoading: false,
    message : ''
}

export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    localStorage.setItem('user', JSON.stringify(user));
})
export const login = createAsyncThunk('auth/login', async(user, thunkAPI) => {
    console.log(user);
})
export const logout = createAsyncThunk('auth/logout', async() => {
    await authService.logout()
})

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers : {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {

    }
})
export const {reset} = authSlice.actions
export default authSlice.reducer
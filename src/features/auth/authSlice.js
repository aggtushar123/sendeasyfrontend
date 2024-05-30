import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import authService from './authService';

//Get user from localstorage
const user = JSON.parse(localStorage.getItem('user'));


const initialState = {
  user: user ? user : null,
  notification:  [],
  gUser: null,
  searchResult:[],
  isVerified: false,
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkAPI) => {
    try {
      return await authService.register(user);
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
export const updateUser = createAsyncThunk(
  'auth/updateUser',
  async ({ userId, userData }, thunkAPI) => {
    try {
      return await authService.updateUser(userId, userData);
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
export const bookNowTraveler = createAsyncThunk(
  'auth/bookNowTraveler',
  async ({ userId, listedId, listingInfo, userInfo }, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      return await authService.bookNowTraveler(userId, listedId, listingInfo, userInfo, token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message || 'Error booking');
    }
  }
);
export const getUser = createAsyncThunk(
  'auth/getUser',
  async (userId, thunkAPI) => {
    try {
      return await authService.getUser(userId);
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

export const getAllNotifications = createAsyncThunk(
  'auth/getAllNotifications',
  async ({ userId }, thunkAPI) => {
    try {
      
      const token = thunkAPI.getState().auth.user.token;
      return await authService.getAllNotifications(userId, token);
    } catch (error) {
      const message = error.message || 'Error getting notifications';
      return thunkAPI.rejectWithValue(message);
    }
  }
);
export const searchUser = createAsyncThunk(
  "auth/searchUser",
  async (searchData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.token;

      return await authService.searchUser(searchData, token);
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

export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    return await authService.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
});

// Logout user

export const logout = createAsyncThunk('auth/logout', async () => {
  await authService.logout();
});

export const deleteAllNotification = createAsyncThunk(
  "auth/deleteAllNotification ",
  async (userId, thunkAPI) => {
    try {
      
      const token = thunkAPI.getState().auth.user.token;
      
      return await authService.deleteAllNotification(userId, token);
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

export const googleLogin = createAsyncThunk('auth/google', async (thunkAPI) => {
  try {
    return await authService.googleLogin();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
  
});

export const facebookLogin = createAsyncThunk('auth/facebook', async (thunkAPI) => {
  try {
    return await authService.facebookLogin();
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    return thunkAPI.rejectWithValue(message);
  }
  
});

export const sendOtp = createAsyncThunk(
  'auth/sendOTP',
  async (otp, thunkAPI) => {
    try {
      return await authService.sendOtp(otp);
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

export const deleteUser = createAsyncThunk(
  'auth/deleteUser',
  async (userId, thunkAPI) => {
    try {
      const response = await authService.deleteUser(userId);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);


export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
      state.message = '';
      state.isVerified = false;
    },
    emptySearch: (state) =>{
      state.searchResult = [];
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(deleteUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      
    })
    .addCase(deleteUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = null;
   
    })
    .addCase(deleteUser.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.message = action.payload.error;
    })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = null;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(sendOtp.pending, (state) => {
        state.isLoading = true;
        state.user = null;
      })
      .addCase(sendOtp.fulfilled, (state, action) => {
        console.log(action.payload.data.user)
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.user;
      })
      .addCase(sendOtp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      })
      .addCase(googleLogin.pending, (state) => {
       
        state.isLoading = true;
        state.user = null;
      })
      .addCase(googleLogin.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.user;
      })
      .addCase(googleLogin.rejected, (state, action) => {
        
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
      .addCase(facebookLogin.pending, (state) => {
       
        state.isLoading = true;
        state.user = null;
      })
      .addCase(facebookLogin.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload.data.user;
      })
      .addCase(facebookLogin.rejected, (state, action) => {
        
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
       
      })
      .addCase(getUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.gUser = action.payload;
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(searchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(searchUser.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.searchResult = action.payload;
      })
      .addCase(searchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(updateUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
       
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(bookNowTraveler.pending, (state) => {
        // Handle pending state if needed
      })
      .addCase(bookNowTraveler.fulfilled, (state, action) => {
        // Handle successful response
        console.log(action.payload.user.notification); 
        state.notification = action.payload.user.notification;
      })
      .addCase(bookNowTraveler.rejected, (state, action) => {
        // Handle rejection or error
        console.error(action.error.message); // Log the error message
      })
      .addCase(getAllNotifications.pending, (state) => {
        
      })
      .addCase(getAllNotifications.fulfilled, (state, action) => {
        state.notification = action.payload
       console.log(action.payload)
      })
      .addCase(getAllNotifications.rejected, (state, action) => {
       
      });
      ;

  },
});
export const { reset, emptySearch } = authSlice.actions;
export default authSlice.reducer;

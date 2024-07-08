import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser, fetchUserAvatar, refreshToken } from "./authApi";

const initialState = {
  user: null,
  userName: "",
  userAvatar: "",
  status: "idle",
  error: null,
};

// Thunk for user registration
export const registerUserAsync = createAsyncThunk("auth/registerUser", async ({ name, email, password }, { dispatch, rejectWithValue }) => {
  try {
    const response = await createUser(name, email, password);
    dispatch(updateUserName(response.name));
    return response;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

// Thunk for user login
export const loginUserAsync = createAsyncThunk("auth/loginUser", async ({ email, password }, { dispatch, rejectWithValue }) => {
  try {
    const response = await loginUser(email, password);
    dispatch(updateUserName(response.user.name));
    await dispatch(fetchUserAvatarAsync());
    return response;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

// Thunk for fetching user avatar
export const fetchUserAvatarAsync = createAsyncThunk("auth/fetchUserAvatar", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token");
    const response = await fetchUserAvatar(token);
    thunkAPI.dispatch(updateUserAvatar(response.avatar));
    return response.avatar;
  } catch (error) {
    return thunkAPI.rejectWithValue(JSON.stringify(error));
  }
});

// Thunk for user logout
export const logoutUserAsync = createAsyncThunk("auth/logoutUser", async (token, { dispatch, rejectWithValue }) => {
  try {
    const response = await logoutUser(token);
    dispatch(clearUserData());
    return response;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

// Thunk for refreshing the token
export const refreshTokenAsync = createAsyncThunk("auth/refreshToken", async (_, { rejectWithValue }) => {
  try {
    const newAccessToken = await refreshToken();
    return newAccessToken;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.status = "idle";
      state.user = null;
      state.userName = "";
      state.userAvatar = "";
    },
    updateUserName(state, action) {
      state.userName = action.payload;
    },
    updateUserAvatar(state, action) {
      state.userAvatar = action.payload;
    },
    clearUserData(state) {
      state.userName = "";
      state.userAvatar = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(registerUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.userName = action.payload.name;
      })
      .addCase(registerUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(loginUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUserAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.userName = action.payload.user.name;
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.status = "idle";
        state.user = null;
        state.userName = "";
        state.userAvatar = "";
      })
      .addCase(logoutUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserAvatarAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserAvatarAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.userAvatar = action.payload;
      })
      .addCase(fetchUserAvatarAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, updateUserName, updateUserAvatar, clearUserData } = authSlice.actions;
export default authSlice.reducer;

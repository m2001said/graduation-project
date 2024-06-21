import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createUser, loginUser, logoutUser, fetchUserAvatar } from "./authApi";

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
export const loginUserAsync = createAsyncThunk("auth/loginUser", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await loginUser(email, password);
    return response;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

// Thunk for user logout
export const logoutUserAsync = createAsyncThunk("auth/logoutUser", async (token, { rejectWithValue }) => {
  try {
    const response = await logoutUser(token);
    return response;
  } catch (error) {
    return rejectWithValue(JSON.stringify(error));
  }
});

export const fetchUserAvatarAsync = createAsyncThunk("auth/fetchUserAvatar", async (_, thunkAPI) => {
  try {
    const response = await fetchUserAvatar();
    thunkAPI.dispatch(updateUserAvatar(response.avatar));
    return response.avatar;
  } catch (error) {
    return thunkAPI.rejectWithValue(JSON.stringify(error));
  }
});


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.status = "idle";
      state.user = null;
    },
    updateUserName(state, action) {
      state.userName = action.payload;
    },
    updateUserAvatar(state, action) {
      state.userAvatar = action.payload;
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
      })
      .addCase(loginUserAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(logoutUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(logoutUserAsync.fulfilled, (state) => {
        state.status = "succeeded";
        state.user = null;
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
        // Assuming the response structure contains `avatar` field
        state.user.avatar = action.payload;
      })
      .addCase(fetchUserAvatarAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export const { logout, updateUserName, updateUserAvatar } = authSlice.actions;
export default authSlice.reducer;

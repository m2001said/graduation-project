import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  status: "idle", // 'idle', 'loading', 'succeeded', 'failed'
  error: null,
};

// Add signupUser async thunk
export const signupUser = createAsyncThunk("auth/signup", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACK_SERVER}/user`, {
      email,
      password,
    });
    // You may want to automatically log in the user after signup
    // For example, save the token if your API returns one upon signup
    localStorage.setItem("token", response.data.token);
    console.log("==============response.data======================");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("==========error in signupUser==========================");
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for logging in
export const loginUser = createAsyncThunk("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_BACK_SERVER}/user/login`, { email, password });
    // Assuming the response has a token and user data
    console.log("==============response.data login======================");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log("==========error in loginUser==========================");
    console.log(error);
    return rejectWithValue(error.response.data);
  }
});

// Async thunk for logging out
export const logoutUser = createAsyncThunk("auth/logout", async (_, { getState }) => {
  const { auth } = getState();
  try {
    // Perform logout on backend, if required
    await axios.post(
      `${process.env.REACT_APP_BACK_SERVER}/api/auth/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      }
    );
    // Returning empty data to clear auth state
    return {};
  } catch (error) {
    console.log("==========error in logoutUser==========================");
    console.log(error);
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder

      // Handle login state
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Login failed";
      })

      // Handle logout state
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.token = null;
        state.status = "idle";
      })

      // Handle signup state
      .addCase(signupUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default authSlice.reducer;

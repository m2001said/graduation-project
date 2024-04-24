import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  status: 'idle',
  error: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    registerRequested(state) {
      state.status = 'loading';
    },    
    registerSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    registerFailed(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    loginRequested(state) {
      state.status = 'loading';
    },
    loginSuccess(state, action) {
      state.status = 'succeeded';
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    logout(state) {
      state.status = 'idle';
      state.user = null;
    },
  },
});

export const { loginRequested, loginSuccess, loginFailed, logout, registerRequested, registerSuccess, registerFailed } = authSlice.actions;
export default authSlice.reducer;
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
    register(state, action) {
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
    login(state, action) {
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

export const { login, loginSuccess, loginFailed, logout, register, registerSuccess, registerFailed } = authSlice.actions;
export default authSlice.reducer;
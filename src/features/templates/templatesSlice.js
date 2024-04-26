// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTemplates = createAsyncThunk(
  'templates/fetchTemplates',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const templatesSlice = createSlice({
  name: 'templates',
  initialState: {
    templates: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchTemplates.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchTemplates.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.templates = action.payload;
    },
    [fetchTemplates.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export default templatesSlice.reducer;

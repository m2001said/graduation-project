// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPages = createAsyncThunk("pages/fetchPages", async () => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/page/pages`;
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log("fetchPages", response.data);
  return response.data.pages;
});

export const deletePage = createAsyncThunk("pages/deletePage", async (templateId, thunkAPI) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/page/${templateId}`;
  try {
    const response = await axios.delete(url, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    return templateId;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

const pagesSlice = createSlice({
  name: "pages",
  initialState: {
    pages: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPages.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPages.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = action.payload;
      })
      .addCase(fetchPages.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deletePage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deletePage.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pages = state.pages.filter((template) => template._id !== action.payload);
      })
      .addCase(deletePage.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default pagesSlice.reducer;

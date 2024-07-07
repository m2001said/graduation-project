// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchWebsites = createAsyncThunk("websites/fetchWebsites", async () => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/website/websites`;
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log("fetchWebsites", response.data);
  return response.data.pages;
});

export const deleteWebsite = createAsyncThunk("websites/deleteWebsite", async (templateId, thunkAPI) => {
  const url = `${process.env.REACT_APP_BACKEND_URL}/website/${templateId}`;
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

const websitesSlice = createSlice({
  name: "websites",
  initialState: {
    websites: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWebsites.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchWebsites.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.websites = action.payload;
      })
      .addCase(fetchWebsites.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteWebsite.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteWebsite.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.websites = state.websites.filter((template) => template._id !== action.payload);
      })
      .addCase(deleteWebsite.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default websitesSlice.reducer;

// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTemplates = createAsyncThunk("templates/fetchTemplates", async (type) => {
  console.log("type", type);
  const url = type === "page" ? `${process.env.REACT_APP_BACKEND_URL}/page/pages` : `${process.env.REACT_APP_BACKEND_URL}/website/websites`;
  console.log(url);
  const response = await axios.get(url, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log(response.data);
  return response.data.pages;
});

export const deleteTemplate = createAsyncThunk("templates/deleteTemplate", async (templateId, type, thunkAPI) => {
  const url = type === "page" ? `${process.env.REACT_APP_BACKEND_URL}/page/${templateId}` : `${process.env.REACT_APP_BACKEND_URL}/website/${templateId}`;
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

const templatesSlice = createSlice({
  name: "templates",
  initialState: {
    templates: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templates = action.payload;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteTemplate.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteTemplate.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.templates = state.templates.filter((template) => template._id !== action.payload);
      })
      .addCase(deleteTemplate.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default templatesSlice.reducer;

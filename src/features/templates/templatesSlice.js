// src/features/posts/postsSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTemplates = createAsyncThunk("templates/fetchTemplates", async () => {
  const response = await axios.get("https://websitebuilderbackend-production-716e.up.railway.app/page/pages", {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
  console.log(response.data.pages)
  return response.data.pages;
});
export const deleteTemplate = createAsyncThunk("templates/deleteTemplate", async (templateId, thunkAPI) => {
  try {
    const response = await axios.delete(`https://websitebuilderbackend-production-716e.up.railway.app/page/${templateId}`, {
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

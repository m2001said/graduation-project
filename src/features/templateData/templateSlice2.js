import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
import i18next from "i18next";
import enTemplateSlice2 from "../../locales/en/templateSlice2.json";
import arTemplateSlice2 from "../../locales/ar/templateSlice2.json";

export const fetchInitialTemplate = createAsyncThunk("template/fetchInitialTemplate", async () => {
  try {
    const language = i18next.language;

    if (language === "ar") {
      return arTemplateSlice2;
    } else {
      return enTemplateSlice2;
    }
  } catch (error) {
    console.error("Error fetching initial template:", error);
    throw error;
  }
});

const initialState = {};

const templateSlice2 = createSlice({
  name: "templateSlice2",
  initialState,
  reducers: {
    updateTemplate: (state, action) => {
      editElement(state, action);
    },
    addNewElement: (state, action) => {
      addElement(state, action);
    },
    addElementToArray: (state, action) => {
      addElementToArray(state, action);
    },
    addNewSubElement: (state, action) => {
      addSubElement(state, action);
    },
    deleteElement: (state, action) => {
      deleteElement(state, action);
    },
    reorder: (state, action) => {
      reorder(state, action);
    },
    reorderSection: (state, action) => {
      return reorderSections(state, action);
    },
    deleteSection: (state, action) => {
      return deleteSection(state, action);
    },
    resetState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialTemplate.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { resetState2 } = templateSlice2.actions;
export const templateActions2 = templateSlice2.actions;
export default templateSlice2.reducer;

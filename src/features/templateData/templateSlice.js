import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import i18next from "i18next";
import enTemplateSlice1 from "../../locales/en/templateSlice1.json";
import arTemplateSlice1 from "../../locales/ar/templateSlice1.json";
import enTemplateSlice2 from "../../locales/en/templateSlice2.json";
import arTemplateSlice2 from "../../locales/ar/templateSlice2.json";
import enTemplateSlice3 from "../../locales/en/templateSlice3.json";
import arTemplateSlice3 from "../../locales/ar/templateSlice3.json";
import enTemplateSlice4 from "../../locales/en/templateSlice4.json";
import arTemplateSlice4 from "../../locales/ar/templateSlice4.json";
import enTemplateSlice5 from "../../locales/en/templateSlice5.json";
import arTemplateSlice5 from "../../locales/ar/templateSlice5.json";
import enTemplateSlice6 from "../../locales/en/templateSlice6.json";
import arTemplateSlice6 from "../../locales/ar/templateSlice6.json";
import enTemplateSlice7 from "../../locales/en/templateSlice7.json";
import arTemplateSlice7 from "../../locales/ar/templateSlice7.json";
import enTemplateSlice8 from "../../locales/en/templateSlice8.json";
import arTemplateSlice8 from "../../locales/ar/templateSlice8.json";
import enTemplateSlice9 from "../../locales/en/templateSlice9.json";
import arTemplateSlice9 from "../../locales/ar/templateSlice9.json";
import enTemplateSlice10 from "../../locales/en/templateSlice10.json";
import arTemplateSlice10 from "../../locales/ar/templateSlice10.json";
import enTemplateSlice11 from "../../locales/en/templateSlice11.json";
import arTemplateSlice11 from "../../locales/ar/templateSlice11.json";
import enTemplateSlice12 from "../../locales/en/templateSlice12.json";
import arTemplateSlice12 from "../../locales/ar/templateSlice12.json";
import enTemplateSlice13 from "../../locales/en/templateSlice13.json";
import arTemplateSlice13 from "../../locales/ar/templateSlice13.json";
import enTemplateSlice14 from "../../locales/en/templateSlice14.json";
import arTemplateSlice14 from "../../locales/ar/templateSlice14.json";
import enTemplateSlice15 from "../../locales/en/templateSlice15.json";
import arTemplateSlice15 from "../../locales/ar/templateSlice15.json";
import enTemplateSlice16 from "../../locales/en/templateSlice16.json";
import arTemplateSlice16 from "../../locales/ar/templateSlice16.json";
import enTemplateSlice17 from "../../locales/en/templateSlice17.json";
import arTemplateSlice17 from "../../locales/ar/templateSlice17.json";
import enTemplateSlice18 from "../../locales/en/templateSlice18.json";
import arTemplateSlice18 from "../../locales/ar/templateSlice18.json";

export const fetchInitialTemplate = createAsyncThunk("template/fetchInitialTemplate", async (id) => {
  try {
    const language = i18next.language;
    let templateData = {};

    if (language === "ar") {
      switch (id) {
        case 1:
          templateData = arTemplateSlice1;
          break;
        case 2:
          templateData = arTemplateSlice2;
          break;
        case 3:
          templateData = arTemplateSlice3;
          break;
        case 4:
          templateData = arTemplateSlice4;
          break;
        case 5:
          templateData = arTemplateSlice5;
          break;
        case 6:
          templateData = arTemplateSlice6;
          break;
        case 7:
          templateData = arTemplateSlice7;
          break;
        case 8:
          templateData = arTemplateSlice8;
          break;
        case 9:
          templateData = arTemplateSlice9;
          break;
        case 10:
          templateData = arTemplateSlice10;
          break;
        case 11:
          templateData = arTemplateSlice11;
          break;
        case 12:
          templateData = arTemplateSlice12;
          break;
        case 13:
          templateData = arTemplateSlice13;
          break;
        case 14:
          templateData = arTemplateSlice14;
          break;
        case 15:
          templateData = arTemplateSlice15;
          break;
        case 16:
          templateData = arTemplateSlice16;
          break;
        case 17:
          templateData = arTemplateSlice17;
          break;
        case 18:
          templateData = arTemplateSlice18;
          break;
        default:
          throw new Error(`Template with id ${id} not found`);
      }
    } else {
      switch (id) {
        case 1:
          templateData = enTemplateSlice1;
          break;
        case 2:
          templateData = enTemplateSlice2;
          break;
        case 3:
          templateData = enTemplateSlice3;
          break;
        case 4:
          templateData = enTemplateSlice4;
          break;
        case 5:
          templateData = enTemplateSlice5;
          break;
        case 6:
          templateData = enTemplateSlice6;
          break;
        case 7:
          templateData = enTemplateSlice7;
          break;
        case 8:
          templateData = enTemplateSlice8;
          break;
        case 9:
          templateData = enTemplateSlice9;
          break;
        case 10:
          templateData = enTemplateSlice10;
          break;
        case 11:
          templateData = enTemplateSlice11;
          break;
        case 12:
          templateData = enTemplateSlice12;
          break;
        case 13:
          templateData = enTemplateSlice13;
          break;
        case 14:
          templateData = enTemplateSlice14;
          break;
        case 15:
          templateData = enTemplateSlice15;
          break;
        case 16:
          templateData = enTemplateSlice16;
          break;
        case 17:
          templateData = enTemplateSlice17;
          break;
        case 18:
          templateData = enTemplateSlice18;
          break;
        default:
          throw new Error(`Template with id ${id} not found`);
      }
    }
    console.log(`templateData in fetchInitialTemplate(${id})`, templateData);
    return templateData;
  } catch (error) {
    console.error("Error fetching initial template:", error);
    throw error;
  }
});

const initialState = {
  templateInfo: {
    id: null,
  },
};

const templateSlice = createSlice({
  initialState,
  name: "templateSlice",
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
    updateSchema: (state, action) => {
      updateSchema(state, action);
    },
    resetState: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchInitialTemplate.fulfilled, (state, action) => {
      return { ...state, ...action.payload };
    });
  },
});

export const { resetState, updateTemplate } = templateSlice.actions;
export const templateActions1 = templateSlice.actions;
export { initialState };
export default templateSlice.reducer;

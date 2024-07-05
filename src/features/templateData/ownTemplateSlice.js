import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const ownTemplateSlice = createSlice({
  initialState: {},

  name: "ownTemplateSlice",
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
    insertSections: (state, action) => {
      state = {};
      const { data } = action.payload;
      delete data.owner;
      delete data._id;
      delete data.__v;
      console.log(data);
      // const colors = {
      //   templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
      // };
      // data.colors = colors;
      return data;
    },
    deleteSchema: (state, action) => {
      return {};
    },
    updateSchema: (state, action) => {
      console.log(state);
      return updateSchema(state, action);
    },
  },
});

export const ownTemplateActions = ownTemplateSlice.actions;
export default ownTemplateSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
const heroSlice = createSlice({
  initialState: {
    sectionName: "Hero Section",
    sectionTitle: "Welcome to our Flower Shop",
    sectionSubTitle: "Beautiful flowers for every occasion",
    sectionImgSrc: "flower-image.jpg",
    sectionDescription: "We offer a wide selection of fresh and vibrant flowers for all your needs.",
    sectionImgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1699633698/templates/asian-restaurant-template-design_23-2150325850_d9fkgw.avif",
  },
  name: "heroSlice",
  reducers: {
    updateSectionName: (state, action) => {
      state.sectionName = action.payload;
    },
    updateSectionTitle: (state, action) => {
      state.sectionTitle = action.payload;
    },
    updateSectionSubTitle: (state, action) => {
      state.sectionSubTitle = action.payload;
    },
    updateSectionImgSrc: (state, action) => {
      state.sectionImgSrc = action.payload;
    },
    updateSectionDescription: (state, action) => {
      state.sectionDescription = action.payload;
    },
    updateSectionImgUrl: (state, action) => {
      state.sectionImgUrl = action.payload;
    },
  },
});

export const { updateSectionName, updateSectionTitle, updateSectionSubTitle, updateSectionImgSrc, updateSectionDescription, updateSectionImgUrl } =
  heroSlice.actions;
export default heroSlice.reducer;

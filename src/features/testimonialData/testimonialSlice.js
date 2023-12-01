import { createSlice } from "@reduxjs/toolkit";
const testimonialSlice = createSlice({
  initialState: {
    sectionName: "testimonial Section",
    sectionTitle: "Welcome to our Flower Shop",
    sectionSubTitle: "Beautiful flowers for every occasion",
    sectionImgSrc: "flower-image.jpg",
    sectionDescription: "We offer a wide selection of fresh and vibrant flowers for all your needs.",
    sectionPersons: [
      {
        personName: "Alice",
        personImg: "alice-avatar.jpg",
        personOpinion: "I love the flowers from this shop. They are always fresh and beautifully arranged.",
      },
      { personName: "Bob", personImg: "bob-avatar.jpg", personOpinion: "The flowers I ordered for my wife's birthday were a big hit. She loved them!" },
    ],
  },
  name: "testimonialSlice",
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
  },
});

export const { updateSectionName, updateSectionTitle, updateSectionSubTitle, updateSectionImgSrc, updateSectionDescription } = testimonialSlice.actions;
export default testimonialSlice.reducer;

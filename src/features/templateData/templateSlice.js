import { createSlice } from "@reduxjs/toolkit";
const templateSlice = createSlice({
  initialState: [
    {
      heroSection: {
        title: "Welcome to our Flower Shop",
        subTitle: "Beautiful flowers for every occasion",
        imgTitle: "flower-image.jpg",
        description: "We offer a wide selection of fresh and vibrant flowers for all your needs.",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1699633698/templates/asian-restaurant-template-design_23-2150325850_d9fkgw.avif",
      },
      testimonialSection: {
        title: "Welcome to our Flower Shop",
        subTitle: "Beautiful flowers for every occasion",
        imgSrc: "flower-image.jpg",
        description: "We offer a wide selection of fresh and vibrant flowers for all your needs.",
        persons: [
          {
            personName: "Alice",
            personImg: "alice-avatar.jpg",
            personOpinion: "I love the flowers from this shop. They are always fresh and beautifully arranged.",
          },
          { personName: "Bob", personImg: "bob-avatar.jpg", personOpinion: "The flowers I ordered for my wife's birthday were a big hit. She loved them!" },
        ],
      },
    },
  ],

  name: "templateSlice",
  reducers: {
    updateHeroSection: (state, action) => {
      const { templateId, variable, value } = action.payload;
      const updatedTemplate = {
        ...state[templateId],
        heroSection: {
          ...state[templateId].heroSection,
          [variable]: value,
        },
      };
      state[templateId] = updatedTemplate;
    },
    updateTestimonialSection: (state, action) => {
      const { templateId, variable, value } = action.payload;
      const updatedTemplate = {
        ...state[templateId],
        testimonialSection: {
          ...state[templateId].testimonialSection,
          [variable]: value,
        },
      };
      state[templateId] = updatedTemplate;
    },
  },
});

export const { updateHeroSection, updateTestimonialSection } = templateSlice.actions;
export default templateSlice.reducer;

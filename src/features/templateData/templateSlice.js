import { createSlice } from "@reduxjs/toolkit";
const templateSlice = createSlice({
  initialState: {
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
    articlesSection: {
      title: "Articles & News",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
      cards: [
        {
          title: "Let’s Get Solution For Building Construction Work",
          description: "26 December,2022 ",
          icons: "/assets/images/Icon.svg",
          imgUrl: "/assets/images/article1.png",
          caption: "Kitchan Design",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          description: "22 December,2022 ",
          icons: "/assets/images/Icon.svg",
          imgUrl: "/assets/images/article2.png",
          caption: "Living Design",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          description: "25 December,2022 ",
          icons: "/assets/images/Icon.svg",
          imgUrl: "/assets/images/article3.png",
          caption: "Interior Design",
        },
      ],
    },
  },

  name: "templateSlice",
  reducers: {
    updateHeroSection: (state, action) => {
      const { variable, value } = action.payload;
      return {
        ...state,
        heroSection: {
          ...state.heroSection,
          [variable]: value,
        },
      };
    },
    updateTestimonialSection: (state, action) => {
      const { variable, value } = action.payload;
      return {
        ...state,
        testimonialSection: {
          ...state.testimonialSection,
          [variable]: value,
        },
      };
    },
  },
});

export const { updateHeroSection, updateTestimonialSection } = templateSlice.actions;
export default templateSlice.reducer;

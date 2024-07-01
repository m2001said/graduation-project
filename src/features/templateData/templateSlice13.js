import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 13,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/lighting_o2dsku.png",
    title: "Soliii",
    subtitle: "Contact us",
    links: [
      {
        title: "Design",
        url: "#about13",
      },
      {
        title: "About us",
        url: "#",
      },
      {
        title: "Projects",
        url: "#",
      },
      {
        title: "Contact team",
        url: "#",
      },
      {
        title: "Reviews",
        url: "#testimonials13",
      },
    ],
    icons: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-close_ozpkst.svg",
    ],
  },

  //****************** hero */

  hero: {
    title: "Architects with different approach",
    description: "Architecture is the art & technique of designing and building, as distinguished from the skills",
    buttons: [
      { buttonText: "view projects", url: "#projects13" },
      { buttonText: "our Services", url: "#services13" },
    ],

    mainImage: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937284/3_tx6g05.jpg",
    secondaryImage: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937130/4_rjddpl.jpg",
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
  },

  //***************** **********  feature ********* **************** */

  feature: {
    title: "welcome to lighting",
    subtitle: "The Art Of ARCHITECTURE ",
    description: "you will meet your taste",
    features: [
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959654/tree_qh0bvu.png",
        title: "Icon 1 Title",
        description: "Icon 1 Description",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
        title: "Icon 2 Title",
        description: "Icon 2 Description",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707601512/star_qhtqlz.png",
        title: "Icon 3 Title",
        description: "Icon 3 Description",
      },
    ],
  },

  // ********************  about  **************************
  about: {
    title: "Welcome to our company",
    subtitles: [{ title: "Our Journey" }, { title: "since 2010" }],
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937162/5_ookc7e.jpg",

    abouts: [
      { title: "years of experience", description: 10 },
      { title: "projects done", description: 50 },
      { title: "awards gained ", description: 20 },
    ],
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",

    buttons: [
      {
        buttonText: "Get started",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
        url: "#contact13",
      },

      {
        buttonText: "learn more",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
        url: "#feature13",
      },
    ],
  },

  //*********************** projects ********************** */ */                                 projects: {
  projects: {
    title: "Our recent works",
    subtitle: "Our completed projects",
    description: "Our completed projects",
    buttons: [{ url: "#", buttonText: "load more" }],

    projects: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937447/pexels-ben-neale-380337_yuphlv.jpg",
        title: "lorem epsum dolor",
        description: "New Cairo",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
        title: "lorem epsum dolor",
        description: "Luxor",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937146/pexels-pixabay-262367_b0ixae.jpg",
        title: "lorem epsum dolor",
        description: "New Giza",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
      },
    ],
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
  },

  //******************************** contact ************ ********************** */

  contact: {
    title: "Subscribe to our newsletter",
    subtitle: "Get our e-mail updates about our latest shops and special offers.",
    description: "Newsletter",
    buttonText: "Register now",
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
  },

  //************************    logos  *************************      */

  logos: {
    companies: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo6_ddaq6y.png",
        title: "lorem ipsum dolor",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo3_fzmko0.png",
        title: "lighting",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
        title: "lighting",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329685/realestate/logo2_z1jb8d.png",
        title: "lighting",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129091/icons8-stars-50_o1lg9s.png",
        title: "lighting",
      },
    ],
  },

  //****************** testimonials */
  testimonials: {
    title: "What our  ",
    subtitle: "Clients",
    description: "say's",
    testimonials: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        name: "ahmed",
        location: "CEO at AST",
        opinion: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        name: "ahmed",
        location: "CEO at AST",
        opinion: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        name: "ahmed",
        location: "CEO at AST",
        opinion: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        name: "ahmed",
        location: "CEO at AST",
        opinion: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      },
    ],
  },

  //*********************   footer     ********* */

  footer: {
    title: "Soly.io ",
    subtitle: "get in touch by .. ",
    description: "Architecture with understanding people minds",
    logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png", //delete
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",

    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",

    button: [{ title: "contact us", url: "#", icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png" }],
    buttonText: "contact us",
    url: "#",
    urls: [
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/meta-logo-facebook-svgrepo-com_zom99z.svg", url: "https://facebook.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/linkedin-svgrepo-com_dpxquk.svg", url: "https://linkedin.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/socialmedia-svgrepo-com_na36wp.svg", url: "https://instagram.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png", url: "https://twitter.com" },
    ],
    sections: [
      { title: "Home", url: "#" },
      { title: "Projects", url: "#" },
      { title: "design", url: "#" },
      { title: "follow", url: "#" },
      { title: "award", url: "#" },
    ],
    medias: [
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/meta-logo-facebook-svgrepo-com_zom99z.svg", url: "https://facebook.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/linkedin-svgrepo-com_dpxquk.svg", url: "https://linkedin.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/socialmedia-svgrepo-com_na36wp.svg", url: "https://instagram.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png", url: "https://twitter.com" },
    ],
footerSections:[

  {
    title: "Services",
    links: [
      { title: "Home", url: "#" },
      { title: "About", url: "#" },
      { title: "Listings", url: "#" },
      { title: "blogs", url: "#" },
      { title: "become an agent", url: "#" },
    ],
  },
  
  
  [{ title: "privacy policy" }, { title: "All rights reserved ®" }, { title: "Terms & conditions ®" }],
],

    footerSection: [{ title: "privacy policy" }, { title: "All rights reserved ®" }, { title: "Terms & conditions ®" }],
  },
    footer : {
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
    description: "Architecture with understanding people minds",
    medias: [
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/meta-logo-facebook-svgrepo-com_zom99z.svg", url: "https://facebook.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png", url: "https://twitter.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/linkedin-svgrepo-com_dpxquk.svg", url: "https://linkedin.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/socialmedia-svgrepo-com_na36wp.svg", url: "https://instagram.com" },
    ],
    footerSections: [
      {
        title: "Services",
        links: [
          { title: "Kitchan", url: "#" },
          { title: "Living Area", url: "#" },
          { title: "Bathroom", url: "#" },
          { title: "Dinning Hall", url: "#" },
          { title: "Bedroom", url: "#" },
        ],
      },
      {
        title: "Sections",
        links: [
          { title: "Home", url: "#" },
          { title: "Projects", url: "#" },
          { title: "Design", url: "#" },
          { title: "Follow", url: "#" },
          { title: "Award", url: "#" },
        ],
      },
    ],
    contacts: [
      { value: "55 East Birchwood Ave. Brooklyn, New York 11201" },
      { value: "contact@interno.com" },
      { value: "(123) 125-858" },
    ],
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};

const templateSlice13 = createSlice({
  initialState,
  name: "templateSlice13",
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
  },
});

export const templateActions13 = templateSlice13.actions;
export { initialState };
export default templateSlice13.reducer;

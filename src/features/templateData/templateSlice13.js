import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice13 = createSlice({
  initialState: {
    navbar: {
      logo: {
        src: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/lighting_o2dsku.png",
        alt: "soliii.cs",
      },
      menuItems: [
        {
          text: "Design",
          link: "#",
        },
        {
          text: "About us",
          link: "#",
        },
        {
          text: "Projects",
          link: "#",
        },
        {
          text: "Contact team",
          link: "#",
        },
        {
          text: "Reviews",
          link: "#",
        },
      ],
      language: "EN",
      languageDropdownIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347079/mdmaximize_prmvgd.png",
      profileIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      close: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-close_ozpkst.svg",
      bars: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      contactButton: {
        text: "Contact us",
        dropdownIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      },
    },

    hero: {
      title: "Architects with different approach",
      subtitle: "Architecture is the art & technique of designing and building, as distinguished from the skills",
      servicesButtonText: "Our Services",
      projectsButtonText: "View Projects",
      num: "+75.8%",
      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      images: {
        main: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937284/3_tx6g05.jpg",
        secondary: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937130/4_rjddpl.jpg",
      },
    },

    testimonials: {
      heading1: "What our  ",
      heading2: "Clients",
      heading3: "say's",
      next: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      previous: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707977502/leftArrow_w76yfj.png",

      testimonial: [
        {
          person: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "ahmed",
          title: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          person: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "ahmed",
          title: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          person: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "ahmed",
          title: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          person: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "ahmed",
          title: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
      ],
    },

    projects: {
      title: "Our recent works",
      heading: "Our completed projects",
      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937447/pexels-ben-neale-380337_yuphlv.jpg",
      arrowUp: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",
      arrowRight: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      icon2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",

      project: [
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937447/pexels-ben-neale-380337_yuphlv.jpg",
          title: "lorem epsum dolor",
          desc: "New Cairo",
        },
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
          title: "lorem epsum dolor",
          desc: "Luxor",
        },
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937146/pexels-pixabay-262367_b0ixae.jpg",
          title: "lorem epsum dolor",
          desc: "New Giza",
        },
      ],
      logos: [
        {
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
          logoTitle: "lighting",
        },
        {
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
          logoTitle: "lighting",
        },
        {
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
          logoTitle: "lighting",
        },
        {
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
          logoTitle: "lighting",
        },
        {
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129091/icons8-stars-50_o1lg9s.png",
          logoTitle: "lighting",
        },
      ],
      subscribe: [
        {
          title: "Subscribe to our newsletter",
          description: "Get our e-mail updates about our latest shops and special offers.",
          button: "Subscribe",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
          Newsletter: "Newsletter",
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
        },
      ],
    },


    // ********************  about  **************************
    about: {
      subtitle: "Welcome to our company",
      image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937162/5_ookc7e.jpg",
      heading: "Our Journey",
      headingCont: "since 2010",
      subtitle2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      experience: 10,
      projects: 50,
      awards: 20,
      arrowRight: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      arrow: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",

      icons: [
        {
          id: 1,
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959654/tree_qh0bvu.png",
          title: "Icon 1 Title",
          description: "Icon 1 Description",
        },
        {
          id: 2,
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
          title: "Icon 2 Title",
          description: "Icon 2 Description",
        },
        {
          id: 3,
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707601512/star_qhtqlz.png",
          title: "Icon 3 Title",
          description: "Icon 3 Description",
        },
        {
          id: 4,
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707969311/diamond_zuwa12.png",
          title: "Icon 4 Title",
          description: "Icon 4 Description",
        },
      ],
    },
    
    //*********************   footer     ********* */

    footer: {
      Name: "Soly.io ",
      description: "Architecture with understanding people minds",

      contactTitle: "Get in touch",
      contactButton: "Contact us",

      socialMedia: [
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/meta-logo-facebook-svgrepo-com_zom99z.svg", url: "https://facebook.com" },
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/linkedin-svgrepo-com_dpxquk.svg", url: "https://linkedin.com" },
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/socialmedia-svgrepo-com_na36wp.svg", url: "https://instagram.com" },
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png", url: "https://twitter.com" },
      ],
      quickLinks: [
        { title: "Home", url: "#" },
        { title: "Projects", url: "#" },
        { title: "design", url: "#" },
        { title: "follow", url: "#" },
        { title: "award", url: "#" },
      ],

      logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
      arrow: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",

      privacy: "privacy policy",
      rights: "All rights reserved ®",
      conditions: "Terms & conditions ®",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

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
  },
});

export const templateActions13 = templateSlice13.actions;
export default templateSlice13.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice13 = createSlice({
  initialState: {
    templateInfo: {
      id: 13,
      title: "",
      description: "",
      imgUrl: "",
    },
    navbar: {
      logo: {
        src: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/lighting_o2dsku.png",
        alt: "soliii.cs",
      },
      menuItems: [
        {
          title: "Design",
          link: "#about13",
        },
        {
          title: "About us",
          link: "#",
        },
        {
          title: "Projects",
          link: "#",
        },
        {
          title: "Contact team",
          link: "#",
        },
        {
          title: "Reviews",
          link: "#testimonials13",
        },
      ],

      profileIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      close: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-close_ozpkst.svg",
      bars: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      button: {
        title: "Contact us",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      },
    },

    //****************** hero */

    hero: {
      title: "Architects with different approach",
      subtitle: "Architecture is the art & technique of designing and building, as distinguished from the skills",

      buttons: [
        { title: "view projects", url: "#projects13" },
        { title: "our Services", url: "#services13" },
      ],

      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      imgs: {
        title: "+75.8%",
        main: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937284/3_tx6g05.jpg",
        secondary: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937130/4_rjddpl.jpg",
      },
    },
    services: {
      blocks: [
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
          title: "Buy a New Home",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
          title: "Sell a House",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
          title: "Rent a House",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    },
    feature: {
      title: "We Create The Art Of Stylish Living Stylishly",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.",
      phone: "012345678",
      buttonText: "Get Free Estimate",

      icons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
      ],

      test: [
        {
          subTest: [
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
          ],
        },
      ],
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813388/templates/template_one/Photo_sonnlx.jpg",
    },

    //***************** **********  feature ********* **************** */

    feature: {
      title: "welcome to lighting",
      subtitle: "The Art Of ARCHITECTURE ",
      description: "you will meet your taste",
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
          id: "3",
          name: "Kareem",
          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329700/realestate/p1_sfvfe2.jpg",
          job: "Buyer's Agent",
        },
      ],
    },

    // ********************  about  **************************
    about: {
      title: "Welcome to our company",
      subtitles: [{ title: "Our Journey" }, { title: "since 2010" }],
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937162/5_ookc7e.jpg",
      infos: [
        { title: "years of experience", description: 10 },
        { title: "projects done", description: 50 },
        { title: "awards gained ", description: 20 },
      ],
      icons: [
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",
        },
      ],
      buttons: [
        {
          title: "Get started",
          link: "#contact13",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
        },

        {
          title: "learn more",
          link: "#feature13",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
        },
      ],
    },

    //*********************** projects ********************** */ */                                 projects: {
    projects: {
      title: "Our recent works",
      subtitle: "Our completed projects",

      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
      project: [
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937447/pexels-ben-neale-380337_yuphlv.jpg",
          title: "lorem epsum dolor",
          description: "New Cairo",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
        },
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
          title: "lorem epsum dolor",
          description: "Luxor",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
        },
        {
          img: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937146/pexels-pixabay-262367_b0ixae.jpg",
          title: "lorem epsum dolor",
          description: "New Giza",
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
        },
      ],
      buttons: [{ title: "load more", url: "#" }],
    },

    //******************************** contact ************ ********************** */

    contact: {
      title: "Subscribe to our newsletter",
      subtitle: "Get our e-mail updates about our latest shops and special offers.",
      description: "Newsletter",

      button: [{ title: "Subscribe", url: "#", icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png" }],
      imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
    },

    //************************    logos  *************************      */
    logos: [
      {
        logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo6_ddaq6y.png",
        title: "lorem ipsum dolor",
      },
      {
        logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo3_fzmko0.png",
        title: "lighting",
      },
      {
        logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
        title: "lighting",
      },
      {
        logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329685/realestate/logo2_z1jb8d.png",
        title: "lighting",
      },
      {
        logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129091/icons8-stars-50_o1lg9s.png",
        title: "lighting",
      },
    ],

    //****************** testimonials */
    testimonials: {
      title: "What our  ",
      subtitle: "Clients",
      description: "say's",
   

      testimonial: [
        {
          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          title: "ahmed",
          subtitle: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          title: "ahmed",
          subtitle: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          title: "ahmed",
          subtitle: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
        {
          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          title: "ahmed",
          subtitle: "CEO at AST",
          description: "We would like to take the opportunity to express our delights with the ways things are progressing.",
        },
      ],
    },

    //*********************   footer     ********* */

    footer: {
      title: "Soly.io ",
      description: "Architecture with understanding people minds",
      logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",

      subtitle: "get in touch by .. ",
      button: [{ title: "contact us", url: "#", icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png" }],

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

      footerSection: [{ title: "privacy policy" }, { title: "All rights reserved ®" }, { title: "Terms & conditions ®" }],
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

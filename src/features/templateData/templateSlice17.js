import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice17 = createSlice({
  initialState: {
    //********************  Navbar   ************************ */

    navbar: [
      {
        id: 1,
        name: "Home",
        link: "/#",
      },
      {
        id: 2,
        name: "About",
        link: "/#",
      },
      {
        id: 3,
        name: "Contact",
        link: "/#",
      },
    ],
    dropDownLinks: [
      {
        id: 1,
        name: "Vegetables",
        link: "/#",
      },
      {
        id: 2,
        name: "Fruits",
        link: "/#",
      },
      {
        id: 3,
        name: "Grains",
        link: "/#",
      },
    ],

    navbarIcons: {
      myAccount: "My Account",
      userIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png",
      dropIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",
    },

    // ******************  Hero   ********************************/

    hero: {
      coloredHeading1: "Soliman",
      coloredHeading2: "Delivery",
      headingPart1: " Restaurant fresh and healthy meal plan ",
      headingPart2: "in Cairo",
      paragraphs: "Discover delicious dishes that will satisfy your cravings Door from 132.95 per week",
      photos: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989808/hero_b7quav.png",
      HeroBg: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/heroBg_vahqtb.png",
    },

    //******************  button   ************************ */

    button: {
      chooseMeal: "Choose Meal",
      arrowRight: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
    },

    //************************  banner   *************************/

    banner: {
      heading: "Tastes difference and healthy.",
      coloredParagraph: "We Know ",
      paragraph1:
        "That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

      paragraph2:
        "We Know That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

      apple: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/apple_cyue6o.png",
      kiwi: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/kiwi_oenfrv.png",
      lemon: " https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/lemon_xp4xcd.png",
      leaf: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/leaf_ik3yan.png",
      tomato: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/tomato_wxdrmr.png",
    },

    // *************************  About   **************************

    about: {
      heading: "About Us",
      paragraph:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque aperiam in doloribus corporis quasi quia praesentium deserunt dolor at ducimus accusamus alias magnam tenetur voluptatem, atque qui iusto nesciunt?",
      photo1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989609/polygon_yiwc6q.png",
      vector: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/vector-wave_gperhf.png",
      MyAccount: "My Account",
      userIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png",
    },

    //*************************  Services   **************************/

    services: {
      heading: "Why Choose Us",
      paragraph1: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      paragraph2: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      paragraph3: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      paragraph4: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      icon1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/fast-delivery-fast-svgrepo-com_fr05yy.svg",
      icon2:"https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094092/burger-huge-svgrepo-com_rpo63l.svg",
      icon3:"https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/discount-svgrepo-com_j3jgfu.svg",
      icon4:"https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
    },

    //*************************  Footer   **************************/

    footer: {
      heading: "Contact Us",
      upAddress: "20, Al-Mahalla Street",
      downAddress: "Cairo, Egypt",
      email1: "mkmk@goodFood.com",
      email2: "mkmk@goodFood.com",
      phone1: "+20123456789 - Sales and Services",
      phone2: "+20123456789 - Hiring Queries",
      whatsapp: "0123456789-Whatsapp",
      emailIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
      phoneIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-whatsapp-50_knru7l.png",
      locationIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711080161/location_535239_clqbiz.png",
      copyright: "Copyright © 2024 slolGoodFood. All Rights Reserved.",
    },

    //*************************  Popup   **************************/

    popup: {
      title: "Login",
      buttonTitle: "Login",
      other: "or log in with",
      fbIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129089/icons8-meta-50_oibze6.png",
      googleIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
      closeIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png",
      login: "Login",
    }, 
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },
  

  name: "templateSlice17",
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

export const templateActions17 = templateSlice17.actions;
export default templateSlice17.reducer;

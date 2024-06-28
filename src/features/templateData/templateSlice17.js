import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const initialState = {
  //********************  Navbar   ************************ */

  navbar: {
    title: "Logo",
    subtitle: "Subtitle",
    description: "Dropdown",
    icons: [
      { title: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png" },
      { title: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png" },
    ],

    links: [
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
  },

  // ******************  Hero   ********************************/

  hero: {
    title: "Soliman",
    subtitle: "DeliveryRestaurant fresh and healthy meal plan  in Cairo",
    description: "Discover delicious dishes that will satisfy your cravings Door from 132.95 per week",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989808/hero_b7quav.png",
    backgroundImg: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/heroBg_vahqtb.png",
  },

  //******************  button   ************************ */

  button: {
    title: "Choose Meal",
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
  },

  //*************************  Services   **************************/

  services: {
    title: "Why Choose Us",
    icons: [
      {
        id: 1,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/fast-delivery-fast-svgrepo-com_fr05yy.svg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        id: 2,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094092/burger-huge-svgrepo-com_rpo63l.svg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        id: 3,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/discount-svgrepo-com_j3jgfu.svg",
        description: "lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        id: 4,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
    ],
  },

  // *************************  About   **************************
  about: {
    title: "About Us",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque aperiam in doloribus corporis quasi quia praesentium deserunt dolor at ducimus accusamus alias magnam tenetur voluptatem, atque qui iusto nesciunt?",
    imgs: [
      { title: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989609/polygon_yiwc6q.png" },
      { title: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/vector-wave_gperhf.png" },
    ],
    button: [{ title: "My Account", icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png" }],
  },

  //************************  banner   *************************/

  // banner: {
  //   title: "Tastes difference and healthy.",

  //   subtitle:
  //     "That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

  //   description:
  //     "We Know That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

  //   apple: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/apple_cyue6o.png",
  //   kiwi: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/kiwi_oenfrv.png",
  //   lemon: " https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/lemon_xp4xcd.png",
  //   leaf: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/leaf_ik3yan.png",
  //   tomato: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/tomato_wxdrmr.png",
  // },

  banner: {
    title: "Tastes difference and healthy.",

    subtitle:
      "That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

    description:
      "We Know That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

    imgs: [
      { imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/apple_cyue6o.png" },
      { imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/kiwi_oenfrv.png" },
      { imgUrl: " https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/lemon_xp4xcd.png" },
      { imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/leaf_ik3yan.png" },
      { imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/tomato_wxdrmr.png" },
    ],
  },

  //*************************  Footer   **************************/

  // footer: {
  //   heading: "Contact Us",

  //   icons: [
  //     {
  //       upAddress: "20, Al-Mahalla Street",
  //       downAddress: "Cairo, Egypt",
  //       icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711080161/location_535239_clqbiz.png",
  //     },

  //     {
  //       email1: "mkmk@goodFood.com",
  //       email2: "mkmk@goodFood.com",
  //       icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
  //     },

  //     {
  //       phone1: "+20123456789 - Sales and Services",
  //       phone2: "+20123456789 - Hiring Queries",
  //       whatsapp: "0123456789-Whatsapp",
  //       icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-whatsapp-50_knru7l.png",
  //     },
  //   ],

  //   copyright: "Copyright © 2024 slolGoodFood. All Rights Reserved.",
  // },

  footer: {
    title: "Contact Us",

    icons: [
      {
        title: "20, Al-Mahalla Street",
        subtitle: "Cairo, Egypt",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711080161/location_535239_clqbiz.png",
      },

      {
        title: "mkmk@goodFood.com",
        subtitle: "mkmk@goodFood.com",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
      },

      {
        title: "+20123456789 - Sales and Services",
        subtitle: "+20123456789 - Hiring Queries",
        description: "0123456789-Whatsapp",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-whatsapp-50_knru7l.png",
      },
    ],
    footerSection: [{ title: "Copyright © 2024 slolGoodFood. All Rights Reserved." }, { title: "Terms & conditions" }, { title: "privacy policy" }],
  },

  //*************************  Popup   **************************/

  popup: {
    buttonTitle: "Log In",
    title: "Login",
    subtitle: "dd",
    other: "or log in with",
    login: "",

    icons: [
      {
        id: 1,
        title: "Facebook",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129089/icons8-meta-50_oibze6.png",
      },
      {
        id: 2,
        title: "Google",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
      },
      {
        id: 3,
        title: "x",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png",
      },
    ],
    // fbIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129089/icons8-meta-50_oibze6.png",
    // googleIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
    // closeIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png",
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice17 = createSlice({
  initialState,
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
export { initialState };
export default templateSlice17.reducer;

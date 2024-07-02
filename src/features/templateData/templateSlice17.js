import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
 const initialState = {
 
  navbar: {
    title: "Logo",
    subtitle: "Subtitle",
    description: "Dropdown",
  

    links: [
      {
        title: "Home",
        url: "/#",
      },
      {
        title: "About",
        url: "/#",
      },
      {
        title: "Contact",
        url: "/#",
      },
    ],

    dropDown: [
      {
        title: "Vegetables",
        url: "/#",
      },
      {
        title: "Fruits",
        url: "/#",
      },
      {
        title: "Grains",
        url: "/#",
      },
    ],
  },

 
  hero: {
    title: "Soliman",
    subtitle: "DeliveryRestaurant fresh and healthy meal plan  in Cairo",
    description: "Discover delicious dishes that will satisfy your cravings Door from 132.95 per week",
    imageUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989808/hero_b7quav.png",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/heroBg_vahqtb.png",

  },

 
  services: {
    title: "Why Choose Us",
    services: [
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/fast-delivery-fast-svgrepo-com_fr05yy.svg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094092/burger-huge-svgrepo-com_rpo63l.svg",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711094091/discount-svgrepo-com_j3jgfu.svg",
        description: "lorem ipsum dolor, sit amet consectetur adipisicing",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing",
      },
    ],
  },

   about: {
    title: "About Us",
    subtitle:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque aperiam in doloribus corporis quasi quia praesentium deserunt dolor at ducimus accusamus alias magnam tenetur voluptatem, atque qui iusto nesciunt?",
    imgs: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989609/polygon_yiwc6q.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/vector-wave_gperhf.png",
    ],
    buttonText: "My Account",
    buttonIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png",
  },


features: {
  title: "Tastes difference and healthy.",

  subtitle:
    "That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

  description:
    "We Know That time is the greatest value in the modern world . our healthy meal plan delivery service good food in cairo is the answer for those who want to eat healthy and save time and money .",

  imgs: [
    "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/apple_cyue6o.png",
    "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989602/kiwi_oenfrv.png",
    " https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/lemon_xp4xcd.png",
    "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989612/leaf_ik3yan.png",
    "https://res.cloudinary.com/dowtlcpxj/image/upload/v1710989607/tomato_wxdrmr.png",
  ],
},



 
  footer: {
    title: "Contact Us",

    description: "Copyright © 2024 slolGoodFood. All Rights Reserved.",
    contacts: [
      {
        title: "20, Al-Mahalla Street",
        value: 53456789,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1711080161/location_535239_clqbiz.png",
      },

      {
        title: "mkmk@goodFood.com",
        value:  2123456789,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-gmail-50_u4sqv0.png",
      },

      {
        title: "+20123456789 - Sales and Services",
        value:123456789,
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129088/icons8-whatsapp-50_knru7l.png",
      },
    ],
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
    updateSchema: (state, action) => {
      updateSchema(state, action);
    },
  },
});

export const templateActions17 = templateSlice17.actions;
export { initialState };
export default templateSlice17.reducer;

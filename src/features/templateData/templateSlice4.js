import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 4,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703193372/jammal_photos/eygwjnnq4d9scpxd9unv.png",
    links: [
      {
        title: "Residencies",
        url: "#",
      },
      {
        title: "Our Value",
        url: "#",
      },
      {
        title: "Contact Us",
        url: "#",
      },
      {
        title: "Get Started",
        url: "#",
      },
    ],
    email: "mailto:zainkeepscode@gmail.com",
    buttonText: "Contact",
  },
  hero: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703196080/jammal_photos/taiu0lj7gzq6ew6srqsz.png",
    title: " Discover Most Suitable Property",
    description1: "Find a variety of properties that suit you very easilty",
    description2: " Forget all difficulties in finding a residence for you",
    buttonText: "Search",
    stats: [
      {
        title: "Premium Product",
        start: "8880",
        end: "9000",
      },

      {
        title: "Happy Customer",
        start: "1950",
        end: "2000",
      },
      {
        title: "Awards Winning",
        start: "0",
        end: "28",
      },
    ],
    duration: "6",
    icon: "+",
  },

  features: {
    title: "Our Value",
    sub_title: "Value We Give to You",
    description1: " We are always ready to help by providing the best services for you.",
    description2: " We believe a good place to live can make your life better",
    features: [
      {
        icon: "💧",
        heading: "Best interest rates on the market",
        detail:
          "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      },
      {
        icon: "🩲",
        heading: "Prevent unstable prices",
        detail:
          "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      },
      {
        icon: "✔",
        heading: "Best price on the market",
        detail:
          "Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat ut occaecat consequat est minim minim esse tempor laborum consequat esse adipisicing eu reprehenderit enim.",
      },
    ],
    imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1703203417/jammal_photos/if4uayalbxuh6enjdenm.png",
  },

  projects: {
    title: "Best Choices",
    sub_title: "Popular Residencies",
    projects: [
      {
        image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703197994/jammal_photos/v4fz1ap7aa3lnz6f3cqo.png",
        name: "Aliva Priva Jardin",
        price: "47,043",
        detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      },
      {
        image: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1703198149/jammal_photos/m4s3ppbfcwgwoanctetr.png",
        name: "Asatti Garden City",
        price: "66,353",
        detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      },
      {
        image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703198230/jammal_photos/sy4citkq8uqg3qpgtvj7.png",
        name: "Citralan Puri Serang",
        price: "35,853",
        detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      },
      {
        image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703197994/jammal_photos/v4fz1ap7aa3lnz6f3cqo.png",
        name: "Aliva Priva Jardin",
        price: "47,043",
        detail: "Jakarta Garden City Street, Cakung. Pulo Gadung, Jakarta Timur, DKI Jakarta",
      },
      {
        image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703198149/jammal_photos/m4s3ppbfcwgwoanctetr.png",
        name: "Asatti Garden City",
        price: "66,353",
        detail: "Pahlawan Street XVII No.215, Cinangka, Sawangan, Depok, Jawa Barat",
      },
      {
        image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703198230/jammal_photos/sy4citkq8uqg3qpgtvj7.png",
        name: "Citralan Puri Serang",
        price: "35,853",
        detail: "Ruko Puri Indah Residence Block A7, Lingkar Street, Ciracas, Serang, Banten",
      },
    ],
  },

  contact: {
    title: "Our Contact Us",
    sub_title: "Easy to contact us",
    description: " We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better",
    email: "contact@interno.com",
    phone: "(123) 125-858",
    UrlImage: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703206872/jammal_photos/hqcx6ikyfgeuqe0vcset.jpg",
    contacts: [
      {
        type: "Call",
        phone: "021 123 145 14",
        btn_contact: "Call now",
      },
      {
        type: "Chat",
        phone: "021 123 145 14",
        btn_contact: "Chat now",
      },
      {
        type: "Video Call",
        phone: "021 123 145 14",
        btn_contact: "Video Call now",
      },
      {
        type: "Message",
        phone: "021 123 145 14",
        btn_contact: "Message now",
      },
    ],
  },
  cta: {
    title: "Get started with Homyz",
    description1: " Subscribe and find super attractive price quotes from us.",
    description2: " Find your residence soon",
    buttonText: "Get Started",
    email: "mailto:zainkeepscode@gmail.com",
  },

  footer: {
    logo: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1703209942/jammal_photos/xd2ugq6yopzvjkw37qc7.png",
    description: "Our vision is to make all people the best place to live for them.",
    footerSections: [
      {
        title: "Services",
        links: [
          { title: "Property", url: "#" },
          { title: "Services", url: "#" },
          { title: "Product", url: "#" },
          { title: "About Us", url: "#" },
        ],
      },
    ],
    contacts: [
      {
        value: "145 New York, FL 5467, USA",
      },
    ],
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice4 = createSlice({
  initialState,
  name: "templateSlice4",
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

export const templateActions4 = templateSlice4.actions;
export { initialState };
export default templateSlice4.reducer;

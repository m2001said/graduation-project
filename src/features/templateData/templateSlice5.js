import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 5,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
    icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703106705/menu-svgrepo-com_mgpt72.svg",
    buttonText: "contact",
    links: [
      {
        title: "Home",
        url: "#",
      },
      {
        title: "About",
        url: "#",
      },
      {
        title: "Offers",
        url: "#",
      },
      {
        title: "Seats",
        url: "#",
      },
      {
        title: "Destinations",
        url: "#",
      },
    ],
  },

  hero: {
    title: "Create Ever-lasting Memories With us",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703110738/takeOff_znaedp.png",
    videoUrl: "https://res.cloudinary.com/dmcdea0b9/video/upload/v1703110566/heroVideo_z23a38.mp4",
  },

  features: {
    title: "Plan your travel with confidence",
    subtitle: "travel support",
    description: "find help with booking and travel plans, see what to expect the journey",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703111688/R_aejs2k.jpg",
    features: [
      {
        title: "Travel requirement for Dubai",
        description: "Find help with booking and travel plans, see what to expect during the journey.",
        number: "01",
      },
      {
        title: "Travel requirement for Dubai",
        description: "Find help with booking and travel plans, see what to expect during the journey.",
        number: "02",
      },
      {
        title: "Travel requirement for Dubai",
        description: "Find help with booking and travel plans, see what to expect during the journey.",
        number: "03",
      },
    ],
  },

  services: {
    title: "Travel to make memories all around the world",
    services: [
      {
        title: "Book & Relax",
        description: "You can also call airlines from your phone and book aflight ticket",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114489/calendar_ry8vjw.svg",
      },
      {
        title: "Smart & checklist",
        description: "You can also call airlines from your phone and book aflight ticket",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114500/ShieldCheck_tmepkt.svg",
      },
      {
        title: "Save more",
        description: "You can also call airlines from your phone and book aflight ticket",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114509/BookmarkCheckFill_jwdtcd.svg",
      },
    ],
  },

  features2: {
    title: "Unaccompanied minor lounge",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703116246/fea5-2_q5na0z.jpg",
    features: [
      {
        title: "Help through the airport",
        description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
      },
      {
        title: "Priority Boarding",
        description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
      },
      {
        title: "Care on the fligh",
        description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
      },
      {
        title: "Chauffeur-drive service",
        description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
      },
    ],
  },

  team: {
    title: "Top travelers of this month!",
    members: [
      {
        name: "IsraTech",
        destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118167/paris_w35pqv.jpg",
        travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
        socialLink: "@Isratech",
      },
      {
        name: "IsraTech",
        destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118212/dubia_tegcrp.jpg",
        travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
        socialLink: "@Isratech",
      },
      {
        name: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
        destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118235/newYork_k8j1t0.jpg",
        travelerImage: "IsraTech",
        socialLink: "@Isratech",
      },
      {
        name: "IsraTech",
        destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118167/paris_w35pqv.jpg",
        travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
        socialLink: "@Isratech",
      },
    ],
  },

  cta: {
    title: "Subscribe Newletter & get Latest News",
    inputPlaceholder: "enter your email addres",
    buttonText: "Subscribe",
  },

  footer: {
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
    description: "Your mind shoud be stronger than your feeling, fly!",
    medias: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/facebook_td263x.svg",
        url: "https://facebook.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/x_yp3y5n.svg",
        url: "https://x.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809142/templates/template_one/linkedin_itbvp5.svg",
        url: "https://linkedin.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
        url: "https://instagram.com",
      },
    ],

    footerSections: [
      {
        title: "Information",
        links: [
          { title: "Home", url: "#" },
          { title: "Explore", url: "#" },
          { title: "Flight State", url: "#" },
          { title: "Travel", url: "#" },
          { title: "Check-In", url: "#" },
          { title: "Manage your booking", url: "#" },
        ],
      },
      {
        title: "Quick Guide",
        links: [
          { title: "FAQ", url: "#" },
          { title: "How To", url: "#" },
          { title: "Features", url: "#" },
          { title: "Baggage Us", url: "#" },
          { title: "Route Map", url: "#" },
          { title: "Our Communities", url: "#" },
        ],
      },
      {
        title: "Information",
        links: [
          { title: "Chauffer", url: "#" },
          { title: "Our partners", url: "#" },
          { title: "Destination", url: "#" },
          { title: "Careers", url: "#" },
          { title: "Transportation", url: "#" },
          { title: "Programme Rules", url: "#" },
        ],
      },
    ],
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};

const templateSlice5 = createSlice({
  initialState,
  name: "templateSlice5",
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
      return updateSchema(state, action);
    },
  },
});

export const templateActions5 = templateSlice5.actions;
export { initialState };
export default templateSlice5.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 3,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1705928879/jammal_photos/vqliep1jh8zlgkmwkewx.png",

    links: [
      {
        title: "Home",
        url: "home",
      },
      {
        title: "Programs",
        url: "programs",
      },
      {
        title: "Why us",
        url: "WhyUs",
      },
      {
        title: "Plans",
        url: "Plans",
      },
      {
        title: "Testimonials",
        url: "Testimonials",
      },
    ],
  },
  hero: {
    title: "shape your ideal body",
    subtitle: "the best fitness club in the town",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703609517/jammal_photos/neoqh0j4yjexem6j9ozp.png",
    description: "In here we will help you to shape and build your ideal body and live up your life to fullest..",
    heros: [
      {
        title: "+140",
        subtitle: "EXPORT COACHS",
      },
      {
        title: "+978",
        subtitle: "MEMBERS JOINED",
      },
      {
        title: "+50",
        subtitle: "FITNESS PROGRAMS",
      },
    ],
    buttonText: "Get Started",
    linkText: "Learn More",
    text: "Join now",
  },

  projects: {
    title: "EXPLORE OUR",
    subtitle: "PROGRAMS",
    description: "TO SHAPE YOU",
    buttonText: "Join Now",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986510/jammal_photos/pouffwm6ffmtztpisvjv.png",
    projects: [
      {
        title: "Strength Training",
        description: "In this program, you are trained to improve your strength through many exercises.",
      },
      {
        title: "Cardio Training",
        description: "In this program, you are trained to do sequential moves in range of 20 until 30 minutes.",
      },
      {
        title: "Fat Burning",
        description: "This program is suitable for you who wants to get rid of your fat and lose their weight.",
      },
      {
        title: "Health Fitness",
        description: "This programs is designed for those who exercises only for their body fitness not body building.",
      },
    ],
  },
  features: {
    title: "WHY CHOOSE US ?",
    subtitle: "SOME REASONS",
    imgs: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989257/jammal_photos/ywgmvzeed0ebb7myfvyw.png",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989314/jammal_photos/coh8z8kfvjla5xurgg2p.png",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989351/jammal_photos/azgv09qa1amwje8gu9ms.png",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989376/jammal_photos/imnhgmjpih33ckqouqrh.png",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989402/jammal_photos/f7m5xctam3rj268lkvel.png", //nb
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989442/jammal_photos/spxtwugfwuvbemwjyzd9.png", //tick
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989477/jammal_photos/b2ysy0kvgjgcz1r2r3ty.png", //nick
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702989514/jammal_photos/blcyycnc06jda0rwtuol.png", //adadis
    ],

    features: [
      {
        description: "OVER 140+ EXPERT COACHS",
      },
      {
        description: "TRAIN SMARTER AND FASTER THAN BEFORE",
      },
      {
        description: "1 FREE PROGRAM FOR NEW MEMBER",
      },
      {
        description: "RELIABLE PARTNERS",
      },
      {
        description: "OUR PPARTNERS",
      },
    ],
  },
  pricing: {
    title: "READY TO START",
    subtitle: "YOUR JOURNEY",
    text: "NOW WITHUS",
    description: "See more benefits",
    buttonText: "join Now",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702988784/jammal_photos/vrqn7t4vmruj1drgmpdb.png",
    plans: [
      {
        title: "BASIC PLAN",
        price: "25",
        features: ["2 hours of excercises", "Free consultaion to coaches", "Access to The Community"],
      },
      {
        name: "PREMIUM PLAN",
        price: "30",
        features: ["5 hour of excercises", "Free consultaion of Coaches", "Accessto minibar"],
      },
      {
        name: "PRO PLAN",
        price: "45",
        features: ["8 hours of excercises", "Consultation of Private Coach", "Free Fitness Merchandises"],
      },
    ],
  },
  testimonials: {
    title: "TESTIMONIALS",
    subtitle: "WHAT THE PEOPLE THINK ABOUT US",
    description: "WHAT THEY SAY ABOUT US",

    imgs: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987916/jammal_photos/pt96uext4dvfv3op3khc.png",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1702987950/jammal_photos/rkwjn9zqa9jgcp1dhzsb.png",
    ],
    testimonials: [
      {
        name: "MATHEW HENDRICKSON",
        subtitle: "ENTREPRENEUR",
        description: "I made the right choice by choosing the Fitclub and by choosing the right plan and program I already achieved my ideal body!",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986897/jammal_photos/xbinalf2qg4aqqhhpeif.png",
      },
      {
        name: "JOHN KEVIN",
        subtitle: "COACH",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ipsam, ab itaque nam perferendis impedit sint ",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986859/jammal_photos/cwtimzgptwqccvycipw0.jpg",
      },
      {
        name: "FRANKLIN",
        subtitle: "CUSTOMER",
        description: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima aspernatur quod voluptatem",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702986807/jammal_photos/pnlbsd6lankxv5xc9px5.jpg",
      },
    ],
  },

  cta: {
    title: "READY TO",
    subtitle: "LEVEL UP",
    description: "YOUR BODY ",
    text: "WITH US?",
    buttonText: "join Now",
  },

  footer: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990991/jammal_photos/isxpadjx12ja5wqaqzsk.png", //logo
    medias: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702990946/jammal_photos/op32ysn37afrbyyvzlpo.png",
        url: "https://github.com/login?client_id=45872a44c0e55c462eed&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D45872a44c0e55c462eed%26scope%3Duser%253Aemail%252Cread%253Aorg%26state%3Dgithub",
      }, //githup
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991031/jammal_photos/ttvjziej5llydncutm9u.png",
        url: "https://www.linkedin.com/login/ar",
      }, //linkedIn
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1702991055/jammal_photos/mt2lapqflvpafmnfpree.png",
        url: "https://instagram.com",
      }, //insta
    ],
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice3 = createSlice({
  initialState,
  name: "templateSlice3",
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

export const templateActions3 = templateSlice3.actions;
export { initialState };
export default templateSlice3.reducer;

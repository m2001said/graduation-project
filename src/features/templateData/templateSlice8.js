import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice8 = createSlice({
  initialState: {
    navbar: {
      links: [
        {
          title: "Home",
          url: "#home",
        },
        {
          title: "About",
          url: "#about",
        },
        {
          title: "Services",
          url: "#services",
        },
        {
          title: "Work",
          url: "#work",
        },
        {
          title: "Contact",
          url: "#contact",
        },
      ],
    },
    header: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708041079/jammal_photos/kafyeopqrooe1smkwiec.svg",
      buttonText: "Work with me",
    },
    hero: {
      Name: ["BEN", "AIDEN"],
      sub_title: ["I Am a ", "DEVELOPER"],
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sequi vel tempora aut voluptatibus accusantium est voluptate perspiciatis omnis assumenda.",
      buttonText: "contact me",
      linktext: "My portofolio",
      imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708040859/jammal_photos/h7mk6aclys26ylh20hxk.svg",
      soialContact: ["🚀", "💻", "🎨"],
    },
    about: {
      title: "About",
      sub_title: "I'm a Freelance Frontend Developer with over 5 years of experience.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus porro tempore quibusdam ab nesciunt voluptatum magnam doloribus corrupti molestiae.",
      numbers: ["13", "15", "12"],
      sign: ["+", "+", "+"],
      type: ["Years of", "Projects", "Satisfied"],
      typeOfExpericnce: ["Experience", "Completed", "Clients"],
      buttonText: "Contact me",
      linktext: "My portofolio",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708042892/jammal_photos/ui2jxaq52dfjtffndkjq.png",
    },

    // services data
    services: {
      title: "WHAT I DO.",
      sub_title: "I'm a Freelance Frontend Developer with over 5 years of experience.",
      buttonText: "see my work ",
      services: [
        {
          name: "UI/UX Design",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Development",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Digital Marketing",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Product Branding",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
      ],
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708031587/jammal_photos/lidxpp6o8dtr95ajdv5t.png",
    },

    projects: {
      projects: [
        {
          image: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708272971/jammal_photos/w5rnjea8huwe5pgrazeg.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
        {
          image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708273069/jammal_photos/exhaactq1fplnnapxrwc.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
        {
          image: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708273131/jammal_photos/eww7hd9cpv5mkxwkasyy.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
      ],
      title: "MY WORK.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum eius qui recusandae possimus. Dolorem quam illo impedit sunt fugiat",
      buttonText: "View all projects",
    },
    contact: {
      title: "  Let's work  together!",
      sub_title: "Get in touch",
      buttonText: "Send message",
    },
    ImageBackground: {
      siteImg: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030305/jammal_photos/hfeutnseoqs0gsa2kx2u.jpg')",
      aboutImg: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030938/jammal_photos/zxvali7en6j98kruxig5.png')",
      servicesImg: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708031587/jammal_photos/lidxpp6o8dtr95ajdv5t.png')",
    },
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice8",
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

export const templateActions8 = templateSlice8.actions;
export default templateSlice8.reducer;

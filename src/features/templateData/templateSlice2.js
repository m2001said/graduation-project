import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";

const templateSlice2 = createSlice({
  initialState: {
    templateInfo: {
      id: 2,
      title: "",
      description: "",
      imgUrl: "",
    },
    navbar: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/home-1-svgrepo-com_axgckp.svg",
        url: "hero2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134253/info-circle-svgrepo-com_a6q6z3.svg",
        url: "services2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
        url: "projects2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/customer-testimonial-svgrepo-com_vdnnre.svg",
        url: "testimonials2",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/message-circle-lines-alt-svgrepo-com_iotcwk.svg",
        url: "contactUs2",
      },
    ],
    hero: {
      title: "Get to know",
      subtitle: "Hero",
      image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703142400/me-about_pobewn.jpg",
      cards: [
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/book-svgrepo-com_f62qre.svg", title: "Experience", content: "3+ Years Working" },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/users-svgrepo-com_acna7b.svg",
          title: "Clients",
          content: "300+ Clients Worldwide",
        },
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134396/project-svgrepo-com_qjvqow.svg",
          title: "Projects",
          content: "80+ completed projects",
        },
      ],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...",
    },
    testimonials: {
      title: "What the People Thinks About Us",
      cards: [
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar2_lgwr3o.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
        {
          avatar: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar1_g7wm1r.jpg",
          name: "Ernest Achiever",
          review:
            "Lorem ipsum doloripsum doloripsum doloripsum doloripsum doloripsum doloripsum dolor ipsum doloripsumdoloripsumdoloripsumdoloripsumdoloripsum doloripsum doloripsum doloripsum dolor",
        },
      ],
    },
    projects: {
      cards: [
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
          title: "projects2 Item 1",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 2",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134068/portfolio3_rzhjvk.jpg",
          title: "projects2 Item 3",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 4",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134029/portfolio5_cugtet.png",
          title: "projects2 Item 5",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
        {
          image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134049/portfolio4_ibgd9o.jpg",
          title: "projects2 Item 6",
          githubLink: "https://github.com",
          demoLink: "https://dribbble.com/Alien_pixels",
        },
      ],
    },
    contact: {
      options: [
        {
          title: "Email",
          subtitle: "ahmed.solimanth57@gmail.com",
          link: "mailto:ahmed.solimanth57@gmail.com",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/gmail-svgrepo-com_xppy7f.svg",
        },
        {
          title: "Messenger",
          subtitle: "Ahmed soliman Gohnaim",
          link: "https://m.me/ahmed.soliman.3591267",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg",
        },
        {
          title: "WhatsApp",
          subtitle: "___________",
          link: "https://wa.me/1234567890",
          logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134203/whatsapp-whats-app-svgrepo-com_ug4dbt.svg", // Replace with your WhatsApp link
        },
      ],
    },
    services: {
      services: [
        {
          title: "UI/UX Design",
          items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
        },
        {
          title: "WebDevelopment",
          items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
        },
        {
          title: "Content Creation",
          items: ["lorem ipsum,", "Llorem ipsuma,", "Blorem ipsumm,", "Dilorem ipsumll,", "lorem ipsum"],
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134251/correct-signal-svgrepo-com_vvf3sw.svg",
        },
      ],
    },
    footer: {
      logo: "CSE",
      rights: "ssssssssssssssssssssss all rights reserved.",
      medias: [
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
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
        {
          icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129090/icons8-facebook-50_xfbimo.png",
          url: "https://facebook.com",
        },
      ],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice2",
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

export const templateActions2 = templateSlice2.actions;
export default templateSlice2.reducer;

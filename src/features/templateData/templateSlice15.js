import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const initialState = {
  templateInfo: {
    id: 15,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    logo: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
    links: [
      {
        title: "Home",
        url: "#home",
      },
      {
        title: "Services",
        url: "#services",
      },
      {
        title: "Skills",
        url: "#skills",
      },
      {
        title: "Testimonials",
        url: "#testimonials",
      },
      {
        title: "Contact",
        url: "#contact",
      },
    ],
  },

  hero: {
    imgUrl: ["https://res.cloudinary.com/duc04fwdb/image/upload/v1708017251/jammal_photos/z8h6g9lv2sxmywvygcts.png"],
    mainTitle: {
      title: "HELLO MY NAME IS",
      name: "ZOE MILLER",
      role: "I AM Web Developer",
      description: "From France, Paris. I have right experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
    },
    medias: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg",
        url: "https://example.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg",
        url: "https://example.com",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png",
        url: "https://example.com",
      },
    ],
    actionButton: {
      name: "DOWNLOAD CV",
      description: "MY SKILLS",
    },
    subtitle: {
      experience: "12 + YEARS OF EXPERIENCE",
      completedProjects: "330 COMPLETED PROJECTS",
    },
  },

  services: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
    title: "WHAT I DO",
    subtitle: "My Services",
    actionButton: " See Pricing",
    services: [
      {
        title: "Web Development",
        subtitle: "Web Design & Logo",
        text: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
      },
      {
        title: "Apps Development",
        subtitle: "iOS & Android",
        text: "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
      },
      {
        title: "Game Development",
        subtitle: "Unity & Unreal Engine ",
        text: "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
      },
    ],
  },

  features: {
    title: "PROFESSIONAL SKILLS",
    subtitle: "My Talent",
    features: [
      {
        title: "PHP",
        percentage: "85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "JavaScript",
        percentage: "65",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "WordPress",
        percentage: "60",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Python",
        percentage: "50",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "React",
        percentage: "70",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        title: "Adobe XD",
        percentage: "85",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },

  projects: {
    title: "PROTFOLIO",
    subtitle: "My Cases",
    actionButton: {
      pricing: "See Pricing",
      viewMore: "VIEW MORE",
    },
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
    links: [
      { name: "All", url: "" },
      { name: "VIDEO", url: "" },
      { name: "PHOTOGRAPHY", url: "" },
      { name: "BRANDING", url: "" },
    ],
    projects: [
      {
        title: "BRANDING",
        subtitle: "Zorro",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        title: "BRANDING",
        subtitle: "Gooir",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        title: "VIDEO",
        subtitle: "Explore",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        title: "VIDEO",
        subtitle: "Stay Fit",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        title: "PHOTOGRAPHY",
        subtitle: "Kana",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      {
        title: "PHOTOGRAPHY",
        subtitle: "Mozar",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
    ],
  },

  cta: {
    title: "RESUME ",
    subtitle: "My Story",
    imgUrls: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708028064/jammal_photos/dxfncgzlnm5uoeyhugkf.svg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708027950/jammal_photos/suloncptxwohoete98cr.png",
    ],
    items: [
      {
        id: 1,
        title: "CoderHouse Courses",
        subtitle: "Backend Programming",
        date: "2014 - 2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
      {
        id: 2,
        title: "Lviv National Academy of Arts",
        subtitle: "Faculty of Design",
        date: "2012 - 2014",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
      {
        id: 3,
        title: "IT Future",
        subtitle: "High School",
        date: "2010 - 2012",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "education",
      },
      {
        id: 4,
        title: "UI Head & Manager",
        subtitle: "Soft Tech Inc.",
        date: "2020 - 2022",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
      {
        id: 5,
        title: "UI / UX Specialist",
        subtitle: "Kana Design Studio",
        date: "2018 - 2020",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
      {
        id: 6,
        title: "Plugins Developer",
        subtitle: "Fiverr.com",
        date: "2016 - 2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        category: "experience",
      },
    ],
  },

  testimonials: {
    title: "Testimonials",
    subtitle: " WHAT Customers Say",
    discretion: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    testimonials: [
      {
        name: "Barbara Wilson",
        job: "CEO Company",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Charlie Smith",
        job: "Designer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Roy Wang",
        job: "Manager GYM",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Jennifer Smith",
        job: "CEO & Founder",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        name: "Paul Freeman",
        job: "Photographer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    ],
  },
  pricing: {
    title: "PRICING",
    subtitle: "MY Price Board",
    plans: [
      {
        amount: "39",
        title: "HOURLY BASIS",
        duration: "hour",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        properties: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
      {
        amount: "259",
        title: "FREELANCING ",
        duration: "Week",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        properties: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
      {
        amount: "1.249",
        title: "FULL TIME ",
        duration: "Month",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
        properties: ["Brand Design", "Web Development", "Advertising", "Photography"],
      },
    ],
    actionButton: "START PROJECT",
    icons: [
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030355/jammal_photos/px8o2t9qtet1pumt2yip.svg",
      "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
    ],
  },
  blogs: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
    title: "LATEST BLOG",
    subtitle: " MY Articles and Advice ",
    description:
      "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
    Buttons: {
      actionButton: "Read more ",
      VIEW: " VIEW BLOG ",
    },
    blogs: [
      {
        data: "OCTOBER 31, 2022",
        title: "The Main Thing For The Designer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942658/jammal_photos/lyixvtrnvyazsfa5yuje.jpg",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
      },
      {
        data: "OCTOBER 31, 2022",
        title: "Follow Your Own Design Process",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942696/jammal_photos/yjikp3c1msirossmsu3d.jpg",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
      },
      {
        data: "NOVEMBER 28, 2021",
        title: "Usability Secrets to Create Better Interfaces",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942724/jammal_photos/fiysz2n20varciifews5.jpg",
        description:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
      },
    ],
  },

  contact: {
    title: "CONTACT ME ",
    subtitle: "LET'S  Talk About Ideas",
    labels: {
      name: "YOUR FULL NAME *",
      address: "YOUR EMAIL ADDRESS *",
      subject: "YOUR SUBJECT *",
      message: "YOUR MESSAGE *",
    },

    contacts: [
      {
        title: "Address",
        subtitle: "North Tower, Toronto, Canada",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        title: "Freelance",
        subtitle: "Available Right Now",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        title: "Email",
        subtitle: "Zoe.miller@mydomain.com",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      {
        title: "Phone",
        subtitle: "+1 900 - 900 - 9000",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
    ],
    actionButton: "SEND MESSAGE",
  },


  
  footer: {
    rights: "Copyright Ⓒ 2022 LUIQUE . ALL RIGHTS RESERVED",
    author: "DEVELOPED BY BSLTHEMES",
    links: [
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg", url: "" },
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg", url: "" },
      { icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png", url: "" },
    ],
  },

  colors: {
    templateColors: ["red", "red", "red", "red", "red"],
  },
};
const templateSlice15 = createSlice({
  initialState,
  name: "templateSlice15",
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

export const templateActions15 = templateSlice15.actions;
export { initialState };
export default templateSlice15.reducer;

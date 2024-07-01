import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 11,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525696/jammal_photos/wmm8wc8r2ijrtguljwaa.svg",
    links: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525736/jammal_photos/bchiolwka0mnwvxo4hyb.svg",
        url: "home",
      },

      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525829/jammal_photos/tswsmtson7odglvqpal7.png",
        url: "items",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525877/jammal_photos/o0wp66kvooi2ko10robo.png",
        url: "resume",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526376/jammal_photos/bzy6y1qtnk4jv90timxl.png",
        url: "portfolio",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526425/jammal_photos/fvk0ywqqxdfrtefnu1bf.png",
        url: "layers",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707525780/jammal_photos/ysgiu27fi7lneuiyn3le.png",
        url: "testimonials",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707526505/jammal_photos/iri11hg4ko9cfycfuwul.png",
        url: "contact",
      },
    ],
  },
  hero: {
    title: "Bolby Doe",
    subtitle: "I'm a Front-End developer",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707528928/jammal_photos/vtflccswxqzvklifgnrp.svg",
    buttonText: "Hire Me",
    text: "Scroll Down",
    heros: [
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527618/jammal_photos/qxpmecvimok1s04rvjaf.svg",
        url: "https://www.instagram.com/",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527652/jammal_photos/furgxu5bmhp4dytyau0d.png",
        url: "https://www.twitter.com/",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527691/jammal_photos/uzwvjddnc8yk20x9w0vt.svg",
        url: "https://www.behance.com/",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527724/jammal_photos/c2acr5tb8dswk7nmuzjt.svg",
        url: "https://www.dribble.com/",
      },
      {
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707527760/jammal_photos/fizcisutwa4soxzeng3u.svg",
        url: "https://www.pinterest.com/",
      },
    ],
  },

  services: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529935/jammal_photos/qkowgxkdtneaviwup0dv.svg",
    description:
      "I am Bolby Doe, web developer from London, United Kingdom. I have rich experience in web site design and building and customization, also I am good at Word Press.",
    buttonText: "Download CV",
    services: [
      {
        title: "UI/UX design",
        value: "97%",
      },
      {
        title: "Development",
        value: "84%",
      },

      {
        title: "Photography",
        value: "66%",
      },
    ],
  },

  statistics: {
    statistics: [
      {
        title: "Project completed",
        value: "198",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529254/jammal_photos/spnh089rxrr416y4kbgi.png",
      },
      {
        title: "Cup of coffee",
        value: "5670",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529311/jammal_photos/pz1rrv85kzajkutewxab.png",
      },
      {
        title: "Satisfied clients",
        value: "427",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529342/jammal_photos/pk7qb56mjpspx8tbppt2.png",
      },
      {
        title: "Nominees winner",
        value: "35",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707529377/jammal_photos/ke93bwvdtgnwajajiguq.png",
      },
    ],
  },
  items: {
    title: "Items",
    items: [
      {
        imgUrl: " https://res.cloudinary.com/duc04fwdb/image/upload/v1707530832/jammal_photos/fjodtcpjr0admhaoxbs3.svg",
        title: "UI/UX design",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
      },
      {
        imgUrl: " https://res.cloudinary.com/duc04fwdb/image/upload/v1707530891/jammal_photos/fc5s2yfsxeciyqkrhh5q.svg",
        title: "Web Development",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707530933/jammal_photos/m9ni1apwvt80sgdcuisn.svg",
        title: "Photography",
        description: "Lorem ipsum dolor sit amet consectetuer adipiscing elit         aenean commodo ligula eget.",
      },
    ],
  },
  cta: {
    title: "Experience",
    educations: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
        year: "2019 - present",
        title: "Academic Degree",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
        year: "2013 - 2017",
        title: "Bachelor's Degree",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315263/jammal_photos/e8txoexg8c3isadzrzl4.png",
        year: "2009 - 2013",
        title: "Honours Degree",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
    ],
    experiences: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
        year: "2019 - present",
        title: "Web Designer",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
        year: "2013 - 2017",
        title: "Front-End Developer",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707315138/jammal_photos/jjusigmt6zz4eo7i00rm.svg",
        year: "2009 - 2013",
        title: "Back-End Developer",
        description: "Lorem ipsum dolor sit amet quo ei simul congue exerci ad nec admodum perfecto.",
      },
    ],
  },

  projects: {
    title: "Projects",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532366/jammal_photos/j8mhijwgfitdt7jodrfo.png",
    categories: ["Everything", "Creative", "Art", "Design", "Branding"],
    projects: [
      {
        title: "Project Management Illustration",
        category: "Design",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707531996/jammal_photos/d6bkxalscogk4dh51xbn.svg",
      },
      {
        title: "Guest App Walkthrough Screens",
        category: "Art",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532031/jammal_photos/vbmrao9xbughuacemn8z.svg",
      },
      {
        title: "Delivery App Wireframe",
        category: "Branding",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532063/jammal_photos/poxem7ymkahfv9brke6k.svg",
      },
      {
        title: "Onboarding Motivation",
        category: "Design",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532105/jammal_photos/zuzgoospnw8rkchet8uz.svg",
      },
      {
        title: "iMac Mockup Design",
        category: "Creative",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532139/jammal_photos/a902sheq3oxkzwplffbt.svg",
      },
      {
        title: "Game Store App Concept",
        category: "Art",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707532169/jammal_photos/gp1h7hcnbvmjfew99gr6.svg",
      },
    ],
  },
  pricing: {
    title: "Pricing Plans",
    plans: [
      {
        title: "Basic",
        subtitle: "Email support",
        description: "A Simple option but powerful to manage your business",
        currencySymbol: "$",
        price: "9",
        timeUnit: "Month",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533563/jammal_photos/d7f3hwuspkhzrd4gixml.svg",
      },
      {
        title: "Ultimate",
        subtitle: "Mon-Fri support",
        description: "Unlimited product including app integration and more features",
        currencySymbol: "$",
        price: "9",
        timeUnit: "Month",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533646/jammal_photos/ecwgh1geup2tlrbkywss.svg",
      },
      {
        title: "Premium",
        subtitle: "24/7 support",
        description: "A wise option for large companies and individuals",
        currencySymbol: "$",
        price: "9",
        timeUnit: "Month",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707533677/jammal_photos/iefwt1dhzkcm1t9qsik0.svg",
      },
    ],
    buttonText: "Get Started",
  },
  testimonials: {
    title: "Clients & Reviews",

    testimonials: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536339/jammal_photos/ygo3scdgrqd9e8wnp7hd.svg",
        name: "A7md M7md",
        subtitle: "Product designer at Dribble",
        description: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536399/jammal_photos/ahs4v2ti9ltcukn9awnn.svg",
        name: "M7md A7md",
        subtitle: "Product designer at Dribble",
        description: "I enjoy working with the theme and learn so much. You guys make the process fun and interesting. Good luck! 👍",
      },
    ],
  },
  features: {
    title: "Latest Posts",
    features: [
      {
        title: "Reviews",
        name: "Bolby",
        date: "09 February, 2024",
        description: "5 Best App Development Tool for Your Projects",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536629/jammal_photos/pmgnbkfrkxuhmwom4fdx.svg",
      },
      {
        title: "Tutorial",
        description: "Common Misconceptions About Payment",
        name: "Bolby",
        date: "07 February, 2024",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536689/jammal_photos/zurrd2gqiqn3hovkigki.svg",
      },
      {
        title: "Business",
        name: "Bolby",
        date: "05 February, 2024",
        description: "3 Things to know about startup business",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707536723/jammal_photos/mm847mrsdrh7xfbfq3ff.svg",
      },
    ],
  },
  contact: {
    title: "Get In Touch",
    subtitle: "Let's talk about everything!",
    description: "Don't like forms? Send me an email. 👋",
    buttonText: "Send Message",
  },

  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice11 = createSlice({
  initialState,
  name: "templateSlice11",
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

export const templateActions11 = templateSlice11.actions;
export { initialState };
export default templateSlice11.reducer;

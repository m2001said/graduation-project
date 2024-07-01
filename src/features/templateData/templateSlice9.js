import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 9,
    title: "",
    description: "",
    imgUrl: "",
  },


  navbar: {
    title: "Soliii",
     links: [
      {
        title: "Design",
        url: "#about13",
      },
      {
        title: "About us",
        url: "#",
      },
      {
        title: "Projects",
        url: "#",
      },
      {
        title: "Contact team",
        url: "#",
      },
      {
        title: "Reviews",
        url: "#testimonials13",
      },
    ],
    
  },
  hero: {
    title: "REAL ESTATE",
    subtitle: "Find a perfect home you love..!",
    description: "Etiam eget elementum elit. Anean dignissim dapibus vestibulum...",

    inputPlaceholder: "New York, San Francisco, etc",

    heros: [
      {
        title: "CSE",
      },
      {
        title: "ece",
      },
      {
        title: "eee",
      },
    ],
    imgs: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329624/realestate/image_10_ska1vi.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329589/realestate/image_1_oxzq9f.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707330235/realestate/image_4_o8ggty.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329692/realestate/image_16_lalqm2.jpg",
    ],
  },

   reviews: {
    title: "72k+ Happy Customers+",
    description: "200+ new Listings Everyday",
    subtitle: "Trusted by 100+ companies across the global",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347077/icons8-plus-64_pwlv7r.png",

    reviews: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703142400/me-about_pobewn.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703124966/samples/smile.jpg",
    ],
    logos: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo6_ddaq6y.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo5_iwqjl7.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo4_xbf3fz.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo3_fzmko0.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329685/realestate/logo2_z1jb8d.png",
    ],
  },
   services: {
    title: "Our Services",

    services: [
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
        title: "Buy a New Home",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
        title: "Sell a House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
        title: "Rent a House",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
    ],
  },
  features: {
    title: "Areas across the town",
    subtitle: "Neighborhood Properties",
    description: "Neighborhood Properties",
    features: [
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329684/realestate/image_18_dklo4u.jpg",
        number: 216,
        subtitle: "New York City",
        description: "NY",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329683/realestate/image_17_my9jpm.jpg",
        number: 216,
        subtitle: "New York City",
        description: "NY",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
        number: 216,
        subtitle: "New York City",
        description: "NY",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329658/realestate/image_15_qctpm4.jpg",
        number: 216,
        subtitle: "New York City",
        description: "NY",
      },
      {
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329593/realestate/image_2_ugvuoz.jpg",

        number: 216,

        subtitle: "New York City",
        description: "NY",
      },
    ],
  },

  about: {
    title: "WHO WE ARE ",
    description: "  d-top klmdfsl klsdmf lkmdsfm mlksdfl m lms",

    icon: {
      text: "done porttier eusiod",
      linkText: "nullam a lanica ipsum dignissim purus",
      imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
    },

    imgs: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329619/realestate/image_8_dlne2y.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329624/realestate/image_10_ska1vi.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329653/realestate/image_13_eajsxm.jpg",
    ],
  },

 
  testimonials: {
    title: "Testimonials",
    subtitle: "What Our Clients Say",

    description: "as as dn djjn etoua mon chanm",

    icons: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345931/realestate/back-arrow_340_m9e0hp.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707599138/quote-icon-png-15_c5hrkg.png",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1719713267/Pngtree_star_line_black_icon_3751309_hyth8w.png",
    ],
    testimonials: [
      {
        opinion:
          "I highly recommend Ali. He was attentive to our needs and worked tirelessly to find us the perfect home. We could not be happier with our new place!",
        name: "Sam Mahmoud",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      },
      {
        opinion: "جامد موتتتتتتتتتتتتتتتتتتت.",
        name: "A'laa kamal",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
      },
    ],
  },

 
  projects: {
    title: "checkout our new",
    description: "Latest Listed Properties",
    subtitle: "asda asd dadc dad",
    categories: ["All", "Sell", "Rent"],

    projects: [
      {
        title: "Design advices",
        subtitle: "$ 5,970",
        description: "Tranquil Haven in Woods",

        icons: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            title: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            title: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            title: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
      },

      {
        title: "Design advices",
        subtitle: "$ 5,970",
        description: "Tranquil Haven in Woods",

        icons: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            title: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            title: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            title: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707330235/realestate/image_4_o8ggty.jpg",
      },
      {
        title: "Design advices",
        subtitle: "$ 5,970",
        description: "Tranquil Haven in Woods",

        icons: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            title: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            title: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            title: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
      },
      {
        title: "Design advices",
        subtitle: "$ 5,970",
        description: "Tranquil Haven in Woods",

        icons: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            title: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            title: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            title: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
      },
    ],
  },

 
  team: {
    title: "Hello from",
    description: "Our Team of Experts",

    members: [
      {
        name: "Mohammed",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p4_drgvax.jpg",
        title: "CEO",
      },
      {
        name: "Ahmed",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329708/realestate/p3_khftcr.jpg",
        title: "Real Estate Developer",
      },
      {
        name: "Ali",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p2_ixjwav.jpg",
        title: "Listing Agent",
      },
      {
        name: "Kareessssssssss dasd m",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329700/realestate/p1_sfvfe2.jpg",
        title: "Buyer's Agent",
      },
    ],
  },

 
  contact: {
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707540053/tower_qajd1k.png",
    title: "Become an Agent.",
    description: "Contact asdadsa mksldm asmkdsalk asdmkl .",
    buttonText: "Register now",
    linkText: "https://www.google.com",
  },

   footer: {
    title: "Cse",
    subtitle: "227 st zagazig",
    description: "2024 soly cse all rights reserved",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",

    medias: [
      {
        title: "support@soly.com",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346108/realestate/mail_646135_dviglt.png",
      },

      {
        title: "01010351108",
        icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/telephone_126523_woh61t.png",
      },
    ],

    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",

    footerSections: [
      {
        title: "Services",
        links: [
          { title: "Home", url: "#" },
          { title: "About", url: "#" },
          { title: "Listings", url: "#" },
          { title: "blogs", url: "#" },
          { title: "become an agent", url: "#" },
        ],
      },
      {
        title: "discovery",
        links: [
          { title: "Egypt", url: "#" },
          { title: "US", url: "#" },
          { title: "UAE", url: "#" },
          { title: "UK", url: "#" },
          { title: "Canada", url: "#" },
        ],
      },
    ],

    contacts: [
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134200/linkedin-svgrepo-com_wzswlo.svg", url: "https://linkedin.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg", url: "https://facebook.com" },
      { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134202/socialmedia-svgrepo-com_xqlljo.svg", url: "https://instagram.com" },
    ],

     links: ["terms and and conditions", "Privacy Policy", "Disclaimer"],
  },

  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice9 = createSlice({
  initialState,

  name: "templateSlice9",
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

export const templateActions9 = templateSlice9.actions;
export { initialState };

export default templateSlice9.reducer;

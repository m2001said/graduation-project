import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const initialState = {
  templateInfo: {
    id: 9,
    title: "",
    description: "",
    imgUrl: "",
  },
  // navbar: {
  //   words: {
  //     title: "CSE",
  //     menuItems: ["Home", "About", "Listings", "Services", "Features", "Login/Register", "Add Listings"],
  //   },
  //   images: {
  //     menuIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347075/icons8-bars-64_uzkog5.png",
  //     closeIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-close_ozpkst.svg",
  //     homeIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
  //     personIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-person-64_ppr9e8.png",
  //   },
  // },

  hero: {
    title: "REAL ESTATE",
    subtitle: "Find a perfect home you love..!",
    description: "Etiam eget elementum elit. Anean dignissim dapibus vestibulum...",

    placeholder: "New York, San Francisco, etc",

    options: [
      {
        id: 1,
        text: "Option 1",
      },
      {
        id: 2,
        text: "Option 2",
      },
      {
        id: 3,
        text: "Option 3",
      },
    ],
    imgs: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329624/realestate/image_10_ska1vi.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329589/realestate/image_1_oxzq9f.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707330235/realestate/image_4_o8ggty.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329692/realestate/image_16_lalqm2.jpg",
    ],
    otherImages: {
      imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347077/icons8-plus-64_pwlv7r.png",
      title: "Trusted by 100+ companies across the global",
    },
    customerStats: {
      count: "72k+",
      description: "72k+ Happy Customers",
    },
    newListingStats: {
      description: "200+ new Listings Everyday",
    },
    logos: [
      { logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo6_ddaq6y.png" },
      { logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo5_iwqjl7.png" },

      { logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo4_xbf3fz.png" },

      { logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo3_fzmko0.png" },

      { logo: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329685/realestate/logo2_z1jb8d.png" },
    ],
    person: [
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703142400/me-about_pobewn.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703124966/samples/smile.jpg",
    ],
  },

  services: {
    title: "Our Services",
    service: [
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
    features: [
      {
        id: 1,
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329684/realestate/image_18_dklo4u.jpg",
        properties: 216,
        city: "New York City",
        state: "NY",
      },
      {
        id: 2,
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329683/realestate/image_17_my9jpm.jpg",
        properties: 141,
        city: "Huston",
        state: "TX",
      },
      {
        id: 3,
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
        properties: 212,
        city: "San Diego",
        state: "CA",
      },
      {
        id: 4,
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329658/realestate/image_15_qctpm4.jpg",
        properties: 183,
        city: "Philadelphia",
        state: "PA",
      },
      {
        id: 5,
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329593/realestate/image_2_ugvuoz.jpg",
        properties: 112,
        city: "San Francisco",
        state: "CA",
      },
    ],
  },

  about: {
    title: "WHO WE ARE ",
    description: " donecdfkjustify-content- sd fkds ks dfs j sfdnkfskdn fsfksnfixed-top klmdfsl klsdmf lkmdsfm mlksdfl m lms",
    more: " donecdfkjustify-content- sd fkds ks dfs j sfdnkfskdn fsfksnfixed-top klmdfsl klsdmf lkmdsfm mlksdfl m lmsd mklfdkm , dfsmf, dsmkld lmkdsf sklmf",
    img1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329619/realestate/image_8_dlne2y.jpg",
    img2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329624/realestate/image_10_ska1vi.jpg",
    img3: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329653/realestate/image_13_eajsxm.jpg",
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
    iconTitle: "done porttier eusiod",
    iconSubTitle: "nullam a lanica ipsum dignissim purus , nulla",
    more: "dsdsds",
  },

  //*************** ===  testimonials     ==== **********************/

  testimonials: {
    title: "Testimonials",
    subtitle: "What Our Clients Say",
    next: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
    previous: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345931/realestate/back-arrow_340_m9e0hp.png",
    quotation: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707599138/quote-icon-png-15_c5hrkg.png",
    star: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707601512/star_qhtqlz.png",
    text: "as as dn djjn etoua mon chanm",
    testimonial: [
      {
        quote:
          "I highly recommend Ali. He was attentive to our needs and worked tirelessly to find us the perfect home. We could not be happier with our new place!",
        author: "Sam Mahmoud",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      },
      {
        quote: "جامد موتتتتتتتتتتتتتتتتتتت.",
        author: "A'laa kamal",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
      },
    ],
  },

  //*********************** == projects == **********************/

  projects: {
    title: "checkout our new",
    description: "Latest Listed Properties",
    subtitle: "asda asd dadc dad",
    category: ["All", "Sell", "Rent"],
    cards: [
      {
        type: "Design advices",
        price: "$ 5,970",
        view: "Tranquil Haven in Woods",
        Address: "103 st, right to ksdka WA 918168",
        buttonColor: "red", // Example color value
        buttonBgColor: "blue", // Example color value
        features: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            text: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            text: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            text: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
      },
      {
        type: "New Listing",
        price: "$ 1,970",
        view: "Serene Retreat by the Lake",
        Address: "103 st, right to ksdka WA 918168",

        features: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
            text: "New Listing",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            text: "3 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            text: "2 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707330235/realestate/image_4_o8ggty.jpg",
      },
      {
        type: "Discounted Price",
        price: "$ 3,570",
        view: "Charming cottage in the Meadow",
        Address: "103 st, right to ksdka WA 918168",
        buttonColor: "red", // Example color value
        buttonBgColor: "blue", // Example color value
        features: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/dollar-symbol_2150150_hgmthe.png",
            text: "Discounted Price",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            text: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bath_13666908_apgirk.png",
            text: "3 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329589/realestate/image_1_oxzq9f.jpg",
      },
      {
        type: "Popular",
        price: "$ 2,500",
        view: "Grand Estate on the Hilltop",
        Address: "103 st, right to ksdka WA 918168",
        buttonColor: "red", // Example color value
        buttonBgColor: "blue", // Example color value

        features: [
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345079/realestate/fire_785116_tltbyw.png",
            text: "Popular",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/bed_dsmu39.png",
            text: "4 Beds",
          },
          {
            icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345932/realestate/bathtub_12337963_dcrcw7.png",
            text: "4 Bath",
          },
        ],
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329621/realestate/image_9_qtrglt.jpg",
      },
    ],
  },

  //*********************** == team == **********************/

  team: {
    title: "Hello from",
    description: "Our Team of Experts",
    cards: [
      {
        id: "0",
        name: "Mohammed",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p4_drgvax.jpg",
        job: "CEO",
      },
      {
        id: "1",
        name: "Ahmed",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329708/realestate/p3_khftcr.jpg",
        job: "Real Estate Developer",
      },
      {
        id: "2",
        name: "Ali",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p2_ixjwav.jpg",
        job: "Listing Agent",
      },
      {
        id: "3",
        name: "Kareessssssssss dasd m",

        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329700/realestate/p1_sfvfe2.jpg",
        job: "Buyer's Agent",
      },
    ],
  },
  //*********************** == pricing == **********************/

  //******************** contact ********************

  contact: {
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707540053/tower_qajd1k.png",
    title: "Become an Agent.",
    button: { title: "Register now", url: "#" },
    description: "Contact asdadsa mksldm asmkdsalk asdmkl .",
  },

  //******************** footer ******************** */
  footer: {
    title: "Cse",
    subtitle: "227 st zagazig",
    imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
    about: [
      {
        title: "support@soly.com",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346108/realestate/mail_646135_dviglt.png",
      },
      {
        title: "01010351108",
        imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/telephone_126523_woh61t.png",
      },
    ],
    icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",

    footerSection: [
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
    contact: {
      title: "Subscribe to our Newsletter",
      subtitle: "Follow us on",
      icons: [
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134200/linkedin-svgrepo-com_wzswlo.svg", url: "https://linkedin.com" },
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg", url: "https://facebook.com" },
        { icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134202/socialmedia-svgrepo-com_xqlljo.svg", url: "https://instagram.com" },
      ],
    },

    copyrightText: "2024 soly cse all rights reserved",
    additionalLinks: ["terms and and conditions", "Privacy Policy", "Disclaimer"],
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
  },
});

export const templateActions9 = templateSlice9.actions;
export default templateSlice9.reducer;

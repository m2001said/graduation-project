import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice9 = createSlice({
  initialState: {
    hero: {
      title: "REAL ESTATE",
      heading: "Find a perfect home you love..!",
      paragraph: "Etiam eget elementum elit. Anean dignissim dapibus vestibulum...",
      buttons: ["For Sale", "For Rent"],
      inputPlaceholders: {
        location: "New York, San Francisco, etc",
        propertyType: "Select Property Type",
        rooms: "Select Rooms",
      },
      carouselImages: [
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329624/realestate/image_10_ska1vi.jpg",
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329589/realestate/image_1_oxzq9f.jpg",
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707330235/realestate/image_4_o8ggty.jpg",
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329692/realestate/image_16_lalqm2.jpg",
      ],
      otherImages: {
        plusIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347077/icons8-plus-64_pwlv7r.png",
        settingsIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347078/icons8-settings-64_zffwgc.png",
        searchIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346112/realestate/search-interface-symbol_54481_kyzzez.png",
        logos: [
          "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo6_ddaq6y.png",
          "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329688/realestate/logo5_iwqjl7.png",
          "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo4_xbf3fz.png",
          "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329687/realestate/logo3_fzmko0.png",
          "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329685/realestate/logo2_z1jb8d.png",
        ],
        customerImage: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703124941/samples/people/kitchen-bar.jpg",
      },
      customerStats: {
        count: "72k+",
        description: "72k+ Happy Customers",
      },
      newListingStats: {
        description: "200+ new Listings Everyday",
      },
      dash: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347079/mdmaximize_prmvgd.png",
    },

    services: {
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
      title: "We Create The Art Of Stylish Living Stylishly",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layouts the points of using that it has a more-or-less normal.",
      phone: "012345678",
      buttonText: "Get Free Estimate",

      icons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
      ],

      test: [
        {
          subTest: [
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
            "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
          ],
        },
      ],
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813388/templates/template_one/Photo_sonnlx.jpg",
    },

    about: {
      title: "WHO WE ARE ",
      heading: "Assisting individuals in locationg the appropriatee real estate ",
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
    testimonials: {
      next: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      previous: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345931/realestate/back-arrow_340_m9e0hp.png",
      quotation: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707599138/quote-icon-png-15_c5hrkg.png",
      star: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707601512/star_qhtqlz.png",
      speach: "as as dn djjn etoua mon chanm",
      testimonial: [
        {
          quote:
            "I highly recommend Ali. He was attentive to our needs and worked tirelessly to find us the perfect home. We could not be happier with our new place!",
          author: "Sam Mahmoud",
          imageUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
        },
        {
          quote: "جامد موتتتتتتتتتتتتتتتتتتت.",
          author: "A'laa kamal",
          imageUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134021/avatar4_tn7dyv.jpg",
        },
      ],
    },
    logos: {
      companies: [
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/01_p78hjd.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/02_mnw1ps.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/03_fiplpx.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/04_pg8flc.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/05_prt3gi.svg" },
      ],
    },
    projects: {
      title: "Follow Our Projects",
      description: "It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.",
      cards: [
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808451/templates/template_one/Photo_2_w7jdep.jpg",
          title: "Modern Kitchan",
          description: "Decor / Artchitecture",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808451/templates/template_one/Photo_3_wig9kc.jpg",
          title: "Modern Kitchan",
          description: "Decor / Artchitecture",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808452/templates/template_one/Photo_iojikc.jpg",
          title: "Modern Kitchan",
          description: "Decor / Artchitecture",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808450/templates/template_one/Photo_1_njncs1.jpg",
          title: "Modern Kitchan",
          description: "Decor / Artchitecture",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
        },
      ],
    },

    team: {
      title: "Hello from",
      cards: [
        {
          id: "0",
          name: "Mohammed",

          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p4_drgvax.jpg",
          job: "CEO",
        },
        {
          id: "1",
          job: "Ahmed",

          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329708/realestate/p3_khftcr.jpg",
          job: "Real Estate Developer",
        },
        {
          id: "2",
          job: "Ali",

          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329705/realestate/p2_ixjwav.jpg",
          job: "Listing Agent",
        },
        {
          id: "3",
          name: "Kareem",

          imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329700/realestate/p1_sfvfe2.jpg",
          job: "Buyer's Agent",
        },
      ],
    },

    pricing: {
      description: "donac porrfkoe kmflred dijdffsoiij dsada asdadasd",
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
          buttonColor: "red", // Example color value
          buttonBgColor: "blue", // Example color value
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

    neighborhoods: [
      {
        id: 1,
        image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329684/realestate/image_18_dklo4u.jpg",
        properties: 216,
        city: "New York City",
        state: "NY",
      },
      {
        id: 2,
        image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329683/realestate/image_17_my9jpm.jpg",
        properties: 141,
        city: "Huston",
        state: "TX",
      },
      {
        id: 3,
        image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329665/realestate/image_14_z4orcy.jpg",
        properties: 212,
        city: "San Diego",
        state: "CA",
      },
      {
        id: 4,
        image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329658/realestate/image_15_qctpm4.jpg",
        properties: 183,
        city: "Philadelphia",
        state: "PA",
      },
      {
        id: 5,
        image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707329593/realestate/image_2_ugvuoz.jpg",
        properties: 112,
        city: "San Francisco",
        state: "CA",
      },
    ],
    contact: {
      imgUrl: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707540053/tower_qajd1k.png",
      title: "Become an Agent.",
      description: "Contact asdadsa mksldm asmkdsalk asdmkl .",
    },

    footer: {
      info: {
        name: "cse",
        address: "227 st zagazig",
        phone: "01010351108",
        next: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
        email: "support@soly.com",
        mail: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346108/realestate/mail_646135_dviglt.png",
        phoneImg: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346113/realestate/telephone_126523_woh61t.png",
        home: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707345078/realestate/home_553416_pdjise.png",
      },
      quickLinks: ["Home", "About", "Listings", "Blogs", "Become an Agent"],
      discovery: ["Egypt", "Us", "Uk", "Canada", "UAE"],
      newsletterText: "Subscribe to our Newsletter",
      followUsText: "Follow us on",
      socialMediaLinks: [
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134200/linkedin-svgrepo-com_wzswlo.svg",
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134252/facebook-svgrepo-com_lmghnk.svg",
        "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134202/socialmedia-svgrepo-com_xqlljo.svg",
      ],
      copyrightText: "2024 soly cse all rights reserved",
      additionalLinks: ["terms and and conditions", "Privacy Policy", "Disclaimer"],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

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

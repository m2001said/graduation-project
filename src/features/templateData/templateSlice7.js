import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";

const templateSlice7 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg",
      ],
      links: [
        {
          title: "Home",
          url: "#home",
        },
        {
          title: "Features",
          url: "#features",
        },
        {
          title: "Product",
          url: "#product",
        },
        {
          title: "Clients",
          url: "#clients",
        },
      ],
    },

    hero: {
      Subtitle: "20% Discount For 1 Month Account",
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800273/jammal_photos/vt6gwourfyjs74j4ldmf.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706800322/jammal_photos/tujqyyrsfqmtnjcn6fef.png",
      ],

      title: "The Next Generation Payment Method.",
      paragraf:
        "Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.",
    },
    services: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706801327/jammal_photos/pu1mdivlop5zpuugkqn9.svg",
      actionButton: "Get Started",
    },
    // /----------------------------/
    statistics: {
      statistics: [
        {
          title: "User Active",
          value: "3800+",
        },
        {
          title: "Trusted by Company",
          value: "230+",
        },
        {
          title: "Transaction",
          value: "$230M+",
        },
      ],

      // "stats-1": {
      //   id: "stats-1",
      //   title: "User Active",
      //   value: "3800+",
      // },
      // "stats-2": {
      //   id: "stats-2",
      //   title: "Trusted by Company",
      //   value: "230+",
      // },
      // "stats-3": {
      //   id: "stats-3",
      //   title: "Transaction",
      //   value: "$230M+",
      // },
    },

    features: {
      actionButton: " Get Started",
      title: {
        title: "You do the business,",
        subtitle: "we’ll handle the money.",
        content:
          " With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.",
      },
      items: [
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818805/jammal_photos/opfgv1t07ehs8byamptk.svg",
          title: "Rewards",
          content: "The best credit cards offer some tantalizing combinations of promotions and prizes",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818830/jammal_photos/a036fafyfqgkex3saivx.svg",
          title: "100% Secured",
          content: "We take proactive steps to make sure your information and transactions are secure.",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818747/jammal_photos/j85xs9b1jkx1v8ulmpff.svg",
          title: "Balance Transfer",
          content: "A balance transfer credit card can save you a lot of money in interest charges.",
        },
      ],
    },
    characteristics: {
      title: "Easily control your",
      subtitle: " billing & invoicing",
      content:
        " Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.",
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814018/jammal_photos/nkxtdvx0jakzuplwtoa6.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814088/jammal_photos/auq2y4agfhj8byap3omh.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814053/jammal_photos/vwwyntauf0akzyaef7e5.png",
      ],
    },


    paymentMethods: {
      title: " Find a better card deal",
      subtitle: "in few easy steps.",
      content: " Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706814478/jammal_photos/na4dc3msncykyboct0nu.png",
    },

    feedbacks: {
      cards: [
        {
          content: "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
          name: "Herman Jensen",
          title: "Founder & Leader",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815168/jammal_photos/tk0xejban2yc4ag4antf.png",
        },
        {
          content: "Money makes your life easier. If you're lucky to have it, you're lucky.",
          name: "Steve Mark",
          title: "Founder & Leader",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815301/jammal_photos/hesjjos1rgosxe48tawa.png",
        },
        {
          content: "It is usually people in the money business, finance, and international trade that are really rich.",
          name: "Kenn Gallagher",
          title: "Founder & Leader",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706815330/jammal_photos/xc3vlzv96mohozyawmnq.png",
        },
      ],
    },
    testimonials: {
      title: "What People are",
      subtitle: "saying about us",
      content: " Everything you need to accept card payments and grow your business anywhere on the planet.",
    },
    logos: {
      companies: [
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706817792/jammal_photos/yt3cnulaigujjqu1upxq.png" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818009/jammal_photos/ko4qgfctz14jgqygtuaj.png" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818069/jammal_photos/uioypquvjmbkcoxpb4rv.png" },
      ],
    },
    cta: {
      subtitle: "Let’s try our service now!",
      content: "Everything you need to accept card payments and grow your business anywhere on the planet.",
    },
    footer: {
      title: "Copyright Ⓒ 2022 HooBank. All Rights Reserved.",
      Subtitle: "A new way to make the payments easy, reliable and secure.",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706816362/jammal_photos/res7beki52yf4cbmuix3.svg",
      footerSections: [
        {
          title: "Useful Links",
          links: [
            {
              title: "Content",
              url: "https://www.hoobank.com/content/",
            },
            {
              title: "How it Works",
              url: "https://www.hoobank.com/how-it-works/",
            },
            {
              title: "Create",
              url: "https://www.hoobank.com/create/",
            },
            {
              title: "Explore",
              url: "https://www.hoobank.com/explore/",
            },
            {
              title: "Terms & Services",
              url: "https://www.hoobank.com/terms-and-services/",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              title: "Help Center",
              url: "https://www.hoobank.com/help-center/",
            },
            {
              title: "Partners",
              url: "https://www.hoobank.com/partners/",
            },
            {
              title: "Suggestions",
              url: "https://www.hoobank.com/suggestions/",
            },
            {
              title: "Blog",
              url: "https://www.hoobank.com/blog/",
            },
            {
              title: "Newsletters",
              url: "https://www.hoobank.com/newsletters/",
            },
          ],
        },
        {
          title: "Partner",
          links: [
            {
              title: "Our Partner",
              url: "https://www.hoobank.com/our-partner/",
            },
            {
              title: "Become a Partner",
              url: "https://www.hoobank.com/become-a-partner/",
            },
          ],
        },
      ],
      medias: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818177/jammal_photos/zqz9nmo0tqfpnhunvfgl.svg",
          url: "https://www.instagram.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818209/jammal_photos/h6rtmonyzmpckvur3o9g.svg",
          url: "https://www.facebook.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818240/jammal_photos/ornmyj05cwnoca5hkljl.svg",
          url: "https://www.twitter.com/",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818264/jammal_photos/rno8zcfzwccx9gczoks5.svg",
          url: "https://www.linkedin.com/",
        },
      ],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice7",
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

export const templateActions7 = templateSlice7.actions;
export default templateSlice7.reducer;

import { createSlice } from "@reduxjs/toolkit";

const templateSlice7 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg",
      ],
      Links: [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "features",
          title: "Features",
        },
        {
          id: "product",
          title: "Product",
        },
        {
          id: "clients",
          title: "Clients",
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
    statistic: {
      items: [
        {
          id: "stats-1",
          value: "3800+",
          title: "User Active",
        },
        {
          id: "stats-2",
          value: "230+",
          title: "Trusted by Company",
        },
        {
          id: "stats-3",
          value: "$230M+",
          title: "Transaction",
        },
      ],
    },

    feature: {
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
    testimonial: {
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
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706816362/jammal_photos/res7beki52yf4cbmuix3.svg",
      Subtitle: "A new way to make the payments easy, reliable and secure.",
      links: [
        {
          title: "Useful Links",
          links: [
            {
              name: "Content",
              link: "https://www.hoobank.com/content/",
            },
            {
              name: "How it Works",
              link: "https://www.hoobank.com/how-it-works/",
            },
            {
              name: "Create",
              link: "https://www.hoobank.com/create/",
            },
            {
              name: "Explore",
              link: "https://www.hoobank.com/explore/",
            },
            {
              name: "Terms & Services",
              link: "https://www.hoobank.com/terms-and-services/",
            },
          ],
        },
        {
          title: "Community",
          links: [
            {
              name: "Help Center",
              link: "https://www.hoobank.com/help-center/",
            },
            {
              name: "Partners",
              link: "https://www.hoobank.com/partners/",
            },
            {
              name: "Suggestions",
              link: "https://www.hoobank.com/suggestions/",
            },
            {
              name: "Blog",
              link: "https://www.hoobank.com/blog/",
            },
            {
              name: "Newsletters",
              link: "https://www.hoobank.com/newsletters/",
            },
          ],
        },
        {
          title: "Partner",
          links: [
            {
              name: "Our Partner",
              link: "https://www.hoobank.com/our-partner/",
            },
            {
              name: "Become a Partner",
              link: "https://www.hoobank.com/become-a-partner/",
            },
          ],
        },
      ],
    },
    socialMedia: {
      title: "Copyright Ⓒ 2022 HooBank. All Rights Reserved.",
      socialMedia: [
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818177/jammal_photos/zqz9nmo0tqfpnhunvfgl.svg",
          link: "https://www.instagram.com/",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818209/jammal_photos/h6rtmonyzmpckvur3o9g.svg",
          link: "https://www.facebook.com/",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818240/jammal_photos/ornmyj05cwnoca5hkljl.svg",
          link: "https://www.twitter.com/",
        },
        {
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706818264/jammal_photos/rno8zcfzwccx9gczoks5.svg",
          link: "https://www.linkedin.com/",
        },
      ],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice7",
  reducers: {
    updateTemplate7: (state, action) => {
      const { section, variable, value, i, blockName, subBlockName, subIndex, objKey } = action.payload;
      // sub means level 2 of fields
      if (i === undefined) {
        if (variable === null) {
          // edit object filed
          state[section][blockName][objKey] = value;
        } else {
          // edit normal field
          state[section][variable] = value;
        }
      } else {
        if (subIndex === undefined) {
          // edit array filed with index
          if (variable === null) state[section][blockName][i] = value;
          else {
            if (subBlockName === undefined) {
              // edit obj in array of objects
              state[section][blockName][i][variable] = value;
            } else {
              // edit sub obj directly
              state[section][blockName][i][subBlockName][variable] = value;
            }
          }
        } else {
          // edit sub element in array
          if (variable === null) state[section][blockName][i][subBlockName][subIndex] = value;
          else {
            // edit sub obj in array of objects
            state[section][blockName][i][subBlockName][subIndex][variable] = value;
          }
        }
      }
    },
  },
});

export const { updateTemplate7 } = templateSlice7.actions;
export default templateSlice7.reducer;

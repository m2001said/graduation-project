import { createSlice } from "@reduxjs/toolkit";
const templateSlice14 = createSlice({
  initialState: {
    navbar14: {
      title: "Eshop",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
      links: ["Home", "Shop", "About", "Blogs"],
      DropdownTxt: "Quick Links",
      DropdownIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706806280/caret-down-svgrepo-com_r9zuyy.svg",
      DropdownLinks: [
        {
          name: "Trending Products",
          link: "/#",
        },
        {
          name: "Best Selling",
          link: "/#",
        },
        {
          name: "Top Rated",
          link: "/#",
        },
      ],
      SearchIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601681/icons8-search-24_e0tzic.png",
      buttonText: "!",
      buttonIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601893/icons8-shopping-cart-64_dxjgeg.png",
    },

    darkMode14: {
      darkPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
      lightPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
    },

    items14: {},

    hero14: {
      blocks: [
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602286/headphone_qbcak3.png",
          subtitle: "Beats Solo",
          title: "Wireless",
          title2: "Headphone",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602303/vr_zzinjy.png",
          subtitle: "Beats Solo",
          title: "Wireless",
          title2: "Virtual",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602295/macbook_dxcdn8.png",
          subtitle: "Beats Solo",
          title: "Branded",
          title2: "Laptops",
        },
      ],
      buttonText: "Shop By Category",
    },

    services14: {
      blocks: [
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602721/icons8-sedan-30_zecew1.png",
          title: "Free Shipping",
          description: "Free Shipping On All Order",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602913/icons8-checkmark-64_kxv4x8.png",
          title: "Safe Money ",
          description: "30 Days Money Back",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602989/icons8-wallet-30_prjgk8.png",
          title: "Secure Payment",
          description: "All Payment Secure",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603085/icons8-headphones-30_xandnm.png",
          title: "Online Supoort 24/7",
          description: "Technical Support 24/7",
        },
      ],
    },

    feature14: {
      blocks: [
        {
          discount: "30% OFF",
          title: "Fine Smile",
          date: "10 Jan to 28 Jan",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603385/headphone_pkjxnj.png",
          title2: "Air Solo Bass",
          title3: "Winter Sale",
          title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
          bgColor: "#f42c37",
        },
        {
          discount: "30% OFF",
          title: "Happy Hours",
          date: "14 Jan to 28 Jan",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603374/smartwatch2-removebg-preview_ivyg4p.png",
          title2: "Smart Solo",
          title3: "Winter Sale",
          title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
          bgColor: "#2dcc6f",
        },
      ],
    },

    projects14_1: {
      title: "Our Products",
      description: "Explore Our Products",
      cards: [
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604733/p-1_mqzmix.jpg",
          title: "Boat Headphone",
          price: "120",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604737/p-2_qc3prb.jpg",
          title: "Rocky Mountain",
          price: "420",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604741/p-3_gfoj4a.jpg",
          title: "Goggles",
          price: "320",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604745/p-4_hkawqn.jpg",
          title: "Printed ",
          price: "220",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604748/p-5_lbyuxu.jpg",
          title: "Boat Headphone",
          price: "120",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604761/p-7_fkl1tb.jpg",
          title: "Rocky Mountain",
          price: "420",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604765/p-9_bypahb.jpg",
          title: "Goggles",
          price: "320",
        },
        {
          img: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604748/p-5_lbyuxu.jpg",
          title: "Printed ",
          price: "220",
        },
      ],
      buttonText: "Add to cart",
    },

    projects14_2: {
      title: "Recent News",
      description: "Explore Our Blogs",
      cards: [
        {
          title: "How to choose perfect smartwatch",
          subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
          published: "Jan 20, 2024 by Dilshad",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604612/blog-1_n5jvci.jpg",
        },
        {
          title: "How to choose perfect gadget",
          subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
          published: "Jan 20, 2024 by Satya",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604616/blog-2_nmxkbb.jpg",
        },
        {
          title: "How to choose perfect VR headset",
          subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
          published: "Jan 20, 2024 by Sabir",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604616/blog-2_nmxkbb.jpg",
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

    footer10: {
      title: "Eshop",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
      LocationIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707093156/navigation_mdrvbp.png",
      Location: "Noida, Uttar Pradesh",
      mobileIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707093150/mobile-alt-solid_veust2.svg",
      mobile: "+20 123456789",
      mediaIcons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/facebook_td263x.svg",
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
      ],

      items: [
        {
          title: "Important Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
        {
          title: "Quick Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
      ],
    },

    orderPopup10: {
      title: "Order Now",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707094588/icons8-close-24_joqywt.png",
      buttonText: "Order Now",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice14",
  reducers: {
    updateAll: (state, action) => {
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

export const { updateTemplate14 } = templateSlice14.actions;
export default templateSlice14.reducer;

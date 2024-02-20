import { createSlice } from "@reduxjs/toolkit";
const templateSlice10 = createSlice({
  initialState: {
    navbar10: {
      title: "Books",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706798279/logo_rcge0a.png",
      links: ["Home", "Best Seller"],
      // DropdownTxt: "Quick Links",
      // DropdownIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707774619/icons8-sort-down-30_yurjok.png",
      // DropdownLinks: [
      //   {
      //     name: "Trending Books",
      //     link: "/#",
      //   },
      //   {
      //     name: "Best Selling",
      //     link: "/#",
      //   },
      //   {
      //     name: "Authors",
      //     link: "/#",
      //   },
      // ],
      buttonText: "Order",
      buttonIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706806477/cart-shopping-shop-svgrepo-com_oxwiez.svg",
    },

    darkMode10: {
      darkPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
      lightPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
    },

    hero10: {
      backGroundImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805805/blue-pattern_d1mb2e.png",
      defaultImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
      defaultTitle: "His Life will forever be Changed",
      defaultDescription: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

      ImageList: [
        {
          imgNum: "1",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
          title: "His Life will forever be Changed",
          description:
            "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          imgNum: "2",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
          title: "Who's there",
          description:
            "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          imgNum: "3",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
          title: "Lost Boy",
          description: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
      buttonText: "Order Now",
    },

    services10: {
      smTitle: "Trending Books",
      title: "Best Books",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio consectetur",
      starIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      buttonText: "Order Now",
      blocks: [
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
          title: "His Life",
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
          title: "Who's there",
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
          title: "Lost Boy",
          description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },

    feature10: {
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707084593/library_ww1bzg.jpg",
      title: "Library at your fingertips",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      blocks: [
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707085438/icons8-secure-50_kclhuh.png",
          text: "Quality Books",
        },
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707085765/icons8-food-bar-48_ghpah5.png",
          text: "Fast Delivery",
        },
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707085773/icons8-food-truck-24_ollgew.png",
          text: "Easy Payment method",
        },
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707085765/icons8-food-bar-48_ghpah5.png",
          text: "Get Offers on Books",
        },
      ],
    },

    cta10: {
      title: "Read Books at Your Fingertips",
      bannerImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090472/board_hqttt2.png",
      AppStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090485/app_store_s6wzhh.png",
      PlayStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090481/play_store_nmzfln.png",
    },

    teams10: {
      smTitle: "Top Books for you",
      title: "Top Books",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt",
      cards: [
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
          title: "Who's there",
          rating: "5.0",
          author: "Someone",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
          title: "His Life",
          rating: "4.5",
          author: "John",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
          title: "Lost boys",
          rating: "4.7",
          author: "Lost Girl",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
          title: "His Life",
          rating: "4.4",
          author: "Someone",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
        },
        {
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
          title: "Who's There",
          rating: "4.5",
          author: "Someone",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
        },
      ],
      buttonText: "View All Books",
    },

    testimonial10: {
      smTitle: "What our customers say",
      title: "Testimonial",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt",
      mark: ",,",
      cards: [
        {
          id: 1,
          name: "Victor",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/101/101",
        },
        {
          id: 1,
          name: "Satya Narayan",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/102/102",
        },
        {
          id: 1,
          name: "Sachin Tendulkar",
          text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
          img: "https://picsum.photos/103/103",
        },
      ],
    },

    footer10: {
      title: "Books Store",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706798279/logo_rcge0a.png",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
      LocationIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781362/icons8-location-arrow-24_mwjabu.png",
      Location: "Noida, Uttar Pradesh",
      mobileIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781365/icons8-mobile-navigator-50_xvqski.png",
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
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701809141/templates/template_one/instagram_dlrab9.svg",
          url: "https://instagram.com",
        },
      ],

      items: [
        {
          title: "Important Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
        {
          title: "Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
        {
          title: "Location",
          links: ["Home", "About", "Contact", "Blog"],
        },
      ],
    },

    orderPopup10: {
      title: "Order Your Book",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707791435/icons8-x-24_jske7f.png",
      buttonText: "Order Now",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice10",
  reducers: {
    updateTemplate10: (state, action) => {
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

export const { updateTemplate10 } = templateSlice10.actions;
export default templateSlice10.reducer;

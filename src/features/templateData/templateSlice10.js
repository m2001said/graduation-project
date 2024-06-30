import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 10,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    title: "Books",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706798279/logo_rcge0a.png",
    buttonText: "Order",
    links: [
      {
        title: "Home",
        url: "#",
      },
      {
        title: "Best Seller",
        url: "#",
      },
    ],
    icons: [
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706806477/cart-shopping-shop-svgrepo-com_oxwiez.svg",
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
    ],
  },

  hero: {
    title: "His Life will forever be Changed",
    description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    buttonText: "Order Now",
    imgs: [
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805805/blue-pattern_d1mb2e.png",
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
    ],
    heros: [
      {
        title: "His Life will forever be Changed",
        description:
          "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
      },
      {
        title: "Who's there",
        description: "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
      },
      {
        title: "Lost Boy",
        description: "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
      },
    ],
  },

  services: {
    title: "Best Books",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit Distinctio consectetur",
    subtitle: "Trending Books",
    icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
    services: [
      {
        title: "His Life",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
        buttonText: "Order Now",
      },
      {
        title: "Who's there",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
        buttonText: "Order Now",
      },
      {
        title: "Lost Boy",
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
        buttonText: "Order Now",
      },
    ],
  },

  features: {
    title: "Library at your fingertips",
    description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707084593/library_ww1bzg.jpg",
    features: [
      {
        title: "Quality Books",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709902864/icons8-secure-50_yn2jxx.png",
      },
      {
        title: "Fast Delivery",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709903151/icons8-food-truck-64_lr5ghp.png",
      },
      {
        title: "Easy Payment method",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709902985/icons8-fast-food-32_kjo9ui.png",
      },
      {
        title: "Get Offers on Books",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707085765/icons8-food-bar-48_ghpah5.png",
      },
    ],
  },

  cta: {
    title: "Read Books at Your Fingertips",
    imgs: [
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090472/board_hqttt2.png",
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090485/app_store_s6wzhh.png",
      "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090481/play_store_nmzfln.png",
    ],
    // bannerImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090472/board_hqttt2.png",
    // AppStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090485/app_store_s6wzhh.png",
    // PlayStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090481/play_store_nmzfln.png",
  },

  team: {
    title: "Top Books",
    subtitle: "Top Books for you",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt",
    buttonText: "View All Books",
    members: [
      {
        title: "Who's there",
        rating: "5.0",
        author: "Someone",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      },
      {
        title: "His Life",
        rating: "4.5",
        author: "John",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      },
      {
        title: "Lost boys",
        rating: "4.7",
        author: "Lost Girl",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067757/book3_fkzdr7.jpg",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      },
      {
        title: "His Life",
        rating: "4.4",
        author: "Someone",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067750/book2_fjsnwn.jpg",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      },
      {
        title: "Who's There",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707067713/book1_a7epcd.jpg",
        author: "Someone",
        rating: "4.5",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707083776/Star_lqpaao.svg",
      },
    ],
  },

  testimonials: {
    title: "Testimonial",
    subtitle: "What our customers say",
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis delectus architecto error nesciunt",
    testimonials: [
      {
        title: "Victor",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://picsum.photos/101/101.jpg",
      },
      {
        title: "Satya Narayan",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://picsum.photos/102/102.jpg",
      },
      {
        title: "Sachin Tendulkar",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
        imgUrl: "https://picsum.photos/103/103.jpg",
      },
    ],
  },

  footer: {
    title: "Books Store",
    description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
    imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706798279/logo_rcge0a.png",
    contacts: [
      {
        value: "Noida, Uttar Pradesh",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781362/icons8-location-arrow-24_mwjabu.png",
      },
      {
        value: "+20 123456789",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781365/icons8-mobile-navigator-50_xvqski.png",
      },
    ],

    medias: [
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

    footerSections: [
      {
        title: "Important Links",
        links: [
          {
            title: "Home",
            url: "#",
          },
          {
            title: "About",
            url: "#",
          },
          {
            title: "Contact",
            url: "#",
          },
          {
            title: "Blog",
            url: "#",
          },
        ],
      },
      {
        title: "Links",
        links: [
          {
            title: "Home",
            url: "#",
          },
          {
            title: "About",
            url: "#",
          },
          {
            title: "Contact",
            url: "#",
          },
          {
            title: "Blog",
            url: "#",
          },
        ],
      },
      {
        title: "Location",
        links: [
          {
            title: "Home",
            url: "#",
          },
          {
            title: "About",
            url: "#",
          },
          {
            title: "Contact",
            url: "#",
          },
          {
            title: "Blog",
            url: "#",
          },
        ],
      },
    ],
  },

  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice10 = createSlice({
  initialState,
  name: "templateSlice10",
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

export const templateActions10 = templateSlice10.actions;
export { initialState };
export default templateSlice10.reducer;

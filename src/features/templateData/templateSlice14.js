import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections, updateSchema } from "./actions";
const initialState = {
  templateInfo: {
    id: 14,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    title: "Eshop",
    // logo: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
    links: [
      {
        title: "Home",
        url: "/#",
      },
      {
        title: "Shop",
        url: "/#shop",
      },
      {
        title: "About",
        url: "/#about",
      },
      {
        title: "Blogs",
        url: "/#blog",
      },
    ],
    buttonText: "!",
    buttonIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707775619/icons8-shopping-cart-24_w0vwvt.png",
    darkPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
    lightPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
  },

  hero: {
    heros: [
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

  items: {
    title: "Enjoy",
    subtitle: "With",
    items: [
      {
        title: "Earph",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777277/earphone_pgistv.png",
      },
      {
        title: "Gadget",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777305/watch_dn63md.png",
      },
      {
        title: "Laptop",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602295/macbook_dxcdn8.png",
      },
      {
        title: "Laptop",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777316/gaming_zceuxk.png",
      },
      {
        title: "Gadget",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602303/vr_zzinjy.png",
      },
      {
        title: "Earph",
        imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777323/speaker_wqwmry.png",
      },
    ],
    buttonText: "Browse",
  },

  services: {
    services: [
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

  featuers: {
    discount: "30% OFF",
    title: "Fine Smile",
    date: "10 Jan to 28 Jan",
    image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603385/headphone_pkjxnj.png",
    title2: "Air Solo Bass",
    title3: "Winter Sale",
    title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  },

  products: {
    title: "Our Products",
    description: "Explore Our Products",
    products: [
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

  // offer2: {
  //   discount: "30% OFF",
  //   title: "Happy Hours",
  //   date: "14 Jan to 28 Jan",
  //   image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603374/smartwatch2-removebg-preview_ivyg4p.png",
  //   title2: "Smart Solo",
  //   title3: "Winter Sale",
  //   title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
  // },

  blogs: {
    title: "Recent News",
    description: "Explore Our Blogs",
    blogs: [
      {
        title: "How to choose perfect smartwatch",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae Porro?",
        published: "Jan 20, 2024 by Dilshad",
        image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604612/blog-1_n5jvci.jpg",
      },
      {
        title: "How to choose perfect gadget",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae Porro?",
        published: "Jan 20, 2024 by Satya",
        image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604616/blog-2_nmxkbb.jpg",
      },
      {
        title: "How to choose perfect VR headset",
        subtitle: "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae Porro?",
        published: "Jan 20, 2024 by Sabir",
        image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707604621/blog-3_ko9kq9.jpg",
      },
    ],
  },

  logos: {
    companies: [
      { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780037/br-1_hqubpv.png", url: "https://examble.com" },
      { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780041/br-2_tlsefn.png", url: "https://examble.com" },
      { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780045/br-3_tjyara.png", url: "https://examble.com" },
      { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780049/br-4_zf3evw.png", url: "https://examble.com" },
      { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780053/br-5_tczupi.png", url: "https://examble.com" },
    ],
  },

  footer: {
    title: "Eshop",
    logo: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
    description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
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
          { title: "Home", url: "#home" },
          { title: "About", url: "#about" },
          { title: "Contact", url: "#contact" },
          { title: "Blog", url: "#blog" },
        ],
      },
      {
        title: "Quick Links",
        links: [
          { title: "Home", url: "#home" },
          { title: "About", url: "#about" },
          { title: "Contact", url: "#contact" },
          { title: "Blog", url: "#blog" },
        ],
      },
    ],
    contacts: [
      {
        value: "Noida, Uttar Pradesh",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1709831446/icons8-location-24_qiw7so.png",
      },
      {
        value: "+20 123456789",
        icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781365/icons8-mobile-navigator-50_xvqski.png",
      },
    ],
  },

  colors: {
    templateColors: ["#f42c37", "fdc62e", "#34cc73", "#1376f4", "#acabab9c", "#eeeeee"],
  },
};
const templateSlice14 = createSlice({
  initialState,
  name: "templateSlice14",
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

export const templateActions14 = templateSlice14.actions;
export { initialState };
export default templateSlice14.reducer;

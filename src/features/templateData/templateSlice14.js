import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice14 = createSlice({
  initialState: {
    navbar: {
      title: "Eshop",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
      links: [
        {
          name: "Home",
          link: "/#",
        },
        {
          name: "Shop",
          link: "/#shop",
        },
        {
          name: "About",
          link: "/#about",
        },
        {
          name: "Blogs",
          link: "/#blog",
        },
      ],
      // DropdownTxt: "Quick Links",
      // DropdownIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707774619/icons8-sort-down-30_yurjok.png",
      // DropdownLinks: [
      //   {
      //     name: "Trending Products",
      //     link: "/#",
      //   },
      //   {
      //     name: "Best Selling",
      //     link: "/#",
      //   },
      //   {
      //     name: "Top Rated",
      //     link: "/#",
      //   },
      // ],
      // SearchIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707775350/icons8-search-24_1_vxeohp.png",
      buttonText: "!",
      buttonIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707775619/icons8-shopping-cart-24_w0vwvt.png",
      darkPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805795/dark-mode-button_e9kiqi.png",
      lightPng: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1706805773/light-mode-button_ermmq3.png",
    },

    hero: {
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

    items: {
      firstTitle: "Enjoy",
      secondTitle: "With",
      title1: "Earph",
      image1: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777277/earphone_pgistv.png",
      title2: "Gadget",
      image2: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777305/watch_dn63md.png",
      title3: "Laptop",
      image3: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602295/macbook_dxcdn8.png",
      title4: "Laptop",
      image4: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777316/gaming_zceuxk.png",
      title5: "Gadget",
      image5: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707602303/vr_zzinjy.png",
      title6: "Earph",
      image6: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707777323/speaker_wqwmry.png",
      buttonText: "Browse",
    },

    services: {
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

    feature1: {
      discount: "30% OFF",
      title: "Fine Smile",
      date: "10 Jan to 28 Jan",
      image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603385/headphone_pkjxnj.png",
      title2: "Air Solo Bass",
      title3: "Winter Sale",
      title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
      bgColor: "#f42c37",
    },

    projects1: {
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

    feature2: {
      discount: "30% OFF",
      title: "Happy Hours",
      date: "14 Jan to 28 Jan",
      image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707603374/smartwatch2-removebg-preview_ivyg4p.png",
      title2: "Smart Solo",
      title3: "Winter Sale",
      title4: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis",
      bgColor: "#2dcc6f",
    },

    projects2: {
      title: "Recent News",
      description: "Explore Our Blogs",
      cards: [
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
        { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780037/br-1_hqubpv.png" },
        { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780041/br-2_tlsefn.png" },
        { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780045/br-3_tjyara.png" },
        { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780049/br-4_zf3evw.png" },
        { imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707780053/br-5_tczupi.png" },
      ],
    },

    footer: {
      title: "Eshop",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707601954/logo_xtzffr.png",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
      title3: "Address",
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
          title: "Quick Links",
          links: ["Home", "About", "Contact", "Blog"],
        },
      ],
    },

    order: {
      title: "Order Now",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707791435/icons8-x-24_jske7f.png",
      buttonText: "Order Now",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

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
  },
});

export const templateActions14 = templateSlice14.actions;
export default templateSlice14.reducer;

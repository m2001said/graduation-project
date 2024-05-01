import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice18 = createSlice({
  initialState: {
    navbar: {
      title: "Car Rental",
      links: [
        {
          title: "HOME",
          url: "#",
        },
        {
          title: "CARS",
          url: "#",
        },
        {
          title: "ABOUT",
          url: "#about",
        },
        {
          title: "BOOKING",
          url: "#",
        },
      ],
      icons: [
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092466/icons8-sun-24_oonunj.png",
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092459/icons8-moon-symbol-30_chxqrj.png",
        "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092472/icons8-menu-32_ixhdzw.png",
      ],
    },

    hero: {
      title: "Car Rental",
      smTitle: "Effortless",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab",
      buttonText: "Get Started",
      lightImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094043/banner-car_nzxi5c.png",
      darkImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094046/car_wnmkfa.png",
    },

    features: {
      title: "About us",
      description1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime?",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora.",
      buttonText: "Get Started",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094582/car1_yzpkby.png",
    },
    services: {
      title: "Why Choose Us",
      services: [
        {
          title: "Best Price",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          buttonText: "Learn more",
          url: "#",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095320/icons8-compact-camera-24_sbvw3e.png",
        },
        {
          title: "Fast and Safe",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          buttonText: "Learn more",
          url: "#",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095302/icons8-notebook-32_wp5emo.png",
        },
        {
          title: "Experience Drivers",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          buttonText: "Learn more",
          url: "#",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095310/icons8-microsoft-onenote-24_jrkmre.png",
        },
      ],
    },

    projects: {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure nemo ab?",
      projects: [
        {
          title: "BMW UX",
          price: "$100/Day",
          space: "12Km",
          buttonText: "Details",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097455/white-car_vfl2mw.png",
        },
        {
          title: "KIA UX",
          price: "$140/Day",
          space: "12Km",
          buttonText: "Details",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097459/car5_gini6n.png",
        },
        {
          title: "BMW UX",
          price: "$100/Day",
          space: "12Km",
          buttonText: "Details",
          imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097461/car6_ohp1ia.png",
        },
      ],
      buttonText: "Get Started",
    },

    testimonials: {
      title: "What Our Clients Say About Us",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure consectetur tempora amet.",
      testimonials: [
        {
          name: "Dilshad",
          star: "⭐⭐⭐⭐⭐",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          imgUrl: "https://picsum.photos/200.jpg",
        },
        {
          name: "Satya",
          star: "⭐⭐⭐⭐⭐",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          imgUrl: "https://picsum.photos/200.jpg",
        },
        {
          name: "Sabir",
          star: "⭐⭐⭐⭐⭐",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          imgUrl: "https://picsum.photos/200.jpg",
        },
      ],
    },

    cta1: {
      title: "Get Started with our app",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique magnam harum accusantium odit?",
      bannerImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708098410/pattern_t0naia.jpg",
      appStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090485/app_store_s6wzhh.png",
      playStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090481/play_store_nmzfln.png",
    },

    cta2: {
      title: "Let's collaborate on your upcoming car rental venture",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem necessitatibus quasi et vel,",
      linkText: "Contact",
      url: "#",
    },

    footer: {
      title: "Car Rental",
      description: "Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, voluptate.",
      contacts: [
        {
          value: "55 East Birchwood Ave. Brooklyn, New York 11201",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707781362/icons8-location-arrow-24_mwjabu.png",
        },
        {
          value: "(123) 125-858",
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
      ],
      footerSections: [
        {
          title: "Important Links",
          links: [
            { title: "Home", url: "#" },
            { title: "About", url: "#" },
            { title: "Contact", url: "#" },
            { title: "Blog", url: "#" },
          ],
        },
        {
          title: "Links",
          links: [
            { title: "Home", url: "#" },
            { title: "About", url: "#" },
            { title: "Contact", url: "#" },
            { title: "Blog", url: "#" },
          ],
        },
        {
          title: "location",
          links: [
            { title: "Home", url: "#" },
            { title: "About", url: "#" },
            { title: "Contact", url: "#" },
            { title: "Blog", url: "#" },
          ],
        },
      ],
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice18",
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

export const templateActions18 = templateSlice18.actions;
export default templateSlice18.reducer;

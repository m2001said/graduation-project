import { createSlice } from "@reduxjs/toolkit";
import { addElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice = createSlice({
  initialState: {
    navbar: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701811960/templates/template_one/Logo_mj7rvw.png",
      links: ["home", "pages", "services", "projects", "blog", "contact"],
    },
    hero: {
      title: "Let Your Home Be Unique",
      description: "There are many variations of the passages of lorem Ipsum from available, variations of the passages.",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808857/templates/template_one/Photo_3_jpjtdv.jpg",
      buttonText: "Get Started",
      icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
    },
    services: {
      services: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_one_xvd7d6.svg",
          title: "Project Plan",
          description: "There are many variations of the passages of lorem Ipsum from available, majority.",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_two_dptua1.svg",
          title: "Interior Work",
          description: "There are many variations of the passages of lorem Ipsum from available, majority.",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808099/templates/template_one/icon_three_v71ltg.svg",
          title: "Realization",
          description: "There are many variations of the passages of lorem Ipsum from available, majority.",
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
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
      ],

      // icons: [
      //   {
      //     icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813236/templates/template_one/Call_gqvv4l.svg",
      //   },
      //   {
      //     icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
      //   },
      // ],
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813388/templates/template_one/Photo_sonnlx.jpg",
    },
    testimonials: {
      title: "What the People Thinks About Us",
      cards: [
        {
          name: "Nattasha Mith",
          location: "Sydney, USA",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
          opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
        },
        {
          name: "Raymond Galario",
          location: "Sydney, Australia",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
          opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
        },
        {
          name: "Benny Roll ",
          location: "Sydney, New York",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808853/templates/template_one/Photo_1_zsyklb.jpg",
          opinion: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
        },
      ],
    },
    logos: {
      companies: [
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/01_p78hjd.svg", company_URL: "https://x.com" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/02_mnw1ps.svg", company_URL: "https://x.com" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808448/templates/template_one/03_fiplpx.svg", company_URL: "https://x.com" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/04_pg8flc.svg", company_URL: "https://x.com" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808449/templates/template_one/05_prt3gi.svg", company_URL: "https://x.com" },
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
    statistics: {
      statistics: [
        {
          title: "Years Of Experience",
          value: "12",
        },
        {
          title: "Success Projects",
          value: "85",
        },
        {
          title: "Active Projects",
          value: "15",
        },
        {
          title: "Happy Customers",
          value: "95",
        },
      ],
    },
    items: {
      title: "Articles & News",
      description:
        "It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.",
      cards: [
        {
          title: "Let’s Get Solution For Building Construction Work",
          description: "26 December,2022 ",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718041/templates/template_one/article1.f88f54e6a4cdbf340b36_l3ujjw.png",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          caption: "Kitchan Design",
        },
        {
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          description: "22 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article2.43be768543cb8cfeaf07_atvwjd.png",
          caption: "Living Design",
        },
        {
          title: "Best For Any Office & Business Interior Solution",
          description: "25 December,2022 ",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718889/templates/template_one/Vector_5_nzmfwn.svg",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701718042/templates/template_one/article3.f759fde0c85f3fb92b22_c2tqkv.png",
          caption: "Interior Design",
        },
      ],
    },
    team: {
      title: "Our Team Members",
      cards: [
        {
          id: "262024507",
          name: "Nattasha",
          location: "Design, Australia",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808855/templates/template_one/Photo_fz8cuc.jpg",
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
          email: "julie@email.com",
        },
        {
          id: "262024508",
          name: "Julie",
          location: "Design, Australia",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808855/templates/template_one/Photo_fz8cuc.jpg",
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
          email: "julie@email.com",
        },
        {
          id: "262024509",
          name: "Alex",
          location: "Design, Australia",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808855/templates/template_one/Photo_fz8cuc.jpg",
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
          email: "julie@email.com",
        },
        {
          name: "John",
          location: "Design, Australia",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701808855/templates/template_one/Photo_fz8cuc.jpg",
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
          email: "julie@email.com",
        },
      ],
    },
    pricing: {
      title: "Pricing & Plan",
      description: "Home / Priceing",
      blocks: [
        {
          plan: "Design advices",
          price: "29",
          timeUnit: "/month",
          moneyUnit: "$",
          features: ["General living space advices", "Renovation advices", "Interior design advices", "Furniture reorganization", "Up to 5 hours meetings"],
          buttonText: "Get Started",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
        {
          plan: "Complete interior",
          price: "39",
          timeUnit: "/month",
          moneyUnit: "$",
          PopularPlan: "Most Popular Plans",
          features: ["Complete home redesign", "Interior and exterior works", "Modular interior planning", "Kitchen design", "Garages organization"],
          buttonText: "Get Started",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
        {
          plan: "Furniture design",
          price: "59",
          timeUnit: "/month",
          moneyUnit: "$",
          features: ["Furniture for living room", "Furniture refurbishment", "Sofas and armchairs", "Tables and chairs", "Kitchens"],
          buttonText: "Get Started",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
        },
      ],
    },
    cta: {
      title: "Wanna join the interno?",
      description: "It is a long established fact  will be distracted.",
      buttonText: "Contact With Us",
      icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701813389/templates/template_one/Vector_5_vvvt2o.svg",
    },

    footer: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1701811960/templates/template_one/Logo_mj7rvw.png",
      description: "It is a long established fact that a reader will be distracted lookings.",
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
          title: "services",
          links: ["Kitchan,", "Living Area,", "Bathroom,", "Dinning Hall,", "Bedroom"],
        },
        {
          title: "section",
          links: ["About Us", " Projects", "Our Team", "Contact Us", "Services"],
        },
      ],
      contact: {
        title: "contact",
        location: "55 East Birchwood Ave. Brooklyn, New York 11201",
        email: "contact@interno.com",
        phone: "(123) 125-858",
      },
    },
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice",
  reducers: {
    updateTemplate: (state, action) => {
      editElement(state, action);
    },
    addNewElement: (state, action) => {
      addElement(state, action);
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

export const templateActions1 = templateSlice.actions;
export default templateSlice.reducer;

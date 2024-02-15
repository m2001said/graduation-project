import { createSlice } from "@reduxjs/toolkit";

const templateSlice13 = createSlice({
  initialState: {
    navbar: {
      logo: {
        src: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/lighting_o2dsku.png",
        alt: "soliii.cs",
      },
      menuItems: [
        {
          text: "Design",
          link: "#",
        },
        {
          text: "About us",
          link: "#",
        },
        {
          text: "Projects",
          link: "#",
        },
        {
          text: "Contact team",
          link: "#",
        },
        {
          text: "Reviews",
          link: "#",
        },
      ],
      language: "EN",
      languageDropdownIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347079/mdmaximize_prmvgd.png",
      profileIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      close: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707347076/icons8-close_ozpkst.svg",
      bars: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707951170/menu-bar_q4qwbp.png",
      contactButton: {
        text: "Contact us",
        dropdownIcon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      },
    },

    hero: {
      title: "Architects with different approach",
      subtitle: "Architecture is the art & technique of designing and building, as distinguished from the skills",
      servicesButtonText: "Our Services",
      projectsButtonText: "View Projects",
      num: "+75.8%",
      icon: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      images: {
        main: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937284/3_tx6g05.jpg",
        secondary: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937130/4_rjddpl.jpg",
      },
    },
    services: {
      blocks: [
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
    feature: {
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

    testimonials: {
      heading1: "What our  ",
      heading2: "Clients",
      heading3: "say's",
      arrowR: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      arrowL: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707977502/leftArrow_w76yfj.png",
      p1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      p2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",
      p3: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar2_lgwr3o.jpg",
      p4: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134020/avatar3_pbztwn.jpg",

      name1: "ahmed",
      name2: "nader",
      name3: "shiko",
      name4: "body",

      title1: "CEO at AST",
      title2: "CEO at AST",
      title3: "CEO at AST",
      title4: "CEO at AST",

      desc1: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      desc2: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      desc3: "We would like to take the opportunity to express our delights with the ways things are progressing.",
      desc4: "We would like to take the opportunity to express our delights with the ways things are progressing.",
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
    statistic: {
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

    projects: {
      title: "Our recent works",
      heading: "Our completed projects",
      img1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937447/pexels-ben-neale-380337_yuphlv.jpg",
      title1: "lorem epsum dolor",
      desc1: "New Cairo",

      img2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937141/pexels-nubia-navarro-_nubikini_-3221215_wtzq4w.jpg",
      title2: "lorem epsum dolor",
      desc2: "Luxor",

      img3: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937146/pexels-pixabay-262367_b0ixae.jpg",
      title3: "lorem epsum dolor",
      desc3: "New Giza",

      arrup: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",
      arrR: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      load: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707553370/klipartz.com_z2zhsv.png",
      OurNewsletter: "Our Newsletter",
      Subscribeourdaily: "Subscribe our daily",
      Newsletter: "Newsletter",
      forupdate: "for update",
      Subs: "Subscribe",
      subsdesc: "lorem epsum dolor es ma affection ad as as dsa",

      logo1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
      logo1talk: "zizozizo ",
      logo2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
      logo2talk: "mm eee ",
      logo4: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975425/icons8-bird-64_kofuu5.png",
      logo4talk: "daasdng",
      logo3: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707975424/sphere_dfb95n.png",
      logo3talk: "hng",
      logo5: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703129091/icons8-stars-50_o1lg9s.png",
      logo5talk: "swdng",
    },

    about1: {
      title: "What we do",
      subtitle: "Bringing new life to old ",
      subdecorated: " processes",
      icon1: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959654/tree_qh0bvu.png",
      icon1title: "Interior design",
      icon1description: "Interior design is the art and science of enhancing vision",

      icon2: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959653/holding-hand_1_ip0t5r.png",
      icon2title: "Construction",
      icon2description: " The technique , procedure , and materials used during ",

      icon3: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707601512/star_qhtqlz.png",
      icon3title: "Decoration",
      icon3description: " The technique , procedure , and materials used during ",
      icon4: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707969311/diamond_zuwa12.png",
      icon4title: "Architectural",
      icon4description: " lorem ipsum dolor aas asaas est mi ",
    },
    about2: {
      image: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707937162/5_ookc7e.jpg",
      arrow: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707959810/up-arrow_dfq1o8.png",
      arrowR: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707952901/right-arrow_1_y7iz2i.png",
      title: "Our architects journey",
      heading: " Beautiful acoustics &",
      headingcont: "Achievements",
      subtitle:
        "  Studying Architecture is demanding and is rated as one of the most challenging courses at the university. It requires long hours, commitment, and a seven-year study period",
      awards: "10",
      experience: "14",
      projects: "142",
    },
    footer: {
      facbeook: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/meta-logo-facebook-svgrepo-com_zom99z.svg",
      linked: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134254/linkedin-svgrepo-com_dpxquk.svg",
      instagram: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1703134255/socialmedia-svgrepo-com_na36wp.svg",
      twitter: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707987495/icons8-twitterx-50_1_ggrau2.png",
      bolt: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707938679/lightning_h1zfze.png",
      ArrR: "https://res.cloudinary.com/dowtlcpxj/image/upload/v1707346109/realestate/next_2989988_stvovd.png",
      Name: "Soly.io ",
      desc: "Architecture with understanding people minds",
      connectp1: "Get in touch",
      connectp2: "Contact us",

      privacy: "privacy policy",
      rights: "All rights reserved ®",
      conditions: "Terms & conditions ®",

      home: "home",
      design: "Design",
      projects: "Projects",
      Follow: "Follow us ",
      about: "About us",
      award: "Award",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice13",
  reducers: {
    updateTemplate13: (state, action) => {
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

export const { updateTemplate13 } = templateSlice13.actions;
export default templateSlice13.reducer;

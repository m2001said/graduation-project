import { createSlice } from "@reduxjs/toolkit";

const templateSlice15 = createSlice({
  initialState: {
    navbar: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799023/jammal_photos/wz8vakvjdjio0wcqhnfe.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799683/jammal_photos/msugi233fn6vkrra5x9f.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1706799720/jammal_photos/jx9bn26thzu46apznikl.svg",
      ],
      items: [
        {
          id: "home",
          title: "Home",
        },
        {
          id: "services",
          title: "Services",
        },
        {
          id: "skills",
          title: "Skills",
        },
        {
          id: "works",
          title: "Works",
        },
        {
          id: "resume",
          title: "Resume",
        },
        {
          id: "testimonals",
          title: "Testimonials",
        },
        {
          id: "pricing",
          title: "Pricing",
        },
        {
          id: "blog",
          title: "Blog",
        },
        {
          id: "contact",
          title: "Contact",
        },
      ],
    },

    hero: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017251/jammal_photos/z8h6g9lv2sxmywvygcts.png",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png",
      ],
      title: {
        title1: "HELLO",
        title2: "MY NAME IS",
        title3: "ZOE",
        title4: "MILLER",
        title5: "I AM",
        title6: "Web Developer",
        descA: "From France, Paris. I have right experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
      },
      btn: {
        text: "DOWNLOAD CV",
        paragraf: "MY SKILLS",
      },
      sub_title: {
        sub_title1: "12",
        sub_title2: "+",
        sub_title3: "YEARS OF",
        sub_title4: "EXPERIENCE",
        sub_title5: "330",
        sub_title6: "COMPLETED",
        sub_title7: "PROJECTS",
      },
    },
    services: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
      Card1: {
        title: "Web Development",
        sub_title: "Web Design & Logo",
        text: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
      },
      Card2: {
        title: "Apps Development",
        sub_title: "iOS & Android",
        text: "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
      },
      Card3: {
        title: "Game Development",
        sub_title: "Unity & Unreal Engine ",
        text: "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
      },
      btn: {
        btn15_Text: " See Pricing",
      },
      title: {
        t1: "WHAT I DO",
        t2: "My",
        t3: "Services",
      },
    },

    feature: {
      paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      title: {
        title1: "PROFESSIONAL SKILLS",
        title2: "My",
        title3: "Talent",
      },
      sub_title: {
        title1: "PHP",
        title2: "JavaScript",
        title3: "WordPress",
        title4: "Python",
        title5: "React",
        title6: "Adobe XD",
      },
      percentage: {
        percentage1: "85",
        percentage2: "75",
        percentage3: "90",
        percentage4: "75",
        percentage5: "70",
        percentage6: "85",
      },
    },

    projects: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",

      title: {
        title1: "PROTFOLIO",
        title2: "My",
        title3: "Cases",
        title4: "See Pricing",
      },
      links: {
        link1: "All",
        link2: "VIDEO",
        link3: "PHOTOGRAPHY",
        link4: "BRANDING",
      },
      Card1: {
        title: "BRANDING",
        sub_title: "Zorro",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      Card2: {
        title: "BRANDING",
        sub_title: "Gooir",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      Card3: {
        title: "VIDEO",
        sub_title: "Explore",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      Card4: {
        title: "VIDEO",
        sub_title: "Stay Fit",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      Card5: {
        title: "PHOTOGRAPHY",
        sub_title: "Kana",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      Card6: {
        title: "PHOTOGRAPHY",
        sub_title: "Mozar",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      },
      btn15: {
        btn_text: " VIEW MORE",
      },
    },
    cta: {
      title: {
        title1: "RESUME",
        title2: "My",
        title3: "Story",
      },
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708028064/jammal_photos/dxfncgzlnm5uoeyhugkf.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708027950/jammal_photos/suloncptxwohoete98cr.png",
      ],
      cv: [
        {
          id: 1,
          title: "CoderHouse Courses",
          subtitle: "Backend Programming",
          date: "2014 - 2016",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "education",
        },
        {
          id: 2,
          title: "Lviv National Academy of Arts",
          subtitle: "Faculty of Design",
          date: "2012 - 2014",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "education",
        },
        {
          id: 3,
          title: "IT Future",
          subtitle: "High School",
          date: "2010 - 2012",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "education",
        },
        {
          id: 4,
          title: "UI Head & Manager",
          subtitle: "Soft Tech Inc.",
          date: "2020 - 2022",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "experience",
        },
        {
          id: 5,
          title: "UI / UX Specialist",
          subtitle: "Kana Design Studio",
          date: "2018 - 2020",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "experience",
        },
        {
          id: 6,
          title: "Plugins Developer",
          subtitle: "Fiverr.com",
          date: "2016 - 2018",
          description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
          category: "experience",
        },
      ],
    },
    testimonial: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708029335/jammal_photos/vposir7tunyagdu3f9uq.svg",
      title: {
        title1: "Testimonials",
        title2: "WHAT",
        title3: "Customers Say",
        pargarf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Card1: {
        name: "Barbara Wilson",
        job: "CEO Company",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Card2: {
        name: "Charlie Smith",
        job: "Designer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Card3: {
        name: "Roy Wang",
        job: "Manager GYM",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Card4: {
        name: "Jennifer Smith",
        job: "CEO & Founder",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Card5: {
        name: "Paul Freeman",
        job: "Photographer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
    },
    pricing: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030355/jammal_photos/px8o2t9qtet1pumt2yip.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
      ],
      title: {
        title1: "PRICING",
        title2: "MY",
        title3: "Price Board",
        paragraf:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      },
      sub_title: {
        sub_title1: "Brand Design",
        sub_title2: "Web Development",
        sub_title3: "Advertising",
        sub_title4: "Photography",

        sub_title5: "Brand Design",
        sub_title6: "Web Development",
        sub_title7: "Advertising",
        sub_title8: "Photography",

        sub_title9: "Brand Design",
        sub_title10: "Web Development",
        sub_title11: "Advertising",
        sub_title12: "Photography",
      },
      btn_text: {
        btn1: "START PROJECT",
      },
      Card1: {
        amount: "39",
        title: "HOURLY BASIS",
        duration: "hour",
      },
      Card2: {
        amount: "259",
        title: "FREELANCING ",
        duration: "Week",
      },
      Card3: {
        amount: "1.249",
        title: "FULL TIME ",
        duration: "Month",
      },
    },
    blog: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",

      title: {
        title1: "LATEST BLOG",
        title2: "MY",
        title3: "Articles and Advice ",
        title4: "Read more ",
        paragraf:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
      },
      btn_text: {
        btn1: " VIEW BLOG ",
      },
      Card1: {
        data: "OCTOBER 31, 2022",
        title: "The Main Thing For The Designer",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942658/jammal_photos/lyixvtrnvyazsfa5yuje.jpg",
      },
      Card2: {
        data: "OCTOBER 31, 2022",
        title: "Follow Your Own Design Process",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942696/jammal_photos/yjikp3c1msirossmsu3d.jpg",
      },
      Card3: {
        data: "NOVEMBER 28, 2021",
        title: "Usability Secrets to Create Better Interfaces",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942724/jammal_photos/fiysz2n20varciifews5.jpg",
      },
    },

    contact: {
      title: {
        title1: "CONTACT ME ",
        title2: "LET'S ",
        title3: "Talk About Ideas",
      },
      labels: {
        label1: "YOUR FULL NAME *",
        label2: "YOUR EMAIL ADDRESS *",
        label3: "YOUR SUBJECT *",
        label4: "YOUR MESSAGE *",
      },
      btn_text: {
        btn1: "SEND MESSAGE",
      },
      Contact15_info1: {
        title: "Address",
        sub_title: "North Tower, Toronto, Canada",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      Contact15_info2: {
        title: "Freelance",
        sub_title: "Available Right Now",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      Contact15_info3: {
        title: "Email",
        sub_title: "Zoe.miller@mydomain.com",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
      Contact15_info4: {
        title: "Phone",
        sub_title: "+1 900 - 900 - 9000",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
      },
    },
    footer: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png",
      ],
      title: {
        title1: " Copyright Ⓒ 2022 ",
        title2: "LUIQUE",
        title3: ". ALL RIGHTS RESERVED ",
        title4: " DEVELOPED BY ",
        title5: " BSLTHEMES ",
      },
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },
  name: "templateSlice15",
  reducers: {
    updateTemplate15: (state, action) => {
      const { section, variable, value, i, blockName, subBlockName, subIndex, objKey } = action.payload;
      if (i === undefined) {
        if (variable === null) {
          state[section][blockName][objKey] = value;
        } else {
          state[section][variable] = value;
        }
      } else {
        if (subIndex === undefined) {
          if (variable === null) state[section][blockName][i] = value;
          else {
            if (subBlockName === undefined) {
              state[section][blockName][i][variable] = value;
            } else {
              state[section][blockName][i][subBlockName][variable] = value;
            }
          }
        } else {
          if (variable === null) state[section][blockName][i][subBlockName][subIndex] = value;
          else {
            state[section][blockName][i][subBlockName][subIndex][variable] = value;
          }
        }
      }
    },
  },
});

export const { updateTemplate15 } = templateSlice15.actions;
export default templateSlice15.reducer;

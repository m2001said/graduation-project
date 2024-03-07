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
        // {
        //   id: "works",
        //   title: "Works",
        // },
        // {
        //   id: "resume",
        //   title: "Resume",
        // },
        {
          id: "testimonals",
          title: "Testimonials",
        },
        // {
        //   id: "pricing",
        //   title: "Pricing",
        // },
        // {
        //   id: "blog",
        //   title: "Blog",
        // },
        {
          id: "contact",
          title: "Contact",
        },
      ],
    },

    hero: {
      imgUrl: ["https://res.cloudinary.com/duc04fwdb/image/upload/v1708017251/jammal_photos/z8h6g9lv2sxmywvygcts.png"],
      mainTitle: {
        title: "HELLO MY NAME IS",
        name: "ZOE MILLER",
        role: "I AM Web Developer",
        description: "From France, Paris. I have right experience in web design, also I am good at WordPress. I love to talk with you about our unique.",
      },
      mediaIcons: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png",
        },
      ],

      actionButton: {
        name: "DOWNLOAD CV",
        description: "MY SKILLS",
      },
      sub_title: {
        experience: "12 + YEARS OF EXPERIENCE",
        completedProjects: "330 COMPLETED PROJECTS",
      },
    },

    services: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
      titles: {
        title: "WHAT I DO",
        subtitle: "My Services",
      },
      actionButton: " See Pricing",
      Cards: [
        {
          title: "Web Development",
          sub_title: "Web Design & Logo",
          text: "Web designers craft the overall vision & plan for a website layout. Professional logo development: Business, Company, or Personal.",
        },
        {
          title: "Apps Development",
          sub_title: "iOS & Android",
          text: "Design Software applications to run on mobile devices. Modern and mobile-ready application that will help you reach all of your marketing.",
        },
        {
          title: "Game Development",
          sub_title: "Unity & Unreal Engine ",
          text: "Creating games & describes the design, development and release of a game. Developing unique mobile android and ios games. ",
        },
      ],
    },

    feature: {
      titles: {
        title: "PROFESSIONAL SKILLS",
        subtitle: "My Talent",
      },
      items: [
        {
          title: "PHP",
          percentage: "85",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "JavaScript",
          percentage: "65",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "WordPress",
          percentage: "60",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Python",
          percentage: "50",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "React",
          percentage: "70",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          title: "Adobe XD",
          percentage: "85",
          paragraf: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },

    projects: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708020289/jammal_photos/yd48mthnmtr9zswrqrms.png",
      titles: {
        title: "PROTFOLIO",
        subtitle: "My Cases",
      },
      actionButton: {
        pricing: "See Pricing",
        viewMore: "VIEW MORE",
      },
      links: [{ name: "All" }, { name: "VIDEO" }, { name: "PHOTOGRAPHY" }, { name: "BRANDING" }],

      Cards: [
        {
          title: "BRANDING",
          sub_title: "Zorro",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "BRANDING",
          sub_title: "Gooir",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "VIDEO",
          sub_title: "Explore",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "VIDEO",
          sub_title: "Stay Fit",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "PHOTOGRAPHY",
          sub_title: "Kana",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
        {
          title: "PHOTOGRAPHY",
          sub_title: "Mozar",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707863903/jammal_photos/rnu0jaturksoviadcjr6.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
        },
      ],
    },

    cta: {
      titles: {
        title: "RESUME ",
        sub_title: "My Story",
      },
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708028064/jammal_photos/dxfncgzlnm5uoeyhugkf.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708027950/jammal_photos/suloncptxwohoete98cr.png",
      ],
      items: [
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
      titles: {
        title: "Testimonials",
        subtitle: " WHAT Customers Say",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      Cards: [
        {
          name: "Barbara Wilson",
          job: "CEO Company",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Charlie Smith",
          job: "Designer",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Roy Wang",
          job: "Manager GYM",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Jennifer Smith",
          job: "CEO & Founder",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
          name: "Paul Freeman",
          job: "Photographer",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707919266/jammal_photos/sq5wudx05l26l781sjgf.jpg",
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
      ],
    },
    pricing: {
      imgUrl: [
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030355/jammal_photos/px8o2t9qtet1pumt2yip.svg",
        "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
      ],
      actionButton: "START PROJECT",
      titles: {
        title: "PRICING",
        subtitle: "MY Price Board",
        content:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.",
      },
      items: [
        {
          GraphicDesign: "Brand Design",
          Development: "Web Development",
          Marketing: "Advertising",
          VisualArts: "Photography",
        },
        {
          GraphicDesign: "Brand Design",
          Development: "Web Development",
          Marketing: "Advertising",
          VisualArts: "Photography",
        },
        {
          GraphicDesign: "Brand Design",
          Development: "Web Development",
          Marketing: "Advertising",
          VisualArts: "Photography",
        },
      ],
      Cards: [
        {
          amount: "39",
          title: "HOURLY BASIS",
          duration: "hour",
        },
        {
          amount: "259",
          title: "FREELANCING ",
          duration: "Week",
        },
        {
          amount: "1.249",
          title: "FULL TIME ",
          duration: "Month",
        },
      ],
    },
    blog: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708030465/jammal_photos/capby7kt0b8mwxgzf3hs.png",
      titles: {
        title: "LATEST BLOG",
        subtitle: " MY Articles and Advice ",
        content:
          "Vivamus interdum suscipit lacus. Nunc ultrices accumsan matties. Aliguam vel sem vel velit efficer malesuda. Donec arcu lacus, ornare rget...",
      },
      Buttons: {
        actionButton: "Read more ",
        VIEW: " VIEW BLOG ",
      },
      Cards: [
        {
          data: "OCTOBER 31, 2022",
          title: "The Main Thing For The Designer",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942658/jammal_photos/lyixvtrnvyazsfa5yuje.jpg",
        },
        {
          data: "OCTOBER 31, 2022",
          title: "Follow Your Own Design Process",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942696/jammal_photos/yjikp3c1msirossmsu3d.jpg",
        },
        {
          data: "NOVEMBER 28, 2021",
          title: "Usability Secrets to Create Better Interfaces",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707942724/jammal_photos/fiysz2n20varciifews5.jpg",
        },
      ],
    },

    contact: {
      titles: {
        title: "CONTACT ME ",
        subtitle: "LET'S  Talk About Ideas",
      },
      labels: {
        NAME: "YOUR FULL NAME *",
        ADDRESS: "YOUR EMAIL ADDRESS *",
        SUBJECT: "YOUR SUBJECT *",
        MESSAGE: "YOUR MESSAGE *",
      },
      items: [
        {
          title: "Address",
          sub_title: "North Tower, Toronto, Canada",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
        },
        {
          title: "Freelance",
          sub_title: "Available Right Now",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
        },
        {
          title: "Email",
          sub_title: "Zoe.miller@mydomain.com",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
        },
        {
          title: "Phone",
          sub_title: "+1 900 - 900 - 9000",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1707946243/jammal_photos/mc5lc3k5hntokrcqgvgq.png",
        },
      ],
      actionButton: "SEND MESSAGE",
    },
    footer: {
      icons: [
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017487/jammal_photos/dov4re8wizaegdj3jiza.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017404/jammal_photos/ihzghh1idyxmj1u4vk9r.svg" },
        { imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708017568/jammal_photos/hpyyah3zyuwxvydg7dnw.png" },
      ],
      titles: {
        title: " Copyright Ⓒ 2022 LUIQUE . ALL RIGHTS RESERVED ",
        subtitle: " DEVELOPED BY BSLTHEMES",
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

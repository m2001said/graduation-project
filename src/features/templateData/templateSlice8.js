import { createSlice } from "@reduxjs/toolkit";
const templateSlice8 = createSlice({
  initialState: {
    navbar: {
      links: ["Home", "About", "Services", "Work", "Contact"],
    },
    header: {
      UrlImg: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708041079/jammal_photos/kafyeopqrooe1smkwiec.svg",
      btnText: "Work with me",
    },
    hero: {
      Name: ["BEN", "AIDEN"],
      jop: ["I Am a ", "DEVELOPER"],
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia sequi vel tempora aut voluptatibus accusantium est voluptate perspiciatis omnis assumenda.",
      btnText: "contact me",
      linktext: "My portofolio",
      UrlImg: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708040859/jammal_photos/h7mk6aclys26ylh20hxk.svg",
      soialContact: ["🚀", "💻", "🎨"],
    },
    about: {
      title: "About",
      jopTitle: "I'm a Freelance Frontend Developer with over 5 years of experience.",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora accusamus porro tempore quibusdam ab nesciunt voluptatum magnam doloribus corrupti molestiae.",
      numbers: ["13", "15", "12"],
      sign: ["+", "+", "+"],
      type: ["Years of", "Projects", "Satisfied"],
      typeOfExpericnce: ["Experience", "Completed", "Clients"],
      btnText: "Contact me",
      linktext: "My portofolio",
      UrlImg: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708042892/jammal_photos/ui2jxaq52dfjtffndkjq.png",
    },

    // services data
    Services: {
      title: "WHAT I DO.",
      titleDescription: "I'm a Freelance Frontend Developer with over 5 years of experience.",
      btnText: "see my work ",
      Data: [
        {
          name: "UI/UX Design",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Development",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Digital Marketing",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
        {
          name: "Product Branding",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui recusandae commodi obcaecati minus quibusdam laudantium sunt doloribus dicta quidem quas!",
          link: "Learn more",
        },
      ],
    },

    work: {
      projects: [
        {
          UrlImg: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708272971/jammal_photos/w5rnjea8huwe5pgrazeg.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
        {
          UrlImg: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708273069/jammal_photos/exhaactq1fplnnapxrwc.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
        {
          UrlImg: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708273131/jammal_photos/eww7hd9cpv5mkxwkasyy.png",
          pretitle: "UI/UX Design",
          title: "Project Title",
        },
      ],
      title: "MY WORK.",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi laborum eius qui recusandae possimus. Dolorem quam illo impedit sunt fugiat",
      btnText: "View all projects",
    },
    Contact: {
      title: "  Let's work  together!",
      subtitle: "Get in touch",
      btnText: "Send message",
    },

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
    backgroundImage: {
      site: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030305/jammal_photos/hfeutnseoqs0gsa2kx2u.jpg')",
      about: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708030938/jammal_photos/zxvali7en6j98kruxig5.png')",
      services: "url('https://res.cloudinary.com/duc04fwdb/image/upload/v1708031587/jammal_photos/lidxpp6o8dtr95ajdv5t.png')",
    },
  },

  name: "templateSlice8",
  reducers: {
    updateTemplate8: (state, action) => {
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

export const { updateTemplate8 } = templateSlice8.actions;
export default templateSlice8.reducer;

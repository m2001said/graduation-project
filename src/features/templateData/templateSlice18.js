import { createSlice } from "@reduxjs/toolkit";
const templateSlice18 = createSlice({
  initialState: {
    navbar18: {
      title: "Car Rental",
      links: [
        {
          name: "HOME",
          link: "/#",
        },
        {
          name: "CARS",
          link: "/#cars",
        },
        {
          name: "ABOUT",
          link: "/#about",
        },
        {
          name: "BOOKING",
          link: "/#booking",
        },
      ],
      lightIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092466/icons8-sun-24_oonunj.png",
      darkIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092459/icons8-moon-symbol-30_chxqrj.png",
      menuIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708092472/icons8-menu-32_ixhdzw.png",
    },

    hero18: {
      lightImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094043/banner-car_nzxi5c.png",
      darkImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094046/car_wnmkfa.png",
      smTitle: "Effortless",
      title: "Car Rental",
      Description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione veritatis explicabo quibusdam quae reprehenderit ab",
      buttonText: "Get Started",
    },

    feature18: {
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708094582/car1_yzpkby.png",
      title: "About us",
      description1: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, magnam! Tenetur odio quo et maxime?",
      description2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, tempora.",
      buttonText: "Get Started",
    },
    services18: {
      title: "Why Choose Us",
      blocks: [
        {
          name: "Best Price",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095320/icons8-compact-camera-24_sbvw3e.png",
          auther: "Learn more",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          name: "Fast and Safe",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095302/icons8-notebook-32_wp5emo.png",
          auther: "Learn more",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          name: "Experience Drivers",
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708095310/icons8-microsoft-onenote-24_jrkmre.png",
          auther: "Learn more",
          link: "#",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
      ],
    },

    projects18: {
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor iure nemo ab?",
      cards: [
        {
          name: "BMW UX",
          price: "$100/Day",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097455/white-car_vfl2mw.png",
          space: "12Km",
          Details: "Details",
        },
        {
          name: "KIA UX",
          price: "$140/Day",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097459/car5_gini6n.png",
          space: "12Km",
          Details: "Details",
        },
        {
          name: "BMW UX",
          price: "$100/Day",
          image: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708097461/car6_ohp1ia.png",
          space: "12Km",
          Details: "Details",
        },
      ],
      buttonText: "Get Started",
    },

    testimonial18: {
      title: "What Our Clients Say About Us",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure consectetur tempora amet.",
      cards: [
        {
          name: "Dilshad",
          star: "⭐⭐⭐⭐⭐",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          name: "Satya",
          star: "⭐⭐⭐⭐⭐",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
        {
          name: "Sabir",
          star: "⭐⭐⭐⭐⭐",
          image: "https://picsum.photos/200",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        },
      ],
    },

    cta18_1: {
      title: "What Our Clients Say About Us",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis iure consectetur tempora amet.",
      bannerImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1708098410/pattern_t0naia.jpg",
      AppStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090485/app_store_s6wzhh.png",
      PlayStoreImg: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1707090481/play_store_nmzfln.png",
    },

    cta18_2: {
      title: "Let's collaborate on your upcoming car rental venture",
      description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem necessitatibus quasi et vel,",
      linkTxt: "Contact",
      link: "#",
    },

    footer18: {
      title: "Car Rental",
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

    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice18",
  reducers: {
    updateTemplate18: (state, action) => {
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

export const { updateTemplate18 } = templateSlice18.actions;
export default templateSlice18.reducer;
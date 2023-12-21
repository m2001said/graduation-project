import { createSlice } from "@reduxjs/toolkit";
const templateSlice5 = createSlice({
  initialState: {
    navbar5: {
      navIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703105956/consul_rkcykw.jpg",
      singInTxt: "Sing In",
      singOutTxt: "Sing Out",
      supporttTxt: "Support",
      LanguageTxt: "Languages",
      supportIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703107835/phone-vibrate-svgrepo-com_s5tcqs.svg",
      LanguageIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703108600/AiOutlineGlobal_thftuk.svg",
      menuIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703106705/menu-svgrepo-com_mgpt72.svg",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
      links: ["Home", "About", "Offers", "Seats", "Destiations"],
      buttonTxt: "contact",
    },

    hero5: {
      title: "Create Ever-lasting Memories With us",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703110738/takeOff_znaedp.png",
      videoUrl: "https://res.cloudinary.com/dmcdea0b9/video/upload/v1703110566/heroVideo_z23a38.mp4",
    },

    feature5_1: {
      smallTitle: "travel support",
      title: "Plan your travel with confidence",
      description: "find help with booking and travel plans, see what to expect the journey",
      blocks: [
        {
          number: "01",
          title: "Travel requirement for Dubai",
          description: "Find help with booking and travel plans, see what to expect during the journey.",
          duration: 2500,
        },
        {
          number: "02",
          title: "Travel requirement for Dubai",
          description: "Find help with booking and travel plans, see what to expect during the journey.",
          duration: 3500,
        },
        {
          number: "03",
          title: "Travel requirement for Dubai",
          description: "Find help with booking and travel plans, see what to expect during the journey.",
          duration: 4500,
        },
      ],
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703111688/R_aejs2k.jpg",
    },

    services5: {
      title: "Travel to make memories all around the world",
      buttonTxt: "View all",
      blocks: [
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114489/calendar_ry8vjw.svg",
          title: "Book & Relax",
          description: "You can also call airlines from your phone and book aflight ticket",
        },
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114500/ShieldCheck_tmepkt.svg",
          title: "Smart & checklist",
          description: "You can also call airlines from your phone and book aflight ticket",
        },
        {
          icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703114509/BookmarkCheckFill_jwdtcd.svg",
          title: "Save more",
          description: "You can also call airlines from your phone and book aflight ticket",
        },
      ],
    },

    feature5_2: {
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703116246/fea5-2_q5na0z.jpg",
      title: "Unaccompanied minor lounge",
      blocks: [
        {
          head: "Help through the airport",
          description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
        },
        {
          head: "Priority Boarding",
          description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
        },
        {
          head: "Care on the fligh",
          description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
        },
        {
          head: "Chauffeur-drive service",
          description: "You can also call airlines from your phone and book aflight ticket to one of your faverite destinations",
        },
      ],
    },

    team5: {
      title: "Top travelers of this month!",
      cards: [
        {
          destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118167/paris_w35pqv.jpg",
          travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
          travelerName: "IsraTech",
          sociallink: "@Isratech",
        },
        {
          destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118212/dubia_tegcrp.jpg",
          travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
          travelerName: "IsraTech",
          sociallink: "@Isratech",
        },
        {
          destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118235/newYork_k8j1t0.jpg",
          travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
          travelerName: "IsraTech",
          sociallink: "@Isratech",
        },
        {
          destinationImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118167/paris_w35pqv.jpg",
          travelerImage: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703118040/user1_tjx7hg.jpg",
          travelerName: "IsraTech",
          sociallink: "@Isratech",
        },
      ],
    },

    cta5: {
      title: "Subscribe Newletter & get Latest News",
      inputPlaceholder: "enter your email addres",
      buttonText: "Subscribe",
    },

    footer5: {
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
      description: "Your mind shoud be stronger than your feeling, fly!",
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
          title: "Information",
          links: ["Home", "Explore", "Flight State", "Travel", "Check-In", "Manage your booking"],
        },
        {
          title: "Quick Guide",
          links: ["FAQ", "How To", "Features", "Baggage", "Route Map", "Our Communities"],
        },
        {
          title: "Information",
          links: ["Chauffer", "Our partners", "Destination", "Careers", "Transportation", "Programme Rules"],
        },
      ],
    },
  },

  name: "templateSlice5",
  reducers: {
    updateAll: (state, action) => {
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

export const { updateAll } = templateSlice5.actions;
export default templateSlice5.reducer;

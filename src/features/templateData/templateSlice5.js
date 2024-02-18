import { createSlice } from "@reduxjs/toolkit";
import { addElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice5 = createSlice({
  initialState: {
    navbar: {
      menuIcon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703106705/menu-svgrepo-com_mgpt72.svg",
      icon: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703101139/logo_ytwn3z.jpg",
      links: ["Home", "About", "Offers", "Seats", "Destiations"],
      buttonTxt: "contact",
    },

    hero: {
      title: "Create Ever-lasting Memories With us",
      imgUrl: "https://res.cloudinary.com/dmcdea0b9/image/upload/v1703110738/takeOff_znaedp.png",
      videoUrl: "https://res.cloudinary.com/dmcdea0b9/video/upload/v1703110566/heroVideo_z23a38.mp4",
    },

    features1: {
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

    services: {
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

    features2: {
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

    team: {
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

    cta: {
      title: "Subscribe Newletter & get Latest News",
      inputPlaceholder: "enter your email addres",
      buttonText: "Subscribe",
    },

    footer: {
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
    colors: {
      templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
    },
  },

  name: "templateSlice5",
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

export const templateActions5 = templateSlice5.actions;
export default templateSlice5.reducer;

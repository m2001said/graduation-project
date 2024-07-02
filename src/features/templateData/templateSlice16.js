import { createSlice } from "@reduxjs/toolkit";
import { updateSchema } from "./actions";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const initialState = {
  templateInfo: {
    id: 16,
    title: "",
    description: "",
    imgUrl: "",
  },
  navbar: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708464166/jammal_photos/pzfqcxfrr2cw4mvelbjd.png",
    links: [
      {
        name: "Home",
        url: "home",
      },
      {
        name: "About",
        url: "about",
      },
      {
        name: "Features",
        url: "features",
      },
      {
        name: "Menu",
        url: "menu",
      },
      {
        name: "Gallery",
        url: "gallery",
      },
      {
        name: "Chefs",
        url: "team",
      },
      {
        name: "Testimonials",
        url: "testimonials",
      },
    ],
  },
  hero: {
    title: "Discover Amazing Coffee House & Get Energy",
    subtitle: "Welcome To Coffero!",
    description:
      "There are many variations of passages available but the majority have suffered alteration in some form by injected humour or randomised words.",
    buttonText: "Check Menu",
    linkText: "Book Table",
  },
  about: {
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549637/jammal_photos/xg3omldwwfpdgfrmhzub.jpg",

    title: "Fresh Quality And Organic Tasty Coffee House For You",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't have look even slightly believable.",
    details: ["At vero eos et accusamus et iusto odio", "Established fact that a reader will be distracted", "Sed ut perspiciatis unde omnis iste natus sit"],
    buttonText: "Our Experts",
  },

  features: {
    title: "Our Best Features",
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708479391/jammal_photos/wscmwomccmc5jdnbwidf.png",
    features: [
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708478670/jammal_photos/ozb5izm9qn6poltumpwv.svg",
        title: "Free Shipping",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708478739/jammal_photos/leroe6brdemdsshw6dkw.svg",
        title: "Organic Certified",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708478826/jammal_photos/ohmjqysziwtxnl2vn7it.svg",
        title: "High Quality",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708478897/jammal_photos/q8ejj4bvar3fmxom1yft.svg",
        title: "Proper Roasting",
        description: "It is a long established fact that a reader will be by the readable content of a page looking at its layout.",
      },
    ],
  },
  galary: {
    galary: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708538315/jammal_photos/vma52kyndc9kydhebbww.jpg",
        title: "Cappuccino Arabica",
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708538390/jammal_photos/v0my6mfbimgsggvwl8bk.jpg",
        title: "Cappuccino Arabica",
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708538453/jammal_photos/v6l5xiezr7nzs69nufwf.jpg",
        title: "Cappuccino Arabica",
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708538524/jammal_photos/qtouornendbwkjyambyg.jpg",
        title: "Cappuccino Arabica",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708538585/jammal_photos/vteshmmqcgso0krkoaev.jpg",
        title: "Cappuccino Arabica",
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708538453/jammal_photos/v6l5xiezr7nzs69nufwf.jpg",
        title: "Cappuccino Arabica",
      },
    ],
  },
  items: {
    items: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539082/jammal_photos/fk4qk2x6enbuflmobk3f.jpg",
        title: "Americano Coffee",
        description: "Milk with vanilla flavored",
        price: 50.25,
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539149/jammal_photos/vxty3khh0dg6diuvtkyr.jpg",
        title: "Cappuccino Arabica",
        description: "Milk with vanilla flavored",
        price: 70.25,
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539214/jammal_photos/nhy4fuc3aprted46zsri.jpg",
        title: "Milk Cream Coffee",
        description: "Milk with vanilla flavored",
        price: 30.25,
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708539264/jammal_photos/t7lekgob4ens8rp487ml.jpg",
        title: "Special Raw Coffee",
        description: "Milk with vanilla flavored",
        price: 80.25,
      },
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708539326/jammal_photos/awnuzrxfhs0mkm8rsiyb.jpg",
        title: "Fresh Black Coffee",
        description: "Milk with vanilla flavored",
        price: 90.25,
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539385/jammal_photos/kwk22ufefvalgr2xc8c7.jpg",
        title: "Cappuccino Arabica",
        description: "Milk with vanilla flavored",
        price: 70.25,
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539589/jammal_photos/rfuzwhd1kjps1urpjbhd.jpg",
        title: "Milk Cream Coffee",
        description: "Milk with vanilla flavored",
        price: 120.25,
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708539796/jammal_photos/t1rctyrr8uszseyror1n.jpg",
        title: "Cold Coffee",
        description: "Milk with vanilla flavored",
        price: 40.25,
      },
    ],
  },
  Choose: {
    title: "Coffero Most Out Of Your Favorite & Tasty Coffe House",
    description:
      "There ara many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected humour or randomised words which don't look even slightly believable.",

    Choose: [
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708544662/jammal_photos/vmpmyjso1fy8iwc2mxzv.svg",
        title: "Awesome Aroma",
        description: "There ara many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708544732/jammal_photos/og60dt6hamluqmlyyi5u.svg",
        title: "Pure Grades",
        description: "There ara many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708544772/jammal_photos/dy9d7lt86x0uykpf3fdk.svg",
        title: "Healthy Coffee",
        description: "There ara many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some injected",
      },
    ],
    imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708544842/jammal_photos/s39yk1hre9kt36flguug.jpg",
  },
  statistics: {
    statistics: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549772/jammal_photos/cdulhjzrscft50xc9qpq.svg",
        value: "1500",
        title: "+ Total Branches",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549772/jammal_photos/cdulhjzrscft50xc9qpq.svg",
        number: "250",
        title: "+ Happy Customers",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549859/jammal_photos/fxwoqrv32nrigcejyzl9.svg",
        value: "120",
        title: "+ Professional Chefs",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549982/jammal_photos/lh9hadm3hvwv9zduqhm3.svg",
        value: "50",
        title: "+ Years Experience",
      },
    ],
  },
  offer: {
    title: "Special Offer For You",
    buttonText: "Order now ",
    offer: [
      {
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708546231/jammal_photos/oeale2ff1q06wkwmxled.jpg",
        title: "Cappuccino Arabica",
        discount: "Get 40% Offer",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708546311/jammal_photos/a0mnlnag2gk47lndpv94.jpg",
        title: "Cappuccino Arabica",
        discount: "Get 40% Offer",
        description:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its normal distribution layout.",
      },
    ],
  },
  team: {
    title: "Meet Our Experts",
    members: [
      {
        name: "Melissa Fie",
        job: "Senior Chef",
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708549637/jammal_photos/xg3omldwwfpdgfrmhzub.jpg",
      },
      {
        name: "Chad Smith",
        job: "Senior Chef",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549709/jammal_photos/nbrapiqruszc048xe8rx.jpg",
      },
      {
        name: "Arron Rodri",
        job: "Senior Chef",
        imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708549637/jammal_photos/xg3omldwwfpdgfrmhzub.jpg",
      },
      {
        name: "Annie Pinto",
        job: "Senior Chef",
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708549709/jammal_photos/nbrapiqruszc048xe8rx.jpg",
      },
    ],
    medias: [
      { icon: "🌐", url: "https://facebook.com" },
      { icon: "🐦", url: "https://twitter.com" },
      { icon: "🔗", url: "https://linkedin.com" },
      { icon: "▶️", url: "https://youtube.com" },
    ],
  },

  reservation: {
    title: "Book A Table",
    buttonText: "Book A Table",
    imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708555056/jammal_photos/irqxlw9ph3hzp28ipfv9.png",
    shape: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708555103/jammal_photos/vsurnwxgmf1bvfbgr5hu.png",
  },

  testimonials: {
    testimonials: [
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708545949/jammal_photos/kjcpvqovfxziihn6firi.jpg",
        title: "Reid E Butt",
        subtitle: "Customer",
        description:
          "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708546033/jammal_photos/lut9zyvwnctqytyriih9.jpg",
        title: "Parker Jimenez",
        subtitle: "Customer",
        description:
          "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708546089/jammal_photos/o9shd85cnsznypdcrf6k.jpg",
        title: "Sylvia H Green",
        subtitle: "Customer",
        description:
          "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      },
      {
        imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1708546154/jammal_photos/gxevdg3quyvcmcnrqoxh.jpg",
        title: "Gordon D Novak",
        subtitle: "Customer",
        description:
          "There are many variations passages of the available but the majority have suffered to the alteration in some form by injected of humour or randomised words.",
      },
    ],
  },

  footer: {
    description:
      "We are many variations of passages available, but the majority have suffered alteration in some form by injected humour words which don't look even slightly believable.",
    imgUrl: "	https://res.cloudinary.com/duc04fwdb/image/upload/v1708556947/jammal_photos/ddhmuvn3h3rycioxyiyd.png",
    contacts: [
      { value: "+2 123 654 7898", icon: "☎" },
      { value: "25/B Milford Road, New York", icon: "📍" },
      { value: "info@example.com", icon: "✉" },
    ],
    footerSections: [
      {
        title: "quickLinks",
        links: [
          { title: "About Us", url: "#about" },
          { title: "Menu", url: "#menu" },
          { title: "Features", url: "#features" },
          { title: "Gallery", url: "#gallery" },
          { title: "Team", url: "#team" },
          { title: "Reservation", url: "#reservation" },
        ],
      },
      {
        title: "openingHours",
        links: [
          { title: "About Us", url: "#" },
          { title: "Projects", url: "#" },
          { title: "Our Team", url: "#" },
          { title: "Contact Us", url: "#" },
          { title: "Services", url: "#" },
        ],
      },
    ],
    // medias: [
    //   { icon: "About Us", url: "#about" },
    //   { icon: "Menu", url: "#menu" },
    //   { icon: "Features", url: "#features" },
    //   { icon: "Gallery", url: "#gallery" },
    //   { icon: "Team", url: "#team" },
    //   { icon: "Reservation", url: "#reservation" },
    // ],
    // openingHours: [
    //   { day: "Saturday", time: "09AM - 06PM" },
    //   { day: "Monday", time: "09AM - 06PM" },
    //   { day: "Tuesday", time: "09AM - 06PM" },
    //   { day: "Wednesday", time: "09AM - 06PM" },
    //   { day: "Thursday", time: "09AM - 06PM" },
    //   { day: "Friday", time: "09AM - 06PM" },
    //   { day: "Sunday", time: "Closed" },
    // ],
    medias: [
      { icon: "📱", url: "https://www.facebook.com/" },
      { icon: "📷", url: "https://www.instagram.com/" },
      { icon: "🐦", url: "https://twitter.com/" },
      { icon: "🔗", url: "https://www.linkedin.com/" },
    ],
  },
  colors: {
    templateColors: ["#fff", "#cda274", "#292f36", "#f4f0ec", "#777777"],
  },
};
const templateSlice16 = createSlice({
  initialState,
  name: "templateSlice16",
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
    updateSchema: (state, action) => {
      updateSchema(state, action);
    },
  },
});

export const templateActions16 = templateSlice16.actions;
export { initialState };
export default templateSlice16.reducer;
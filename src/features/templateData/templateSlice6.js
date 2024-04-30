import { createSlice } from "@reduxjs/toolkit";
import { addElement, addElementToArray, addSubElement, deleteElement, deleteSection, editElement, reorder, reorderSections } from "./actions";
const templateSlice6 = createSlice({
  initialState: {
    templateInfo: {
      id: 6,
      title: "",
      description: "",
      imgUrl: "",
    },
    navbar: {
      logo: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706351943/jammal_photos/jicfizb2xdqr8hcgkmc4.png",
      searchIcon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095771/jammal_photos/kedw9coptwqkovrsssd1.svg",
      shoppingIcon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095842/jammal_photos/gehvutbyftfxemvoqmu8.svg",
      menuIcon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095877/jammal_photos/rwbeynsg3bftgrjqaqnf.svg",
      links: [
        {
          title: "Home",
          url: "#",
        },
        {
          title: "About",
          url: "#",
        },
        {
          title: "Menu",
          url: "#",
        },
        {
          title: "Recipes",
          url: "#",
        },
        {
          title: "Contact",
          url: "#",
        },
      ],
    },
    hero: {
      buttonText: "Explore Food",
      heros: [
        {
          id: "01",
          title: "Experience the Authentic Flavors",
          description: "Indulge in our simple and delicious dishes crafted with the finest ingredients. Your taste buds will thank you!",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096681/jammal_photos/eukd4unr2l7mwyllvmi9.png",
        },
        {
          id: "02",
          title: "Bring Joy to Your Taste Buds",
          description: "At our restaurant, we believe good food leads to great smiles. Explore our menu and discover a world of culinary delight.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096719/jammal_photos/j7y2zx8aolnucnu25dl4.png",
        },
        {
          id: "03",
          title: "Savor Every Bite, Create Memories",
          description: "Meet, eat, and enjoy the true taste of happiness. Our diverse menu ensures there's something for everyone to relish and remember.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096745/jammal_photos/j97dbol3pzuleeccxwdt.png",
        },
      ],
    },
    cardIcon: {
      shoppingIcon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095842/jammal_photos/gehvutbyftfxemvoqmu8.svg",
    },
    menu: {
      title: "Popular food menu",
      menus: [
        {
          id: "01",
          title: "Vegetable",
          price: 25,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098596/jammal_photos/n4r8kzctvhbymxmmydhq.png",
        },
        {
          id: "02",
          title: "Chicken",
          price: 250,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098694/jammal_photos/rbtige8oucnpqluq3b5j.png",
        },

        {
          id: "03",
          title: "Whipped Cream",
          price: 45,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098853/jammal_photos/zuclkds0uufzktzfeien.png",
        },

        {
          id: "04",
          title: "Pizza",
          price: 75,
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
        },
      ],
    },
    products: {
      menuTitle: "Our Menu Pack",
      filterContent: [
        {
          title: "FAST FOOD",
          content: [
            {
              id: "05",
              title: "Burger",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "06",
              title: "Chicken",
              price: 250,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "07",
              title: "Grill Chicken",
              price: 195,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "08",
              title: "Barbeque",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "09",
              title: "Pizza",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "10",
              title: "Burger",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "11",
              title: "Chicken",
              price: 250,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
            {
              id: "12",
              title: "Grill Chicken",
              price: 195,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099049/jammal_photos/nw1126s6ntsb3o2ohs3s.png",
            },
          ],
        },
        {
          title: "RICE MENU",
          content: [
            {
              id: "12",
              title: "Fried Rice",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "14",
              title: "Vegetable",
              price: 250,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "15",
              title: "Vegetable",
              price: 195,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "16",
              title: "Meal",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "17",
              title: "Fried Rice",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "18",
              title: "Vegetable",
              price: 250,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "19",
              title: "Vegetable",
              price: 195,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
            {
              id: "20",
              title: "Meal",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099126/jammal_photos/t6olygisps4ufz02fezk.png",
            },
          ],
        },
        {
          title: "DESSERT",
          content: [
            {
              id: "21",
              title: "Whipped Cream",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099235/jammal_photos/mwphxi7ujoec1c2krana.png",
            },
            {
              id: "22",
              title: "Cake Cream",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098853/jammal_photos/zuclkds0uufzktzfeien.png",
            },
            {
              id: "23",
              title: "Cake",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099235/jammal_photos/mwphxi7ujoec1c2krana.png",
            },
            {
              id: "24",
              title: "Cup Cake",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099335/jammal_photos/why415hwonyxffn1cyon.png",
            },
            {
              id: "25",
              title: "Whipped Cream",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099235/jammal_photos/mwphxi7ujoec1c2krana.png",
            },
            {
              id: "26",
              title: "Cake Cream",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098853/jammal_photos/zuclkds0uufzktzfeien.png",
            },
            {
              id: "27",
              title: "Cake",
              price: 50,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099235/jammal_photos/mwphxi7ujoec1c2krana.png",
            },
            {
              id: "28",
              title: "Cup Cake",
              price: 275,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099335/jammal_photos/why415hwonyxffn1cyon.png",
            },
          ],
        },
        {
          title: "PIZZA",
          content: [
            {
              id: "29",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "30",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "31",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "32",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "33",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "34",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },

            {
              id: "35",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
            {
              id: "36",
              title: "Pizza",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703098919/jammal_photos/bvipjezk42alazv5roew.png",
            },
          ],
        },
        {
          title: "COFFEE",
          content: [
            {
              id: "37",
              title: "Hot Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "38",
              title: "Cold Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "39",
              title: "Black Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "40",
              title: "White Coffee",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "41",
              title: "Hot Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "42",
              title: "Cold Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },

            {
              id: "43",
              title: "Black Coffee",
              price: 20,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
            {
              id: "44",
              title: "White Coffee",
              price: 95,
              imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703099401/jammal_photos/tb2lmnbq0imabiyxzsub.png",
            },
          ],
        },
      ],
    },
    features: {
      title: "Who we are?",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103180/jammal_photos/afcfogeancctcy4nhsfn.png",
      description: "Take a look at the benefits we offer you",
      info: "we prioritize your satisfaction. Our commitment to excellence is evident in the benefits we offer. ",
      cards: [
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103379/jammal_photos/wvvtn9lgn5k84md2jhtm.svg",
          title: "Free Home Delivery",
          description: "Enjoy free and timely home delivery. ",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103489/jammal_photos/rihmvtglekzcmjdavtbm.svg",
          title: "Return & Refund",
          description: "We guarantee a hassle-free return and refund process. ",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103560/jammal_photos/k3irnc1fhkmugeekjbol.svg",
          title: "Secure Payment",
          description: "Your transactions are securely processed. ",
        },
        {
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103423/jammal_photos/legalyoxmyba3arp5n3p.svg",
          title: "24/7 Hours Support",
          description: "We are here for you round the clock. ",
        },
      ],
    },
    testimonials: {
      title: "What our customers are saying",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703093874/jammal_photos/dwbzkjuoel7mlgqohppt.png",
      cards: [
        {
          content: "I'm impressed with the professionalism and quality of service. The team delivered beyond my expectations!",
          name: "Alice Johnson",
          role: "Marketing Manager",
        },
        {
          content: "Great experience working with this company. The attention to detail and dedication of the team is commendable.",
          name: "Bob Smith",
          role: "Business Owner",
        },
        {
          content: "The website they developed for us not only looks fantastic but also performs exceptionally well. Highly recommended!",
          name: "Emily Davis",
          role: "UX Designer",
        },
      ],
    },
    cta: {
      title: "Download our app",
      description: " Never Feel Hungry! Download Our Mobile App Order Delicious Food",
      info: "Experience the convenience of our mobile app, ensuring you never go hungry, Download now to order delicious food anytime, anywhere. ",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703105732/jammal_photos/lldrbchcloecmarn2bep.png",
      googleButton: {
        title: "Google Play",
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703106187/jammal_photos/bm7fqpnzrwtkawffbci3.svg",
      },
      appleButton: {
        title: "Apple Store",
        icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703106097/jammal_photos/gmyir4uguaz6ejvw3s3t.svg",
      },
    },
    footer: {
      logo: "https://res.cloudinary.com/duc04fwdb/image/upload/v1706351943/jammal_photos/jicfizb2xdqr8hcgkmc4.png",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095423/jammal_photos/x22ihnvjg9i0i40xtbo5.svg",
      description: "It is a long established fact that a reader will be distracted lookings.",
      copyright: "copyright 2022, developed by ana. All rights reserved",

      footerSections: [
        {
          title: "Info Links",
          links: [
            { title: "Terms & Conditions", url: "#" },
            { title: "Privacy Policy", url: "#" },
            { title: "Return & Refund", url: "#" },
            { title: "Payment Method", url: "#" },
          ],
        },
        {
          title: "Quick Links",
          links: [
            { title: "About Us", url: "#" },
            { title: "Menu", url: "#" },
            { title: "Recipes", url: "#" },
            { title: "Contact", url: "#" },
          ],
        },
      ],
      contacts: [
        {
          value: "Sylhet, Bangladesh",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703108316/jammal_photos/oe8rjvrg0ckgohix2b6v.svg",
        },
        {
          value: "example@gmail.com",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703108228/jammal_photos/opdhewds9do1znaaj5li.svg",
        },
        {
          value: "+880 123 456 7890",
          icon: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703108367/jammal_photos/y2583eh76th902gnzlje.svg",
        },
      ],
    },
    colors: {
      templateColors: ["#0a071a", "#141124", "#f76e11", "#f5b70a", "#fff", "#c4c4c4b5"],
    },
  },

  name: "templateSlice6",
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

export const templateActions6 = templateSlice6.actions;
export default templateSlice6.reducer;

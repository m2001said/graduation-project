import { createSlice } from "@reduxjs/toolkit";
const templateSlice6 = createSlice({
  initialState: {
    navbar: {
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703095423/jammal_photos/x22ihnvjg9i0i40xtbo5.svg",
      searchIcon:"https://res.cloudinary.com/duc04fwdb/image/upload/v1703095771/jammal_photos/kedw9coptwqkovrsssd1.svg",
      shoppingIcon:"https://res.cloudinary.com/duc04fwdb/image/upload/v1703095842/jammal_photos/gehvutbyftfxemvoqmu8.svg",
      menuIcon:"https://res.cloudinary.com/duc04fwdb/image/upload/v1703095877/jammal_photos/rwbeynsg3bftgrjqaqnf.svg",
      links: ["Home", "About", "Menu", "Recipes", "Contact"],
    },
    hero: {
      buttonText: "Explore Food",
      sliderData : [
        {
          id: "01",
          title: "Experience the Authentic Flavors",
          desc: "Indulge in our simple and delicious dishes crafted with the finest ingredients. Your taste buds will thank you!",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096681/jammal_photos/eukd4unr2l7mwyllvmi9.png", 
        },
        {
          id: "02",
          title: "Bring Joy to Your Taste Buds",
          desc: "At our restaurant, we believe good food leads to great smiles. Explore our menu and discover a world of culinary delight.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096719/jammal_photos/j7y2zx8aolnucnu25dl4.png", 
        },
        {
          id: "03",
          title: "Savor Every Bite, Create Memories",
          desc: "Meet, eat, and enjoy the true taste of happiness. Our diverse menu ensures there's something for everyone to relish and remember.",
          imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703096745/jammal_photos/j97dbol3pzuleeccxwdt.png", 
        },
      ],
    },
    product: {
      cartitemsTitle:"Popular food menu",
      popularMenuFood : [
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
      fastFoodProducts : [
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
      riceMenuProducts : [
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
      dessertProducts : [
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
      pizzaProducts : [
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
      coffeeProducts : [
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
    feature: {
      title: "Who we are?",
      imgUrl: "https://res.cloudinary.com/duc04fwdb/image/upload/v1703103180/jammal_photos/afcfogeancctcy4nhsfn.png", 
      description:
        "Take a look at the benefits we offer you",
      info:"we prioritize your satisfaction. Our commitment to excellence is evident in the benefits we offer. ",
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
    testimonial: {
      title: "What our customers are saying",
      imgUrl:"https://res.cloudinary.com/duc04fwdb/image/upload/v1703093874/jammal_photos/dwbzkjuoel7mlgqohppt.png",
      cards: [
        {
          content:
            "I'm impressed with the professionalism and quality of service. The team delivered beyond my expectations!",
          name: "Alice Johnson",
          role: "Marketing Manager",
        },
        {
          content:
            "Great experience working with this company. The attention to detail and dedication of the team is commendable.",
          name: "Bob Smith",
          role: "Business Owner",
        },
        {
          content:
            "The website they developed for us not only looks fantastic but also performs exceptionally well. Highly recommended!",
          name: "Emily Davis",
          role: "UX Designer",
        },
      ],
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
      title: "Our Team Members",
      cards: [
        {
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
  },

  name: "templateSlice6",
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

export const { updateAll } = templateSlice6.actions;
export default templateSlice6.reducer;

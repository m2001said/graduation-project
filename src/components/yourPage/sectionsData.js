import nav1 from "../../assets/images/navs/nav1.jpg";
import nav3 from "../../assets/images/navs/nav3.jpg";
import nav4 from "../../assets/images/navs/nav4.png";
import nav5 from "../../assets/images/navs/nav5.png";
import nav6 from "../../assets/images/navs/nav6.jpg";
import nav7 from "../../assets/images/navs/nav7.jpg";
import nav8 from "../../assets/images/navs/nav8.png";
import nav10 from "../../assets/images/navs/nav10.jpg";
import nav14 from "../../assets/images/navs/nav14.jpg";
import nav16 from "../../assets/images/navs/nav16.png";
import nav18 from "../../assets/images/navs/nav18.png";


import hero6 from "../../assets/images/hero6.png";
import hero14 from "../../assets/images/hero14.png";

const createData = (type, data) => {
  return data.map(item => ({
    id: item.id,
    name: `${type}${item.id}`,
    image: item.imgUrl,
    type
  }));
};

export const cartItemData = createData('CartItem', [
  { id: 6, imgUrl: "cartItem6.png" }
]);

export const heroData = createData('Hero', [
  { id: 1, imgUrl: hero14 },
  { id: 2, imgUrl: hero14 },
  { id: 3, imgUrl: hero14 },
  { id: 4, imgUrl: hero6 },
  { id: 5, imgUrl: hero14 },
  { id: 6, imgUrl: hero6 },
  { id: 7, imgUrl: hero14 },
  { id: 10, imgUrl: hero6 },
  { id: 11, imgUrl: hero14 },
  { id: 14, imgUrl: hero14 }
]);

export const ctaData = createData('Cta', [
  { id: 1, imgUrl: "cta1.png" },
  { id: 2, imgUrl: "cta2.png" },
  { id: 3, imgUrl: "cta3.png" },
  { id: 4, imgUrl: "cta4.png" },
  { id: 5, imgUrl: "cta5.png" },
  { id: 6, imgUrl: "cta6.png" },
  { id: 7, imgUrl: "cta7.png" },
  { id: 10, imgUrl: "cta10.png" },
  { id: 11, imgUrl: "cta11.png" }
]);


export const contactData = createData('Contact', [
  { id: 4, imgUrl: "contact4.png" },
  { id: 11, imgUrl: "contact11.png" }
]);

export const footerData = createData('Footer', [
  { id: 1, imgUrl: "footer1.png" },
  { id: 2, imgUrl: "footer2.png" },
  { id: 3, imgUrl: "footer3.png" },
  { id: 6, imgUrl: "footer6.png" },
  { id: 7, imgUrl: "footer7.png" },
  { id: 10, imgUrl: "footer10.png" },
  { id: 11, imgUrl: "footer11.png" },
  { id: 14, imgUrl: "footer14.png" }
]);

export const featureData = createData('Feature', [
  { id: 1, imgUrl: "feature1.png" },
  { id: 3, imgUrl: "feature3.png" },
  { id: 4, imgUrl: "feature4.png" },
  { id: 5, imgUrl: "feature5.png" },
  { id: 6, imgUrl: "feature6.png" },
  { id: 7, imgUrl: "feature7.png" },
  { id: 10, imgUrl: "feature10.png" },
  { id: 14, imgUrl: "feature14.png" }
]);

export const logoData = createData('Logo', [
  { id: 1, imgUrl: "logo1.png" },
  { id: 14, imgUrl: "logo14.png" }
]);

export const pricingData = createData('Pricing', [
  { id: 1, imgUrl: "pricing1.png" },
  { id: 2, imgUrl: "pricing2.png" },
  { id: 3, imgUrl: "pricing3.png" },
  { id: 6, imgUrl: "pricing6.png" },
  { id: 7, imgUrl: "pricing7.png" },
  { id: 11, imgUrl: "pricing11.png" }
]);

export const projectData = createData('Project', [
  { id: 1, imgUrl: "project1.png" },
  { id: 2, imgUrl: "project2.png" },
  { id: 3, imgUrl: "project3.png" },
  { id: 4, imgUrl: "project4.png" },
  { id: 11, imgUrl: "project11.png" },
  { id: 14, imgUrl: "project14.png" }
]);

export const teamData = createData('Team', [
  { id: 1, imgUrl: "team1.png" },
  { id: 2, imgUrl: "team2.png" },
  { id: 5, imgUrl: "team5.png" },
  { id: 10, imgUrl: "team10.png" }
]);

export const statisticData = createData('Statistic', [
  { id: 1, imgUrl: "statistic1.png" },
  { id: 2, imgUrl: "statistic2.png" },
  { id: 7, imgUrl: "statistic7.png" }
]);

export const itemData = createData('Item', [
  { id: 1, imgUrl: "item1.png" },
  { id: 2, imgUrl: "item2.png" },
  { id: 14, imgUrl: "item14.png" }
]);

export const filterItemData = createData('FilterItem', [
  { id: 6, imgUrl: "filterItem6.png" },
]);

export const orderPopupData = createData('OrderPopup', [
  { id: 10, imgUrl: "orderPopup10.png" },
  { id: 14, imgUrl: "orderPopup14.png" }
]);

export const navData = createData('Navbar', [
  { id: 1, imgUrl: nav1 },
  { id: 3, imgUrl: nav3 },
  { id: 4, imgUrl: nav4 },
  { id: 5, imgUrl: nav5 },
  { id: 6, imgUrl: nav6 },
  { id: 7, imgUrl: nav7 },
  { id: 8, imgUrl: nav8 },
  { id: 10, imgUrl: nav10 },
  { id: 14, imgUrl: nav14 },
  { id: 16, imgUrl: nav16 },
  { id: 18, imgUrl: nav18 }
]);
export const testimonialData = createData('Testimonial', [
  { id: 1, imgUrl: "testimonial1.png" },
  { id: 2, imgUrl: "testimonial2.png" },
  { id: 3, imgUrl: "testimonial3.png" },
  { id: 6, imgUrl: "testimonial6.png" },
  { id: 7, imgUrl: "testimonial7.png" },
  { id: 10, imgUrl: "testimonial10.png" },
  { id: 11, imgUrl: "testimonial11.png" }
]);

export const serviceData = createData('Service', [
  { id: 1, imgUrl: "service1.png" },
  { id: 2, imgUrl: "service2.png" },
  { id: 5, imgUrl: "service5.png" },
  { id: 7, imgUrl: "service7.png" },
  { id: 10, imgUrl: "service10.png" },
  { id: 11, imgUrl: "service11.png" },
  { id: 14, imgUrl: "service14.png" }
]);


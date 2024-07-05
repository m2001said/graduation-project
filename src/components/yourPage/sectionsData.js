import nav12 from "../../assets/images/sections/nav12.webp";
import nav16 from "../../assets/images/sections/nav16.webp";
import nav18 from "../../assets/images/sections/nav18.webp";
import nav14 from "../../assets/images/sections/nav14.webp";
import nav4 from "../../assets/images/sections/nav4.webp";
import nav5 from "../../assets/images/sections/nav5.webp";
import nav10 from "../../assets/images/sections/nav10.webp";

import hero2 from "../../assets/images/sections/hero2.png";
import hero8 from "../../assets/images/sections/hero8.webp";
import hero9 from "../../assets/images/sections/hero9.png";
import hero12 from "../../assets/images/sections/hero12.webp";
import hero13 from "../../assets/images/sections/hero13.png";
import hero16 from "../../assets/images/sections/hero16.webp";
import hero17 from "../../assets/images/sections/hero17.png";
import hero18 from "../../assets/images/sections/hero18.webp";
import hero19 from "../../assets/images/sections/hero19.png";
import hero14 from "../../assets/images/sections/hero14.webp";
import hero4 from "../../assets/images/sections/hero4.webp";
import hero5 from "../../assets/images/sections/hero5.webp";
import hero10 from "../../assets/images/sections/hero10.webp";

// Projects
import project8 from "../../assets/images/sections/projects8.webp";
import project9 from "../../assets/images/sections/projects9.png";
import project16 from "../../assets/images/sections/projects16.webp";
import project18 from "../../assets/images/sections/projects18.webp";
import project14 from "../../assets/images/sections/projects14.webp";
import project4 from "../../assets/images/sections/projects4.webp";

// About
import about8 from "../../assets/images/sections/about8.webp";
import about9 from "../../assets/images/sections/about9.png";
import about12 from "../../assets/images/sections/about12.webp";
import about13 from "../../assets/images/sections/about13.png";
import about16 from "../../assets/images/sections/about16.webp";
import about17 from "../../assets/images/sections/about17.png";

// Contact
import contact2 from "../../assets/images/sections/contact2.png";
import contact8 from "../../assets/images/sections/contact8.webp";
import contact9 from "../../assets/images/sections/contact9.png";
import contact13 from "../../assets/images/sections/contact13.png";
import contact18 from "../../assets/images/sections/contact18.webp";
import contact4 from "../../assets/images/sections/contact4.webp";

// Feature
import feature9 from "../../assets/images/sections/feature9.png";
import feature12 from "../../assets/images/sections/feature12.webp";
import feature13 from "../../assets/images/sections/feature13.png";
import feature14 from "../../assets/images/sections/feature14.webp";
import feature16 from "../../assets/images/sections/feature16.webp";
import feature17 from "../../assets/images/sections/feature17.png";
import feature18 from "../../assets/images/sections/feature18.webp";
import feature4 from "../../assets/images/sections/feature4.webp";
import feature5 from "../../assets/images/sections/feature5.webp";
import feature10 from "../../assets/images/sections/feature10.webp";

// Footer
import footer13 from "../../assets/images/sections/footer13.png";
import footer16 from "../../assets/images/sections/footer16.webp";
import footer18 from "../../assets/images/sections/footer18.webp";
import footer14 from "../../assets/images/sections/footer14.webp";
import footer5 from "../../assets/images/sections/footer5.webp";
import footer10 from "../../assets/images/sections/footer10.webp";


// Services
import services2 from "../../assets/images/sections/services2.png";
import services8 from "../../assets/images/sections/services8.webp";
import services9 from "../../assets/images/sections/services9.png";
import services18 from "../../assets/images/sections/services18.webp";
import services5 from "../../assets/images/sections/services5.webp";
import services10 from "../../assets/images/sections/services10.webp";

// Team
import team9 from "../../assets/images/sections/team9.png";
import team12 from "../../assets/images/sections/team12.webp";
import team5 from "../../assets/images/sections/team5.webp";
import team10 from "../../assets/images/sections/team10.webp";

// Testimonials
import testimonials2 from "../../assets/images/sections/testimonials2.png";
import testimonials9 from "../../assets/images/sections/testimonials9.png";
import testimonials16 from "../../assets/images/sections/testimonials16.webp";
import testimonials18 from "../../assets/images/sections/testimonials18.webp";
import testimonials10 from "../../assets/images/sections/testimonials10.webp";

const createData = (type, data) => {
  return data.map((item) => ({
    id: item.id,
    name: `${type}${item.id}`,
    image: item.imgUrl,
    type,
  }));
};

export const navData = createData("Navbar", [
  { id: 12, imgUrl: nav12 },
  { id: 16, imgUrl: nav16 },
  { id: 18, imgUrl: nav18 },
  { id: 14, imgUrl: nav14 },
  { id: 4, imgUrl: nav4 },
  { id: 5, imgUrl: nav5 },
  { id: 10, imgUrl: nav10 },
]);

export const heroData = createData("Hero", [
  { id: 2, imgUrl: hero2 },
  { id: 8, imgUrl: hero8 },
  { id: 9, imgUrl: hero9 },
  { id: 12, imgUrl: hero12 },
  { id: 13, imgUrl: hero13 },
  { id: 16, imgUrl: hero16 },
  { id: 17, imgUrl: hero17 },
  { id: 18, imgUrl: hero18 },
  { id: 19, imgUrl: hero19 },
  { id: 14, imgUrl: hero14 },
  { id: 4, imgUrl: hero4 },
  { id: 5, imgUrl: hero5 },
  { id: 10, imgUrl: hero10 },
]);

export const featureData = createData("Feature", [
  { id: 9, imgUrl: feature9 },
  { id: 12, imgUrl: feature12 },
  { id: 13, imgUrl: feature13 },
  { id: 16, imgUrl: feature16 },
  { id: 17, imgUrl: feature17 },
  { id: 18, imgUrl: feature18 },
  { id: 14, imgUrl: feature14 },
  { id: 4, imgUrl: feature4 },
  { id: 5, imgUrl: feature5 },
  { id: 10, imgUrl: feature10 },
]);

export const projectData = createData("Project", [
  { id: 8, imgUrl: project8 },
  { id: 9, imgUrl: project9 },
  { id: 16, imgUrl: project16 },
  { id: 18, imgUrl: project18 },
  { id: 14, imgUrl: project14 },
  { id: 4, imgUrl: project4 },
]);

export const serviceData = createData("Service", [
  { id: 2, imgUrl: services2 },
  { id: 8, imgUrl: services8 },
  { id: 9, imgUrl: services9 },
  { id: 18, imgUrl: services18 },
  { id: 5, imgUrl: services5 },
  { id: 10, imgUrl: services10 },
]);

export const contactData = createData("Contact", [
  { id: 2, imgUrl: contact2 },
  { id: 8, imgUrl: contact8 },
  { id: 9, imgUrl: contact9 },
  { id: 13, imgUrl: contact13 },
  { id: 18, imgUrl: contact18 },
  { id: 4, imgUrl: contact4 },
]);


export const aboutData = createData("About", [
  { id: 8, imgUrl: about8 },
  { id: 9, imgUrl: about9 },
  { id: 12, imgUrl: about12 },
  { id: 13, imgUrl: about13 },
  { id: 16, imgUrl: about16 },
  { id: 17, imgUrl: about17 },
]);

export const footerData = createData("Footer", [
  { id: 13, imgUrl: footer13 },
  { id: 16, imgUrl: footer16 },
  { id: 18, imgUrl: footer18 },
  { id: 14, imgUrl: footer14 },
  { id: 5, imgUrl: footer5 },
  { id: 10, imgUrl: footer10 },
]);


export const teamData = createData("Team", [

  { id: 9, imgUrl: team9 },
  { id: 12, imgUrl: team12 },
  { id: 5, imgUrl: team5 },
  { id: 10, imgUrl: team10 },
]);


export const testimonialData = createData("Testimonial", [
  { id: 2, imgUrl: testimonials2 },
  { id: 9, imgUrl: testimonials9 },
  { id: 16, imgUrl: testimonials16 },
  { id: 18, imgUrl: testimonials18 },
  { id: 10, imgUrl: testimonials10 },
]);

import {
  heroData,
  footerData,
  navData,
  contactData,
  featureData,
  projectData,
  serviceData,
  teamData,
  testimonialData,
  aboutData,
} from "./sectionsData";

const sectionDataMap = {
  'navbar': navData,
  'hero': heroData,
  'footer': footerData,
  'contact': contactData,
  'features': featureData,
  'projects': projectData,
  'services': serviceData,
  'team': teamData,
  'testimonials': testimonialData,
  'about': aboutData,
};

export const getSectionData = (section) => sectionDataMap[section] || [];

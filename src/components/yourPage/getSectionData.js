import {
    heroData,
    ctaData,
    footerData,
    navData,
    contactData,
    featureData,
    logoData,
    pricingData,
    projectData,
    serviceData,
    teamData,
    statisticData,
    itemData,
    cartItemData,
    filterItemData,
    orderPopupData,
    testimonialData
  } from "./sectionsData";

const sectionDataMap = {
    'navbar': navData,
    'hero': heroData,
    'footer': footerData,    
    'cta': ctaData,
    'contact': contactData,
    'features': featureData,
    'logos': logoData,
    'pricing': pricingData,
    'projects': projectData,
    'services': serviceData,
    'team': teamData,
    'statistics': statisticData,
    'items': itemData,
    'cartItem': cartItemData,
    'filterItem': filterItemData,
    'orderPopup': orderPopupData,
    'testimonials': testimonialData,
  };
  
export const getSectionData = (section) => sectionDataMap[section] || [];
  
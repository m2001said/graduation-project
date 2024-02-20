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
    'nav': navData,
    'hero': heroData,
    'footer': footerData,    
    'cta': ctaData,
    'contact': contactData,
    'feature': featureData,
    'logo': logoData,
    'pricing': pricingData,
    'project': projectData,
    'service': serviceData,
    'team': teamData,
    'statistic': statisticData,
    'item': itemData,
    'cartItem': cartItemData,
    'filterItem': filterItemData,
    'orderPopup': orderPopupData,
    'testimonial': testimonialData,
  };
  
export const getSectionData = (section) => sectionDataMap[section] || [];
  
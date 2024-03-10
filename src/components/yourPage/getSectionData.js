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
  'navbars': navData,
  'heros': heroData,
  'footers': footerData,
  'ctas': ctaData,
  'contacts': contactData,
  'features': featureData,
  'logos': logoData,
  'pricings': pricingData,
  'projects': projectData,
  'services': serviceData,
  'teams': teamData,
  'statistics': statisticData,
  'items': itemData,
  'cartItems': cartItemData,
  'filterItems': filterItemData,
  'orderPopups': orderPopupData,
  'testimonials': testimonialData,
};

export const getSectionData = (section) => sectionDataMap[section] || [];

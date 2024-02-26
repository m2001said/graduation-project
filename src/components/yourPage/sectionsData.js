const createData = (type, ids, images) => {
  return ids.map((id, index) => ({
    id: id,
    name: `${type}${id}`,
    image: images[index],
    type
  }));
};

const heroImages = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
];

const ctaImages = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272889/jammal_photos/t85k0fzxmmb1aiujd9nh.jpg",
];

const contactImages = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708271703/jammal_photos/mwuj5ajidibzp8vwdtgq.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708271703/jammal_photos/mwuj5ajidibzp8vwdtgq.jpg",
];

const footerImages = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272335/jammal_photos/uvnk7f9iagslzetz7ws5.jpg",
];

const navImages = [
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
  "https://res.cloudinary.com/duc04fwdb/image/upload/v1708272486/jammal_photos/ciuemjhixdpin3mmgkfn.jpg",
];
export const cartItemData = createData('CartItem', [6], navImages);
export const heroData = createData('Hero', [1, 2, 3, 4, 5, 6, 7, 10, 11], heroImages);
export const ctaData = createData('Cta', [1, 2, 3, 4, 5, 6, 7, 10, 11], ctaImages);
export const contactData = createData('Contact', [4, 11], contactImages);
export const footerData = createData('Footer', [1, 2, 3, 6, 7, 10, 11, 14], footerImages);
export const featureData = createData('Feature', [1, 2, 3, 4, 5, 6, 7, 10, 14], navImages);
export const logoData = createData('Logo', [1, 14], navImages);
export const pricingData = createData('Pricing', [1, 2, 3, 6, 7, 11], navImages);
export const projectData = createData('Project', [1, 2, 3, 4, 11, 14, 11], navImages);
export const teamData = createData('Team', [1, 2, 5, 10], navImages);
export const statisticData = createData('Statistic', [1, 2, 7], navImages);
export const itemData = createData('Item', [1, 2, 14], navImages);
export const filterItemData = createData('FilterItem', [6], navImages);
export const orderPopupData = createData('OrderPopup', [10, 14], navImages);
export const navData = createData('Navbar', [1, 2, 3, 6, 7, 10, 11, 14], navImages);
export const testimonialData = createData('Testimonial', [1, 2, 3, 6, 7, 10, 11], navImages);
export const serviceData = createData('Service', [1, 2, 5, 7, 10, 11, 14], navImages);

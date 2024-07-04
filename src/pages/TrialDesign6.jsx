import "../assets/css/globals6.css";
import Navbar6 from "../components/sections/navbars/navbar6/Navbar6";
import Hero6 from "../components/sections/heros/hero6/Hero6";
import CartItems6 from "../components/sections/cartItems/cartItems6/CartItems6";
import Feature6 from "../components/sections/features/feature6/Feature6";
import FilterItems6 from "../components/sections/filterItems/filterItem6/FilterItem6";
import Testimonials6 from "../components/sections/testimonials/testimonials6/Testimonials6";
import Cta6 from "../components/sections/ctas/cta6/Cta6";
import Footer6 from "../components/sections/footers/footer6/Footer6";
import TrialDesign from "./TrialDesign";

const TrialDesign6 = () => {
  const componentMapping = {
    features: Feature6,
    testimonials: Testimonials6,
    products: FilterItems6,
    menu: CartItems6,
    cta: Cta6,
  };
  return <TrialDesign componentMapping={componentMapping} HeroComponent={Hero6} NavbarComponent={Navbar6} FooterComponent={Footer6} template={6} />;
};

export default TrialDesign6;

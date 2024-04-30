import "../assets/css/globals6.css";
import Navbar6 from "../components/sections/navbars/navbar6/Navbar6";
import Hero6 from "../components/sections/heros/hero6/Hero6";
import CartItems6 from "../components/sections/cartItems/cartItems6/CartItems6";
import Feature6 from "../components/sections/features/feature6/Feature6";
import FilterItems6 from "../components/sections/filterItems/filterItem6/FilterItem6";
import Testimonials6 from "../components/sections/testimonials/testimonials6/Testimonials6";
import Cta6 from "../components/sections/ctas/cta6/Cta6";
import Footer6 from "../components/sections/footers/footer6/Footer6";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const TrialDesign6 = () => {
  const state = useSelector((state) => state.template6);
  const colors = state.colors;
  useEffect(() => {
    document.documentElement.style = "";

    for (let index = 0; index < colors.templateColors.length; index++) {
      document.documentElement.style.setProperty(`--color${index + 1}`, colors.templateColors[index]);
    }
  }, []);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    features: Feature6,
    testimonials: Testimonials6,
    products: FilterItems6,
    menu: CartItems6,
    cta: Cta6,
  };
  return (
    <>
      <Navbar6 />
      <Hero6 />
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
      <Footer6 />
    </>
  );
};

export default TrialDesign6;

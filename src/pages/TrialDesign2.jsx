import "../assets/css/globals2.css";
import Services2 from "../../src/components/sections/services/services2/Service2";
import Navbar2 from "../components/sections/navbars/navbar2/Navbar2";
import Hero2 from "./../components/sections/heros/hero2/Hero2";
import Project2 from "../components/sections/projects/projects2/Project2";
import Testimonials2 from "../components/sections/testimonials/testimonials2/Testimonials2";
import ContactUs2 from "../components/sections/contactUs/contactUs2/ContactUs2";
import Footer2 from "../../src/components/sections/footers/footer2/Footer2";
import { useSelector } from "react-redux";
const TrialDesign2 = () => {
  const state = useSelector((state) => state.template2);
  const reorderedComponents = Object.keys(state);

  const componentMapping = {
    navbar: Navbar2,
    hero: Hero2,
    services: Services2,
    testimonials: Testimonials2,
    projects: Project2,
    contact: ContactUs2,
    footer: Footer2,
  };

  return (
    <div className="trialdesign2">
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
    </div>
  );
};

export default TrialDesign2;

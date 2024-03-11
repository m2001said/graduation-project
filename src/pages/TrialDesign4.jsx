import "../assets/css/globals4.css";
import Navbar4 from "../components/sections/navbars/navbar4/Navbar4";
import Hero4 from "../components/sections/heros/hero4/Hero4";
import Project4 from "../components/sections/projects/projects4/Project4";
import Feature4 from "../components/sections/features/feature4/Feature4";
import Contact4 from "../components/sections/contacts/contact4/Contact4";
import Cta4 from "../components/sections/ctas/cta4/Cta4";
import Footer4 from "../components/sections/footers/footer4/Footer4";

import { useSelector } from "react-redux";
const TrialDesign4 = () => {
  const state = useSelector((state) => state.template4);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    navbar: Navbar4,
    hero: Hero4,
    features: Feature4,
    projects: Project4,
    contact: Contact4,
    cta: Cta4,
    footer: Footer4,
  };
  return (
    <div>
      {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
    </div>
  );
};

export default TrialDesign4;

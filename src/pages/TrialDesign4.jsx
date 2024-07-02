import "../assets/css/globals4.css";
import Navbar4 from "../components/sections/navbars/navbar4/Navbar4";
import Hero4 from "../components/sections/heros/hero4/Hero4";
import Project4 from "../components/sections/projects/projects4/Project4";
import Feature4 from "../components/sections/features/feature4/Feature4";
import Contact4 from "../components/sections/contacts/contact4/Contact4";
import Cta4 from "../components/sections/ctas/cta4/Cta4";
import Footer4 from "../components/sections/footers/footer4/Footer4";
import TrialDesign from "./TrialDesign";
const TrialDesign4 = () => {
  const componentMapping = {
    features: Feature4,
    projects: Project4,
    contact: Contact4,
    cta: Cta4,
  };
  return (
    <div>
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero4} NavbarComponent={Navbar4} FooterComponent={Footer4} template={"template4"} />;
    </div>
  );
};

export default TrialDesign4;

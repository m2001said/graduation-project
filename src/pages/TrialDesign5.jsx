import "../assets/css/globals5.css";
import Navbar5 from  "../components/sections/navbars/navbar5/Navbar5";
import Hero5 from "../components/sections/heros/hero5/Hero5";
import Feature5_1 from "../components/sections/features/feature5_1/Feature5_1";
import Services5 from "../components/sections/services/services5/Services5";
import Feature5_2 from "../components/sections/features/feature5_2/Feature5_2";
import Teams5 from "../components/sections/teams/teams5/Teams5";
import  Cta5  from "../components/sections/ctas/cta5/Cta5";
import Footer5 from "../components/sections/footers/footer5/Footer5";
import { useSelector } from "react-redux";

const TrialDesign5 = () => {
  const state = useSelector((state) => state.template5);
  const reorderedComponents = Object.keys(state);
  const componentMapping = {
    navbar: Navbar5,
    hero: Hero5,
    services: Services5,
    features1: Feature5_1,
    features2: Feature5_2,
    team: Teams5,
    cta: Cta5,
    footer: Footer5,
  };

  return (
    <div className="design5">
           {reorderedComponents.map((_component) => {
        const Component = componentMapping[_component];
        return Component && <Component key={_component} />;
      })}
    </div>
  );
};

export default TrialDesign5;

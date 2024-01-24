import "../assets/css/globals5.css";
import Navbar5 from  "../components/sections/navbars/navbar5/Navbar5";
import Hero5 from "../components/sections/heros/hero5/Hero5";
import Feature5_1 from "../components/sections/features/feature5_1/Feature5_1";
import Services5 from "../components/sections/services/services5/Services5";
import Feature5_2 from "../components/sections/features/feature5_2/Feature5_2";
import Teams5 from "../components/sections/teams/teams5/Teams5";
import  Cta5  from "../components/sections/ctas/cta5/Cta5";
import Footer5 from "../components/sections/footers/footer5/Footer5";

const TrialDesign5 = () => {
  return (
    <div className="design5">
      <Navbar5 />
      <Hero5 />
      <Feature5_1 />
      <Services5 />
      <Feature5_2 />
      <Teams5 />
      <Cta5 />
      <Footer5 />
    </div>
  );
};

export default TrialDesign5;

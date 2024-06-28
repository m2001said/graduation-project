import "../assets/css/globals7.css";
import styles from "../components/sections/heros/hero7/styles7/style";
import Navbar7 from "../components/sections/navbars/navbar7/Navbar7";
import Hero7 from "../components/sections/heros/hero7/Hero7";
import Stats7 from "../components/sections/statistics/statistics7/Statistics7";
import Feature7 from "../components/sections/features/feature7/Feature7";
import Characteristics7 from "../components/sections/features/feature72/Characteristics7";
import PaymentMethods7 from "../components/sections/features/feature73/PaymentMethods7";
import Testimonials7 from "../components/sections/testimonials/testimonials7/Testimonials7";
import Logos7 from "../components/sections/logos/logos7/Logos7";
import Cta7 from "../components/sections/ctas/cta7/Cta7";
import Footer7 from "../components/sections/footers/footer7/Footer7";
import TrialDesign from "./TrialDesign";

const TrialDesign7 = () => {
  const componentMapping = {
    stats: Stats7,
    features: Feature7,
    characteristics: Characteristics7,
    paymentMethods: PaymentMethods7,
    testimonials: Testimonials7,
    logos: Logos7,
    cta: Cta7,
  };

  return (
    <div className="TrialDesign7">
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero7} NavbarComponent={Navbar7} footerComponent={Footer7} template={"template7"} />;
    </div>
  );
};

export default TrialDesign7;

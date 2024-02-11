import Testimonials9 from "../components/sections/testimonials/testimonials9/Testimonials9";
import "../assets/css/globals9.css";
import Hero9 from "../components/sections/heros/hero9/Hero9";
import About9 from "../components/sections/aboutUS/aboutUs9/About9";
import Pricing9 from "../components/sections/pricings/pricing9/pricing9";
import Services9 from "../components/sections/services/services9/Services9";
import Footer9 from "../components/sections/footers/footer9/Footer9";
import Teams9 from "../components/sections/teams/teams9/Teams9";
import Feature9 from "../components/sections/features/feature9/Feature9";
import Contact9 from "../components/sections/contactUs/contactUs9/Contact9";
const TrialDesign9 = () => {
  return (
    <div className="trialdesign9">
      <main>
        <Hero9 />
        <About9 />
        <Pricing9 />
        <Services9 />
        <Feature9 />
        <Teams9 />
        <Testimonials9 />
        <Contact9 />
      </main>
      <Footer9 />
    </div>
  );
};

export default TrialDesign9;

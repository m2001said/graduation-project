import "../assets/css/globals11.css";
import React from "react";
import Navbar11 from "../components/sections/navbars/navbar11/Navbar11";
import Hero11 from "../components/sections/heros/hero11/Hero11";
import Services11 from "../components/sections/services/services11/Services11";
import Services112 from "../components/sections/services/services112/Services112";
import Testimonials11 from "../components/sections/testimonials/testimonials11/Testimonials11";
import Footer11 from "../components/sections/footers/footer11/Footer11";
import Pricings11 from "../components/sections/pricings/pricing11/Pricing11";
import Project11 from "../components/sections/projects/project11/Project11";
import Cta11 from "../components/sections/ctas/cta11/Cta11";
import Contact11 from "../components/sections/contacts/contact11/Contact11";

const TrialDesign11 = () => {
  // const state = useSelector((state) => state.template1);
  // const reorderedComponents = Object.keys(state);
  // const componentMapping = {
  //   hero: Hero11,
  //   services: Services11,
  //   services: Services11,
  //   features: Featrue11,
  //   testimonials: Testimonials11,
  //   logos: Logos11,
  //   projects: Project11,
  //   statistics: Statistics11,
  //   items: Items11,
  //   team: Team11,
  //   pricing: Pricing11,
  //   cta: Cta11,
  //   footer: Footer11,
  // };
  return (
    <div>
      <Navbar11 />
      <main className="main">
        <Hero11 />
        <Services11 />
        <Services112 />
        <Cta11 />
        <Project11 />
        <Pricings11 />
        <Testimonials11 />
        <Footer11 />
        <Contact11 />
        {/* {reorderedComponents.map((_component) => {
          const Component = componentMapping[_component];
          return Component && <Component key={_component} />;
        })} */}
      </main>
    </div>
  );
};

export default TrialDesign11;

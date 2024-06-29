import React from "react";
import "../assets/css/globals16.css";
import Navbar16 from "../components/sections/navbars/navbar16/Navbar16";
import Hero16 from "../components/sections/heros/hero16/Hero16";
import About16 from "../components/sections/abouts/about16/About16";
import Feature16 from "../components/sections/features/feature16/Feature16";
import Gallery16 from "../components/sections/gallerys/gallery16/Gallery16";
// import Menu16 from "../components/sections/menus/menu16/Menu16";
import Choose16 from "../components/sections/chooses/choose16/Choose16";
import Statistics16 from "../components/sections/statistics/statistics16/Statistics16";
import Offer16 from "../components/sections/offers/offer16/Offer16";
import Team16 from "../components/sections/teams/team16/Team16";
import Reservation16 from "../components/sections/reservations/reservation16/Reservation16";
import Testimonials16 from "../components/sections/testimonials/testimonials16/Testimonials16";
import Footer16 from "../components/sections/footers/footer16/Footer16";
import TrialDesign from "./TrialDesign";

const TrialDesign16 = () => {
  const componentMapping = {
    about: About16,
    Feature: Feature16,
    Gallery: Gallery16,
    // Menu: Menu16,
    Choose: Choose16,
    Statistics: Statistics16,
    Offer: Offer16,
    Team: Team16,
    Reservation: Reservation16,
    Testimonials: Testimonials16,
  };
  return (
    <div className="body16 ">
      <TrialDesign componentMapping={componentMapping} HeroComponent={Hero16} NavbarComponent={Navbar16} FooterComponent={Footer16} template={"template16"} />
    </div>
  );
};

export default TrialDesign16;

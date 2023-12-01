import React from "react";
import Team1 from "../components/sections/teams/teams1/Teams1"
import Pricing from "../components/sections/pricings/pricing1/Pricing1"
import Cta1 from "../components/sections/ctas/cta1/Cta1"
import Footer1 from "../components/sections/footers/footer1/Footer1"


const TrialDesign = () => {
  return (
    <div>
      <h1>صفحة التصميم الاولي ، ضيفوا ملفاتكم بترتيب التصميم لو سمحتم</h1>
      <p>رجب وحسني والسيد سليمان</p>
      <Team1/>
      <Pricing/>
      <Cta1/>
      <Footer1/>
    </div>
  );
};

export default TrialDesign;

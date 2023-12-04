import React from "react";
import Hero from "../components/sections/heros/hero1/Hero1";
import Services from "../components/sections/services/services1/Services1";
import App from "../../src/App";
import Project1 from '../components/sections/projects/projects1/Project1' 
import Articles from '../components/sections/Items/items1/Items1' 
import Statictics1 from '../components/sections/statistics/statistics1/Statictics1' 



const TrialDesign = () => {
  return (
    <div>
      <Hero/> 
      <Services/> 
      <h1>صفحة التصميم الاولي ، ضيفوا ملفاتكم بترتيب التصميم لو سمحتم</h1>
      <p>رجب وحسني والسيد سليمان</p>
    </div>
    <>
<Project1 />
<Statictics1 />
<Articles /> 
   </>
  );
};

export default TrialDesign;

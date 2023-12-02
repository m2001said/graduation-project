// Section.jsx
import React from 'react';
import '../mainPage/index.css'; 
import myImage from '../../assets/images/img2.png';

const Section = () => {
  return (
    <>
      <section className="section">
        <div className="section-content">
          <img src={myImage} alt="Description" className="section-image" />
          <p>
            Welcome to the website creation platform! Build your<br/>
            website easily and quickly using artificial <br/>
            intelligence. Or start creating your site youtself with your <br/>
            chosen elements. <br/>
            Create a stunning  website for your company or project <br/>
            with simplicity and professionalism. Choose from pre-<br/>
            made templates or design a custom layout according to<br/>
            your needs. Let creativity breathe life into your new<br/>
            website now!
          </p>
        </div>
      </section>
      <section className="section">
        <div className="section-content2">
          <h1>
            Make Your Website
          </h1>
        </div>
      </section>
    </>
  );
};

export default Section;

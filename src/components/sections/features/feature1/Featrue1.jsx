import "/features.css";
import React from 'react';
import PhotoImage from "./Photo1.jpg";

const Feature1 = () => {
 
/*
  return (
    <div >style={containerStyle}>
      <div style={contentStyle}>
        <div style={subContentStyle}>
          <div style={textStyle}>
            <h1>We Create The Art Of Stylish Living Stylishly</h1>
          </div>
          <div>
            <p>It is a long established fact that a reader will be distracted by the of readable content of a page
              when lookings at its layouts the points of using
              that it has a more-or-less normal.
            </p>
          </div>
        </div>
      </div>
      <div >
        <div style={callStyle}>
          <div style={callIconStyle}>
            <div style={ellipseStyle}></div>
            <div style={{ ...ellipseStyle, borderRadius: '9999px', background: '#F4F0EC' }}>
              <div style={callNumberStyle}>01010351108</div>
              <div style={callUsStyle}>Call US Anytime</div>
            </div>
          </div>
        </div>
      </div>
      <div style={buttonContainerStyle}>
        <div style={buttonStyle}>
          <div style={getFreeEstimateStyle}>
            <div style={getFreeEstimateTextStyle}>Get Free Estimate</div>
            <div style={vectorStyle}></div>
          </div>
        </div>
      </div>
      <div style={imageContainerStyle}>
        <div style={imageBackgroundStyle}></div>
        <img style={photoStyle} src={PhotoImage} alt='' />
      </div>
    </div>
  );
};

export default Feature1;

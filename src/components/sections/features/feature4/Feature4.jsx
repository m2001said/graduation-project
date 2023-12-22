import React, { useState } from "react";
import { Accordion, AccordionItem, AccordionItemHeading, AccordionItemButton, AccordionItemPanel } from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./feature4.css";
import { useSelector } from "react-redux";

const Feature4 = () => {
  const { feature4 } = useSelector((state) => state.template4);

  return (
    <section id="value" className="v-wrapper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* left side */}
        <div className="v-left">
          <div className="image-container">
            <img src={feature4.imgUrl} alt="image of value" />
          </div>
        </div>

        {/* right */}
        <div className="flexColStart v-right">
          <span className="orangeText">{feature4.title}</span>

          <span className="primaryText">{feature4.sub_title}</span>

          <span className="secondaryText">
            {feature4.description1}
            <br />
            {feature4.description2}
          </span>

          <Accordion className="accordion" allowMultipleExpanded={false} preExpanded={[0]}>
            {feature4.data.map((item, i) => {
              // eslint-disable-next-line react-hooks/rules-of-hooks
              const [className, setClassName] = useState(null);

              const handleAccordionState = () => {
                setClassName((prevClassName) => (prevClassName === "collapsed" ? "expanded" : "collapsed"));
              };

              return (
                <AccordionItem className={`accordionItem ${className}`} uuid={i} key={i}>
                  <AccordionItemHeading>
                    <AccordionItemButton className="flexCenter accordionButton" onClick={handleAccordionState}>
                      <div className="flexCenter icon">✔</div>
                      <span className="primaryText">{feature4.data.heading}</span>
                      <div className="flexCenter icon">🔻</div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{feature4.data[i].detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Feature4;

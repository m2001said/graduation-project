import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {  updateSectionTitle, updateSectionSubTitle, updateSectionDescription } from "../../../features/testimonialData/testimonialSlice";
import { FaCaretDown } from "react-icons/fa";

const TestimonialController = () => {
  const testimonialData = useSelector((state) => state.testimonialData);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  return (
    <div className="controller">
      <div className="flex-between" onClick={() => setOpen(!open)}>
        <h3 className="controller-name">{testimonialData.sectionName}</h3>
        <FaCaretDown fontSize={23} cursor={"pointer"} />
      </div>
      {open && (
        <>
          <div className="controller-field">
            <label className=" controller-label">title</label>
            <input type="text" className="input-controller" value={testimonialData.sectionTitle} onChange={(e) => dispatch(updateSectionTitle(e.target.value))} />
          </div>
          <div className="controller-field">
            <label className=" controller-label">sub title</label>
            <input
              type="text"
              className="input-controller"
              value={testimonialData.sectionSubTitle}
              onChange={(e) => dispatch(updateSectionSubTitle(e.target.value))}
            />
          </div>
          <div className="controller-field">
            <label className=" controller-label">description</label>
            <input
              type="text"
              className="input-controller"
              value={testimonialData.sectionDescription}
              onChange={(e) => dispatch(updateSectionDescription(e.target.value))}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default TestimonialController;
